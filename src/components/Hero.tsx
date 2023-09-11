'use client'
import { Flex, Text , Box} from "@chakra-ui/react"

const Hero = () => {
    return (
        <>
            <Flex justifyContent={'center'} alignItems={'center'} marginTop={'150px'}>
                <Text as={'h1'} fontSize={['40px', '60px', '100px']} lineHeight={'16px'} fontWeight={'extrabold'}>THE BLOG</Text>
            </Flex>
            <Box bg='gray.300' w={'100%'} height={'1px'} marginTop={'100px'}/>
        </>

    )
}

export default Hero