import { GoogleAuthProvider } from "./_components"

const BlogPage = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_BASE + "/api/blog/",
        {
            method: 'POST',
        }
    ).then(res => res.json())

    console.log(data)
    return (
        <div className="mt-section">
            <GoogleAuthProvider />

        </div>
    )
}

export default BlogPage
