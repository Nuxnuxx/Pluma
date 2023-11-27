import React from 'react';
import CreateForm from './CreateForm';
import ReadList from './ReadList';
import UpdateForm from './UpdateForm';
import DeleteButton from './DeleteButton';
import './style.css';

function BDD() {
    return (
        <div className="CRUD-example">
            <h1>CRUD Example</h1>
            <CreateForm />
            <ReadList />
            <UpdateForm />
            <DeleteButton />
        </div>
    );
}

export default BDD;