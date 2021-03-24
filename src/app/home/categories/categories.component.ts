import { Component, OnInit } from "@angular/core";
import { categories } from "./categories.model";
@Component({
  selector: "categories-element",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  categories = categories;
  constructor(
  ) { }

  ngOnInit() {
  }

}
