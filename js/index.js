resultado = document.getElementById('retorno'); 

const q1 = document.getElementById('q1'); 
const q2 = document.getElementById('q2'); 
const q3 = document.getElementById('q3'); 
const q4 = document.getElementById('q4'); 
const q5 = document.getElementById('q5'); 


var questao1 = document.getElementById('questao1'); 

function funcao1(){
const questao1 = document.getElementById('questao1'); 
retorno();
botaoretorno();
questao1.style.display = "block";
}
function funcao2(){
  const questao2 = document.getElementById('questao2'); 
  retorno();
  questao2.style.display = "block";
  }
  function funcao3(){
    const questao3 = document.getElementById('questao3'); 
    retorno();
    fnq3();
    questao3.style.display = "block";
    }
    function funcao4(){
      const questao4 = document.getElementById('questao4'); 
      retorno();
      fnq4();
      questao4.style.display = "block";
      }
      function funcao5(){
        const questao5 = document.getElementById('questao5'); 
        retorno();
        fnq5();
        questao5.style.display = "block";
        }

function fnq1() {
  const numero = document.getElementById('numero').value;
  const resultado = document.getElementById('resultado1'); 
  const numeroConvertido = Number(numero);
 
  

  if (!Number.isInteger(numeroConvertido) || numeroConvertido < 0 ) {
    alert('Por gentileza, informe um número inteiro e positivo.');
    return; 
  }
  
  var i = 0, j = 1; 
  

  while (i < numeroConvertido) {
    var temp = i;
    i = j;
    j = temp + j;
  }

 
  if (i === numeroConvertido) {
    resultado.innerHTML = `O número ${numeroConvertido} pertence à sequência.`;
    resultado.style.display = 'block';
  } else {
    resultado.innerHTML = `O número ${numeroConvertido} não pertence à sequência.`;
    resultado.style.display = 'block';
  }
}


function fnq2() {
  const string = document.getElementById('string').value;
  const array = string.split('');
  const resultado = document.getElementById('resultado2');
  let vezes = 0; 
  resultado.innerHTML = '';
  console.log(array);


  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'a' || array[i] === 'A') {
      resultado.innerHTML += 'Elemento ' + array[i] + ' na posição ' + (i + 1) + '.<br>';
      vezes++;
    }
  }

  if (vezes > 0) {
    resultado.style.display = "block";
  } else {
    console.log(vezes);
    resultado.innerHTML = "Não foi encontrada a letra 'A' ou 'a'.";
    resultado.style.display = "block";
  }
}



function fnq3() {
  const resultado = document.getElementById('resultado3');
  resultado.innerHTML = '';
  var i = 12;
  var SOMA = 0;
  var K = 1;

 
  while (K < i) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  console.log(SOMA);
  resultado.innerHTML = "O resultado é " + SOMA + 1;
  resultado.style.display = "block";
}


function fnq4() {
  const resultado = document.getElementById('resultado4');
  resultado.innerHTML = `a) 1, 3, 5, 7, sequência é de números ímpares consecutivos.<br><br>

  b) 2, 4, 8, 16, 32, 64, 128<br>
  Essa tá multiplicando o valor por dois.<br><br>
  
  c) 0, 1, 4, 9, 16, 25, 36, 49<br>
  Sequência de quadrados.<br><br>
  
  d) 4, 16, 36, 64, 100<br>
  Quadrados dos números pares. 2², 4², 6², 8²...<br><br>
  
  e) 1, 1, 2, 3, 5, 8, 13<br>
  Sequência de Fibonacci. Soma os dois anteriores.<br><br>
  
  f) 2, 10, 12, 16, 17, 18, 19, 20<br>
  Alternando entre pares e ímpares.`;
  
  
  resultado.style.display = "block";
}


function fnq5() {
  const resultado = document.getElementById('resultado5');
  resultado.innerHTML = `A estratégia para determinar qual interruptor 
  controla cada lâmpada com apenas duas visitas à sala das lâmpadas é a seguinte: 
  Acenda um interruptor e mantenha-o ligado por alguns minutos. Posteriormente, 
  desconecte-o e acione um segundo interruptor. Faça uma visita à sala das lâmpadas. 
  O segundo interruptor controlará a lâmpada que estiver acesa, o primeiro interruptor 
  controlará a lâmpada que estiver apagada e quente,
  e o terceiro interruptor controlará a lâmpada que estiver apagada e fria.`;
  
  resultado.style.display = "block";
}




 function botaoretorno(){
  const re = document.getElementById('retorno'); 
  re.style.display = 'block';
 }


function retorno() {

const q1 = document.getElementById('questao1'); 
const q2 = document.getElementById('questao2'); 
const q3 = document.getElementById('questao3'); 
const q4 = document.getElementById('questao4'); 
const q5 = document.getElementById('questao5'); 

  const questoes = [q1, q2, q3, q4, q5];
  questoes.forEach(questao => {
    if (questao) {
      questao.style.display = 'none';
    }
  });

}
