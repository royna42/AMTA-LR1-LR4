import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from "./post/post.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }