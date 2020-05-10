import React from 'react'
import styled from 'styled-components'


/*<script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script> */


const Container = styled.div`
border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"};
width: 100%;
padding: 0.3rem; 
padding-left: 2rem;
cursor: pointer; 
flex-direction: row;
align-items: center;
margin-bottom: 1rem; 
transition: 0.2s all ease-in-out;

&:hover {
    background-color: rgba(0,0,0,0.1);
}
`

const Icon = styled.span`
color: ${props => !props.active ? props.theme.textColor : "#AAA5A5"};
font-size: 1rem;
margin-right: 1rem;


`

const Title = styled.h1`
color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"};
font-size: 0.9rem; 
margin-right: 1rem; 
font-weight: 300;
`

/*<script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script> */
const MenuItem = ({ title, active, icon }) => {
    return (
        <Container active={active}>
            <Icon active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></Icon>
            <Title active={active}>{title}</Title>



        </Container>
    )
}

export default MenuItem
