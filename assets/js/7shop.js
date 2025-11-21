let data = fetch('backendurl').then((response) => {response.data}).then()
let products = [
    {
        id: 1 ,
        title : 'Something',
        price : 200,
        img : 'img1.jpg'
    },
    {
        id: 2 ,
        title : 'Something else',
        price : 300,
        img : 'img2.jpg'
    },
    {
        id: 3 ,
        title : 'Something',
        price : 240,
        img : 'img3.jpg'
    },
    {
        id: 4 ,
        title : 'Yuhoo',
        price : 350,
        img : 'img4.jpg'
    },
    {
        id: 5 ,
        title : 'Yuhoo',
        price : 600,
        img : 'img5.jpg'
    },

]

let img_server_path = "assets\\images\\products\\";

function renderCard(product){
    let markup = `
        <div class="card col-12 col-sm-6 col-md-4 col-lg-3 p-0" style="width: 18rem;">
                <img src="${img_server_path}${product.img}" class="card-img-top object-fit-cover" alt="..." style="height: 100px;">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Rs.${product.price}</p>
                    <a href="" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
    `
    return markup;
}

let productContainer = document.querySelector('#products_container');
let full_markup = '';
// productContainer.innerHTML = renderCard(products[0]);
products.map(
    (product) => {
        full_markup += renderCard(product);
    }
)
productContainer.innerHTML = full_markup;