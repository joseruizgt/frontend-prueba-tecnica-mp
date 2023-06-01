import { AES, enc } from 'crypto-js';

const privateKey = process.env.REACT_APP_CLAVE_ENCRIPT;

const encryptId = (message = "") => {
    let chain = AES.encrypt(message + '', privateKey).toString();
    chain = chain.replace(/\//g, 'MP');
    return chain;
}

const decryptId = (message = "") => {
    try {
        var bytes = AES.decrypt(message.replace(/MP/g, '/'), privateKey);
        var original = parseInt(bytes.toString(enc.Utf8));
        if (isNaN(original)) {
            return undefined
        } else {
            return original
        }
    } catch (error) {
        return undefined
    }
}

export { encryptId, decryptId }