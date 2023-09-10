import { Box, Flex, Grid, GridItem, Text, Image, Spinner  } from "@chakra-ui/react";
import { useQuery } from 'react-query';

//PROP TYPES
import { rescentBlogPostProps } from "@/utils/types";
//STYLES
import { RecentBlogsStyles } from "@/utils/styles";


const SinglePost = ({id, userId, title, body}: rescentBlogPostProps) => {
return (
    <GridItem
        colSpan={id === 4 ? [1, 2, 2] : 1}
        rowSpan={id === 1 ? [1, 2, 2] : [1, 1, 1]}
        w={['328px', '100%']}
        maxW={'100%'}
        minH={['480px', '267px']}
        key={id}
    >
        <Flex flexDirection={id === 1 ? 'column' : 'row' }>
            <Image
                src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/16646/production/_116681719_whatsubject.jpg'}
                alt={title}
                maxW={'100%'}
                w={id === 1 ? '100%' : id === 4 ? '592px' : '328px'}
                maxH={'228px'}
                objectFit={'cover'}
                marginBottom={'8px'}
            />

            <Box marginLeft={'10px'}>
                <Flex>
                    <Text sx={RecentBlogsStyles.Date_Author} marginRight={'5px'}>{title.slice(0, 8)}</Text>
                    <Text sx={RecentBlogsStyles.Date_Author} marginLeft={'5px'}>28/12/2022</Text>
                </Flex>
                <Text sx={RecentBlogsStyles.Title}>{title.slice(0, 20)}</Text>
                <Text sx={RecentBlogsStyles.Author} marginRight={'5px'}>{title.slice(0, 8)}</Text>
                <Text sx={RecentBlogsStyles.Body}>{body}</Text>
                <Flex>
                    <Text sx={RecentBlogsStyles.Tags}>{title.slice(0, 4)}</Text>
                    <Text sx={RecentBlogsStyles.Tags}>{title.slice(0, 3)}</Text>
                    <Text sx={RecentBlogsStyles.Tags}>{title.slice(0, 2)}</Text>
                </Flex>
            </Box>
        </Flex>
    </GridItem>
)
}

const RecentBlogPost = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
        res.json()
        )
    )

    return (
        <Box marginLeft={'auto'} marginRight={'auto'} maxW={'1280px'} marginTop={'150px'}>
            <Text as={'h3'} sx={RecentBlogsStyles.Section_Header}>
                Recent blog posts
            </Text>

            <Flex justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                {isLoading ? (
                    <Spinner />
                ): (
                    <Grid
                        maxW={'1280px'}
                        columnGap={[1, 1, 3]}
                        rowGap={[1, 1, 3]}
                        templateRows={['repeat(4, 480px)', 'repeat(6, 1fr)', 'repeat(3, 267px)']}
                        templateColumns={['repeat(1, auto)', 'repeat(2, 640px)', 'repeat(2, 640px)']}
                    >
                    {data.slice(0,4).map((post: rescentBlogPostProps) => (
                        <SinglePost {...post}/>
                    ))}
                </Grid>
                )}
            </Flex>
        </Box>
    )
}

export default RecentBlogPost