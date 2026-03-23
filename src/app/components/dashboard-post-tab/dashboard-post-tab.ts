import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Post } from '../../models/post';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DashboardPostFormDialog } from '../dashboard-post-form-dialog/dashboard-post-form-dialog';

@Component({
  selector: 'app-dashboard-post-tab',
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard-post-tab.html',
  styleUrl: './dashboard-post-tab.css',
})
export class DashboardPostTab {

  constructor(private dialog: MatDialog){}

  posts: Post[] = [];
  displayedColumns: string[] = ["id", "author", "title", "date", "edit", "delete"]
  
  openPostFormDialog(){
    const dialogRef = this.dialog.open(DashboardPostFormDialog);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    })
  }

}
