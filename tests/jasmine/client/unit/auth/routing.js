describe('Testing Authorization routes wihout login', function() {
  var  $rootScope, $location, $httpBackend, $state;

  beforeEach(function() {
    module('pdaApp');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      $httpBackend = $injector.get('$httpBackend');
      $state = $injector.get('$state');
    });
  });

  it('should redirect not registered urls to homepage', function(){
    $rootScope.$apply(function() {
      $location.path('/other');
    });
    expect($location.path()).toBe('/');
    expect($state.current.templateUrl).toBe('client/homepage/homepage.html');
  });

  it('should redirect /login to login page', function(){
    $rootScope.$apply(function() {
      $location.path('/login');
    });
    expect($state.current.name).toBe('login');
  });

  it('should redirect /register to login page', function(){
    $rootScope.$apply(function() {
      $location.path('/register');
    });
    expect($state.current.name).toBe('register');
  });

    it('should redirect /resetpw to login page', function(){
      $rootScope.$apply(function() {
        $location.path('/resetpw');
      });
      expect($state.current.name).toBe('resetpw');
    });
});

describe('Testing Authorization routes with login', function() {
  var  $rootScope, $location, $httpBackend, $state;

  beforeEach(function() {
    module('pdaApp');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      $httpBackend = $injector.get('$httpBackend');
      $state = $injector.get('$state');

      it('should redirect /resetpw to login page', function(){
        $rootScope.$apply(function() {
          $location.path('/resetpw');
        });
        expect($state.current.name).toBe('resetpw');
      });
    });
  });
});
