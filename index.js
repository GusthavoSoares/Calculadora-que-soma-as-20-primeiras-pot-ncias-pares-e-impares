var somarpar = 0
var somarimpar = 0 
for(var i = 1; i <= 20; i++){
  j = i*i
  console.log(j)
      if(j % 2 == 0){ 
  var somarpar =  somarpar + j
  }else if (j % 2 !== 0){
 var somarimpar =  somarimpar + j
  }
}
 console.log("A soma dos quadrados pares é de:", somarpar )
  console.log("A soma dos quadrados ímpares é de:", somarimpar)
