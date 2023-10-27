const express = require("express")
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test",(req,res) =>{
    res.json({ message: "Welcome test." });
});
app.post("/api/action",(req,res) =>{
    const arr = [];
    let num = req.body.angka;
    var text = '';
    switch(req.body.btn_submit){
        case 'Generate Segitiga':
            for(let i=0; i<=num; i++){
                for(let j=1; j<=i; j++){

                }
            }
            break;
        case 'Generate Bilangan Ganjil':
            for(let i=0; i<=num; i++){
                if(i%2 != 0){
                    arr.push(i);
                    text += i+',';
                }
            }
            break;
        case 'Generate Bilangan Prima':
            for(let i=2; i<=num; i++){
                let count = 0;
                for(let j=2;j<i;j++){
                    if(i%j == 0){
                        count = 1;
                        break
                    }
                }
                if(i > 1 && count == 0){
                    arr.push(i);
                    text += i+',';
                }
            }
            break;
    }
    res.json({ message: text });
});

const PORT = 8080 || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});