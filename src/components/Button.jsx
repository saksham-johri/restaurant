const Button = ({ children }) => {
	return (
		<button className='rounded-sm bg-crimson py-2 px-6 font-cormorant font-bold leading-7 tracking-wider text-darkGray'>
			{children}
		</button>
	);
};

export default Button;
