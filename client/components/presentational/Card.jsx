import React from "react";
import styled from "styled-components";

import { shaded } from "../constants/colours";

const Card = styled.div`
  background-color: #fff;
  max-width: 800px;
  align-items: center;
  display: block;
  padding: 15px 20px 20px;
  background-color: ${props => props.shaded ? shaded : "#FFF"};
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.15);
  border-radius: 2px;
  margin: .5rem;
  cursor: ${props => props.onClick ? "pointer" : "default"};
`;

export default Card;