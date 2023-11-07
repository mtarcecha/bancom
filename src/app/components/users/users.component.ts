import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersComponent implements OnInit{
  @ViewChild("modalCreatePost") modalCreatePost!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;

  dataSource: any = [];
  columnsToDisplay: any = {name: 'Nombre',username: 'Username',address: 'Dirección', email: 'Correo',phone: 'Phone number'};
  columnsToData = ['name', 'username', 'address', 'email', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToData, 'expand'];
  expandedElement!: PeriodicElement | null;

  posts: any = []

  constructor(private usersService: UsersService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (user) => {
        console.log(user)
        this.dataSource = user;
      }
    );
  }

  getPost(id: number) {
    console.log(id)
    this.usersService.getPostsByUser(id).subscribe(
      (posts) => {       
        this.posts = posts;
      }
    );
  }

  openCreatePost(id: number) {
    this.dialogRef = this.dialog.open(this.modalCreatePost, {
      data: {userId: id}
    })
  }

  showResult(resul:  boolean) {
    this.dialogRef.close();
    if(resul) {
      alert('Post guardado correctamente');
    }
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

