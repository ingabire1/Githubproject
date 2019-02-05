import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Goal } from "../goal";
import { ServiceAlertService } from "../service-alert.service";
import { GoalService } from "../goal.service";
// @Component({
//   selector: "app-goal",
//   templateUrl: "./goal.component.html",
//   styleUrls: ["./goal.component.css"]
// })
// export class GoalComponent implements OnInit {
//   goal: Goal;

// constructor(
//   goalService: GoalService,
//   alertService: ServiceAlertService,
//   private http: HttpClient
// ) {
//   this.goal = goalService.getGoals();
//   this.alertService = alertService;
// }

// ngOnInit() {
//   this.http
//     .get(
//       "http://quotes.stormconsultancy.co.uk/random.json (Links to an external site.)Links to an external site."
//     )
//     .subscribe(data => {
//       // Successful API request.
//     });
// }
