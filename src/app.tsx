import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProfilePage } from "./components/pages/profile";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
