var ProductView = {
    INITIAL_PAGE_NUM: 1,
    imgContainerElm: null,
    pageCurCountElm: null,
    pageTotalCountElm: null,
    prevBtnElm: null,
    nxtBtnElm: null,
    imgTotalCount: null,
    translateValue:null,
    leftEndIdx:3,
    rightEndIdx:3,
    imgWidth: null,
    imgIdx: 0,
    isTranslationFinished : true,
    productItemList:null,
    transitionCompleted(){
        ProductView.isTranslationFinished = true;
    },
    init(displayInfo) {
        this.setElement();

        this.buildPage(displayInfo);

        this.initSlidingAnimation();
    },
    setElement() {
        this.setVisualImgList();
        this.setPagination();
        this.setPrevBtn();
        this.setNxtBtn();
        this.setimgIdx(0);
    },
    buildPage(displayInfo) {
        this.setImgTotalCount(displayInfo['productImages'].length);
        this.setImgWidth(this.imgContainerElm.offsetWidth);

        this.buildVisualImgList(displayInfo);
        this.buildPageNation();
        this.buildBtn();
    },
    setimgIdx(num){
        this.imgIdx = num;
    },
    setImgTotalCount(count) {
        this.imgTotalCount = count;
    },
    setImgWidth(width) {
        this.imgWidth = width;
    },
    setPagination() {
        let pagination = document.querySelector(".figure_pagination").children;

        this.pageCurCountElm = pagination[0];
        this.pageTotalCountElm = pagination[1].firstElementChild;
    },
    setVisualImgList() {
        this.imgContainerElm = document.querySelector(".visual_img.detail_swipe");
    },
    setPrevBtn() {
        this.prevBtnElm = document.querySelector(".prev");
    },
    setNxtBtn() {
        this.nxtBtnElm = document.querySelector(".nxt")
    },
    setProductItemList(){
        this.productItemList = document.querySelectorAll(".item.container_visual");
    },
    buildVisualImgList(displayInfo) {
        let tempImgElm ="";

        if(this.isSingleProductImg()){
            tempImgElm += HtmlFactory.makeProductImg(displayInfo);
        }else{
            for(var i =0; i< 2; i++){
                tempImgElm += HtmlFactory.makeProductImg(displayInfo);
            }
        }

        this.imgContainerElm.innerHTML = tempImgElm;

        this.setProductItemList();
    },
    setCurrentNumToElm(num) {
        this.pageCurCountElm.innerHTML = num;
    },
    setTotalNumToElm(num) {
        this.pageTotalCountElm.innerHTML = num;
    },
    removeBtn() {
        this.prevBtnElm.style.display = 'none';
        this.nxtBtnElm.style.display = 'none';
    },
    buildPageNation() {
        this.setCurrentNumToElm(this.imgIdx + 1);
        this.setTotalNumToElm(this.imgTotalCount);
    },
    buildBtn() {
        if (this.isSingleProductImg()) {
            this.removeBtn();
        }
    },
    isSingleProductImg(){
        if(this.imgTotalCount == 1){
            return true;
        }
        return false;
    },
    initSlidingAnimation() {
        if(this.isSingleProductImg()){
            return;
        }
        this.addTransitionFinishCallback();

        this.initSlidingValue();
        this.initProductItemList();
    },
    initProductItemList(){
        let itemCount = this.productItemList.length;

        for(let i =0 ;i < itemCount; i++){
            this.productItemList[i].style.opacity = '1';
            this.productItemList[i].style.transition = "transform 1s ease-out";
            this.productItemList[i].style.transform = 'translate('+this.translateValue[i]+'px)';
        }
    },
    initSlidingValue(){
        var itemCount = this.productItemList.length;

        this.leftEndIdx = itemCount-1;
        this.rightEndIdx = itemCount -2;

        this.translateValue = [];
        for(let i =0 ;i< itemCount; i++){
            this.translateValue.push(0);
        }
        this.translateValue[this.leftEndIdx] -= itemCount*this.imgWidth;
    },
    addTransitionFinishCallback(){
        Array.from(this.productItemList).forEach((productItem)=>{
            productItem.addEventListener("transitionend", ()=>{
                this.isTranslationFinished = true;
            });
        })
    },
    moveAnimation(btn) {
        if(!this.isTranslationFinished){
            return;
        }
        this.isTranslationFinished = false;

        if (this.isClickedRightBtn(btn)) {
            this.moveLeftAnimation();
        } else {
            this.moveRightAnimation();
        }

        this.updateCurrentNum();
    },
    isClickedRightBtn(btn){
        if( btn === this.nxtBtnElm ){
            return true;
        }
        return false;
    },
    updateCurrentNum(){
        this.imgIdx = (this.imgIdx + 1)%2;

        this.setCurrentNumToElm(this.imgIdx + 1);
    },
    moveRightAnimation() {
        this.updateTransrateWhenRightMove();
        this.updateItemOpacity(this.rightEndIdx);
        this.applyTransrateValue();
        this.updateEndIdxWhenRightMove();
    },
    moveLeftAnimation() {w
        this.updateTransrateWhenLeftMove();
        this.updateItemOpacity(this.leftEndIdx);
        this.applyTransrateValue();
        this.updateEndIdxWhenleftMove();
    },
    updateTransrateWhenLeftMove(){
        var itemCount = this.productItemList.length;

        for(var i=0 ;i<itemCount;i++){
            this.translateValue[i] -= this.imgWidth;
        }
        this.translateValue[this.leftEndIdx] += itemCount*this.imgWidth;
    },
    updateEndIdxWhenleftMove(){
        var itemCount = this.productItemList.length;

        this.rightEndIdx++;
        if(this.rightEndIdx === itemCount){
            this.rightEndIdx = 0;
        }

        this.leftEndIdx++;
        if(this.leftEndIdx === itemCount ){
            this.leftEndIdx = 0;
        }
    },
    updateEndIdxWhenRightMove(){
        var itemCount = this.productItemList.length;

        this.rightEndIdx--;
        if(this.rightEndIdx === -1){
            this.rightEndIdx = itemCount-1;
        }

        this.leftEndIdx--;
        if(this.leftEndIdx === -1 ){
            this.leftEndIdx = itemCount-1;
        }
    },
    updateItemOpacity(endIdx){
        Array.from(this.productItemList).forEach((elm)=>{
            elm.style.opacity = '1';
        });
        this.productItemList[endIdx].style.opacity = '0';
    },
    applyTransrateValue(){
        Array.from(this.productItemList).forEach((elm,idx)=>{
            elm.style.transform = 'translate('+this.translateValue[idx]+'px)';
        });
    },
    updateTransrateWhenRightMove(){
        var itemCount = this.productItemList.length;

        for(var i=0 ;i<itemCount;i++){
            this.translateValue[i] += this.imgWidth;
        }
        this.translateValue[this.rightEndIdx] -= itemCount*this.imgWidth;
    }
}
