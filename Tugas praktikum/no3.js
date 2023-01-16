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


// end-point "/desimal" dengan method POST
app.post("/desimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let desimal = Number(req.body.desimal) // mengamil nilai lebar dari body


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        desimal: desimal,
        oktal: desimal.toString(8),
        biner: desimal.toString(2),
        hexa_desimal: desimal.toString(16)
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})