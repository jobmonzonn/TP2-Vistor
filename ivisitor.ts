import AbstractCarPart from './Car-part'

export default interface IVisitor {
    // Una interfaz que los Visitantes personalizados deberían implementar
    visit(abstractCarPart: AbstractCarPart): void
}