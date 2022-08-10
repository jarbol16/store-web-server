import React, { FC } from "react";
import { Item } from "../../utilities/interfaces";
import { currencyFormat } from "../../utilities/utilities";
import shipping from "../../assets/images/Shipping.png";
import { useNavigate } from 'react-router-dom';


const CardItem: FC<Item> = ({ condition, free_shipping, id, picture, price, title }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`./${id}`)}>
      <div className="card__image">
        <img
          src={picture}
          alt={'picture'}
          className={'image'}
        />
      </div>
      <div className="card__information">
        <div className="card__information__title">
          <label><strong>{currencyFormat(price.currency)}  {price.amount}.{price.decimals}</strong> </label>
          {free_shipping && <img className="icon" src={shipping} alt={"shipping"} />}
        </div>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default CardItem;