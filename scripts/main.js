/* Portfolio v2: bilingual (KO/EN) + dynamic sections.
 * Source of truth: content.md (manually mirrored here for website rendering).
 */

const STORAGE_KEY_LANG = "portfolio_lang";

const DATA = {
  ko: {
    brand: { role: "블록체인 개발자" },
    nav: { about: "소개", experience: "경력", projects: "프로젝트", skills: "스킬", contact: "연락처" },
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
      location: "Location",
      locationValue: "Korea / Global (Remote-friendly)",
      note: "이 페이지는 한국어와 영어를 지원합니다. 토글로 전환할 수 있어요.",
    },
    about: {
      title: "About",
      desc: "저는 블록체인 개발자 Johnny 입니다.",
      profileTitle: "Profile",
      profileP1:
        "총 3년 11개월 동안 CeFi Custody, DeFi 지갑, 스테이킹, 블록체인 노드·인프라 개발 및 유지보수를 담당했습니다.",
      profileP2: "안정적인 블록체인 서비스 구축과 풀스택 성장을 지향합니다.",
      interestTitle: "Interests",
      interest1: "BaaS(Blockchain as a Service)와 DeFi 인프라",
      interest2: "RWA(Real World Asset) 기반 서비스",
      interest3: "운영 안정성(관측성·자동복구·비용최적화)",
    },
    exp: {
      title: "Experience",
      desc: "회사 내부 시스템명 없이, 역할과 경험 중심으로 정리했습니다.",
      items: [
        {
          company: "디앤에스에버",
          period: "2024.09 ~ 재직 중 (1년 6개월)",
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
      ],
    },
    projects: {
      title: "Projects",
      desc: "GitHub 공개 저장소 기준으로 정리했습니다.",
      tab1: "Blockchains",
      tab2: "Other",
      categories: {
        blockchains: [
          {
            name: "blockchain-node-guides",
            desc: "블록체인 노드 구축/운영 가이드 (Shell)",
            href: "https://github.com/johnnyji-dev/blockchain-node-guides",
            tag: "Shell",
          },
          {
            name: "crypto-wallet-core",
            desc: "암호화폐 지갑 코어 (TypeScript)",
            href: "https://github.com/johnnyji-dev/crypto-wallet-core",
            tag: "TypeScript",
          },
        ],
        fullstack: [
          {
            name: "AboutMe",
            desc: "이 포트폴리오 웹사이트 (JavaScript)",
            href: "https://github.com/johnnyji-dev/AboutMe",
            tag: "JavaScript",
          },
          {
            name: "johnnyji-dev",
            desc: "GitHub 프로필 README",
            href: "https://github.com/johnnyji-dev/johnnyji-dev",
            tag: "Profile",
          },
        ],
      },
    },
    skills: {
      title: "Skills",
      desc: "실무에서 자주 사용한 기술 스택입니다.",
      groups: [
        { title: "web3", items: ["Web3.js", "ICON SDK JS", "Polkadot.js", "Near SDK JS", "BandChain.js"] },
        { title: "backend", items: ["NestJS", "Node.js", "Java", "MySQL"] },
        { title: "frontend", items: ["Next.js", "React"] },
      ],
    },
    contact: {
      title: "Contact",
      desc: "연락은 GitHub 또는 이메일로 주시면 가장 빠릅니다.",
      linksTitle: "Links",
      email: "Email",
      emailValue: "johnnyji.dev@gmail.com",
      linkedinValue: "프로필 URL을 추가해주세요",
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
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
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
      location: "Location",
      locationValue: "Korea / Global (Remote-friendly)",
      note: "This page supports Korean and English. Use the toggle to switch.",
    },
    about: {
      title: "About",
      desc: "Blockchain developer focused on production reliability.",
      profileTitle: "Profile",
      profileP1:
        "I have 3 years 11 months of experience across CeFi custody, DeFi wallets, staking, and blockchain node/infrastructure development & operations.",
      profileP2: "I care about building scalable, observable, and resilient blockchain services.",
      interestTitle: "Interests",
      interest1: "BaaS (Blockchain as a Service) and DeFi infrastructure",
      interest2: "RWA (Real World Asset) products",
      interest3: "Operational excellence (observability, auto-recovery, cost optimization)",
    },
    exp: {
      title: "Experience",
      desc: "Written around responsibilities and outcomes (no internal system/project names).",
      items: [
        {
          company: "DNSever",
          period: "Sep 2024 — Present",
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
      ],
    },
    projects: {
      title: "Projects",
      desc: "Based on my public GitHub repositories.",
      tab1: "Blockchains",
      tab2: "Other",
      categories: {
        blockchains: [
          { name: "blockchain-node-guides", desc: "Blockchain node setup & operations guides (Shell)", href: "https://github.com/johnnyji-dev/blockchain-node-guides", tag: "Shell" },
          { name: "crypto-wallet-core", desc: "Crypto wallet core library (TypeScript)", href: "https://github.com/johnnyji-dev/crypto-wallet-core", tag: "TypeScript" },
        ],
        fullstack: [
          { name: "AboutMe", desc: "This portfolio website (JavaScript)", href: "https://github.com/johnnyji-dev/AboutMe", tag: "JavaScript" },
          { name: "johnnyji-dev", desc: "GitHub profile README", href: "https://github.com/johnnyji-dev/johnnyji-dev", tag: "Profile" },
        ],
      },
    },
    skills: {
      title: "Skills",
      desc: "Technologies I use frequently in production.",
      groups: [
        { title: "web3", items: ["Web3.js", "ICON SDK JS", "Polkadot.js", "Near SDK JS", "BandChain.js"] },
        { title: "backend", items: ["NestJS", "Node.js", "Java", "MySQL"] },
        { title: "frontend", items: ["Next.js", "React"] },
      ],
    },
    contact: {
      title: "Contact",
      desc: "GitHub or email works best.",
      linksTitle: "Links",
      email: "Email",
      emailValue: "johnnyji.dev@gmail.com",
      linkedinValue: "Add your profile URL",
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

function getInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEY_LANG);
  if (saved === "ko" || saved === "en") return saved;
  const n = navigator.language || "";
  return n.toLowerCase().startsWith("ko") ? "ko" : "en";
}

function setLangToggleUI(lang) {
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  const pills = btn.querySelectorAll(".lang-pill");
  if (pills.length < 2) return;

  if (lang === "ko") {
    pills[0].classList.remove("is-muted");
    pills[1].classList.add("is-muted");
  } else {
    pills[0].classList.add("is-muted");
    pills[1].classList.remove("is-muted");
  }
}

function applyI18n(lang) {
  const dict = DATA[lang];
  document.documentElement.lang = lang;
  setLangToggleUI(lang);

  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = key.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), dict);
    if (typeof value === "string") el.textContent = value;
  });
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (typeof text === "string") node.textContent = text;
  return node;
}

function renderExperience(lang) {
  const root = document.getElementById("experienceList");
  if (!root) return;
  root.innerHTML = "";

  const items = DATA[lang].exp.items;
  items.forEach((item) => {
    const card = el("article", "exp-card");

    const top = el("div", "exp-top");
    const h = el("h3", "exp-company", item.company);
    const p = el("div", "exp-period", item.period);
    top.append(h, p);

    const lede = el("p", "exp-lede", item.lede);

    const areaWrap = el("div", "exp-area");
    item.areas.forEach((a) => {
      const title = el("h4", "", a.title);
      const ul = document.createElement("ul");
      a.bullets.forEach((b) => ul.appendChild(el("li", "", b)));
      areaWrap.append(title, ul);
    });

    card.append(top, lede, areaWrap);
    root.appendChild(card);
  });
}

function renderProjects(lang, category) {
  const root = document.getElementById("projectsGrid");
  if (!root) return;
  root.innerHTML = "";

  const items = DATA[lang].projects.categories[category] || [];
  items.forEach((p) => {
    const a = document.createElement("a");
    a.className = "project-card";
    a.href = p.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    a.appendChild(el("h3", "project-name", p.name));
    a.appendChild(el("p", "project-desc", p.desc));

    const meta = el("div", "project-meta");
    meta.appendChild(el("span", "pill", p.tag));
    meta.appendChild(el("span", "pill", "GitHub"));
    a.appendChild(meta);

    root.appendChild(a);
  });
}

function renderSkills(lang) {
  const root = document.getElementById("skillsGrid");
  if (!root) return;
  root.innerHTML = "";

  const groups = DATA[lang].skills.groups;
  groups.forEach((g) => {
    const card = el("div", "skill-card");
    card.appendChild(el("h3", "card-title", g.title));

    const chips = el("div", "chips");
    g.items.forEach((it) => chips.appendChild(el("span", "chip", it)));

    card.appendChild(chips);
    root.appendChild(card);
  });
}

function setupProjectTabs(state) {
  const tabs = document.querySelectorAll(".tab[data-tab]");
  let current = "blockchains";

  const setActive = (next) => {
    current = next;
    tabs.forEach((t) => {
      const isActive = t.getAttribute("data-tab") === next;
      t.classList.toggle("is-active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    renderProjects(state.lang, current);
  };

  tabs.forEach((t) => {
    t.addEventListener("click", () => setActive(t.getAttribute("data-tab")));
  });

  setActive(current);
  return () => setActive(current);
}

function init() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const state = { lang: getInitialLang() };
  localStorage.setItem(STORAGE_KEY_LANG, state.lang);

  applyI18n(state.lang);
  renderExperience(state.lang);
  renderSkills(state.lang);

  const rerenderProjects = setupProjectTabs(state);

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      state.lang = state.lang === "ko" ? "en" : "ko";
      localStorage.setItem(STORAGE_KEY_LANG, state.lang);
      applyI18n(state.lang);
      renderExperience(state.lang);
      renderSkills(state.lang);
      rerenderProjects();
    });
  }
}

document.addEventListener("DOMContentLoaded", init);

