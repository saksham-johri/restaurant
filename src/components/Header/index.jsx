/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/hamburger.png';
import close from '../../assets/images/close.png';

import style from './style.module.scss';

const navLinks = [
	{
		id: void 0,
		label: 'Home',
	},
	{
		id: void 0,
		label: 'About',
	},
	{
		id: void 0,
		label: 'Menu',
	},
	{
		id: void 0,
		label: 'Awards',
	},
	{
		id: void 0,
		label: 'Contact',
	},
];

const Header = () => {
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);

	return (
		<>
			<nav className={style.header}>
				<div className={style.logo}>
					<img src={logo} className={style['logo-img']} alt='' />
				</div>

				<ul className={style['nav-links']}>
					{navLinks?.map(({ id, label }, index) => (
						<li key={index}>
							<a href={id}>{label}</a>
						</li>
					))}
				</ul>

				<div className={style['cta-container']}>
					<div className={style.cta}>
						<a href={void 0}>Log In / Registration</a>
					</div>

					<div className={style.cta}>
						<a href={void 0}>Book Table</a>
					</div>
				</div>

				<div
					className={style.hamburger}
					onClick={() => setIsOverlayVisible(true)}>
					<img className={style.icon} src={hamburger} alt='' />
				</div>
			</nav>

			<div
				className={`${style.overlay} ${isOverlayVisible ? style.visible : ''}`}>
				<ul className={style['nav-links']}>
					{navLinks?.map(({ id, label }, index) => (
						<li key={index}>
							<a href={id}>{label}</a>
						</li>
					))}
				</ul>

				<div
					className={style['close-container']}
					onClick={() => setIsOverlayVisible(false)}>
					<img src={close} className={style.close} alt='' />
				</div>
			</div>
		</>
	);
};

export default Header;
