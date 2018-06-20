import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardTopbarComponent } from './dashboard-topbar/dashboard-topbar.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, DashboardTopbarComponent, DashboardMenuComponent]
})
export class DashboardModule { }
