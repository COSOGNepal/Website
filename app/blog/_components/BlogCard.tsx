import Link from "next/link";

type BlogCardParams = {
    mostRecent?: boolean,
    index: number,
    id: string,
    coverImage: string,
    description: string,
    title: string,
    author: string,
    published_date: string,
    link: string,
}

const BlogCard = ({ mostRecent = false, index, id, coverImage, description, title, author, published_date, link }: BlogCardParams) => {
    return (
        <Link href={link}
            className={`blog ${mostRecent
                ? 'row-span-3 p-standard' :
                'grid grid-cols-2 grid-rows-1-250 gap-x-small overflow-hidden'}
             p-small border-gray-bg border-2 focus:border-black-light hover:border-gray-dark  hover:bg-gray-bg rounded-md`} tabIndex={index} >
            <div className={`coverImage w-full `}>
                <img src={coverImage}
                    alt="testing Image"
                    className={`${mostRecent ? "max-h-[300px] w-full rounded-t-md" : "h-[calc(100%+20px)] min-w-[200px] -mt-small -ml-small rounded-l-md"}
                                object-cover `} />
            </div>

            <div className="detailsContainer space-y-small">
                <div className={`title text-para font-bold text-black-dark ${mostRecent ? 'mt-standard' : ''}`}>
                    {title}
                </div>
                <div className={`description overflow-hidden ${mostRecent ? "line-clamp-6" : "line-clamp-3"} text-sub-para text-black-mid`}>
                    {description}
                </div>
                <span className={`flex text-black-light text-sub-para space-x-standard`}>
                    <div className="authorName">
                        {author}
                    </div>
                    <div className="date">
                        {published_date}
                    </div>
                </span>
            </div>
        </Link>
    )

}

export default BlogCard;
