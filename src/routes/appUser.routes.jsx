import { Routes, Route } from 'react-router-dom'

import { HomeUser } from '../pages/HomeUser'
import { PlateUser } from '../pages/PlateUser'

export function AppUserRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomeUser />} />
      <Route path="/plate/:id" element={<PlateUser />} />
    </Routes>
  )
}