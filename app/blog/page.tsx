const BlogPage = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_BASE + "/api/blog/",
        {
            method: 'post',
        }
    ).then(res => res.json())

    return (
        <div className="mt-section">Hello bloggers
            {data}
        </div>
    )
}

export default BlogPage
