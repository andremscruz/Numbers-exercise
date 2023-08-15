var num = document.getElementById("num");
var caixa = document.getElementById("box");
var res = document.getElementById("res");
var n_array = []; 

function isNumero(n){
    if(Number(n) >= 0 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, n_array)){
        n_array.push(Number(num.value));
        var opt = document.createElement('option');
        opt.text = `Valor ${num.value} adicionado`;
        caixa.appendChild(opt);
        res.innerHTML = '';
    }
    else{
        window.alert('Valor invalido ou ja encontrado na lista');
    }
    num.value = '';
    num.focus();
}
function finalizar(){
    if(n_array.length < 2){
        window.alert('Adicione pelo menos 2 valores antes de finalizar')
    }
    else{
        var tot = n_array.length;
        var maior = n_array[0];
        var menor = n_array[0];
        var soma = 0;
        var media = 0;
        for(var i in n_array){
            soma += n_array[i];
            if(n_array[i] > maior){
                maior = n_array[i];
            }
            if(n_array[i] < menor){
                menor = n_array[i];
            }
        }
        media = soma/tot;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros adicionados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;    
        res.innerHTML += `<p>A soma de todos os valores e ${soma}</p>`;
        res.innerHTML += `<p>A media dos valores digitados e ${media}</p>`;        
    }
}
