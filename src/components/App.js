import React from 'react';
import SearchBar from './search/SearchBar';

class App extends React.Component {
    onSearchSubmit = (formValues) => {
        console.log('onSearchSubmit called from App component...');
        console.log(formValues);
    };
    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
