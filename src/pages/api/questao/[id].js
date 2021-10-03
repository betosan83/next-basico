export default function Questao(req, res) {
    if(req.method ==='GET') {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual sua cor preferida?',
            respostas: [
                'Branca', 'Vermelha'
            ]
        })
    } else {
        req.status(405).send()
    }
}