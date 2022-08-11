import React, { FC } from "react";
import { Item } from "../../utilities/interfaces";
import { currencyFormat } from "../../utilities/utilities";
import shipping from "../../assets/images/Shipping.png";
import { useNavigate } from 'react-router-dom';


const CardItem: FC<Item> = ({ condition, free_shipping, id, picture, price, title }) => {
  const navigate = useNavigate();

  return (
    <li className="card" onClick={() => navigate(`./${id}`)}>
      <div className="card__image">
        <img
          src={picture}
          alt={`Imagen miniatura producto ${title}`}
        />
      </div>
      <div className="card__information">
        <div className="card__information__title">
          <label><strong>{currencyFormat(price.currency)}  { parseInt(price.amount).toLocaleString("de-DE")}</strong>
            {parseInt(price.decimals) > 0 ? <sup>{price.decimals}</sup>: undefined}
          </label>
          {free_shipping && <img className="card__information__icon" src={shipping} alt={"shipping"} />}
        </div>
        <h3 className="card__information__h3">{title}</h3>
      </div>
    </li>
  )
}

export default CardItem;