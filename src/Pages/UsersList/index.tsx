import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ScrollPanel } from "primereact/scrollpanel";
import { ToastContainer } from "react-toastify";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import  { AxiosError } from 'axios';
import React, { useEffect, useState } from "react";

import apiUrl from "../../services/api";
import error from "../../utils/error";
import success from "../../utils/success";
import UsersListStyle from "./usersList.module.scss";
import { useAuth } from "../../hooks/auth";
import { useHistory } from 'react-router-dom'

import "react-toastify/dist/ReactToastify.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

interface User {
    userId: number;
    fullName: string;
    email: string;
    login: string;
    phone: string;
    roles: string; //@ts-nocheck
    city?: string | 'Não possui';
};
const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>();
    const [deleteUserDialog, setDeleteUserDialog] = useState(false);
    const { token, signOut } = useAuth();
    const history = useHistory();
    const header = { headers: {  'Authorization': `Bearer ${token}` } }

    const getUsers = async () => {
        try {
            const res = await apiUrl.get("/stonks/users", header);
            success("Usuários carregado");
            const { data: { result } } = res;
            return setUsers(result);
        }  catch (err: Error | AxiosError | any) {
            if (err.response.status == 403) {
                await signOut();
                error('Token has expired, please logon again');
                history.push('/login');
            } else if (err.request) {
                console.log(err.request);
                error(`Error ${err.request}`);
            } else {
                // Something happened in setting up the request that triggered an Error
                error(`Error ${err.message}`);
            };
        };
    };

    useEffect(() => {
        getUsers()
    }, []);

    const addUser = () => {
        history.push('/users/save');
    }
    const editUser = (user: User) => {
        console.log(user)
        history.push(`/users/save/${user.userId}`);
    }
    const deleteUser = (user: User) => {
        setUser(user)
        setDeleteUserDialog(true);
    }
    const hideDeleteUserDialog = () => {
        setDeleteUserDialog(false);
    }
    const confirmDeleteUser = async () => {
        if(user){
            try{
                await apiUrl.delete(`stonks/users/${user.userId}`,header)
                setDeleteUserDialog(false); 
                success(`Usuario ${user.fullName} deletado com sucesso`)
            } catch (err: Error | AxiosError | any) {
                if(err.response){
                    if (err.response.status === 403) {
                        await signOut();
                        error('Token has expired, please logon again');
                        history.push('/login');
                    } else if (err.request) {
                        console.log(err.request);
                        error(`Error ${err.request}`);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        error(`Error ${err.message}`);
                    };
                }
        };
        }
    }
    const actionBodyTemplate = (rowData: any) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editUser(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => deleteUser(rowData)} />
            </React.Fragment>
        );
    }
  const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteUserDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={confirmDeleteUser} />
        </React.Fragment>
    );
    return (
        <section className={UsersListStyle.userContainer}>
            <ToastContainer />
            <p className={UsersListStyle.title}>Lista de Usuários</p>
            
            <Button label="Novo Usuario" icon="pi pi-plus" id={UsersListStyle.btn} className="p-button p-mr-2"  onClick={() => addUser()} />

            <ScrollPanel className={UsersListStyle.custom}>
                <DataTable value={users} paginator paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={6} className={UsersListStyle.table}>
                    <Column headerStyle={{ width: '3rem' }} />
                    <Column style={{textAlign: 'center'}} field="fullName" header="Nome completo" sortable />
                    <Column style={{textAlign: 'center'}} field="email" header="Email" sortable />
                    <Column style={{textAlign: 'center'}} field="login" header="Usuário" sortable />
                    <Column style={{textAlign: 'center'}} field="phone" header="Telefone" sortable />
                    <Column style={{textAlign: 'center'}} field="city" header="Município relacionado"  sortable />
                    <Column style={{textAlign: 'center'}} field="roles" header="Tipo de usuário" sortable />
                    <Column style={{textAlign: 'right'}} header="Action" body={actionBodyTemplate} />
                </DataTable>
            </ScrollPanel>

            <Dialog visible={deleteUserDialog} style={{ width: '450px' }} header="Delete confirmation" modal footer={deleteProductDialogFooter} onHide={hideDeleteUserDialog}>
                <div className="confirmation-content" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                    {user && <span >Are you sure you want to delete <b>{user.fullName}</b>?</span>}
                </div>
            </Dialog>
        </section>
    );

}

export default UserList;