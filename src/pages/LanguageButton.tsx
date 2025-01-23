import React, { useEffect, useState } from "react"

function LanguageButton({ customStyle }: any) {
    const [languageAtom, setLanguageAtom] = useRecoilState(rcLanguageAtom)
    const [isLanguageUiOpen, setIsLanguageUiOpen] = useState(false)

    const OPTIONS__LANGUAGE = [
        {
            name: "한국어",
            value: "ko",
            onClick() {
                changeLanguage(this.value)
            },
        },
        {
            name: "English",
            value: "en",
            onClick() {
                changeLanguage(this.value)
            },
        },
        {
            name: "日本語",
            value: "jp",
            onClick() {
                changeLanguage(this.value)
            },
        },
    ]

    useEffect(() => {
        i18n.changeLanguage(languageAtom.language)
    }, [languageAtom])

    const changeLanguage = (language: string) => {
        setLanguageAtom({ ...languageAtom, language: language })
        setIsLanguageUiOpen(false)
    }

    return (
        <div
            className={customStyle ?? styles.languageButton}
            data-click={isLanguageUiOpen}
            onClick={() => {
                setIsLanguageUiOpen(!isLanguageUiOpen)
            }}
        >
            <i className="ri-global-line ri-xl" />
            <p id="language">
                {OPTIONS__LANGUAGE.find(
                    (lang) => lang.value === languageAtom.language
                )
                    ? OPTIONS__LANGUAGE.find(
                          (lang) => lang.value === languageAtom.language
                      )!.name
                    : languageAtom.language}
            </p>
            {isLanguageUiOpen && (
                <Options
                    options={OPTIONS__LANGUAGE}
                    onMouseLeave={() => {
                        handleCloseOptionBoolean(setIsLanguageUiOpen)
                    }}
                    style={{ minWidth: "80px" }}
                />
            )}
        </div>
    )
}

export default LanguageButton
