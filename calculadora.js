
var captar = 0
function chamar(){
    captar = document.getElementById('nome').value;
    document.getElementById('nomecarro').innerHTML = captar;
}

var captar2 = 0
function chamar2(){
    captar2 = document.getElementById('valor').value;
    document.getElementById('valorbruto').innerHTML = captar2;
}

var captar3 = 0
function chamar3(){
    captar3 = document.getElementById('parcela').value;
    document.getElementById('qtdeparcelas').innerHTML = captar3;
}

var valorfinal = 0;
function calcular(){
    
    juros = 0.1;
    tempo = captar3/12;
    valorfinal = captar2*(1+juros)**tempo;
    alert(valorfinal.toFixed(2));
    mensal= valorfinal/captar3;
    
    document.getElementById('final').innerHTML = valorfinal.toFixed(2);
    document.getElementById('mensal').innerHTML = mensal.toFixed(2);

}

var peso = 0;
function chamar4(){
    peso = document.getElementById('peso').value;
    document.getElementById('valorPeso').innerHTML = peso;
}

var altura = 0;
function chamar5(){
    altura = document.getElementById('altura').value;
    document.getElementById('valorAltura').innerHTML = altura;
}

var imc = 0;
function calcular(){
    
    imc = peso / (altura**2);
    document.getElementById('imc').innerHTML = imc.toFixed(1);

    if (imc < 18.5) {
        document.getElementById('classificacao').innerHTML = 'MAGREZA';
        document.getElementById('obesidade').innerHTML = '0';
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('classificacao').innerHTML = 'NORMAL';
        document.getElementById('obesidade').innerHTML = '0';
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById('classificacao').innerHTML = 'SOBREPESO';
        document.getElementById('obesidade').innerHTML = 'I';
    }
    else if (imc >= 30.0 && imc <= 39.9) {
        document.getElementById('classificacao').innerHTML = 'OBESIDADE';
        document.getElementById('obesidade').innerHTML = 'II';
    }
    else {
        document.getElementById('classificacao').innerHTML = 'OBESIDADE GRAVE';
        document.getElementById('obesidade').innerHTML = 'III';
    }


}
