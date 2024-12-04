import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { IpzDirective } from '../directives/ipz.directive';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [IpzDirective],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() post!: Post
    @Output() postid: EventEmitter<number> = new EventEmitter<number>()
    removePost() {
      this.postid.emit(this.post.id)
    }

    constructor() { }
  
    ngOnInit() { }
  }