const body = document.querySelector("body");

const header = document.createElement("div");
header.className = "header";

const title = document.createElement("h1");
title.classList.add("company-name");
title.innerText = "Get It Done";



function createHeader(){
    header.appendChild(title);
    body.appendChild(header);
}

module.exports = {
    createHeader,
}