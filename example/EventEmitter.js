const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (name, age) => {
    console.log(`Hello ${name}, Age - ${age}`)
})

eventEmitter.emit('start', 'Jack Frost', 20)

