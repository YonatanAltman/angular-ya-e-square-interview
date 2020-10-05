import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MaterialModule } from "../material/material.module";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { PostModule } from "./post/post.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [BrowserAnimationsModule,CommonModule,BrowserModule, FormsModule, MaterialModule, HttpClientModule,PostModule,RouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AppService],

})
export class AppModule {}
 