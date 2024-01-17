import styled from 'styled-components';

export const Container = styled.div`
	width: 256px;
	height: 310px;
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px 36px;
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 120px;
		height: 120px;
		margin-top: -20px;
	}

	h5 {
		font-size: 20px;
		font-weight: 700;
		color: ${(props) => props.theme['base-subtitle']};
	}

	p {
		text-align: center;
		color: ${(props) => props.theme['base-label']};
		font-size: 14px;
		font-family: Roboto, sans-serif;
		margin-inline: 20px;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
	}
`;
export const CoffeeType = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 16px;
	margin-bottom: 20px;
	gap: 4px;

	span {
		background-color: ${(props) => props.theme['yellow-light']};
		border-radius: 100px;

		color: ${(props) => props.theme['yellow-dark']};
		font-size: 10px;
		font-family: Roboto;
		font-weight: 700;
		text-align: center;
		padding: 4px 8px;
		line-height: 130%;
	}
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: row;

	h2 {
		font-size: 1.5rem;
		color: ${(props) => props.theme['base-text']};
		font-weight: 800;
		text-align: center;

		span {
			color: ${(props) => props.theme['base-text']};
			font-family: Roboto, sans-serif;
			font-size: 14px;
			font-weight: 400;
			text-align: right;
		}
	}

	/* align-self: flex-end; */
`;
export const QntBttn = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;
	background: ${(props) => props.theme['base-button']};
	padding: 8px;
	border-radius: 6px;
	width: 72px;
	p {
		margin-inline: 4px;
		font-size: 1rem;
		color: ${(props) => props.theme['base-title']};
	}
`;

// <Content>
// 	<img src={CoffeeImg} alt="" />
// 	<span>Traditional</span>
// 	<h5>Traditional Espresso</h5>
// 	<p>O tradicional cafe feito com agua quente e graos moidos</p>
// 	<div>
// 		<h2>
// 			<span>$</span>9,90
// 		</h2>
// 		<div>
// 			<button>-</button>
// 			<p>1</p>
// 			<button>+</button>
// 		</div>
// 		<ShoppingCartSimple size={22} />
// 	</div>
// </Content>;
