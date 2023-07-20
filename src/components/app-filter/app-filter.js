import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: "all"
        }
    }

    onToggleFilter = (e) => {
        const filter = e.target.getAttribute("data-employees");
        this.setState({filter});
        this.props.onToggleFilter(filter);
    }

    render(){
        const {filter} = this.state;
        const className = "btn btn-outline-light",
              activeClassName = "btn btn-light";
        
        return (
            <div className="btn-group">
                <button 
                    className={filter === "all" ? activeClassName : className}
                    type="button"
                    data-employees="all"
                    onClick={this.onToggleFilter}>
                    Все сотрудники
                </button>
    
                <button 
                    className={filter === "increase" ? activeClassName : className}
                    type="button"
                    data-employees="increase"
                    onClick={this.onToggleFilter}>
                    На повышение
                </button>
    
                <button 
                    className={filter === "limit" ? activeClassName : className}
                    type="button"
                    data-employees="limit"
                    onClick={this.onToggleFilter}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;