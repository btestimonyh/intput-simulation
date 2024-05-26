import React, { useState } from 'react';

function App() {
    const [placeholder, setPlaceholder] = useState('Enter text here');
    const [hideCursor, setHideCursor] = useState(false);

    const handleFocus = () => {
        setTimeout(() => {
            setPlaceholder('');
            setHideCursor(true);
        }, 100)

    };

    const handleBlur = () => {
        setTimeout(() => {
            setPlaceholder('Your placeholder');
            setHideCursor(false);
        }, 100)
    };

    return (
        <div className="App">
            <input
                type="text"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                    className={hideCursor ? 'hide-cursor' : ''}
            />
        </div>
    );
}

export default App;
