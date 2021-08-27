import Booking from '../models/booking.js'
import prompt from 'prompt-sync'

class Driver {
  input = question => prompt({ sigint: true })(question + '\n')

  constructor (inventory, bookings, users) {
    this.inventory = inventory
    this.bookings = bookings
    this.users = users
  }

  now () {
    let date = new Date()
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
  }

  book (id) {
    while (1) {
      this.inventory.forEach((vh, i) => console.log('id:', i + 1, vh.details))

      let vId = Number(this.input('Vehicle id you want to book'))
      while (id > this.inventory.length)
        vId = Number(this.input('Vehicle id you want to book'))
      const vehicle = this.inventory[vId - 1]
      if (vehicle.available) {
        let bk = new Booking(this.bookings.length + 1, id, vId)
        let duration = Number(
          this.input('How long would you to like to rent it for?')
        )
        vehicle.book(bk.id, this.now(), duration)
        this.bookings.push(bk)
        console.log('Your booking id ', bk.id)
        return
      } else console.log('Vehicle is Already booked')
    }
  }

  pay () {
    let id = Number(this.input('Your booking id?'))
    while (id > this.bookings.length)
      id = Number(this.input('Your booking id?'))
    const bk = this.bookings[id - 1]
    const vh = this.inventory[bk.vId - 1]
    vh.pay(this.now())
    console.log('At your service Anytime, anywhere!!!')
  }

  main () {
    let cmd
    while (1) {
      console.log('Welcome to our rental application')

      let id = Number(this.input('Your user id? GuestId:1'))
      while (id > this.users.length) id = Number(this.input('Pardon me?'))
      const user = this.users[id - 1]

      console.log('1. Book \n2. Pay')
      cmd = Number(this.input('Enter cmd'))
      while (cmd > 2 || cmd < 1) {
        cmd = Number(this.input('Try Again'))
      }
      if (cmd === 1) this.book()
      else this.pay()
    }
  }
}

export default Driver
