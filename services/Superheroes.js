/* global angular */

(function () {
  angular
    .module('superheroApp')
    .factory('superheros', [superherosService])

  function superherosService () {

    /* All images obtained from imgur. Authors are
      found at the respective links (remove .jpg extension)*/
    const superheros = [
      {
        name: 'Superman',
        phonenumber: '555-555-5190',
        photo_url: 'http://i.imgur.com/U6GTsU0m.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Batman',
        phonenumber: '555-555-5245',
        photo_url: 'http://i.imgur.com/19eifidm.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Iron Man',
        phonenumber: '555-555-6523',
        photo_url: 'http://i.imgur.com/SUkgtZpm.jpg',
        affiliation: 'Marvel'
      },
      {
        name: 'Spider Man',
        phonenumber: '555-555-4324',
        photo_url: 'http://i.imgur.com/K1xOUUvm.jpg',
        affiliation: 'Marvel'
      },
      {
        name: 'The Hulk',
        phonenumber: '555-555-4321',
        photo_url: 'http://i.imgur.com/dsRblaj.jpg',
        affiliation: 'Marvel'
      },
      {
        name: 'Thor',
        phonenumber: '555-555-5453',
        photo_url: 'http://i.imgur.com/coWlzzsm.jpg',
        affiliation: 'Marvel'
      },
      {
        name: 'Captain America',
        phonenumber: '555-555-1234',
        photo_url: 'http://i.imgur.com/LkQUOy3m.jpg',
        affiliation: 'Marvel'
      },
      {
        name: 'Wolverine',
        phonenumber: '555-555-4345',
        photo_url: 'http://i.imgur.com/zoHQJSBm.jpg',
        affiliation: 'Marvel'
      },
      {
        name: 'Captain Marvel',
        phonenumber: '555-555-1432',
        photo_url: 'http://i.imgur.com/A00646Hm.jpg',
        affiliation: 'Marvel'
      },
      {
        name: 'Flash',
        phonenumber: '555-555-4345',
        photo_url: 'http://i.imgur.com/fjKn3Mrm.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Wonder Woman',
        phonenumber: '555-555-5672',
        photo_url: 'http://i.imgur.com/jU6QaDvm.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Green Lantern',
        phonenumber: '555-555-9081',
        photo_url: 'http://i.imgur.com/UEzPu8Um.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Aqua Man',
        phonenumber: '555-555-9341',
        photo_url: 'http://i.imgur.com/shh2MoCm.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Cyborg',
        phonenumber: '555-555-9857',
        photo_url: 'http://i.imgur.com/CZPlD1Zm.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Green Arrow',
        phonenumber: '555-555-1239',
        photo_url: 'https://i.imgur.com/XhFCDegm.jpg',
        affiliation: 'DC Comics'
      },

      {
        name: 'Raven',
        phonenumber: '555-555-6739',
        photo_url: 'https://i.imgur.com/KAeFvTgm.jpg',
        affiliation: 'DC Comics'
      },
      {
        name: 'Robin',
        phonenumber: '555-555-1564',
        photo_url: 'https://i.imgur.com/KNECUwNm.png',
        affiliation: 'DC Comics'
      },
      {
        name: 'Supergirl',
        phonenumber: '555-555-2259',
        photo_url: 'https://i.imgur.com/5DebNIAm.png',
        affiliation: 'DC Comics'
      },
      {
        name: 'Hawkman',
        phonenumber: '555-555-3422',
        photo_url: 'https://i.imgur.com/jpmVS2Am.png',
        affiliation: 'DC Comics'
      },

      {
        name: 'Hawkgirl',
        phonenumber: '555-555-6454',
        photo_url: 'https://i.imgur.com/1OYCW2ym.jpg',
        affiliation: 'DC Comics'
      }
    ]

    return {
      all: all
    }

    function all () {
      return superheros.sort(function (a, b) {
        var textA = a.name.toUpperCase()
        var textB = b.name.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      })
    }
  } // end SuperherosService
})()
