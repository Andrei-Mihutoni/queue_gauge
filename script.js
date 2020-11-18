"use strict";

const url = "https://kea-alt-del.dk/kata-distortion/"

loadJSON();


function loadJSON() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // when loaded, prepare objects
            prepareData(data);
        });
    setTimeout(loadJSON, 5000);
};


function prepareData(data) {
    // console.log(data);
    let queue = parseInt(data.inQueue);
    console.log(queue);
    showData(queue);
};

function showData(queue) {
    document.querySelector("span").textContent = queue;

    const gaugeElement = document.querySelector(".gauge");

    function setGaugeValue(gauge, value) {
        if (value < 0 || value > 25) {
            return;
        }

        gauge.querySelector(".gaugeFill").style.transform = `rotate(${value / 50}turn)`;
        gauge.querySelector(".gaugeCover").textContent = `${Math.round(value * 4)}%`;
        // gauge.querySelector(".gaugeCover").textContent = queue;
    }

    setGaugeValue(gaugeElement, queue);



}


