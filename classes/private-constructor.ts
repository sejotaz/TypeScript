(() => {

  class OnePiece {
  
   static instance: OnePiece 
   private constructor(
      public name:string
    ){

    }
    static findOnePiece(){
      if(!OnePiece.instance){
        OnePiece.instance = new OnePiece('Encontramos el ONE PIECE')
      }

      return OnePiece.instance

      
    }

    changeName( newName: string ):void{
      this.name = newName

    }

  }

  const onepiece = OnePiece.findOnePiece()
  onepiece.changeName('ONE PIECE')


  // console.log(onepiece)

})()