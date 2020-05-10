import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Container = styled.div`
margin-top: 2rem;
width: 100%;

`

const Menu = () => {
    return (
        <Container>
            <MenuItem title="Home" icon="home" />
            <MenuItem title="Deposits" icon="file-multiple" active />
            <MenuItem title="Offers" icon="gift" />
            <MenuItem title="Payments" icon="bank" />
            <MenuItem title="Settings" icon="cog" />

        </Container>
    )
}

export default Menu
