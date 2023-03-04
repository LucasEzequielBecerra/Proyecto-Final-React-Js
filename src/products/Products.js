import React from "react";

export const arrProductos = [
    {
        id: 0,
        title: "Atril mini 12 x 5 cm",
        description: "ATRIL MINI PARA BASTIDORES MINI DE 12 X 5cm.",
        price: 735.90,
        img: 'https://www.artisticarubens.com.ar/media/catalog/product/cache/3773871f859e2c7a76ff148e76c1b485/a/t/atril-dalerrowney-mini-12x5cm_1.jpg',
        category: 'Atriles'

    },
    {
        id: 1,
        title: "Atril Artmate estudio 65x99x162cm",
        description: "Medidas 65 x 99 x 162 cm. Para bastidores de hasta 122 cm. Madera de olmo sin lustrar. Origen China.",
        price: 284.70,
        img: 'https://www.artisticarubens.com.ar/media/catalog/product/cache/3773871f859e2c7a76ff148e76c1b485/a/t/atril-artmate-aw-09b-65x99x162_1.jpg',
        category: 'Atriles'

    },
    {
        id: 2,
        title: "Acuarelas Alba Profesionales x 10 ml",
        description: "Acuarelas profesionales marca alba.",
        img: 'https://www.artisticarubens.com.ar/media/catalog/product/cache/fe834d3b1b015d6516f54b6ea9487258/c/o/conjunto-acuarelas-alba-10ml.jpg',
        category: 'Acuarelas',
        price: 116.90

    },
    {
        id: 3,
        title: "Set de acuarelas Daler Rowney aquafine x 48 colores",
        description: "Este juego de pintura de 48 pastillas Aquafine Watercolour de Daler Rowney contiene veinticuatro pinturas de acuarela de alta calidad para estudiantes y un mini pincel Aquafine. Este juego tiene una paleta desmontable y una paleta de 3 depósitos para mezclar pintura.",
        price: 497.40,
        img: 'https://www.artisticarubens.com.ar/media/catalog/product/cache/3773871f859e2c7a76ff148e76c1b485/s/e/set-acuarela-dalerrowney-aquafine-x48_1.jpg',
        category: 'Acuarelas'

    }
]

export function getProducts() {
    return new Promise((resolve, rejected) => {

        let err = false
        setTimeout(() => {
            if (err === true) rejected("Error leyendo los datos");
            resolve(arrProductos);

        }, 1000)
    });
}

export function getProductById(itemIdURL) {
    return new Promise((resolve, rejected) => {

        let err = false
        setTimeout(() => {
            if (err === true) rejected("Error leyendo los datos");
            let findProduct = arrProductos.find((item) => item.id === Number(itemIdURL))
            resolve(findProduct);

        }, 1000)
    });
}

