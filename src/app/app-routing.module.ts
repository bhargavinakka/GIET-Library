import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { Year1Component } from './year1/year1.component';
import { Cse1Component } from './year1/cse1/cse1.component';
import { Cse2Component } from './year1/cse2/cse2.component';
import { Ece1Component } from './year2/ece1/ece1.component';
import { Year2Component } from './year2/year2.component';
import { Ece2Component } from './year2/ece2/ece2.component';
import { Year3Component } from './year3/year3.component';
import { Eee1Component } from './year3/eee1/eee1.component';
import { Eee2Component } from './year3/eee2/eee2.component';
import { Year4Component } from './year4/year4.component';
import { Civi1Component } from './year4/civi1/civi1.component';
import { Civi2Component } from './year4/civi2/civi2.component';
import { Year5Component } from './year5/year5.component';
import { Year6Component } from './year6/year6.component';
import { Year7Component } from './year7/year7.component';
import { Year8Component } from './year8/year8.component';
import { Csc1Component } from './year5/csc1/csc1.component';
import { Csc2Component } from './year5/csc2/csc2.component';
import { Pet1Component } from './year6/pet1/pet1.component';
import { Pet2Component } from './year6/pet2/pet2.component';
import { Mech1Component } from './year7/mech1/mech1.component';
import { Mech2Component } from './year7/mech2/mech2.component';
import { Csm1Component } from './year8/csm1/csm1.component';
import { Csm2Component } from './year8/csm2/csm2.component';
import { TechComponent } from './student/tech/tech.component';
import { PerComponent } from './student/per/per.component';
import { InnoComponent } from './student/inno/inno.component';
import { AluComponent } from './student/alu/alu.component';
import { Cse3Component } from './year1/cse3/cse3.component';
import { Cse4Component } from './year1/cse4/cse4.component';
import { Cse5Component } from './year1/cse5/cse5.component';
import { Cse6Component } from './year1/cse6/cse6.component';
import { Cse7Component } from './year1/cse7/cse7.component';
import { Cse8Component } from './year1/cse8/cse8.component';
import { Ece3Component } from './year2/ece3/ece3.component';
import { Ece4Component } from './year2/ece4/ece4.component';
import { Ece5Component } from './year2/ece5/ece5.component';
import { Ece6Component } from './year2/ece6/ece6.component';
import { Ece7Component } from './year2/ece7/ece7.component';
import { Ece8Component } from './year2/ece8/ece8.component';
import { Eee3Component } from './year3/eee3/eee3.component';
import { Eee4Component } from './year3/eee4/eee4.component';
import { Eee5Component } from './year3/eee5/eee5.component';
import { Eee6Component } from './year3/eee6/eee6.component';
import { Eee7Component } from './year3/eee7/eee7.component';
import { Eee8Component } from './year3/eee8/eee8.component';
import { Mech3Component } from './year7/mech3/mech3.component';
import { Mech4Component } from './year7/mech4/mech4.component';
import { Mech5Component } from './year7/mech5/mech5.component';
import { Mech6Component } from './year7/mech6/mech6.component';
import { Mech7Component } from './year7/mech7/mech7.component';
import { Mech8Component } from './year7/mech8/mech8.component';
import { Year9Component } from './year9/year9.component';
import { Csc3Component } from './year5/csc3/csc3.component';
import { Csc4Component } from './year5/csc4/csc4.component';
import { Csc5Component } from './year5/csc5/csc5.component';
import { Csc6Component } from './year5/csc6/csc6.component';
import { Csc7Component } from './year5/csc7/csc7.component';
import { Csc8Component } from './year5/csc8/csc8.component';
import { Min1Component } from './year9/min1/min1.component';
import { Min2Component } from './year9/min2/min2.component';
import { Min3Component } from './year9/min3/min3.component';
import { Min4Component } from './year9/min4/min4.component';
import { Min5Component } from './year9/min5/min5.component';
import { Min6Component } from './year9/min6/min6.component';
import { Min7Component } from './year9/min7/min7.component';
import { Min8Component } from './year9/min8/min8.component';
import { Civi3Component } from './year4/civi3/civi3.component';
import { Civi4Component } from './year4/civi4/civi4.component';
import { Civi5Component } from './year4/civi5/civi5.component';
import { Civi6Component } from './year4/civi6/civi6.component';
import { Civi7Component } from './year4/civi7/civi7.component';
import { Civi8Component } from './year4/civi8/civi8.component';
import { Pet3Component } from './year6/pet3/pet3.component';
import { Pet4Component } from './year6/pet4/pet4.component';
import { Pet5Component } from './year6/pet5/pet5.component';
import { Pet6Component } from './year6/pet6/pet6.component';
import { Pet7Component } from './year6/pet7/pet7.component';
import { Pet8Component } from './year6/pet8/pet8.component';
import { Csm3Component } from './year8/csm3/csm3.component';
import { Csm4Component } from './year8/csm4/csm4.component';
import { Csm5Component } from './year8/csm5/csm5.component';
import { Csm6Component } from './year8/csm6/csm6.component';
import { Csm7Component } from './year8/csm7/csm7.component';
import { Csm8Component } from './year8/csm8/csm8.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'department',component:DepartmentComponent},
  {path:'year1',component:Year1Component},
  {path:'cse1',component:Cse1Component},
  {path:'cse2',component:Cse2Component},
  {path:'year2',component:Year2Component},
  {path:'ece1',component:Ece1Component},
  {path:'ece2',component:Ece2Component},
  {path:'year3',component:Year3Component},
  {path:'eee1',component:Eee1Component},
  {path:'eee2',component:Eee2Component},
  {path:'year4',component:Year4Component},
  {path:'civi1',component:Civi1Component},
  {path:'civi2',component:Civi2Component},
  {path:'year5',component:Year5Component},
  {path:'year6',component:Year6Component},
  {path:'year7',component:Year7Component},
  {path:'year8',component:Year8Component},
  {path:'csc1',component:Csc1Component},
  {path:'csc2',component:Csc2Component},
  {path:'pet1',component:Pet1Component},
  {path:'pet2',component:Pet2Component},
  {path:'mech1',component:Mech1Component},
  {path:'mech2',component:Mech2Component},
  {path:'csm1',component:Csm1Component},
  {path:'csm2',component:Csm2Component},
  {path:'tech',component:TechComponent},
  {path:'per',component:PerComponent},
  {path:'inno',component:InnoComponent},
  {path:'alu',component:AluComponent},
  {path:'cse3',component:Cse3Component},
  {path:'cse4',component:Cse4Component},
  {path:'cse5',component:Cse5Component},
  {path:'cse6',component:Cse6Component},
  {path:'cse7',component:Cse7Component},
  {path:'cse8',component:Cse8Component},
  {path:'ece3',component:Ece3Component},
  {path:'ece4',component:Ece4Component},
  {path:'ece5',component:Ece5Component},
  {path:'ece6',component:Ece6Component},
  {path:'ece7',component:Ece7Component},
  {path:'ece8',component:Ece8Component},
  {path:'eee3',component:Eee3Component},
  {path:'eee4',component:Eee4Component},
  {path:'eee5',component:Eee5Component},
  {path:'eee6',component:Eee6Component},
  {path:'eee7',component:Eee7Component},
  {path:'eee8',component:Eee8Component},
  {path:'mech3',component:Mech3Component},
  {path:'mech4',component:Mech4Component},
  {path:'mech5',component:Mech5Component},
  {path:'mech6',component:Mech6Component},
  {path:'mech7',component:Mech7Component},
  {path:'mech8',component:Mech8Component},
  {path:'year9',component:Year9Component},
  {path:'csc3',component:Csc3Component},
  {path:'csc4',component:Csc4Component},
  {path:'csc5',component:Csc5Component},
  {path:'csc6',component:Csc6Component},
  {path:'csc7',component:Csc7Component},
  {path:'csc8',component:Csc8Component},
  {path:'min1',component:Min1Component},
  {path:'min2',component:Min2Component},
  {path:'min3',component:Min3Component},
  {path:'min4',component:Min4Component},
  {path:'min5',component:Min5Component},
  {path:'min6',component:Min6Component},
  {path:'min7',component:Min7Component},
  {path:'min8',component:Min8Component},
  {path:'civi3',component:Civi3Component},
  {path:'civi4',component:Civi4Component},
  {path:'civi5',component:Civi5Component},
  {path:'civi6',component:Civi6Component},
  {path:'civi7',component:Civi7Component},
  {path:'civi8',component:Civi8Component},
  {path:'pet3',component:Pet3Component},
  {path:'pet4',component:Pet4Component},
  {path:'pet5',component:Pet5Component},
  {path:'pet6',component:Pet6Component},
  {path:'pet7',component:Pet7Component},
  {path:'pet8',component:Pet8Component},
  {path:'csm3',component:Csm3Component},
  {path:'csm4',component:Csm4Component},
  {path:'csm5',component:Csm5Component},
  {path:'csm6',component:Csm6Component},
  {path:'csm7',component:Csm7Component},
  {path:'csm8',component:Csm8Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
