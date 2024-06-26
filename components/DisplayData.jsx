import React, { useState } from "react";

const DisplayData = ({ records, editRecord, removeRecord }) => {

    const [inputs, setInputs] = useState({name: "", age: "", countryCode: "", mobileno: "", city: ""});
    const [id, setId] = useState();

    const changeHandler = async (event) => {
        setInputs(
            {
                ...inputs,
                [event.target.name]:event.target.value
            }
        );  
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (window.confirm('Are you sure to Edit?')) editRecord(inputs, id);
    };

    return (<>
        <div id="table-list">
        <h1>List Of User Data</h1>
        <div id="table-content">
        <table  border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, index) => 
                  <tr key={index}>
                    <td>{record.name}</td>
                    <td>{record.mobileno}</td>
                    <td>{record.age}</td>
                    <td>{record.city}</td>
                    <td>
                        <button type="button" className="edit-btn" onClick={() => { setInputs(record); setId(index); }} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button className="delete-btn" onClick={() => { if (window.confirm('Are you sure to delete?')) removeRecord(index) } }>Delete</button>
                    </td>
                 </tr>
                )}
            </tbody>
        </table>
        </div>
        </div>

        
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" id="table-form">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Record</h1>
            </div>
            <div className="modal-body">
            <form onSubmit={submitHandler}>
                <div>
                <label>Name: </label>
                <input type="text" pattern="[a-zA-Z]*"  name="name" value={inputs.name} onChange={changeHandler} required/>
                </div>

                <div>
                <label>Age: </label>
                <input type="number" min="1" max="150" name="age" value={inputs.age} onChange={changeHandler} required/>
                </div>

                <div>
                <label>Mobile No: </label>
                <input type="tel" pattern="[0-9]*" maxLength="10" minLength="10" name="mobileno" value={inputs.mobileno} onChange={changeHandler} required/>
                </div>

                <div>
                <label>City: </label>
                <select name="city" value={inputs.city} onChange={changeHandler} required>
                <option value="" disabled>Select a city</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Bangluru">Bangluru</option>
                <option value="Hydrabad">Hydrabad</option>
                </select>
                </div>

                <button id="save-button" type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
        </div>
        </div>
    </>);
};

export default DisplayData;