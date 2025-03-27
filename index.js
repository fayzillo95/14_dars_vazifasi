const API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e';
let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}` 
let tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
let tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
let appendDiv = document.querySelector('.append'); 
let searchInput = document.getElementById('search');
let minInput = document.getElementById('min'); 
let maxInput = document.getElementById('max'); 
let scoreInput = document.getElementById('score'); 
let filterBtn = document.querySelector('.btn'); 
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let btn_top = document.querySelector('button[value="top_rated"]');
let btn_popular = document.querySelector('button[value="popular"]');
let btn_upcoming = document.querySelector('button[value="upcoming"]');
let sahigfa = document.querySelector('.title')

page_number = lokalreader('page') || 1;
header_page = lokalreader('header_page') || tokenTop;
let filter = JSON.parse(window.localStorage.getItem('filter')) || [  searchInput.value, minInput.value, maxInput.value, scoreInput.value ];
sahigfa.textContent = page_number

filterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    allSeach()
});

next.addEventListener('click', (event) => {
    event.preventDefault();
    page_number += 1; // Sahifa raqamini oshirish
    console.log(page_number, header_page);
    loaDer(page_number, header_page);
});

prev.addEventListener('click', (event) => {
    event.preventDefault();
    if (page_number > 1) {
        page_number -= 1; 
        console.log(page_number, header_page);
        loaDer(page_number, header_page);
    } else {
        alert('Siz sahifaning boshidasiz');
    }
});


btn_top.addEventListener('click', (event) => {
    event.preventDefault();
    page_number = 1; 
    console.log(page_number, tokenTop);
    loaDer(page_number, tokenTop);
    header_page = tokenTop;
});


btn_popular.addEventListener('click', (event) => {
    event.preventDefault();
    page_number = 1;
    console.log(page_number, tokenPopular);
    loaDer(page_number, tokenPopular);
    header_page = tokenPopular;
});


btn_upcoming.addEventListener('click', (event) => {
    event.preventDefault();
    page_number = 1;
    console.log(page_number, tokenUpComing);
    loaDer(page_number, tokenUpComing);
    header_page = tokenUpComing;
});

function lokalwriter(key,params) {
    window.localStorage.setItem(key,JSON.stringify(params))
}
function lokalreader(params) {
    return JSON.parse(window.localStorage.getItem(params))
}