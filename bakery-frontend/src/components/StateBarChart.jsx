import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BarChart } from '@mui/x-charts/BarChart';

function StateBarChart() {
    const orders = useSelector((state) => state.DashboardReducer.orders) 
    const [dataCreated, setDataCreated] = useState([]);
    const [dataShipped, setDataShipped] = useState([]);
    const [dataDelivered, setDataDelivered] = useState([]);
    const [dataCancelled, setDataCancelled] = useState([]);

    useEffect(() => {
        setDataCreated(orders.filter(order => order.orderState.includes('CREATED')))
        setDataShipped(orders.filter(order => order.orderState.includes('SHIPPED')))
        setDataDelivered(orders.filter(order => order.orderState.includes('DELIVERED')))
        setDataCancelled(orders.filter(order => order.orderState.includes('CANCELLED')))
    },[orders])

  return (
    <div>
        <h4>Order State</h4>
        <BarChart
                xAxis={[{ scaleType: 'band', data: ['CREATED', 'SHIPPED', 'DELIVERED', 'CANCELLED'] }]}
                series={[{ data: [dataCreated.length, dataShipped.length, dataDelivered.length, dataCancelled.length] }]}
                width={500}
                height={300}
            />
    </div>
  )
}

export default StateBarChart