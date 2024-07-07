import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-content-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './content-dialog.component.html',
  styleUrl: './content-dialog.component.scss'
})
export class ContentDialogComponent {

  constructor(private dialogRef: MatDialogRef<ContentDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string) {

  }

 dialogForm = new FormGroup({
    name: new FormControl("", Validators.required)
  });

  protected closeDialog (){
    this.dialogRef.close(this.dialogForm.controls.name);
  }
}
