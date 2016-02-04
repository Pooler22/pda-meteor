describe('Testing authorization routes wihout login', function() {
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

  it('should redirect /login to login page', function(){
    $rootScope.$apply(function() {
      $location.path('/login');
    });
    expect($location.path()).toBe('/login');
  });

  it('should redirect /register to register page', function(){
    $rootScope.$apply(function() {
      $location.path('/register');
    });
    expect($location.path()).toBe('/register');
  });

  it('should redirect /resetpw to reset password page', function(){
    $rootScope.$apply(function() {
      $location.path('/resetpw');
    });
    expect($location.path()).toBe('/resetpw');
  });
});
