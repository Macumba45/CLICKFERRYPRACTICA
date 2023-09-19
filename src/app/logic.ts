import { useState } from 'react'
import { Departure, Seats } from './types'

export const logic = () => {
    const date = new Date()
    const [showOffers, setShowOffers] = useState<boolean>(false)
    const [route, setRoute] = useState<string>('ALGECEUT')
    const [time, setTime] = useState<string>(date.toISOString().split('T')[0])
    const [adults, setAdults] = useState<number>(1)
    const [children, setChildren] = useState<number>(0)
    const [infants, setInfants] = useState<number>(0)
    const [dataTravels, setDataTravels] = useState<Departure[]>([])
    const [dataSeats, setDataSeats] = useState<Seats[]>([])
    const [showSeats, setShowSeats] = useState<boolean>(false)
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
    const [seatsByTravel, setSeatsByTravel] = useState<{
        [key: string]: Seats[]
    }>({})

    const getSeats = async (selectedTravelTime: any) => {
        const reservationURL = `http://localhost:3000/departures/accomodations?route=${route}&time=${selectedTravelTime}&adults=${adults}&children=${children}&babies=${infants}`
        try {
            const response = await fetch(reservationURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                const responseData = await response.json()
                setShowSeats(true)
                setSeatsByTravel(prevState => ({
                    ...prevState,
                    [selectedTravelTime]: responseData,
                }))
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error)
        }
    }

    const getFinalPrice = async (
        selectedTravelTime: any,
        selectedSeatCode: any
    ) => {
        const seatPrice = `http://localhost:3000/departures/accomodations/seats?route=${route}&time=${selectedTravelTime}&adults=${adults}&children=${children}&babies=${infants}&accommodation=${selectedSeatCode}`
        try {
            const response = await fetch(seatPrice, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                const responseData = await response.json()
                console.log('Respuesta JSON:', responseData)
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error)
        }
    }

    function formatDate(date: any) {
        const dateObject = new Date(date)
        const dayOb = dateObject.getDate()
        const monthOb = new Intl.DateTimeFormat('es-ES', {
            month: 'short',
        }).format(dateObject)
        const formattedDateOb = `${dayOb} ${monthOb}`
        return formattedDateOb
    }

    const handleBooking = () => {
        setShowOffers(true)
    }

    return {
        showOffers,
        setShowOffers,
        route,
        setRoute,
        time,
        setTime,
        adults,
        setAdults,
        children,
        setChildren,
        infants,
        setInfants,
        dataTravels,
        getDepartures,
        getSeats,
        getFinalPrice,
        formatDate,
        routes,
        showSeats,
        setShowSeats,
        dataSeats,
        seatsByTravel,
        handleBooking,
    }
}

export default logic
