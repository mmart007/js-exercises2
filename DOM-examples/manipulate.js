const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color='red';
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent="I'm a blue h3!";
h3.style.color='blue';
container.appendChild(h3);

const borderDiv = document.createElement('div');
borderDiv.setAttribute('style', 'border: 1px solid black; background-color: pink');

const divH1 = document.createElement('h1');
divH1.textContent = "I'm in a div";

const divP = document.createElement('p');
divP.textContent = 'ME TOO!'

borderDiv.appendChild(divH1)
borderDiv.appendChild(divP);
container.appendChild(borderDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
