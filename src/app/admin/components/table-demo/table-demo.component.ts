import { Component, NgModule } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Product } from '../../../domain/Product';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-table-demo',
  standalone: true,
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, FormsModule],
  templateUrl: './table-demo.component.html',
  styleUrl: './table-demo.component.scss',
  providers: [MessageService, ConfirmationService, NgModule, provideAnimations()]
})
export class TableDemoComponent {
  productDialog: boolean = false;

    products!: Product[];

    product!: Product;

    selectedProducts!: Product[] | null;

    submitted: boolean = false;

    statuses!: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {}

    ngOnInit() {
        //this.productService.getProducts().then((data) => (this.products = data));
        this.products = [
          {
              id: '1000',
              code: 'f230fh0g3',
              name: 'Bamboo Watch',
              description: 'Product Description',
              image: 'bamboo-watch.jpg',
              price: 65,
              category: 'Accessories',
              quantity: 24,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
          {
              id: '1001',
              code: 'nvklal433',
              name: 'Black Watch',
              description: 'Product Description',
              image: 'black-watch.jpg',
              price: 72,
              category: 'Accessories',
              quantity: 61,
              inventoryStatus: 'OUTOFSTOCK',
              rating: 4
          },
          {
              id: '1002',
              code: 'zz21cz3c1',
              name: 'Blue Band',
              description: 'Product Description',
              image: 'blue-band.jpg',
              price: 79,
              category: 'Fitness',
              quantity: 2,
              inventoryStatus: 'LOWSTOCK',
              rating: 3
          },
          {
              id: '1003',
              code: '244wgerg2',
              name: 'Blue T-Shirt',
              description: 'Product Description',
              image: 'blue-t-shirt.jpg',
              price: 29,
              category: 'Clothing',
              quantity: 25,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
          {
              id: '1004',
              code: 'h456wer53',
              name: 'Bracelet',
              description: 'Product Description',
              image: 'bracelet.jpg',
              price: 15,
              category: 'Accessories',
              quantity: 73,
              inventoryStatus: 'INSTOCK',
              rating: 4
          },
          {
              id: '1005',
              code: 'av2231fwg',
              name: 'Brown Purse',
              description: 'Product Description',
              image: 'brown-purse.jpg',
              price: 120,
              category: 'Accessories',
              quantity: 0,
              inventoryStatus: 'OUTOFSTOCK',
              rating: 4
          },
          {
              id: '1006',
              code: 'bib36pfvm',
              name: 'Chakra Bracelet',
              description: 'Product Description',
              image: 'chakra-bracelet.jpg',
              price: 32,
              category: 'Accessories',
              quantity: 5,
              inventoryStatus: 'LOWSTOCK',
              rating: 3
          },
          {
              id: '1007',
              code: 'mbvjkgip5',
              name: 'Galaxy Earrings',
              description: 'Product Description',
              image: 'galaxy-earrings.jpg',
              price: 34,
              category: 'Accessories',
              quantity: 23,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
          {
              id: '1008',
              code: 'vbb124btr',
              name: 'Game Controller',
              description: 'Product Description',
              image: 'game-controller.jpg',
              price: 99,
              category: 'Electronics',
              quantity: 2,
              inventoryStatus: 'LOWSTOCK',
              rating: 4
          },
          {
              id: '1009',
              code: 'cm230f032',
              name: 'Gaming Set',
              description: 'Product Description',
              image: 'gaming-set.jpg',
              price: 299,
              category: 'Electronics',
              quantity: 63,
              inventoryStatus: 'INSTOCK',
              rating: 3
          },
          {
              id: '1010',
              code: 'plb34234v',
              name: 'Gold Phone Case',
              description: 'Product Description',
              image: 'gold-phone-case.jpg',
              price: 24,
              category: 'Accessories',
              quantity: 0,
              inventoryStatus: 'OUTOFSTOCK',
              rating: 4
          },
          {
              id: '1011',
              code: '4920nnc2d',
              name: 'Green Earbuds',
              description: 'Product Description',
              image: 'green-earbuds.jpg',
              price: 89,
              category: 'Electronics',
              quantity: 23,
              inventoryStatus: 'INSTOCK',
              rating: 4
          },
          {
              id: '1012',
              code: '250vm23cc',
              name: 'Green T-Shirt',
              description: 'Product Description',
              image: 'green-t-shirt.jpg',
              price: 49,
              category: 'Clothing',
              quantity: 74,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
          {
              id: '1013',
              code: 'fldsmn31b',
              name: 'Grey T-Shirt',
              description: 'Product Description',
              image: 'grey-t-shirt.jpg',
              price: 48,
              category: 'Clothing',
              quantity: 0,
              inventoryStatus: 'OUTOFSTOCK',
              rating: 3
          },
          {
              id: '1014',
              code: 'waas1x2as',
              name: 'Headphones',
              description: 'Product Description',
              image: 'headphones.jpg',
              price: 175,
              category: 'Electronics',
              quantity: 8,
              inventoryStatus: 'LOWSTOCK',
              rating: 5
          },
          {
              id: '1015',
              code: 'vb34btbg5',
              name: 'Light Green T-Shirt',
              description: 'Product Description',
              image: 'light-green-t-shirt.jpg',
              price: 49,
              category: 'Clothing',
              quantity: 34,
              inventoryStatus: 'INSTOCK',
              rating: 4
          },
          {
              id: '1016',
              code: 'k8l6j58jl',
              name: 'Lime Band',
              description: 'Product Description',
              image: 'lime-band.jpg',
              price: 79,
              category: 'Fitness',
              quantity: 12,
              inventoryStatus: 'INSTOCK',
              rating: 3
          },
          {
              id: '1017',
              code: 'v435nn85n',
              name: 'Mini Speakers',
              description: 'Product Description',
              image: 'mini-speakers.jpg',
              price: 85,
              category: 'Clothing',
              quantity: 42,
              inventoryStatus: 'INSTOCK',
              rating: 4
          }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
                this.selectedProducts = null;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => val.id !== product.id);
                this.product = {};
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    getSeverity(status: string): "success" | "warning" | "danger"{
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
        return "warning";
    }
}
