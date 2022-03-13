import chefImage from '../../assets/images/chef.png';
import quote from '../../assets/images/quote.png';
import sign from '../../assets/images/sign.png';
import spoon from '../../assets/images/spoon.svg';

const Chef = () => {
	return (
		<section className='flex flex-col bg-image bg-cover bg-fixed bg-50 bg-repeat py-16 px-8 md:p-16 lg:flex-row lg:px-24'>
			<div className='mb-20 lg:mb-0'>
				<img className='lg:w-4/5' src={chefImage} alt='' />
			</div>

			<div className='flex w-full flex-col items-start justify-center'>
				<div className='mb-4'>
					<p className='font-cormorant text-lg font-bold capitalize leading-8 tracking-wider md:text-2xl'>
						Chef's Word
					</p>

					<img src={spoon} alt='' className='w-11' />
				</div>

				<h1 className='font-cormorant text-5xl font-bold capitalize leading-normal tracking-wider text-golden md:text-6xl md:leading-snug'>
					What we believe in
				</h1>

				<div className='mt-20 flex w-full flex-col'>
					<div className='flex items-end justify-start'>
						<img className='mr-4 mb-4 h-10 w-12' src={quote} alt='' />
						<p className='font-open text-xs leading-7 tracking-wider md:text-base md:leading-7'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
							sit.
						</p>
					</div>
					<p className='font-open text-xs leading-7 tracking-wider md:text-base md:leading-7'>
						auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
						sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
						molestie lectus eu. Congue iaculis integer curabitur semper sit
						nunc.
					</p>
				</div>

				<div className='mt-12 w-full'>
					<p className='font-cormorant text-4xl capitalize leading-10 tracking-wider text-golden'>
						Kevin Luo
					</p>

					<p className='font-open text-xs leading-7 tracking-wider md:text-base md:leading-7'>
						Chef & Founder
					</p>

					<img className='mt-12 w-4/5 md:w-64' src={sign} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Chef;
