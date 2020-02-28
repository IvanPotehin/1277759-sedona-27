var btn_search_form = document.querySelector('.search-header'),
    search_form = document.querySelector('.form-content'),
    dateEntry = document.querySelector('.arrival-control');

if(search_form !== null) {
  search_form.classList.add('modal');

  btn_search_form.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (search_form.classList.contains('modal-show')) {
      search_form.classList.remove('modal-show');

    } else {
      search_form.classList.add('modal-show');
    }
    ;
    dateEntry.focus();
  });
}