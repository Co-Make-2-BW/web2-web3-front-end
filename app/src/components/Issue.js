import React from 'react';
import { useHistory } from 'react-router-dom';

import IssueCard from './IssueCard'


function Issue (props) {
    console.log('issue props', props)

    const history = useHistory();
    const handleUpdate = e => {
        e.preventDefault();
        history.push(`/update-form/:id`);
      };

    return (
    <>
    <h1>Issue</h1>

        <button onClick={handleUpdate}>Edit/Update</button>
        <button>Delete/Resolve</button>
    </>

    )
};

export default Issue;