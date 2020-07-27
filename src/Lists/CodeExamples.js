export const codeExample1 = `
const sites = [
  { label: 'StackOverflow', href: 'https://stackoverflow.com' },
  { label: 'rwieruch', href: 'https://www.robinwieruch.de/blog' },
              . . . 
  { label: 'VMWare Knowledge Base', href: 'https://kb.vmware.com/s/' }
].map((site, idx) => {
  site.target = '_blank';
  site.rel = 'noopener noreferrer';
  site.id = site.label.slice(0, 3)} + '-'  + idx;
  return site;
});

const Item = ({ color, href, id, label, rel, target }) => {
const [isActive, setIsActive] = useState(false);
return (
  <SiteListItem
    className={'list-group-item' + {
      isActive ? 'list-group-item-action active' : ''}}
    data-key={id}
    onMouseEnter={() => setIsActive(true)}
    onMouseLeave={() => setIsActive(false)}
  >
    <SiteLink href={href} rel={rel} target={target}>
      <SiteLabel fontSize={1.6}>{label}</SiteLabel>
    </SiteLink>
  </SiteListItem>
);
};

const SitesList = ({ items }) => {
return (
  <UnorderedList className='list-group text-center'>
    {items.map(itemProps => (
      <Item {...itemProps} key={itemProps.id} />
    ))}
  </UnorderedList>
);
};

export default SitesList;
`;

export const codeExample2 = `
import Root from 'Pages/Root';
const About = lazy(() => import('Pages/About'));
const Sites = lazy(() => import('Pages/Sites'));
const Blog = lazy(() => import('Pages/Blog'));
const Code = lazy(() => import('Pages/Code'));

export const directions = {
	'/react-website-prototype/': () => <Root />,
	'/react-website-prototype/About': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader
						size={35}
						loading={true}
					/>
				</LoaderContainer>
			}
		>
			<About />
		</Suspense>
	),
	'/react-website-prototype/Sites': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader size={35} loading={true} />
				</LoaderContainer>
			}
		>
			<Sites />
		</Suspense>
	),
	'/react-website-prototype/Blog': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader size={35} loading={true} />
				</LoaderContainer>
			}
		>
			<Blog />
		</Suspense>
	),
	'/react-website-prototype/Code': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader size={35} loading={true} />
				</LoaderContainer>
			}
		>
			<Code />
		</Suspense>
	)
};
`;
