type BlogCardParams = {
    mostRecent?: boolean
}

const BlogCard = ({ mostRecent = false }: BlogCardParams) => {
    return (
        <div className={`blog ${mostRecent ? 'flex-col row-span-3' : 'flex-row'} flex p-small border-gray-bg border-2 opacity-90 hover:opacity-100 hover:border-black-light rounded-md`} >
            <div className={`coverImage w-full ${mostRecent ? '' : 'mr-standard h-[200px] '}`}>
                <img src="/images/assets/about_banner.png" alt="testing Image" className={`${mostRecent ? "max-h-[300px] w-full" : "h-[180px] min-w-[200px]"} object-cover rounded-md`} />
            </div>

            <div className="detailsContainer space-y-small ">
                <span className={`${mostRecent ? "mt-small" : "mt-0"}  flex text-black-light text-sub-para `}>
                    <div className="authorName">
                        Saroj Regmi
                    </div>

                    <div className="date">
                        &nbsp; . &nbsp; 7 <sup>th</sup> July, 2023
                    </div>
                </span>

                <div className="title text-sub-title font-bold mt-standard text-black-dark">
                    Our first and biggest Event
                </div>

                <div className="description overflow-hidden line-clamp-3 text-para text-black-mid">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
                    Nisi anim cupidatat excepteur officia.
                    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
                    Nostrud officia pariatur ut officia.
                    Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
                    Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                    Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                </div>
            </div>
        </div >
    )

}

export default BlogCard;
