(() => {

  class Avenger {
    constructor(name, power){
      this.name = name,
      this.power = power
    }
  }

  
  
  class FlyingAvenger extends Avenger {
    flying
    
    constructor(name, power){
      super(name, power)
      this.flying = true
    }
  }
  
   const hulk = new Avenger('Hulk', 9001)
   console.log(hulk)
   
   const falcom = new FlyingAvenger('Falcom', 50)
   console.log(falcom)

})()