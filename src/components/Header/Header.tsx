import React, { useState } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

import { Hamburger } from './Hamburger';
import { Search } from './Search';
import { AppTitle } from './AppTitle';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Messages, More, Notifications, UserAccount } from '../Actions';
import { DefaultMenu, MobileMenu } from './Menu';

interface HeaderProps {
	toggleNavigation: () => void;
}

export const Header = ({ toggleNavigation }: HeaderProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

	const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	return (
		<>
			<button>I am a photographer</button>
			<button>I am a partner</button>
		</>
	);
};
