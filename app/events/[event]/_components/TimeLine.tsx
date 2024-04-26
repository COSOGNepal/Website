type TtimeLineProp = {
    task: string,
    time: string,
    icon: string
}[]

const TimeLine = (datas: TtimeLineProp) => {
    return (
        <>
            {
                datas.map(({ task, time, icon }, index) =>
                (
                    <div className="taskCon">
                        <div className="task">
                            {task}
                        </div>
                        <div className="time">
                            {time}
                        </div>
                        <div className="icon">
                            {icon}
                        </div>
                    </div>
                )
                )
            }
        </>
    )
}

export default TimeLine
