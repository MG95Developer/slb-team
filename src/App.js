import React, { useEffect } from 'react';
import Footer from './components/Footer';

import Search from './Search';

function App() {
	/* SET PAGE TITLE */
	useEffect(() => {
		document.title = 'SLB | 2022-2023';
	}, []);

	return (
		<>
			<Search />
			<Footer />
		</>
	);
}

export default App;
