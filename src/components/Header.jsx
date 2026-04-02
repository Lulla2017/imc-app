import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className={"header-title"}>
                <h1 className={"title"}>Calculer votre IMC!</h1>
                <p className={"quote"}>LP DWCA TP UE 6.3.1</p>
            </div>
            <div className={"authors"}>
                <span className={"Catherine"}>Catherine Braun</span>
                <span className={"Laurent"}>Laurent Boyer</span>
            </div>
        </header>
    );
};

export default Header;
