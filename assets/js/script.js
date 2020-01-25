"use strict";

window.addEventListener('load', Initialize);
var divInner;
var columns = 3;
var sortedRepos;

function Initialize() {
    divInner = document.getElementById("inner")
    sortedRepos = _.sortBy(repos, "Name");
    CreateAllCards();
}

function CreateAllCards() {
    let htmlContent = "";

    for (let i = 0; i <= sortedRepos.length; i = i + columns) {

        htmlContent += '<div class="card-deck">'

        for (let j = i; j < i + columns; j++) {
            if (sortedRepos[j] != null) {
                htmlContent += CreateCard(sortedRepos[j])
            }
            else {
                htmlContent += CreateEmptyCard();
            }     
        }
        htmlContent += `</div>`
        
    }
    divInner.innerHTML = htmlContent;
}


    function CreateCard(repo) {
        return `
    <div class="card text-white bg-dark mb-3 text-center">
        <div class="card-body">
            <a class="btn btn-secondary card-title rounded-pill" href=${repo.Url}>${repo.Name}</a>
            <p class="card-text">${repo.Description}</p>
        </div>
    </div>`
    }

    function CreateEmptyCard() {
        return `
        <div class="card text-white bg-dark mb-3 text-center">
        </div>`
    }