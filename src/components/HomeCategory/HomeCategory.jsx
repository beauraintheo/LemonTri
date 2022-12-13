
import "./HomeCategory.css";

const HomeCategory = ({ color, title }) => console.log('color: ', color) || (
    <div className="home-category-container" style={{ backgroundColor: color || "#4D4D4D" }}>

        <div className="home-category-title">
            <span>{ title }</span>
        </div>
    </div>
);

export default HomeCategory;