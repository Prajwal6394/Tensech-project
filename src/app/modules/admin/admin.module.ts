import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmpTableComponent } from './components/table/normal-table/emp-table/emp-table.component';
import { HolidayApprovedComponent } from './components/table/normal-table/holiday-approved/holiday-approved.component';
import { HolidayRequestedComponent } from './components/table/normal-table/holiday-requested/holiday-requested.component';
import { HolidayCalenderComponent } from './components/table/normal-table/holiday-calender/holiday-calender.component';
// import { DepartmentTableComponent } from './components/table/button-table/department-table/department-table.component';
// import { HolidayApprovedTableComponent } from './components/table/button-table/holiday-approved-table/holiday-approved-table.component';
// import { HolidayRequestedTableComponent } from './components/table/button-table/holiday-requested-table/holiday-requested-table.component';
// import { HolidayTableComponent } from './components/table/button-table/holiday-table/holiday-table.component';
import { AddDepartmentComponent } from './components/form/add-forms/add-department/add-department.component';
import { AddEmployeeComponent } from './components/form/add-forms/add-employee/add-employee.component';
import { AddHolidayComponent } from './components/form/add-forms/add-holiday/add-holiday.component';
import { AddHolidayRequestComponent } from './components/form/add-forms/add-holiday-request/add-holiday-request.component';
import { UpdateDepartmentComponent } from './components/form/update-forms/update-department/update-department.component';
import { UpdateEmployeeComponent } from './components/form/update-forms/update-employee/update-employee.component';
import { UpdateHolidayComponent } from './components/form/update-forms/update-holiday/update-holiday.component';
import { UpdateHolidayRequestComponent } from './components/form/update-forms/update-holiday-request/update-holiday-request.component';
import { DepartmentTableBComponent } from './components/table/button-table/department-table-b/department-table-b.component';
import { EmpTableBComponent } from './components/table/button-table/emp-table-b/emp-table-b.component';
import { HolidayApprovedTableBComponent } from './components/table/button-table/holiday-approved-table-b/holiday-approved-table-b.component';
import { HolidayRequestTableBComponent } from './components/table/button-table/holiday-request-table-b/holiday-request-table-b.component';
import { HolidayTableBComponent } from './components/table/button-table/holiday-table-b/holiday-table-b.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    DepartmentComponent,
    EmployeeComponent,
    HomeComponent,
    HolidayComponent,
    HeaderComponent,
    FooterComponent,
    EmpTableComponent,
    HolidayApprovedComponent,
    HolidayRequestedComponent,
    HolidayCalenderComponent,
    // DepartmentTableComponent,
    // HolidayApprovedTableComponent,
    // HolidayRequestedTableComponent,
    // HolidayTableComponent,
    AddDepartmentComponent,
    AddEmployeeComponent,
    AddHolidayComponent,
    AddHolidayRequestComponent,
    UpdateDepartmentComponent,
    UpdateEmployeeComponent,
    UpdateHolidayComponent,
    UpdateHolidayRequestComponent,
    DepartmentTableBComponent,
    EmpTableBComponent,
    HolidayApprovedTableBComponent,
    HolidayRequestTableBComponent,
    HolidayTableBComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
