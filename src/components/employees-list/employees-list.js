import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Алексеев А.В" salary={800}/>
            <EmployeesListItem name="Бродников В.А" salary={3000}/>
            <EmployeesListItem name="Исаев И.К" salary={5000}/>
        </ul>
    )
}

export default EmployeesList;