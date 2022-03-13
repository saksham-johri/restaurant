import { lazy, Suspense } from 'react';

const About = lazy(() => import('../components/sections/About'));
const Awards = lazy(() => import('../components/sections/Awards'));
const Chef = lazy(() => import('../components/sections/Chef'));
const Contact = lazy(() => import('../components/sections/Contact'));
const Home = lazy(() => import('../components/sections/Home'));
const Meal = lazy(() => import('../components/sections/Meal'));
const Menu = lazy(() => import('../components/sections/Menu'));

const Main = () => {
	return (
		<Suspense fallback={<></>}>
			<Home />

			<About />

			<Menu />

			<Chef />

			<Meal />

			<Awards />

			<Contact />
		</Suspense>
	);
};

export default Main;
