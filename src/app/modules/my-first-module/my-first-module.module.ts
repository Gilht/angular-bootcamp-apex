import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../../components/my-first-component/my-first-component.component';
import { Router, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MyFirstComponent },
];

@NgModule({
  declarations: [MyFirstComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFirstModuleModule {}
