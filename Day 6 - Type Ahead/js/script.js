const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const sortedData = []
const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

fetch(endpoint)
.then(response => response.json())
.then(data => {
    data.forEach(city => {
        sortedData.push([city.city, city.state, city.population]);
    })
})

search.addEventListener("input", (e) => {
    if(e.target.value.length < 1){
        suggestions.innerHTML = "<li>Filter for a city</li><li>or a state</li>"; 
    }
    else{suggestions.innerHTML = "";
        let preview = sortedData.filter(city => city[0].toLowerCase().includes(`${e.target.value.toLowerCase()}`) || city[1].toLowerCase().includes(`${e.target.value.toLowerCase()}`));
        preview.forEach(suggestion => {
            suggestions.innerHTML += `<li>${suggestion[0]}, ${suggestion[1]} <span>${suggestion[2]}</span></li>`
        })
    }
})