const enlargeCard = (movie) => {
    const bigCardDiv = document.createElement('div')
    bigCardDiv.id = 'bigCardDiv';
    bigCardDiv.className = "enlarge"

    bigCardDiv.innerHTML = `
        <div class = "enlarge-card" >
            <button id="close" class="close-btn">X</button>
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
        document.getElementById('bigCardDiv').classList.add('hidden');
    });
    
}