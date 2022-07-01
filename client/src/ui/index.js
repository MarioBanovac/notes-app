import styled, { createGlobalStyle } from "styled-components";
import { TodoInput, TodoList } from "components";

export const GlobalStyle = createGlobalStyle`
    // CSS RESET
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        height:100vh;
        font-family:sans-serif;
        display:flex;
        justify-content:center;
        padding-top:50px;
    }

    a{
        text-decoration:none;
    }
    ul{
        list-style-type:none;
    }

    h1{
        margin-bottom:16px;
    }

    button {
        background: transparent;
        border-radius: 8px;
        padding: 2px;
        cursor: pointer;
      }
`;

export const StyledTodoInput = styled(TodoInput)`
  margin-bottom: 16px;

  h2 {
    margin-bottom: 12px;
  }

  input {
    width: 350px;
    height: 30px;
    margin-right: 16px;
    border-radius: 8px;
    padding-left: 12px;
  }
`;

export const StyledTodoList = styled(TodoList)`
  h2 {
    margin-bottom: 16px;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
  }

  li div {
    width: 350px;
    height: 30px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    margin-right: 16px;
    border-radius: 8px;
    padding-left: 12px;
  }

  li button:nth-of-type(1) {
    margin-right: 16px;
  }

  li input {
    width: 350px;
    height: 30px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    margin-right: 16px;
    border-radius: 8px;
    padding-left: 12px;
    font-size: 16px;
    background: #ccc;
  }

  li input::placeholder {
    font-size: 16px;
    color: #000;
  }
`;
