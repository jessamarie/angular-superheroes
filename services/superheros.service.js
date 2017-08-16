/* global angular */

(function () {
  angular
    .module('superheroApp')
    .factory('superheros', [superherosService])

  function superherosService () {
    /* All images obtained from imgur. Authors are
      found at the respective links (remove .jpg extension) */
    const superheros = [
      {
        id: '1',
        name: 'Superman',
        phonenumber: '555-555-5190',
        photo_url: 'http://i.imgur.com/U6GTsU0m.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '2',
        name: 'Batman',
        phonenumber: '555-555-5245',
        photo_url: 'http://i.imgur.com/19eifidm.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '3',
        name: 'Iron Man',
        phonenumber: '555-555-6523',
        photo_url: 'http://i.imgur.com/SUkgtZpm.jpg',
        affiliation: 'Marvel'
      },
      {
        id: '4',
        name: 'Spider Man',
        phonenumber: '555-555-4324',
        photo_url: 'http://i.imgur.com/K1xOUUvm.jpg',
        affiliation: 'Marvel'
      },
      {
        id: '5',
        name: 'The Hulk',
        phonenumber: '555-555-4321',
        photo_url: 'http://i.imgur.com/dsRblaj.jpg',
        affiliation: 'Marvel'
      },
      {
        id: '6',
        name: 'Thor',
        phonenumber: '555-555-5453',
        photo_url: 'http://i.imgur.com/coWlzzsm.jpg',
        affiliation: 'Marvel'
      },
      {
        id: '7',
        name: 'Captain America',
        phonenumber: '555-555-1234',
        photo_url: 'http://i.imgur.com/LkQUOy3m.jpg',
        affiliation: 'Marvel'
      },
      {
        id: '8',
        name: 'Wolverine',
        phonenumber: '555-555-4345',
        photo_url: 'http://i.imgur.com/zoHQJSBm.jpg',
        affiliation: 'Marvel'
      },
      {
        id: '9',
        name: 'Captain Marvel',
        phonenumber: '555-555-1432',
        photo_url: 'http://i.imgur.com/A00646Hm.jpg',
        affiliation: 'Marvel'
      },
      {
        id: '10',
        name: 'Flash',
        phonenumber: '555-555-4345',
        photo_url: 'http://i.imgur.com/fjKn3Mrm.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '11',
        name: 'Wonder Woman',
        phonenumber: '555-555-5672',
        photo_url: 'http://i.imgur.com/jU6QaDvm.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '12',
        name: 'Green Lantern',
        phonenumber: '555-555-9081',
        photo_url: 'http://i.imgur.com/UEzPu8Um.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '13',
        name: 'Aqua Man',
        phonenumber: '555-555-9341',
        photo_url: 'http://i.imgur.com/shh2MoCm.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '14',
        name: 'Cyborg',
        phonenumber: '555-555-9857',
        photo_url: 'http://i.imgur.com/CZPlD1Zm.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '15',
        name: 'Green Arrow',
        phonenumber: '555-555-1239',
        photo_url: 'https://i.imgur.com/XhFCDegm.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '16',
        name: 'Raven',
        phonenumber: '555-555-6739',
        photo_url: 'https://i.imgur.com/KAeFvTgm.jpg',
        affiliation: 'DC Comics'
      },
      {
        id: '17',
        name: 'Robin',
        phonenumber: '555-555-1564',
        photo_url: 'https://i.imgur.com/KNECUwNm.png',
        affiliation: 'DC Comics'
      },
      {
        id: '18',
        name: 'Supergirl',
        phonenumber: '555-555-2259',
        photo_url: 'https://i.imgur.com/5DebNIAm.png',
        affiliation: 'DC Comics'
      },
      {
        id: '19',
        name: 'Hawkman',
        phonenumber: '555-555-3422',
        photo_url: 'https://i.imgur.com/jpmVS2Am.png',
        affiliation: 'DC Comics'
      },
      {
        id: '20',
        name: 'Hawkgirl',
        phonenumber: '555-555-6454',
        photo_url: 'https://i.imgur.com/1OYCW2ym.jpg',
        affiliation: 'DC Comics'
      }
    ]

    return {
      all: all,
      id: nextId,
      find: find,
      update: update,
      create: create
    }

    function all () {
      return superheros.sort(function (a, b) {
        var nameA = a.name.toUpperCase() // ignore upper and lowercase
        var nameB = b.name.toUpperCase() // ignore upper and lowercase
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0
      })
    }

    function nextId () {
      return superheros.length + 1
    }

    function searchById (id) {
      return superheros.find((superhero) => {
        if (superhero.id === id) {
          return superhero
        }
      })
    }

    function find (id) {
      var superhero = searchById(id)
      var hero = {
        id: superhero.id,
        name: superhero.name,
        phonenumber: superhero.phonenumber,
        photo_url: superhero.photo_url,
        affiliation: superhero.affiliation
      }

      return hero
    }

    function update (hero) {
      var superhero = superheros.find((superhero) => {
        if (superhero.id === hero.id) {
          return superhero
        }
      })

      superhero.name = hero.name
      superhero.phonenumber = hero.phonenumber
      superhero.photo_url = hero.photo_url
      superhero.affiliation = hero.affiliation
    }

    function create (hero) {
      superheros.push(hero)
    }
  } // end SuperherosService
})()
