import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '클라우드 자산 취약점 점검',
    Svg: require('@site/static/img/inspect.svg').default,
    description: (
      <>
        프로젝트별로 가지고 있는 클라우드 자신의 취약점을 파악해 보완할 수
        있습니다.
      </>
    ),
  },
  {
    title: '점검 내용을 엑셀 파일로 추출',
    Svg: require('@site/static/img/exelFile.svg').default,
    description: <>특정 점검 내역을 파일로 추출하여 관리 할 수 있습니다.</>,
  },
  {
    title: '점검 결과 비교',
    Svg: require('@site/static/img/compare.svg').default,
    description: (
      <>
        선택한 일자 기준으로 직전 점검결과와 비교하여 개선사항을 파악할 수
        있습니다.
      </>
    ),
  },
]

// 메인페이지 리스트 아이템
function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

// 메인페이지 바디
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
