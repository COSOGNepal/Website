"use client";

const SubscribeForm = () => {
    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation(); // prevents the form from being spam submitted.

        const form = e.currentTarget;
        const email = form.email.value;

        // clearing the form 
        form.email.value = ""
        form.email.placeholder = "Subscribed!";
    }

    return (
        <form
            method="POST"
            action="/api/subscribe"
            onSubmit={handleFormSubmission}
            className="subscribe mt-block border-gray-bg border-2 p-v-small max-w-[500px] w-full  flex justify-between items-center rounded-md shadow-lg  shadow-blue-shadow focus-within:border-blue"
        >
            <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full h-full p-small placeholder:text-black-light focus:border-none focus:outline-none" />
            <button className="bg-blue h-full w-[30%] p-small rounded-md text-white min-w-max">Subscribe</button>
        </form>
    )
}
export default SubscribeForm;
