import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models/post.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  @Output() createPostResult: EventEmitter<boolean> = new EventEmitter();

  createPostForm!: FormGroup;

  constructor(private fBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Post,private usersService: UsersService) {
    this.initForm();
  }

  getErrorMessageTitle() {
    if (this.createPostForm.get('title')?.invalid) {
      return 'Titulo obligatorio';
    }
    return ''
  }

  getErrorMessageDescription() {
    if (this.createPostForm.get('description')?.invalid) {
      return 'Descripcion obligatoria';
    }
    return ''
  }

  initForm() {

    this.createPostForm = this.fBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })

  }

  savedPost() {

    const post: Post = {
      userId: this.data.userId,
      title: this.createPostForm.get("title")?.value,
      body: this.createPostForm.get("description")?.value
    }

    this.usersService.createPost(post).subscribe(
      (post: Post) => {
        if(post) {
          this.createPostResult.emit(true);
        } else {
          this.createPostResult.emit(false);
        }
      }
    );
  }

}
