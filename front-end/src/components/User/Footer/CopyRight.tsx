import { COPY_RIGHT } from '../../../constants/index'

const CopyRight = () => {
    const backHref = "#"
    return (
        <div className="copy-right">
            <div className="container">
                <div className="row">
                    <div className="col-md-11  align-self-center">
                        <div className="copyright-text text-center">
                            <p>{COPY_RIGHT}</p>
                        </div>
                    </div>
                    <div className="top-up-btn col-md-1">
                        <div className="BackTo">
                            <a
                                href={backHref}
                                className="ts-icon ts-icon-arrow-up"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CopyRight;
