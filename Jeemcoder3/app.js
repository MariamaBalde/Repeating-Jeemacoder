class Jeemacoder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telelphoneInput: "",
            coders: [],
            // isEditing: false,
            index: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSaveEdit = this.handleSaveEdit.bind(this)
    }
    // handleSubmit ajoute un nouveau développeur.
    handleSubmit() {
        // on creer Un objet newCoder pour recuperer les valeurs actuelles des champs du formulaire (prénom, nom, email, téléphone).
        const newCoder = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            email: this.state.emailInput,
            telephone: this.state.telelphoneInput
        }
        // setState est utilisée pour ajouter l'objet au tableau coders,
        //  tout en gardant les anciens éléments du tableau grâce à la syntaxe ...this.state.coders.
        this.setState({ coders: [newCoder, ...this.state.coders] })
        // Ensuite, les champs du formulaire sont réinitialisés à des chaînes vides
        this.setState({
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telelphoneInput: ""
        })
    }

    // charge les informations d'un développeur existant pour les modifier.
    handleEdit(index) {
        // On récupère les données du coder à travers l'index donné
        const coder = this.state.coders[index]
        // Les champs du formulaire sont mis à jour avec les valeurs du "coder" sélectionné.
        this.setState({
            prenomInput: coder.prenom,
            nomInput: coder.nom,
            emailInput: coder.email,
            telelphoneInput: coder.telephone,
            // isEditing: true,
            //index de l'état  permet d'enregistrer l'index de l'élément en cours de modification
            index: index
        })
    }

    // Cette méthode est utilisée pour enregistrer les modifications apportées à un "coder" après l'édition
    handleSaveEdit() {
        /*   On veut recuperer les donnés modifier dans le formulaire
        On enregistre les donnes dans leurs index initiale */

        // Elle crée un objet modifCoder contenant les nouvelles informations issues du formulaire.
        const modifCoder = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            email: this.state.emailInput,
            telephone: this.state.telelphoneInput
        }
        // Elle crée une copie de la liste actuelle des développeurs (updateCoders) à l’aide de l’opérateur de décomposition (...).
        const updateCoders = [...this.state.coders]
        // Ensuite, elle remplace l'élément à l'index stocké dans l'état (this.state.index) par l'objet modifCoder.
        updateCoders[this.state.index] = modifCoder
        this.setState({
            coders: updateCoders,
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telelphoneInput: "",
            // remet index à null pour sortir du mode d’édition.
            index:null
        })
    }

    render() {
        return (
            <div className="container col-lg-6 m-auto col-12">
                <h5 className="text-center mt-2">Jeemacoder</h5>
                <div className="">
                    <div className="row">
                        <div class="col-lg-6 py-2">
                            <label className="form-label">Prenom</label>
                            <input type="text"
                                value={this.state.prenomInput}
                                onChange={(e) => {
                                    this.setState({ prenomInput: e.target.value })
                                }}
                                className="form-control" />
                        </div>
                        <div class="col-lg-6 py-2">
                            <label class="form-label">Nom</label>
                            <input type="text"
                                value={this.state.nomInput}
                                onChange={(e) => {
                                    this.setState({ nomInput: e.target.value })
                                }}
                                class="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-lg-6 py-2">
                            <label className="form-label">Email</label>
                            <input type="email"
                                value={this.state.emailInput}
                                onChange={(e) => {
                                    this.setState({ emailInput: e.target.value })
                                }}
                                className="form-control" />
                        </div>
                        <div class="col-lg-6 py-2">
                            <label class="form-label">Telephone</label>
                            <input type="number"
                                value={this.state.telelphoneInput}
                                onChange={(e) => {
                                    this.setState({ telelphoneInput: e.target.value })
                                }}
                                class="form-control" />
                        </div>
                    </div>
                    <div>
                        {
                            this.state.index !==null ?
                                <button onClick={this.handleSaveEdit} className="btn btn-warning w-100">Modifier</button> :
                                <button onClick={this.handleSubmit} className="btn btn-success w-100">Submit</button>
                        }
                    </div>
                </div>
                <div className="mt-5 container">
                    <h3 className="text-center">Coders</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Prenom</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telephone</th>
                                <th scope>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.coders.map((coder, index) => {
                                    return <tr>
                                        <td>{coder.prenom}</td>
                                        <td>{coder.nom}</td>
                                        <td>{coder.email}</td>
                                        <td>{coder.telephone}</td>
                                        <td>
                                            <button onClick={() => this.handleEdit(index)} className="btn btn-warning">Modifier</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Jeemacoder />, document.getElementById("root"))