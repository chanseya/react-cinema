import './app-info.css';

function AppInfo({movieCount, favoriteCount}) {    
    return(
        <div className="app-info">
            <h1>Рейтинг моих фильмов</h1>
            <h2>Количество фильмов: {movieCount}</h2>
            <h2>Любимых фильмов: {favoriteCount}</h2>
        </div>
    );
}

export default AppInfo;