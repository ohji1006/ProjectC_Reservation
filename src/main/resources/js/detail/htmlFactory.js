var PageBuilder = {
    displayInfo:null,
    async build(id){
        this.displayInfo = await Server.getDisplayInfo(id);

        ProductView.init(this.displayInfo);
        PageController.init();
    }
}

var HtmlFactory = {
    makeProductImg(displayInfo) {
        let templateHtml = document.querySelector("#visualItem").innerHTML;
        let imgTemplate = Handlebars.compile(templateHtml);

        return imgTemplate(displayInfo);
    }
}

var Server = {
    getDisplayInfo(displayInfoId) {
        return new Promise(function (resolve) {
            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener("load", () => {
                resolve(JSON.parse(httpRequest.responseText));
            });
            httpRequest.open("GET", `/reservation/api/products/${displayInfoId}`);
            httpRequest.send();
        });
    }
}

var PageController = {
    prevBtnElm:null,
    nxtBtnElm:null,
    init(){
        this.setPrevBtnElm();
        this.setNxtBtnElm();

        this.addEventListenerToMoveBtn();
    },
    setPrevBtnElm(){
        this.prevBtnElm = document.querySelector(".prev");
    },
    setNxtBtnElm(){
        this.nxtBtnElm = document.querySelector(".nxt");
    },
    addEventListenerToMoveBtn(){
        this.prevBtnElm.addEventListener("click",this.handleMoveBtnSelection);
        this.nxtBtnElm.addEventListener("click",this.handleMoveBtnSelection);
    },
    handleMoveBtnSelection(event){
        ProductView.moveAnimation(event.currentTarget);
    }
}