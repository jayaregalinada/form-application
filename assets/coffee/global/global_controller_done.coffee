Global.controller "doneController", ( $scope, $rootScope, $location ) ->

    $scope.init = ->
        # console.log "Done"
        $rootScope.header = "Nice"
        return

    $scope.repeat = ->
        $location.path "/"
        $rootScope.header = "Application Form"
        return
    $scope.init()



    return