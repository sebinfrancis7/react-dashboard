import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LineChart } from '@mui/x-charts/LineChart';

function OrderTimeSeriesChart() {
  const startDate = useSelector((state) => state.DashboardReducer.startDate)
  const [xData, setXData] = useState([0])
//   const [yData, setYData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/order/timeseries')
        const responseData = await response.json()
        const formattedXData = responseData.map(e => {return e.totalOrder})
        // const formattedYData = response.map(e => {return e.date})
        setXData(formattedXData)
        // setYData(formattedYData)
    }
    fetchData()
    console.log(xData)
  },[startDate])

  return (
    <LineChart
    series={[
        { curve: "linear", data: xData ? xData : [0] },
      ]}
      height={300}
    />
  )
}

export default OrderTimeSeriesChart