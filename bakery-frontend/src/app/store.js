import { configureStore } from '@reduxjs/toolkit'
import DashboardReducer from '../features/dashboard/dashboardSlice'

export const store =  configureStore({
  reducer: {
    DashboardReducer
  },
})