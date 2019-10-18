let add = document.querySelector('.add');
let form_wrapper = document.querySelector('.form-wrapper')
let form_submit = document.querySelector('.submit')
let delete_card = document.querySelector('.delete');
let card = document.querySelector('.card');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let status = document.querySelector('.status');
let cards = document.querySelector('.cards');
let books_arr = [];

add.addEventListener('click', function (e) {
  form_wrapper.classList.remove('hide');
  console.log(e);
})

form_submit.addEventListener('click', function () {
  form_wrapper.classList.add('hide');
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
  books_arr.push(new_book);
  console.log(books_arr);
}


form_submit.addEventListener('click', add_book)


let whatIf = new Books('What If?', 'Randall Munroe', 'Read')
books_arr.push(whatIf);

console.log(books_arr);


function test() {
  let p = document.createElement('p');
}