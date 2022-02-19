import React from 'react';
import spoon from '../../assets/images/spoon.svg';
import banner from '../../assets/images/banner.svg';
import Button from '../Button';

const Home = () => {
	return (
		<section
			id='home'
			className='flex flex-col items-center justify-center gap-20 py-16 px-8 md:p-16 lg:min-h-screen lg:flex-row lg:px-24'
		>
			<div>
				<div className='mb-4'>
					<p className='font-cormorant text-lg font-bold capitalize leading-8 tracking-wider md:text-2xl'>
						Chase The New Flavour
					</p>

					<img src={spoon} alt='' className='w-11' />
				</div>

				<h1 className='font-cormorant text-5xl font-bold capitalize leading-normal tracking-wider text-golden md:text-8xl md:leading-snug'>
					The Key To Fine Dining
				</h1>

				<p className='my-8 font-open text-xs leading-7 tracking-wider md:text-base md:leading-7'>
					Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
					Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
					Aliquam Amet Tellus
				</p>

				<Button>Explore Menu</Button>
			</div>

			<div className='flex w-full justify-center'>
				<img src={banner} alt='' className='lg:w-4/5' />
			</div>
		</section>
	);
};

export default Home;
