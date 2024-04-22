(() => {
  type templateCharacter = {
    name: string
    age?: number
    juegos: string[]
    getName?: () => string
  }

  let myCustomVariable: (string | number | templateCharacter) = 'Alejo'
  console.log(typeof myCustomVariable)

  myCustomVariable = 20
  console.log(typeof myCustomVariable)

  myCustomVariable = {
    name: 'Sejotaz',
    age: 24,
    juegos: ['Todos']
  }
  console.log(typeof myCustomVariable)


})()