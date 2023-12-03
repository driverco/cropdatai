import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { MessageService, SelectItem } from 'primeng/api';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'portal-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  products!: Product[];

  statuses!: SelectItem[];

  clonedProducts: { [s: string]: Product } = {};

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' },
    ];
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: Product) {
    if (product.price !== undefined) {
      if (product.price > 0) {
        delete this.clonedProducts[product.id as string];
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product is updated',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid Price',
        });
      }
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id as string];
    delete this.clonedProducts[product.id as string];
  }
}
