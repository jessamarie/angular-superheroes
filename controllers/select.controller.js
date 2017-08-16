/* global angular */
(function () {
  angular
    .module('superheroApp')
    .controller('SuperherosController', ['superheros', SuperherosController])

    // You'll also want to add a button next to each superhero
    // that, when clicked, causes the hero's image to be displayed on the page.
  function SuperherosController (superheros) {
    this.superheros = superheros.all()

    this.selectHero = function (hero) {
      this.selectedHero = hero
      this.selected = true
    }

    this.getBorderColor = function (hero) {
      return hero.affiliation === 'Marvel' ? 'marvelBorder' : 'dccomicsBorder'
    }

    this.getIconColor = function (hero) {
      return hero.affiliation === 'Marvel' ? 'marvelIcon' : 'dccomicsIcon'
    }
  } // end controller
})()
