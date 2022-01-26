import { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import userEvent from '@testing-library/user-event'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const blogsCollectionRef = collection(db, 'blogs')

    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogsCollectionRef)
            setBlogs(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
            console.log(data)

            // console.log('BLOGS', blogs)
        }

        getBlogs()
    }, [])

    return (
        <div>
            {blogs.map((blog) => {
                return (
                    <div>
                        <p>Topic: {blog.topic}</p>
                        <p>Summary: {blog.summary}</p>
                    </div>
                )
            })}
        </div>
    )
}
