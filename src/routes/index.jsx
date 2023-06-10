import { BrowserRouter } from "react-router-dom";


import { AppUserRoutes } from "./appUser.routes";
import { AppAdminRoutes } from "./appAdmin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppUserRoutes /> 
    </BrowserRouter>
  )
}
