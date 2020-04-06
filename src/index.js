import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@salesforce-ux/design-system-react/components/button";

const App = () => {
    return (
        <div>
            <div>Hello React,Webpack 4 & Babel 7!</div>
            <Button label="Hello Button" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
