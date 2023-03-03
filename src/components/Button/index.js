import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.25;
  text-transform: capitalize;
  height: 46px;
  transition: all 0.4s;

  border: none;

  ${(props) =>
    props.type === "primary" &&
    `
  color: #000000;
  background-color: #f0f0f0;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
  }
  `}

  ${(props) =>
    props.type === "secondary" &&
    `
  border: none;
  color: #ffffff;
  background-color: #151515;
  border-radius: unset;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #151515;
  }`}

  ${(props) =>
    props.size === "sm-btn" &&
    `
  width: 54px;
  `}

  ${(props) =>
    props.size === "md-btn" &&
    `
  width: 166px;
  `}

  ${(props) =>
    props.size === "full-btn" &&
    `
  width: 100%;
  `}
`;

export default Button;