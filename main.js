document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementsByClassName('emotion-input')[0];
  div.addEventListener('change', (e) => {
    console.log(e);
  });
});
