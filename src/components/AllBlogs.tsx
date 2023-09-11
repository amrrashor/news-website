'use client'
import { Box } from "@chakra-ui/react";
import { useQuery } from 'react-query';


import SectionHeader from "./SectionHeader";
import { rescentBlogPostProps } from "@/utils/types";

const AllBlogs = () => {
    const { isLoading, data, error } = useQuery('allblogs', () => (
        fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
            res.json()
        )
    ))
    return (
        <Box marginTop={'150px'}>
            <SectionHeader text='All blog posts' />
            

            {/* {data.map((post: rescentBlogPostProps) => (
                <div>{post.body}</div>
            ))} */}


        </Box>
    )
}

export default AllBlogs