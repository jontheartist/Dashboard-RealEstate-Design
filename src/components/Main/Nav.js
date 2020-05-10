import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/jon.jpg'

const Container = styled.div`
display:flex; 
padding: 1rem;
justify-content:flex-end;
align-items: center;
`

const ProfileImg = styled.img`
width: 2.3rem;
height: 2.3rem;
 border-radius: 50%;
`

const MessageIcon = styled.span`
color: ${({ theme }) => theme.colorGray};
font-size: 27px;
cursor: pointer;

`


const Nav = () => {
    return (
        <Container>

            <MessageIcon className="iconify" data-online="false" data-icon="mdi-light:email"></MessageIcon>
            <ProfileImg src={Image} />

        </Container>
    )
}

export default Nav
