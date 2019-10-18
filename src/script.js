let add = document.querySelector('.add');
let form_wrapper = document.querySelector('.form-wrapper')
let form_submit = document.querySelector('.submit')
let delete_card = document.querySelector('.delete');
let card = document.querySelector('.card');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let status = document.querySelector('.status');
let cards = document.querySelector('.cards');
let library = [];

add.addEventListener('click', function (e) {
  form_wrapper.classList.remove('hide');
  console.log(e);
})

form_submit.addEventListener('click', function () {
  form_wrapper.classList.add('hide');
  add_book();

})

delete_card.addEventListener('click', function () {
  card.classList.add('hide')
})

let Books = function (title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
}

let add_book = function () {
  let new_title = document.getElementById('title').value;
  let new_author = document.getElementById('author').value;
  let new_book = new Books(new_title, new_author);
  library.push(new_book);
  update();
}

let whatIf = new Books('What If?', 'Randall Munroe', 'Read')
library.push(whatIf);

function update() {
  for (book of library) {
    let c = document.createElement('div');
    let t = document.createElement('div');
    let a = document.createElement('div');
    let b = document.createElement('button');
    c.classList.add('card');
    t.classList.add('title');
    a.classList.add('author');
    b.classList.add('delete');
    t.textContent = book.title;
    a.textContent = book.author;
    b.textContent = 'X'
    c.appendChild(t);
    c.appendChild(a);
    c.appendChild(b);
    cards.appendChild(c);
  }
  console.log(library);
}