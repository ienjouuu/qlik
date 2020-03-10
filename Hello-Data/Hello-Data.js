define( [],
    function ( ) {
		'use strict';
		console.log('DSDSDSDSDSDSDSDRWHAHAHAHA');

        return {
            definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions"
					},
					measures: {
						uses: "measures"
					},
					sorting: {
						uses: "sorting"
					},
					appearance: {
						uses: "settings"
					}
				}
			},
            initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [
						{
							qWidth: 10,
							qHeight: 100
						}
					]
				}
			},
            paint: function ( $element, layout ) {

                console.log('Data returned: ', layout.qHyperCube);

            }
        };
    } );