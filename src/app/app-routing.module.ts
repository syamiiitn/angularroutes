import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {path:'home',component:ParentComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
