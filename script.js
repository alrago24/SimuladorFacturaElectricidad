function consumoMensual() {
    return 610;
};

function tarifaPorKilovatio() {
    return 160;
}

let cargoFijo = function() {
    return 4800;
}

let porcentajeIva = function() {
    return 0.19;
}

let subTotalTarifa = () => {
    return consumoMensual()* tarifaPorKilovatio();
}

let valorIvaAplicado = () => {
    return subTotalTarifa() * porcentajeIva();
}

let totalAPagar = () => {
    return subTotalTarifa() + valorIvaAplicado() + cargoFijo();
}

function detalleFactura() {
    console.log(`Detalle a pagar de su factura\n Consumo mensual: ${consumoMensual()} KVh \n Tarifa por Kilovatio: ${tarifaPorKilovatio()} COP\n Cargo fijo: ${cargoFijo()} COP\n Subtotal a pagar: ${subTotalTarifa()} COP\n Valor IVA: ${valorIvaAplicado()} COP\n Total a pagar por su factura de este mes: ${totalAPagar()} COP`);
};

detalleFactura();