import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectableComponent } from '../../compponents/injectable/injectable.component';
import { InjectableService } from '../../services/injectable.service';

@NgModule({
  declarations: [InjectableComponent],
  imports: [
    CommonModule
  ],
  providers: [InjectableService],
  exports:[InjectableComponent]
})
export class ProvidersModule { }
