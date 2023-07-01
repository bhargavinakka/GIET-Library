import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './login/nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Banner1Component } from './banner1/banner1.component';

import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { Nav1Component } from './nav1/nav1.component';
import { Year1Component } from './year1/year1.component';
import { Cse1Component } from './year1/cse1/cse1.component';
import { Cse2Component } from './year1/cse2/cse2.component';
import { FooterComponent } from './footer/footer.component';
import { SubBannerComponent } from './banner/sub-banner/sub-banner.component';
import { Year2Component } from './year2/year2.component';
import { Ece1Component } from './year2/ece1/ece1.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mech3Component } from './year7/mech3/mech3.component';
import { Mech4Component } from './year7/mech4/mech4.component';
import { Mech5Component } from './year7/mech5/mech5.component';
import { Mech6Component } from './year7/mech6/mech6.component';
import { Mech7Component } from './year7/mech7/mech7.component';
import { Mech8Component } from './year7/mech8/mech8.component';
import { Year9Component } from './year9/year9.component';
import { Min1Component } from './year9/min1/min1.component';
import { Min2Component } from './year9/min2/min2.component';
import { Min3Component } from './year9/min3/min3.component';
import { Min4Component } from './year9/min4/min4.component';
import { Min5Component } from './year9/min5/min5.component';
import { Min6Component } from './year9/min6/min6.component';
import { Min7Component } from './year9/min7/min7.component';
import { Min8Component } from './year9/min8/min8.component';
import { Csc3Component } from './year5/csc3/csc3.component';
import { Csc4Component } from './year5/csc4/csc4.component';
import { Csc5Component } from './year5/csc5/csc5.component';
import { Csc6Component } from './year5/csc6/csc6.component';
import { Csc7Component } from './year5/csc7/csc7.component';
import { Csc8Component } from './year5/csc8/csc8.component';

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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    WelcomeComponent,
    LoginComponent,
    NavComponent,
         SignupComponent,
         AboutComponent,
         HomeComponent,
         Banner1Component,
         StudentComponent,
         DepartmentComponent,
         Nav1Component,
         Year1Component,
         Cse1Component,
         Cse2Component,
         FooterComponent,
         SubBannerComponent,
         Year2Component,
         Ece1Component,
         Ece2Component,
         Year3Component,
         Eee1Component,
         Eee2Component,
         Year4Component,
         Civi1Component,
         Civi2Component,
         Year5Component,
         Year6Component,
         Year7Component,
         Year8Component,
         Csc1Component,
         Csc2Component,
         Pet1Component,
         Pet2Component,
         Mech1Component,
         Mech2Component,
         Csm1Component,
         Csm2Component,
         TechComponent,
         PerComponent,
         InnoComponent,
         AluComponent,
         Cse3Component,
         Cse4Component,
         Cse5Component,
         Cse6Component,
         Cse7Component,
         Cse8Component,
         Ece3Component,
         Ece4Component,
         Ece5Component,
         Ece6Component,
         Ece7Component,
         Ece8Component,
         Eee3Component,
         Eee4Component,
         Eee5Component,
         Eee6Component,
         Eee7Component,
         Eee8Component,
         Mech3Component,
         Mech4Component,
         Mech5Component,
         Mech6Component,
         Mech7Component,
         Mech8Component,
         Year9Component,
         Min1Component,
         Min2Component,
         Min3Component,
         Min4Component,
         Min5Component,
         Min6Component,
         Min7Component,
         Min8Component,
         Csc3Component,
         Csc4Component,
         Csc5Component,
         Csc6Component,
         Csc7Component,
         Csc8Component,
         
         Civi3Component,
         Civi4Component,
         Civi5Component,
         Civi6Component,
         Civi7Component,
         Civi8Component,
         Pet3Component,
         Pet4Component,
         Pet5Component,
         Pet6Component,
         Pet7Component,
         Pet8Component,
         Csm3Component,
         Csm4Component,
         Csm5Component,
         Csm6Component,
         Csm7Component,
         Csm8Component
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
