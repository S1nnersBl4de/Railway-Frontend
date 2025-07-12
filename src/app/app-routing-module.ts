import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { HomePage } from './components/home-page/home-page';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Adminpage } from './components/adminpage/adminpage';
import { Viewalltrains } from './components/viewalltrains/viewalltrains';
import { Allbookings } from './components/allbookings/allbookings';
import { Mybookings } from './components/mybookings/mybookings';


const routes: Routes = [{
  path: '',
  component: Layout,
  children: [
    {
      path: '',
      component: HomePage
    },
    {
      path: 'login',
      component: Login
    },
    {
      path: 'register',
      component: Register
    },
    {
      path: 'admin',
      component: Adminpage
    },
    {
      path: 'view-all-trains',
      component: Viewalltrains
    },
    {
      path: 'view-all-bookings',
      component: Allbookings
    },
    {
      path: 'my-booking-history',
      component: Mybookings
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
