export const ListItem = ({city, selected, onSelect}) => {
    console.log(
        city.pct_white+
        city.pct_black+
        city.pct_asian+
        city.pct_pacific_island+
        city.pct_native_american+
        city.pct_other+
        city.pct_multi_race
    );    
    const handleItemClick = (event) => {
        onSelect(city.id);
    };    
    const className = "list-group-item list-group-item-action d-flex flex-column align-items-start"+(selected ? " active" : "");
    return (
        <button key={city.id} className={className} onClick={handleItemClick}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{city.name}</h5>
            <small>Rank: <strong>{(city.rank)}</strong></small>
          </div>
          <p className="mb-1">Population: <strong>{(city.population).toLocaleString()}</strong></p>
          <p className="mb-1">Percent white: <strong>{(city.pct_white*100).toLocaleString()}</strong></p>
          <p className="mb-1">Percent black: <strong>{(city.pct_black*100).toLocaleString()}</strong></p>
          <p className="mb-1">Percent asian: <strong>{(city.pct_asian*100).toLocaleString()}</strong></p>
          <small>Donec id elit non mi porta.</small>
        </button>                        
    );
};