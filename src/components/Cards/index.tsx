import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import CoffeeImg from '../../assets/traditionalCoffee.png';
import { defaultColors } from '../../styles/themes/default';
import {
	Bottom,
	CartBttn,
	CoffeeType,
	Container,
	Content,
	QntBttn,
} from './styles';

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
						<button>
							<Minus size={14} color={defaultColors['purple']} />
						</button>
						<p>1</p>
						<button>
							<Plus size={14} color={defaultColors['purple']} />
						</button>
					</QntBttn>
					<CartBttn>
						<ShoppingCartSimple
							size={22}
							weight="fill"
							color={defaultColors['base-card']}
						/>
					</CartBttn>
				</Bottom>
			</Content>
		</Container>
	);
}
