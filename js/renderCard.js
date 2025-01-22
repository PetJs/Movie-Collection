// function for fetching the movie from the json file
const getMovies = async () => {
    try {
        const response = await fetch('js/data/movies.json')
        const data = await response.json() // parsing the json structure 
        const movies = data.movies
        renderMovies(movies) // call the renderMovies function
    }catch(err){
        console.log(err)
    }
}


// function for rendering the movies into a card section
function renderMovies(movieList) {
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

    movieList.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="gaps">
                <h3>${movie.title}</h3>
                <span class="type">${movie.genre}</span>
            <div/>
        `;
        
        cardGrid.appendChild(card);
    });
}

// calls the function on every page refresh
document.addEventListener('DOMContentLoaded', getMovies);