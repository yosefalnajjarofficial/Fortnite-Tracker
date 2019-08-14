const submitButton = document.querySelector('.main__button');

submitButton.addEventListener('click', (e) => {
  //   e.preventDefault();
  const gamerName = document.querySelector('.main__gamer-name').value;
  console.log(gamerName);
  const platform = document.querySelector('.main__platform').value;
  fetch(`/profile/${platform}/${gamerName}`)
    .then((res) => console.log('response sent'))
    .catch((err) => console.log(err));
});
