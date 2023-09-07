import { Box, Flex, Grid, GridItem , Text} from "@chakra-ui/react";




const RecentBlogPost = () => {
    return (
            <Box marginTop={'150px'}>
                <Text as={'h3'} textAlign={'left'} marginBottom={'80px'}>
                    Recent blog posts
                </Text>
            
                <Flex justifyContent={'center'}  flexDirection={'column'} alignItems={'center'}>
                <Grid
                    gap={[0, 2, 5]}
                    templateRows={['repeat(6, 1fr)', 'repeat(6, 1fr)', 'repeat(3, 267px)']}
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 640px)', 'repeat(2, 640px)']}
                >
                        <GridItem colSpan={1} rowSpan={[1,2,2]} maxW={'1280px'} bg='red' minH={'267px'}>Box 1</GridItem>
                        <GridItem colSpan={1} rowSpan={1} bg='black' maxW={'1280px'}  h={'267px'}>Box 2</GridItem>
                        <GridItem colSpan={1} rowSpan={1} bg='green' maxW={'1280px'}  h={'267px'}>Box 3</GridItem>
                        <GridItem colSpan={2} bg='cyan' maxW={'1280px'} w='100%' h={'267px'}>Box 4</GridItem>
                    </Grid>
                </Flex>
            </Box>
            
    )
}

export default RecentBlogPost