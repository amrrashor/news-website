'use client';
import { useState } from "react";
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
    Stack
} from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";

const navbarLinkStyles = {
    fontSize:'24px',
    lineHeight:'16px',
    fontWeight:'semibold',
    textColor: '#1A1A1A',
    marginLeft: '10px',
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
    const [showMenu, setShowMenu] = useState(false);


    return (
        <Flex paddingTop={'10px'} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                <Text
                    as={'h2'}
                    sx={navbarLinkStyles}
                >
                    Your Name
                </Text>
            </Box>

            <Flex display={{sm:'none' ,md: "flex" }} alignItems={'center'} justifyContent={'space-evenly'}>
                <Text as={'a'} sx={navbarLinkStyles}>Blog</Text>
                <Text as={'a'} sx={navbarLinkStyles}>Projects</Text>
                <Text as={'a'} sx={navbarLinkStyles}>About</Text>
                <Text as={'a'} sx={navbarLinkStyles}>Newsletter</Text>
                <Button
                    bg={'#7F56D9'}
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

                <Switch size='lg' bgColor={'#999'} ringColor={'111'} width={'50px'} height={'50px'}/>
            </Flex>

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
                        <MenuList boxShadow='3xl' shadow={'2xl'} p='6' bgColor='#333' borderRadius={'2xl'}>
                            <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                New Tab
                            </MenuItem>
                            <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                New Window
                            </MenuItem>
                            <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                Open Closed Tab
                            </MenuItem>
                            <MenuItem as='a' href='#' sx={mobileMeniItems}>
                                Open File...
                            </MenuItem>
                        </MenuList>
                        
                    </>
                )}
            </Menu>
        </Flex>
    )
}

export default Navbar