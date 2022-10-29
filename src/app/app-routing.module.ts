import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'component-a',
  loadChildren: () => import('./components/component-a/component-a.module').then(m => m.ComponentAModule)},
  {path: 'component-b',
  loadChildren: () => import('./components/component-b/component-b.module').then(m => m.ComponentBModule)},
  {path: 'component-c',
  loadChildren: () => import('./components/component-c/component-c.module').then(m => m.ComponentCModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
