import styles from './RegisterLink.module.css'
import SubmitButton from "../../form/SubmitButton"
import { useState } from 'react'

export default function RegisterLink() {

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
        console.log(link)

        await fetch(`http://${ipMachine}/api/api_linkedlist/cadastrar.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ link })
        })
            .then((response) => response.json())
            .then((responseJson) => (
                console.log(responseJson)
            ));
    }

    return (
        <div className={styles.div}>
            <form className={styles.form} onSubmit={handleSubmit} >
                <h2>Adicionar link</h2>
                <input type="text" placeholder="Link" value={link.urlLink} name="urlLink" onChange={handleSet} />
                <input type="text" placeholder="Descrição" value={link.descriptionLink} name="descriptionLink" onChange={handleSet} />
                <SubmitButton text="Adicionar" type="submit" />
            </form>
        </div>
    )
}