export interface ShopCategoryModelServer {
  id: number;
  ShopCategory: String;
}

export interface serverResponse  {
  count: number;
  ShopCat: ShopCategoryModelServer
};
