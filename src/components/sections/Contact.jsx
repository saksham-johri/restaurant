import findus from '../../assets/images/findus.png';
import spoon from '../../assets/images/spoon.svg';
import Button from '../Button';

const Contact = () => {
	return (
		<section
			id='contact'
			className='flex flex-col py-16 px-8 md:p-16 lg:flex-row lg:px-24'>
			<div className='flex w-full flex-col items-start justify-center'>
				<div className='mb-4'>
					<p className='font-cormorant text-lg font-bold capitalize leading-8 tracking-wider md:text-2xl'>
						Contact
					</p>

					<img src={spoon} alt='' className='w-11' />
				</div>

				<h1 className='mb-12 font-cormorant text-5xl font-bold capitalize leading-normal tracking-wider text-golden md:text-6xl md:leading-snug'>
					Find Us
				</h1>

				<div>
					<p className='font-cormorant text-base capitalize lining-nums tracking-wider md:text-xl'>
						Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
					</p>

					<p className='my-8 font-cormorant text-xl capitalize tracking-wider text-golden md:text-2xl'>
						Opening Hours
					</p>

					<p className='font-cormorant text-base lining-nums tracking-wider md:text-xl'>
						Mon - Fri: 10:00 am - 02:00 am
					</p>

					<p className='font-cormorant text-base lining-nums tracking-wider md:text-xl'>
						Sat - Sun: 10:00 am - 03:00 am
					</p>
				</div>

				<div className='mt-8'>
					<Button>Visit Us</Button>
				</div>
			</div>

			<div className='mt-20 flex w-full items-center justify-center lg:mt-0'>
				<img className='w-full lg:w-4/5' src={findus} alt='' />
			</div>
		</section>
	);
};

export default Contact;
