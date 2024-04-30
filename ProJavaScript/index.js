const image = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // fetch('https://dog.ceo/api/breeds/image/random')
  // .then(res => res.json())
  // .then(json => {
  //     console.log(json.message);
  //     image.src = json.message

  // })

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
  xhr.addEventListener("load", () => {
    console.log(xhr);
    const json = JSON.parse(xhr.response);
    console.log(json);
    image.src = json.message;
  });


});
