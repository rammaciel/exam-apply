import styled from 'styled-components';
import { Link as LinkRouterDom } from 'react-router-dom';

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.dark};
	color: ${({ theme }) => theme.colors.white};
	font-size: 2.1rem;
	font-weight: 900;
	border: none;
	text-align: center;
	height: 5rem;
	width: 100%;
	border-radius: 3px;
	:disabled {
		cursor: not-allowed;
		background-color: ${({ theme }) => theme.colors.grey};
	}
`;
export const Input = styled.input`
	color: ${({ theme }) => theme.colors.dark};
	border: 2px solid
		${({ theme, error }) => (error ? theme.colors.red : theme.colors.grey)};
	height: 4.8rem;
	text-align: center;
	font-size: 2rem;
	font-weight: 900;
	width: 100%;
	border-radius: 3px;
	::placeholder {
		opacity: 0.5;
		font-weight: 900;
	}
	:focus {
		transition: border-color 0.5s;
		border-color: ${({ theme, error }) =>
			error ? theme.colors.red : theme.colors.dark};
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 30rem;
	& ${Input} {
		margin: 1rem 0;
	}
`;
export const Link = styled(LinkRouterDom)`
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.4rem;
	:hover {
		text-decoration: underline;
	}
	:focus {
		outline: none;
	}
`;

export const FooterContainer = styled.div`
	margin-top: 2rem;
	text-align: center;
`;
