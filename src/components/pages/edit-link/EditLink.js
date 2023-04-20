import styles from './EditLink.module.css';
import { useEffect, useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    toast.error("Erro ao editar!");
                } else {
                    toast.success("Editado com sucesso!");
                    fecharModal();
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
                <button className={styles.button}>Ok</button>
                <input className={styles.button} type='button' value='cancelar' onClick={fecharModal} />
            </form>
        </div>
    )
}