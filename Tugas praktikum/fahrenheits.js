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
app.post("/fahrenheits", (req,res) => {

    let fahrenheit = Number(req.body.fahrenheit)

    let celcius = (fahrenheit - 32) * 5 / 9

    let reamur = (fahrenheit - 32) * 4/ 9
    
    let kelvin = (fahrenheit - 32) * 5 / 9

    let response = {
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin:kelvin
    }
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
