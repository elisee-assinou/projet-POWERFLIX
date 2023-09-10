import React from 'react';

type HandleEditFormProps = {
    onUserClick: () => void;
};



function editForm({ onUserClick, thisUserInfo }: HandleEditFormProps) {


    console.log(thisUserInfo)

    const updateUser = async (event: any) => {
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
                const response = await axios.put(`http://localhost:5000/user/${thisUserInfo._id}`, formData);
                //alert(response.data)
                console.log(response)
                if (response.status === 200) {
                    alert(response.data.success)

                    setTimeout(
                        (
                            window.location.href = "/admin"
                        ), 2000
                    )
                }


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

            <h3>Edit User</h3>
            <form className='mt-3' onSubmit={updateUser}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername" placeholder={thisUserInfo.name} name='name' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder={thisUserInfo.email} name='email' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Admin</label>
                    <select className="form-control" name='isAdmin'>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">New Password Confirmation</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" name='password_conf' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={() => onUserClick()} className="btn btn-danger m-2">Cancel</button>

            </form>
        </>
    );
}
export default editForm