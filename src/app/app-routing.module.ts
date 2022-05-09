import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { RecordComponent } from './components/record/record.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/master/user/user.component';
import { VillageComponent } from './components/master/village/village.component';
import { YojanaComponent } from './components/master/yojana/yojana.component';
import { LandtypeComponent } from './components/master/landtype/landtype.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'main', component: MainComponent,children:[
    {path: 'dashboard',component:DashboardComponent},
    {path: 'record',component:RecordComponent},
    {path: 'user',component:UserComponent},
    {path: 'village',component:VillageComponent},
    {path: 'yojana',component:YojanaComponent},
    {path: 'land',component:LandtypeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
