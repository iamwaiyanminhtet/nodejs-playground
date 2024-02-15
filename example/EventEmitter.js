// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('hello', (name, age) => {
//     console.log(`Hello ${name}, Age - ${age}`)
// })

// eventEmitter.emit('hello', 'Jack Frost', 20)

const eventEmitter = require('events');

class myEventEmitter extends eventEmitter {
    log(name) {
        this.emit('message', {type : 'user', name})
    }
}

const myEvent1 = new myEventEmitter();
myEvent1.on('message', data => console.log(data))
myEvent1.log('Jack Frost');
