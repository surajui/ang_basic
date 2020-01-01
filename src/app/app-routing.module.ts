import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FirstComponent } from './first/first.component';
const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'courses',loadChildren:'../app/courses/courses.module#CoursesModule' },
  {path:'staticpages',loadChildren:'./staticpages/staticpages.module#StaticpagesModule'},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'}
  // {path:'',redirectTo:'',pathMatch:'full'},
  // {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
