import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PieChart } from '@mui/x-charts/PieChart'


function TopFiveBranchChart() {
  const startDate = useSelector((state) => state.DashboardReducer.startDate)
  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/order/branches')
        const responseData = await response.json()
        const formattedData = responseData.map(e => {
            return {
                value: e.count,
                label: 'Branch: ' + e.branch.toString()
            }
        })
        setData(formattedData)
    }      
    fetchData()
    console.log(data)
  },[startDate])

  return (
    <div>
        <h4>Top Five Branches</h4>
        <PieChart
            series={[
                {
                data: data
                },
            ]}
            width={400}
            height={200}
        />
    </div>
  )
}

export default TopFiveBranchChart