import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCComponent } from './component-c.component';

const routes: Routes = [
  {path: '', component:ComponentCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCRoutingModule { }
