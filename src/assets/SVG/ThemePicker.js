import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.3em;
  &:hover {
    cursor: pointer;
  }
`;

const ThemePickerIcon = ({  theme, callback }) => {
  const fill = "#D9D9D9";
  // console.log(theme)

  return (
    <Wrapper onClick={callback}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="48.5"
          stroke={fill}
          fill={theme.accent}
          strokeWidth="3"
        />
        <path
          d="M85.3553 14.6447C94.7322 24.0215 100 36.7392 100 50C100 63.2608 94.7322 75.9785 85.3553 85.3553C75.9785 94.7322 63.2608 100 50 100C36.7392 100 24.0215 94.7322 14.6447 85.3553L50 50L85.3553 14.6447Z"
          fill={fill}
        />
      </svg>
    </Wrapper>
  );
};

export default ThemePickerIcon;
