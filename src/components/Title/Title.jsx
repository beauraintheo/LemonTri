import "./title.css";

const Title = ({ title, image }) => {
    console.log();

    return (
        <div className="title-container">
            { image && <img src={image} alt="" /> }
            <span className="title-text">{ title }</span>
        </div>
    );
};

export default Title;