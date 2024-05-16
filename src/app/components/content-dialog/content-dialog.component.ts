import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-content-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './content-dialog.component.html',
  styleUrl: './content-dialog.component.scss'
})
export class ContentDialogComponent {

  constructor(private dialogRef: MatDialogRef<ContentDialogComponent>) {

  }

 dialogForm = new FormGroup({
    name: new FormControl("", Validators.required)
  })

  public onSubmit(){
    console.log(this.dialogRef.)
  }
}
