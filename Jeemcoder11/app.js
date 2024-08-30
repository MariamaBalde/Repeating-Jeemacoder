class Jeemacoder extends React.Component {
    constructor(props) {
        super(props)
           this.state={
            prenomInput:"",
            nomInput:"",
            emailInput:"",
            telephoneInput:"",
            coders:[]
           }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const newCoder={
            prenom:this.state.prenomInput,
            nom:this.state.nomInput,
            email:this.state.emailInput,
            telephone:this.state.telephoneInput
        }
        this.setState({coders:[newCoder,...this.state.coders]})
        this.setState({
            prenomInput:"",
            nomInput:"",
            emailInput:"",
            telephoneInput:""
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
                            <input type="text"
                            value={this.state.prenomInput}
                            onChange={(e)=>{
                                this.setState({prenomInput:e.target.value})
                            }}
                                class="form-control" />
                        </div>
                        <div class="col-lg-6 py-2">
                            <label class="form-label">Nom</label>
                            <input type="text"
                            value={this.state.nomInput}
                            onChange={(e)=>{
                                this.setState({nomInput:e.target.value})
                            }}
                                class="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-lg-6 py-2">
                            <label class="form-label">Email</label>
                            <input type="email"
                            value={this.state.emailInput}
                            onChange={(e)=>{
                                this.setState({emailInput:e.target.value})
                            }}
                                class="form-control" />
                        </div>
                        <div class="col-lg-6 py-2">
                            <label class="form-label">Telephone</label>
                            <input type="number"
                            value={this.state.telephoneInput}
                            onChange={(e)=>{
                                this.setState({telephoneInput:e.target.value})
                            }}
                                class="form-control" />
                        </div>
                    </div>
                    <button onClick={this.handleClick} class="btn btn-success w-100">Submit</button>
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
                            </tr>
                        </thead>
                        <tbody>
                          {this.state.coders.map((coder)=>{
                            return<tr>
                                  <td>{coder.prenom}</td>
                                  <td>{coder.nom}</td>
                                  <td>{coder.email}</td>
                                  <td>{coder.telephone}</td>

                              </tr>
                          })}


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Jeemacoder />, document.getElementById("root"))