class DetallePagos {
    ID;
    fecha;
    monto;
}

class DetalleFaena {
    correlativo;
    categoria;
    kg;
}

class DetalleVenta {
    correlativo;
    categoria;
    total_media;
    kg;
    $_kg;
    margen;
    saldo;
}

class DetalleStock {
    correlativo;
    categoria;
    kg;
}

module.exports = {
    DetalleFaena,
    DetalleVenta,
    DetallePagos,
    DetalleStock
}