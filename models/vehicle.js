class Vehicle {
  constructor (type, rate = 10) {
    this.type = type
    this.barcode = ''
    this.parkingStall = 0
    this.rate = rate
    this.start = 0
    this.time = 0
    this.bookingId = null
  }
  get available () {
    return this.isAvailable()
  }
  isAvailable () {
    if (isNaN(this.bookingId)) return false
    return true
  }
  book (bookingId, curTime, time) {
    this.bookingId = bookingId
    this.start = this.toHr(curTime)
    this.time = time
  }
  get gc () {
    if (isNaN(this.type)) return true
    return false
  }
  toHr ([hours, minutes, seconds]) {
    return hours + minutes / 60 + seconds / 360
  }

  cost (time = this.time, rate = this.rate) {
    return Math.ceil(time) * this.rate
  }

  reset () {
    this.start = 0
    this.time = 0
    this.bookingId = null
  }

  pay (curTime) {
    let price
    curTime = this.toHr(curTime)
    let duration = this.time + this.start
    if (duration <= curTime) price = this.cost()
    else {
      duration = curTime - this.start
      price = this.cost(duration, 3 * this.rate)
    }
    this.reset()
    console.log('Money deducted from your account:', price)
    console.log('Have a nice day!')
    return price
  }

  locate () {
    if (this.available) return this.parkingStall
    return this.bookingId
  }
  get details () {
    return `Type ${this.type} Rate ${this.rate} Available ${
      this.available
    } Status ${this.locate()}`
  }
}

export default Vehicle
