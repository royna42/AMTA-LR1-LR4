import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(post: Post[], input: string, method: boolean): Post[] {
    if(!input.trim()) {
      return post
    }
    else if (method == true) {
      return post.filter(item=>{
        return item.title.toLowerCase().includes(input.toLowerCase())
      })}
    else {
      return post.filter(item=>{
        return item.text.toLowerCase().includes(input.toLowerCase())
      })
    }
  }
}