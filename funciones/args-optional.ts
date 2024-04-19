(() => {

  const fullName = (firstName: string, lastName?: string):string =>{
    return `${firstName} ${lastName || 'N/A'}`
  }

  const name = fullName('Alejo')

  console.log( name )

})()