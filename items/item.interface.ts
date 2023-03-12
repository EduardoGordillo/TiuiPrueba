/**
 *
 *
 * @export
 * @interface BaseItem
 */
export interface BaseItem {
    name: string;
    description: string;
    
}
/**
 *
 *
 * @export
 * @interface Item
 * @extends {BaseItem}
 */
export interface Item extends BaseItem {
    id: number;
    date: Date;
}