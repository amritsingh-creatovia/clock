"use strict";
const app = document.querySelector('.app');
function crSel(element) {
    return document.querySelector(element);
}
function generateEle(element) {
    const ele = document.createElement(element.tag);
    ele.classList.add(element.tagClass);
    if (element.tagId) {
        ele.setAttribute('id', element.tagId);
    }
    return ele;
}
// clock contianer
const clockBlock = generateEle({ tag: "DIV", tagClass: "clock-block" });
const clockContainer = generateEle({ tag: "DIV", tagClass: "clock-container" });
const clockHeaderContainer = generateEle({ tag: "DIV", tagClass: "clock-header-container" });
app.appendChild(clockContainer);
clockContainer.appendChild(clockHeaderContainer);
clockContainer.appendChild(clockBlock);
function clock() {
}
clock();
