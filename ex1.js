// Importação da classe events e colocando ele dentro de uma variável.
var events = require('events');
// Objeto
var eventEmitter = new events.EventEmitter();

// Cria um manipulador de eventos
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

// Cria um manipulador de eventos
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

// Vincula a Connection ao manipulador de evnetos 1
eventEmitter.addListener('connection', listener1);

// Vincula o Connection handlerao Listener:
eventEmitter.on('connection', listener2);

// Instancia a classe event
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Dispara o evento connection
eventEmitter.emit('connection');

// Remove a connection do listener 1 e mostra no log isso.
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Dispara o evento de connection
eventEmitter.emit('connection');

// Instancia a classe event e ele busca todos os Listeners, no caso como foi removido o listener1 vai aparecer só o listener2
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Log do fim do programa.
console.log("Program Ended.");
