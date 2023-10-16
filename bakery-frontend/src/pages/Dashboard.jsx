import React from 'react'
import OrderTimeSeriesChart from '../components/OrderTimeSeriesChart'
import StateBarChart from '../components/StateBarChart'
import TimeSelector from '../components/TimeSelector'
import TopFiveBranchChart from '../components/TopFiveBranchChart'
import TypeBarChart from '../components/TypeBarChart'

function Dashboard(){
    return (
        <div className='container pt-3'>
            <TimeSelector />
            <OrderTimeSeriesChart />
            <div className="row pt-5">
                <div className="col-6">
                    <TypeBarChart />
                </div>
                <div className="col-6">
                    <StateBarChart />   
                </div>    
            </div>
            <TopFiveBranchChart />
            
        </div>
    )
}

export default Dashboard