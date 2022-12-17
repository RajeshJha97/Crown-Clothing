import './category-item.styles.scss';
const CategoryItem = (props) => {
  const { category } = props;
  const { id, imageUrl, title } = category;
  return (
    <div key={id} className='category-container'>
      <div
        className='background-image'
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
