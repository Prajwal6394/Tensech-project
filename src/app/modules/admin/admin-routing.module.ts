import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'department', component:DepartmentComponent
      },
      {
        path:'holiday', component:HolidayComponent
      },
      {
        path:'employee', component: EmployeeComponent
      },
      {
        path:'', redirectTo:'/admin/home', pathMatch:'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
