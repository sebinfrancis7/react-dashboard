import React, { useState, useEffect } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { setStartDateReducer, setEndDateReducer, setOrdersReducer } from '../features/dashboard/dashboardSlice';
import dayjs from 'dayjs';

function TimeSelector(){

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const dispatch = useDispatch()

    
    useEffect(() => {
        
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setStartDateReducer(startDate))
        dispatch(setEndDateReducer(endDate))

        try{
            const response = await fetch('http://localhost:8080/api/order/filter?start=' + startDate + '&end=' + endDate)
            const data = await response.json()

            dispatch(setOrdersReducer(data))
        } catch (err){
            console.log(err.message)
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Start"
                    value={startDate || ''}
                    onChange={(value) => setStartDate(dayjs(value.$d).format('YYYY-MM-DD'))}
                />
             </LocalizationProvider>
             <span className='px-3'></span>    
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="End"
                    value={endDate || ''}
                    onChange={(value) => setEndDate(dayjs(value.$d).format('YYYY-MM-DD'))}
                />
             </LocalizationProvider>
             <span className='px-4'></span> 
             <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default TimeSelector