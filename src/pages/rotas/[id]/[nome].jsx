import { useRouter } from "next/router";
import Link from 'next/link'

export default function CodigoENome() {
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome
    return (
        <div>
            <h1>Rotas Params: {id} e {nome}</h1>
            <Link href="/rotas" passHref={true}>
                <li>Voltar</li>
            </Link>
        </div>
    )
}