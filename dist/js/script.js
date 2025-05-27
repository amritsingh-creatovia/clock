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
const clockHourBlock = generateEle({ tag: "DIV", tagClass: "clock-hours" });
const clockMinutesBlock = generateEle({ tag: "DIV", tagClass: "clock-minutes" });
const clockSecondsBlock = generateEle({ tag: "DIV", tagClass: "clock-seconds" });
app.appendChild(clockContainer);
clockContainer.appendChild(clockHeaderContainer);
clockContainer.appendChild(clockBlock);
clockBlock.appendChild(clockHourBlock);
clockBlock.appendChild(clockMinutesBlock);
clockBlock.appendChild(clockSecondsBlock);
function clock() {
    const currentClock = new Date();
    const currentHour = currentClock.getHours();
    const currentMinutes = currentClock.getMinutes();
    const currentSeconds = currentClock.getSeconds();
    clockHourBlock.textContent = currentHour.toString();
    clockMinutesBlock.textContent = currentMinutes.toString();
    clockSecondsBlock.textContent = currentSeconds.toString();
}
setInterval(clock, 1000);
