import { useState, useEffect } from 'react'
import styles from './DeleteLink.module.css'

export default function DeleteLink({ id, fecharModal }) {

    const [linkData, setLinkData] = useState({});
    const ipMachine = '192.168.0.192';

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://${ipMachine}/api/api_linkedlist/visualizar.php?id=${id}`);
            const data = await response.json();
            setLinkData(data);
        }
        fetchData();
    }, [id]);

    const [mensagem, setMensagem] = useState('');

    function handleDelete() {
        fetch(`http://${ipMachine}/api/api_linkedlist/excluir.php?id=${id}`)
            .then(response => response.json())
            .then(data => setMensagem(data.mensage));
    }

    return (
        <div>
            <ul className={styles.list}>
                <li><h3>Deletar</h3></li>
                <ul className={styles.list}>
                    <li>URL:</li>
                    <li>{linkData.urlLink}</li>
                </ul>
                <ul className={styles.list}>
                    <li>Link:</li>
                    <li>{linkData.descriptionLink}</li>
                </ul>
                <li><input className={styles.button} type="button" value="Ok" onClick={handleDelete} /></li>
                <li><input className={styles.button} type="button" value="Cancelar" onClick={fecharModal} /></li>
            </ul>
            {mensagem && <p>{mensagem}</p>}
        </div>
    )
}