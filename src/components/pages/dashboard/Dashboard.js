import styles from './Dashboard.module.css'
import Button from '../../layout/button/Button'
import React, { useState, useEffect } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import EditLink from '../edit-link/EditLink';
import DeleteLink from '../delete-link/DeleteLink';
import RegisterLink from '../registrer-link/RegisterLink';

Modal.setAppElement('#root');

export default function Dashboard() {

    const [links, setLinks] = useState([]);
    const [id, setId] = useState([]);
    const ipMachine = '192.168.0.192';

    useEffect(() => {
        fetch(`http://${ipMachine}/api/api_linkedlist/api_rest/read`)
            .then(response => response.json())
            .then(data => setLinks(data.links))
    }, [links]);

    const [modalEditAberto, setModalEditAberto] = useState(false);
    const [modalDeleteAberto, setModalDeleteAberto] = useState(false);
    const [modalRegisterAberto, setModalRegisterAberto] = useState(false);

    function abrirEditModal(id) {
        setId(id);
        setModalEditAberto(true);
    }

    function fecharEditModal() {
        setModalEditAberto(false);
    }

    function abrirDeleteModal(id) {
        setId(id);
        setModalDeleteAberto(true);
    }

    function fecharDeleteModal() {
        setModalDeleteAberto(false);
    }
    function abrirRegisterModal() {
        setModalRegisterAberto(true);
    }

    function fecharRegisterModal() {
        setModalRegisterAberto(false);
    }

    return (
        <div className={styles.div}>
            <h2 className={styles.h2}>Painel de Controle</h2>
            <ul className={styles.link}>
                <li><h3>Links</h3></li>
                <li><Button text="Adicionar Link" eventClick={abrirRegisterModal} /></li>
            </ul>
            <div>
                {links.map(link => (
                    <ul className={styles.list} key={link.idLink}>
                        <ul className={styles.wrap}>
                            <li>{link.urlLink}</li>
                            <li>{link.descriptionLink}</li>
                        </ul>
                        <ul className={styles.icon}>
                            <li><FaEdit onClick={() => abrirEditModal(link.idLink)} /></li>
                            <li><FaRegTrashAlt onClick={() => abrirDeleteModal(link.idLink)} /></li>
                        </ul>
                    </ul>
                ))}
            </div>
            <div>
                <Modal className={styles.content} isOpen={modalEditAberto} onRequestClose={fecharEditModal} appElement={document.getElementById('root')}>
                    <EditLink id={id} fecharModal={fecharEditModal} />
                </Modal>
                <Modal className={styles.content} isOpen={modalDeleteAberto} onRequestClose={fecharDeleteModal} appElement={document.getElementById('root')}>
                    <DeleteLink id={id} fecharModal={fecharDeleteModal} />
                </Modal>
                <Modal className={styles.content} isOpen={modalRegisterAberto} onRequestClose={fecharRegisterModal} appElement={document.getElementById('root')}>
                    <RegisterLink fecharModal={fecharRegisterModal} />
                </Modal>
            </div>
        </div>
    )
}