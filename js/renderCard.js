// Selecting the filter elements from the DOM
const genreCheckbox = document.getElementById('genreCheckbox');
const genreDropdown = document.getElementById('genreDropdown');

// function for fetching the movie from the json file
const getMovies = async () => {
    let movies;
    try {
        const response = await fetch('js/data/movies.json')
        const data = await response.json() // parsing the json structure 
        movies = data.movies;

        // event listener for the genre checkbox
        genreCheckbox.addEventListener('change', () => {
            // if the checkbox is checked
            if (genreCheckbox.checked) {
                // get the selected genre from the dropdown
                let selectedGenre = genreDropdown.value;
                // event listener for the genre dropdown
                genreDropdown.addEventListener('change', () => {
                    // get the selected genre from the dropdown on change
                    selectedGenre = genreDropdown.value;
                    // filter the movies based on the selected genre
                    const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
                    // if no movies are found with the selected genre, show an alert
                    if (filteredMovies.length === 0) {
                        alert('No movies found with the selected genre');
                        renderMovies(movies);
                    }
                    // else render the movies with the selected genre
                    else { renderMovies(filteredMovies); }
                });
                // filter the movies based on the selected genre on checking the checkbox
                const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
                renderMovies(filteredMovies);
            } else {
                renderMovies(movies); // call the renderMovies function
            }
        });
        renderMovies(movies); // call the renderMovies function
    } catch (err) {
        console.log(err)
    }
}

// function for rendering the movies into a card section
function renderMovies(movieList) {
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

    movieList.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" >
            <div class="gaps">
                <h3>${movie.title}</h3>
                <span class="type">${movie.genre}</span>
            <div/>
        `;

        card.addEventListener('click', (event) => 
            enlargeCard(movie));

        cardGrid.appendChild(card);
    });
}

// calls the function on every page refresh
document.addEventListener('DOMContentLoaded', getMovies);