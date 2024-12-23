import { Component, NgModule } from '@angular/core';
import { Client, ClientResponseRequest } from '../../../module/Client';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClientService } from '../../../service/clientservice/clientservice.service';
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
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-table-client',
  standalone: true,
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, FormsModule],
  
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.scss',
  providers: [MessageService, ConfirmationService, NgModule, provideAnimations()]
})
export class TableClientComponent {

  clientDialog: boolean = false;

  clientRequest! : ClientResponseRequest;

    clients: any[]=[];

    client!: any;

    selectedClients!: Client[] | null;

    submitted: boolean = false;

    status!: any[];

 
 
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
        private clientService : ClientService) {}

    ngOnInit() {

        this.clientService.getAll().subscribe(data => {
            // console.log(data);
            this.clients = data;
          });
       
        this.status = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];

        this.saveClient();
        this.deleteClient(this.client.id);
    }

    
    openNew() {
        this.client = {};
        this.submitted = false;
        this.clientDialog = true;
    }

    deleteSelectedClients() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.clients = this.clients.filter((val) => !this.selectedClients?.includes(val));
                this.selectedClients = null;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Clients Deleted', life: 3000 });
            }
        });
    }

    editClient(client: ClientResponseRequest) {
        this.client = { ...client }; // Clone the selected product into the local product object
        this.clientDialog = true; // Open the dialog
    }

  


    saveClient() {
        this.submitted = true;
    
        // Validate mandatory fields
        // if (!this.product.libelle || !this.product.image) {
        //     return; // Don't proceed if required fields are missing
        // }
    
        if (this.client.id) {
            this.clientService.updateClient(this.client.id, this.client).subscribe(
                (updatedProduct) => {
                    const index = this.clients.findIndex(p => p.id === this.client.id);
                    if (index !== -1) {
                        this.clients[index] = updatedProduct;
                    }
    
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Client updated successfully!',
                        life: 5000
                    });
                    this.hideDialog();
                },
                (error) => {
                    console.error('Error updating client:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to update client.'
                    });
                }
            );
        } else {
            // Create new client
            this.clientService.createClient(this.client).subscribe(
                (newClient) => {
                    this.clients.push(newClient);
    
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Client created successfully!',
                        life: 5000
                    });
                    this.hideDialog();
                },
                (error) => {
                    console.error('Error creating client:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to create client.'
                    });
                }
            );
        }
    }

    deleteClient(clientId: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this client?',
            accept: () => {
                this.clientService.deleteClient(clientId).subscribe({
                    next: () => {
                        this.clients = this.clients.filter(client => client.id !== clientId);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Client deleted successfully!',
                            life: 3000,
                        });
                    },
                    error: err => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Failed to delete client.',
                            life: 3000,
                        });
                    },
                });
            },
        });
    }
    
    

  

    hideDialog() {
        this.clientDialog = false;
        this.submitted = false;
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
