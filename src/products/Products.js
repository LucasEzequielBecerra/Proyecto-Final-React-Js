import React from "react";

export const arrProductos = [
    {
        id: 0,
        title: "Remera",
        description: "ropa",
        price: 500

    },
    {
        id: 1,
        title: "Pantalon",
        description: "ropa",
        price: 1500

    },
    {
        id: 2,
        title: "Camisa",
        description: "ropa",
        price: 2500

    },
    {
        id: 3,
        title: "Zapatilla",
        description: "ropa",
        price: 3500

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
            let findProduct = arrProductos.map((item) => item.id === itemIdURL)
            resolve(findProduct);

        }, 1000)
    });
}

