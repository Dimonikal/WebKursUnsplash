import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from "./auth/register/register.component";


const routes: Routes = [
  {
    path:"",
    component: GeneralComponent
  },
  {
    path:"catalog",
    component: CatalogComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"error",
    component: ErrorPageComponent
  },
  {
    path:"**",
    redirectTo: "/error"
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
