import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private produtoService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.produtoService.showMessage('Produto criado!');
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
