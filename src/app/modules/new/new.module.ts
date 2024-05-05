import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from '../../compponents/external/external.component';

@NgModule({
  declarations: [ExternalComponent],
  imports: [
    CommonModule
  ],
  exports: [ExternalComponent]
})
export class NewModule { }
