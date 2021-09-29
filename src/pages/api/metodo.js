
const funcao = (req, res) => {
    if(req.method ==="GET") {
        res.status(200).json({
            nome: "Beto"
        })
    } else {
        res.status(200).json({
            nome: "Maria"
        })
    }
    
}

export default funcao