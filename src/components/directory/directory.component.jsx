import { Outlet } from 'react-router';
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';
const Directory = (props) => {
  const { categories } = props;
  return (
    <div>
      <div className='directory-container'>
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Directory;
