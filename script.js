function consumoMensual() {
    return 610;
};

function tarifaPorKilovatio() {
    return 160;
}

let cargoFijo = function() {
    return 4800;
}

let valorIva = function() {
    return 0.19;
}

let subTotalTarifa = () => {
    return consumoMensual()* tarifaPorKilovatio();
}
