const button = document.querySelector("#button");
const adviceNum= document.querySelector("#advice-num")
const quote=document.querySelector("#quote-box")
async function getData() {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    adviceNum.innerText="A D V I C E  # "+json.slip.id
    quote.innerText=json.slip.advice;
    console.log(json.slip.advice);
    
  } catch (error) {
    console.error(error.message);
  }
}
getData()