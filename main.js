const input = document.querySelector("#search-input")
const submitBtn = document.querySelector("#search-btn")


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

   const factsData = (data) =>{
       console.log(data)
   }



   const quotesData = (data) =>{

   }

   fetch('GET' , factsUrl ,factsData)
   fetch('GET' , quotesUrl ,quotesData)
})


