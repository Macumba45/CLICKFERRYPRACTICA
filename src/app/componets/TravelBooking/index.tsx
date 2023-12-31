import React, { FC } from 'react'
import {
    Container,
    TextField,
    Grid,
    Typography,
    Button,
    Box,
    Divider,
    IconButton,
    FormControl,
    InputLabel,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface TravelBookingProps {
    route: string
    departureDate: string
    adults: number
    children: number
    infants: number
    onFromChange: (value: string) => void // Cambio aquí
    onDepartureDateChange: (value: string) => void // Cambio aquí
    onAdultsChange: (value: number) => void
    onChildrenChange: (value: number) => void
    onInfantsChange: (value: number) => void
    onBooking: () => void
}

const TravelBooking: FC<TravelBookingProps> = ({
    route,
    departureDate,
    adults,
    children,
    infants,
    onFromChange,
    onDepartureDateChange,
    onAdultsChange,
    onChildrenChange,
    onInfantsChange,
    onBooking,
}) => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <FormControl variant="outlined" margin="dense">
                    <InputLabel sx={{ mr: 2, ml: 2 }}>Elige tú ruta</InputLabel>
                    <Select
                        label="Elige tú ruta"
                        sx={{
                            color: '#004998',
                            '&hover:': { color: '#004998' },
                            outline: 'none',
                            width: '200px',
                            mr: 2,
                            ml: 2,
                        }}
                        value={route}
                        onChange={e => onFromChange(e.target.value)}
                    >
                        <MenuItem value="ALGECEUT">Algeciras - Ceuta</MenuItem>
                        <MenuItem value="CEUTALGE">Ceuta - Algeciras</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Fecha de Ida"
                    sx={{ color: '#004998', ml: 2, width: '200px', mr: 2 }}
                    variant="outlined"
                    type="date"
                    value={departureDate}
                    onChange={e => onDepartureDateChange(e.target.value)} // Cambio aquí
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
            <Box mt={3}>
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    marginBottom={4}
                    marginTop={4}
                    variant="h6"
                >
                    Número de Pasajeros
                </Typography>
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    container
                    spacing={2}
                >
                    <Grid marginRight={2} item>
                        <Typography textAlign="center" variant="subtitle1">
                            Adultos
                        </Typography>
                        <IconButton
                            color="primary"
                            onClick={() => onAdultsChange(adults + 1)}
                        >
                            <AddIcon />
                        </IconButton>
                        {adults}
                        <IconButton
                            color="primary"
                            onClick={() => onAdultsChange(adults - 1)}
                        >
                            <RemoveIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography textAlign="center" variant="subtitle1">
                            Niños
                        </Typography>
                        <IconButton
                            color="primary"
                            onClick={() => onChildrenChange(children + 1)}
                        >
                            <AddIcon />
                        </IconButton>
                        {children}
                        <IconButton
                            color="primary"
                            onClick={() => onChildrenChange(children - 1)}
                        >
                            <RemoveIcon />
                        </IconButton>
                    </Grid>
                    <Grid marginLeft={2} item>
                        <Typography textAlign="center" variant="subtitle1">
                            Bebés
                        </Typography>
                        <IconButton
                            color="primary"
                            onClick={() => onInfantsChange(infants + 1)}
                        >
                            <AddIcon />
                        </IconButton>
                        {infants}
                        <IconButton
                            color="primary"
                            onClick={() => onInfantsChange(infants - 1)}
                        >
                            <RemoveIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <Button
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    mt: 2,
                    backgroundColor: '#c7cd00',
                    ':hover': { backgroundColor: '#858900' },
                }}
                variant="contained"
                color="primary"
                onClick={onBooking}
            >
                Ver Ofertas
            </Button>
            <Divider style={{ margin: '20px 0' }} />
        </Container>
    )
}

export default TravelBooking
