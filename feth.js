const HOST = 'https://api-crud-mongo.herokuapp.com';

const getUrl = `${HOST}/api/v1/products`;


fetch(getUrl).then(
    products => {
        products.json().then(
            parsedProducts => {
                resolve(parsedProducts)
            },
            errJson => {
                reject(`Err in parse ${errJson}`);
            }
        )
    },
    error => {
        reject(`Err in getProducts: ${error}`);
        clearTimeout(timeoutId);
    }
)
