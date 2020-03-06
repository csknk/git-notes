const pages = require('./manifest.json')

module.exports ={
	'title': 'Git Notes',
	'dest': '/var/www/html/utilities/git-notes',
	themeConfig: {
		sidebar: [
			{
				title: 'Main Pages',
				children: pages
			}
		]
	}
}
