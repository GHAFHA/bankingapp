import React from "react";
import Header from "./UI/Header";
import Button from 'react-bootstrap/Button';

const HomePage = () => {
    return(
        <div className="container-text-center">
            <Header
                title="CometWallet"
                description="Banking made simple for students"
            />
            <Button variant="warning">Warning</Button>
        </div>
    )
}

export default HomePage;