const pages = require('./manifest.json')

module.exports ={
	'title': 'Git Notes',
	themeConfig: {
		sidebar: [
			{
				title: 'Main Pages',
				children: pages
			}
		]
	}
}
