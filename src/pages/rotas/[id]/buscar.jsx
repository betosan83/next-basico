import { useRouter } from "next/router"
import Link from 'next/link'


export default function Buscar() {
    const router = useRouter()
    const codigo = +router.query.id
    console.log(router)
    return (
        <div>
            <h1>Rotas/{codigo}/buscar</h1>
            <Link href="/rotas" passHref={true}>
                <a>
                    <button>Voltar</button>
                </a>
            </Link>
        </div>
    )
}