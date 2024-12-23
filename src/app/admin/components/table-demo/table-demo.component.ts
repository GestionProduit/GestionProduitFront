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
import { Product, ProductRequest, ProductResponse } from '../../../module/Product';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProductService } from '../../../service/productservice/productservice.service';

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

  productRequest! : ProductRequest;

    products: any[]=[];

    product!: any;

    selectedProducts!: Product[] | null;

    submitted: boolean = false;

    status!: any[];

 
 
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
        private productService : ProductService) {}

    ngOnInit() {

        this.productService.getAll().subscribe(data => {
            // console.log(data);
            this.products = data;
          });
       
        this.status = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];

        this.saveProduct();
        this.deleteProduct(this.product.id);
    }

    // saveProduct() {
    //     this.submitted = true;

    //     if (!this.product.libelle || !this.product.description || !this.product.marque || this.product.prix === undefined || this.product.qteStock === undefined) {
    //         return;
    //     }


    //     this.productService.createProduct(this.product).subscribe({
    //         next: (newProduct) => {
    //             console.log("Entre service create pro " + JSON.stringify(newProduct));
    //             this.products.push(newProduct);
    //             this.productDialog = false;
    //             this.product = {} as ProductRequest;
    //         },
    //         error: (err) => {
    //             console.error('Error creating product:', err);
    //         }
    //     });
    // }

    // updateProduct(product: ProductResponse) {
    //     const productId = product.id; // Assuming your product has an `id` field
    //     this.productService.updateProduct(productId, product).subscribe(
    //         updatedProduct => {
    //             console.log('Product updated:', updatedProduct);
    //             // Update the product list or handle UI feedback here
    //         },
    //         error => {
    //             console.error('Error updating product:', error);
    //         }
    //     );
    // }


    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    // deleteSelectedProducts() {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete the selected products?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
    //             this.selectedProducts = null;
    //             this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    //         }
    //     });
    // }

    editProduct(product: ProductResponse) {
        this.product = { ...product }; // Clone the selected product into the local product object
        this.productDialog = true; // Open the dialog
    }

    
    saveProduct() {
        this.submitted = true;
    
    
        if (this.product.id) {
            this.productService.updateProduct(this.product.id, this.product).subscribe(
                (updatedProduct) => {
                    const index = this.products.findIndex(p => p.id === this.product.id);
                    if (index !== -1) {
                        this.products[index] = updatedProduct;
                    }
    
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Product updated successfully!',
                        life: 5000
                    });
                    this.hideDialog();
                },
                (error) => {
                    console.error('Error updating product:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to update product.'
                    });
                }
            );
        } else {
            this.productService.createProduct(this.product).subscribe(
                (newProduct) => {
                    this.products.push(newProduct);
    
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Product created successfully!',
                        life: 5000
                    });
                    this.hideDialog();
                },
                (error) => {
                    console.error('Error creating product:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to create product.'
                    });
                }
            );
        }
    }

    deleteProduct(productId: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this product?',
            accept: () => {
                this.productService.deleteProduct(productId).subscribe({
                    next: () => {
                        this.products = this.products.filter(product => product.id !== productId);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Product deleted successfully!',
                            life: 3000,
                        });
                    },
                    error: err => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Failed to delete product.',
                            life: 3000,
                        });
                    },
                });
            },
        });
    }
    
    

   

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

  

    // createId(): string {
    //     let id = '';
    //     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (var i = 0; i < 5; i++) {
    //         id += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //     return id;
    // }

    // getSeverity(status: string): "success" | "warning" | "danger"{
    //     switch (status) {
    //         case 'INSTOCK':
    //             return 'success';
    //         case 'LOWSTOCK':
    //             return 'warning';
    //         case 'OUTOFSTOCK':
    //             return 'danger';
    //     }
    //     return "warning";
    // }
}
