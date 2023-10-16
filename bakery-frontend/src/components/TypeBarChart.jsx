import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BarChart } from '@mui/x-charts/BarChart';

function TypeBarChart() {
  const orders = useSelector((state) => state.DashboardReducer.orders) 
  const [dataCake, setDataCake] = useState([]);
  const [dataMuffins, setDataMuffins] = useState([]);
  const [dataCookies, setDataCookies] = useState([]);

  useEffect(() => {
    setDataCake(orders.filter(order => order.itemType.includes('CAKE')))
    setDataMuffins(orders.filter(order => order.itemType.includes('MUFFINS')))
    setDataCookies(orders.filter(order => order.itemType.includes('COOKIES')))
  },[orders])
  
  return (
    <div>
        <h4>Order Type</h4>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['CAKE', 'MUFFINS', 'COOKIES'] }]}
                series={[{ data: [dataCake.length, dataMuffins.length, dataCookies.length] }]}
                width={500}
                height={300}
            />
    </div>
  )
}

export default TypeBarChart