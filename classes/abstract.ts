(() => {

 abstract class Mutante {
    constructor(
      public name:string,
      public realName: string
    ){}
  }

  class Xmen extends Mutante{

    savarElMundo(){
      return 'Mundo salvado'
    }

  }
  
  class Villian extends Mutante{
    conquistarElMundo(){
      return 'Mundo conquistado'
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan')
  const magneto = new Villian('Magneto', 'Magnus')

  // console.log(wolverine.savarElMundo()) 
  // console.log(magneto.conquistarElMundo()) 

  const printName = ( character: Mutante ) => {
    // console.log(character.realName)
  }

  printName(wolverine)

})()