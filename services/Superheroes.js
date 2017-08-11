/* global angular */

(function () {
  angular
    .module('superheroApp')
    .factory('superheros', [superherosService])

  function superherosService () {
    const superheros = [
      {
        name: 'Superman',
        phonenumber: '555-555-5557',
        photo_url: 'superman.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Batman',
        phonenumber: '555-555-5557',
        photo_url: 'superman.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Iron Man',
        phonenumber: '555-555-5557',
        photo_url: 'superman.jpg',
        affiliation: 'Marvel'
      }
    ]

    return {
      all: all
    }

    function all () {
      return superheros
    }
  } // end SuperherosService
})()
