const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
 
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
 
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())
// endpoint "/test" dengan method GET
app.post("/bmi", (req,res) => {

    let beratBadan = Number(req.body.beratBadan)

    let tinggiBadan = Number(req.body.tinggiBadan)

    let bmi = beratBadan / (tinggiBadan * tinggiBadan)
    
   

    let status = ``
        if (bmi < 18.5) {
            status = `kurang gizi`
        } else if (bmi > 18.5 && bmi < 24.9){
            status = `Normal(ideal)`
        }else if (bmi > 25.0 && bmi < 29.9){
            status = `Gemuk`
        }else if (bmi > 30){
            status = `Obesitas`
        }

        let response = {
            beratBadan: beratBadan,
            tinggiBadan: tinggiBadan,
            bmi: bmi,
        }
    
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
