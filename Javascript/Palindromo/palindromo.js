// solução 1 (Sem tirar os espaços)
function verificaPalindromo(string) {
  if (!string) return;
  console.log(string === string.split("").reverse().join(""));
}
verificaPalindromo("abba");

// solução 2

function varificaPalindromo2(string) {
  if (!string) return;
  if (!string.length) return;
  //Já "tirando" os espaços. com o método replaceAll()
  for (var i = 0; i < string.replaceAll(" ", "").length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return console.log(false);
    }
  }
  return console.log(true);
}

varificaPalindromo2("socorram me subi no onibus em marrocos");

//Outras validações em breve.
