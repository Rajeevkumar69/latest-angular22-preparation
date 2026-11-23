import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ChildFormsDemo } from '../../shared/child-forms-demo/child-forms-demo';

@Component({
     selector: 'app-performance-optimization',
     styleUrl: './performance-optimization.scss',
     templateUrl: './performance-optimization.html',
     imports: [CommonModule, ChildFormsDemo],
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceOptimization {
     users = signal<any[]>([
          { id: 1, name: 'John' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Peter' }
     ]);

     private nextUserId = 4;

     addUser(): void {
          this.users.update(users => [
               { id: this.nextUserId++, name: 'Mike' },
               ...users
          ]);
     }

     count = signal(1);

     doubleCount = computed(() => this.count() * 2);

     incrementCount(): void {
          this.count.update(value => value + 1);
     }

     products = signal<any[]>([
          { id: 1, name: 'Laptop', price: 50000 },
          { id: 2, name: 'Mobile', price: 15000 },
          { id: 3, name: 'Headphones', price: 8000 }
     ]);

     total = computed(() =>
          this.products().reduce((sum, product) => sum + product.price, 0)
     );

     addProduct(): void {
          this.products.update(products => [
               ...products,
               {
                    id: products.length + 1,
                    name: 'Keyboard',
                    price: 2000
               }
          ]);
     }

     formatPrice(price: number): string {
          return price.toLocaleString('en-IN');
     }
}