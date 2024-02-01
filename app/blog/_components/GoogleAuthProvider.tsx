"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuthBtn from './GoogleAuthBtn';

const GoogleAuthProvider = () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    if (!CLIENT_ID)
        return <h1>No client id found</h1>


    return (
        <GoogleOAuthProvider clientId={CLIENT_ID} >
            <GoogleAuthBtn />
        </GoogleOAuthProvider>
    )
}
export default GoogleAuthProvider;
