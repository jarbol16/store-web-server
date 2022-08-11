import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from 'react-router-dom';
import CardItem from "../components/Cards/CardItem";
import PageLayout from "../components/Layout/PageLayout";
import { Item } from "../utilities/interfaces";
import { Apis } from "../utilities/statics";

const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  /**
   * Consulta asincrona de los items de la api
   */
  const getItems = async () => {
    try {
      setLoading(true);
      const _ = await axios.get(`${Apis.UrlBase}items?q=${searchParams.get("search")}`);
      setProducts(_.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //console.log("search", searchParams.get("search"));
    getItems().then(() => {
      setLoading(false)
    })
  }, [searchParams])

  const initInformation = useMemo(() => {
    let search = searchParams.get("search");
    return {
      information: search ? `Resultado de busqueda para: ${searchParams.get("search")}` : 'Realice una busqueda',
      searchValid: search ? true : false
    }
  }, [searchParams])


  return (
    <PageLayout breadcrumb={"Miga de Pan"}>
      {
        loading ? (<div className="center">Cargando ...</div>) : <>
          {products.length > 0 ? (<div>
            <div className="message__header">
              <small>{initInformation.information}</small>
            </div>
            <div className="container__card">
              {
                products?.map((item: Item) => {
                  return <CardItem {...item} key={item?.id} />
                })
              }
            </div>
          </div>) : (<div className="center">No se encontraron productos relacionados con: <strong> {searchParams.get("search")}</strong></div>)}
        </>
      }
    </PageLayout>
  )
}

export default Items;