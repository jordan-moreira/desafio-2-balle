function calcular(){
const troco=document.querySelector(".troco").value
let um=0
let cinq=0
let cinc=0
let trocoresto=Number(troco)

while(trocoresto>0){

    trocoresto=trocoresto.toFixed(2)
    trocoresto=Number.parseFloat(trocoresto)
    if(trocoresto>=1){
        trocoresto-=trocoresto%1
        um=trocoresto/1
        trocoresto=troco-trocoresto
    }else if(trocoresto>=0.5){
        trocoresto-=trocoresto%0.5
        cinq=trocoresto/0.5
        trocoresto=troco-trocoresto-um
    }else{
        let resto=trocoresto%0.05
        trocoresto-=trocoresto%0.05
        resto>=0.03?trocoresto+=0.05:trocoresto+=0
        cinc=trocoresto/0.05
        trocoresto-=cinc

    }
}
const resultado=document.querySelector(".result")
resultado.innerHTML+=`A quantidade minima de moedas a serem recebidas sao ${um+cinq+cinc}, sendo ${um} de 1 real, ${cinq} de 50 centavos e ${cinc} de cinco centavos`
}
