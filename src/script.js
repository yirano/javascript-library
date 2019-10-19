let add = document.querySelector('.add');
let form_wrapper = document.querySelector('.form-wrapper')
let form = document.querySelector('.form');
let form_submit = document.querySelector('.submit')
let delete_card = document.querySelector('.delete');
let cards = document.querySelector('.cards');
let close = document.querySelector('.close');
let inputs = document.querySelectorAll('input')
let status = document.querySelector('.status button')
let read = document.querySelector('#read');
let library = [];
let id_stat = 0;
let evt_fired = false;

let Books = function (title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.id_num = id_stat += 1;
}

function del(e) {
  document.getElementById(e.target.value).remove();
  for (let i = 0; i < library.length; i++) {
    if (library[i].id_num == e.target.value) {
      library.splice(i, 1);
    }
  }
}

function drop(e) {
  document.getElementById(e.target.value).classList.add('drop');
  evt_fired = true;
}

function add_book() {
  let new_title = document.getElementById('title').value;
  let new_author = document.getElementById('author').value;
  let new_book = new Books(new_title, new_author);
  library.push(new_book);
}

// function read_status() {
//   if (read.checked == false) {
//     status.classList.remove('read');
//   } else {
//     status.classList.add('read');
//   }
// }

function submit_form() {
  if (inputs[0].value != '' && inputs[1].value != '') {
    add_book();
    display();
    for (input of inputs) {
      input.value = '';
    }
  }
}

function display() {
  let id_number = 0;
  let c = document.createElement('div');
  let t = document.createElement('div');
  let a = document.createElement('div');
  let b = document.createElement('button');
  let s = document.createElement('div');
  let r = document.createElement('button');
  c.classList.add('card');
  t.classList.add('title');
  s.classList.add('status');
  r.classList.add('read');
  r.textContent = 'Read';
  a.classList.add('author');
  b.classList.add('delete');
  r.addEventListener('click', function (e) {
    e.target.classList.toggle('read');
    if (e.target.classList.contains('read')) {
      e.target.textContent = 'Read';
    } else {
      e.target.textContent = 'To Read';
    }
  })
  b.addEventListener('click', function (e) {
    drop(e)
    setTimeout(function () {
      if (evt_fired == true) {
        del(e);
      }
    }, 180)
  });
  for (book of library) {
    t.textContent = book.title;
    a.textContent = book.author;
    b.textContent = 'X'
    b.value = id_stat;
    c.id = id_stat;
    c.appendChild(t);
    c.appendChild(s);
    c.appendChild(a);
    c.appendChild(b);
    s.appendChild(r);
    cards.appendChild(c);
  }
}

status.addEventListener('click', function (e) {
  e.target.classList.toggle('read');
  if (e.target.classList.contains('read')) {
    e.target.textContent = 'Read';
  } else {
    e.target.textContent = 'To Read';
  }
})

close.addEventListener('click', function () {
  form_wrapper.classList.add('hide');
})

add.addEventListener('click', function (e) {
  form_wrapper.classList.remove('hide');
  form_wrapper.classList.remove('none');
})

form.addEventListener('keypress', function (e) {
  if (e.key == 'Enter') {
    if (inputs[0].value != '' && inputs[1].value != '') {
      add_book();
      display();
      for (input of inputs) {
        input.value = '';
      }
    }
  }
})

form_submit.addEventListener('click', submit_form);

delete_card.addEventListener('click', function (e) {
  drop(e)
  setTimeout(function () {
    if (evt_fired == true) {
      del(e);
    }
  }, 180)
})

// display();