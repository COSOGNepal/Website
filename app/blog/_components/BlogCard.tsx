type BlogCardParams = {
    mostRecent?: boolean,
    index: number
}

const BlogCard = ({ mostRecent = false, index }: BlogCardParams) => {
    return (
        <div className={`blog ${mostRecent ? 'flex-col row-span-3' : 'flex-row'} flex p-small border-gray-bg border-2 opacity-90 hover:opacity-100 focus:border-black-light hover:bg-gray-bg rounded-md`}
            tabIndex={index}  >
            <div className={`coverImage w-full ${mostRecent ? '' : 'mr-standard h-[200px] '}`}>
                <img
                    src="/images/assets/about_banner.png"
                    alt="testing Image"
                    className={`${mostRecent ? "max-h-[300px] w-full" : "h-[calc(100%+20px)] min-w-[200px] -mt-small -ml-small rounded-l-md"}
                                object-cover `} />
            </div>

            <div className="detailsContainer space-y-small">
                <div className={`title text-para font-bold text-black-dark ${mostRecent ? 'mt-standard' : ''}`}>
                    Our first and biggest Event
                </div>

                <div className={`description overflow-hidden ${mostRecent ? "line-clamp-6" : "line-clamp-3"} text-sub-para text-black-mid`}>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
                    Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
                    Nostrud officia pariatur ut officia.
                    Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
                    Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                    Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                </div>

                <span className={`flex text-black-light text-sub-para space-x-standard`}>
                    <div className="authorName">
                        Saroj Regmi
                    </div>

                    <div className="date">
                        7 <sup>th</sup> July, 2023
                    </div>
                </span>
            </div>
        </div >
    )

}

export default BlogCard;
