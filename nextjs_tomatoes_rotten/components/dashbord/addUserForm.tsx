import React from 'react';
import axios from 'axios'
import './customButton.css'

type HandleAddFormProps = {
    onUserClick: () => void;
};

function addForm({ onUserClick }: HandleAddFormProps) {

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const target = event.target;
        const password = target.password.value;
        const password_conf = target.password_conf.value;

        const formData = {
            name: target.name.value,
            email: target.email.value,
            password: target.password.value,
            isAdmin: target.isAdmin.value
        }

        console.log(formData)


        try {

            if (password === password_conf) {
                const response = await axios.post('http://192.168.5.176:5000/user', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                alert(response.data.success)

                setTimeout(
                    (
                        window.location.href = "/admin"
                    ), 2000
                )

            }
            else {
                alert("Passwords don't match")
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="row d-flex justify-content-center form-container">
                <h3>Add a New User</h3>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="username" name="name" placeholder='User name' required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" name="email" placeholder='Email address' required />
                    </div>
                    <div className="mb-3">
                        <select className="form-control" id='isAdmin' required>
                            <option value="false">-- Is Admin ? --</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" placeholder='Password' name="password" required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password_conf" placeholder='Password Confirmation' name="password_conf" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={() => onUserClick()} className="btn btn-danger m-2">Cancel</button>

                </form>
            </div>

        </>
    );
}
export default addForm