import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
        transition: .2s ease;
    }

    svg:hover {
        opacity: ${(props) => (props.hoverEffect ? ".4" : "1")};
        cursor: ${(props) => (props.hoverEffect ? "pointer" : "")};
        transition: .2s ease;
    }
`;