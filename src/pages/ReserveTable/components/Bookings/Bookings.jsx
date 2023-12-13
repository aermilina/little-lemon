import React,{useEffect} from "react";
import {Button} from "../../../../components";
import "./Bookings.css";
import {useFormik,FormikProvider} from "formik";
import submitAPI from "../../../../components/submitApi";
import { useNavigate } from "react-router-dom";

export const Bookings = ({ availableTimes,dispatch }) =>{
    const navigate= useNavigate();
      

   const {handleSubmit,setFieldValue, handleChange,values} = useFormik({
    initialValues:{ 
      date: '2023-12-13',
      time: availableTimes[0],
      guests: 2,
      ocassion:'Birthday'
      },
    onSubmit: (values)=>{ 
      const sendStatus =submitAPI(values);
      navigate("/confirm")
    }
   })

    return (
      <>
          <FormikProvider>
            <h3>Book a table</h3>
            <form onSubmit={handleSubmit} role="form">  
              <div>
                <label htmlFor="date">Choose date</label>
                <input
                type="date"
                name="date"
                id="date"
                onChange={(e)=>{
                    const {value} = e.target;
                    setFieldValue("date",value)
                    dispatch({ type: 'UPDATE_TIMES', payload: value })
                    setFieldValue("time",availableTimes[0])
                }}
                value={values.date}
                />
              </div>
             <div>
                <label htmlFor="time">Choose time</label>
                <select
                  name="time"
                  id="time"
                  onChange={handleChange}
                  value={values.time}
                  
                >
                {availableTimes?.map((item)=>{ return <option value={item} key={item}>{item}</option>})}
                
                </select>
              </div>
              <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                  type="number" 
                  id="guests"
                  placeholder="1" 
                  min="1" 
                  max="10" 
                  name="guests"
                  value={values.guests} 
                  onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="occassion">Occasion</label>
                  <select
                  id="occassion"
                  name="occassion"
                  onChange={handleChange}
                  value={values.ocassion}
                  >
                      <option value="Birthday" key="Birthday">Birthday</option>
                      <option value="Anniversary" key="Anniversary">Anniversary</option>
                  </select>
                </div>
              <Button type="submit" background="#F4CE14"name="Make you reservation" width={200}/>
            </form>
          </FormikProvider>
          </>
    );
}