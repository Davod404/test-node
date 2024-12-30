import fs from "node:fs/promises";
const testdir = "./test/";

export default async function fileNames() {
    try {
      await fs.readdir(testdir).then((files) => {
        console.log(files)
    })
    } catch (err) {
      console.log(err);
    } finally{
        console.log("archivos listados con exito")
    }
}