const HOST = 'https://api-crud-mongo.herokuapp.com';

const getUrl = `${HOST}/api/v1/products`;

const getProducts = (timeout = 200) => {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject("Таймаут наступил");
        }, timeout);

        fetch(getUrl).then(
            products => {
                products.json().then(
                    parsedProducts => {
                        resolve(parsedProducts)
                        clearTimeout(timeoutId);
                    },
                    errJson => {
                        reject(`Err in parse ${errJson}`);
                        clearTimeout(timeoutId);
                    }
                )
            },
            error => {
                reject(`Err in getProducts: ${error}`);
                clearTimeout(timeoutId);
            }
        )
    })
}

getProducts().then(
    products => {
        console.log(products);
    },
    error => {
        console.log(error);
    }
)

