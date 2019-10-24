import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FacultadIndexComponent } from './facultad-index/facultad-index.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'shipping', component: ShippingComponent },

  { path: 'clienteindex',  component: ClienteIndexComponent },
  { path: 'FacultadIndex',  component: FacultadIndexComponent },
  { path: 'clienteform/:id',  component: ClienteFormComponent },

  { path: 'clienteindex',  component: ClienteIndexComponent },
  { path: 'facultad/:id',  component: FacultadIndexComponent },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    FacultadIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
