export interface ProductCategoryModelServer {
  id: number;
  prodCategory: String;
}

export interface serverResponse  {
  count: number;
  productsCat: ProductCategoryModelServer
};
