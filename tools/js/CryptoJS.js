import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("1234567850814136"); // 16位
const iv = CryptoJS.enc.Utf8.parse("1234567850814136");

// aes加密
export const encrypt = function (word) {
  if (!word) return "";
  let encrypted = "";
  if (typeof word === "string") {
    const srcs = CryptoJS.enc.Utf8.parse(word);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  } else if (typeof word === "object") {
    const data = JSON.stringify(word);
    const srcs = CryptoJS.enc.Utf8.parse(data);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  }
  return encrypted.ciphertext.toString();
};

// aes解密
export const decrypt = function (word) {
  if (!word) return "";
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};
