const product = document.getElementById("product")


let limit = 3
let page = 1

async function getProduct() {
    const res = await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?page=${page}&limit=${limit}`)
    const data = res.data
    db=data
    db.forEach(item => {
        let box = document.createElement("div")
        box.className = "mt-3 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto"
        box.innerHTML =`
        <div class="card">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p>${item.price} Tobago Doları</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onclick="addToBasket(${item.id})" class="btn btn-primary">Add to Basket</button>
  </div>
</div>`
product.appendChild(box)
    });
}
getProduct()

function addToBasket(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart.push(db.find((item)=> item.id == id))
  localStorage.setItem("cart", JSON.stringify(cart))
}
