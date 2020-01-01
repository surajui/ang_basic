import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "./page/page.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
const routes: Routes = [
  // slug means we can load any string or services in this page
  {path:'page/:slug',component:PageComponent}, 
  {path:'contactus',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
