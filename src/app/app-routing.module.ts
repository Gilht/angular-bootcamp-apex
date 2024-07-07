import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { Homework9SlugComponent } from './homework9-slug/homework9-slug.component';
import { HomeComponent } from './components/home/home.component';
import { LazyComponent } from './components/lazy/lazy.component';
import { SimpleComponent } from './components/simple/simple.component';
import { ChildSlugComponent } from './components/child-slug/child-slug.component';
const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'simple-component',
      component: SimpleComponent,
    },
    {
      path: 'slug-route',
      children: [
        {
          path: ':slug',
          component: ChildSlugComponent,
        },
      ],
    },
    {
      path: 'load-module',
      loadChildren: () =>
        import('./components/lazy/module/lazy.module').then(
          (m) => m.LazyModule
        ),
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }