(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ){
      // console.log('Constructor Avenger llamado')
    }

    protected getFullName():string{
      return `${this.name} ${this.realName}`
    }

  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ){
      super(name, realName)
      // console.log('Constructor Xmen llamado')
    }

    get gettFullName(){
      return `${this.name} - ${this.realName}`
    }

    set setfullName(name: string){
      this.name = name
    }

    getFullDesdeXmen(){
      // console.log(super.getFullName())
    }

  }

  const gambito = new Xmen('Gambito', 'Remy', true)
  // gambito.getFullDesdeXmen()
  // gambito.setfullName = 'Alejo'
  // console.log(gambito.gettFullName)


})()