
const input = document.querySelector("#search-input")
const submitBtn = document.querySelector("#search-btn")
const aImg = document.querySelector(".mainImg")
const aName = document.querySelector(".mainName")
const aAnime = document.querySelector("#anime")


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

window.onload = () => {
    input.value = `bleach`;
    submitBtn.click();
};

submitBtn.addEventListener('click', ()=>{
    const animeName = input.value;
    const mainUrl= `https://kitsu.io/api/edge/anime?filter%5Btext%5D=${animeName}` // posterImage.original & attributes.titles.en &synopsis
   const galaryUrl= `https://api.giphy.com/v1/gifs/search?api_key=BEhmVfKdPW8J3qZKPhXMCyNszDlbEci4&q=${animeName}` //images

   const mainFun = (obj1) =>{
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
  atitle.textContent = e.attributes.titles.en
  atitleDiv.appendChild(atitle);

  const abuttDiv = document.createElement('div');
  abuttDiv.classList.add('anime-btn');
  aCard.appendChild(abuttDiv);

  const abutt = document.createElement('button');
  abutt.classList.add('gifs-btn');
  abutt.textContent = "Galary"
  abuttDiv.appendChild(abutt);

    });

   }



//    const galaryFun = (obj2) =>{
//        console.log(obj2)
//     //    obj2.data.forEach(e =>{
//     //     aName.textContent = e.data.
//     //    })

//    }

   fetch('GET' ,  mainUrl ,mainFun)
//    fetch('GET' ,  galaryUrl ,galaryFun)
})
