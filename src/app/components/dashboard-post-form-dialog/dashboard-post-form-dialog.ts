import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard-post-form-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './dashboard-post-form-dialog.html',
  styleUrl: './dashboard-post-form-dialog.css',
})
export class DashboardPostFormDialog {

  author: string = '';
  title: string = '';
  date: string = '';
  content: string = '';

  ngOnInit(){
    this.author = 'Rafael';
  }

  onSubmit(postForm: NgForm){
            
  }
}
