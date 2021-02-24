let queryString = window.location.search
let urlParams = new URLSearchParams(queryString)
let symbol = urlParams.get('symbol')
let dateArr = []
let closeArr = []
let loaderCompany = document.getElementById("loaderCompany")


function newData() {

    fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`).then(response => {
        response.json().then(data => {

            loaderCompany.classList.add('visually-hidden')
            let picture = document.getElementById('company-image')
            picture.src = data.profile.image
            document.getElementById('company-name').innerText = data.profile.companyName
            document.getElementById('company-description').innerText = data.profile.description
            document.getElementById('company-link').innerText = data.profile.website
            document.getElementById('stock-price').innerText = data.profile.price
            let changes = document.getElementById('changes')
            changes.innerText = data.profile.changesPercentage

            let percentsChanges = data.profile.changesPercentage
            let numberPercents = parseFloat(percentsChanges.substring(1, percentsChanges.length - 1))

            if (numberPercents < 0) {

                changes.style.color = 'red'
            }
            else if (numberPercents > 0) {
                changes.style.color = 'green'
            }

        })
    })
}
function historicalPrice() {
    fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`).then(response => {
        response.json().then(data => {
            parsHistoricalPrice(data)

        })
    })
}

newData()
historicalPrice()


function parsHistoricalPrice(data) {
    for (let i = 0; i < data.historical.length; i++) {
        dateArr.push(data.historical[i].date)
        closeArr.push(data.historical[i].close)

    }
    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {

        type: 'line',
        data: {

            labels: dateArr,
            datasets: [{
                label: 'Historical price',
                data: closeArr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


