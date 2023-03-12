import Link from 'next/link';


function NewsPage() {
    return <>
        <h1>The News Page</h1>
        <ul>
            <li><Link href='/news/first'>First</Link></li>
            <li>Second</li>
        </ul>
    </>
}

export default NewsPage;