import fs from "node:fs/promises";
const testdir = "./test/";

export default async function editFiles() {
    try {
        await fs.appendFile(testdir + "text1.txt","\n añadido con writeFile")
    } catch (err) {
      console.log(err);
    } finally{
        console.log("archivo editado con exito")
    }
}