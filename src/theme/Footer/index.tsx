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
                    박성갑 | 서울 송파구 올림픽로 240 롯데웰빙센터 2F
                </h5>
                <h5>Copyright ⓒ 2021 Cloudraw. Inc.</h5>
            </div>
        </footer>
    )
}

export default Footer
