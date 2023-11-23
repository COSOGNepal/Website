type TSectionTitleProps = {
    title: string,
    viewall?: string,
}

export default function SectionTitle({ title, viewall }: TSectionTitleProps) {
    return (
        <div className="title_container flex justify-between items-center">
            <h1 className="font-bold text-sub-title uppercase">
                {title}
            </h1>
            {viewall && <a href={viewall} className="text-blue font-medium text-para"> View all</a> || ""}
        </div >
    )
}
