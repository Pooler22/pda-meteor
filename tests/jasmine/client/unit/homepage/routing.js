describe('Testing Homepage routes wihout login', function() {
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

  it('should navigate / to homepage', function() {
    $rootScope.$apply(function() {
      $location.path('/');
    });
    expect($location.path()).toBe('/');
    expect($state.current.templateUrl).toBe('client/homepage/homepage.html');
  });

  it('should redirect not registered urls to homepage', function(){
    $rootScope.$apply(function() {
      $location.path('/other');
    });
    expect($location.path()).toBe('/');
    expect($state.current.templateUrl).toBe('client/homepage/homepage.html');
  });
});
