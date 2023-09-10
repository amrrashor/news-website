import { Box, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { useQuery} from 'react-query';
import { rescentBlogPostProps } from "@/utils/types";

const SinglePost = ({id, userId, title, body}: rescentBlogPostProps) => {
return (
    <GridItem
        colSpan={id === 4 ? [1, 2, 2] : 1}
        rowSpan={id === 1 ? [1, 2, 2] : [1, 1, 1]}
        w={['328px', '100%']}
        maxW={'100%'}
        minH={['480px', '267px']}
        boxShadow={'2xl'}
        bg={'white'}
        key={id}
    >
        <Flex flexDirection={id === 1 ? 'column' : 'row' }>
            <Image
                src={''}
                alt={title}
                maxW={'100%'}
                w={id === 1 ? '100%' : id === 4 ? '592px' : '328px'}
                maxH={'228px'}
                objectFit={'cover'}
            />

            <Box>
                <Flex>
                    {/* <Text>{authorName}</Text> */}
                    {/* <Text>{date}</Text> */}
                </Flex>
                <Text>{title}</Text>
                <Text>{body}</Text>
                {/* {tags.map((tag) => (
                    <Text key={tag}>{tag}</Text>
                ))} */}
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

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error
    console.log('data', data)
    return (
        <Box marginLeft={'auto'} marginRight={'auto'} maxW={'1280px'} marginTop={'150px'}>
            <Text as={'h3'} textAlign={'left'} marginBottom={'40px'}>
                Recent blog posts
            </Text>

            <Flex justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                    <Grid
                        maxW={'1280px'}
                        columnGap={[1, 1, 2]}
                        rowGap={[1, 1, 2]}
                        templateRows={['repeat(4, 480px)', 'repeat(6, 1fr)', 'repeat(3, 267px)']}
                        templateColumns={['repeat(1, auto)', 'repeat(2, 640px)', 'repeat(2, 640px)']}
                    >
                    {data.slice(0,4).map((post: string) => (
                        <SinglePost {...post} />
                    ))}
                </Grid>
            </Flex>
        </Box>
    )
}

export default RecentBlogPost