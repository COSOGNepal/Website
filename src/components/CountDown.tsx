import { useEffect, useState } from "react";

type TCountDownParams = {
    date: string,
    className?: string
}
export const CountDown = (data: TCountDownParams) => {
    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countDownDate = new Date(data.date).getTime();
        const x = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountDown({
                days,
                hours,
                minutes,
                seconds
            });
            if (distance < 0) {
                clearInterval(x);
                setCountDown({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            }
        }, 1000);
    }, [data.date]);


    return <div className="countDown text-black-dark flex items-center justify-center w-full">
        <div className="countDownCon *:flex flex *:gap-2 gap-3">
            <div className="countDownItem">
                <span>{countDown.days}</span>
                <p>Days</p>
            </div>
            <div className="countDownItem">
                <span>{countDown.hours}</span>
                <p>Hours</p>
            </div>
            <div className="countDownItem">
                <span>{countDown.minutes}</span>
                <p>Minutes</p>
            </div>
            <div className="countDownItem">
                <span>{countDown.seconds}</span>
                <p>Seconds</p>
            </div>
        </div>
    </div>
}
