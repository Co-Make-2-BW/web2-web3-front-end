import React from 'react';
import data from './dummydata';
import Card from './IssueCard';
import styled from 'styled-components';

const Cardlist = styled.div`
border: solid black 2px;
display: flex;
flex-direction: column;
// flex-wrap: wrap;
// justify-content: space-evenly;
align-items: center;
`;

export default function CardList (props) {

    return (
        <Cardlist>
            <p>This box is the cardlist</p>
            {data.map((item, index) => (
                <Card data = {item} key = {index}/>
            ))}
        </Cardlist>
    )

}