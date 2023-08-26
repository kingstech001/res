// const api = document.getElementById("api")

// const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';

// fetch(url)
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '21a2c9b6dcmsh63485a0abcfd048p191df1jsn3d0006839c59',
// 		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
// 	}
// };


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
//     co= textContent.innerHtml
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// console.log('about to fetch')
// catchRainbow();
// async function catchRainbow() {
// const response = await fetch('https://fakestoreapi.com/products/1');
// const blob = await response.blob();
// document.getElementById('rainbow').src = URL.createObjectURL(blob)


// .then(response =>{
//     console.log(response);
//     return response.blob();
// })
// .then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// })
//     .catch(error =>{
//         console.log('error!');
//         console.log(error);
   
// });

fetch('https://fakestoreapi.com/products/1') 
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
})