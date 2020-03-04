import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
border: solid black 1px;
width: 30%;
`;

export default function IssueCard (props) {
console.log(props)
const [isUser, setIsUser] = useState(false);
const [isEditing, setIsEditing] = useState(false);

useEffect(() => {
    if (props.data.creator_id == localStorage.getItem('user_id')){
        console.log('able to edit or delete')
        setIsUser(true);
    } else {
        console.log('NOT able to edit or delete')
    }
}, [])
const editCard = () => {
    setIsEditing(!isEditing);
}
    return (
        <Card>
            <p>Created on: {props.data.created_at}</p>
            <p>Created by: {props.data.creator_id}</p>
            <h3>This is a card</h3>
            <p>Card title: {props.data.title}</p>
            <p>Description: {props.data.desc}</p>
            <p>Upvotes: {props.data.upvotes}/Downvotes: {props.data.downvotes}</p>
            <p>Issue Status: {props.data.resolved}</p>
            {isUser && <button onClick={()=>{editCard()}} >
                {isEditing ? ('Abort Edit') : ('edit')}
            </button>}
        </Card>
    );
};