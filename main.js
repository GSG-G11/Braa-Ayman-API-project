
const input = document.querySelector("#search-input")
const submitBtn = document.querySelector("#search-btn")
const aImg = document.querySelector(".mainImg")
const aName = document.querySelector(".mainName")

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
    input.value = `naruto`;
    submitBtn.click();
};

submitBtn.addEventListener('click', ()=>{
    const animeName = input.value;
    const mainUrl= `https://kitsu.io/api/edge/anime?filter%5Btext%5D=${animeName}` // posterImage.original & attributes.titles.en &synopsis
   const galaryUrl= `https://api.giphy.com/v1/gifs/search?api_key=BEhmVfKdPW8J3qZKPhXMCyNszDlbEci4&q=${animeName}` //images

   const mainFun = (obj1) =>{
    //    console.log(obj1)
    //    obj1.forEach(e => {
    //        aImg.src = e.img
    //    });
    // for (let i = 0; i < obj1.length; i++) {

    //      aImg.src = obj1.img
    //   }
   }



   const galaryFun = (obj2) =>{
       console.log(obj2)
    //    obj2.data.forEach(e =>{
    //     aName.textContent = e.data.
    //    })

   }

   fetch('GET' ,  mainUrl ,mainFun)
   fetch('GET' ,  galaryUrl ,galaryFun)
})


