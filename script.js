const generateMemeBtn = document.querySelector(".generator-meme-button");
const memeImage= document.querySelector("img")
const memeTitle= document.querySelector(".meme-tittle")
const memeAuthor= document.querySelector(".meme-author")




const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};


const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };


generateMemeBtn.addEventListener("click", generateMeme)
generateMeme();