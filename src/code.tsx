// Class

/**
 * This is the description of the class.
 */
export default class Point {
  /** The x coordinate  */
  x: number

  /** The y coordinate */
  y: number

  /**
   * @param {number} x - The initial x coordinate
   * @param {number} y - The initial y coordinate
   */
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  /**
   * Scales the coordinates by a given factor.
   *
   * @param {number} n - The scale factor
   */
  scale(n: number): void {
    this.x *= n
    this.y *= n
  }
}

// Decorator

export function enumerable(value: boolean) {
  return function (_target: Greeter, _propertyKey: string, descriptor: PropertyDescriptor): void {
    descriptor.enumerable = value
  }
}

export class Greeter {
  greeting: string = 'World'

  constructor(message: string) {
    this.greeting = message
  }

  @enumerable(false)
  greet(): string {
    return `Hello, ${this.greeting}`
  }
}

// Enum

export enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

export const enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

export enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES',
}

// Function

// Named function
export function add(x: number, y: number): number {
  return x + y
}

// Anonymous function
export const myAdd = function (x: number, y: number) {
  return x + y
}

export const greeter = (fn: (a: string) => void) => {
  fn('Hello, World')
}

// Interface

interface Person {
  name: string
  age: number
}

export interface Position {
  x?: number
  y?: number
}

export interface ReadonlyPerson {
  readonly name: string
  readonly age: number
}

export interface StringArray {
  [index: number]: string
}

export interface NumberOrStringDictionary {
  [index: string]: number | string
  length: number
  name: string
}

export type { Person }

// Variable

export type BirdType = {
  wings: 2
}

export interface BirdInterface {
  wings: 2
}

export const bird1: BirdType = { wings: 2 }
export const bird2: BirdInterface = { wings: 2 }

export { bird2 as bird3 }
