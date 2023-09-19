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
    const API_URL_DIRECT = `https://tadpole.clickferry.app/departures?route=${route}&time=${time}`
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
    }

    const handleReservation = async (selectedTravelTime: any) => {
        // Construir la URL con los parámetros actuales
        const reservationURL = `http://localhost:3000/departures/accomodations?route=${route}&time=${selectedTravelTime}&adults=${adults}&children=${children}&babies=${infants}`

        try {
            // Realizar la solicitud GET a la URL de reserva
            const response = await fetch(reservationURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                // Si la respuesta es exitosa, obtén la respuesta como JSON
                const responseData = await response.json()
                console.log('Respuesta JSON:', responseData)

                // Aquí puedes procesar la respuesta JSON como desees
                // Por ejemplo, actualizar el estado del componente con los datos
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error)
        }
    }

    function formatDate(date: any) {
        const dateObject = new Date(date)
        const dayOb = dateObject.getDate() // Esto obtiene el día (1-31)
        const monthOb = new Intl.DateTimeFormat('es-ES', {
            month: 'short',
        }).format(dateObject)
        // Formatea la fecha como "day of month"
        const formattedDateOb = `${dayOb} ${monthOb}`
        return formattedDateOb
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
                    dataTravels.map(travel => (
                        <SelectTravel
                            key={travel.time}
                            from={
                                routes.find(r => r.value === route)?.from || ''
                            }
                            to={routes.find(r => r.value === route)?.to || ''}
                            hourArrival={travel.time.slice(11, 16)}
                            hourDeparture={travel.arrival.slice(11, 16)}
                            departure={formatDate(travel.time.slice(0, -10))}
                            arrival={formatDate(travel.arrival.slice(0, -10))}
                            operator={travel.operator}
                            ship={travel.ship}
                            adults={adults}
                            children={children}
                            infants={infants}
                            onSelected={() =>
                                handleReservation(travel.time.slice(0, -1))
                            }
                        />
                    ))}
            </CardContainer>
        </>
    )
}

export default memo(Home)
