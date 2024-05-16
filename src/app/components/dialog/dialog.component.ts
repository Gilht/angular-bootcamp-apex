import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatDialog
} from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  constructor(public dialog: MatDialog) {}

  protected openDialog (){
  let dialogRef = this.dialog.open(ContentDialogComponent, {
    height: '50%',
    width: '40%',
   })

   dialogRef.afterClosed().subscribe((item) => {
    console.log(item)
   })
  }
}
