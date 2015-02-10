Global.directive "validFile", ->
    require: "ngModel"
    link: ( scope, el, attrs, ngModel ) ->
        ngModel.$render = ->
            ngModel.$setViewValue el.val()

        el.bind "change", ->
            scope.$apply ->
                ngModel.$render()

        return