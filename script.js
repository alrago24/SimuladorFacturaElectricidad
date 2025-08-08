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


