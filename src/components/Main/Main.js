import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewDepositBtn from './NewDepositsBtn'
import Deposits from './Deposits/Deposits'



const Container = styled.div`
width: auto;
margin-left: 16rem;
position: relative;
padding: 0 4rem;

`



const Main = () => {
    return (

        <Container>
            <Nav />
            <NewDepositBtn />
            <Deposits title="Deposits" count={2} data={} /> 
            <Deposits title="Deposits" count={2} data={} />

        </Container>

    )
}

export default Main
