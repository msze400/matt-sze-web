import { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const blogsCollectionRef = collection(db, 'blogs')

    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogsCollectionRef)
            console.log(data)
        }

        getBlogs()
    }, [])

    return <h1>hello</h1>
}
