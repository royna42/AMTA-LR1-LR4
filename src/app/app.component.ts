import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NgForOf, NgIf } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostFormComponent, PostComponent, NgForOf, NgIf, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  input = ''
  method = false

  posts: Post[] = [
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 2},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 3},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4}
  ]
  updatePosts (event: Post) {
    this.posts.unshift(event)
    for (let i = 1; i < this.posts.length; i++) {
      this.posts[i].id = i + 1;
    }
  }
  removeIdPost(id: number) {
    this.posts = this.posts.filter((item)=>item.id!=id)
  }

  onChangeSearchInput(event: string) {
    this.input = event
  }

  onChangeSearchMethod(event: boolean) {
    this.method = event
  }
}

export interface Post {
  title: string
  text: string
  id?: number
}