import fs from "node:fs/promises";
const testdir = "./test/";

export default async function copyFile() {
    try {
        await fs.copyFile(testdir + "text3.txt",testdir + "test3-2.txt")
    } catch (err) {
        console.log(err);
    } finally{
        console.log("archivo copiado con exito")
    }
}