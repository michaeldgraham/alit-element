import 'reflect-metadata';
import { AlitElement } from './alit-element';
export interface AlitPrototype extends AlitElement {
}
/**
 * Decorator for defining a new custom element
 * @param name tag name of custom element
 */
export declare function element(name: string): (c: any) => void;
/**
 * Decorator to declate a property
 */
export declare function property(): (prototype: any, propertyName: string) => void;
/**
 * Decorator to create a getter for the specified selector
 * @param selector selector to find the element
 */
export declare function query(selector: string): (prototype: AlitPrototype, propertyName: string) => void;
/**
 * Decorator to create a getter that returns a nodelist of all
 * elements matching the selector
 * @param selector selector query
 */
export declare function queryAll(selector: string): (prototype: AlitPrototype, propertyName: string) => void;
/**
 * Decorator to add event handlers
 * @param eventName name of event, e.g. 'click'
 * @param selector EventTarget or a selector to the node to listen to e.g. '#myButton'
 */
export declare function listen(eventName: string, target: string | EventTarget): (prototype: any, methodName: string) => void;
/**
 * Decortator to define an observer that gets called back
 * whenever any of the specified property is updated
 * @param properties list of properties to observe
 */
export declare function observe(...properties: string[]): (prototype: any, methodName: string) => void;
