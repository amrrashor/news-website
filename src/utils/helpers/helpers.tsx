export function formatDate(inputDate: string) {
    const options:{} = { year: 'numeric', month: 'short', day: 'numeric' } ;
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', options);
}

export function truncateString(str: string, maxLength: number) {
    if (str?.length <= maxLength) {
        return str;
    } else {
        return str?.slice(0, maxLength) + '...';
    }
}