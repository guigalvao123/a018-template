const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
const arrayDois = [2,4,6,8,10]

function multiplicaNumeros(array) {
  const novoArray = []
  for (numero of array){
      novoArray.push(numero * 3)
  }
  return novoArray
}
console.log(multiplicaNumeros(arrayNumeros))

function retornaPares (array){
  const arrayPares = []
    for (numero of array){
      if(numero % 2 === 0){
      arrayPares.push(numero)
      }
   }
  return arrayPares
}
 console.log(retornaPares(arrayNumeros))

const retornaArrayPares = (array) => {
  const arrayPares = []
    for(numero of array){
      if(numero % 2 === 0)
       arrayPares.push(numero)
  } 
  return arrayPares
}
console.log(retornaArrayPares(arrayNumeros))


const funcaoNova = (array, funcao) => {
  const resultado = funcao(array)
  console.log("Resultado da nova funcao", resultado)
}

funcaoNova(arrayNumeros,multiplicaNumeros)
funcaoNova(arrayNumeros,retornaPares)

const multiplicaNumerosMap = arrayNumeros.map((numeros, indice, array) => {
  return numeros * 2
})
console.log(multiplicaNumerosMap)

const paresMap = arrayNumeros.map((numeros, indice, array) =>{
    if (numeros%2 === 0){
    return numeros
  }
 })
 console.log(paresMap)

 const filtraParesMap = arrayNumeros.filter((numeros, indice, array) =>{
  if (numeros%2 === 0){
  return numeros
}
})
console.log(filtraParesMap)


const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]
// Com o array de pokémons do template, faça o seguinte:
// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;

function trataPokemon(pokemons){
  pokemons.vida = 100
}

// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;

const pokemonsVidaCheia = pokemons.map((elemento) => {
  trataPokemon(elemento)  
  return elemento
})
console.log("map",pokemonsVidaCheia)

// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback

const pokemonsDeFogo = pokemons.filter((pokemon)=> pokemon.tipo === "fogo")
console.log("Filter pokemon fogo", pokemonsDeFogo)