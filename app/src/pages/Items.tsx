import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import CardItem from "../components/Cards/CardItem";
import PageLayout from "../components/Layout/PageLayout";
import { Item } from "../utilities/interfaces";
import { Apis } from "../utilities/statics";
import { joinArray } from "../utilities/utilities";

const Items = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<Array<string>>([]);

  /**
   * Consulta asincrona de los items de la api
   */
  const getItems = useCallback(async () => {
    try {
      setLoading(true);
      const _ = await axios.get(`${Apis.UrlBase}items?q=${searchParams.get("search")}`);
      setProducts(_.data.items);
      setCategories(_.data.categories);
    } catch (error) {
      console.error(error);
    }
  }, [searchParams])

  useEffect(() => {
    getItems().then(() => {
      setLoading(false)
    })
  }, [getItems])

  const initInformation = useMemo(() => {
    let search = searchParams.get("search");
    return {
      information: search ? `Resultado de busqueda para: ${searchParams.get("search")}` : 'Realice una busqueda',
      searchValid: search ? true : false
    }
  }, [searchParams])


  return (
    <PageLayout breadcrumb={joinArray(" > ",categories)}>
      {
        loading ? (<div className="center" data-testid="items-loading">Cargando ...</div>) : <>
          {products.length > 0 ? (<article>
            <div className="message__header">
              <small>{initInformation.information}</small>
            </div>
            <ul className="container__card">
              {
                products?.map((item: Item) => {
                  return <CardItem {...item} key={item?.id} />
                })
              }
            </ul>
          </article>) : (<div className="center" data-testid="items-nodata">No se encontraron productos relacionados con: <strong> {searchParams.get("search")}</strong></div>)}
        </>
      }
    </PageLayout>
  )
}

export default Items;