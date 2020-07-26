const routes = [
	{ href: '/', label: 'Root' },
	{ href: '/About', label: 'About' },
	{ href: '/Sites', label: 'Sites' },
	{ href: '/Blog', label: 'Blog' },
	{ href: '/Code', label: 'Code' }
].map(route => {
	route.key = `route-link-${route.href}-${route.label}`;
	return route;
});

export default routes;
