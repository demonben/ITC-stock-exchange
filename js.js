let buttonSearch = document.getElementById('button')
let unorderedList = document.getElementById('search-results')
let divResults = document.getElementById('results')
let loader = document.getElementById('loader')
let search = document.getElementById('search')
let line = document.getElementsByTagName("li")
let url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ"
 // https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}

buttonSearch.addEventListener('click', () => {
    // forSearch()
    listOfData()
    document.getElementById('search-results').remove()
    loader.classList.remove('visually-hidden')
})

function listOfData() {
    fetch(url).then(response => {
        response.json().then(data => {
            getResults(data)
            console.log(data)
        })
    })
}

function getResults(data) {
    loader.classList.add('visually-hidden')
    let unorderedList = document.createElement('ul')
    unorderedList.id = 'search-results'
    divResults.appendChild(unorderedList)
    
    for (let i = 0; i < 10; i++) {
        let line = document.createElement("li")
        // line.classList.add('li')
        let anchor = document.createElement('a')
        anchor.href = `/company.html?symbol=${data[i].symbol}`
        anchor.innerText = data[i].name + ` (${data[i].symbol})`
        
       
        divResults.appendChild(anchor)
        line.appendChild(anchor)
        unorderedList.appendChild(line)
    
    }
}






// test
// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('myParam');


// var paramsString = "q=URLUtils.searchParams&topic=api";
// var searchParams = new URLSearchParams(paramsString);


// let linkToCompany = window.location.search
// console.log(urlParams)
// test

// function forSearch(){
//     let newSomething = document.getElementById('search-results')
//     console.log(newSomething)
//     if (unorderedList.length > 8){
//         console.log('gj')
//         document.getElementById('search-results').remove()
//         loader.classList.remove('visually-hidden')
//         url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${search.value}&limit=10&exchange=NASDAQ`
//         listOfData(url)

//     }
//     else{
//         document.getElementById('search-results').remove()
//         loader.classList.remove('visually-hidden')
//         listOfData() 
//     }
// }