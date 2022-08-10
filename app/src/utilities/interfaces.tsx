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