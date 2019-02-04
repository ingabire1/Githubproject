import { Component, OnInit } from "@angular/core";
import { GoalService } from "../goal.service";

@Component({
  selector: "app-goal-form",
  templateUrl: "./goal-form.component.html",
  providers: [GoalService], //add the providers to the component
  styleUrls: ["./goal-form.component.css"]
})
export class GoalFormComponent implements OnInit {
  // goals: goal[];
  constructor(goalService: GoalService) {
    // this.goal = goalService.getGoals();
  }
  ngOnInit() {}
}
