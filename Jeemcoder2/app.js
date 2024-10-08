class Jeemacoder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: "",
            coders: [],
            editIndex:null
        }
        this.handleClick = this.handleClick.bind(this),
        this.handleEdit=this.handleEdit.bind(this),
        this.handleSaveEdit=this.handleSaveEdit.bind(this)

    }

    handleClick() {
        const newCoder = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            email: this.state.emailInput,
            telephone: this.state.telephoneInput
        }
        this.setState({ coders: [newCoder, ...this.state.coders] })
        this.setState({
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: "",
        })
    }

    handleEdit(index){
        const coder=this.state.coders[index]
        this.setState({
            prenomInput:coder.prenom,
            nomInput:coder.nom,
            emailInput:coder.email,
            telephoneInput:coder.telephone,
            editIndex:index
        })
    }

    handleSaveEdit(){
      const modifCoder={
        prenom:this.state.prenomInput,
        nom:this.state.nomInput,
        email:this.state.nomInput,
        telephone:this.state.telephoneInput
      }
            const updatedCoders=[...this.state.coders];
            updatedCoders[this.state.editIndex]=modifCoder
            this.setState({
                coders:updatedCoders,
                prenomInput:"",
                nomInput:"",
                emailInput:"",
                telephoneInput:"",
                editIndex:null
            })
        }

    render() {
        return (
            <div className="container col-lg-6 m-auto col-12">
                <h5 className="text-center mt-2">Jeemacoder</h5>
                <div className="">
                    <div className="row">
                        <div class="col-lg-6 py-2">
                            <label className="form-label">Prénom</label>
                            <input type="text"
                                value={this.state.prenomInput}
                                onChange={(e) => {
                                    this.setState({ prenomInput: e.target.value })
                                }}
                                className="form-control" />
                        </div>
                        <div class="col-lg-6 py-2">
                            <label className="form-label">Nom</label>
                            <input type="text"
                                value={this.state.nomInput}
                                onChange={(e) => {
                                    this.setState({ nomInput: e.target.value })
                                }}
                                className="form-control" />
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
                            <label className="form-label">Telephone</label>
                            <input type="number"
                                value={this.state.telephoneInput}
                                onChange={(e) => {
                                    this.setState({ telephoneInput: e.target.value })
                                }}
                                className="form-control" />
                        </div>
                    </div>
                    <div>
                        {this.state.editIndex!==null ?
                            <button 
                            onClick={this.handleSaveEdit} 
                            class="btn btn-success w-100">Enregistrer
                            </button> : 
                            <button onClick={this.handleClick} 
                            class="btn btn-success w-100">Submit
                            </button>
                        }
                    </div>
                </div>
                <div className="mt-5 container">
                    <h3 className="text-center">Coders</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Prénom</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.coders.map((coder,index) => {
                                    return <tr>
                                        <td>{coder.prenom}</td>
                                        <td>{coder.nom}</td>
                                        <td>{coder.email}</td>
                                        <td>{coder.telephone}</td>
                                        <td>
                                            <button onClick={()=>this.handleEdit(index)} className="btn btn-warning">
                                                Modifier
                                            </button>
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