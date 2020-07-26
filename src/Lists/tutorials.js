const tutorials = [
	{
		order: 1,
		className: 'table-light',
		title: 'Javascript - From Beginning to Advanced',
		subject: 'Javascript',
		date: '04/30/20'
	},
	{
		order: 2,
		className: 'table-primary',
		title: 'Modern React with Redux',
		subject: 'React, Redux',
		date: '05/10/20'
	},
	{
		order: 3,
		className: 'table-success',
		title: 'Modern Javascript Bootcamp 2020',
		subject: 'Javascript',
		date: '05/15/20'
	},
	{
		order: 4,
		className: 'table-warning',
		title: 'ES6 Javascript The Complete Developer’s Guide',
		subject: 'Javascript',
		date: '05/17/20'
	},
	{
		order: 5,
		className: 'table-danger',
		title: 'Mosh – Mastering React',
		subject: 'React',
		date: '05/24/20'
	},
	{
		order: 6,
		className: 'table-info',
		title: 'Mosh – Ultimate Redux Course',
		subject: 'React, Redux',
		date: '05/28/20'
	},
	{
		order: 7,
		className: 'table-light',
		title: 'Mosh – Object Oriented Programming with Javascript',
		subject: 'Javascript',
		date: '06/05/20'
	},
	{
		order: 8,
		className: 'table-primary',
		title: 'The MERN Full Stack Guide',
		subject: 'MongoDB, Express, React, NodeJS',
		date: '06/15/20'
	},
	{
		order: 9,
		className: 'table-success',
		title: 'Modern React Bootcamp 2020 (Hooks, Context, NextJS, Router)',
		subject: 'React, NextJS',
		date: '06/25/20'
	},
	{
		order: 10,
		className: 'table-warning',
		title: 'CSS Complete Guide w/ Flexbox, Grid and sass',
		subject: 'CSS',
		date: '07/03/20'
	},
	{
		order: 11,
		className: 'table-danger',
		title: 'Full-Stack React with NextJS',
		subject: 'Nextjs, mongodb and graphql',
		date: '07/14/20'
	}
].map(tutorial => {
	tutorial.id = `${tutorial.order}-${tutorial.title
		.slice(0, 4)
		.trim()}-${tutorial.subject.slice(0, 4).trim()}-
	${Math.round(Math.random() * 99999)
		.toString()
		.trim()}`;
	return tutorial;
});

export default tutorials;
