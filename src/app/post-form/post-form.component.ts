import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Post } from "../app.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
  title = ''
  text = ''
  searchInput = ''
  searchMethod = true
  id = 0
  styleToggle=false
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('myInputText', {static: false}) myinputText!: ElementRef
  @ViewChild('myInputTitle', {static: false}) myinputTitle!: ElementRef
  constructor() { }
  ngOnInit() { }

  addPost() {
    if(this.text.trim() && this.title.trim()) {
      const post : Post ={
        title: this.title,
        text: this.text,
        id: 1
      }
      this.addPostUser.emit(post)
      this.text=''
      this.title=''
    }
  }

  onLoadDefault () {
    this.styleToggle=!this.styleToggle
    if(this.styleToggle) {
      this.myinputText.nativeElement.style.color = "red"
      this.myinputTitle.nativeElement.style.fontWeight = "bold"
        } else {
      this.myinputText.nativeElement.style.color = 'black'
      this.myinputTitle.nativeElement.style.fontWeight = "normal"
    }
  }

  @Output() inputSearch = new EventEmitter<string>()
  @Output() methodPicker = new EventEmitter<boolean>()

  onChangeSearch(change: string) {
    this.inputSearch.emit(change)
    this.methodPicker.emit(this.searchMethod)
  }

  setTitleSearch() {
    this.searchMethod = true
  }

  setTextSearch() {
    this.searchMethod = false
  }
}