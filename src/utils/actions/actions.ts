import { env } from "process";

let key='c39b340141ff4d4b8a0b62da1c8ebc94'
let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${key}`;

export const fetchAllBlogs = async () => {
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return await response.json();
};