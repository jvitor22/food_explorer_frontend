import { Routes, Route } from 'react-router-dom'

import { HomeAdmin } from '../pages/HomeAdmin'
import { PlateAdmin } from '../pages/PlateAdmin'
import { AddPlate } from '../pages/AddPlate'
import { EditPlate } from '../pages/EditPlate'

export function AppAdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/plate-admin/:id" element={<PlateAdmin />} />
      <Route path="/add/" element={<AddPlate />} />
      <Route path="/edit/:id" element={<EditPlate />} />
    </Routes>
  )
}