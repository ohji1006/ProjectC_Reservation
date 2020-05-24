var promotionImgContainer

var promotionImgCount;
var promotionImgWidth;

var currentPromotionIdx = 0;
var slidingAnimationStartTime;

function initSlidingPromotionAnimation(){
    promotionImgContainer = document.querySelector(".visual_img");
    promotionImgContainer.style.transition = "transform 2s ease-out";

    promotionImgCount = document.querySelector(".visual_img").childElementCount;
    promotionImgWidth = document.querySelector(".visual_img .item").offsetWidth;

    setSlidingAnimationStartTime();
}

function slidePromtionAnimation(){
    slidePromtionAnimationByTimeInterval(getTimeIntervalWithStartTime());

    requestAnimationFrame(slidePromtionAnimation);
}

function slidePromtionAnimationByTimeInterval(timeIntervalWithStartTime){
    if(timeIntervalWithStartTime < 3000){
        return;
    }

    promotionImgContainer.style.transform = "translate( -"+ promotionImgWidth*(currentPromotionIdx + 1) + "px)";

    currentPromotionIdx  += 1;
    if( currentPromotionIdx >= promotionImgCount-1 ){
        currentPromotionIdx = -1;
    }

    setSlidingAnimationStartTime();
}

function setSlidingAnimationStartTime(){
    slidingAnimationStartTime = Date.now();
}

function getTimeIntervalWithStartTime(){
    return Date.now() - slidingAnimationStartTime;
}