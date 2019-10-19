let add = document.querySelector('.add');
let form_wrapper = document.querySelector('.form-wrapper')
let form_submit = document.querySelector('.submit')
let delete_card = document.querySelector('.delete');
let cards = document.querySelector('.cards');
let close = document.querySelector('.close');
let inputs = document.querySelectorAll('input')
let library = [];
let id_stat = 0;

let del = function (e) {
  document.getElementById(e.target.value).remove();
  console.log(e.target.value);
  for (let i = 0; i < library.length; i++) {
    if (library[i].id_num == e.target.value) {
      library.splice(i, 1);
    }
  }
}

let Books = function (title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.id_num = id_stat += 1;
}

let add_book = function () {
  let new_title = document.getElementById('title').value;
  let new_author = document.getElementById('author').value;
  let new_book = new Books(new_title, new_author);
  library.push(new_book);
}

function display() {
  let id_number = 0;
  let c = document.createElement('div');
  let t = document.createElement('div');
  let a = document.createElement('div');
  let b = document.createElement('button');
  c.classList.add('card');
  t.classList.add('title');
  a.classList.add('author');
  b.classList.add('delete');
  b.addEventListener('click', del);
  for (book of library) {
    t.textContent = book.title;
    a.textContent = book.author;
    b.textContent = 'X'
    b.value = id_stat;
    c.id = id_stat;
    c.appendChild(t);
    c.appendChild(a);
    c.appendChild(b);
    cards.appendChild(c);
  }
}

close.addEventListener('click', function () {
  form_wrapper.classList.add('hide');
})

add.addEventListener('click', function (e) {
  form_wrapper.classList.remove('hide');
})

form_submit.addEventListener('click', function () {
  if (inputs[0].value == '' || inputs[1].value == '') {
    return false;
  } else {
    add_book();
    display();
    for (input of inputs) {
      input.value = '';
    }
  }
})

delete_card.addEventListener('click', del)

// display();