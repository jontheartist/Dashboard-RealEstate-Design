import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/jon.jpg'


const Container = styled.div`
`

const ProfileImg = styled.img`
width: 9.3rem;
height: 9.3rem;
 border-radius: 50%;
`

const ProfileName = styled.h1`
font-size: 1rem;
font-weight: 300;
color: ${({ theme }) => theme.textColor};
`



const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>ELON MUSK</ProfileName>

        </Container>
    )
}

export default Profile
