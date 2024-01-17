import { Card } from '../Cards';
import { Container, Content, Items } from './styles';

export function Catalog() {
	return (
		<Container>
			<Content>
				<h1>catalog</h1>
                <Items>
                    <Card/>
                </Items>
			</Content>
		</Container>
	);
}
