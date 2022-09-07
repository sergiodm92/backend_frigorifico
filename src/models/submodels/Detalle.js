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
}

module.exports = {
    DetalleFaena,
    DetalleVenta,
    DetallePagos
}