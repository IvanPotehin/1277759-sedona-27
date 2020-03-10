var btn_search_form = document.querySelector('.search-header'),
    search_form = document.querySelector('.form-content'),
    dateEntry = document.querySelector('.arrival-control'),
    form_submit = document.querySelector('.search-btn'),
    arrival = search_form.querySelector('[name=arrival]'),
    departure = search_form.querySelector('[name=departure]'),
    adults = search_form.querySelector('[name=adults]'),
    children = search_form.querySelector('[name=children]');

if(search_form !== null) {
  search_form.classList.add('modal');

  btn_search_form.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (search_form.classList.contains('modal-show')) {
      search_form.classList.remove('modal-show');

    } else {
      search_form.classList.add('modal-show');
    };
    dateEntry.focus();
  });

  search_form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adults.value || !children.value) {
      evt.preventDefault();
      search_form.classList.add("modal-error");
    }
    else {
      return true;
    }
  });
}