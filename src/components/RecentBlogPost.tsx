import { Box, Flex, Grid, GridItem , Text} from "@chakra-ui/react";


const RecentBlogPost = () => {
    return (
            <Box marginTop={'150px'}>
                <Text as={'h3'} textAlign={'left'} marginBottom={'80px'}>
                    Recent blog posts
                </Text>
            
                <Flex justifyContent={'center'}  flexDirection={'column'} alignItems={'center'}>
                    <Grid
                        maxW={'1280px'}
                        columnGap={[1,1,1]}
                        rowGap={[1,1,1]}
                        templateRows={['repeat(4, 480px)', 'repeat(6, 1fr)', 'repeat(3, 267px)']}
                        templateColumns={['repeat(1, auto)', 'repeat(2, 640px)', 'repeat(2, 640px)']}
                    >
                    <GridItem colSpan={1} rowSpan={[1, 2, 2]} w={['328px', '100%']}  maxW={'1280px'} bg='red' minH={['480px','267px']}>Box 1</GridItem>
                        <GridItem colSpan={1} rowSpan={[1,1,1]} bg='black'  w={['328px', '100%']} maxW={'1280px'}  minH={['480px','267px']}>Box 2</GridItem>
                        <GridItem colSpan={1} rowSpan={[1,1,1]} bg='green'  w={['328px', '100%']} maxW={'1280px'}  minH={['480px','267px']}>Box 3</GridItem>
                        <GridItem colSpan={[1,2,2]} rowSpan={[1]} bg='cyan'   w={['328px', '100%']}maxW={'1280px'} w='100%' minH={['480px','267px']}>Box 4</GridItem>
                    </Grid>
                </Flex>
            </Box>
    )
}

export default RecentBlogPost