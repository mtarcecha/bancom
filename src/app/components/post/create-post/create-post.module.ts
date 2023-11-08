import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {CreatePostComponent } from './create-post.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
   CreatePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatButtonModule

  ],
  exports: [
    CreatePostComponent
  ]
})
export class CreatePostModule { }
