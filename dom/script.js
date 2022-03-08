const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Esto es el glorioso text-content!";
container.appendChild(content);

const tag = document.createElement('p');
const text = document.createTextNode("Hey I'm red!");
tag.appendChild(text);
tag.style.cssText = "color: red";
const element = document.getElementById("container");
element.appendChild(tag);

const header = document.createElement('h3');
header.classList.add('header');
header.textContent = "I'm a blue h3!";
header.style.cssText = "color: blue";
container.appendChild(header);

const box = document.createElement('div');
box.classList.add('box');
box.style.cssText = "border: 5px solid black; background: pink";
container.appendChild(box);

const headerBox = document.createElement('h1');
headerBox.classList.add('headerBox');
headerBox.textContent = "I'm in a div";
box.appendChild(headerBox);

const pBox = document.createElement('p');
pBox.classList.add('pBox');
pBox.textContent = "ME TOO!";
box.appendChild(pBox);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});
/*
btn.addEventListener('click', alertFunction);

function alertFunction(){
    alert("Hooola Mundo");
}*/


