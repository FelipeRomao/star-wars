import styled from "styled-components";
import List from "@material-ui/core/List";

export const Message = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  max-height: 150px;
  height: 150px;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;

  img {
    width: 200px;
  }
`;

export const ContainerList = styled(List)`
  max-height: 150px;
  height: 150px;
  overflow: auto;
`;
