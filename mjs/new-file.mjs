import fs from "node:fs/promises";
const testdir = "./test/";

export default async function createFile() {
    try{
        await fs.writeFile(testdir + "text4.txt","creado con writeFile")
    } catch(err){
        console.log(err)
    } finally{
        console.log("archivo creado con exito")
    }
}