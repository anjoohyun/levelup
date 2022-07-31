import axios from 'axios'

function fetchMovies() {
    axios
        .get('https://omdbapi.com/?apikey=7035c60c&s=frozen')
        .then(res => {
            console.log(res)
            const h2El = document.querySelector('h2')
            const imgEl = document.querySelector('img')
            h2El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
        })
}

fetchMovies()