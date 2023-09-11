'use client'
import {
    Text,
    Box,
    Flex,
    Button,
    IconButton,
    Switch,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    FormControl,
    Stack,
    useBreakpointValue,
    useBreakpoint
} from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";

const navbarLinkStyles = {
    fontSize:'24px',
    lineHeight:'16px',
    fontWeight:'semibold',
    textColor: '#1A1A1A',
    // marginLeft: '10px',
    marginRight: '10px',
    cursor:'pointer'
}

const mobileMeniItems = {
    textColor: '#1A1A1A',
    bg: 'transparent',
    marginTop: '5px',
    padding:'2px ',
    borderWidth: '0',
    outline: 'none',
}

const Navbar = () => {
    const showMenu = useBreakpointValue({ base: 'block', md: 'none' })

    return (
        <Flex paddingTop={'10px'} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                <Text as={'h2'} sx={navbarLinkStyles}>Your Name</Text>
            </Box>

            <Box display={['block', 'none']}>
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={isOpen ? <SmallCloseIcon w='24px' height='24px' color='#1A1A1A' /> : <HamburgerIcon w='24px' height='24px' color='#1A1A1A'/> }
                                variant='outline'
                                border={'0'}
                                bg='transparent'
                                cursor={'pointer'}
                            />
                            <MenuList boxShadow='3xl' shadow={'2xl'} p='4' bgColor='#fff' borderRadius={'2xl'}>
                                <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                    Blog
                                </MenuItem>
                                <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                    Projects
                                </MenuItem>
                                <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                    About
                                </MenuItem>
                                <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                    Newsletter
                                </MenuItem>
                            </MenuList>
                            
                        </>
                    )}
            </Menu>
            </Box>

            <Flex display={['none', 'block']} alignItems='center' justifyContent={'space-evenly'}>
                        <Text as={'a'} sx={navbarLinkStyles}>Blog</Text>
                        <Text as={'a'} sx={navbarLinkStyles}>Projects</Text>
                        <Text as={'a'} sx={navbarLinkStyles}>About</Text>
                        <Text as={'a'} sx={navbarLinkStyles}>Newsletter</Text>
                        <Button
                            bg={'#1A1A1A'}
                            w='113px'
                            h='48px'
                            borderRadius={'8px'}
                            fontSize={'18px'}
                            lineHeight={'16px'}
                            color={'#fff'}
                            outline={'none'}
                            border={'0'}
                            marginRight={'10px'}
                            cursor={'pointer'}
                        >
                            New Blog
                        </Button>

                        <Switch size='lg' ringColor={'111'} width={'50px'} />
                    </Flex>
        </Flex>
    )
}

export default Navbar