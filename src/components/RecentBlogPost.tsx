import { Box, Flex, Grid, GridItem , Text, Image} from "@chakra-ui/react";

const data = [
    {
        id: 0,
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16646/production/_116681719_whatsubject.jpg',
        authorName: 'Amr',
        blogTitle: 'Display each blog posts title, summary, and author.',
        desc: 'Display each blog postDisplay each blog posts title, summary, and author.s title, summary, and author.',
        tags: ['amr', 'mariam', 'soaad'],
        date:'10/10/2002'
    },
    {
        id: 1,
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16646/production/_116681719_whatsubject.jpg',
        authorName: 'Amr',
        blogTitle: 'Display each blog posts title, summary, and author.',
        desc: 'Display each blog postDisplay each blog posts title, summary, and author.s title, summary, and author.',
        tags: ['amr', 'mariam', 'soaad'],
        date:'10/10/2002'
    },
    {
        id: 2,
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16646/production/_116681719_whatsubject.jpg',
        authorName: 'Amr',
        blogTitle: 'Display each blog posts title, summary, and author.',
        desc: 'Display each blog postDisplay each blog posts title, summary, and author.s title, summary, and author.',
        tags: ['amr', 'mariam', 'soaad'],
        date:'10/10/2002'
    },
    {
        id: 3,
        img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16646/production/_116681719_whatsubject.jpg',
        authorName: 'Amr',
        blogTitle: 'Display each blog posts title, summary, and author.',
        desc: 'Display each blog postDisplay each blog posts title, summary, and author.s title, summary, and author.',
        tags: ['amr', 'mariam', 'soaad'],
        date:'10/10/2002'
    },

]

interface rescentBlogPostProps {
    id: number,
    img: string,
    authorName: string,
    blogTitle: string,
    desc:string,
    tags: string[]
}


const RecentBlogPost = () => {
    return (
            <Box marginLeft={'auto'} marginRight={'auto'} maxW={'1280px'} marginTop={'150px'}>
                <Text  as={'h3'} textAlign={'left'} marginBottom={'40px'}>
                    Recent blog posts
                </Text>
            
                <Flex justifyContent={'center'}  flexDirection={'column'} alignItems={'center'}>
                    <Grid
                        maxW={'1280px'}
                        columnGap={[1,1,2]}
                        rowGap={[1,1,2]}
                        templateRows={['repeat(4, 480px)', 'repeat(6, 1fr)', 'repeat(3, 267px)']}
                        templateColumns={['repeat(1, auto)', 'repeat(2, 640px)', 'repeat(2, 640px)']}
                    >
                        {data.map((post) => (
                            <GridItem
                                colSpan={post.id === 3 ? [1,2,2] : 1}
                                rowSpan={post.id === 0 ? [1, 2, 2] : [1,1,1]}
                                w={['328px', '100%']}
                                maxW={'100%'}
                                minH={['480px', '267px']}
                                boxShadow={'2xl'}
                                bg={'white'}
                                key={post.id}
                            >
                                <Flex flexDirection={post.id === 0 ? 'column' : 'row'}>
                                    <Image
                                        src={post.img}
                                        alt={post.blogTitle}
                                        maxW={'100%'}
                                        w={post.id === 0 ? '100%' : post.id === 3 ? '592px' : '328px'}
                                        maxH={'228px'}
                                        objectFit={'cover'}
                                    />

                                    <Box>
                                        <Flex>
                                            <Text>{post.authorName}</Text>
                                            <Text>{post.date}</Text>
                                        </Flex>
                                        <Text>{post.blogTitle}</Text>
                                        <Text>{post.desc}</Text>
                                        <Flex>
                                            {post.tags.map((tag) => (
                                                <Text key={tag}>{tag}</Text>
                                            ))}
                                        </Flex>
                                    </Box>
                                </Flex>
                            </GridItem>
                        ))}
                    </Grid>
                </Flex>
            </Box>
    )
}

export default RecentBlogPost