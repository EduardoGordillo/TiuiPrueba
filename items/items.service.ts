//src/items/items.service.ts

/**Modelo de data */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";


/** En memoria */
let items: Items = {
    1:{
        id: 1,
        name: 'Instalar dependencias',
        description: 'Instalas las dependencias que usaran durante el proyecto',
        date : new Date(),
    },
    2:{
        id: 2,
        name: 'Configurar proyecto',
        description: 'Añadir la configuración necesaria ',
        date : new Date(),
    },
    3:{
        id: 3,
        name: 'Crear Modelos',
        description: 'Hacer lo modelos para la informacion',
        date : new Date(),
    }
}


/** Metodos de Servicios */

/**
 * Encontrar todos los elementos persistidos
 * @returns  todos los elementos de el array
 */
export const findAll = async (): Promise<Item[]> => Object.values(items);

/**
 * Encuentra el elemento dado por el id
 * @param id 
 * @returns Regresa el elemento dado por el id
 */
export const find = async (id:number): Promise<Item>=>items[id]

/**
 * Ingresando un nuevo elemento se añade a la lista
 * @param newItem 
 * @returns el elemento que se halla ingresado
 */
export const create = async (newItem : BaseItem): Promise<Item> =>{
    const id = new Date().valueOf();

    const date = new Date();

    items[id] = {
        id,
        date,
        ...newItem
    };
    return items[id];
};
/**
 * Con el id del elemento a actualizar se ingresa en la posicion nuevo elemento
 * @param id 
 * @param itemUpdate 
 * @returns el nuevo elemento que se halla actualizado
 */
export const update = async (id: number, itemUpdate: BaseItem): Promise<Item|null> =>{
    const item = await find(id);
    const date = new Date();

    if(!item){
        return null;
    }
    items[id] = {
        id, 
        date,
        ...itemUpdate
    }
    return items[id]
}
 /**
  * se remueve el elemento que coincida con el id
  * @param id 
  * 
  */
export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    delete items[id];
  };