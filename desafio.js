const readline = require('readline');
const { finished } = require('stream');

let experienciaHeroi = [1005, 3008, 5800, 6400, 7605, 8560, 9600];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Deseja iniciar a Jornada?(sim/não) ", (resposta) => {

    switch(resposta.toUpperCase()){

    case "NÃO":
        console.log("Finalizando Jornada...");
        rl.close();
        break;

    case "SIM":
        console.log("[Iniciando Jornada]");
        rl.question("Qual o seu nome de Herói? ", (heroi) => {
            
            const indiceAleatorio = Math.floor(Math.random() * experienciaHeroi.length);
            const experiencia = experienciaHeroi[indiceAleatorio];
            const saida = "O Herói de nome " + heroi + " está no nível de ";

            rl.question("Deseja verificar o seu Elo?(sim/não)", (elo) => {

                switch(elo.toUpperCase()){
                    
                    case "NÃO":
                        console.log("Esse Elo não existe");
                        rl.close();  // Aqui o rl.close() é chamado porque o fluxo de interação é encerrado.
                        break;

                    case "SIM":
                        if (experiencia <= 1000) {
                            console.log(saida + "Ferro");

                        } else if (experiencia < 2000) {
                            console.log(saida + "Bronze");

                        } else if (experiencia < 5000) {
                            console.log(saida + "Prata");

                        } else if (experiencia < 7000) {
                            console.log(saida + "Ouro");

                        } else if (experiencia < 8000) {
                            console.log(saida + "Platina");

                        } else if (experiencia < 9000) {
                            console.log(saida + "Ascendente");

                        } else if (experiencia <= 10000) {
                            console.log(saida + "Imortal");

                        } else {
                            console.log(saida + "Radiante");
                        }
                        rl.close();  // Fechar a interface após o final da verificação do Elo.
                        break;
                        default:
                            console.log("Resposta inválida!") 
                            rl.close();
                            break;
                }
            });
        });
        break;
        default:
            console.log("Resposta inválida!") 
            rl.close();
            break;
    }
});
