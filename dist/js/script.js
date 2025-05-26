"use strict";
const app = document.querySelector('.app');
function crSel(element) {
    return document.querySelector(element);
}
app.textContent = "Server is running";
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
const clockContianer = generateEle({ tag: "DIV", tagClass: "clock-container" });
const clockHeaderContianer = generateEle({ tag: "DIV", tagClass: "clock-header-container" });
function clock() {
}
clock();
