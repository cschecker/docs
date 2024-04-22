import React from "react"
import styles from "../../../src/scss/_footer.module.scss"

function Footer(props) {
    // You can fully customize this implementation
    // including changing the JSX, CSS and React hooks
    return (
        <footer className={styles.footerWrap}>
            <a href="/">
                <img
                    height={24}
                    width={160}
                    src={require("@site/static/img/mainLogoDark.png").default}
                />
            </a>

            <div className={styles.footerWrap__copyright}>
                <h5>
                    (주)클라우드로 | 사업자등록번호 : 886-86-02497 | 대표이사
                    김경수 | 서울 강남구 테헤란로 151(역삼하이츠 빌딩), 305
                </h5>
                <h5>Copyright ⓒ 2023 Cloudraw. Inc.</h5>
            </div>
        </footer>
    )
}

export default Footer
