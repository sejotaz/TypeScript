(() => {

  const addNumber = (a: number, b:number) => a + b
  const great = ( name: string ) => `Hola ${ name }`
  const nemesis = () => `¡STARS!`

  let myFunction: () => string

  // myFunction = addNumber
  // console.log(myFunction(1,3))

  // myFunction = great
  // console.log(myFunction('Mr. Princess'))

  myFunction = nemesis
  console.log(myFunction())

})()