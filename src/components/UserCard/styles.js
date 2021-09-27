import styled from "styled-components"

export const Container = styled.div`
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
width: 260px;
height: 250px;
padding: 16px;
background-color: pink;
box-shadow:0px 4px 4px rgba(0,0,0,0.3);
border: 1px solid turquoise;
margin: 0 auto;

button{
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
    font-weight: bold;
    cursor: pointer;
}
input{
    border-radius: 5px;
}
h2, h1{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}
`
