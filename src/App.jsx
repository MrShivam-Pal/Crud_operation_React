import React, { useState } from "react";
import "./App.css";
import Form from "../components/Form";
import DisplayData from "../components/DisplayData";

const App = () => {

  const [data, setData] = useState([]);

  const addData = (record) => {
    setData([...data, record]);
  };

  const editData = (editRecord, id) => {
    const tempRecords = data.map((data, index) => (index === id) ? editRecord : data);
    setData(tempRecords);
  };

  const removeData = (id) => {
    const tempRecords = data.filter((data, index) => index !== id);
    setData(tempRecords);
  };

  return (<> 
    <div>
      <Form addData={addData}/>
      <DisplayData records={data} editRecord={editData} removeRecord={removeData}/>
    </div>
  </>);
};

export default App;