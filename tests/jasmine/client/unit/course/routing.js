describe('Testing Course routes wihout login', function() {
  var  $rootScope, $location, $httpBackend, $state;

  beforeEach(function() {
    module('pdaApp');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      $httpBackend = $injector.get('$httpBackend');
      $state = $injector.get('$state');

      $httpBackend.when('GET', 'client/homepage/homepage.html').respond('homepage');
    });
  });

  it('should redirect not registered urls to homepage', function(){
    $rootScope.$apply(function() {
      $location.path('/other');
    });
    expect($location.path()).toBe('/');
    expect($state.current.templateUrl).toBe('client/homepage/homepage.html');
  });

  it('should redirect /course to homepage', function(){
    $rootScope.$apply(function() {
      $location.path('/course');
    });
    expect($location.path()).toBe('/');
  });

  it('should redirect /course to homepage', function(){
    $rootScope.$apply(function() {
      $location.path('/course');
    });
    expect($location.path()).toBe('/');
  });

  it('should redirect /course/create to homepage', function(){
    $rootScope.$apply(function() {
      $location.path('/course/create');
    });
    expect($location.path()).toBe('/');
  });

});
