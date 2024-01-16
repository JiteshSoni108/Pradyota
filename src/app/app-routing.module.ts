import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './component/about-us/about-us.component';

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo: "aboutus"},
  {path:"aboutus", component:AboutUSComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
