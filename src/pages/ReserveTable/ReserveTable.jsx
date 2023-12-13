import React,{useReducer,useState} from "react";
import {Hero} from "../Home/components";
import {Bookings} from "./components";
import getTimesApi from "../../getTimesApi";


export const ReserveTable = () =>{

    const [date,setDate] = useState(new Date());
    function initializeTimes(date){
        return getTimesApi(date)

    }

    function updateTimes(date){
        console.log({ date })
        const dateObj = new Date(date);
        const newnw = getTimesApi(dateObj)
        console.log({ newnw})
        return getTimesApi(dateObj)
    }

    function reducer(state, action) {
        let newState;
        console.log({action})
        switch (action.type) {
          case 'UPDATE_TIMES':
          const newDate = new Date(action.payload);
          setDate(newDate)
          newState = updateTimes(newDate)

          break;
    
          default:
            throw new Error()
        }
        return newState
      }

    const [availableTimes, dispatch]=useReducer(reducer,initializeTimes(date))

    return(
        <>
            <Hero/>
            <Bookings availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    )
}