import React, { FC } from 'react'
import { Departure } from '@/app/types'
import { Button, Typography } from '@mui/material'
import { Container } from './styles'

interface Props {
    from: string
    to: string
    arrival: string
    operator: string
    ship: string
    time: string
    passengers: number
    onSelected: () => void
}

const SelectTravel: FC<Props> = ({
    arrival,
    operator,
    ship,
    time,
    passengers,
    from,
    to,
    onSelected,
}) => {
    return (
        <Container>
            <Typography>Desde: {from}</Typography>
            <Typography>Hasta: {to}</Typography>
            <Typography>Salida: {time}</Typography>
            <Typography>Llegada: {arrival}</Typography>
            <Typography>Empresa: {operator}</Typography>
            <Typography>Barco: {ship}</Typography>
            <Typography>Pasajeros: {passengers}</Typography>
            <Button onClick={onSelected} variant="contained" color="primary">
                Reservar
            </Button>
        </Container>
    )
}

export default SelectTravel
