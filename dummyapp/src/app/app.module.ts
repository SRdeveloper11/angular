import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { Exercise1Directive } from './exercise1.directive';
import { Directiveexercise1Component } from './directiveexercise1/directiveexercise1.component';
import { Directivexercise2Component } from './directivexercise2/directivexercise2.component';
import { Exercise2Directive } from './exercise2.directive';
import { PipesComponent } from './pipes/pipes.component';
import { SqrtPipe } from "./app.sqrt";
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewLoginComponent,
    Exercise1Directive,
    Directiveexercise1Component,
    Directivexercise2Component,
    Exercise2Directive,
    PipesComponent,
SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
