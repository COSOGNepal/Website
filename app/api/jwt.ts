export const validateJWT = async (token: string) => { }

export const createJWT = async (userData: Tuser): string => {
    try {

        return "";
    } catch (e) {
        throw new Error("Error while creating jwt " + e);
    }
}


const toBase64 = (obj): string => {
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
const replaceSpecialchars = (base64Str: string): string => {
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
