// npm run dev

function idade(dia: number, mes: number, ano: number): void
{
    var aniversario = new Date(ano, mes - 1, dia);
    var dataAtual = new Date();
    var decorrido = dataAtual.getTime() - aniversario.getTime();

    decorrido /= 86_400_000;

    console.log(decorrido < 6570 ? 'Menor de idade' : 'Maior de idade');
}

idade(3, 7, 2004);