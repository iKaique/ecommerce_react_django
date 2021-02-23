import { Container } from 'react-bootstrap'

import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
    return (
        <div>
            <Header />
            <main>
                <Container className="py-3">
                    <h1>Welcome to ProShop!</h1>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default App;