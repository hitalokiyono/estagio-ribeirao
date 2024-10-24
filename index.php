<!DOCTYPE html>
<html lang="br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/style.css">
<script src="./js/index.js"></script>
    <title>estagio</title>
</head>
<body>  
<h2>Estágio Target-Ribeirão Preto</h2>
<div class="main">

<h3>feito por Hitalo Miguel Caparros Kiyono,18996100520</h3>
<input type="button" id="q1"value="Questao 1" onclick="funcao1()">
<input type="button" id="q2" value="Questao 2" onclick="funcao2()">
<input type="button" id="q3" value="Questao 3" onclick="funcao3()">
<input type="button"id="q4" value="Questao 4" onclick="funcao4()">
<input type="button" id="q5" value="Questao 5"  onclick="funcao5()">



<div class="questao1"  id="questao1" style="display:none">
 <!-- questao 1 sequência de Fibonacci-->

<h3>
1) Dado a sequência de Fibonacci, onde se inicia 
por 0 e 1 e o próximo valor sempre será a soma dos
2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8
, 13, 21, 34...), escreva um programa na linguagem
que desejar onde, informado um número, ele calcule
a sequência de Fibonacci e retorne uma mensagem 
avisando se o número informado pertence ou não a
sequência.
</h3>
<div>
<input type="number" id="numero" value="" placeholder="informe um numero" >
<input type="button" value="enviar" onclick="fnq1()">
</div>
<h3 id="resultado1" style="display:none;" >o resultado é</h3> 
</div>
 

<div class="questao2"  id="questao2"style="display:none">
 <!-- questao 2 array-->

<h3>
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’,
 seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
</h3>
<div>
<input type="text" id="string" value="" placeholder="informe um texto ou  array " >
<input type="button" value="enviar" onclick="fnq2()">
</div>
<h3 id="resultado2" style="display:none;" > </h3> 
</div>
 

<div class="questao3"  id="questao3"style="display:none">
 
<h3>
Observe o trecho de código abaixo: int INDICE = 12, 
SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1;
 SOMA = SOMA + K; } e  imprima a (SOMA);
</h3>
<h3 id="resultado3" style="display:none;" > </h3> 
</div>


<div class="questao4"  id="questao4"style="display:none">
 
<h3>
4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____
</h3>
<h3 id="resultado4" style="display:none;" > </h3> 
</div>

<div class="questao5"  id="questao5"style="display:none">
 
<h3>
5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes.
 Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar
  os interruptores quantas vezes quiser. Seu objetivo é descobrir qual 
  interruptor controla qual lâmpada. Como você faria para descobrir,
   usando apenas duas idas até uma das salas das lâmpadas, 
qual interruptor controla cada lâmpada? 
</h3>
<h3 id="resultado5" style="display:none;" > </h3> 
</div>



</div>

<div class="retorno"    >
  <input id="retorno" style="display:none" type="button" value="retornar" onclick= "retorno()">
  </div>
</body>
</html>