describe("UserService", function() {

  beforeEach(module('codeExerciseApp'));

  describe('myctrl',function(){

    var d,
        pageRenderServices,
        controller,
        scope;

    beforeEach(inject(function($q, _pageRenderServices_, _$httpBackend_){
        d = $q.defer();
        pageRenderServices = _pageRenderServices_;
        $httpBackend = _$httpBackend_;

        spyOn(pageRenderServices, 'getMenu').and.returnValue(d.promise);
    }));

    beforeEach(inject(function(_$controller_, $rootScope, _pageRenderServices_){
        scope = $rootScope.$new();
        controller = _$controller_('mainCtrl', {
            pageRenderServices : _pageRenderServices_,
            $scope : scope
        });
    }));

    it('should check if controller is defined', function () {
        expect(controller).toBeDefined();
    });
    it('pageExercise should be defined', function(){
        expect(scope.pageExercise).toBeDefined();
    });

    it('should call getMenu on pageRenderServices', function() {
        expect(pageRenderServices.getMenu).toHaveBeenCalled();
        expect(pageRenderServices.getMenu.calls.count()).toBe(1);
    });
      


  });
  
});