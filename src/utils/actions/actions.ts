import { env } from "process";

export const fetchAllBlogs = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return response.json();
};