import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Contacts from './pages/Contacts/Contacts';
import Feedback from './pages/Feedback/Feedback';
import Footer from './component/Footer/Footer';
import ContactsAuthor from './pages/Contacts/ContactsDetail/Author/Author';
import ContactsDirector from './pages/Contacts/ContactsDetail/Director/Director';
import ContactsDeveloper from './pages/Contacts/ContactsDetail/Developer/Developer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/contacts/1" component={ContactsAuthor}></Route>
        <Route path="/contacts/2" component={ContactsDirector}></Route>
        <Route path="/contacts/3" component={ContactsDeveloper}></Route>
        <Route path="/feedback" component={Feedback} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
