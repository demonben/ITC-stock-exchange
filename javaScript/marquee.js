async function getInfoMarquee() {
  const responseMarquee = await fetch(
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=13&exchange=NASDAQ"
  );
  const dataMarquee = await responseMarquee.json();

  class Marquee {
    constructor(symbol, price) {
      this.symbol = symbol;
      this.price = price;
    }
    marqueeLine() {
      let marquee = document.getElementById("contentMarque");
      let marqueCompany = document.createElement("span");
      marqueCompany.innerText = this.symbol;
      let marquePrice = document.createElement("span");
      marquePrice.innerText = this.price;
      marquePrice.classList.add("marque-price");
      marquee.appendChild(marqueCompany);
      marquee.appendChild(marquePrice);
    }
  }
  getCompaniesMarquee();
  async function getCompaniesMarquee() {
    const companyResponse = await fetch(
      "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=13&exchange=NASDAQ"
    );
    const companyData = await companyResponse.json();
    getInfoMarquee();
    async function getInfoMarquee() {
      for (let i = 0; i < companyData.length; i++) {
        const responseMarquee = await fetch(
          `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${companyData[i].symbol}`
        );
        const dataMarquee = await responseMarquee.json();
        const marqueeCompany = new Marquee(
          dataMarquee.symbol,
          dataMarquee.profile.price
        );
        marqueeCompany.marqueeLine();
      }
    }
  }
}
getInfoMarquee();
