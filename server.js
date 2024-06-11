import Express from 'express';
import Path from 'path';

const app = Express()
const dir_root=Path.resolve()
const dir_front ="/frontend/build"

app.use(Express.static(dir_front))
app.use(Express.json())
app.use(Express.urlencoded({}))

app.listen('8005',function(){
    console.log("Server init");
})

app.get('/',function(req, res){
    console.log(dir_root);
    res.sendFile(dir_root+"/"+ dir_front+"/index.html")
})


app.get('/consult_page',function(req, res){
    res.sendFile(dir_root+"/"+ dir_front+"/index.html")
})

app.get('/contact_page',function(req, res){
    res.sendFile(dir_root+"/"+ dir_front+"/index.html")
})


app.post('/register_user',function(req, res){
    console.log(req.body);
    res.redirect("/")
})