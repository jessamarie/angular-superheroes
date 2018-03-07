/* global describe, beforeEach, inject, it, expect, angular */

describe('Simple Tests', function () {
  // describe your object type

  describe('This should definitiely pass', function () {
    it('some description', function () {
      expect(true).toBe(true)
    })
  })

  describe('SuperheroController', function () {
    beforeEach(angular.mock.module('superheroApp')) // load module

    var $controller, SuperherosController, superheros

    beforeEach(inject(function (_$controller_, _superheros_) {
      $controller = _$controller_
      superheros = _superheros_

      SuperherosController = $controller('SuperherosController', {
        superheros: superheros
      }
      )
    }))

    it('should exist', function () {
      expect(SuperherosController).toBeDefined()
    })
  })
})
