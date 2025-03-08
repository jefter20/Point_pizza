import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.scss';
import logoImg from '/public/logo.svg';

export default function Signup() {
    return(
        <>
            <div className={ styles.containerCenter } >
                <Image
                src={ logoImg }
                alt="Logo da pizzaria"
                />

                <section className={ styles.login }>
                    <h1>Cadastre-se</h1>
                    <form>
                        <input
                        type="text"
                        required
                        name="name"
                        placeholder="Digite seu nome..."
                        className={ styles.input }
                        />
                        <input
                        type="email"
                        required
                        name="email"
                        placeholder="Digite seu email..."
                        className={ styles.input }
                        />
                        <input
                        type="password"
                        required
                        name="password"
                        placeholder="Crie uma senha"
                        className={ styles.input }
                        />
                        <input
                        type="password"
                        required
                        name="password"
                        placeholder="Repita sua senha"
                        className={ styles.input }
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>

                    <Link href="/" className={ styles.text }>
                        Já possui uma conta? Faça o login!
                    </Link>

                </section>
            </div>
        </>
    )
}