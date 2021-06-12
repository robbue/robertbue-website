const path = require('path');
const variables = require(path.join(__dirname, 'assets/variables'));
// const ScrollToPlugin = require('gsap/src/uncompressed/plugins/ScrollToPlugin');
// const ScrollToPlugin = require(path.join(__dirname, 'utilities/ScrollToPlugin'));
// console.log('ScrollToPlugin', ScrollToPlugin);

module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		htmlAttrs: {
			lang: 'en'
		},
		title: 'Robert Bue',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'theme-color', content: '#000000' },
			{ hid: 'description', name: 'description', content: 'Award-winning Full Stack Developer & Interaction designer living in Oslo, Norway.' },
			{ hid: 'author', name: 'author', content: 'Robert Bue' },
			{ name: 'og:title', content: 'Robert Bue' },
      { name: 'og:description', content: `Award-winning Full Stack Developer & Interaction designer living in Oslo, Norway.` },
      { name: 'og:image', content: '~/static/images/robert-bue.jpg' }
		],
		script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js' }
		],
		link: [
			// { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700' },
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow' },
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya' },
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700' },
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700' },
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Prata|Quicksand:400,500,600,700|Roboto:400,500,700|Source+Sans+Pro:400,600,700&display=swap' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Prata|Source+Sans+Pro:400,600' },
			{ rel: 'stylesheet', href: 'https://use.typekit.net/tia6ylu.css' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#ffecb5' }, // ffc87f // e0caca
	// loading: '~/components/Loading.vue',
	// loading: false,

	transition: {
		css: false
	},

	router: {
    scrollBehavior: function (to, from, savedPosition) {
			return true;

			// savedPosition is only available for popstate navigations.
		  if (savedPosition) {
		    return savedPosition
		  } else {
		    let position = {}

				console.log(to, from, savedPosition);
		    // if no children detected
		    if (to.matched.length < 2) {
		      // scroll to the top of the page
		      position = { x: 0, y: 0 }
					TweenMax.to(window, 2, { scrollTo: 100 });
		    }
		    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
		      // if one of the children has scrollToTop option set to true
		      position = { x: 0, y: 0 }
					TweenMax.to(window, 2, { scrollTo: 200 });
		    }
		    // if link has anchor,  scroll to anchor by returning the selector
		    if (to.hash) {
		      position = { selector: to.hash }
					TweenMax.to(window, 2, { scrollTo: 300 });
		    }
		    //return position
		  }
    }

		/*
		Return to component and resolve the promise there?

		scrollBehavior (to, from, savedPosition) {
		  return new Promise((resolve, reject) => {
		    setTimeout(() => {
		      resolve({ x: 0, y: 0 })
		    }, 500)
		  })
		}
		*/
  },

	/*
  ** Plugins
  */
	modules: [
		// ['nuxt-sass-resources-loader', path.resolve(__dirname, 'assets/css/main.scss')]
	],
	/*
  ** Plugins
  */
	plugins: [
		{ src: '~/plugins/ga.js', ssr: false },
		{ src: '~/plugins/global.js', ssr: true },
		{ src: '~/plugins/locomotive-scroll.js', ssr: false, mode: 'client' }
	],
	/*
  ** CSS
  */
	css: [
		'normalize.css',
		'~/assets/css/base.css'
	],
	/*
  ** Build configuration
  */
	build: {
		transpile: ['locomotive-scroll'],
		resolve: {
			alias: {
				ScrollToPlugin: path.resolve('node_modules', 'gsap/ScrollToPlugin.js')
			}
		},
		vendor: ['gsap', path.resolve('node_modules', 'gsap/ScrollToPlugin.js')],
		postcss: {
			plugins: {
				'postcss-cssnext': {
					features: {
						customProperties: {
							variables: variables
						},
						customMedia: {
							extensions: variables.mediaRanges
						}
					}
				},
				'lost': {},
				'postcss-pxtorem': {
					propList: ['*']
				}
			}
		}
	}
};
