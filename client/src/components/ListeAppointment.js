import React, { useEffect, useState } from "react";
import axios from "axios";                              
const ListeAppointment = () => {
  const [appointements, setAppointements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/patient")
      .then((res) => setAppointements(res.data));
  },[]);


  const showDetail= (_id)=>{
      const app=appointements.find(item=>item._id===_id);
      const ch=`Patient name: ${app.FirstName} ${app.LastName}, appointement: ${app.DateOfAppointment}, phone: ${app.NumberPhone}`
      alert(ch)
  }

  const deletePatient= (event)=>{
    axios
       .delete(`http://localhost:3000/api/patient/delete/${event.target.id}`,)
       .then((res)=>console.log(res,"patient deleted"))
   
  }
  return (
    <>
    
      <div className="liste">ListeAppointment:</div>
      <container>
      <table>
        <tbody>
          <tr>
            <th className="h" style={{ width: "60%", textAlign: 'center' } }>Patient Name</th>
            <th className="h" style={{ width: "20%", textAlign: 'center' }}>Appointement</th>
            <th style={{ width: "20%" }}></th>
          </tr>
          {appointements.map((item,index) => (
            <tr  key={index}>
              
              <td className="a" style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  {item.FirstName} {item.LastName}
                </div>
              </td>
              <td>
                <div>{item.DateOfAppointment}</div>
              </td>
              <td>              
                <div className="h" style={{cursor: 'pointer'}} onClick={()=>showDetail(item._id)}>show details</div>
              </td>
              <td>              
                <button class="btn" id={item._id} onClick={deletePatient}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </container>
    </>
    
  );
};

export default ListeAppointment;
