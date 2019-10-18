let add = document.querySelector('.add');
let form_wrapper = document.querySelector('.form-wrapper')
let form_submit = document.querySelector('.submit')

add.addEventListener('click', function (e) {
  form_wrapper.classList.remove('hide');
  console.log(e);
})

form_submit.addEventListener('click', function () {
  form_wrapper.classList.add('hide');
})

let books_arr = [];

let books = {
  title: 'What If?',
  author: 'Randall Munroe',
  status: 'read'
}