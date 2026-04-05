import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: 'FFWD — 서비스 기획서',
  description: 'Fast Forward Cinema. | Future of Film, Watch & Discover',

  head: [
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'FFWD — Fast Forward Cinema.' }],
    ['meta', { name: 'og:description', content: 'Future of Film, Watch & Discover | 시네마틱 숏폼 스트리밍 플랫폼' }],
  ],

  themeConfig: {
    logo: false,
    siteTitle: '⏩ FFWD',

    nav: [
      { text: '홈', link: '/' },
      { text: '브랜딩', link: '/10-브랜딩/철학' },
      { text: '서비스 개요', link: '/01-서비스개요/철학' },
      { text: '기능명세서', link: '/05-기능명세서/시스템아키텍처' },
      { text: '포털 전략', link: '/15-포털전략/전략개요' },
      { text: '인사이트', link: '/13-인사이트/filmoment분석' },
      { text: '아이디어', link: '/16-아이디어/아이디어랩' },
      { text: '리스크 분석', link: '/11-리스크분석/리스크분석' },
      { text: '사업 전략', link: '/17-사업전략/경영요약' },
    ],

    sidebar: [
      {
        text: '⏩ 브랜딩 철학',
        collapsed: false,
        items: [
          { text: '철학 — Fast Forward Cinema', link: '/10-브랜딩/철학' },
          { text: '버벌 브랜딩 & 아이덴티티', link: '/10-브랜딩/버벌브랜딩' },
          { text: '서비스 프로그램', link: '/10-브랜딩/서비스전개' },
          { text: 'Augments 시스템', link: '/10-브랜딩/augments' },
          { text: '포지셔닝 & 임팩트', link: '/10-브랜딩/포지셔닝' },
        ]
      },
      {
        text: '📋 서비스 개요',
        collapsed: false,
        items: [
          { text: '철학 & 비전', link: '/01-서비스개요/철학' },
          { text: 'FFWD 헌장', link: '/01-서비스개요/헌장' },
          { text: '핵심 메커니즘', link: '/01-서비스개요/메커니즘' },
        ]
      },
      {
        text: '🤝 JV 구조',
        collapsed: false,
        items: [
          { text: '지분 & 역할', link: '/02-JV구조/지분구조' },
          { text: '의사결정 & 수익환원', link: '/02-JV구조/의사결정' },
        ]
      },
      {
        text: '💻 서버 운영비',
        collapsed: false,
        items: [
          { text: '인프라 비용 상세', link: '/03-서버운영비/인프라비용' },
          { text: '총 비용 요약', link: '/03-서버운영비/총비용요약' },
        ]
      },
      {
        text: '💰 매출 구조',
        collapsed: false,
        items: [
          { text: '7대 수익 모델', link: '/04-매출구조/수익모델' },
          { text: '매출 전망 & 수수료', link: '/04-매출구조/매출전망' },
        ]
      },
      {
        text: '⚙️ 기능명세서',
        collapsed: false,
        items: [
          { text: '시스템 아키텍처', link: '/05-기능명세서/시스템아키텍처' },
          { text: 'Phase 1: MVP', link: '/05-기능명세서/phase1-mvp' },
          { text: 'Phase 2: Growth', link: '/05-기능명세서/phase2-growth' },
          { text: 'Phase 3: Global', link: '/05-기능명세서/phase3-global' },
          { text: '전문가 투표 시스템', link: '/05-기능명세서/전문가투표' },
          { text: '자동 자막 파이프라인', link: '/05-기능명세서/자동자막' },
          { text: '자막 품질 보증 (QA)', link: '/05-기능명세서/자막QA' },
        ]
      },
      {
        text: '📣 마케팅 전략',
        collapsed: false,
        items: [
          { text: '마케팅 전략', link: '/06-마케팅전략/마케팅전략' },
          { text: '글로벌 확장', link: '/06-마케팅전략/글로벌확장' },
        ]
      },
      {
        text: '🎬 영화제',
        collapsed: false,
        items: [
          { text: 'FFWD Film Festival', link: '/07-영화제/영화제컨셉' },
          { text: '지자체 연계', link: '/07-영화제/지자체연계' },
        ]
      },
      {
        text: '🗓️ 로드맵',
        items: [
          { text: '3개년 로드맵', link: '/08-로드맵/로드맵' },
        ]
      },
      {
        text: '🧠 Anthropic 인사이트',
        items: [
          { text: 'Building Anthropic 핵심 교훈', link: '/09-Anthropic인사이트/핵심교훈' },
        ]
      },
      {
        text: '⚠️ 리스크 & 경쟁',
        collapsed: false,
        items: [
          { text: '리스크 분석 & 대응', link: '/11-리스크분석/리스크분석' },
          { text: '경쟁 환경 분석', link: '/11-리스크분석/경쟁분석' },
        ]
      },
      {
        text: '📈 단위 경제',
        collapsed: false,
        items: [
          { text: '유닛 이코노믹스 & CAC/LTV', link: '/12-단위경제/유닛이코노믹스' },
          { text: '매출 전망 (현실화)', link: '/12-단위경제/매출현실화' },
        ]
      },
      {
        text: '📜 IP & 저작권',
        items: [
          { text: 'IP 관리 프레임워크', link: '/14-IP관리/저작권' },
        ]
      },
      {
        text: '💡 인사이트 & 콜라보',
        collapsed: false,
        items: [
          { text: '@filmoment — 110만 시네필의 미술관', link: '/13-인사이트/filmoment분석' },
          { text: '콜라보 전략 & FFWD 접목', link: '/13-인사이트/콜라보전략' },
          { text: '영화 브랜드 벤치마크 (Siena·NEON·A24)', link: '/13-인사이트/영화브랜드벤치마크' },
        ]
      },
      {
        text: '🧠 포털 빌드업 전략',
        collapsed: false,
        items: [
          { text: '전략 개요 & 포지셔닝', link: '/15-포털전략/전략개요' },
          { text: '좌뇌·우뇌·오른팔 AI 레이어', link: '/15-포털전략/좌뇌우뇌오른팔' },
          { text: '4-Phase 빌드업 로드맵', link: '/15-포털전략/빌드업로드맵' },
          { text: '시장 검증 & 경쟁 포지셔닝', link: '/15-포털전략/경쟁포지셔닝' },
        ]
      },
      {
        text: '💡 아이디어 랩',
        collapsed: false,
        items: [
          { text: 'FFWD 아이디어 랩', link: '/16-아이디어/아이디어랩' },
        ]
      },
      {
        text: '📊 사업 전략',
        collapsed: false,
        items: [
          { text: '경영 요약 (Executive Summary)', link: '/17-사업전략/경영요약' },
          { text: '5년 사업 설계 (Phase 1~5)', link: '/17-사업전략/5년설계' },
          { text: '6개월 실행 전략 (MVP)', link: '/17-사업전략/6개월실행' },
          { text: '리스크 분석 & 방어벽', link: '/17-사업전략/리스크와방어' },
        ]
      },
    ],

    outline: {
      label: '목차',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '검색' },
          modal: {
            noResultsText: '검색 결과 없음',
            resetButtonTitle: '초기화',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' },
          },
        },
      },
    },

    footer: {
      message: 'FFWD — Fast Forward Cinema. Future of Film, Watch & Discover.',
      copyright: '© 2026 FFWD (이정재 × 키넥션 JV)',
    },

    docFooter: {
      prev: '이전',
      next: '다음',
    },

    darkModeSwitchLabel: '테마',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로',
  },
})
