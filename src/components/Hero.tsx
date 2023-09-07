import { Flex, Text } from "@chakra-ui/react"

const Hero = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} marginTop={'50px'}>
            <Text as={'h1'} fontSize={['40px', '60px', '100px']} lineHeight={'16px'} fontWeight={'extrabold'}>THE BLOG</Text>
        </Flex>
    )
}

export default Hero