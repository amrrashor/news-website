'use client'
import Link from "next/link";
import { useQuery } from "react-query";

type Props = {
    params: {
        id: string | number
    }
}

const SinglePost = ({ params: {id} }: {params: {id: string | number}}) => {
    const { isLoading, error, data } = useQuery('data', () => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()))

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error :</p>
    return (
        <>
            <div>
                {data?.title}
            </div>
        </>
    );
};

export default SinglePost


