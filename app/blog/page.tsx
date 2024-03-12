import { GoogleAuthProvider, SubscribeForm } from "./_components"

const BlogPage = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_BASE + "/api/blog/",
        {
            method: 'POST',
        }
    ).then(res => res.json())

    return (
        <div className="mt-section min-h-screen">
            {
                // TODO: Make the form responsive
            }
            <div className="HeroSection min-h-max flex justify-center items-center flex-col mt-section">
                <h1 className="mainTitle text-title font-extrabold text-center ">
                    Let your code be the change you want to see in the world.
                </h1>
                <h2 className="subtitle font-normal text-black-mid mt-small">
                    Subscribe to our newsletter and get the latest updates on our work and the latest technologies.
                </h2>
                <SubscribeForm />
            </div>

            <GoogleAuthProvider />
        </div>
    )
}

export default BlogPage
