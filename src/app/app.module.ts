import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* page Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { LendingLayoutModule } from './lending-layout/lending-layout.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    LendingLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
