let buttonSearch = document.getElementById('button')
let unorderedList = document.getElementById('search-results')
let divResults = document.getElementById('results')
let loader = document.getElementById('loader')
let search = document.getElementById('search')
let line = document.getElementsByTagName("li")
let url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ"

buttonSearch.addEventListener('click', () => {
    listOfData()
    document.getElementById('search-results').remove()
    loader.classList.remove('visually-hidden')
})

function listOfData() {
    fetch(url).then(response => {
        response.json().then(data => {
            getResults(data)
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
        line.classList.add('company-line')
        let anchor = document.createElement('a')
        anchor.href = `/company.html?symbol=${data[i].symbol}`
        anchor.innerText = data[i].name
        anchor.classList.add('company-name')
        let symbolCompany = document.createElement('span')
        symbolCompany.classList.add('symbol-company')
        symbolCompany.innerText = ` (${data[i].symbol})`
        anchor.appendChild( symbolCompany)


        showAvatar()
        async function showAvatar() {

            let response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${data[i].symbol}`);
            let user = await response.json();

            let companyImage = document.createElement('img')

            companyImage.src = user.profile.image

            let companyPrice = document.createElement('span')
            companyPrice.innerText = user.profile.changesPercentage
            companyPrice.classList.add('percents-changes')

            let percentsChangesSearch = user.profile.changesPercentage
            let numberPercents = parseFloat(percentsChangesSearch.substring(1, percentsChangesSearch.length - 1))
            if (numberPercents < 0) {
                companyPrice.style.color = 'red'
            }
            else if (numberPercents > 0) {
                companyPrice.style.color = 'green'
            }
            anchor.appendChild(companyPrice)

            companyImage.classList.add('images')
            anchor.appendChild(companyImage)

            divResults.appendChild(anchor)
            line.appendChild(anchor)
            unorderedList.appendChild(line)
        }
    }
}





