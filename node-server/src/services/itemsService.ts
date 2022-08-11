import axios from "axios";
import { Author, FullItem, Item } from "../models/typesEntity";
import { Urls } from "../utilities/constans";

/**
 * Funcion para la construccion de una lista de items dada 
 * la respuesta de mercado libre
 * @return Array<Item>
 */
export const buildItems = (results: any[]): Array<Item> => {
  const items: Array<Item> = results.map(
    ({
      id,
      title,
      price,
      currency_id,
      thumbnail_id,
      condition,
      shipping: { free_shipping }
    }) => {
      const item: Item = {
        id,
        condition,
        free_shipping,
        title,
        price: {
          amount: Math.floor(price).toString(),
          currency: currency_id,
          decimals: ((price % 1) * 100).toFixed(0)
        },
        picture: `http://http2.mlstatic.com/D_${thumbnail_id}-I.jpg`,
      }
      return item;
    }
  );

  return items;
}

/**
 * Funcion para adaptar la respuesta de mercado libre a la api 
 * @param itemId odentificador del producto
 * @returns un item completo
 */
export const buildItem = async (itemId: any): Promise<FullItem> => {

  const data = (await axios.get(`${Urls.baseItems}${itemId}`)).data;

  const description = await axios.get(`${Urls.baseItems}${itemId}/description`);

  const fullItem : FullItem = {
    id: data.id,
    title: data.title,
    price: {
      amount:  Math.floor(data.price).toString(),
      currency: data.currency_id,
      decimals: ((data.price % 1) * 100).toFixed(0)
    },
    sold_quantity: data.sold_quantity,
    free_shipping: data.shipping.free_shipping,
    condition: data.condition,
    picture: data.pictures[0].secure_url,
    description: description.data.plain_text
  }

  return fullItem;
}

/**
 * Construye el autor
 * @returns Author
 */
export const getAutor = (): Author => {
  return {
    name: 'Juan Daniel',
    lastname: 'Arboleda Sanchez'
  }
}

