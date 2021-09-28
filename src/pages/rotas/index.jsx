import Link from 'next/link'

export default function rotas() {
    return (
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Beto" passHref={true}>
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref={true}>
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/Roberto" passHref={true}>
                    <li>Roberto</li>
                </Link>
                
            </ul>
        </div>
    )
}