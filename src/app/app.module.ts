import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './component/user/user.component';
import { WinnerComponent } from './component/winner/winner.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WinnerComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
