/*Variáveis em JS*/
var frase 
frase = "Aqui temos uma String"
alert(frase)

/*Fazendo entrada de dados para uma variável */
var nome
nome = prompt("Digite o seu nome: ")
alert("Bem vindo " +nome)

var idade
idade = prompt("Digite sua idade:")
alert("Sua idade é: " +idade)

/*Operações aritméticas com JS*/
var n1, n2, r
n1=14
n2=20

r=n1+n2
alert("O resultado da soma entre "+n1+"+"+n2+"="+r)
/*Considere que os valores n1 e n2 sejam digitados pelo usuario*/
n1=parseInt(prompt("Digite um valor: ")) 
n2=parseInt(prompt("Digite outro valor: "))
r = n1+n2
alert("O resultado da soma entre "+n1+"+"+n2+"="+r)