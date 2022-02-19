import cocktail from '../../../assets/images/cocktail.svg';
import spoon from '../../../assets/images/spoon.svg';
import Button from '../../Button';
import { CocktailList, WineBeerList } from './_base';

const Menu = () => {
	return (
		<section
			id='menu'
			className='flex flex-col items-center justify-center py-16 px-8 md:p-16 lg:px-24'
		>
			<div className='mb-8 text-center'>
				<div className='mb-4 flex flex-col items-center'>
					<p className='font-cormorant text-2xl capitalize'>
						Menu that fits your palatte
					</p>
					<img src={spoon} alt='' className='w-11' />
				</div>

				<h1 className='font-cormorant text-[45px] font-bold capitalize tracking-wider text-golden md:text-6xl lg:text-7xl'>
					Today's Special
				</h1>
			</div>

			<div className='my-8 flex w-full flex-col items-center justify-center lg:flex-row'>
				<div className='flex w-full flex-1 flex-col items-center justify-center'>
					<p className='font-cormorant text-4xl font-semibold tracking-wider md:text-5xl'>
						Wine & Beer
					</p>

					<div className='my-8 flex w-full flex-col'>
						{WineBeerList?.map((item, index) => (
							<RenderItem key={index} {...item} />
						))}
					</div>
				</div>

				<div className='my-12 w-full md:w-96 lg:mx-8 lg:my-auto'>
					<img src={cocktail} alt='' className='h-auto w-full' />
				</div>

				<div className='flex w-full flex-1 flex-col items-center justify-center'>
					<p className='font-cormorant text-4xl font-semibold tracking-wider  md:text-5xl'>
						Cocktails
					</p>

					<div className='my-8 flex w-full flex-col'>
						{CocktailList?.map((item, index) => (
							<RenderItem key={index} {...item} />
						))}
					</div>
				</div>
			</div>

			<div className='mt-4'>
				<Button>View More</Button>
			</div>
		</section>
	);
};

export default Menu;

const RenderItem = ({ name, price, label }) => (
	<div className='my-4 flex w-full flex-col'>
		<div className='flex items-center justify-between'>
			<div className='flex-1'>
				<p className='font-cormorant text-xl capitalize tracking-wider text-golden md:text-2xl'>
					{name}
				</p>
			</div>

			<div className='mx-4 h-[1px] w-20 bg-golden' />

			<div className='flex items-end justify-end'>
				<p className='font-cormorant text-xl font-bold capitalize lining-nums tracking-wider  md:text-2xl'>
					${price}
				</p>
			</div>
		</div>

		<div className='mt-1 w-full'>
			<p className='font-open text-sm capitalize tracking-wider text-grey md:text-base'>
				{label}
			</p>
		</div>
	</div>
);
