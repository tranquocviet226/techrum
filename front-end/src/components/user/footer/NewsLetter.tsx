import logoLight from "../../../assets/img/logo/logo-light.png";

const NewsLetter = () => {
    return (
        <div className="newsletter-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-5 align-self-center">
                        <div className="footer-logo">
                            <a
                                className="logo"
                                href="https://demo.themewinter.com/wp/digiqoles/"
                            >
                                <img
                                    className="img-fluid lazyloaded"
                                    src={logoLight}
                                    alt="DigiQole"
                                    data-ll-status="loaded"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7">
                        <div className="ts-subscribe">
                            <form
                                id="mc4wp-form-1"
                                className="mc4wp-form mc4wp-form-464"
                                method="post"
                                data-id={464}
                                data-name="footer newsletter"
                            >
                                <div className="mc4wp-form-fields">
                                    <div className="footer-newsletter">
                                        <p>
                                            <i className="fa fa-paper-plane" aria-hidden="true" />
                                            <input
                                                type="email"
                                                name="EMAIL"
                                                placeholder="Your email"
                                                required
                                            />
                                        </p>
                                        <input type="submit" defaultValue="Subscribe" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;
