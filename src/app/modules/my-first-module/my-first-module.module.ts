import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from '../../components/my-first-component/my-first-component.component';
import { Router, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', 
component: MyFirstComponentComponent 
  }];

@NgModule({
  declarations: [MyFirstComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyFirstModuleModule { }
