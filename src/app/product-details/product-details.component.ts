import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { Product, products } from "../products";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  productInCart: Product[] | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    const routeParams = this.route.snapshot.params;
    const { productId } = routeParams;
    this.product = products.find((product) => product.id === Number(productId));
  }
  addToCart = (product: Product) => {
    this.cartService.addToCart(product);
    window.alert(`${product.name} has been added to the cart.`);
  };

  ngOnInit(): void {}
}
