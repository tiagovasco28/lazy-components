import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTwoComponent } from '../dialog-two/dialog-two.component';

@Component({
  selector: 'app-dialog-one',
  templateUrl: './dialog-one.component.html',
  styleUrls: ['./dialog-one.component.scss']
})
export class DialogOneComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<DialogOneComponent>, public dialogRefTwo:MatDialog, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialogRefTwo.open(DialogTwoComponent, {
      height: '400px',
      width: '600px',
      data: { name: 'austin' },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); 
     
    });
  }

}
