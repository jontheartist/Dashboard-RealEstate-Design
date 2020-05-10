import React from 'react'
import styled from 'styled-components'



const AddButton = styled.a`
background-color:${({ theme }) => theme.colorGreen};
display:flex;
justify-content: center;
align-items: eenter;
width: 50px;
height: 50px;
border-radius: 25px;
position: absolute;
top: 6rem;
right: 7rem;
cursor: pointer;


`

const AddIcon = styled.span`
color: #FFF;
margin-top: 8px;
font-size: 30px;

`


const NewDepositsBtn = () => {
    return (
        <AddButton>
            <AddIcon className="iconify" data-inline="false" data-icon="mdi-light:plus"></AddIcon>
        </AddButton>
    )
}

export default NewDepositsBtn