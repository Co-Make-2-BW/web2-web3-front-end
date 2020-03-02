import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
border: solid black 1px;
width: 30%;
`;

export default function IssueCard (props) {

    return (
        <Card>
        <p>This is a card</p>
        <p>Card title: {props.data.title}</p>
        <p>Description: {props.data.desc}</p>
        </Card>
    )


}