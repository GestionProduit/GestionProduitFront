import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientResponseRequest } from '../../module/Client';

@Injectable({
    providedIn: 'root'
  })

  export class ClientService{

    private baseUrl = 'http://localhost:8082/clients'; // Your Spring Boot API base URL

    constructor(private httpClient: HttpClient) { }

    getAll():Observable<ClientResponseRequest[]>{
        return this.httpClient.get<ClientResponseRequest[]>(this.baseUrl)
    }

    createClient(client:ClientResponseRequest): Observable<ClientResponseRequest>{
        return this.httpClient.post<ClientResponseRequest>(this.baseUrl+"/save",client, {
            headers : {'Content-Type' : 'application/json', 
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers" : "X-Requested-With",
            },
            withCredentials: true
        });
    }

    updateClient( id:any, client:ClientResponseRequest): Observable<ClientResponseRequest>{
        return this.httpClient.put<ClientResponseRequest>(`${this.baseUrl}/update/${id}`,client, {
            headers : {'Content-Type' : 'application/json', 
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers" : "X-Requested-With",
            },
            withCredentials: true
        });
    }

    
    deleteClient( id:any): Observable<ClientResponseRequest>{
        return this.httpClient.delete<ClientResponseRequest>(`${this.baseUrl}/delete/${id}`,{
            headers : {'Content-Type' : 'application/json', 
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers" : "X-Requested-With",
            },
            withCredentials: true
        });
    }
  }

