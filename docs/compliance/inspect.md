---
title: 점검실행
sidebar_position: 2
tags: [로그인, 회원가입]
---

# 점검실행

점검실행방법 설명

## 레포트생성

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

-   `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
-   `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## 점검이력확인

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
    themeConfig: {
        navbar: {
            items: [
                // highlight-start
                {
                    type: "docsVersionDropdown",
                },
                // highlight-end
            ],
        },
    },
}
```
