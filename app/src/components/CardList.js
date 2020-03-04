import React, {useState, useEffect, createContext} from 'react';
import data from './dummydata';
import Card from './IssueCard';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Cardlist = styled.div`
border: solid black 2px;
/* display: flex; */
flex-direction: column;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
text-decoration: none;
`;

export const ContextData = createContext();


export default function CardList (props) {

    const [cardData, setCardData]  = useState([]);



    useEffect(() => {

        axios.get('https://cors-anywhere.herokuapp.com/https://comake2.herokuapp.com/api/posts')
        .then(res => {
            // console.log(res.data);
            setCardData(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <ContextData.Provider value={cardData}>
            <Cardlist>
                <p>This box is the cardlist Landing Page!</p>
                    <Link to = '/'>
                    <button onClick = {() => {localStorage.clear()}}>Logout</button>
                    </Link>
                    {/* add issue form */}
                {cardData.map((item, index) => (
                    // <Link key={index.id} to={`/issues/${item.id}`}>
                        <Card data = {item} key = {index}/>
                    // </Link>
                ))}
                <Link to = '/'>
                <button>Home</button>
                </Link>
            </Cardlist>
        </ContextData.Provider>
    )

}