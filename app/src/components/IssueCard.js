import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
border: solid black 1px;
width: 30%;
`;

export default function IssueCard (props) {
// console.log(props)
const [isUser, setIsUser] = useState(false);
const [isEditing, setIsEditing] = useState(false);
const [data, setData] = useState(props.data);

useEffect(() => {
console.log(data)
}, [data])




useEffect(() => {
    if (props.data.creator_id == localStorage.getItem('user_id')){
        // console.log('able to edit or delete')
        setIsUser(true);
    } else {
        // console.log('NOT able to edit or delete')
    }
}, [])


const editCard = () => {
    setIsEditing(!isEditing);
}


const changeHandler = event => {
    setData({
        ...data,
        [event.target.name]: event.target.value
    })
    // console.log(event.target)
}

const deleteHandler = event => {
    event.preventDefault();
    console.log('deleted')
}

    return (
        <Card>
            {isEditing ? (
            <>
            <form>
                <label>Card title:</label>
                <input
                    type='text'
                    name='title'
                    value={data.title}
                    onChange={event => changeHandler(event)}
                />

                <label>Description:</label>
                <input
                    type='text'
                    name='title'
                    value={data.desc}
                    onChange={event => changeHandler(event)}
                />

                <label>Issue Status:</label>
                <button onClick={(event)=>{
                    event.preventDefault();
                    setData({
                        ...data,
                        'resolved': !data.resolved
                    })
                }}>{data.resolved ? ('Issue Resolved') : ('Not Resolved')}</button>
                <button type='submit'>Submit Edit</button>

            </form>
            </>

            ) : 
            (<><p>Created on: {props.data.created_at}</p>
            <p>Created by: {props.data.creator_id}</p>
            <h3>Card title: {props.data.title}</h3>
            <p>Description: {props.data.desc}</p>
            <p>Upvotes: {props.data.upvotes}/Downvotes: {props.data.downvotes}</p>
            <p>Issue Status: {props.data.resolved}</p></>)}
            {isUser && (<><button onClick={()=>{editCard()}} >
                {isEditing ? ('Abort Edit') : ('edit')}
            </button><button onClick={event => deleteHandler(event)}>Delete</button></>)}
        </Card>
    );
};