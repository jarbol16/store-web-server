import express from "express";
import { Messages } from '../utilities/constans';
import { buildItem, buildItems } from "../services/itemsService";
import { SearchByIdResponse, SearchResponse } from "../models/typesEntity";

const items = express.Router();

items.get('/', async (req, res) => {
  const { q } = req.query;

  try {
    buildItems(q).then((response: SearchResponse) => {
      if (response.items) {
        res.send(response);
      } else {
        res.status(404);
        res.send(Messages.NoFound);
      }
    })

  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }

})

items.get("/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    buildItem(itemId).then((response: SearchByIdResponse) => {
      res.status(200);
      res.send(response);
    });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
})

export default items;
