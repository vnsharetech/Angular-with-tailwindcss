import { Component, OnInit } from "@angular/core";
@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavbarComponent implements OnInit {

  showMenuMobile = false;
  constructor(
  ) { }

  ngOnInit() {

  }

  triggerMenuMobile = () => {
    this.showMenuMobile = !this.showMenuMobile;
  }
}
