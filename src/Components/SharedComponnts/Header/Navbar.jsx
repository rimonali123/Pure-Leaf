import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, Badge, InputBase, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Cartmodal from './CartModal/Cartmodal';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hoocks/UseAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
// import { IoMdLogOut } from 'react-icons/io';
import { BiLogInCircle } from 'react-icons/bi';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));




const pages = [
    <NavLink className={({ isActive }) => isActive ? 'border p-2 rounded-lg text-xl' : ''} to='/' key={1}>Home</NavLink>,
    <NavLink className={({ isActive }) => isActive ? 'border p-2 rounded-lg text-xl' : ''} to='/shopPage' key={2}>Shop</NavLink>,
    // <NavLink className={({ isActive }) => isActive ? 'border p-2 rounded-lg text-xl' : ''} to='/vegetable' key={3}>Vegetable</NavLink>,
    <NavLink className={({ isActive }) => isActive ? 'border p-2 rounded-lg text-xl' : ''} to='/blogpage' key={4}>Blog</NavLink>,
];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const pagesMenus = [
    <NavLink className={({ isActive }) => isActive ? '' : ''} to='/aboutUs' key={5}>About Us</NavLink>,
    <NavLink className={({ isActive }) => isActive ? '' : ''} to='/contactUs' key={6}>Contact Us</NavLink>,
    <NavLink className={({ isActive }) => isActive ? '' : ''} to='/faq' key={7}>FAQ</NavLink>,
];


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user)
    const handlelogout = () => {
        logOut()
            .then(() => {
                console.log('LogOut Successfully')
                Swal.fire({
                    position: "center,top-end",
                    icon: "error",
                    title: "LogOut Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/loginPage')
            })
            .catch(error => {
                console.error(error.message)
            })

    }




    const settings = [

        < NavLink className={({ isActive }) => isActive ? '' : ''} to='/accountPage' key={10} > Account</NavLink >,
        <NavLink onClick={handlelogout} className={({ isActive }) => isActive ? '' : ''} key={11}>Log Out</NavLink>

    ];


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElPage, setAnchorElPage] = useState(null);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenPageMenu = (event) => {
        setAnchorElPage(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleClosePageMenu = () => {
        setAnchorElPage(null);
    };
    const axiosSecure = useAxiosSecure();



    const { data: cartData, refetch } = useQuery({
        queryKey: ['cartItemData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cartItemData');
            return res.data;
        }
    });
    // console.log(cartData)



    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'green' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop Logo */}
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <p className='font-bold text-4xl'>PureLeaf</p>
                    </Typography>

                    {/* Mobile Menu Button */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Mobile Logo */}
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Pure Leaf
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                        {/* thisi is target */}
                        <MenuItem>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Tooltip title="Open pages">
                                    <IconButton onClick={handleOpenPageMenu} sx={{ p: 0 }}>
                                        <h1 className='text-white text-sm'>PAGES</h1>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElPage}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElPage)}
                                    onClose={handleClosePageMenu}
                                >
                                    {pagesMenus.map((pagesMenu) => (
                                        <MenuItem key={pagesMenu} onClick={handleClosePageMenu}>
                                            <Typography textAlign="center">{pagesMenu}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </MenuItem>
                    </Box>

                    {/* Search Bar - Hidden on Small Devices */}
                    <Search sx={{ display: { xs: 'none', md: 'flex', }, }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <div className=' items-center gap-2 hidden md:flex ml-10'>
                        <p><AddIcCallIcon /></p>
                        <div>
                            <p>Online order</p>
                            <p>+93763747349</p>
                        </div>
                    </div>
                    <MenuItem>
                        <div>
                            <IconButton onClick={handleOpen}
                                size="large"
                                aria-label="show cart item length notifications"
                                color="inherit"
                                className='flex items-center flex-row-reverse gap-2'
                            >
                                <Badge badgeContent={cartData?.length || '0'} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                                <p className='text-base'>Cart</p>
                            </IconButton>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{

                                    position: 'absolute',
                                    top: { xs: '5%', md: '10%', lg: '10%' },
                                    left: { xs: '10%', md: '50%', lg: '65%' },
                                    // transform: 'translate(-50%, -50%)',
                                    width: 400,
                                    maxHeight: { xs: "80%", md: "80%", lg: "80%" },
                                    bgcolor: 'background.paper',
                                    border: '2px solid #000',
                                    boxShadow: 24,
                                    p: 2,
                                    overflow: "auto"

                                }}>
                                    {cartData?.length ? <div>
                                        <div className='flex flex-col'>
                                            {cartData?.map(cart => <Cartmodal key={cart._id} cart={cart} refetch={refetch}></Cartmodal>)}
                                        </div>



                                        <Typography className='flex items-center justify-between text-2xl font-bold'>
                                            Total price : <span className='text-2xl text-red-500'> $00</span>
                                        </Typography>

                                        <div className="flex gap-2 items-center justify-between mt-5">
                                            <Link to='/checkOutPage'>
                                                <button className='text-black bg-white border hover:text-white text-xl  p-2 rounded-xl hover:bg-green-500'>Checkout</button>
                                            </Link>

                                            <Link to='/viewCart'>
                                                <button className='text-black bg-white border hover:text-white text-xl  p-2 rounded-xl hover:bg-green-500'>View cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                        :
                                        'There is no item added to cart, please add first.'
                                    }
                                </Box>
                            </Modal>
                        </div>

                    </MenuItem>

                    {/* User Avatar and Settings Menu */}
                    {user ? <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={user?.displayName}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User Avatar" src={user?.photoURL} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> : <Link className='ml-4 border rounded-xl' to='/loginPage' key='3'><Button variant="contained" color="success" className='flex gap-2 '>
                        Log In<BiLogInCircle />
                    </Button>
                    </Link>}


                </Toolbar>
            </Container>
        </AppBar>
    );
};



export default Navbar;