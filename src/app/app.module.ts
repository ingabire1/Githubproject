// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { AppRoutingModule } from "./app-routing.module";
// import { AppComponent } from "./app.component";
// import { GoalFormComponent } from "./goal-form/goal-form.component";
// import { ServiceAlertService } from "./service-alert.service";
// import { HttpClientModule } from "@angular/common/http";
// import { StrikethroughDirective } from './strikethrough.directive';
// import { UserComponent } from './user/user.component';
// // import { DatecountPipe } from './datecount.pipe';

// @NgModule({
//   declarations: [AppComponent, GoalFormComponent, StrikethroughDirective, UserComponent],
//   imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

//   providers: [ServiceAlertService], // Add service to providers,
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { AlertsService } from "../service-alert";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserComponent } from "./user/user.component";
import { HttpClient } from "selenium-webdriver/http";
import { StrikethroughDirective } from "./strikethrough.directive";
import { AboutComponent } from "./about/about.component";
import { RouterModule, Routes } from "@angular/router";
// import { DateCountPipe } from "./datecount.pipe";
const routes: Routes = [
  // {path:"users",component:UserComponent},
  { path: "about", component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserComponent,
    StrikethroughDirective,
    AboutComponent
    // DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [], //add service to providers
  bootstrap: [AppComponent]
})
export class AppModule {}
