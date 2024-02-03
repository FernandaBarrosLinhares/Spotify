const searchInput = document.getElementById('search-Input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm){
    const url =`(http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-image');

    result.array.forEach(element => {
        artistName.innerText =element.name;
        artistImage.src = element.urlImg;
        
    });

    resultArtists.classList.remove('hidden');
}



document.addEventListener('ínput',function() {
    const seachTerm = searchInput.value.toLowerCase();
    if(searchTerm === ''){
        resultPlaylist.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestApi(seachTerm);
})