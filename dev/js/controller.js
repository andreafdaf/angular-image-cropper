(function(angular) {
    'use strict';

    angular
        .module('app')
        .controller('mainController', controller);

    controller.$inject = [
        '$scope'
    ];

    function controller($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.imageUrl = 'test.jpg';
        vm.imageResult = '';
        vm.showControls = true;
        vm.fit = false;
        vm.controls = {
            rotateLeft: {
                title: 'sinistra',
                className: 'sinistra'
            },
            zoomOut: {
                title: 'fuori',
                className: 'fuori',
            },
            fitImage: {
                title: 'centro',
                className: 'centro'
            },
            zoomIn: {
                title: 'dentro',
                className: 'dentro'
            },
            rotateRight: {
                title: 'destra',
                className: 'destra'
            }
        }
    }

})(angular);
