//burder
fetch('/').then((data) => {
    return data.json();
}).then((fakeData) => {
    // console.log(fakeData)
    let data1="";
    fakeData.map((values)=>{
        data1+=` <div class="menus-item">
        <img src=${values.image} alt="burger"/>
        <div class="menus-description">
          <h3>${values.title}</h3>
        <p>description goes here </p>
          <input type="number" />
          <button class="add-to-cart">add to cart</button>
        </div>
        <div class="price">
          <p>${values.price} usd</p>
        </div>
      </div>`
    })
document.getElementById('card').innerHTML= data1;

}).catch((err)=>{
    console.log(err)
})





