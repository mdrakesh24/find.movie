const url = "http://www.omdbapi.com/?i=tt3896198&apikey=1c5dfa6f";


const form = document.querySelector('form')
const movie = document.getElementsByClassName('movie-container');
const input = document.getElementById('search-input')
const image = document.getElementsByClassName('movie-image');
const details = document.getElementsByClassName('movie-details');

async function fetchMovie(query){
    const res = await fetch(`${url}&t=${query}`);
    const data = await res.json();
    
    console.log(data);
    // makeImages(data);
}

//Function to read the input
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(input.value);
    let query = input.value.trim();
    
    if(query==''){
        alert("Enter any Movie name to search");
    }
    fetchMovie(query);
})

