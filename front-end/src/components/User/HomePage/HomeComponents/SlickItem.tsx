import Image from "components/User/Common/Image";
import "./SlickSlider.css";

type Props = {
    item: any,
    height: any,
    titleSize: number
}

const SlickItem = ({ item, height, titleSize }: Props) => {
    return (
        <div key={item.id} className="slider-img">
            <Image src={item.src} style={{ width: "100%", height: height, borderRadius: 8 }} />
            <div className="infor-container">
                <div className="infor-content">
                    <div className="category-container">
                        {item.category.map((it: any) => (
                            <div className="category" style={{ backgroundColor: it.color }}>{it.name}</div>
                        ))}
                    </div>
                    <div className="title-container">
                        <p className="title" style={{ fontSize: titleSize }}>{item.title}</p>
                    </div>
                    <div className="note-container">
                        <span className="note"><i className="fas fa-user pd-ic"></i> {item.author.name}</span>
                        <span className="note"><i className="far fa-clock pd-ic"></i>{item.author.date}</span>
                        <span className="note-fire"><i className="fas fa-fire-alt pd-ic" color="red"></i></span>{item.author.views}
                    </div>
                </div>
            </div>
        </div>
    )
}


SlickItem.defaultProps = {
    height: "100%",
    titleSize: 14
};

export default SlickItem;
