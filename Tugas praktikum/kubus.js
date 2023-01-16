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
app.post("/kubus_", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi)
    let sisi = Number(req.body.sisi)
    let panjanglebar = Number(req.body.panjanglebar)
    let panjangtinggi = Number(req.body.panjangtinggi)
    let luastinggi = Number(req.body.luastinggi)
    
    let volume = sisi * sisi * sisi
    let luaspermukaan = 2 * (panjanglebar + panjangtinggi + luastinggi)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        sisi: sisi,
        lebar: lebar,
        luaspermukaan: luaspermukaan,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

