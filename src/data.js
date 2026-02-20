export const STORAGE_KEY_LANG = "portfolio_lang";
export const DATA = {
  ko: {
    brand: { role: "블록체인 개발자" },
    nav: { about: "소개", experience: "경력", projects: "프로젝트", skills: "스킬", education: "학력", certificates: "자격증", contact: "연락처" },
    hero: {
      kicker: "Hi, 👋 (a.k.a. Johnny JI)",
      title: "Blockchain Developer",
      subtitle: "CeFi/DeFi · Node Infrastructure · Custody/Warehouse-grade reliability",
      summary: "안정적인 노드 운영과 지갑·입출금·스테이킹 트랜잭션 시스템을 설계·개발합니다.",
      ctaProjects: "프로젝트 보기",
      ctaContact: "연락하기",
      h1: "다수 메인넷 노드 운영 및 업그레이드(하드/소프트포크) 경험",
      h2: "입출금 파이프라인·모니터링·장애 대응을 포함한 운영 경험",
      h3: "지갑 및 스테이킹 트랜잭션 시스템(EVM + Solana) 개발 경험",
    },
    facts: {
      focus: "Focus",
      focusValue: "Node Infra · Wallet · Tx Systems",
      years: "Experience",
      yearsValue: "3y 11m+",
      yearsNote: "다른 직무 4년 5개월 포함",
      blockchainLabel: "블록체인",
      othersRoleLabel: "다른 직무",
      location: "Location",
      locationValue: "Korea / Global (Remote-friendly)",
      note: "이 페이지는 한국어와 영어를 지원합니다. 토글로 전환할 수 있어요.",
    },
    about: {
      title: "About",
      desc: "저는 블록체인 개발자 Johnny 입니다.",
      profileTitle: "Profile",
      profileP1:
        "총 {duration} 동안 CeFi Custody, DeFi 지갑, 스테이킹, 블록체인 노드·인프라 개발 및 유지보수를 담당했습니다.",
      profileP2: "안정적인 블록체인 서비스 구축과 풀스택 성장을 지향합니다.",
      interestTitle: "Interests",
      interest1: "크립토 서비스 운영 안정성과 사용자 성향·니즈 파악",
      interest2: "DeFi 서비스, 스마트 컨트랙트 audit",
      interest3: "dApp 구상",
    },
    exp: {
      title: "Experience",
      desc: "회사 내부 시스템명 없이, 역할과 경험 중심으로 정리했습니다.",
      items: [
        {
          company: "디앤에스에버",
          period: "2024.09 ~ 재직 중 ({duration})",
          periodStart: "2024-09",
          lede: "다수 블록체인 노드 운영과 입출금 시스템 개발·운영을 담당했습니다.",
          areas: [
            {
              title: "노드 운영·인프라",
              bullets: [
                "70여 개 메인넷 풀노드 설치·구성 및 일상 운영 (EVM, Cosmos SDK, Substrate, DAG 등 다양한 아키텍처)",
                "하드포크·소프트포크 사전 분석 및 무중단 버전 업그레이드 수행",
                "노드 동기화 상태 모니터링, 블록 높이 지연·피어 이상 감지 시 자동 알림 구성",
                "장애 발생 시 원인 분석(로그·RPC 상태 점검)과 긴급 복구, 노드 재설치·데이터 스냅샷 복원",
                "서버 디스크 용량 확보·확장, 노드 서버 간 이전·재배치 작업",
                "공용(public) RPC 엔드포인트 확보·연동 및 엔드포인트 헬스체크·자동 전환 로직 운영",
                "서버 보안 설정(방화벽, SSH 키 관리, 포트 제한) 및 접근 제어 관리",
              ],
            },
            {
              title: "입출금 시스템 개발·운영",
              bullets: [
                "코인·토큰 입출금 파이프라인 개발 및 신규 체인·토큰 연동 (컨트랙트 분석·배포 포함)",
                "블록 데이터 파싱 로직 개발·보정 및 트랜잭션 검증 처리",
                "잔고 검증(account balance, UTXO) 및 불일치 시 보정·리스캔 대응",
                "출금 오류 탐지·재처리 및 수수료 정책 개선 (가스비 평균 산출·최적 가스 전략 적용)",
                "입출금 통계·보고서 생성 및 운영 지표 대시보드 관리",
                "토큰 상장·상폐 프로세스 처리 (컨트랙트 검증, 지갑 연동, 잔고 이관)",
                "운영 문서화 및 노드·입출금 운영 계획 수립",
              ],
            },
          ],
        },
        {
          company: "주식회사 크립탈론코리아",
          period: "2024.04 ~ 2024.08 (5개월)",
          lede: "DeFi 지갑 개발과 DApp용 Solana 토큰 민팅 업무를 수행했습니다.",
          areas: [
            {
              title: "DeFi 지갑 개발",
              bullets: [
                "EVM 계열(Ethereum, BNB Smart Chain) 멀티체인 지갑 아키텍처 설계·구현",
                "지갑 생성·복구 기능 구현 (mnemonic 시드 기반 HD Wallet, Private Key import)",
                "네이티브 코인 및 ERC-20 / BEP-20 토큰 전송 트랜잭션 구성·서명·브로드캐스트",
                "NFT(ERC-721 / ERC-1155, BEP-721 / BEP-1155) 민팅·전송 기능 개발",
                "트랜잭션 상태 추적(pending → confirmed) 및 실패 시 재시도 로직 구현",
                "가스비 추정·사용자 수수료 UI 연동 처리",
              ],
            },
            {
              title: "Solana SPL Token 제어",
              bullets: [
                "SPL Token minting, burn, freeze, thaw 기능 구현",
                "토큰 메타데이터(이름, 심볼, URI) 설정·업데이트 처리",
                "Solana 클러스터(devnet/mainnet) 연결 구성 및 RPC 노드 관리",
                "트랜잭션 시뮬레이션·수수료 산출 및 서명 워크플로 구현",
              ],
            },
          ],
        },
        {
          company: "주식회사엔아이에프",
          period: "2022.04 ~ 2024.03 (2년)",
          lede: "메이저 자산 입출금 관리와 스테이킹 서비스 개발을 담당했습니다.",
          areas: [
            {
              title: "입출금 시스템",
              bullets: [
                "BTC, ETH, USDT, USDC, DAI 등 주요 자산의 입출금 백엔드 개발·유지보수 (Java, MySQL)",
                "입금 감지(블록 스캔·이벤트 리스닝), 출금 요청 검증·서명·브로드캐스트 파이프라인 운영",
                "수수료 부족 시 자동 알림(Push/Email) 및 핫월렛 수수료 절감 로직 적용",
                "입출금 모니터링 대시보드 구축 및 이상 거래 탐지·대응",
              ],
            },
            {
              title: "스테이킹 서비스",
              bullets: [
                "다수 체인 대상 staking / unstaking / claim-reward 트랜잭션 처리 로직 개발 (Java, MySQL, NestJS)",
                "스테이킹 프로토콜 버전 업그레이드 대응 (밸리데이터 설정 변경, 보상 계산 로직 갱신)",
                "스테이킹 상태·보상 모니터링 및 리포팅",
              ],
            },
            {
              title: "노드·인프라",
              bullets: [
                "상품 운영에 필요한 블록체인 풀노드 설치·유지보수 (AWS EC2)",
                "풀노드 동기화 상태 모니터링·알림(alert) 자동화 구성",
                "노드 버전 업데이트 및 하드포크 대응, 디스크·메모리 리소스 관리",
              ],
            },
            {
              title: "기타",
              bullets: ["이벤트·프론트엔드 요청에 따른 데이터 가공 및 API 개발", "블록체인 SDK 오픈소스 기여 (Near, Astar.js PR)"],
            },
          ],
        },
        {
          company: "유니맥스",
          period: "2017.10 ~ 2019.12 (2년 3개월)",
          lede: "개발팀 연구원. 방산장비 및 시험 소프트웨어 개발.",
          areas: [
            {
              title: "방산·시험 SW",
              bullets: [
                "방산장비 개발 — 장비 제어·시험 소프트웨어 개발 및 연동",
                "Test Application 개발 — 시험 자동화 및 데이터 수집·리포팅",
                "SW 신뢰성 시험 — 소프트웨어 품질·신뢰성 시험 수행",
              ],
            },
          ],
        },
        {
          company: "GYROZEN",
          period: "2015.09 ~ 2017.02 (1년 6개월)",
          lede: "개발팀 사원. 생명과학 장비 및 외주 개발 관리.",
          areas: [
            {
              title: "장비 개발·외주 관리",
              bullets: [
                "원심분리기 등 생명과학 장비 개발 — 장비 제어 SW 및 펌웨어 연동",
                "외주 하드웨어 관리 — 외주 개발 하드웨어 스펙·납기 관리",
                "외주 소프트웨어 관리 — 외주 개발 소프트웨어 검수·통합",
              ],
            },
          ],
        },
        {
          company: "(주)평생동반자 우리",
          period: "2015.01 ~ 2015.08 (8개월)",
          lede: "기술부 사원. 수입 안과 장비 유지보수.",
          areas: [
            {
              title: "장비 유지보수·지원",
              bullets: [
                "수입 안과 장비 유지보수 — 장비 점검·고장 대응 및 부품 교체",
                "하드웨어 점검, troubleshooting — 현장 점검 및 장애 원인 분석",
                "소프트웨어 업데이트 및 해외본사 메일링 — 펌웨어/SW 업데이트, 해외 본사와 기술 커뮤니케이션",
              ],
            },
          ],
        },
      ],
      othersLabel: "그 외 경력",
      othersSummary: "의료·방산 장비 유지보수 및 HW 제어",
      othersPeriod: "2015.01 ~ 2019.12 (4년 5개월, 교육 6개월 제외)",
    },
    projects: {
      title: "Projects",
      desc: "GitHub 프로필 기준, 공개(Public) 저장소만 표시합니다.",
      tab1: "Blockchains",
      tab2: "Hackathon",
      tab3: "Other",
      categories: {
        blockchains: [
          {
            name: "blockchain-node-guides",
            desc: "블록체인 노드 구축/운영 가이드 (Shell)",
            href: "https://blockchain-node-guides.vercel.app/",
            tag: "Shell",
            tags: ["Web"],
          },
          {
            name: "crypto-wallet-core",
            desc: "암호화폐 지갑 코어 (TypeScript)",
            href: "https://crypto-wallet-core.vercel.app/",
            tag: "TypeScript",
            tags: ["Web"],
          },
          {
            name: "blockchain-tech",
            desc: "블록체인 기술 예제/실습 (JavaScript)",
            href: "https://blockchain-tech.vercel.app/",
            tag: "JavaScript",
            tags: ["Web"],
          },
          {
            name: "sCtemplate",
            desc: "스마트 컨트랙트·블록체인 관련 템플릿 (HTML)",
            href: "https://sctemplate.vercel.app/",
            tag: "HTML",
            tags: ["Web"],
          },
          {
            name: "crypto-wiki",
            desc: "암호·블록체인 위키/문서",
            href: "https://crypto-wiki-zeta.vercel.app/",
            tag: "Wiki",
            tags: ["Web"],
          },
        ],
        hackathon: [
          {
            name: "sv.practice",
            desc: "Solana Pay 데모 스토어 (Johnny's shop)",
            href: "https://sv-practice.vercel.app/",
            tag: "Web",
            tags: ["Web"],
          },
        ],
        fullstack: [
          {
            name: "AboutMe",
            desc: "이 포트폴리오 웹사이트 (JavaScript)",
            href: "https://about-me-zeta-sand.vercel.app/",
            tag: "JavaScript",
            tags: ["Web"],
          },
          {
            name: "autoTrading",
            desc: "자동 매매 관련 프로젝트",
            href: "https://auto-trading-seven.vercel.app/",
            tag: "Web",
            tags: ["Web"],
          },
          {
            name: "telegram-bot",
            desc: "Telegram 봇",
            href: "https://github.com/johnnyji-dev/telegram-bot",
            tag: "GitHub",
            tags: [],
            items: ["announcement-broadcaster", "chinese banner", "message extractor"],
          },
          {
            name: "CourtAlami",
            desc: "테니스 코트 예약 현황 한눈에 보기",
            href: "https://courtalami.kr/",
            tag: "Web",
            tags: ["Web"],
          },
        ],
      },
    },
    skills: {
      title: "Skills",
      desc: "실무에서 자주 사용한 기술 스택입니다.",
      groups: [
        { title: "web3", items: ["Web3.js", "Ethers.js", "Viem", "Solidity", "ICON SDK JS", "Polkadot.js", "Near SDK JS", "BandChain.js"] },
        { title: "backend", items: ["NestJS", "Node.js", "Golang", "Rust", "Python", "Java", "MySQL"] },
        { title: "frontend", items: ["Next.js", "React", "TypeScript"] },
        { title: "infra", items: ["AWS", "Docker", "Kubernetes", "GCP", "Azure", "CI/CD"] },
      ],
    },
    education: {
      title: "Univ.",
      desc: "",
      items: [
        {
          period: "2009.03 - 2015.08",
          school: "연세대학교(원주)",
          major: "의용전자공학 전공 / 경영학 부전공",
          gpa: "(3.83/4.5)",
          bullets: [
            "국가 이공계 장학금 9학기 중 7학기 전액 수령",
            "휴대용 단말기용 외장 키패드 특허출원(2014)",
            "교내 캡스톤 디자인 경진대회 2회 수상(우수상, 장려상)",
          ],
        },
      ],
    },
    certificates: {
      title: "Certificates.",
      items: [
        { date: "2016.07", name: "정보처리기사", issuer: "한국산업인력공단" },
        { date: "2014.12", name: "의공기사", issuer: "한국산업인력공단" },
        { date: "2013.09", name: "AutoCAD 1급", issuer: "한국ATC센터" },
      ],
    },
    contact: {
      title: "Contact",
      desc: "연락은 GitHub 또는 이메일로 주시면 가장 빠릅니다.",
      linksTitle: "Links",
      email: "Email",
      emailValue: "johnnyji.dev@gmail.com",
      linkedinValue: "linkedin.com/in/johnny-ji-8a42a32b7",
      telegramValue: "@JohnnyBlck",
      noteTitle: "Note",
      noteP1: "국내/글로벌 채용 모두 고려해 한국어와 영어 콘텐츠를 함께 제공합니다.",
      noteP2: "링크(이메일/LinkedIn/Telegram)는 필요에 맞게 교체해주세요.",
    },
    quote: {
      text: "Consistently improving just 1% each day may seem small, but it is the most effective path to lasting progress.",
    },
    footer: { built: "Built with", star: "Star this project on GitHub" },
  },

  en: {
    brand: { role: "Full‑stack Blockchain Developer" },
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", certificates: "Certificates", contact: "Contact" },
    hero: {
      kicker: "Hi, 👋 (a.k.a. Johnny JI)",
      title: "Blockchain Developer",
      subtitle: "CeFi/DeFi · Node Infrastructure · Custody/Warehouse‑grade reliability",
      summary: "I build reliable node infrastructure and wallet, deposit/withdrawal, and staking transaction systems.",
      ctaProjects: "View projects",
      ctaContact: "Contact",
      h1: "Multi-mainnet node operations & upgrades (hard/soft forks)",
      h2: "Deposit/withdrawal pipelines, monitoring & incident response",
      h3: "Wallet & staking transaction systems (EVM + Solana)",
    },
    facts: {
      focus: "Focus",
      focusValue: "Node Infra · Wallet · Tx Systems",
      years: "Experience",
      yearsValue: "3y 11m+",
      yearsNote: "incl. 4y 5m in other roles",
      blockchainLabel: "Blockchain",
      othersRoleLabel: "Other roles",
      location: "Location",
      locationValue: "Korea / Global (Remote-friendly)",
      note: "This page supports Korean and English. Use the toggle to switch.",
    },
    about: {
      title: "About",
      desc: "Blockchain developer focused on production reliability.",
      profileTitle: "Profile",
      profileP1:
        "I have {duration} of experience across CeFi custody, DeFi wallets, staking, and blockchain node/infrastructure development & operations.",
      profileP2: "I care about building scalable, observable, and resilient blockchain services.",
      interestTitle: "Interests",
      interest1: "Operational stability of crypto services and understanding user behavior and needs",
      interest2: "DeFi services, smart contract audit",
      interest3: "Conceptualizing dApps",
    },
    exp: {
      title: "Experience",
      desc: "Written around responsibilities and outcomes (no internal system/project names).",
      items: [
        {
          company: "DNSever",
          period: "Sep 2024 — Present ({duration})",
          periodStart: "2024-09",
          lede: "Owned multi-chain node operations and deposit/withdrawal system development & operations.",
          areas: [
            {
              title: "Node Operations & Infrastructure",
              bullets: [
                "Installed, configured, and operated full nodes across 70+ mainnets (EVM, Cosmos SDK, Substrate, DAG, etc.)",
                "Planned and executed zero-downtime upgrades for hard forks and soft forks",
                "Built monitoring and alerting for sync health, block height lag, and peer issues",
                "Performed incident triage (logs/RPC checks), recovery, re-installs, and snapshot restores",
                "Managed server resources (disk expansion, migrations, re-deployments)",
                "Integrated public RPC endpoints with health checks and automated failover",
                "Hardened servers (firewalls, SSH key management, port restrictions, access control)",
              ],
            },
            {
              title: "Deposit/Withdrawal Systems",
              bullets: [
                "Built and operated pipelines for coin/token deposits and withdrawals; integrated new chains/tokens (incl. contract analysis/deployment)",
                "Implemented and tuned block parsing and transaction validation logic",
                "Verified balances (account-based & UTXO) and handled mismatches with rescans and reconciliation",
                "Improved fee strategies and retry flows for failed withdrawals (e.g., gas price aggregation/optimization)",
                "Produced operational metrics, dashboards, and reporting",
                "Supported listing/delisting flows (contract verification, wallet integration, balance migration)",
                "Documented runbooks and created operational plans for nodes and transaction systems",
              ],
            },
          ],
        },
        {
          company: "Cryptalon Korea",
          period: "Apr 2024 — Aug 2024",
          lede: "Built DeFi wallet features and handled Solana token minting for DApps.",
          areas: [
            {
              title: "DeFi Wallet Development",
              bullets: [
                "Designed and implemented multi-chain wallet architecture for EVM networks (Ethereum, BNB Smart Chain)",
                "Implemented wallet creation/recovery (mnemonic-based HD wallets, private key import)",
                "Constructed, signed, and broadcast native and ERC-20/BEP-20 transfers",
                "Implemented NFT mint/transfer flows (ERC-721/1155, BEP-721/1155)",
                "Tracked transaction lifecycle (pending → confirmed) with retry strategies",
                "Implemented gas estimation and fee UX integration",
              ],
            },
            {
              title: "Solana SPL Token Control",
              bullets: [
                "Implemented SPL token mint/burn/freeze/thaw",
                "Handled token metadata (name, symbol, URI) updates",
                "Managed RPC connectivity across clusters (devnet/mainnet)",
                "Implemented signing workflows with fee estimation and simulation where applicable",
              ],
            },
          ],
        },
        {
          company: "NIF",
          period: "Apr 2022 — Mar 2024",
          lede: "Built custody-grade deposit/withdrawal systems for major assets and developed staking services.",
          areas: [
            {
              title: "Deposit/Withdrawal Systems",
              bullets: [
                "Developed and maintained backends for major assets (BTC, ETH, USDT, USDC, DAI, etc.) (Java, MySQL)",
                "Operated deposit detection (block scans/event listening) and withdrawal validation/sign/broadcast pipelines",
                "Implemented low-fee strategies and alerts for insufficient fees (Push/Email)",
                "Built monitoring dashboards and handled abnormal transaction triage",
              ],
            },
            {
              title: "Staking Services",
              bullets: [
                "Implemented staking/unstaking/claim-reward transaction logic across multiple chains (Java, MySQL, NestJS)",
                "Handled protocol upgrades (validator config changes, reward calculation updates)",
                "Monitored staking states and rewards; produced reports",
              ],
            },
            {
              title: "Nodes & Infrastructure",
              bullets: [
                "Installed and maintained full nodes for production products (AWS EC2)",
                "Automated sync monitoring and alerts",
                "Managed upgrades, fork 대응, and compute/storage resources",
              ],
            },
            {
              title: "Other",
              bullets: ["Built APIs for internal requests and data processing", "Open-source contributions to blockchain SDKs (Near, Astar.js PRs)"],
            },
          ],
        },
        {
          company: "Unimax",
          period: "Oct 2017 — Dec 2019",
          lede: "R&D Engineer, Development Team. Defense equipment and test software development.",
          areas: [
            {
              title: "Defense & Test SW",
              bullets: [
                "Defense equipment development — control and test software development and integration",
                "Test application development — test automation, data collection, and reporting",
                "Software reliability testing — quality and reliability testing",
              ],
            },
          ],
        },
        {
          company: "GYROZEN",
          period: "Sep 2015 — Feb 2017",
          lede: "Developer, Development Team. Life-science equipment and outsourced HW/SW management.",
          areas: [
            {
              title: "Equipment & Outsourcing",
              bullets: [
                "Centrifuge and life-science equipment development — control SW and firmware integration",
                "Outsourced hardware management — specs and delivery management",
                "Outsourced software management — acceptance testing and integration",
              ],
            },
          ],
        },
        {
          company: "Amaris (Lifetime Partner)",
          period: "Jan 2015 — Aug 2015",
          lede: "Technical staff. Maintenance of imported ophthalmic equipment.",
          areas: [
            {
              title: "Equipment Maintenance & Support",
              bullets: [
                "Maintenance of imported ophthalmic equipment — inspection, troubleshooting, parts replacement",
                "Hardware inspection and troubleshooting — on-site checks and root-cause analysis",
                "Software updates and overseas HQ communication — firmware/SW updates, technical correspondence",
              ],
            },
          ],
        },
      ],
      othersLabel: "Other experience",
      othersSummary: "Medical & defense equipment maintenance, HW control",
      othersPeriod: "Jan 2015 — Dec 2019 (4y 5m, excl. 6m education)",
    },
    projects: {
      title: "Projects",
      desc: "Based on my GitHub profile. Public repositories only.",
      tab1: "Blockchains",
      tab2: "Hackathon",
      tab3: "Other",
      categories: {
        blockchains: [
          {
            name: "blockchain-node-guides",
            desc: "Blockchain node setup & operations guides (Shell)",
            href: "https://blockchain-node-guides.vercel.app/",
            tag: "Shell",
            tags: ["Web"],
          },
          {
            name: "crypto-wallet-core",
            desc: "Crypto wallet core library (TypeScript)",
            href: "https://crypto-wallet-core.vercel.app/",
            tag: "TypeScript",
            tags: ["Web"],
          },
          {
            name: "blockchain-tech",
            desc: "Blockchain tech experiments/examples (JavaScript)",
            href: "https://blockchain-tech.vercel.app/",
            tag: "JavaScript",
            tags: ["Web"],
          },
          {
            name: "sCtemplate",
            desc: "Smart contract / blockchain template (HTML)",
            href: "https://sctemplate.vercel.app/",
            tag: "HTML",
            tags: ["Web"],
          },
          {
            name: "crypto-wiki",
            desc: "Crypto & blockchain wiki/docs",
            href: "https://crypto-wiki-zeta.vercel.app/",
            tag: "Wiki",
            tags: ["Web"],
          },
        ],
        hackathon: [
          {
            name: "sv.practice",
            desc: "Solana Pay demo store (Johnny's shop)",
            href: "https://sv-practice.vercel.app/",
            tag: "Web",
            tags: ["Web"],
          },
        ],
        fullstack: [
          {
            name: "AboutMe",
            desc: "This portfolio website (JavaScript)",
            href: "https://about-me-zeta-sand.vercel.app/",
            tag: "JavaScript",
            tags: ["Web"],
          },
          {
            name: "autoTrading",
            desc: "Auto trading project",
            href: "https://auto-trading-seven.vercel.app/",
            tag: "Web",
            tags: ["Web"],
          },
          {
            name: "telegram-bot",
            desc: "Telegram bot",
            href: "https://github.com/johnnyji-dev/telegram-bot",
            tag: "GitHub",
            tags: [],
            items: ["announcement-broadcaster", "chinese banner", "message extractor"],
          },
          {
            name: "CourtAlami",
            desc: "Tennis court availability at a glance",
            href: "https://courtalami.kr/",
            tag: "Web",
            tags: ["Web"],
          },
        ],
      },
    },
    skills: {
      title: "Skills",
      desc: "Technologies I use frequently in production.",
      groups: [
        { title: "web3", items: ["Web3.js", "Ethers.js", "Viem", "Solidity", "ICON SDK JS", "Polkadot.js", "Near SDK JS", "BandChain.js"] },
        { title: "backend", items: ["NestJS", "Node.js", "Golang", "Rust", "Python", "Java", "MySQL"] },
        { title: "frontend", items: ["Next.js", "React", "TypeScript"] },
        { title: "infra", items: ["AWS", "Docker", "Kubernetes", "GCP", "Azure", "CI/CD"] },
      ],
    },
    education: {
      title: "Univ.",
      desc: "",
      items: [
        {
          period: "2009.03 - 2015.08",
          school: "Yonsei University (Wonju)",
          major: "Applied Electronic Engineering Major / Business Administration Minor",
          gpa: "(3.83/4.5)",
          bullets: [
            "Received full national scholarship for 7 out of 9 semesters in STEM fields",
            "Patent application for external keypad for portable terminals (2014)",
            "Awarded twice in campus Capstone Design Competition (Excellence Award, Encouragement Award)",
          ],
        },
      ],
    },
    certificates: {
      title: "Certificates.",
      items: [
        { date: "2016.07", name: "Information Processing Engineer", issuer: "HRD Korea" },
        { date: "2014.12", name: "Biomedical Engineer", issuer: "HRD Korea" },
        { date: "2013.09", name: "AutoCAD Level 1", issuer: "Korea ATC Center" },
      ],
    },
    contact: {
      title: "Contact",
      desc: "GitHub or email works best.",
      linksTitle: "Links",
      email: "Email",
      emailValue: "johnnyji.dev@gmail.com",
      linkedinValue: "linkedin.com/in/johnny-ji-8a42a32b7",
      telegramValue: "@JohnnyBlck",
      noteTitle: "Note",
      noteP1: "This portfolio is written in both Korean and English for domestic and global opportunities.",
      noteP2: "Replace the placeholders (email/LinkedIn/Telegram) with your real links.",
    },
    quote: {
      text: "Consistently improving just 1% each day may seem small, but it is the most effective path to lasting progress.",
    },
    footer: { built: "Built with", star: "Star this project on GitHub" },
  },
};

export function getInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEY_LANG);
  if (saved === "ko" || saved === "en") return saved;
  const n = navigator.language || "";
  return n.toLowerCase().startsWith("ko") ? "ko" : "en";
}
