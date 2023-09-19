'use client'

import { FC, memo, useState, useEffect } from 'react'
import { CardContainer, MainContainer } from './styles'
import TravelBooking from './componets/TravelBooking'
import SelectTravel from './componets/SelectTravel'
import { Departure, Seats } from './types'
import Header from './componets/Header'
import logic from './logic'

const Home: FC = () => {
    const {
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
        seatsByTravel,
        dataSeats,
    } = logic()

    console.log(seatsByTravel)

    useEffect(() => {
        getDepartures()
    }, [route, time])

    const handleBooking = () => {
        setShowOffers(true)
    }

    return (
        <>
            <MainContainer>
                <Header />
                <TravelBooking
                    route={route}
                    departureDate={time}
                    adults={adults}
                    children={children}
                    infants={infants}
                    onFromChange={value => setRoute(value)}
                    onDepartureDateChange={value => setTime(value)}
                    onAdultsChange={value => setAdults(value)}
                    onChildrenChange={value => setChildren(value)}
                    onInfantsChange={value => setInfants(value)}
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
                            data={seatsByTravel[travel.time.slice(0, -1)]}
                            onSelected={() =>
                                getSeats(travel.time.slice(0, -1))
                            }
                        />
                    ))}
            </CardContainer>
        </>
    )
}

export default memo(Home)
