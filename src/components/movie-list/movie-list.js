import EmployeesListItem from '../movie-list-item/movie-list-item';
import './movie-list.css';

function EmployeesList({data, onDelete, onToggleProp, onChangeGrade}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onChangeGrade={(e) => onChangeGrade(id, e.currentTarget.value)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))} />
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;