import { Car, CarBody, Engine, PrintPartsVisitor, TotalPriceVisitor, Wheel } from "./.client";

test('Cuando_CreacionDeDelorean_Deberia_Calcular_PrecioTotalDePartes', () => {
    const CAR = new Car('DeLorean')

    // Imprime el nombre de la pieza y el sku usando PrintPartsVisitor
    CAR.accept(new PrintPartsVisitor())

    // Calcula el precio total de las partes usando TotalPriceVisitor
    const TOTAL_PRICE_VISITOR = new TotalPriceVisitor()
    CAR.accept(TOTAL_PRICE_VISITOR)
    expect(TOTAL_PRICE_VISITOR.totalPrice).toEqual(4132);
});

test('Cuando_CambiaPartesDelVehiculo_CalcularPrecioTotalDePartes', () => {
    const CAR = new Car('')

    const carbody = new CarBody('Utility Body', 'ABC-123-21', 900);
    const engine = new Engine('V8 engine', 'DEF-456-21', 750);
    const wheels = [new Wheel('FrontLeft', 'GHI-789FL-21', 136), new Wheel('FrontRight', 'GHI-789FR-21', 136), new Wheel('BackLeft', 'GHI-789BL-21', 152), new Wheel('BackRight', 'GHI-789BR-21', 152)] 

CAR.createcarforparts(carbody, engine, wheels);

    // Imprime el nombre de la pieza y el sku usando PrintPartsVisitor
    CAR.accept(new PrintPartsVisitor())

    // Calcula el precio total de las partes usando TotalPriceVisitor
    const TOTAL_PRICE_VISITOR = new TotalPriceVisitor()
    CAR.accept(TOTAL_PRICE_VISITOR)
    expect(TOTAL_PRICE_VISITOR.totalPrice).toEqual(2226);
});


