import type { TdescriptorData } from "../type"

export default function Descriptor({ title, descriptions = [], list = [] }: TdescriptorData) {
    return (
        <div className="descriptor flex space-y-small flex-col">
            <div className="title font-bold text-sub-title text-black-dark  ">
                {title}
            </div>
            <div className="description font-normal  space-y-small text-para text-black-mid">
                {
                    descriptions.map((description, index) => {
                        return <div key={index}> {description}</div>
                    })

                }
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
