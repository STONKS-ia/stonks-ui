import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ScrollPanel } from "primereact/scrollpanel";
import { Tooltip } from "primereact/tooltip";
import { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import apiUrl from "../../services/api";
import error from "../../utils/error";
import success from "../../utils/success";
import UsersListStyle from "./usersList.module.scss";
import { useAuth } from "../../hooks/auth";

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Link } from "react-router-dom";

interface User {
    userId: number;
    fullName: string;
    email: string;
    login: string;
    phone: string;
    roles: string;
    city?: string | 'Não possui';
};

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    // let users: [];
    const { token, signOut } = useAuth();

    const getUsers = async () => {
        try {
            const options = { headers: { 'Authorization': `Bearer ${token}` } }
            const res = await apiUrl.get("/stonks/users", options);
            const { data: { result } } = res;
            // console.log(result);
            success("Usuários carregado");
            // users = result;
            // setUsers(result);
            return setUsers(result);
        } catch (err) {
            console.error(err);
            error("Usuários não carregado");
            return [null, err];
        }
    };

    useEffect(() => {
        getUsers()
    }, []);

    const cols = [
        { field: 'fullName', header: 'Nome completo' },
        { field: 'email', header: 'Email' },
        { field: 'login', header: 'Usuário' },
        { field: 'phone', header: 'Telefone' },
        { field: 'city', header: 'Município relacionado' },
        { field: 'roles', header: 'Tipo de usuário' }
    ];

    
    return (
        <section className={UsersListStyle.userContainer}>
            {<p className={UsersListStyle.title}>Usuários</p>}
            {/* <Link to={"/addUser"} className={UsersListStyle.addUsuario}>
                Adicionar Usuário
            </Link> */}
            <ScrollPanel className={UsersListStyle.custom}>
                <Tooltip target=".export-buttons>button" position="bottom" />
                <DataTable value={users} paginator paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={6} className={UsersListStyle.table}>
                    {cols.map((col, index) => <Column key={index} field={col.field} header={col.header}/>)}
                </DataTable>
            </ScrollPanel>
        </section>
    );

}

export default UserList;