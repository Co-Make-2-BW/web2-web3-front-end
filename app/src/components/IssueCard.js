import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
border: solid black 1px;
width: 30%;
`;

export default function IssueCard (props) {

    return (
        <Card>
            <p>Created on: {props.data.created_at}</p>
            <p>Created by: {props.data.creator_id}</p>
            <h3>This is a card</h3>
            <p>Card title: {props.data.title}</p>
            <p>Description: {props.data.desc}</p>
            <p>Upvotes: {props.data.upvotes}/Downvotes: {props.data.downvotes}</p>
            <p>Issue Status: {props.data.resolved}</p>
            <button>Edit/Update</button>
            <button>Delete/Resolved</button>
        </Card>
    );


};