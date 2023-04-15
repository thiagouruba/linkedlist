import styles from './EditLink.module.css';
import { useEffect, useState } from "react";

export default function EditLink({ id, fecharModal }) {

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

    const handleInputChange = e => {
        const { name, value } = e.target;
        setLinkData({ ...linkData, [name]: value });
    };

    const [success, setSuccess] = useState(0);
    const [msgSuccess, setMsgSuccess] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        await fetch(`http://${ipMachine}/api/api_linkedlist/alterar.php?${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(linkData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error) {
                    setMsgSuccess('Erro ao editar');
                    setSuccess(false);
                } else {
                    setMsgSuccess('Editado com sucesso!');
                    setSuccess(true);
                }
            })
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Editando </h2>
                <label>URL:</label>
                <input type="text" value={linkData.urlLink || ''} name="urlLink" onChange={handleInputChange} />
                <label>Descrição:</label>
                <input type="text" value={linkData.descriptionLink || ''} name="descriptionLink" onChange={handleInputChange} />
                <button>Submit</button>
                <input type='button' value='fechar' onClick={fecharModal} />
            </form>
            { success ? <div className={styles.msgSuccess}>{msgSuccess}</div> : <div className={styles.msgError}>{msgSuccess}</div> }
        </div>
    )
}