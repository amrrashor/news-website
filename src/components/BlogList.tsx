'use client'
import React, {useState, useEffect} from "react";
import { Box , Image, Text, Flex, Spinner} from "@chakra-ui/react";
import { useQuery } from 'react-query';


import SectionHeader from "./SectionHeader";
import { cardProps } from "@/utils/types";
import { fetchAllBlogs } from '@/utils/actions/actions';
import { Card } from '.';


const AllBlogs = () => {
    

    const { isLoading, data, error, isSuccess, isError } = useQuery('allblogs', fetchAllBlogs);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => {
            setBlogs([]);
        }
    }, []);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        } else if (isSuccess) {
            setBlogs(data?.articles);
            setLoading(false);
        } else if (isError) {
            console.log('error', error);
            setLoading(false);
        }
    }, [data, isSuccess, isLoading, isError]);

    return (
        <Box marginTop={'150px'} marginLeft={'auto'} marginRight={'auto'} w='100%'>
            <SectionHeader text='All blog posts' />
            
            <Flex flexWrap={'wrap'} justifyContent={'space-between'} gap={'5'}>
                {loading ? (
                        <Flex justifyContent={'center'} alignItems={'center'} width={'full'} height={'full'}>
                        <Spinner size={'xl'} />
                        </Flex>
                    ) : isSuccess && blogs?.length > 0 ? (
                        <>
                            {blogs?.map((post: cardProps) => (
                                <Card key={post?.id} {...post} />
                            ))}
                        </>
                    ) : (
                        <></>
                )}
            </Flex>
        </Box>
    )
}

export default AllBlogs