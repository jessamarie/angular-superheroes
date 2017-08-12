/* global angular */

// You'll also want to add a button next to each superhero
// that, when clicked, causes the hero's image to be displayed on the page.
(function () {
  angular
    .module('superheroApp')
    .controller('SuperherosController', ['superheros', SuperherosController])

  function SuperherosController (superheros) {
    this.superheros = superheros.all()
    this.selected = false

    this.selectHero = function (hero) {
      this.selectedHero = hero
      this.selected = true
    }

    /* toggling the image after the first
      selection doesn't seem to make sense in this
      case */
    // this.toggleSelect = function () {
    //   this.selected = !this.selected
    // }

    this.getComicAffiliation = function (hero) {
      return hero.affiliation === 'Marvel' ? 'marvel' : 'dccomics'
    }
  } // end controller
})()
