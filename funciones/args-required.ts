(() => {

  const fullName = (firstName: string, lastName: string):string =>{
    return `${firstName} ${lastName}`
  }

  const name = fullName('Alejo', 'Foronda')

  console.log({ name })

})()