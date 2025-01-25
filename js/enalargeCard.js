const enlargeCard = (movie) => {
    const bigCardDiv = document.createElement('div')
    bigCardDiv.className = "enlarge"

    bigCardDiv.innerHTML = `
        <div class = "enlarge-card" >
            <input type="button" id="close" class="close-btn" value="X">
            <div class="center-img">
                <img src="${movie.image}" alt="" class="enlarge-img">
            </div>
            <div class="gaps">
                <h2>${movie.title}</h2>
                <span class="type">Genre: ${movie.genre}</span>
            <div/>
            <p>Description: ${movie.desc}</p>
        </div>
    `
    document.body.appendChild(bigCardDiv);

    document.getElementById('close').addEventListener('click', () => {
        document.body.removeChild(bigCardDiv);

    });
    
}