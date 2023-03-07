export interface IProductsInfo {
  id: string;
  name: string;
  price: string;
  stock: string;
  brand: string;
  updateDate: string;
  src: string;
  desc: string;
}

export interface IProductDetail extends IProductsInfo {
  element: IProductDetail
}