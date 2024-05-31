import response from "express";
import ItemService from "../services/ItemService.js";

export const getItemsByQuery = async (req, res = response) => {
  try {
    const items = await ItemService.getItemsByQuery(req.query);

    res.json({
      ...items,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error.toString(),
    });
  }
};

export const getItemById = async (req, res = response) => {
  try {
    const item = await ItemService.getItemById(req.params);

    if (item.error) {
      return res.status(404).json({
        error: true,
        message: item.error.toString(),
      });
    }

    res.json({
      ...item,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error.toString(),
    });
  }
};
