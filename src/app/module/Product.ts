export interface Product {
  id?: any;
  libelle?: string;
  description?: string;
  prix?: number;
  qteStock?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;

}


export interface ProductRequest {

  id?:any;
  libelle?: string;
  description?: string;
  prix?: any;
  qteStock?: any;
  marque?: string;
  image?: string;

}
export interface ProductResponse {

  id?:any;
  libelle?: string;
  description?: string;
  prix?: number;
  qteStock?: number;
  marque?: string;
  image?: string;

}