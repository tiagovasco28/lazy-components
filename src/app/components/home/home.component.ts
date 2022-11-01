import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOneComponent } from '../dialog-one/dialog-one.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialogRef: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(){
    let dialogA = this.dialogRef.open(DialogOneComponent, {
      height: '400px',
      width: '600px',
    });

    dialogA.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); 
      window.location.reload();
    });
  }

}
