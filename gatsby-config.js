module.exports = {
	siteMetadata: {
		title: 'Personal Site',
		author: 'Jere Xu',
		imageUrl: 'xxx',
		description: 'This is the central hub for my stuffs.',
		keywords: `Web developer, Growth engineer, growth hacking, JavaScript, data analytics, content marketing`,
		twitter: 'https://twitter.com/jtxxuu',
		github: `https://github.com/jerrytigerxu`,
		medium: 'https://medium.com/@jeretigerxu',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.jeretigerxu.me`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-source-datocms',
			options: {
				apiToken: 'bc7f97b82f42b56204d988cff450e1',
				preview: false,
				disableLiveReload: false,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
