
import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type="button"
            data-employees="all">
                Все сотрудники
            </button>

            <button 
            className="btn btn-outline-light"
            type="button"
            data-employees="toIncrease">
                На повышение
            </button>

            <button 
            className="btn btn-outline-light"
            type="button"
            data-employees="bigSalary">
                З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;