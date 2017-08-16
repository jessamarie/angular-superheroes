/* global angular */

(function () {
  angular
    .module('superheroApp')
    .controller('SuperherosFormController', ['superheros', SuperherosFormController])

  function SuperherosFormController (superheros) {
    this.toggleCreationMode = function () {
      this.reset()
      this.creating = !this.creating
    }

    this.setHeroToEdit = function () {
      this.reset()
      var id = document.getElementsByClassName('displayHero')[0].id
      // only edit if valid id#
      if (parseInt(id)) {
        this.hero = superheros.find(id)
        this.editing = !this.editing
      }
    }

    this.reset = function () {
      this.creating = false
      this.editing = false
      this.hero = ''
    }

    this.addSuperhero = function () {
      // basic validation
      var isValid = this.hero.name && this.hero.phonenumber && this.hero.photo_url && this.hero.affiliation

      if (isValid) {
        this.hero.id = superheros.id()
        superheros.create(this.hero)
        this.toggleCreationMode()
        this.hero = null
      }
    }

    this.editSuperhero = function () {
      // basic validation
      var isValid = this.hero.id && this.hero.name && this.hero.phonenumber && this.hero.photo_url && this.hero.affiliation
      if (isValid) {
        superheros.update(this.hero)
        this.reset()
      }
    }
  } // end FormController
})()
