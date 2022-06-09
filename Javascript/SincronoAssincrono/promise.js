const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log("Resolvida!"));
  }, 2000); //Quer dizer '2 segundos' ou 2 mil milésimos de segundo



  const resolved = ()=>{await myPromise
    .then((result) => result + " passando pelo then")
    .then((result) => result + " e agora acabou!")
    .catch((err) => result = err.message);

  return resolved;
}

//Podemos ainda ter:

let =  result;
 try{
   result = await myPromise
    .then((result) => result + " passando pelo then")
    .then((result) => result + " e agora acabou!")
 }  catch(err) { result = err.message;}
  return result;

});


/*
  Após 2 segundos, retornará:
  'Resolvida! passando pelo then e agora acabou!'
  */
