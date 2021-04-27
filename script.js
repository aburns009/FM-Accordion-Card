document.querySelectorAll('.question').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('open');
    item.nextElementSibling.classList.toggle('hide');
  });
});
