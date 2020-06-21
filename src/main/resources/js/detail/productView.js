var ProductView = {
    INITIAL_PAGE_NUM:1,

    imgListElm: null,
    pageCurCountElm:null,
    pageTotalCountElm:null,
    prevBtnElm:null,
    nxtBtnElm:null,

    imgTotalCount: null,
    imgWidth: null,
    imgIdx: null,
    init(displayInfo){
        this.setVisualImgList();
        this.setPagination();
        this.setPrevBtn();
        this.setNxtBtn();

        this.setImgTotalCount(displayInfo['productImages'].length);
        this.setImgWidth(this.imgListElm.offsetWidth);

        this.initSlidingAnimation();

        this.buildPage(displayInfo);
    },
    buildPage(displayInfo){
        this.buildVisualImgList(displayInfo);
        this.buildPageNation();
        this.buildBtn();
    },
    setImgTotalCount(count) {
        this.imgTotalCount = count;
        // this.imgListElm.firstElementChild.childElementCount;
    },
    setImgWidth(width) {
        this.imgWidth = width;
        // this.imgListElm.firstElementChild.offsetWidth;
    },
    setPagination(){
        let pagination = document.querySelector(".figure_pagination").children;

        this.pageCurCountElm = pagination[0];
        this.pageTotalCountElm = pagination[1].firstElementChild;
    },
    setVisualImgList(){
        this.imgListElm = document.querySelector(".visual_img.detail_swipe");
    },
    setPrevBtn(){
        this.prevBtnElm = document.querySelector(".prev");
    },
    setNxtBtn(){
        this.nxtBtnElm = document.querySelector(".nxt")
    },
    buildVisualImgList(displayInfo){
        this.imgListElm.innerHTML = HtmlFactory.makeProductImg(displayInfo);
    },
    setCurrentNumToElm(num){
        this.pageCurCountElm.innerHTML = num;
    },
    setTotalNumToElm(num){
        this.pageTotalCountElm.innerHTML = num;
    },
    removeBtn(){
        this.prevBtnElm.style.display = 'none';
        this.nxtBtnElm.style.display = 'none';
    },
    buildPageNation(){
        this.setCurrentNumToElm(this.INITIAL_PAGE_NUM);
        this.setTotalNumToElm(this.imgTotalCount);
    },
    buildBtn(){
        if(this.imgTotalCount == this.INITIAL_PAGE_NUM){
            this.removeBtn();
        }
    },
    initSlidingAnimation(){
        this.imgIdx = 0;
        this.imgListElm.style.transition = "transform 1s ease-out";
    },
    moveAnimation(btn){
        if(btn === this.nxtBtnElm){
            this.moveRightAnimation();
        }else{
            this.moveLeftAnimation();
        }

        this.setCurrentNumToElm(this.imgIdx+1);
    },
    moveLeftAnimation(){
        if(this.imgIdx ==  0){
            this.imgIdx = this.imgTotalCount -1;
        }
        else{
            this.imgIdx -= 1;
        }

        this.imgListElm.style.transform = "translate( -" + this.imgWidth * this.imgIdx + "px)";
    },
    moveRightAnimation(){
        if(this.imgIdx >= this.imgTotalCount -1 ){
            this.imgIdx = 0;
        }
        else{
            this.imgIdx += 1;
        }

        this.imgListElm.style.transform = "translate( -" + this.imgWidth * this.imgIdx + "px)";
    }

}
//pagination