import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',canActivate:[AuthGuard], component: DashboardComponent },
  { path: 'table',canActivate:[AuthGuard], component: TableComponent },
  { path: 'main',canActivate:[AuthGuard], component: MainComponent },
  { path: '**',redirectTo:'dashboard'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
