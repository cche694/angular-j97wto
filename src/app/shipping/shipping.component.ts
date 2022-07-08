import { CartService } from "./../cart.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
  constructor(private CartService: CartService) {}
  shippingCosts = this.CartService.getShippingPrices();
  ngOnInit(): void {}
}
