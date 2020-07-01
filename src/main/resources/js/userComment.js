var UserComment = {
    MAXINUM_AVG_NUM: 5,
    scoreElm: null,
    joinCountElm: null,
    shortReviewListElm: null,
    valueGraphElm: null,
    reviewBtn: null,
    backBtn: null,
    init(displayInfo) {
        this.setElement();
        this.buildPage(displayInfo);
    },
    setElement() {
        this.setTextValueElm();
        this.setJoinCOuntElm();
        this.setShortReviewListElm();
        this.setValueGraphElm();
        this.setBtnElm();
    },
    buildPage(displayInfo) {
        this.setBtnAhr(displayInfo['displayInfo']['productId']);
        this.setReviewList(displayInfo);
        this.setCount(displayInfo['comments'].length);
        this.setScore(displayInfo['averageScore']);
        this.setGraph(displayInfo['averageScore'] / this.MAXINUM_AVG_NUM * 100);
    },
    isReviewPage(){
        let curPageName = window.location.pathname.split('/')[window.location.pathname.split('/').length-1].toLowerCase();

        if("review.html".localeCompare(curPageName) === 0){
            return true;
        }
        return false;
    },
    setBtnElm(){
        if(this.isReviewPage()){
            return this.setBackBtnElm();
        }
        this.setReviewBtnElm();
    },
    setBtnAhr(productId){
        if(this.isReviewPage()){
            return this.setBackBtnAhr(productId);
        }
        this.setReviewAhr(productId);
    },
    setBackBtnElm() {
        this.backBtn = document.querySelector(".btn_back");
    },
    setBackBtnAhr(productId) {
        this.backBtn.setAttribute('href', `./detail.html?id=${productId}`);
    },
    setReviewBtnElm() {
        this.reviewBtn = document.querySelector(".btn_review_more");
    },
    setTextValueElm() {
        this.scoreElm = document.querySelector(".text_value").firstElementChild;
    },
    setJoinCOuntElm() {
        this.joinCountElm = document.querySelector(".join_count").firstElementChild;
    },
    setShortReviewListElm() {
        this.shortReviewListElm = document.querySelector(".list_short_review");
    },
    setValueGraphElm() {
        this.valueGraphElm = document.querySelector(".graph_value");
    },
    setReviewAhr(productId) {
        this.reviewBtn.setAttribute('href', `./review.html?id=${productId}`);
    },
    setGraph(persent) {
        this.valueGraphElm.style.width = `${persent}%`;
    },
    setReviewList(displayInfo) {
        if(this.isReviewPage()){
            return this.shortReviewListElm.innerHTML = HtmlFactory.makeCommentList(displayInfo);
        }
        let shortCommentList = { 'comments': displayInfo['comments'].slice(0, 3) }

        this.shortReviewListElm.innerHTML = HtmlFactory.makeCommentList(shortCommentList);
    },
    setCount(num) {
        this.joinCountElm.innerHTML = num + "건";
    },
    setScore(score) {
        this.scoreElm.innerHTML = score.toFixed(1);
    }
}