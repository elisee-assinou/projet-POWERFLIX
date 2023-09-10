import { Icon } from '@iconify/react';
import React from 'react';
import './customButton.css'


type UsersProps = {
    onUserClick: () => void; // Pour gérer le clic sur le bouton "Add User" ou edit
    onFormChange: (section: string) => void; // Pour gérer quel formulaire afficher

};


function Users({ onUserClick, onFormChange }: UsersProps) {

    return (
        <>

            <button onClick={() => [onUserClick(), onFormChange("Add")]} type="button" className="btn btn-outline-dark mt-2">Add a User</button>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Admin</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>mark@gmail.com</td>
                        <td>Yes</td>
                        <td>
                            <a className='custom-btn'><Icon icon="octicon:trash-16" color="red" width={20} /></a>
                            <a onClick={() => [onUserClick(), onFormChange("Edit")]} className='custom-btn m-2'><Icon icon="akar-icons:edit" color="green" width={20} /></a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>jacob@gmail.com</td>
                        <td>No</td>
                        <td>
                            <a className='custom-btn'><Icon icon="octicon:trash-16" color="red" width={20} /></a>
                            <a className='custom-btn m-2'><Icon icon="akar-icons:edit" color="green" width={20} /></a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>larry@gmail.com</td>
                        <td>No</td>
                        <td>
                            <a className='custom-btn'><Icon icon="octicon:trash-16" color="red" width={20} /></a>
                            <a className='custom-btn m-2'><Icon icon="akar-icons:edit" color="green" width={20} /></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Users;
