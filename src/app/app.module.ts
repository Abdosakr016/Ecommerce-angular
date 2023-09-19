import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from './card/card.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StockPipe } from './pipes/stock.pipe';
import { CartComponent } from './cart/cart.component';
import { InfoComponent } from './info/info.component';
import {FormsModule} from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent,
    DataBindingComponent,
    ProductComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
    NotfoundComponent,
    StockPipe,
    CartComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
