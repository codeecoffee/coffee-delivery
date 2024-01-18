import { Card } from '../Cards';
import { Container, Content, Items } from './styles';

export function Catalog() {
	return (
		<Container>
			<Content>
				<h1>Our Coffees</h1>
				<Items>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Items>
			</Content>
		</Container>
	);
}
