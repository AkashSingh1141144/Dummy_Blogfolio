import { Provider } from "react-redux";
import { store } from "./store";
import { HelmetProvider } from "react-helmet-async";	
import { BrowserRouter as Router } from "react-router-dom";

export default function Providers({ children}) {
	return (
		<Provider store={store}>
			<HelmetProvider>
				<Router>
					{children}
				</Router>
			</HelmetProvider>
		</Provider>
	)
}