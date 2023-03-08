import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/index';
import { DefaultLayout } from '~/components/LayOut';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let LayOut = DefaultLayout;
                        if (route.layout) {
                            LayOut = route.layout;
                        } else if (route.layout === null) {
                            LayOut = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <LayOut>
                                        <route.component />
                                    </LayOut>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
