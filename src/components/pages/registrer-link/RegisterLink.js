import styles from './RegisterLink.module.css'
import { useState } from 'react'
import { toast } from 'react-toastify';

export default function RegisterLink({ fecharModal }) {

    const ipMachine = '192.168.0.192';

    const [link, setLink] = useState({
        urlLink: '',
        descriptionLink: ''
    })

    const handleSet = e => {
        const { name, value } = e.target;
        setLink({ ...link, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch(`http://${ipMachine}/api/api_linkedlist/cadastrar.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ link })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.error) {
                    toast.error("Erro ao Cadastrar o link!");
                } else {
                    toast.success("Link cadastrado com sucesso");
                    fecharModal();
                }
            });
    }

    return (
        <div className={styles.div}>
            <form className={styles.form} onSubmit={handleSubmit} >
                <h2>Adicionar link</h2>
                <input className={styles.inputText} type="text" placeholder="Link" value={link.urlLink} name="urlLink" onChange={handleSet} />
                <input className={styles.inputText} type="text" placeholder="Descrição" value={link.descriptionLink} name="descriptionLink" onChange={handleSet} />
                <button className={styles.button} type='submit'>Ok</button>
                <input className={styles.button} type='button' value='cancelar' onClick={fecharModal} />
            </form>
        </div>
    )
}