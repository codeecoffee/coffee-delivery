import { ShoppingCartSimple } from 'phosphor-react';
import CoffeeImg from '../../assets/traditionalCoffee.png';
import { Bottom, CoffeeType, Container, Content, QntBttn } from './styles';

export function Card() {
	return (
		<Container>
			<Content>
				<img src={CoffeeImg} alt="" />
				<CoffeeType>
					<span>Traditional</span>
				</CoffeeType>
				<h5>Traditional Espresso</h5>
				<p>O tradicional cafe feito com agua quente e graos moidos.</p>
				<Bottom>
					<h2>
						<span>$</span> 9,90
					</h2>
					<QntBttn>
						<button>-</button>
						<p>1</p>
						<button>+</button>
					</QntBttn>
					<ShoppingCartSimple size={22} />
				</Bottom>
			</Content>
		</Container>
	);
}
