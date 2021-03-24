import { Component, OnInit } from "@angular/core";
import { leftList, MenusList } from "./menus.model";
@Component({
  selector: "menus-element",
  templateUrl: "./menus.component.html",
  styleUrls: ["./menus.component.css"],
})
export class MenusComponent implements OnInit {

  leftList = leftList;
  menusList = MenusList;
  constructor(
  ) { }

  ngOnInit() {
  }

}
