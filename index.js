import User from './models/user.js'
import Booking from './models/booking.js'
import Vehicle from './models/vehicle.js'
import Driver from './controllers/driver.js'

var users = [new User('hiro', 'laciferin@gmail.com')]
var bookings = [new Booking(1, 1, 1)]
var inventory = []

var vehicles = ['SUV', 'SUV', 'Truck', 'Car', 'FourDrive']
vehicles.forEach(vh => inventory.push(new Vehicle(vh)))

const driver = new Driver(inventory, bookings, users)

driver.main()
