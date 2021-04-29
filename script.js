document.querySelectorAll('.question').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
    item.nextElementSibling.classList.toggle('hide');
  });
});
