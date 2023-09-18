interface GoalProps {
    index: number,
    title: string,
    desc: string
}

const Goal = ({ index, title, desc }: GoalProps) => {
    return (<div className={`absolute top-10 left-10 w-[500px] flex rounded-md bg-white shadow-goals h-[150px] overflow-hidden ${index % 2 !== 0 && 'flex-row-reverse'}`}
        style={{
            marginTop: index * (150 + 20)
        }}>
        <div className="flex-1 p-[32px]">
            <h1 className="text-main-txt font-bold text-heading ">
                {title}
            </h1>
            <p className="text-sec-txt font-normal text-small">
                {desc}
            </p>
        </div>
        <div className="w-[120px] h-full bg-[#EDEDED] flex justify-center items-center">
            <h1 className="text-white text-huge font-bold">
                0{index + 1}
            </h1>
        </div>
    </div>)
}

export default Goal;
