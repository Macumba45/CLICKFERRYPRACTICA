'use client'

import { FC, memo, useState, useEffect } from 'react'
import { CardContainer, MainContainer } from './styles'
import TravelBooking from './componets/TravelBooking'
import SelectTravel from './componets/SelectTravel'
import { Departure } from './types'

const Home: FC = () => {
    const date = new Date()
    const [showOffers, setShowOffers] = useState<boolean>(false)
    const [route, setRoute] = useState<string>('ALGECEUT')
    const [time, setTime] = useState<string>(date.toISOString().split('T')[0])
    const [adults, setAdults] = useState<number>(1)
    const [children, setChildren] = useState<number>(0)
    const [infants, setInfants] = useState<number>(0)
    const [dataTravels, setDataTravels] = useState<Departure[]>([]) // Cambio aquí
    const API_URL = `http://localhost:3000/departures?route=${route}&time=${time}`
    const API_URL_ACOMMODATION = `http://localhost:3000/departures/accomodations?route=${route}&time=${time}&adults=${adults}&children=${children}&babies=${infants}`

    const routes = [
        {
            value: 'ALGECEUT',
            from: 'Algeciras',
            to: 'Ceuta',
        },
        {
            value: 'CEUTALGE',
            from: 'Ceuta',
            to: 'Algeciras',
        },
    ]

    const getDepartures = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'GET',
            })
            if (response.ok) {
                const data = await response.json()
                setDataTravels(data)
            } else {
                throw new Error('Error en la petición')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getDepartures()
    }, [route, time])

    const handleBooking = () => {
        // Aquí puedes realizar la acción de reserva con los valores actuales
        setShowOffers(true)
        console.log('API_URL:', API_URL)
    }

    const handleReservation = () => {
        // Redirigir a la nueva URL
        console.log('API_URL_ACOMMODATION:', API_URL_ACOMMODATION)
        // window.location.href = API_URL_ACOMMODATION;
    }

    function formatDate(date: Date) {
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        })
    }
    return (
        <>
            <MainContainer>
                <TravelBooking
                    route={route}
                    departureDate={time}
                    adults={adults}
                    children={children}
                    infants={infants}
                    onFromChange={value => setRoute(value)}
                    onDepartureDateChange={value => setTime(value)}
                    onAdultsChange={value => setAdults(value)} // Aquí debes implementar la lógica
                    onChildrenChange={value => setChildren(value)} // Aquí debes implementar la lógica
                    onInfantsChange={value => setInfants(value)} // Aquí debes implementar la lógica
                    onBooking={handleBooking}
                />
            </MainContainer>
            <CardContainer>
                {showOffers &&
                    dataTravels.map(travel => {
                        const formattedTime = formatDate(new Date(travel.time))
                        const formattedArrival = formatDate(
                            new Date(travel.arrival)
                        )
                        return (
                            <>
                                <SelectTravel
                                    key={travel.time}
                                    from={
                                        routes.find(r => r.value === route)
                                            ?.from || ''
                                    }
                                    to={
                                        routes.find(r => r.value === route)
                                            ?.to || ''
                                    }
                                    time={formattedTime}
                                    arrival={formattedArrival}
                                    operator={travel.operator}
                                    ship={travel.ship}
                                    passengers={adults}
                                    onSelected={() => console.log(travel)}
                                />
                            </>
                        )
                    })}
            </CardContainer>
        </>
    )
}

export default memo(Home)
