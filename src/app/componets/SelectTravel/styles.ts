import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    width: 100%;
    height: auto;
`

export const DataContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr;
    margin: 1rem auto;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const ContainerDivider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 3rem;
`

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    margin: 1rem auto;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const ContainerPassengers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #004998;
    height: 40px;
    margin-bottom: 2rem;
    border-radius: 20px;
`

export const ContainerBoat = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContainerHR = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`
export const SeatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`

export const SeatsDataContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
