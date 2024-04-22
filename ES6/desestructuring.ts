(() => {

  type Avengers = {
    nick: string;
    iroman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    iroman: 'Robert Danwnie Jr',
    vision: 'Paul Bettany',
    activo: true,
    poder: 950.000
  }

  // const {poder, vision} = avengers

  // console.log(poder.toFixed(2), vision.toUpperCase())

  const printAvenger = ( {  nick, ...resto }:Avengers ) => {

    console.log(nick, resto)

  }

  // printAvenger(avengers)

  const avengersArr: string[] = ['HawkEye', 'Campitan America', 'Hulk']

  const [, primerAvenger] = avengersArr

  console.log(primerAvenger)

})()