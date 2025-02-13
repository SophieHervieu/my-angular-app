import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';
import { BindingSystemComponent } from './binding-system/binding-system.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesParentComponentComponent } from './pipes-parent-component/pipes-parent-component.component';
import { BlogControlCenterComponent } from './blog-control-center/blog-control-center.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CatsListComponent } from './cats-list/cats-list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'Component-Manipulation', component: ParentComponent },
    { path: 'Text-Interpolation', component: TextInterpolationComponent },
    { path: 'Binding-system', component: BindingSystemComponent },
    { path: 'Directives', component: DirectivesComponent},
    { path: 'Pipes', component: PipesParentComponentComponent},
    { path: 'Blog-control-center', component: BlogControlCenterComponent},
    { path: 'Pokemon-list', component: PokemonListComponent},
    { path: 'Cats-list', component: CatsListComponent},
];
