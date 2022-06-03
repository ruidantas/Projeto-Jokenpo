console.clear();
const prompt = require("prompt-sync")();



while (true) {



const comandos = ["PEDRA", "PAPEL", "TESOURA"];
const resultados = ["VOCÊ GANHOU!", "VOCÊ PERDEU!","EMPATE!"]


let qtdrodadas = 0;
let pontosvoce = 0;
let maquina = 0;
let pontosmaquina = 0;
let empates = 0;
let opcao = 0;

console.log("===== \nBem vindo ao Jokenpô\n=====")

console.log("Digite a quantidade de rodadas que deseja jogar:")
qtdrodadas = +prompt()

for (let i = 1; i <= qtdrodadas; i++) {
  console.log()
  console.log(`RODADA ${i}`)
  console.log(`Você prefere pedra, papel ou tesoura?:\n[0] - ${comandos[0]} \n[1] - ${comandos[1]} \n[2] - ${comandos[2]} `)
opcao = +prompt().trim()


let numeroaleatorio = Math.floor(Math.random() * 3 );

while (opcao != 0 && opcao != 1 && opcao != 2 )
{ console.log('Responda com "0", "1" ou "2"');
  console.log(`Você prefere pedra, papel ou tesoura?:\n[0] - PEDRA \n[1] - PAPEL \n[2] - TESOURA `)
opcao = +prompt()}

maquina = numeroaleatorio

if ((maquina == 0 && opcao == 1) || (maquina == 1 && opcao == 2) || (maquina == 2 && opcao == 0)){
  console.log(`${resultados[0]}`)
  pontosvoce++
}

else if ((maquina == 0 && opcao == 2) || (maquina == 1 && opcao == 0) || (maquina == 2 && opcao == 1))
{
console.log(`${resultados[1]}`)
pontosmaquina++
}

else {
    console.log(`${resultados[2]}`)
    empates++

}


if (numeroaleatorio == 0)
{
  console.log(`A máquina jogou: PEDRA`)
}

else if (numeroaleatorio == 1)
{
  console.log(`A máquina jogou: PAPEL`)
}

else 
{
  console.log(`A máquina jogou: TESOURA`)
}


if (opcao == 0)
{
  console.log(`VOCÊ jogou: PEDRA`)
}

else if (opcao == 1)
{
  console.log(`VOCÊ jogou: PAPEL`)
}

else 
{
  console.log(`VOCÊ jogou: TESOURA`)
}


}
 
console.clear()
if (pontosvoce > pontosmaquina)
{
  console.log()
  console.log(`VOCÊ É O GRANDE CAMPEÃO DO JOKENPÔ.`)
}
else if (pontosmaquina > pontosvoce)
{
  console.log()
  console.log(`A MÁQUINA TE DESTRUIU E VOCÊ FRACASSOU!`)
}
else {
  console.log()
  console.log('O EMPATE PREVALECEU E NINGUÉM GANHOU.')
}


console.log()
console.log(`Resultados:\nVitórias:${pontosvoce}\nEmpates:${empates} \nDerrotas:${pontosmaquina}`)


let jogarnovamente = prompt('Deseja jogar novamente? [1] - SIM OU [2] - NÃO: ')

if (jogarnovamente == 1) {
   
  continue
}
else {
  console.log('O JOGO ACABOU :(')
  break
}

}