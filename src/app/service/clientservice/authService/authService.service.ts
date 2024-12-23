import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { tap } from 'rxjs/operators';
import { AuthResponse, RegisterRequest } from "../../../module/Client";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class AuthService{

    private tokenKey = 'auth_token';

    private baseUrl = 'http://localhost:8082/auth'; 

    constructor(private httpClient: HttpClient) { }

    login(credentials: any) {
        return this.httpClient.post<{token: string}>(this.baseUrl+'/login', credentials);
        // .pipe(
        //     tap(response => {
        //         localStorage.setItem(this.tokenKey, response.token);
        //       })
        //     );
        }

        loginUser(accesstoken: string){
          localStorage.setItem(this.tokenKey,accesstoken)
        }

        register(user: RegisterRequest): Observable<any> {
          console.log("test register service : " + JSON.stringify(user));
            return this.httpClient.post(`${this.baseUrl}/register`, user);
          }

    getAuthHeaders(): HttpHeaders {
        const token = localStorage.getItem(this.tokenKey);
        return new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
      }

      setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    // Méthode pour récupérer le token
    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

      logout(): void {
        localStorage.removeItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
  }
