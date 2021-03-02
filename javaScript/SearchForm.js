class SearchForm {
    constructor(image, percentage, name, symbol) {
        this.image = image
        this.percentage = percentage
        this.name = name
        this.symbol = symbol
        this.callBack
        this.buttonSearch = document.getElementById('button')
        this.buttonSearch.addEventListener('click', (() => {

            this.onSearch()
            loader.classList.remove('visually-hidden')

        }))
    }
    async onSearch() {
        document.getElementById('search-results').innerHTML = ""
        const response = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${search.value}&limit=10&exchange=NASDAQ`)
        const data = await response.json()
        loader.classList.add('visually-hidden')
        for (let i = 0; i < 10; i++) {
            const response1 = await fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${data[i].symbol}`)
            const data1 = await response1.json()
            // this.callBack = secondObject.renderResults(data, data1, i)
            this.callRenderResults(data, data1, i)
        }

    }
    callBackMethod(callBack) {
        this.callRenderResults = callBack
    }
}
const obj = new SearchForm()
const secondObject = new SearchResult()
obj.callBackMethod((a, b, c) => {
    secondObject.renderResults(a, b, c)
})
