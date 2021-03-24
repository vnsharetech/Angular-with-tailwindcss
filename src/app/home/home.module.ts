import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HOME_ROUTE } from "./home.route";
import { HomeComponent } from "./home.component";
import { CategoriesComponent } from "./categories/categories.component";
import { MenusComponent } from "./menus/menus.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([HOME_ROUTE]),
  ],
  declarations: [HomeComponent, CategoriesComponent, MenusComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
