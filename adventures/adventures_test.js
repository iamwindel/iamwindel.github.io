'use strict';

describe('myApp.adventures module', function() {

  beforeEach(module('myApp.adventures'));

  describe('adventures controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var adventuresCtrl = $controller('AdventuresCtrl');
      expect(adventuresCtrl).toBeDefined();
    }));

  });
});