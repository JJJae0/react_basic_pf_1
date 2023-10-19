import Info from '../info/Info';
import News from '../news/News';
import Visual from '../visual/Visual';
import Btns from '../btns/Btns';
import './Main.scss';

function Main() {
	return (
		<main className='mainWrap '>
			<Visual />
			<News />
			<Info />
			<Btns />
		</main>
	);
}

export default Main;
