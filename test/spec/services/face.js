'use strict';

describe('Service: face', function () {

  // load the service's module
  beforeEach(module('facesofHistoryApp'));

  // instantiate service
  var face;
  beforeEach(inject(function (_face_) {
    face = _face_;
  }));

  it('should do something', function () {
    expect(!!face).toBe(true);
  });

});
