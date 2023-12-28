import { cardProps } from '@/utils/types';
import { Box, Image, Text, Flex, Spinner } from "@chakra-ui/react";
import Link from 'next/link';
import React from 'react'

const Card = ({id, title, url, urlToImage, author, description, publishedAt, content }:cardProps) => {
    return (
        <Link href={url} style={{cursor:'pointer'}}>
            <Box w='384px'>
                <Image marginBottom={'32px'} objectFit={'cover'} src={urlToImage} alt={title} width={'100%'} height={'240px'} />
                <Flex color={'#6941C6'} fontSize={'14px'} fontWeight={'600'} lineHeight={'20px'} alignItems={'center'} marginBottom={'12px'}>
                    <Text>{author} - </Text>
                    <Text>{publishedAt}</Text>
                </Flex>
                <Text marginBottom={'12px'} color={'#1A1A1A'} fontSize={'24px'} fontWeight={'600'} lineHeight={'32px'}>{title}</Text>
                <Text marginBottom={'12px'} color={'#21D188'} fontSize={'14px'} fontWeight={'600'} lineHeight={'20px'}>{author}</Text>
                <Text marginBottom={'26px'}>{description}</Text>
            </Box>
        </Link>
    )
}

export default Card