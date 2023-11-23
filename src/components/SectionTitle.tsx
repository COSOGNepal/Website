import Link from "next/link"

type TSectionTitleProps = {
    title: string,
    viewall?: string,
}

export default function SectionTitle({ title, viewall }: TSectionTitleProps) {
    return (
        <div className="title_container flex justify-between items-center">
            <h1 className="font-bold text-sub-title text-black-mid uppercase">
                {title}
            </h1>
            {viewall && <Link href={viewall} className="text-blue font-medium text-para uppercase"> View all</Link> || ""}
        </div >
    )
}
