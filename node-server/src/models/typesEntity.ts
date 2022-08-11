export interface Price {
  currency: string;
  amount: string;
  decimals: string;
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id?: string;
  title?: string;
  price: Price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
}

export interface FullItem extends Item {
  sold_quantity: number;
  description: string;
}

export interface SearchResponse {
  autor: Author;
  categories: string[];
  items: Item[]
}

export interface SearchByIdResponse {
  autor: Author;
  item: Item;
  categories: string[];
}
