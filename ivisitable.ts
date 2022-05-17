import IVisitor from './ivisitor'

export default interface IVisitable {
    // Una interfaz que deben implementar los objetos concretos que permita
    // al visitante atravesar una estructura jerárquica de objetos
    accept(visitor: IVisitor): void
}