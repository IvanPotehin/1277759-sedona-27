window.onload = function () {
  var search_form = document.getElementsByClassName('search-header'),
      search_form_close = document.getElementsByClassName('search-header.close');
  search_form.onclick = function() {
    search_form.style.display = 'none';
  }
  search_form_close.onclick = function() {
    search_form_close.classList.remove("close");
  }

}