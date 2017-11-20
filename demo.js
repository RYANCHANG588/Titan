<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Angular Material style sheet -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
    <style type="text/css">
    .buttondemoBasicUsage section {
        background: #f7f7f7;
        border-radius: 3px;
        text-align: center;
        margin: 1em;
        position: relative !important;
        padding-bottom: 10px;
    }

    .buttondemoBasicUsage md-content {
        margin-right: 7px;
    }

    .buttondemoBasicUsage section .md-button {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .buttondemoBasicUsage .label {
        position: absolute;
        bottom: 5px;
        left: 7px;
        font-size: 14px;
        opacity: 0.54;
    }
    /*
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
*/
    </style>
</head>

<body>
    <div ng-controller="AppCtrl" ng-cloak="" class="buttondemoBasicUsage" ng-app="MyApp">
        <md-content>
            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">
                <md-button>{{title1}}</md-button>
                <md-button md-no-ink="" class="md-primary">Primary (md-noink)</md-button>
                <md-button ng-disabled="true" class="md-primary">Disabled</md-button>
                <md-button class="md-warn">{{title4}}</md-button>
                <div class="label">Flat</div>
            </section>
            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">
                <md-button class="md-raised">Button</md-button>
                <md-button class="md-raised md-primary">Primary</md-button>
                <md-button ng-disabled="true" class="md-raised md-primary">Disabled</md-button>
                <md-button class="md-raised md-warn">Warn</md-button>
                <div class="label">Raised</div>
            </section>
            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">
                <md-button class="md-fab" aria-label="Eat cake">
                    <md-icon md-svg-src="img/icons/cake.svg"></md-icon>
                </md-button>
                <md-button class="md-fab md-primary" aria-label="Use Android">
                    <md-icon md-svg-src="img/icons/android.svg"></md-icon>
                </md-button>
                <md-button class="md-fab" ng-disabled="true" aria-label="Comment">
                    <md-icon md-svg-src="img/icons/ic_comment_24px.svg"></md-icon>
                </md-button>
                <md-button class="md-fab md-primary md-hue-2" aria-label="Profile">
                    <md-icon md-svg-src="img/icons/ic_people_24px.svg"></md-icon>
                </md-button>
                <md-button class="md-fab md-mini" aria-label="Eat cake">
                    <md-icon md-svg-src="img/icons/cake.svg"></md-icon>
                </md-button>
                <md-button class="md-fab md-mini md-primary" aria-label="Use Android">
                    <md-icon md-svg-src="img/icons/android.svg" style="color: greenyellow;"></md-icon>
                </md-button>
                <div class="label">FAB</div>
            </section>
            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">
                <md-button ng-href="{{googleUrl}}" target="_blank">Default Link</md-button>
                <md-button class="md-primary" ng-href="{{googleUrl}}" target="_blank">Primary Link</md-button>
                <md-button>Default Button</md-button>
                <div class="label">Link vs. Button</div>
            </section>
            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">
                <md-button class="md-primary md-hue-1">Primary Hue 1</md-button>
                <md-button class="md-warn md-raised md-hue-2">Warn Hue 2</md-button>
                <md-button class="md-accent">Accent</md-button>
                <md-button class="md-accent md-raised md-hue-1">Accent Hue 1</md-button>
                <div class="label">Themed</div>
            </section>
            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">
                <md-button class="md-icon-button md-primary" aria-label="Settings">
                    <md-icon md-svg-icon="img/icons/menu.svg"></md-icon>
                </md-button>
                <md-button class="md-icon-button md-accent" aria-label="Favorite">
                    <md-icon md-svg-icon="img/icons/favorite.svg"></md-icon>
                </md-button>
                <md-button class="md-icon-button" aria-label="More">
                    <md-icon md-svg-icon="img/icons/more_vert.svg"></md-icon>
                </md-button>
                <md-button href="http://google.com" title="Launch Google.com in new window" target="_blank" ng-disabled="true" aria-label="Google.com" class="md-icon-button launch">
                    <md-icon md-svg-icon="img/icons/launch.svg"></md-icon>
                </md-button>
                <div class="label">Icon Button</div>
            </section>
        </md-content>
    </div>
    <!--
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
-->
    <!--
    Your HTML content here
  	-->
    <!-- Angular Material requires Angular.js Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-animate.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-aria.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-messages.min.js"></script>
    <!-- Angular Material Library -->
    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
    <!-- Your application bootstrap  -->
    <script type="text/javascript">
    angular.module('ng').filter('tel', function() {});

    angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

        .controller('AppCtrl', function($scope) {
            $scope.title1 = 'Button';
            $scope.title4 = 'Warn';
            $scope.isDisabled = true;

            $scope.googleUrl = 'http://google.com';

        });


    /**
    Copyright 2016 Google Inc. All Rights Reserved. 
    Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
    **/
    /**
     * You must include the dependency on 'ngMaterial' 
     */
    </script>
    <!--  <script src="demo.js"></script> -->
</body>

</html>
<!--
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at https://material.angularjs.org/license.
-->
