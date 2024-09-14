import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent, title: 'Home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }

];
