function initPage(){
    
    let backBtn = document.querySelector('.btn_back');
    backBtn.setAttribute('href', './detail.html?id=' + document.location.search.split('=')[1]);
    
    let dateIns = new Date();
    let dateP = document.querySelector('.inline_txt');
    dateP.innerHTML = dateIns.getFullYear().toString()+"."+ dateIns.getMonth().toString()+"."+dateIns.getDate().toString()+", 총"+
    `<span id="totalCount">0</span>매`;
    
    Handlebars.registerHelper('Price', (price) => {
        let localePrice = parseInt(price).toLocaleString();
        return `${localePrice}원`;
    });
}

class Product{
    constructor(){
        this.visualImg = document.querySelector('.visual_img');
        this.details = document.querySelector('.section_store_details');
        this.productId = document.location.search.split('=')[1];
    }

    static async create(){
        const obj = new Product();
        await obj.setProductElm();
        return obj;
    }

    static get PRODUCTINFOURL() {
        return `/reservation/api/products/`;
    }

    getDisplayInfo(displayInfoId){
        return new Promise( (resolve) => {
            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener("load", ()=>{
                resolve(JSON.parse(httpRequest.responseText));
            });
            httpRequest.open("GET", Product.PRODUCTINFOURL + displayInfoId);
            httpRequest.send();
        })
    }

    makeProductImg(displayInfo){
        let template = document.querySelector("#visualItem").innerHTML;
        let imgElmFactory = Handlebars.compile(template);

        return imgElmFactory(displayInfo);
    }

    makeProductDsc(displayInfo){
        let template = document.querySelector("#productDscItem").innerHTML;
        let dscElmFactory = Handlebars.compile(template);

        return dscElmFactory(displayInfo);
    }

    async setProductElm(){
        let displayInfo = await this.getDisplayInfo(this.productId);

        this.visualImg.innerHTML = this.makeProductImg(displayInfo);
        this.details.innerHTML = this.makeProductDsc(displayInfo);
    }
}
