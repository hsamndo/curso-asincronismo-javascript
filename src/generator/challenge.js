import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function* fetchData (urlApi) {
    while(true) yield fetch(urlApi)
                    .then(response => response.json())
                    .catch(error => new Error(error));
}

/*
async function getInfo () {
    try {
        const products = await fetchData(`${API}/products`).next().value;
        const product  = await fetchData(`${API}/products/${products[0].id}`).next().value;
        const category = await fetchData(`${API}/categories/${product.category.id}`).next().value;

        console.log(product);
        console.log(product.title);
        console.log(category.name);
        
    } catch(error) {
        console.error(error);
    } 
}
*/

function getInfo () {
    fetchData(`${API}/products`).next().value
        .then(products => {
            console.log(products[0])
            return fetchData(`${API}/products/${products[0].id}`).next().value;
        })
        .then(product => {
            console.log(product.title);
            return fetchData(`${API}/categories/${product.category.id}`).next().value;
        })
        .then(category => console.log(category.name))
        .catch(error => console.error(error));
}

getInfo();