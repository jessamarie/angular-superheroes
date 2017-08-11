/* global angular */

// You'll also want to add a button next to each superhero
// that, when clicked, causes the hero's image to be displayed on the page.
(function () {
  angular
    .module('superheroApp')
    .controller('SuperherosController', ['superheros', SuperherosController])

  function SuperherosController (superheros) {
    const vm = this
    vm.superheros = superheros.all()
  }
})()
