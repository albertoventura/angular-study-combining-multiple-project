import { ProductsModule } from './products/products.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const providers: any[] = []
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class AppSharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers,
    }
  }
}
