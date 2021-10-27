import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Contacts from './pages/Contacts/Contacts';
import Feedback from './pages/Feedback/Feedback';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/books" component={Books} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
