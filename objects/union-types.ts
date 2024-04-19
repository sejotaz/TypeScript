(() => {
  type templateCharacter = {
    name: string
    age?: number
    juegos: string[]
    getName?: () => string
  }

  let myCustomVariable: (string | number | templateCharacter) = 'Alejo'
  console.log(myCustomVariable)

})()