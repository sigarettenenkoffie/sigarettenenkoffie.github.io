"use strict";

window.addEventListener('load', Initialize);
var divInner;
var columns = 3;
var sortedRepos;
var tags;
var divTags;
var btnList;
var btnShowAll;

function Initialize() {
    divInner = document.getElementById("inner")
    divTags = document.getElementById("divTags");
    btnShowAll = document.getElementById("btnShowAll");
    btnShowAll.addEventListener('click', function() {CreateCardDecks(sortedRepos);});
    sortedRepos = _.sortBy(repos, "Name");
    tags = _.uniq(_.flatten(_.map(repos, 'Tags'))).sort();
    CreateTagButtons();
    CreateCardDecks(sortedRepos);
}


function CreateTagButtons() {
    let htmlContent = "";
    tags.forEach(tag => {
        htmlContent += `<button class="btn btn-secondary btn-small btn-block btnTag" style="font-size:smaller;">${tag}</button>`
    });
    divTags.innerHTML += htmlContent;
    btnList = document.getElementsByClassName('btnTag');
    for(let i=0;i<btnList.length; i++) {
        btnList[i].addEventListener('click', function(){CreateCardDecksFilteredByTag(btnList[i].innerText);});
    }
}

function CreateCardDecksFilteredByTag(filterString) {
    let filteredRepos = [];
    sortedRepos.forEach(repo => {
        if (_.includes(repo.Tags, filterString)) {
            filteredRepos.push(repo);
        }
    });
    CreateCardDecks(filteredRepos);
}


function CreateCardDecks(repos) {
    let htmlContent = "";
    for (let i = 0; i <= repos.length; i = i + columns) {
        htmlContent += '<div class="card-deck">'
        for (let j = i; j < i + columns; j++) {
            if (repos[j] != null) {
                htmlContent += CreateCard(repos[j])
            }
            else {
                htmlContent += CreateEmptyCard();
            }
        }
        htmlContent += `</div>`
    }
    divInner.innerHTML = htmlContent;
    ScrollToTop();
}

function ScrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0
        // behavior: 'smooth'
      });
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