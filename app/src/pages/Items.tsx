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
    const _ = await axios.get(`${Apis.UrlBase}items?q=${searchParams.get("search")}`);
    console.log("DATAAAAA", _)
    setProducts(_.data.items);
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
      <div>
        <div>
        <small>{initInformation.information}</small>
        </div>
        <div className="container__card">
            {
              products?.map((item: Item) => {
                return <CardItem {...item} key={item?.id}/>
              })
            }
        </div>
      </div>
    </PageLayout>
  )
}

export default Items;