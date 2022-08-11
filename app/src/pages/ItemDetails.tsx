import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PageLayout from "../components/Layout/PageLayout";
import { FullItem } from "../utilities/interfaces";
import { Apis } from "../utilities/statics";
import { currencyFormat, joinArray } from "../utilities/utilities";

const ItemDetails = () => {
  const params = useParams();
  const [itemDetail, setItemDetail] = useState<FullItem>();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Array<string>>([]);

  const getItemDetails = useCallback(async () => {
    try {
      setLoading(true);
      const _ = await axios.get(`${Apis.UrlBase}items/${params.id}`)
      setCategories(_.data.categories);
      setItemDetail(_.data.item);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, [params])

  useEffect(() => {
    getItemDetails().then(() => {
      setLoading(false);
    })
  }, [getItemDetails])

  return (
    <PageLayout breadcrumb={joinArray(" > ", categories)}>
      {loading ?
        (<div className="center">Cargando ...</div>) : <>
          {itemDetail ? (

            <article key={itemDetail?.id} className="details">
              <figure className="details__figure">
                <img src={itemDetail?.picture} alt={'imagen producto'} className={'image'} />
              </figure>
              <div className="details__row">
                <small>
                  {itemDetail?.condition === "new" ? "Nuevo - " : "Usado - "}
                  {itemDetail?.sold_quantity} Vendidos
                </small>
                <h1 className="details__row__h1">
                  {itemDetail?.title}
                </h1>
                {
                  itemDetail?.price && (<h2 className="details__row__h2">
                    {currencyFormat(itemDetail?.price.currency)}  {parseInt(itemDetail.price.amount).toLocaleString("de-DE")}
                    {parseInt(itemDetail?.price?.decimals) > 0 ? <sup>{itemDetail?.price?.decimals}</sup> : undefined}
                  </h2>)
                }
                <button className="details__row__button">Comprar</button>
              </div>
              <div className="description">
                <h2 className="description__gray">Descripción del producto</h2>
                <small className="description__gray">{itemDetail?.description}</small>
              </div>
            </article>
          ) : (<div className="center">No hay infromacion del producto:<strong>{params.id}</strong></div>)}
        </>
      }

    </PageLayout>
  )
}

export default ItemDetails;