require('../css/style.css')

let people = require('./people.js');

let $ = reguire('jquery');

$.each(people, function(key, value){
$('body').append('<h1>'+people[key].name+'s</h1>');
});

console.log(people);
