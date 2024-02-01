"use client"
import { useGoogleLogin } from "@react-oauth/google";

const GoogleAuthBtn = () => {
    const handleGoogleAuth =
        useGoogleLogin({
            onSuccess: async (response) => {
                const accessToken = response.access_token;

                // sending the acessToekn to backend 
                const userData = await fetch("/api/users", {
                    method: "POST",
                    body: JSON.stringify({ accessToken: accessToken })
                }).then(res => res.json())

                console.log(userData)


                // TODO:
                // fetching user data in the backend 
                // generating a jwt token and sending it here
                // storing that token in the cookies and implementing the refress token.
                // creating a user context 
                // storing new user data in the context as well.
                //

            }
        })
    return (
        <button onClick={(e) => {
            e.stopPropagation();
            handleGoogleAuth();
        }}
        >Continue with google</button>
    )
}
export default GoogleAuthBtn;
