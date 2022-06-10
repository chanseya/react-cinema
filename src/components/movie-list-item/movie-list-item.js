import './movie-list-item.css';

function EmployeesListItem (props) {
    const {name, grade, onDelete, increase, rise, onToggleProp, onChangeGrade} = props;
    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return ( 
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="number" min="0" max="10" className="list-group-item-input" defaultValue={grade} onChange={onChangeGrade}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleProp}>
                    <i className="fas fa-film"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;