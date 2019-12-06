import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegaddComponent } from './regadd/regadd.component';
import { ReglistComponent } from './reglist/reglist.component';
import { Login } from './login';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent },
  { path: 'patadd', component: RegaddComponent},
  { path: 'patlist', component: ReglistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
