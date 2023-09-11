'use client'
import { Box , Image, Text, Flex, Spinner} from "@chakra-ui/react";
import { useQuery } from 'react-query';


import SectionHeader from "./SectionHeader";
import { SingleBlogPostProps } from "@/utils/types";


const SingleBlogPost = ({id, title, body, userId }:SingleBlogPostProps) => {
    return (
        <Box w='384px'>
            <Image src='' alt='' width={'100%'} height={'240px'} />

            <Flex>
                <Text>{title}</Text>
                <Text>22/11/2022</Text>
            </Flex>

            <Text>{title}</Text>

            <Text>{title.slice(0.5)}</Text>

            <Text>{body}</Text>

            <Flex>
                <Text>Tags</Text>
                <Text>Tags</Text>
                <Text>Tags</Text>
            </Flex>
        </Box>
    )
}
const AllBlogs = () => {
    const { isLoading, data, error } = useQuery('allblogs', () => (
        fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
            res.json()
        )
    ))



    return (
        <Box marginTop={'150px'}  marginLeft={'auto'} marginRight={'auto'} w='100%'>
            <SectionHeader text='All blog posts' />
            

            <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        {data.map((post: SingleBlogPostProps) => (
                            <SingleBlogPost {...post} />
                        ))}
                    </>
                )}
            </Flex>
        </Box>
    )
}

export default AllBlogs