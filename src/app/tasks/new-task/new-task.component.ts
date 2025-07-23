import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { type NewTaskData } from "../task/task.modal";
@Component({
  selector: "app-new-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = "";
  enteredSummery = "";
  enteredDate = "";

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummery,
      date: this.enteredDate,
    });
  }
}
