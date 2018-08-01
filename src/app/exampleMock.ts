
export let mockFormat = [

	// Complete in this file specific features for mock types - More information in https://www.mockaroo.com/api/docs
 
	{
			name: 'id',
			type: 'Number',
			min: 1,
			max: 1000,
			decimals: 0,
	},
 
	{
			name: 'name',
			type: 'Movie Title',
	},
 
	{
			name: 'price',
			type: 'Money',
			min:	1000,
            max:	200000,
            symbol:	'$'
	},

	{
		name: 'image',
		type: 'Dummy Image URL',
		minHeight:	200,
		maxHeight:	200,
		minWidth:	200,
		maxWidth:	200,
		format: 'png'

	}
 
]
