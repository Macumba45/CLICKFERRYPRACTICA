import React, { FC } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import {
    ContainerBoat,
    ContainerDivider,
    ContainerPassengers,
    DataContainer,
    MainContainer,
    Container,
    ContainerHR,
} from './styles'
import PlaceIcon from '@mui/icons-material/Place'
import FlagIcon from '@mui/icons-material/Flag'
import ScheduleIcon from '@mui/icons-material/Schedule'
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat'
import PersonIcon from '@mui/icons-material/Person'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation'

interface Props {
    from: string
    to: string
    arrival: string
    operator: string
    ship: string
    departure: string
    adults: number
    children: number
    infants: number
    hourArrival: string
    hourDeparture: string
    onSelected: () => void
}

const SelectTravel: FC<Props> = ({
    arrival,
    operator,
    ship,
    departure,
    adults,
    from,
    to,
    onSelected,
    children,
    infants,
    hourArrival,
    hourDeparture,
}) => {
    return (
        <MainContainer>
            <ContainerBoat>
                <Typography fontSize={30} marginRight={30}>
                    {operator}
                </Typography>
                <Box display="flex" alignItems="center">
                    <DirectionsBoatIcon
                        fontSize="small"
                        sx={{ ml: 30, mr: 1, color: '#004998' }}
                    />
                    <Typography fontWeight={300} fontSize={10}>
                        {' '}
                        {ship}
                    </Typography>
                </Box>
            </ContainerBoat>
            <DataContainer>
                <ContainerDivider>
                    <Box marginBottom={3} display="flex" alignItems="center">
                        <PlaceIcon sx={{ mr: 1, color: '#004998' }} />
                        <Typography sx={{ fontSize: '2rem' }}>
                            {from}
                        </Typography>
                        <Divider
                            sx={{ ml: 1, mr: 1 }}
                            orientation="vertical"
                            flexItem
                        />
                        <Typography>{departure}</Typography>
                    </Box>
                    <Box marginBottom={1} display="flex" alignItems="center">
                        <ScheduleIcon sx={{ mr: 1, color: 'grey' }} />
                        <Typography>{hourArrival}</Typography>
                    </Box>
                </ContainerDivider>
                <ContainerHR>
                    <Divider
                        sx={{
                            color: 'black',
                            width: 200,
                            border: '1px solid #004998',
                            borderRadius: 10,
                        }}
                        orientation="horizontal"
                        flexItem
                    />
                    <Typography sx={{ fontSize: '0.6rem', mt: 0.8 }}>
                        Duración: 1 hora{' '}
                    </Typography>
                </ContainerHR>
                <ContainerDivider>
                    <Box marginBottom={3} display="flex" alignItems="center">
                        <FlagIcon sx={{ mr: 1, color: '#004998' }} />
                        <Typography sx={{ fontSize: '2rem' }}>{to}</Typography>
                        <Divider
                            sx={{ ml: 1, mr: 1 }}
                            orientation="vertical"
                            flexItem
                        />
                        <Typography>{arrival}</Typography>
                    </Box>
                    <Box marginBottom={1} display="flex" alignItems="center">
                        <ScheduleIcon sx={{ mr: 1, color: 'grey' }} />
                        <Typography>{hourDeparture}</Typography>
                    </Box>
                </ContainerDivider>
            </DataContainer>

            <ContainerPassengers>
                <Box
                    marginRight={5}
                    marginLeft={5}
                    display="flex"
                    alignItems="center"
                >
                    <PersonIcon sx={{ color: 'white' }} />
                    <Typography sx={{ ml: 1, color: 'white' }}>
                        {' '}
                        {adults}
                    </Typography>
                </Box>
                <Box
                    marginRight={5}
                    marginLeft={5}
                    display="flex"
                    alignItems="center"
                >
                    <ChildCareIcon sx={{ color: 'white' }} />
                    <Typography sx={{ ml: 1, color: 'white' }}>
                        {children}
                    </Typography>
                </Box>
                <Box
                    marginRight={5}
                    marginLeft={5}
                    display="flex"
                    alignItems="center"
                >
                    <BabyChangingStationIcon sx={{ color: 'white' }} />
                    <Typography sx={{ ml: 1, color: 'white' }}>
                        {infants}
                    </Typography>
                </Box>
            </ContainerPassengers>
            <Button
                sx={{
                    mb: 2,
                    backgroundColor: '#c7cd00',
                    ':hover': { backgroundColor: '#858900' },
                }}
                onClick={onSelected}
                variant="contained"
                color="primary"
            >
                Ver asientos
            </Button>
        </MainContainer>
    )
}

export default SelectTravel
