var btn_search_formm = document.querySelector('.search-header'),
    search_form = document.querySelector('.form-content');

search_form.classList.add('modal');

btn_search_formm.addEventListener('click', function(evt){
  evt.preventDefault();
  if(search_form.classList.contains('modal-show')) {
    search_form.classList.remove('modal-show');
    search_form.classList.remove('modal-error');

  } else {
    search_form.classList.add('modal-show');
  };
});