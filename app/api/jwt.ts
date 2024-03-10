export const validateJWT = async (token: string) => {


}

export const createJWT = async (userData: Tuser): Promise<string> => {
    try {
        const b64urlEncodedUserData = replaceSpecialChars(toBase64(userData));

        const rawHeader = {
            "alg": "sha256",
            "type": "JWT"
        }
        const b64urlEncodedHeader = replaceSpecialChars(toBase64(rawHeader))

        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) throw new Error("JWT_SECRET not found in the environment variables");

        // sign the header and the payload using crypto library and the secret key 
        const signature = await crypto.subtle.sign(rawHeader.alg,
            JWT_SECRET,
            b64urlEncodedHeader + "." + b64urlEncodedUserData);
        return b64urlEncodedHeader + "." + b64urlEncodedUserData + "."
            ;

    } catch (e) {
        throw new Error("Error while creating jwt " + e);
    }
}


const toBase64 = (obj: any): string => {
    const string = JSON.stringify(obj);
    return Buffer.from(string).toString('base64');
    // TODO: learn why the buffer is used here write a blog about jwt and how to do it manually
}

// replaces special characters:
// = for space
// + for -
// and / for _
// since they have different meaning in a url 
//
const replaceSpecialChars = (base64Str: string): string => {
    return base64Str.replace(/[=+/]/g, charToBeReplaced => {
        switch (charToBeReplaced) {
            case "=":
                return ' ';
            case "+":
                return '-';
            case "/":
                return '_';
            default:
                return charToBeReplaced
        }
    })
}

// readds the replaced special Url sensitive chars replaced by replaceSpecialChars
const readdReplacedChars = (base64Str: string): string => {
    return base64Str.replace(/[ -_]/g, charToReadd => {
        switch (charToReadd) {
            case " ":
                return "=";
            case "-":
                return "+";
            case "_":
                return "/"
            default:
                return charToReadd;
        }
    })
}
