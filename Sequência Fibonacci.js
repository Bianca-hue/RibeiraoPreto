function fibonnaci(numero){
    let primeiro = 0, segundo = 1, proximo = 0;

    while (proximo <= numero){
        if (numero == proximo){
            return true;
            break;
        }
        primeiro = segundo;
        segundo = proximo;
        proximo = primeiro + segundo;
    }
    return true;
}

const numero = prompt("Insira o número que deseja verificar se existe na sequência de Fibonacci");
const existe = fibonnaci(numero);

if (existe){
    console.log(`O número ${numero} pertence à sequência.`);
}else{
    console.log(`O número ${numero} não pertence à sequência.`);
}