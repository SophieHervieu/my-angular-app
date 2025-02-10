import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'Component-Manipulation', component: ParentComponent },
];
