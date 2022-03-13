import logo from '../assets/images/logo.svg';
import spoon from '../assets/images/spoon.svg';

const Footer = () => {
	return (
		<section className='flex flex-col items-center justify-start bg-image bg-cover bg-fixed bg-50 bg-repeat py-16 px-8 md:p-16 lg:px-24'>
			<div className='flex w-full flex-col items-center justify-between gap-16 lg:flex-row lg:items-start'>
				<div className='w-full flex-1 text-center'>
					<h1 className='mb-4 font-cormorant text-4xl leading-10 tracking-wider'>
						Contact Us
					</h1>

					<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
						9 W 53rd St, New York, NY 10019, USA
					</p>

					<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
						+1 212-344-1230
					</p>

					<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
						+1 212-344-1230
					</p>
				</div>

				<div className='w-full flex-1 text-center'>
					<img className='mx-auto mb-3 w-52' src={logo} alt='' />

					<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
						"The best way to find yourself is to lose yourself in the service of
						others."
					</p>

					<img className='mx-auto mt-4 w-11' src={spoon} alt='' />

					<div className='mt-8 flex items-center justify-center gap-6'>
						<svg
							stroke='currentColor'
							fill='none'
							stroke-width='2'
							viewBox='0 0 24 24'
							stroke-linecap='round'
							stroke-linejoin='round'
							height='1.5rem'
							width='1.5rem'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
						</svg>

						<svg
							stroke='currentColor'
							fill='none'
							stroke-width='2'
							viewBox='0 0 24 24'
							stroke-linecap='round'
							stroke-linejoin='round'
							height='1.5rem'
							width='1.5rem'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
						</svg>

						<svg
							stroke='currentColor'
							fill='none'
							stroke-width='2'
							viewBox='0 0 24 24'
							stroke-linecap='round'
							stroke-linejoin='round'
							height='1.5rem'
							width='1.5rem'
							xmlns='http://www.w3.org/2000/svg'>
							<rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
							<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
							<line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
						</svg>
					</div>
				</div>

				<div className='w-full flex-1 text-center'>
					<h1 className='mb-4 font-cormorant text-4xl leading-10 tracking-wider'>
						Working Hours
					</h1>

					<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
						Monday-Friday:
					</p>

					<p className='mb-4 font-open text-xs leading-7 tracking-wider md:text-base'>
						08:00 am - 12:00 am
					</p>

					<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
						Saturday-Sunday:
					</p>

					<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
						07:00 am - 11:00 pm
					</p>
				</div>
			</div>

			<div className='mt-12'>
				<p className='font-open text-xs leading-7 tracking-wider md:text-base'>
					2021 Gericht. All Rights reserved.
				</p>
			</div>
		</section>
	);
};

export default Footer;
