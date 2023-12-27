import { SingleBlogPostProps } from '@/utils/types';
import { Box, Image, Text, Flex, Spinner } from "@chakra-ui/react";
import Link from 'next/link';
import React from 'react'

const Card = ({id, title, body, userId }:SingleBlogPostProps) => {
    return (
        <Link href={`/posts/${id}`} style={{cursor:'pointer'}}>
            <Box w='384px'>
                <Image src='/img/placeholder.png' alt={title} width={'100%'} height={'240px'} />

                <Flex>
                    <Text>{title}</Text>
                    <Text>22/11/2022</Text>
                </Flex>

                <Text>{title}</Text>

                {/* <Text>{title.slice(0, 5)}</Text> */}

                <Text>{body}</Text>

                <Flex>
                    <Text>Tags</Text>
                    <Text>Tags</Text>
                    <Text>Tags</Text>
                </Flex>
            </Box>
        </Link>
    )
}

export default Card