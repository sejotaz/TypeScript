(() => {

  enum AudioLevel {
    min = 11,
    medium,
    max = 10,
    m, 
  }

  let currentAudio = AudioLevel.m

  console.log(currentAudio)
  console.log(AudioLevel)

})()