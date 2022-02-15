
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
    const factsUrl= `https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}` // img & fact
   const quotesUrl= `https://animechan.vercel.app/api/quotes/character?name=${animeName}` //anime ,character ,quote

   const factsData = (obj1) =>{
    //    console.log(obj1)
    //    obj1.forEach(e => {
    //        aImg.src = e.img
    //    });
    // aImg.src = obj1.img
    // for (let i = 0; i < obj1.length; i++) {

    //      aImg.src = obj1.img
    //   }
   }



//    const quotesData = (obj2) =>{
//        console.log(obj2)
//     //    obj2.data.forEach(e =>{
//     //     aName.textContent = e.data.
//     //    })

//    }

   fetch('GET' , factsUrl ,factsData)
//    fetch('GET' , quotesUrl ,quotesData)
})


