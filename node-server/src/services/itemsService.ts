import axios from "axios";
import { Author, FullItem, Item, SearchByIdResponse, SearchResponse } from "../models/typesEntity";
import { Urls } from "../utilities/constans";

/**
 * Funcion para la construccion de una lista de items dada 
 * la respuesta de mercado libre
 * @return Array<Item>
 */
export const buildItems = async (q: any): Promise<SearchResponse> => {

  const response = await axios.get(`${Urls.getItems}?q=${q}&limit=4`);
  const results: any[] = response.data.results;
  const available_filters: any[] = response.data.available_filters;
  const filters: any[] = response.data.filters;


  const items: Array<Item> = results.map(
    ({
      id, title, price, currency_id, thumbnail_id, condition, shipping: { free_shipping }
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

  //proceso de categorias, no entendi muy bien este proceso segun el docuemnto, lo hice de esta forma en base a la api
  let categories;
  if (filters.length) {
    categories = filters[0].values[0].path_from_root.map(
      (item: any) => item.name
    );
  } else {
    let initCategory = available_filters[0]?.values;

    //se filtra por la que mas resultados tenga
    initCategory.sort(function (a: any, b: any) {
      if (a.results > b.results) {
        return -1;
      }
      if (a.results < b.results) {
        return 1;
      }
      return 0;
    });

    //obtenemos el id
    initCategory = initCategory[0].id;

    //Esta aPi no esta funcionado en varios casos, la ejecuto con varios Ids 
    categories = await axios.get(
      `${Urls.categories}${initCategory}`
    );

    //convierto el array a array de strings
    categories = categories.data.path_from_root.map((item: any) => item.name);

    //segun observe en la imagem la miga de pan tiene 5 categorias
    categories = categories.length > 5 ? categories.slice(-5) : categories;
  }

  const objectReturn: SearchResponse = {
    autor: getAutor(),
    items,
    categories
  }

  return objectReturn;
}

/**
 * Funcion para adaptar la respuesta de mercado libre a la api 
 * @param itemId odentificador del producto
 * @returns un item completo
 */
export const buildItem = async (itemId: any): Promise<SearchByIdResponse> => {

  const data = (await axios.get(`${Urls.baseItems}${itemId}`)).data;

  const description = await axios.get(`${Urls.baseItems}${itemId}/description`);

  const fullItem: FullItem = {
    id: data.id,
    title: data.title,
    price: {
      amount: Math.floor(data.price).toString(),
      currency: data.currency_id,
      decimals: ((data.price % 1) * 100).toFixed(0)
    },
    sold_quantity: data.sold_quantity,
    free_shipping: data.shipping.free_shipping,
    condition: data.condition,
    picture: data.pictures[0].secure_url,
    description: description.data.plain_text
  }

  //Categorias
  let categories;
  categories = await axios.get(
    `${Urls.categories}${data.category_id}`
  );

  categories = categories.data.path_from_root.map(
    (item: any) => item.name
  );

  const objectReturn: SearchByIdResponse = {
    autor: getAutor(),
    item: fullItem,
    categories
  }
  return objectReturn;
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

