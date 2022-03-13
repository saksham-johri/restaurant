import mealVideo from '../../assets/videos/meal.mp4';

const Meal = () => {
	return (
		<div className='relative h-screen'>
			<video
				className='h-full w-full object-cover'
				src={mealVideo}
				loop
				autoPlay
				muted
			/>

			<div className='absolute inset-0 -top-px -bottom-px bg-[rgba(0,0,0,0.65)]' />
		</div>
	);
};

export default Meal;
