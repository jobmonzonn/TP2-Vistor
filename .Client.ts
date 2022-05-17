
import AbstractCarPart from './Car-part'
import IVisitor from './ivisitor'

export class CarBody extends AbstractCarPart {
    // Parte del auto
}

export class Engine extends AbstractCarPart {
    // Parte del auto
}

export class Wheel extends AbstractCarPart {
    // Parte del auto
}

export class Car extends AbstractCarPart {
    // Partes del auto
    #parts: AbstractCarPart[]

    constructor(name: string) {
        super(name)
        this.#parts = [
            new CarBody('Utility Body', 'ABC-123-21', 1001),
            new Engine('V8 engine', 'DEF-456-21', 2555),
            new Wheel('FrontLeft', 'GHI-789FL-21', 136),
            new Wheel('FrontRight', 'GHI-789FR-21', 136),
            new Wheel('BackLeft', 'GHI-789BL-21', 152),
            new Wheel('BackRight', 'GHI-789BR-21', 152),
        ]
    }

    accept(visitor: IVisitor) {
        this.#parts.forEach((part) => {
            part.accept(visitor)
        })
        visitor.visit(this)
    }

    createcarforparts(carbody: CarBody, engine: Engine, wheels: Wheel[]){
        this.#parts = [
            carbody,
            engine,
            ...wheels
        ]

    }


}

export class PrintPartsVisitor implements IVisitor {
    // Imprime el nombre de la pieza y el sku
    visit(abstractCarPart: AbstractCarPart) {
        if (abstractCarPart.sku !== undefined) {
            return `${abstractCarPart.name}\t:${abstractCarPart.sku}\t:${abstractCarPart.price}`
        }
    }
}

export class TotalPriceVisitor implements IVisitor {
    // Imprime el costo total de las partes en el auto
    totalPrice = 0

    visit(abstractCarPart: AbstractCarPart) {
        if (abstractCarPart.price !== undefined) {
            this.totalPrice += abstractCarPart.price as number
        }
    }
}