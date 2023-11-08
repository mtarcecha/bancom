import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreatePostModule } from '../post/create-post/create-post.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule, 
    MatButtonModule, 
    MatIconModule,
    MatDialogModule,
    CreatePostModule
  ]
})
export class UsersModule { }
