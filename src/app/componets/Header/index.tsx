import { Typography } from '@mui/material'
import { FC } from 'react'
import { MainContainer } from './styles'

const Header: FC = () => {
    return (
        <MainContainer>
            <Typography
                sx={{ color: '#c7cd00', fontWeight: 800 }}
                marginBottom={0}
                variant="h4"
                gutterBottom
            >
                ClickFerry - Reserva tu viaje
            </Typography>
        </MainContainer>
    )
}

export default Header
