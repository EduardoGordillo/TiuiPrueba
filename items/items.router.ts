/**
 * Modulos e interfaces externos
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";
/**
 * Definicion de Enrrutador
 */
export const itemsRouter = express.Router();

/**
 * Definiciones del controlador
 */

// Obtener todos los Items
//GET /

itemsRouter.get('/', async(req: Request, res: Response)=>{
    try{
        const items : Item[] = await ItemService.findAll();
        res.status(200).send(items)
    }catch(e){
        res.status(404).send(e)
    }
});

// Obtener solo un item por su propiedad id
//GET /:id

itemsRouter.get('/:id', async (req:Request, res: Response)=>{
    const id: number = parseInt(req.params.id, 10);
    try{
        const item: Item = await ItemService.find(id);
        if(item){
            return res.status(200).send(item);

        }
        res.status(404).send("Item not found")

    }catch (e){
        res.status(404).send(e)
    }
});
// Crear nuevo Item ingresado el body desde que se hace la peticion
//POST /crear

itemsRouter.post("/crear", async (req: Request, res: Response) => {
    try {
      
      const item: BaseItem = req.body;
  
      const newItem = await ItemService.create(item);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e);
    }
  });

//Actualizar items por su propiedad id
//PUT /:id


itemsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const itemUpdate: Item = req.body;
  
      const existingItem: Item = await ItemService.find(id);
  
      if (existingItem) {
        const updatedItem = await ItemService.update(id, itemUpdate);
        return res.status(200).json(updatedItem);
      }
  
      const newItem = await ItemService.create(itemUpdate);
  
      res.status(201).json(newItem);
  
      
    } catch (e) {
      res.status(500).send(e);
    }
  });

  //Actualizar la propiedad completed del item
  //PUT /complete/:id
  itemsRouter.put("/complete/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const existingItem: Item = await ItemService.find(id);
      if(existingItem){
        existingItem.complete = !existingItem.complete;
      }
      res.status(201).json(existingItem);
     
    } catch (e) {
      res.status(500).send(e);
    }
  });
//  Remover un item por su propiedad id
//DELETE /:id
/**
 * 
 */
itemsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await ItemService.remove(id);
  
      res.sendStatus(204);
    } catch (e) {
      res.status(500).send(e);
    }
  });