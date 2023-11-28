import React from 'react';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import DeleteButton from './DeleteButton';
import './style.css';

function BDD() {
    return (
        <div className="CRUD-example">
            <h1>CRUD Example</h1>
            <CreateForm />
            <UpdateForm />
            <DeleteButton />
        </div>
    );
}

export default BDD;