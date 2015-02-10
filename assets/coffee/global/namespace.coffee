Global = angular.module('global', ['ui.bootstrap', 'ngAnimate', 'ngRoute', 'ngUpload'])
    .config ($interpolateProvider)->
        $interpolateProvider.startSymbol('{#')
        $interpolateProvider.endSymbol('#}')

###################
## GLOBAL SCOPE
###################
Global.run ( $rootScope ) ->
    $rootScope.header = "Application Form"


############
## ROUTES
############
Global.config ( $routeProvider, $locationProvider ) ->
    $routeProvider
        .when "/",
            templateUrl: "form"
            controller: "formController"
        .when "/done",
            templateUrl: "done"
            controller: "doneController"
        .otherwise
            redirectTo: "/done"

    $locationProvider.html5Mode
        enabled: true
        requireBase: false
    return

App =
    init: ->
        angular.bootstrap document, ['global']
        console.log '*** App initializing ***'
        return

$(document).ready(->
    App.init()
)