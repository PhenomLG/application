import { Component } from 'react';

import nextId from 'react-id-generator'

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    _id = nextId();
    initialState = {name: "", salary: ""}
    constructor(props){
        super(props);
        this.state = this.initialState;
        this._id = props.index;
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

    render(){
        const {name, salary} = this.state;
        const {onAdd} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onReset={this.handleFormReset}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name = "name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name = "salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) => {
                                onAdd(name, salary, ++this._id, e);
                                this.setState(() => this.initialState); // 
                            }}
                            >Добавить</button>
                </form>
            </div>   
        )
    }
}

export default EmployeesAddForm;