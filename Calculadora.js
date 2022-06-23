function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1 - Soma(+)\n 2 - subtração(-)\n 3 - multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)'));

    if(!operacao || operacao >= 7){
        alert('-------Erro--------\n Operação inválida');
        calculadora();
    }else{
        
    let n1 = Number(prompt('insira o primeiro valor:'));
    let n2 = Number(prompt('insira o segundo valor:'));
    let resultado;

    if(!n1 || !n2){
        alert('-------Erro--------\n Operação inválida');
        calculadora();
    } else{
function soma (){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaoperacao();
    }
    function subtracao (){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaoperacao();
    }
    function multiplicacao (){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaoperacao();
    }
    function divisaoReal (){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaoperacao();
    }
    function divisaointeira (){
        resultado = n1 % n2;
        alert(`O resto de divisão entre ${n1} e ${n2} =${resultado}`);
        novaoperacao();
    }
    function potenciacao (){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª = ${resultado}`);
        novaoperacao();
    }
    function novaoperacao(){
        let op = prompt('Deseja fazer outra operação\n 1 - Sim\n 2 - Não');

        if(op==1){
            calculadora();
        } else if (op==02){
            alert('Até mais');
        } else {
            alert('Digite uma opção válida!')
            novaoperacao();
        }
    }

    }

    switch(operacao){
        case 1:
            soma();
             break
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaointeira();
            break;
        case 6:
            potenciacao();
            break;

    }
    }
}


calculadora();