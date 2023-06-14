import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth"

import { AppUserRoutes } from "./appUser.routes";
import { AppAdminRoutes } from "./appAdmin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      {user ? <AppAdminRoutes /> : <AuthRoutes />} 
    </BrowserRouter>
  )
}
