import { backlightArray } from 'Styles/Shared/PageStyles';

const siteStart = [
	{ label: 'StackOverflow', href: 'https://stackoverflow.com' },
	{ label: 'rwieruch', href: 'https://www.robinwieruch.de/blog' },
	{ label: 'ITNext.io', href: 'https://itnext.io/' },
	{ label: 'Dev.to', href: 'https://dev.to/' },
	{
		label: `ycombninator ('Hacker News')`,
		href: 'https://news.ycombinator.com/'
	},
	{ label: 'OpenBase.io', href: 'https://openbase.io/' },
	{ label: 'Coolors.co', href: 'https://coolors.co/' },
	{ label: 'GitHub', href: 'https://www.github.com/' },
	{ label: '/r/homelab/', href: 'https://www.reddit.com/r/homelab/' },
	{
		label: 'Thomas-Krenn',
		href: 'https://www.thomas-krenn.com/en/wiki/Main_Page'
	},
	{ label: 'Serve The Home', href: 'https://www.servethehome.com/' },
	{ label: 'ADMIN Magazine', href: 'https://www.admin-magazine.com/' },
	{ label: 'OmniOS Gitter', href: 'https://gitter.im/omniosorg/Lobby' },
	{ label: 'VMWare Knowledge Base', href: 'https://kb.vmware.com/s/' }
];

const sites = siteStart.map((site, idx) => {
	site.target = '_blank';
	site.rel = 'noopener noreferrer';
	site.id = `${site.label.slice(0, 3)}-${idx}`;
	const newIndex =
		idx >= backlightArray.length ? idx % backlightArray.length : idx;
	site.color = backlightArray[newIndex];
	return site;
});

export default sites;
