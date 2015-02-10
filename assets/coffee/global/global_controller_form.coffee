Global.controller "formController", ( $scope, $http, $rootScope, $location ) ->

    $scope.original =
        header: "Application Form"
        submitText: "Submit"

    $scope.submitStatus = false
    $scope.submitText = $scope.original.submitText
    $scope.header = $scope.original.header

    $scope.originals = ->
        $scope.header = $scope.original.header
        return

    $scope.originals()

    $scope.upload = ( content ) ->
        # console.log content
        $rootScope.header = "Thank you"
        $scope.submitStatus = false
        NProgress.done()
        $scope.form = {}
        $location.path "done"
        return

    $scope.submitForm = ->
        $scope.submitStatus = !$scope.submitStatus # true
        $rootScope.header = "Submitting"
        NProgress.inc()
        return

