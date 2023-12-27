import './App.css';

import ImageSection from './components/ImageSection';
import BrokenJSX from './components/BrokenJSX';

function App() {
	return (
		<main className="App">
			<div>
				<BrokenJSX />
			</div>
			<ImageSection />
		</main>
	);
}

export default App;
