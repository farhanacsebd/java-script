function bringSingara(taka) {
    console.log('Singara niye aso', taka)
    console.log("Shingarar jonne tk dice")
    console.log('Mama Shingara dao', taka)
    var Singaraprice = 10;
    var SingaraQuantity = taka / Singaraprice;
    console.log('Mama nao tomar shingara')
    return SingaraQuantity;


}
var money = 250;
var singara = bringSingara(money);
console.log('ei nen mama apnar singara', singara)