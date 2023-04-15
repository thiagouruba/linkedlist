import Input from '../../form/Input'
import SubmitButton from '../../form/SubmitButton'
import styles from './Register.module.css'

export default function Register() {
    return (
        <div className={styles.div}>
            <form className={styles.form}>
                <h2>Cadastro</h2>
                <Input type="text" placeholder="nome" />
                <Input type="email" placeholder="e-mail" />
                <Input type="password" placeholder="senha" />
                <Input type="password" placeholder="confirme a senha" />
                <SubmitButton text="Cadastrar" />
            </form>
        </div>
    )
}