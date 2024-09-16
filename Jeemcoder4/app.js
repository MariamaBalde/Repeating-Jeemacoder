class Jeemacoder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: "",
            coders: [],
            editIndex: null
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSaveEdit = this.handleSaveEdit.bind(this)
    }

    handleClick() {
        const newCoders = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            email: this.state.emailInput,
            telephone: this.state.telephoneInput
        }

        this.setState({ coders: [newCoders, ...this.state.coders] })
        this.setState({
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: ""
        })
    }

    handleEdit(index) {
        const coder = this.state.coders[index]
        this.setState({
            prenomInput: coder.prenom,
            nomInput: coder.nom,
            emailInput: coder.email,
            telephoneInput: coder.telephone,
            editIndex: index
        })
    }

    handleSaveEdit() {
        const modifCoder = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            email: this.state.emailInput,
            telephone: this.state.telephoneInput
        }
        const updateCoders = [...this.state.coders]
        updateCoders[this.state.editIndex] = modifCoder
        this.setState({
            coders: updateCoders,
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: "",
            editIndex: null
        })
    }

    render() {
        return (
            <div className="col-lg-6 col-12 m-auto">
                <h3 className="text-center">Jeemacoder</h3>
                <div>
                    <div className="row">
                        <div class="col-lg-6 py-2">
                            <label class="form-label">Prenom</label>
                            <input type="email"
                                value={this.state.prenomInput}
                                onChange={(e) => {
                                    this.setState({ prenomInput: e.target.value })
                                }}
                                class="form-control" />
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
                            <label class="form-label">Email</label>
                            <input type="email"
                                value={this.state.emailInput}
                                onChange={(e) => {
                                    this.setState({ emailInput: e.target.value })
                                }}
                                class="form-control" />
                        </div>
                        <div class="col-lg-6 py-2">
                            <label class="form-label">Telephone</label>
                            <input type="text"
                                value={this.state.telephoneInput}
                                onChange={(e) => {
                                    this.setState({ telephoneInput: e.target.value })
                                }}
                                class="form-control" />
                        </div>
                    </div>
                    {
                        this.state.editIndex !== null ?
                            <button onClick={this.handleSaveEdit} className="btn btn-warning w-100">Modifier</button>: 
                            <button onClick={this.handleClick} className="btn btn-success w-100">Submit</button>
                    }
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
                                <th>Actions</th>
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