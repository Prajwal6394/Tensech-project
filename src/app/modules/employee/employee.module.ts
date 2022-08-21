import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeHolidayComponent } from './components/employee-holiday/employee-holiday.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileUpateComponent } from './components/emp-forms/profile-upate/profile-upate.component';
import { HolidayRequestComponent } from './components/emp-forms/holiday-request/holiday-request.component';
import { ApprovedTableComponent } from './components/emp-tables/normal-table/approved-table/approved-table.component';
import { HolidayTableComponent } from './components/emp-tables/normal-table/holiday-table/holiday-table.component';
import { HolidayRequestBComponent } from './components/emp-tables/button-table/holiday-request-b/holiday-request-b.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateHolidayRequestComponent } from './components/emp-forms/update-holiday-request/update-holiday-request.component';
import { EmpDetailsComponent } from './components/emp-tables/normal-table/emp-details/emp-details.component';
import { HolidayRequestTableComponent } from './components/emp-tables/normal-table/holiday-request-table/holiday-request-table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeHolidayComponent,
    HeaderComponent,
    FooterComponent,
    ProfileUpateComponent,
    HolidayRequestComponent,
    ApprovedTableComponent,
    HolidayTableComponent,
    HolidayRequestBComponent,
    HomeComponent,
    UpdateHolidayRequestComponent,
    EmpDetailsComponent,
    HolidayRequestTableComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
