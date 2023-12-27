'use client'
import React, {useState, useEffect} from "react";
import { Box , Image, Text, Flex, Spinner} from "@chakra-ui/react";
import { useQuery } from 'react-query';


import SectionHeader from "./SectionHeader";
import { SingleBlogPostProps } from "@/utils/types";
import { fetchAllBlogs } from '@/utils/actions/actions';
import { Card } from '.';


const AllBlogs = () => {
    const { isLoading, data, error, isSuccess, isError } = useQuery('allblogs', fetchAllBlogs);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setBlogs([]);
    }, [])


    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        } else if (isSuccess && data && data?.length > 0) {
            setBlogs(data);
            setLoading(false);
        } else if (isError) {
            throw error
        }
    }, [data, isSuccess, isLoading]);

    return (
        <Box marginTop={'150px'} marginLeft={'auto'} marginRight={'auto'} w='100%'>
            <SectionHeader text='All blog posts' />
            
            <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        {blogs && blogs?.length > 0 &&
                            blogs.map((post: SingleBlogPostProps) => (
                            <Card key={post?.id} {...post} />
                        ))}
                    </>
                )}
            </Flex>
        </Box>
    )
}

export default AllBlogs