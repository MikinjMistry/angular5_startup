import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'dashboard', redirectTo: 'dashboard/home' },
            {
                path: 'dashboard', component: DashboardComponent,
                children: [
                    {
                        path: 'home', component: HomeComponent,
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }

