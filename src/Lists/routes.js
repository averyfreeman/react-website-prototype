const routes = [
	{ href: '/react-website-prototype/', label: 'Root' },
	{ href: '/react-website-prototype/About', label: 'About' },
	{ href: '/react-website-prototype/Sites', label: 'Sites' },
	{ href: '/react-website-prototype/Blog', label: 'Blog' },
	{ href: '/react-website-prototype/Code', label: 'Code' }
].map(route => {
	route.key = `route-link-${route.href}-${route.label}`;
	return route;
});

export default routes;
