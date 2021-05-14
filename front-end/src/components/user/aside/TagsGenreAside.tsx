import dataTags from "data/tag/DataTags";
const TagsGenreAside = () => {
  return (
    <div id="tag_cloud-2" className="widget widget_tag_cloud">
      <h3 className="widget-title">
        <span className="title-angle-shap">Tags</span>
      </h3>
      <div className="tagcloud">
        {dataTags().map((item) => (
          <a key={item.id} href="#" style={{ fontSize: "8pt" }}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TagsGenreAside;
