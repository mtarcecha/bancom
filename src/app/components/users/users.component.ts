import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';
import { UsersService } from 'src/app/services/users/users.service';

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

  dataSource: User[] = [];
  columnsToDisplay: any = {name: 'Nombre',username: 'Username',address: 'Dirección', email: 'Correo',phone: 'Phone number'};
  columnsToData = ['name', 'username', 'address', 'email', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToData, 'expand'];
  expandedElement!: User | null;

  posts: Post[] = [];

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog, 
    private loginService: LoginService
    ) {
      this.loginService.verifySession();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (user: User[]) => {
        this.dataSource = user;
      }
    );
  }

  getPost(id: number) {
    this.usersService.getPostsByUser(id).subscribe(
      (posts: Post[]) => {       
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

  closeSession() {
    this.loginService.closeSession();
  }

}

