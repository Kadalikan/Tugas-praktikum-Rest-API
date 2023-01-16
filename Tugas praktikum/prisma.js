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





// end-point "/bujur_sangkar" dengan method POST
app.post("/prisma_", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi)
    let alas = Number(req.body.alas)
    let tinggiprisma = Number(req.body.tinggiprisma) // mengambil nilai panjang dari body
    let luasalas = Number(req.body.luasalas) // mengambil nilai panjang dari body
    let luastutup = Number(req.body.luastutup) // mengamil nilai lebar dari body
    let luasselimut = Number(req.body.luasselimut) // mengamil nilai lebar dari body
   
    
    
    let volume = (1/2 * alas * tinggi) * tinggiprisma
    let luaspermukaan = luasalas + luastutup + luasselimut
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        alas: alas,
        tinggiprisma: tinggiprisma,
        luasalas: luasalas,
        luastutup: luastutup,
        luasselimut: luasselimut,
        volume: volume,
        luaspermukaan:luaspermukaan,
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

