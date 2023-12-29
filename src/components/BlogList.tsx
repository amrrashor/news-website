'use client'
import React, {useState, useEffect} from "react";
import { Box , Image, Text, Flex, Spinner} from "@chakra-ui/react";
import { useQuery } from 'react-query';


import SectionHeader from "./SectionHeader";
import { cardProps } from "@/utils/types/types";
import { fetchAllBlogs } from '@/utils/actions/actions';
import { Card } from '.';
import { ArrowLeft, ArrowRight } from "@/utils/icons/icons";

const ITEMS_PER_PAGE = 20;
const AllBlogs = () => {
    const { isLoading, data, error, isSuccess, isError } = useQuery('allblogs', fetchAllBlogs);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

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

    console.log('blogs', data)

    const pages = Math.ceil(data?.totalResults / 20);
    console.log('total results', pages);


    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedBlogs = blogs?.slice(startIndex, endIndex);


    const handleNavigation = (actionType: string) => {
        if (actionType === 'previous') {
            if (currentPage === 1) {
                return currentPage
            } else {
                setCurrentPage(currentPage - 1)
            }
        } else if (actionType === 'next') {
            if (currentPage === endIndex) {
                return 
            } else {
                setCurrentPage(currentPage + 1)
            }
        }
    }
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
                        {paginatedBlogs?.slice(0,20).map((post: cardProps) => (
                            <Card key={post?.title} {...post} />
                        ))}
                    </>
                ) : (
                    <></>
                )}
            </Flex>
            <Box bg='gray.300' w={'100%'} height={'1px'} marginTop={'100px'} />
            
            {/* pagination */}
            <Flex marginTop={'30px'} justifyContent={'space-between'} alignItems={'center'}>
                <Flex alignItems={'center'} onClick={() => handleNavigation('previous')} cursor={'pointer'}>
                    <ArrowLeft />
                    <Text>Previous</Text>
                </Flex>

                <Text>1,2,3,4,</Text>

                <Flex alignItems={'center'} onClick={() => handleNavigation('next')} cursor={'pointer'}>
                    <Text>Next</Text>
                    <ArrowRight />
                </Flex>
                
            </Flex>
        </Box>
    )
}

export default AllBlogs