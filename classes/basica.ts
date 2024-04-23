(() => {

  class Avenger {

    // private name: string
    // private team: string
    // public realName?: string
    static avgAge: number = 35
    static getAvgAge(){
      return this.name
    }

    constructor( 
      private name: string,
      private team: string,
      public realName?: string,
    ){}
    public bio() {
      return `${this.name} (${this.team}!!)`
    }
  }



  // const HawkEye: Avenger = new Avenger('HawkEye', 'Capitan', 'Clint Barton' )
  // console.log(HawkEye) 
  // console.log(HawkEye.bio())
  // console.log(Avenger.getAvgAge())

})()