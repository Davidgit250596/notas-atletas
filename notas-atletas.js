let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaAtletas(objAtletas) {

  for (let i = 0; i < objAtletas.length; i++) {

    let atleta = objAtletas[i];

    
    let notas = atleta.notas.sort((a, b) => a - b);

    let soma = 0;
    let contador = 0;

    for (let j = 0; j < notas.length; j++) {

      
      if (j !== 0 && j !== notas.length - 1) {
        soma += notas[j];
        contador++;
      }
    }

    let media = soma / contador;

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notas.join(",")}`);
    console.log(`Média Válida: ${media}\n`);
  }
}

calcularMediaAtletas(atletas);
