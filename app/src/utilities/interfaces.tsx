export interface Item {
  id: string;
  title: string;
  free_shipping: boolean;
  condition: string;
  picture: string;
  price: {
    amount: string;
    currency: string;
    decimals: string;
  }
}

export interface FullItem extends Item {
  sold_quantity: number;
  description: string;
}