import { Global } from "./GlobalStyles";
import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

//importing components
import Editor from "./components/Editor";
import Result from "./components/Result";


const App = () => {

    const theme = {
        background: "#000"
    }

    return (
        <ThemeProvider theme={theme}>
            <Global />
            <Container>
                <Editor />
                <Result />
            </Container>
        </ThemeProvider>
    );
};

export default App; 

const Container = styled.div`
    background-color: #000;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;