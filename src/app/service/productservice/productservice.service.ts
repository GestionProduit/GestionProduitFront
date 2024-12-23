import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductRequest, ProductResponse } from '../../module/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private baseUrl = 'http://localhost:8082/products'; // Your Spring Boot API base URL

    constructor(private httpClient: HttpClient) { }

    // getAll(page:number,size:number,compteSearchRequest:CompteBancaireRequest):Observable<Page<CompteBancaire>>{
    //     return this.httpClient.post<Page<CompteBancaire>>(this.apiURL+"/search?page="+page+"&size="+size,compteSearchRequest)
    // }
    // getHistoriqueDeclaration(page:number,size:number,uuid:string){
    //     return this.httpClient.get<Page<DeclarationResponse>>(this.apiURL+"/compte-declaration-list?"+"compteUuid="+uuid+"&page="+page+"&size="+size)
    // }

    // getByUuid(uuid:string){
    //     return this.httpClient.get<CompteBancaire>(this.apiURL+"/"+uuid)
    // }

    // supprimer(uuid:string):Observable<any>{
    //     return this.httpClient.delete(this.apiURL+"/"+uuid);
        
    // }

    getAll():Observable<ProductResponse[]>{
        return this.httpClient.get<ProductResponse[]>(this.baseUrl)
    }

    createProduct(product:ProductRequest): Observable<ProductResponse>{
        return this.httpClient.post<ProductResponse>(this.baseUrl+"/ajouter",product, {
            headers : {'Content-Type' : 'application/json', 
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers" : "X-Requested-With",
            },
            withCredentials: true
        });
    }

    
    updateProduct( id:any, product:ProductResponse): Observable<ProductResponse>{
        return this.httpClient.put<ProductResponse>(`${this.baseUrl}/update/${id}`,product, {
            headers : {'Content-Type' : 'application/json', 
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers" : "X-Requested-With",
            },
            withCredentials: true
        });
    }


    deleteProduct( id:any): Observable<ProductResponse>{
        return this.httpClient.delete<ProductResponse>(`${this.baseUrl}/${id}`,{
            headers : {'Content-Type' : 'application/json', 
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers" : "X-Requested-With",
            },
            withCredentials: true
        });
    }

    // update(compte:CompteBancaireRequest | CompteBancaire){
    //     return this.httpClient.put<CompteBancaire>(this.apiURL,compte)
    // }

  
// getProductsMini() {
//     return Promise.resolve(this.getProductsData().slice(0, 5));
// }

// getProductsSmall() {
//     return Promise.resolve(this.getProductsData().slice(0, 10));
// }

// getProducts() {
//     return Promise.resolve(this.getProductsData());
// }

// getProductsWithOrdersSmall() {
//     return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
// }

// getProductsWithOrders() {
//     return Promise.resolve(this.getProductsWithOrdersData());
// }
}
