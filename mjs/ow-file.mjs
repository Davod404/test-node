import fs from "node:fs/promises";
const testdir = "./test/";

export default function owFiles() {
    try {
        fs.writeFile(testdir + "text2.txt", "El texto de este archivo fue sobreescrito")
    } catch (err) {
        console.log(err);
    } finally {
        console.log("segundo texto sobreescrito")
    }
}