(() => {

  const fullname = (firstName: string, ...restArgs: string[]):string => {
    return `${firstName} ${restArgs.join(' ')}`
  }

  const Zoro = fullname('Zoro', 'Ronroroa', 'Mohihuara')

  console.log(Zoro)

})()