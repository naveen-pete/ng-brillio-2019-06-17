import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { LoggerService } from './services/logger.service';
import { ProductsService } from './services/products.service';
import { SearchProductsPipe } from './common/search-products.pipe';
import { HighlightDirective } from './common/highlight.directive';

@NgModule({
  declarations: [  // components, pipes (custom), directives (custom)
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductFormComponent,
    SearchProductsPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsService, LoggerService], // only service
  bootstrap: [AppComponent]
})
export class AppModule { }
