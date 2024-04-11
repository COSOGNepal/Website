import { GoogleAuthProvider, SubscribeForm } from "./_components"
import BlogCard from "./_components/BlogCard"

const BlogPage = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_API_BASE + "/api/blog/",
        {
            method: 'POST',
        }
    ).then(res => res.json())

    return (
        <div className="mt-section min-h-screen max-w-[1400px] brk-1400:mx-auto">
            <div className="HeroSection min-h-max flex justify-center items-center flex-col mt-section brk-1400:px-0 px-standard">
                <h1 className="mainTitle text-title font-extrabold  leading-9">
                    Let your code be the change you want to see in the world.
                </h1>
                <h2 className="subtitle font-normal text-black-mid mt-small">
                    Subscribe to our newsletter and get the latest updates on our work and the latest technologies.
                </h2>
                <SubscribeForm />
            </div>
            <div className="blogsContainer mt-[150px] px-standard brk-1400:px-0">
                <h1 className="title font-medium text-para text-black-dark ">
                    Recent Blogs
                </h1>
                <div className="blogs grid grid-rows-af-blog-rows grid-cols-2 w-full mt-standard gap-small">
                    {
                        Array(10).fill(0).map((_, index) => {
                            return (
                                <BlogCard
                                    id={"id-" + index}
                                    mostRecent={index === 0}
                                    key={index}
                                    index={index}
                                    coverImage={"/images/assets/about_banner.png"}
                                    title={"Our first and biggest Event "}
                                    description={` Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. `}
                                    author={"Saroj Regmi"}
                                    published_date={"2079-8-10"}
                                    link="somerandomlin"
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogPage;
