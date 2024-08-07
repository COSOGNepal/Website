import Link from "next/link"

type TSectionTitleProps = {
    title: string,
    viewall?: string,
}

export default function SectionTitle({ title, viewall }: TSectionTitleProps) {
    return (
        <div className="title_container max-w-[1400px] brk-1400:mx-auto flex justify-between items-center">
            <h1 className="font-bold sm:text-sub-title text-para text-black-mid uppercase">
                {title}
            </h1>
            {viewall && <Link href={viewall} className="text-blue-blue text-sub-para font-medium sm:text-para uppercase"> View all</Link> || ""}
        </div >
    )
}
