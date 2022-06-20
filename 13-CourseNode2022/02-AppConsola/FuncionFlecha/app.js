// const square = function(x){
//   return x * x
// }

//const square = (x) => x * x
//console.log(square(2))

const event = {
  name: 'Birthday party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList(){
    console.log('Guest list for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + 'is attending' + this.name)
    })
  }
}

event.printGuestList()

const clientes  = {
  name: 'Byte Shop',
  clientes: ['Bob', 'Jose', 'Andres', 'Maria'],
  imprimirClientes(){
    console.log('Clientes de' + this.name)

    this.clientes.forEach((cliente) => {
      console.log(cliente + 'atendido por' + this.name)
    })
  }
}

clientes.imprimirClientes()