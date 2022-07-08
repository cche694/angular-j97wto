import { ActivatedRoute, RouterModule } from "@angular/router";
import { CartService } from "./../cart.service";
import { Product } from "./../products";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  products: Product[] | undefined;
  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });
  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.products = CartService.getItems();
  }

  ngOnInit(): void {}
  onSubmit = () => {
    this.CartService.clearCart();
    console.warn("your order has been submited", this.checkoutForm.value);
    this.checkoutForm.reset()

  };
}
