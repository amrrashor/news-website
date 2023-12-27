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
        <Link href={`posts/${id}`}>
            <div>
                {data?.title}
            </div>
        </Link>
    );
};

export default SinglePost


