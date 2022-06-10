import {Component} from 'react';
import './movie-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            grade: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.grade || this.state.grade > 10 || this.state.grade < 0) return;
        this.props.onAdd(this.state.name, this.state.grade);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, grade} = this.state;

        return(
            <div className="app-add-form">
                <h3>Добавьте новый фильм</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Название фильма"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        min="0"
                        max="10"
                        className="form-control new-post-label"
                        placeholder="Оценка"
                        name="grade"
                        value={grade}
                        onChange={this.onValueChange} />
    
                    <button type="submit" 
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;