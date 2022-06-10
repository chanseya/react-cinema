import {Component} from 'react';
 
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import MovieList from '../movie-list/movie-list';
import MovieAddForm from '../movie-add-form/movie-add-form';

import './app.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data: [
                    {name: 'Леон', grade: 10, increase: false, rise: false, id: 1},
                    {name: 'Драйв', grade: 6, increase: false, rise: false, id: 2},
                    {name: 'Криминальное чтиво', grade: 3, increase: false, rise: false, id: 3},
                    {name: 'Бешеные псы', grade: 7, increase: false, rise: false, id: 4}
                ],
                term: '',
                filter: 'all'
        }
        this.maxId = this.state.data.length + 1;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addMovie = (name, grade) => {
        const newItem = {
            name, 
            grade,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id)
                    return {...item, [prop]: !item[prop]}
                return item;
            })
        }))
    }

    searchMovie = (data, term) => {
        if(term.length === 0)
            return data;

        return data.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'byGrade':
                const arr = structuredClone(items);
                return arr.sort((item, nextItem) => item.grade <= nextItem.grade ? 1 : -1);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onChangeGrade = (id, value) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id)
                    return {...item, grade: parseInt(value)}
                return item;
            })
        }))
    }

    render() {
        const {data, term, filter} = this.state;
        const favoriteCount = this.state.data.filter(item => item.rise).length;
        const visibleData = this.filterPost(this.searchMovie(data, term), filter);
        return(
            <div className='app'>
                <AppInfo 
                    movieCount={this.state.data.length}
                    favoriteCount={favoriteCount}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <MovieList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeGrade={this.onChangeGrade} />
                <MovieAddForm
                    onAdd={this.addMovie}/>
            </div>
        )
    }
}

export default App;