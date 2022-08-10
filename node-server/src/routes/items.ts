import express from "express";
import axios from "axios";
import { Urls, Messages } from '../utilities/constans';
import { buildItem, buildItems, getAutor } from "../services/itemsService";
import { SearchByIdResponse, SearchResponse } from "../models/typesEntity";

const items = express.Router();

items.get('/', async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get(`${Urls.getItems}?q=${q}&limit=4`);
    const { results } = response.data;
    if (results) {
      const itemsSeacrh = buildItems(results);

      const objectReturn: SearchResponse = {
        autor: getAutor(),
        items: itemsSeacrh,
        categories: []
      }
      res.send(objectReturn);
    } else {
      res.status(404);
      res.send(Messages.NoFound);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send(error);
  }

})

items.get("/:id", async (req, res) => {
  const itemId = req.params.id;
  
  try {
    buildItem(itemId).then(item => {
      const objectReturn: SearchByIdResponse = {
        autor: getAutor(),
        item: item
      }
      res.status(200);
      res.send(objectReturn);
    });
  }catch(error) {
    res.status(500);
    res.send(error);
  }
})

export default items;
