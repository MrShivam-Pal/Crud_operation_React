import React, { useState } from "react";

const Form = ({ addData }) => {

    const [inputs, setInputs] = useState({name: "", age: "", countryCode: "", mobileno: "", city: ""});

    const changeHandler = async (event) => {
        setInputs(
            {
                ...inputs,
                [event.target.name]:event.target.value
            }
        );  
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("add");
        addData(inputs);
        setInputs({name: "", age: "", countryCode: "", mobileno: "", city: ""});
    };

    const handleReset = async (event) => {
        event.preventDefault();
        setInputs({name: "", age: "", countryCode: "", mobileno: "", city: ""});
    };

    return (<>
        <div id="table-form">

        <h1>Create User</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div>
          <label>Name: </label>
          <input type="text" pattern="[a-zA-Z]*" name="name" value={inputs.name} onChange={changeHandler} required/>
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
          <option value="Goa">Goa</option>
          <option value="Kolkata">Kolkata</option>
          </select>
          </div>

          
          <button type="submit" id="save-button" style={{backgroundColor: "blue"}}>Submit</button>
          <button type="reset" id="save-button" style={{backgroundColor: "black"}}>Reset</button>
        </form>
        </div>
    </>);
};

export default Form;