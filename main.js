
const input = document.querySelector("#search-input");
const submitBtn = document.querySelector("#search-btn");
const aImg = document.querySelector(".mainImg");
const aName = document.querySelector(".mainName");
const aResult = document.querySelector(".anime-result");
const aAnime = document.querySelector("#anime");
const animeDetails = document.querySelector(".anime-details");
const animeCloseDe = document.querySelector("#gif-close-btn");
const maintitle = document.querySelector(".mainTi");


//fetch to create XML
const fetch =(method,url,cb) =>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                cb(JSON.parse(xhr.responseText))
            }
        }
    }
    xhr.open(method,url);
    xhr.send();
}

//when page load the input value = Aot
window.onload = () => {
    input.value = `Aot`;
    submitBtn.click();
};

//XML 1
submitBtn.addEventListener('click', ()=>{
    aAnime.innerHTML='';
    const animeName = input.value;
    // posterImage.original & attributes.titles.en &synopsis
    const mainUrl= `https://kitsu.io/api/edge/anime?filter%5Btext%5D=${animeName}` 

   const mainFun = (obj1) =>{
  if(obj1.data.length !== 0){
    obj1.data.forEach(e => {

  const aCard = document.createElement('div');
  aCard.classList.add('anime-item');
  aAnime.appendChild(aCard);

  const aImageDiv = document.createElement('div');
  aImageDiv.classList.add('anime-img');
  aCard.appendChild(aImageDiv);

  const aImage = document.createElement('img');
  aImage.src = e.attributes.posterImage.original;
  aImageDiv.appendChild(aImage);

  const atitleDiv = document.createElement('div');
  atitleDiv.classList.add('anime-name');
  aCard.appendChild(atitleDiv);

 
  const atitle = document.createElement('h3');
  atitle.textContent = e.attributes.titles.en_jp
  atitleDiv.appendChild(atitle);

  const asynopsisDiv = document.createElement('div');
  asynopsisDiv.classList.add('synopsis');
  aCard.appendChild(asynopsisDiv);

 
  const asynopsis = document.createElement('blockquote');
  asynopsis.textContent = e.attributes.synopsis
  asynopsisDiv.appendChild(asynopsis);

  const abuttDiv = document.createElement('div');
  abuttDiv.classList.add('anime-btn');
  aCard.appendChild(abuttDiv);

  const abutt = document.createElement('button');
  abutt.classList.add('gifs-btn');
  abutt.textContent = "Gallery"
  abuttDiv.appendChild(abutt);
    });

}else{
    aResult.innerHTML='';
    const aNotFou = document.createElement('div');
    aNotFou.classList.add('notFound');
    aNotFou.textContent="Sorry, we didn't find any Anime!"
    aResult.appendChild(aNotFou);
}
   }
   fetch('GET' ,  mainUrl ,mainFun)
}) 

//XML 2
//anime-details
aAnime.addEventListener("click", ()=>{
    // animeDetails.innerHTML='';
    const animeName = input.value;
 const galaryUrl= `https://api.giphy.com/v1/gifs/search?api_key=BEhmVfKdPW8J3qZKPhXMCyNszDlbEci4&q=${animeName}` //images
  animeDetails.style.display='block'

   const galaryFun = (obj2) =>{
    obj2.data.slice(-5).forEach(e => {
       console.log(obj2)
       console.log(e.images.downsized_medium.url)

       const aDetailsDiv = document.createElement('div');
       aDetailsDiv.classList.add('gif-details-content');
       animeDetails.appendChild(aDetailsDiv);

       const aGifDetailsDiv = document.createElement('div');
       aGifDetailsDiv.classList.add('anime-gif-img');
       aDetailsDiv.appendChild(aGifDetailsDiv);

       const agifImage = document.createElement('img');
       agifImage.src = e.images.downsized_medium.url;
       aGifDetailsDiv.appendChild(agifImage);
    });
    
   }
  fetch('GET' ,  galaryUrl ,galaryFun)
});

    //delete details
    animeCloseDe.addEventListener("click",()=>{
        animeDetails.style.display='None'
    })



