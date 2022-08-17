const variables = {
	// Font families
	'font-header': 'Prata, serif', // lust
	'font-body': 'Source Sans Pro, sans-serif', // Raleway

	// Font weights
	'font-weight-normal': 400,
	'font-weight-medium': 500,
	'font-weight-semibold': 600,
	'font-weight-bold': 700,

	// Font sizes
	'size-default': '13px',
	'size-small': '14px',
	'size-medium': '15px',
	'size-large': '16px',
	'size-xlarge': '17px',
	'size-xxlarge': '18px',
	'size-lowheight': '14px',

	// Colors
	'color-primary': '#bd9b60', // ffcc66 // ff8763 // fffd7f // ffc87f // e0caca // ffecb5
	'color-accent': '#fff334', // ffc87f
	'color-secondary': 'pink',
	'color-dark': '#0f2d3e', // 0a0a0a
	'color-darkgrey': '#444444',
	'color-grey': '#94b2c5', // 696969
	'color-white': '#fff',

	// Media queries
	'media': {
		'small': 500,
		'medium': 500,
		'large': 1000
	},

	'mediaRanges': {
		'--lowest': '(min-width: 1024px) and (height <= 650px)',
		'--low': '(min-width: 1024px) and (height <= 720px)',
		'--small': '(min-width: 340px)',
		'--medium': '(min-width: 769px)',
		'--large': '(min-width: 1280px)',
		'--xlarge': '(min-width: 1440px)'
	}
};

module.exports = variables;
