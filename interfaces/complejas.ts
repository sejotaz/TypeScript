(() => {

  interface Client {
    name: string
    age: number
    address: Address
    getFullAdress(id: string): string
  }

  interface Address {
    id: number
    zip: string
    city: string
  }

  const client: Client = {
    name: 'Alejo',
    age: 24,
    address: {
      id: 154,
      zip: 'MDE',
      city: 'Belén'
    },
    getFullAdress( id: string){
      return this.address.city
    }
  }

  const client2: Client = {
    name: 'Sejotaz',
    age: 24,
    address: {
      city: 'Caldas',
      zip: 'CDA',
      id: 784
    },
    getFullAdress(id: string){
      return this.address.city
    }
  }

})()