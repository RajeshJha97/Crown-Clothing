import Directory from './components/directory/directory.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];
  const Shop = () => {
    return <h1>from shop</h1>;
  };
  return (
    <Routes>
      {/* <Route path={'/'} element={<Directory categories={categories} />}>
        <Route path='/shop' element={<Shop />}></Route>
      </Route> */}
      <Route path='/' element={<Navigation />}>
        <Route index path='/' element={<Directory categories={categories} />} />
        <Route
          index
          path='home'
          element={<Directory categories={categories} />}
        />
        <Route path='shop' element={<Shop />}></Route>
        <Route path='sign-In' element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
