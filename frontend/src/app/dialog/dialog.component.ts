import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { appState } from "../app-state/app-state.reducer";
import { map } from "rxjs";
@Component({
  selector: "app-dialog",
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent implements OnInit {
  constructor(private store: Store<appState>) {}
  title = "";
  subtitle = "";
  label = "";
  ngOnInit(): void {
    this.store.select("dialog").subscribe((dialogData) => {
      this.title = dialogData.title;
      this.subtitle = dialogData.subtitle;
      this.label = dialogData.label;
    });
  }
}
