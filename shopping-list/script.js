const list = document.querySelector('ul');
const input = document.querySelector('input')
const button = document.querySelector('button');

input.focus();

button.addEventListener('click', (event) => {
    event.preventDefault();
    let item = input.value;
    console.log(item);
    input.value = '';
    let listItem = document.createElement('li');
    let span = document.createElement('span');
    let newButton = document.createElement('button');
    listItem.appendChild(span);
    listItem.appendChild(newButton);
    span.textContent=item;
    newButton.textContent='Delete'
    listItem.style.listStyleType='none';
    list.appendChild(listItem);
    newButton.addEventListener('click', (event)=>{
    newButton.parentElement.remove();
    input.focus();

})
});



/* 
Finally, use the focus() method to focus the input element, 
so it's ready for entering the next shopping list item. */