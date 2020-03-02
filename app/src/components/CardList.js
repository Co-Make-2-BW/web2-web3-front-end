import React, {useState, useEffect} from 'react';
import data from './dummydata';
import Card from './IssueCard';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Cardlist = styled.div`
border: solid black 2px;
display: flex;
flex-direction: column;
// flex-wrap: wrap;
// justify-content: space-evenly;
align-items: center;
`;

export default function CardList (props) {

    const [cardData, setCardData]  = useState([]);

    useEffect(() => {
        axios.post('https://reqres.in/api/users', data)
        .then(res => {
            console.log('axios CardList', res);
            setCardData(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <Cardlist>
            <p>This box is the cardlist</p>
            {cardData.map((item, index) => (
                <Card data = {item} key = {index}/>
            ))}
            <Link to = '/'>
            <button>Home</button>
            </Link>
        </Cardlist>
    )

}