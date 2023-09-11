// src/HypothesisTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function HypothesisTable() {
  const [hypotheses, setHypotheses] = useState([]);
  

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const getData = async () =>{

           const response = await axios.get("http://localhost:3000/api/hypoth")
           console.log(response)
        setHypotheses(response.data);
    }
    getData()
  }, []);


  return (
    <main >
            <h1
              style={{
                width: "100%",
                backgroundColor: " rgb(235 235 235)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              الفرضيات الميدانيه
            </h1>
      <table>
        <thead>
          {/* <tr> */}
          {/* </tr> */}
          <tr>
            <th>م</th>
            <th>الفرضية</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {hypotheses?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td style={{position:"relative"}}>{item.hypothesis} <span style={{position: "absolute",
    top: 0,
    right: 0,
    textWrap: "wrap"}}>{item.status && item.status}</span></td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </main>
  );
}

export default HypothesisTable;
