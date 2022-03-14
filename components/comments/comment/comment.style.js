import styled from "styled-components";
import { css } from "styled-components";

export const CommentWrapper = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 2.5rem 1fr 2.0625rem;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  position: relative;

  &:not(:last-child):not(.replyWrapper) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(100, 113, 150, 0.1);
  }

  ${({ className }) =>
    className
      ? css`
          &::before {
            content: "";
            position: absolute;
            left: 20px;
            top: ${({ firstReplyHeight }) =>
              `${40 + firstReplyHeight + 32 + 26 + 20}px`};
            width: 1px;
            bottom: ${({ lastReplyHeight }) => `${lastReplyHeight - 20 + 8}px`};
            background: rgba(100, 113, 150, 0.1);

            @media screen and (min-width: 769px) {
              top: 56px;
            }
          }
        `
      : ""}
  .timeline {
  }

  @media screen and (min-width: 769px) {
    margin-top: 1.75rem;
    grid-column-gap: 2rem;
  }
`;
