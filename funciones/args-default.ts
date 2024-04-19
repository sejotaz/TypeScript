(() => {

  const fullName = (firstName: string, lastName?: string, upper:boolean = false):string =>{

    if(upper){
    return `${firstName} ${lastName || 'N/A'}`.toUpperCase()
    }else{
    return `${firstName} ${lastName || 'N/A'}`
    }

  }

  const name = fullName('Alejo', 'Ospina', true)

  console.log( name )

})()