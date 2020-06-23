var Promotion = {
    promotionElement: null,
    imgCount: null,
    imgWidth: null,
    slidingStartTime: null,
    currentImgIdx: null,
    MIN_INTERVAL_TIME: 3000,
    async init() {
        this.setPromotionElement();
        await this.setPromotionList();
        this.setImgCount(this.promotionElement.childElementCount);
        this.setImgWidth(this.promotionElement.offsetWidth);

        this.initSlidingAnimation();
        this.slideAnimation();
    },
    setImgCount(count) {
        this.imgCount = count;
    },
    setImgWidth(width) {
        this.imgWidth = width;
    },
    setSlidingStartTime(time) {
        this.slidingStartTime = time;
    },
    getSlidingStartTime() {
        return this.slidingStartTime;
    },
    setPromotionElement() {
        this.promotionElement = document.querySelector(".visual_img");
    },
    setPromotionHTML(promotionHtml) {
        this.promotionElement.innerHTML = promotionHtml;
    },
    async setPromotionList() {
        var promotionInfo = await Server.getPromotionList();

        this.setPromotionHTML(HtmlFactory.makePromotionHTML(promotionInfo['items']));
    },
    initSlidingAnimation() {
        this.currentImgIdx = 0;
        this.promotionElement.style.transition = "transform 2s ease-out";
        this.setSlidingStartTime(Date.now());
    },
    slideAnimation() {
        Promotion.promptSlidingWithTimeInterval(Promotion.getTimeInterval());

        requestAnimationFrame(Promotion.slideAnimation);
    },
    getTimeInterval() {
        return Date.now() - this.getSlidingStartTime();
    },
    moveAnimation() {
        this.promotionElement.style.transform = "translate( -" + this.imgWidth * (this.currentImgIdx + 1) + "px)";

        this.currentImgIdx += 1;
        if (this.currentImgIdx >= this.imgCount - 1) {
            this.currentImgIdx = -1;
        }
    },
    promptSlidingWithTimeInterval(timeInterval) {
        if (timeInterval < this.MIN_INTERVAL_TIME) {
            return;
        }

        this.moveAnimation();

        this.setSlidingStartTime(Date.now());
    }
}