import SubmitButton from '../../form/SubmitButton';
import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.div}>
            <form className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="e-mail" />
                <input type="password" placeholder="senha" />
                <SubmitButton text="Entrar" />
            </form>
        </div>
    )
}