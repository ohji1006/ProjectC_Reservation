var ProductDsc = {
    descriptionElm: null,
    bkMoreOpenBtn: null,
    bkMoreCloseBtn: null,
    init(productContent) {
        this.setElement();
        this.buildPage(productContent);
    },
    setElement() {
        this.setDescriptionElm();
        this.setBkMoreOpenBtn();
        this.setBkMoreCloseBtn();
    },
    setDescriptionElm() {
        this.descriptionElm = document.querySelector(".store_details");
    },
    setBkMoreOpenBtn() {
        this.bkMoreOpenBtn = document.querySelector(".bk_more._open");
    },
    setBkMoreCloseBtn() {
        this.bkMoreCloseBtn = document.querySelector(".bk_more._close");
    },
    buildPage(productContent) {
        this.descriptionElm.innerHTML = productContent;
    },
    fold() {
        this.foldContent();
        this.hiddenCloseBtn();
        this.showOpenBtn();
    },
    unfold() {
        this.unFoldContent();
        this.hiddenOpenBtn();
        this.showCloseBtn();
    },
    foldContent() {
        this.descriptionElm.classList.add('close3');
    },
    unFoldContent() {
        this.descriptionElm.classList.remove('close3');
    },
    showOpenBtn() {
        this.bkMoreOpenBtn.style.display = 'block';
    },
    hiddenOpenBtn() {
        this.bkMoreOpenBtn.style.display = 'none';
    },
    showCloseBtn() {
        this.bkMoreCloseBtn.style.display = 'block';
    },
    hiddenCloseBtn() {
        this.bkMoreCloseBtn.style.display = 'none';
    }
}
