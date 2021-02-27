
// buttonSearch.addEventListener('click', () => {
//     let searchValue = document.getElementById('search').value
    
//     listOfData(searchValue)
//     loader.classList.remove('visually-hidden')
// })

// async function listOfData(searchValue){
//     const response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${searchValue}&limit=10&exchange=NASDAQ`)
//     const data = await response.json()

//     console.log(data)
//     console.log(data[0].symbol)
//     const response1 = await fetch("https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/AAPL")
//     const data1 = await response1.json()
//     console.log(data1)
//     console.log(data1.profile.price)
//     something(data1)
//     class Search{
//         constructor(name, symbol, image, percentage){
//             this.name = name
//             this.symbol = symbol
//             this.image = image
//             this.percentage = percentage
//         }
//            renderResults(){
//                console.log(`hey ${this.name} GJ ${this.symbol} go ahead ${this.image} almost done ${this.percentage}`)
//            } 
//     }
//     const companyInfo = new Search(data[0].name, data[0].symbol, data1.profile.image, data1.profile.changesPercentage )
//     companyInfo.renderResults()
    
// }
