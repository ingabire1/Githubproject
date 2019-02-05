import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GoalFormComponent } from "./goal-form/goal-form.component";
import { ServiceAlertService } from "./service-alert.service";
import { HttpClientModule } from "@angular/common/http";
// import { DatecountPipe } from './datecount.pipe';

@NgModule({
  declarations: [AppComponent, GoalFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [ServiceAlertService], // Add service to providers,
  bootstrap: [AppComponent]
})
export class AppModule {}
