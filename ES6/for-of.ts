(() => {

  type Avenger = {
    name: string
    weapon: string
  }

  const HawkEye: Avenger = {
    name: 'Clint Barton',
    weapon: 'Arco de flechas'
  }


  const capitanAmerica: Avenger = {
    name: 'Rogers',
    weapon: 'Escudo'
  }


  const Hulk: Avenger = {
    name: 'Bruce Banner',
    weapon: 'Fuerza'
  }

  const avengers: Avenger[] = [HawkEye, Hulk, capitanAmerica]

  for (const avenger of avengers) {
    console.log(avenger.name, '-' , avenger.weapon)
  }


})()