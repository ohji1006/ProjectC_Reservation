var PageBuilder = {
    displayInfo: null,
    async build(categoryId) {
        this.displayInfo = await Server.getDisplayInfo(categoryId);

        ProductView.init(this.displayInfo);
        ProductDsc.init(this.displayInfo['displayInfo']['productContent'])
        UserComment.init(this.displayInfo);
        DetailInfo.init(this.displayInfo);

        PageController.init();
    }
}

var HtmlFactory = {
    makeProductImg(displayInfo) {
        let templateHtml = document.querySelector("#visualItem").innerHTML;
        let imgTemplate = Handlebars.compile(templateHtml);

        return imgTemplate(displayInfo);
    },
    makeCommentList(displayInfo) {
        let templateHtml = document.querySelector("#commentList").innerHTML;
        let commentListTemplate = Handlebars.compile(templateHtml);

        return commentListTemplate(displayInfo);
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
    prevBtn: null,
    nxtBtn: null,
    dscUnfoldBtn: null,
    dscFoldBtn: null,
    detailItemElm: null,
    detailAreaElm: null,
    init() {
        this.setElement();
        this.addListener();
    },
    setElement() {
        this.setPrevBtnElm();
        this.setNxtBtnElm();
        this.setDscUnfoldBtnElm();
        this.setDscFoldBtnElm();
        this.setDetailItemElm();
        this.setDetailAreaElm();
    },
    addListener() {
        this.addEventListenerToMoveBtn();
        this.addEventListenerToDscUnfoldBtn();
        this.addEventListenerToDscFoldBtn();
        this.addEventListenerToDetailItemElm();
        this.addEventListenerToDetailAreaElm();
    },
    setPrevBtnElm() {
        this.prevBtn = document.querySelector(".prev");
    },
    setNxtBtnElm() {
        this.nxtBtn = document.querySelector(".nxt");
    },
    setDscUnfoldBtnElm() {
        this.dscUnfoldBtn = document.querySelector(".bk_more._open");
    },
    setDscFoldBtnElm() {
        this.dscFoldBtn = document.querySelector(".bk_more._close");
    },
    setDetailItemElm() {
        this.detailItemElm = document.querySelector(".item._detail").firstElementChild;
    },
    setDetailAreaElm() {
        this.detailAreaElm = document.querySelector(".item._path").firstElementChild;
    },
    addEventListenerToMoveBtn() {
        this.prevBtn.addEventListener("click", this.handleMoveBtnSelection);
        this.nxtBtn.addEventListener("click", this.handleMoveBtnSelection);
    },
    addEventListenerToDscUnfoldBtn() {
        this.dscUnfoldBtn.addEventListener("click", this.handleUnfoldBtnSelection);
    },
    addEventListenerToDscFoldBtn() {
        this.dscFoldBtn.addEventListener("click", this.handleFoldBtnSelection);
    },
    addEventListenerToDetailItemElm() {
        this.detailItemElm.addEventListener("click", this.handleDetailItemSelection);
    },
    addEventListenerToDetailAreaElm() {
        this.detailAreaElm.addEventListener("click", this.handleDetailAreaSelection);
    },

    handleMoveBtnSelection(event) {
        ProductView.moveAnimation(event.currentTarget);
    },
    handleUnfoldBtnSelection() {
        ProductDsc.unfold();
    },
    handleFoldBtnSelection() {
        ProductDsc.fold();
    },
    handleDetailItemSelection() {
        DetailInfo.showItem();
    },
    handleDetailAreaSelection() {
        DetailInfo.showArea();
    }
}

Handlebars.registerHelper('Score', (score) => {
    return `<span class='grade'> ${score}.0 </span>`;
});

Handlebars.registerHelper('Name', (name) => {
    return '<span class="name">' + name.substring(0, 1) + '****</span>';
});

Handlebars.registerHelper('Date', (date) => {
    let year = Number(date.substring(0, 4));
    let mounth = Number(date.substring(5, 7));
    let day = Number(date.substring(8, 10));

    return `<span class="date">${year}.${mounth}.${day}. 방문</span>`;
});