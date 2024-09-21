const quotes=document.querySelector("blockquote");

const author=document.querySelector(".Author");

const newquotes=document.querySelector(".newquote");

const tweet=document.querySelector(".tweet");

//Global variable 
let temp="";


const api="https://quotes-api-self.vercel.app/quote";
const getdata= async ()=> {
    const data=await fetch (api);
    const res=await data.json();
    console.log(res);
    temp=res;
 

    quotes.innerText=res.quote;
    author.innerText=res.author;

    temp=data.quote;


}

getdata();

newquotes.addEventListener("click",()=> {
      getdata();


})

// window.open( ) tekes three argument 

// window.open means open a new window 
// (link,name,specification);

tweet.addEventListener("click",()=> {
    window.open("https://twitter.com/intent/tweet?text=" + temp, "tweet postMessage", "width=400 , height=400");

});
