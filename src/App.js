import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
import { StrictMode , useState } from 'react';
import ThemeContext from './ThemeContext';
import SearchParams from "./SearchParams";
import Details from './Details';

const App = () => {
    const theme = useState("pink");
    return (
        <StrictMode>
            <ThemeContext.Provider value={theme}>
                <BrowserRouter>
                    <header>
                    <Link to="/"> Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));

//same output
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };
// render(React.createElement(App), document.getElementById("root"));