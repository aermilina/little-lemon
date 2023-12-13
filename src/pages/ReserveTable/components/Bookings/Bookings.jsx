import React from "react";
import {Button} from "../../../../components";
import "./Bookings.css";
import {useFormik,FormikProvider} from "formik";
import submitAPI from "../../../../components/submitApi";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const validation = Yup.object().shape({
  date: Yup.string()
  .required("Please insert date"),
  time: Yup.string()
  .required('Required'),
  guests: Yup.number()
  .max(8, 'You select more guests we can afford')
  .required('Please select number of guests'),
});

export const Bookings = ({ availableTimes,dispatch }) =>{
    const navigate= useNavigate();
      

   const {handleSubmit,setFieldValue, handleChange,values,touched,errors} = useFormik({
    initialValues:{ 
      date: '2023-12-13',
      time: availableTimes[0],
      guests: 2,
      ocassion:'Birthday'
      },
      validationSchema: validation,
    onSubmit: (values)=>{ 
      const sendStatus =submitAPI(values);
      navigate("/confirm")
    }
   })

    return (
      <>
          <FormikProvider>
            <h3>Book a table</h3>
            <form onSubmit={handleSubmit} onValidate={validation} role="form">  
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
                {touched.date && errors.date && <div className="error" id="error">{errors.date}</div>}
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
                {touched.time && errors.time && <div className="error">{errors.time}</div>}
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
                  {touched.guests && errors.guests && <div className="error" id="error">{errors.guests}</div>}
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