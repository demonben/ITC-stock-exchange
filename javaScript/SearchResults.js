// let divResults = document.getElementById('results')
let loader = document.getElementById("loader");
let search = document.getElementById("search");
let line = document.getElementsByTagName("li");

class SearchResult {
  constructor() {
    this.unorderedList = document.getElementById("search-results");
    this.divResults = document.getElementById("results");
  }
  renderResults(data, data1, i) {
    let line = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.href = `/company.html?symbol=${data[i].symbol}`;
    anchor.innerText = data[i].name;

    this.term = search;
    if (this.term.value !== "") {
      this.highlight = data[i].name + data[i].symbol;
      this.highlight = this.highlight.replace(
        new RegExp(this.term.value, "gi"),
        (match) => `<mark>${match}</mark>`
      );
      anchor.innerHTML = this.highlight;
    }
    let symbolCompany = document.createElement("span");
    symbolCompany.classList.add("symbol-company");
    symbolCompany.innerText = ` (${data[i].symbol})`;

    anchor.appendChild(symbolCompany);

    let companyImage = document.createElement("img");
    companyImage.src = data1.profile.image;
    companyImage.classList.add("images");

    let companyPrice = document.createElement("span");
    companyPrice.innerText = data1.profile.changesPercentage;
    companyPrice.classList.add("percents-changes");

    let percentsChangesSearch = data1.profile.changesPercentage;
    let numberPercents = parseFloat(
      percentsChangesSearch.substring(1, percentsChangesSearch.length - 1)
    );
    if (numberPercents < 0) {
      companyPrice.style.color = "green";
    } else if (numberPercents > 0) {
      companyPrice.style.color = "red";
    }
    anchor.appendChild(companyPrice);
    anchor.appendChild(companyImage);
    line.appendChild(anchor);
    this.unorderedList.appendChild(line);
    this.divResults.appendChild(this.unorderedList);
  }
}
