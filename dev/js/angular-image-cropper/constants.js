(function(angular) {
    'use strict';

    angular
        .module('imageCropper')
        .constant('defaultConfig', {
            'width': 400,
            'height': 300,
            'zoomStep': 0.1,
            'init': null,
            'showControls': true,
            'fitOnInit': false,
            'controls': {
                'rotateLeft': {
                    'title': 'Rotate Left',
                    'className': '',
                    'id': '',
                    'content': ' < '
                },
                'zoomOut': {
                    'title': 'Zoom Out',
                    'className': '',
                    'id': '',
                    'content': ' - '
                },
                'fitImage': {
                    'title': 'Fit Image',
                    'className': '',
                    'id': '',
                    'content': ' [ ] '
                },
                'zoomIn': {
                    'title': 'Zoom In',
                    'className': '',
                    'id': '',
                    'content': ' + '
                },
                'rotateRight': {
                    'title': 'Rotate Right',
                    'className': '',
                    'id': '',
                    'content': ' > '
                }
            }
    });

})(angular);
