import React, { useState } from "react";
import Sidebar from "../../components/dashbord/sidebar";
import Users from "../../components/dashbord/users";
import Movies from "../../components/dashbord/movies";
import NavBar from "../../components/dashbord/navBar";
import AddForm from "../../components/dashbord/addUserForm";
import EditForm from "../../components/dashbord/editUserForm";
import DataBaseMovies from "../../components/dashbord/databaseMovies"
import 'bootstrap/dist/css/bootstrap.css'

function AdminPage() {
    // État pour suivre la section actuellement affichée
    const [activeSection, setActiveSection] = useState("");

    const [showForm, setShowForm] = useState(false);

    const [activeForm, setActiveForm] = useState("")


    // Fonction pour mettre à jour la section active
    const handleSectionChange = (section: string) => {
        setActiveSection(section);
    };

    // Fonction pour afficher le formulaire d'ajout d'utilisateur
    const handleAddUserForm = () => {
        setShowForm(true);
    };

    // Fonction pour masquer le formulaire
    const CancelAddUserForm = () => {
        setShowForm(false);
    };

    // Fonction pour mettre à jour le formulaire actif
    const handleFormChange = (section: string) => {
        setActiveForm(section);
    };



    let contentToDisplay;

    if (activeSection === "Users") {
        if (!showForm) {
            contentToDisplay = <Users onUserClick={handleAddUserForm} onFormChange={handleFormChange}/>;
        }
        else if (showForm && activeForm === "Add") {
            // Si showAddUserForm est vrai, affichez le formulaire d'ajout d'utilisateur
            contentToDisplay = <AddForm onUserClick={CancelAddUserForm} />
        } 
        else if (showForm && activeForm === "Edit"){
            // Sinon, affichez la liste des utilisateurs
            contentToDisplay = <EditForm onUserClick={CancelAddUserForm} />;
        }
    }
    else if (activeSection === "Movies") {
        contentToDisplay = <Movies />;
    }
    else if ( activeSection === "DatabaseMovies"){
        contentToDisplay = <DataBaseMovies />;
    }
    console.log(contentToDisplay)

    return (
        <>
            <NavBar />
            <div className="row">
                <Sidebar onSectionChange={handleSectionChange} />
                <div className="col-10">
                    {/* If route = user ou movie */}
                    {contentToDisplay}
                </div>
            </div>
        </>

    )
}

export default AdminPage


