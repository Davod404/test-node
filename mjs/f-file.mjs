import path from "path";
const testdir = "./test/";

export default async function findFile() {
    try{
        const File = await path.basename(testdir + "escondido/encontrado.txt")
        console.log("'" + File + "'")
    } catch(err){
        console.log(err)
    } finally{
        console.log("archivo encontrado con exito")
    }
}