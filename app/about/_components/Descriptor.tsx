import type { TdescriptorData } from "../type"

export default function Descriptor({ title, description, list = [] }: TdescriptorData) {
    return (
        <div className="descriptor flex space-y-[20px] flex-col">
            <div className="title font-bold text-sub-title text-black-dark  ">
                {title}
            </div>
            <div className="description font-normal text-para text-black-mid">
                {description}
                <div className="list_con mt-small">
                    {
                        list?.map((li, index) => {
                            return <li key={index}>{li}</li>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
