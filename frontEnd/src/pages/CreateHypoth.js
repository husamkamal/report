import axios from 'axios';
import React, { useState } from 'react'

export default function CreateHypoth() {
    const [formData, setFormData] = useState({
        hypothesis: "",
        date: "",
        status: "",
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           await axios.post("http://localhost:3000/api/hypoth", formData)
              setFormData({ hypothesis: "", date: "", status: "" });
            
        } catch (error) {
            
        }
        // Send data to the server
      };
    
  return (
    <main>

<form onSubmit={handleSubmit} id="reportForm" style={{    width: "33%", justifyContent:"space-evenly", height:"27rem"}}>
        <input
          type="text"
          placeholder="الفرضية"
          value={formData.hypothesis}
          onChange={(e) =>
            setFormData({ ...formData, hypothesis: e.target.value })
        }
        />
        <input
          type="text"
          placeholder="الحاله"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          />
        <input
          type="date"
          placeholder="التاريخ"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        <button type="submit" style={{padding:"1px 29px"}}>إرسال</button>
      </form> 
          </main>
       )
}
