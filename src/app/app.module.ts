import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegaddComponent } from './regadd/regadd.component';
import { ReglistComponent } from './reglist/reglist.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
//import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@NgModule({
  declarations: [
    AppComponent,
    RegaddComponent,
    ReglistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //ConfirmationPopoverModule.forRoot({
      //confirmButtonType: 'danger' // set defaults here
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
