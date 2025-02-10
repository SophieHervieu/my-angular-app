import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'Component-Manipulation', component: ParentComponent },
    { path: 'Text-Interpolation', component: TextInterpolationComponent },
];
