var UserComment = {
    MAXINUM_AVG_NUM: 5,
    scoreElm: null,
    joinCountElm: null,
    shortReviewListElm: null,
    valueGraphElm: null,
    backBtn: null,
    init(displayInfo) {
        this.setElement();
        this.buildPage(displayInfo);
    },
    setElement() {
        this.setTextValueElm();
        this.setJoinCountElm();
        this.setReviewListElm();
        this.setValueGraphElm();
        this.setBackBtnElm();
    },
    buildPage(displayInfo) {
        this.setBackBtnAhr(displayInfo['displayInfo']['categoryId']);
        this.setReviewList(displayInfo);
        this.setCount(displayInfo['comments'].length);
        this.setScore(displayInfo['averageScore']);
        this.setGraph(displayInfo['averageScore'] / this.MAXINUM_AVG_NUM * 100);
    },
    setTextValueElm() {
        this.scoreElm = document.querySelector(".text_value").firstElementChild;
    },
    setJoinCountElm() {
        this.joinCountElm = document.querySelector(".join_count").firstElementChild;
    },
    setReviewListElm() {
        this.shortReviewListElm = document.querySelector(".list_short_review");
    },
    setValueGraphElm() {
        this.valueGraphElm = document.querySelector(".graph_value");
    },
    setBackBtnElm() {
        this.backBtn = document.querySelector(".btn_back");
    },
    setBackBtnAhr(categoryId) {
        this.backBtn.setAttribute('href', `./detail.html?id=${categoryId}`);
    },
    setGraph(persent) {
        this.valueGraphElm.style.width = `${persent}%`;
    },
    setReviewList(displayInfo) {
        this.shortReviewListElm.innerHTML = HtmlFactory.makeCommentList(displayInfo);
    },
    setCount(num) {
        this.joinCountElm.innerHTML = num + "건";
    },
    setScore(score) {
        this.scoreElm.innerHTML = score.toFixed(1);
    }
}