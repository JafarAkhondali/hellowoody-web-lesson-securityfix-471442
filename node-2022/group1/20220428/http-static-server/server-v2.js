import http from "http"
import {URL,fileURLToPath} from "url"
import { dirname,join } from "path";
import fs from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = __dirname
http.createServer((req,resp) => {
    const u = new URL(req.url,"http://localhost:3000")
    const filename = join(root,"assets",u.pathname)
    // xxxx/assets/files
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    fs.stat(filename,(err,stat) => {
        if(err) {
            if(err.code === "ENOENT"){
                resp.statusCode = 404
                resp.end("页面找不到")
            }else{
                resp.statusCode = 500
                resp.end("服务器错误")
            }
            return
        }
        console.log("stat.isFile():",stat.isFile())
        console.log("stat.isDirectory():",stat.isDirectory())
        if(stat.isFile()){
            resp.setHeader("Content-Length",stat.size) // 文件的总字节数
            const stream = fs.createReadStream(filename)
            stream.pipe(resp)
                .on("error",e => {
                    resp.statusCode = 500
                    resp.end(100000,"读取内容错误")
                })
        }else{
            resp.end("文件夹不能读取")
        }
        
    })


}).listen(3000,() => console.log("static server is running ... "))
.on("error",e => console.log(e))