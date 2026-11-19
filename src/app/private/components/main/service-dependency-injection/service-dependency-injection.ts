import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';

@Component({
     imports: [],
     selector: 'app-service-dependency-injection',
     styleUrl: './service-dependency-injection.scss',
     templateUrl: './service-dependency-injection.html'
})
export class ServiceDependencyInjection {
     protected productService = inject(ProductService);

     public addProduct() {
          this.productService.addToCart();
     }

     public removeProduct() {
          this.productService.removeFromCart();
     }
}