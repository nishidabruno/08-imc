module.exports.imc = function(peso, altura) {
  const imc = peso / (altura * altura)

  console.log(`O seu IMC é de: ${imc}`)
}