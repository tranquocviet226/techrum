const CommentItem = () => {
  return (
    <div className="row ts-comments-row align-items-center mb-50">
      <div className="col-lg-4 col-md-2">
        <div className="ts-author-media">
          <div className="ts-author-thumb">
            <img
              alt=""
              src="https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&d=mm&r=g"
              className="avatar avatar-96 photo lazyloaded"
              height={96}
              width={96}
              srcSet="https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&d=mm&r=g 2x"
              data-ll-status="loaded"
            />
            <noscript>
              &lt;img alt=''
              src='https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&amp;#038;d=mm&amp;#038;r=g'
              srcset='https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&amp;#038;d=mm&amp;#038;r=g
              2x' class='avatar avatar-96 photo' height='96' width='96' /&gt;
            </noscript>
          </div>
          <div className="ts-author-meta">14 Jul 19</div>
        </div>
      </div>
      <div className="col-lg-8 col-md-10">
        <div className="ts-author-content">
          <div className="comment">
            <a>Em dep lam</a>
          </div>
          <div className="ts-author">
            by
            <a>John Doe</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
