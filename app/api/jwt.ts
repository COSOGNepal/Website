import crypto from "crypto";

export const validateJWT = (token: string): boolean | Error => {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) throw new Error("JWT_SECRET not found in the environment variables");

    const providedSignature = token.split(".")[2];  // since jwt has header.payload.signature pattern 
    const generatedSignature = crypto.createHmac('sha256', JWT_SECRET)
        .update(token.split(".")[0] + "." + token.split(".")[1])
        .digest('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

    return providedSignature === generatedSignature;
}

export const createJWT = (userData: any): string | Error => {
    try {
        const b64urlEncodedHeader = toBase64Url({
            "alg": "HS256",
            "typ": "JWT"
        });
        const b64urlEncodedUserData = toBase64Url(userData);

        const JWT_SECRET = process.env.JWT_SECRET;

        if (!JWT_SECRET) throw new Error("JWT_SECRET not found in the environment variables");

        const signature = crypto.createHmac('sha256', JWT_SECRET)
            .update(b64urlEncodedHeader + "." + b64urlEncodedUserData)
            .digest('base64')
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');

        return b64urlEncodedHeader + "." + b64urlEncodedUserData + "." + signature;
    } catch (e) {
        throw new Error("Error while creating jwt " + e);
    }
}


const toBase64Url = (obj: any): string => {
    const buffer = Buffer.from(JSON.stringify(obj));
    return buffer.toString('base64url')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

