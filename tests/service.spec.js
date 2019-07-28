describe('pageRenderServices Services', function() {

    var $httpBackend, pageRenderServices;

    beforeEach(module('codeExerciseApp'));

    beforeEach(inject(function (_$httpBackend_, _pageRenderServices_) {
        $httpBackend = _$httpBackend_;
        pageRenderServices = _pageRenderServices_;
    }));

    it('should get the menu data', function () {

        var res,
            resData = {};

        $httpBackend.when('GET', 'assets/data').respond(200, res);
    
        pageRenderServices.getMenu().then(function (responseData) {
            resData = responseData;
        });
        $httpBackend.flush();
    
        expect(resData).toEqual(res);
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});