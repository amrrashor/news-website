'use clinet';

import { Text } from "@chakra-ui/react";
import { SectionHeaderProp } from "@/utils/types/types";
import { Header } from "@/utils/styles";


const SectionHeader = ({text}:SectionHeaderProp) => {
    return (
        <Text sx={Header}>{text}</Text>
    )
}

export default SectionHeader