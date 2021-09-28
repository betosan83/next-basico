import { useRouter } from "next/router"
import Link from 'next/link'


export default function buscar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const codigo = +router.query.id
    console.log(router)
    return (
        <div>
            <h1>Rotas/{codigo}/buscar</h1>
            <Link href="/rotas" passHref={true}>
                <li>Voltar</li>
            </Link>
        </div>
    )
}