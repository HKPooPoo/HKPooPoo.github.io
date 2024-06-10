// const text = document.querySelector(".author");
// const texts = JSON.parse(text.getAttribute("data-text"));

// let index = 0;
// let charIndex = 0;
// let delta = 500;

// let start = null;
// let isDeleting = false;

'全民製作人們 大家好',
'我是練習時長兩年半的',
'個人練習生 余承熹',
'喜歡 單機 模組 電腦',
'Music'

// const text1 = document.querySelector(".author-info-text-1");

// const textLoad2 = () => {
//     setTimeout(() => {
//         text1.textContent = "全民製作人們 大家好";
//     }, 0);
//     setTimeout(() => {
//         text1.textContent = "我是練習時長兩年半的";
//     }, 4000);
//     setTimeout(() => {
//         text1.textContent = "個人練習生 余承熹";
//     }, 8000);
//     setTimeout(() => {
//         text1.textContent = "喜歡 單機 模組 電腦";
//     }, 12000);
//     setTimeout(() => {
//         text1.textContent = "Music";
//     }, 16000);    
// }
// textLoad1()

// const text2 = document.querySelector(".author-info-text-2");

// const textLoad1 = () => {
//     setTimeout(() => {
//         text2.textContent = "全民製作人們 大家好";
//     }, 0);
//     setTimeout(() => {
//         text2.textContent = "我是練習時長兩年半的";
//     }, 4000);
//     setTimeout(() => {
//         text2.textContent = "個人練習生 余承熹";
//     }, 8000);
//     setTimeout(() => {
//         text2.textContent = "喜歡 單機 模組 電腦";
//     }, 12000);
//     setTimeout(() => {
//         text2.textContent = "Music";
//     }, 16000);    
// }
// textLoad2()

const text1 = document.querySelector(".author-info-text-1");
const text2 = document.querySelector(".author-info-text-2");

const textLoad1 = () => {
    setTimeout(() => {
        text1.textContent = "全民製作人們 大家好";
        }, 0);
        setTimeout(() => {
        text1.textContent = "我是練習時長兩年半的";
        }, 4000);
        setTimeout(() => {
        text1.textContent = "個人練習生 余承熹";
        }, 8000);
        setTimeout(() => {
        text1.textContent = "喜歡 單機 模組 搞機";
        }, 12000);
        setTimeout(() => {
        text1.textContent = "很抱歉夾帶了點私貨";
        }, 16000);    
        setTimeout(() => {
        text1.textContent = "但這是我創作的唯一動力";
        }, 20000);    
    };

const textLoad2 = () => {
    setTimeout(() => {
        text2.textContent = "全民製作人們 大家好";
        }, 0);
    setTimeout(() => {
        text2.textContent = "我是練習時長兩年半的";
        }, 4000);
    setTimeout(() => {
        text2.textContent = "個人練習生 余承熹";
        }, 8000);
    setTimeout(() => {
        text2.textContent = "喜歡 單機 模組 搞機";
        }, 12000);
    setTimeout(() => {
        text2.textContent = "很抱歉夾帶了點私貨";
        }, 16000);    
    setTimeout(() => {
        text2.textContent = "但這是我創作的唯一動力";
        }, 20000);    
};

textLoad1();
textLoad2();