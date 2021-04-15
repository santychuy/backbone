import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
		font-family: 'NotoSansJPMedium';
		src: url('/fonts/NotoSansJP-Medium.otf');
		font-weight: 300;
		font-style: normal;
	}

    @font-face {
		font-family: 'NotoSansJPRegular';
		src: url('/fonts/NotoSansJP-Regular.otf');
		font-weight: 300;
		font-style: normal;
	}

    body {
        font-family: 'NotoSansJPRegular', sans-serif;
        font-size: 14px;
        background-color: #fafafa;
    }

	h2 {
		font-family: 'NotoSansJPMedium', sans-serif;
		font-size: 22px;
		margin: 0;
	}

	button, a {
		cursor: pointer;
		outline: none;
	}

	input {
		border: none;
		outline: none;
	}
`;

export default GlobalStyle;
