import award01 from '../../assets/images/award01.png';
import award02 from '../../assets/images/award02.png';
import award03 from '../../assets/images/award03.png';
import award05 from '../../assets/images/award05.png';
import laurels from '../../assets/images/laurels.png';
import spoon from '../../assets/images/spoon.svg';

const awardsList = [
	{
		image: award02,
		title: 'Bib Gourmond',
		description: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		image: award01,
		title: 'Rising Star',
		description: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		image: award05,
		title: 'AA Hospitality',
		description: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		image: award03,
		title: 'Outstanding Chef',
		description: 'Lorem ipsum dolor sit amet, consectetur.',
	},
];

const Awards = () => {
	return (
		<section
			id='awards'
			className='flex flex-col bg-image bg-cover bg-fixed bg-50 bg-repeat py-16 px-8 md:p-16 lg:flex-row lg:px-24'>
			<div className='flex w-full flex-col items-start justify-center'>
				<div className='mb-4'>
					<p className='font-cormorant text-lg font-bold capitalize leading-8 tracking-wider md:text-2xl'>
						Awards & recognition
					</p>

					<img src={spoon} alt='' className='w-11' />
				</div>

				<h1 className='font-cormorant text-5xl font-bold capitalize leading-normal tracking-wider text-golden md:text-6xl md:leading-snug'>
					Our Laurels
				</h1>

				<div className='mt-12 flex flex-wrap items-center justify-start gap-4 md:gap-8'>
					{awardsList?.map(({ image, title, description }, index) => (
						<div
							key={index}
							className='flex min-w-full flex-1 items-start justify-start gap-4 md:min-w-[230px]'>
							<img className='h-12 w-12' src={image} alt='' />
							<div className='flex flex-col'>
								<p className='font-cormorant text-xl capitalize tracking-wider text-golden md:text-2xl'>
									{title}
								</p>

								<p className='font-cormorant text-base capitalize lining-nums tracking-wider md:text-xl'>
									{description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='mt-20 flex w-full items-center justify-center lg:mt-0'>
				<img className='w-full lg:w-4/5' src={laurels} alt='' />
			</div>
		</section>
	);
};

export default Awards;
