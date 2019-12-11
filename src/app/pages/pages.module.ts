import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PagesService } from './pages.service';




@NgModule({
  declarations: [
    GeneralComponent, 
    CatalogComponent, 
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[PagesService]
})
export class PagesModule { }
