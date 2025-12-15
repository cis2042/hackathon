import { ContentData } from './types';

export const Content: ContentData = {
  zh: {
    nav: {
      home: "首頁",
      about: "活動總覽",
      mechanism: "Build to Earn",
      tracks: "核心賽道",
      specs: "技術架構",
      criteria: "評選標準",
      register: "立即報名"
    },
    hero: {
      edition: "v7.3 (Computable Human Edition)",
      title: "Twin3 Genesis Hackathon 2026",
      subtitle: "構建可計算的人類矩陣",
      description: "行動代號：Genesis Matrix | 協議層創世黑客松",
      cta: "加入矩陣",
      secondary: "查看文檔"
    },
    overview: {
      title: "活動總覽",
      subtitle: "Event Overview",
      content1: "隨著 AI 的指數級進化，人類社會正步入與矽基智能共存的新紀元。Twin3 協議致力於實現可運算人類的技術，透過獨創的 256 維人類特徵矩陣，構建一個「可計算的人類矩陣」。",
      content2: "你的使命：打造數位感官、定義演算價值、驗證真實存在、並獲取協議主權。"
    },
    mechanism: {
      title: "核心協議機制",
      subtitle: "Build to Earn",
      desc: "不同於傳統黑客松的一次性獎金，我們將開發者的技術貢獻轉化為可持續的鏈上權益。",
      cards: [
        {
          title: "技術貢獻證明 (PoC)",
          icon: "Zap",
          desc: "每當有真實用戶透過您的應用完成數據上鏈，智能合約將自動結算 100 $PoW3 至開發者錢包。無需人工審核，代碼即法律。"
        },
        {
          title: "永久價值歸屬",
          icon: "Share2",
          desc: "開發者不再是外包工。用戶透過您的 Connector 進入生態後，其錢包將與您永久綁定。未來數據交易產生的 10% 生態紅利將自動回饋給您。"
        }
      ]
    },
    tracks: {
      title: "賽道設置",
      subtitle: "Tracks & Challenges",
      list: [
        {
          id: "01",
          name: "Twin3 Soul Matrix Builder",
          tag: "The Ingest Track",
          goal: "構建數據管道",
          desc: "開發瀏覽器擴充功能、IoT 橋接器或通訊機器人，將 Web2/IoT 行為數據轉化為標準化的 16 進制矩陣。",
          icon: "Database"
        },
        {
          id: "02",
          name: "Human Experience Exchange",
          tag: "The Utility Track",
          goal: "創造商業價值",
          desc: "利用人類數值 DNA 開發精準金融服務、個人化 AI 代理或數據變現平台，讓數據產生流動價值。",
          icon: "Cpu"
        },
        {
          id: "03",
          name: "zk Humanity Index Integration",
          tag: "The Verification Track",
          goal: "真人驗證整合",
          desc: "利用 zk Humanity Verification SDK，設計抗女巫攻擊機制或遊戲化驗證，證明「我是真人」而不洩漏隱私。",
          icon: "Shield"
        }
      ]
    },
    tech: {
      title: "技術與提交",
      subtitle: "Architecture & Standards",
      api_title: "API 規範",
      submission_title: "提交規範",
      api_desc: "所有數據需轉化為標準的十六進制矩陣格式。我們提供 Matrix Builder API, Exchange API 以及 zk Verification SDK。",
      sub_desc: "Web 應用需包含前端、後端及 Dockerfile；IoT 項目需包含固件與接線圖；瀏覽器擴充需符合 Manifest V3。"
    },
    criteria: {
      title: "評選標準",
      subtitle: "Evaluation Criteria",
      items: [
        { label: "技術完整性", weight: "50%", desc: "API 集成正確性、數據轉換邏輯、資安防護。" },
        { label: "真實效用與增長", weight: "20%", desc: "解決實際問題，是否有真實數據流動。" },
        { label: "創新深度", weight: "20%", desc: "未被發現的高價值數據維度、商業模式創新。" },
        { label: "開發體驗", weight: "10%", desc: "將複雜 Web3 交互封裝為流暢體驗。" }
      ]
    },
    footer: {
      rights: "© 2026 Twin3 Protocol. All Rights Reserved.",
      code: "Genesis Matrix / v7.3"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "Overview",
      mechanism: "Build to Earn",
      tracks: "Tracks",
      specs: "Tech Specs",
      criteria: "Criteria",
      register: "Register Now"
    },
    hero: {
      edition: "v7.3 (Computable Human Edition)",
      title: "Twin3 Genesis Hackathon 2026",
      subtitle: "Building the Computable Human Matrix",
      description: "Codename: Genesis Matrix | Protocol Layer Genesis Hackathon",
      cta: "Join the Matrix",
      secondary: "Documentation"
    },
    overview: {
      title: "Event Overview",
      subtitle: "The Rise of Computable Human",
      content1: "As AI evolves exponentially, we enter a new era of coexistence with silicon-based intelligence. The Twin3 protocol is dedicated to realizing 'computable human' technology, constructing a 'Computable Human Matrix' via a unique 256-dimension feature matrix.",
      content2: "Your Mission: Build Digital Senses, Define Algorithmic Value, Verify Existence, and Claim Sovereignty."
    },
    mechanism: {
      title: "Core Mechanism",
      subtitle: "Build to Earn",
      desc: "Unlike traditional hackathons with one-time prizes, Twin3 transforms developer contributions into sustainable on-chain equity.",
      cards: [
        {
          title: "Proof of Contribution (PoC)",
          icon: "Zap",
          desc: "Every time a real user mints data via your app, the smart contract automatically settles 100 $PoW3 to your wallet. No manual review, code is law."
        },
        {
          title: "Perpetual Value Attribution",
          icon: "Share2",
          desc: "Developers are owners of data pipelines. Users onboarded via your Connector are permanently bound to you. You earn 10% ecosystem dividends from their future data yield."
        }
      ]
    },
    tracks: {
      title: "Tracks",
      subtitle: "Technical Challenges",
      list: [
        {
          id: "01",
          name: "Twin3 Soul Matrix Builder",
          tag: "The Ingest Track",
          goal: "Build Data Pipelines",
          desc: "Develop Chrome Extensions, IoT Bridges, or Bots to feed Web2/IoT behavior data into the standardized Hexadecimal Matrix.",
          icon: "Database"
        },
        {
          id: "02",
          name: "Human Experience Exchange",
          tag: "The Utility Track",
          goal: "Create Utility Value",
          desc: "Use Human Numerical DNA to build precision finance, personalized AI agents, or data monetization platforms.",

          icon: "Cpu"
        },
        {
          id: "03",
          name: "zk Humanity Index Integration",
          tag: "The Verification Track",
          goal: "Verification Integration",
          desc: "Integrate Twin3 zk Humanity Verification SDK to design anti-sybil mechanisms or gamified verification without compromising privacy.",
          icon: "Shield"
        }
      ]
    },
    tech: {
      title: "Tech & Submission",
      subtitle: "Architecture & Standards",
      api_title: "API Standards",
      submission_title: "Submission Standards",
      api_desc: "All data must be converted to the standard hexadecimal matrix format. We provide Matrix Builder API, Exchange API, and zk Verification SDK.",
      sub_desc: "Web Apps need Frontend/Backend + Dockerfile; IoT needs Firmware + Connector; Extensions must follow Manifest V3."
    },
    criteria: {
      title: "Evaluation",
      subtitle: "Criteria",
      items: [
        { label: "Technical Integrity", weight: "50%", desc: "API integration, data logic, security, code structure." },
        { label: "Utility & Growth", weight: "20%", desc: "Solving real problems, real data flow validation." },
        { label: "Innovation Depth", weight: "20%", desc: "New data dimensions, novel business models." },
        { label: "Developer Experience", weight: "10%", desc: "Encapsulating Web3 complexity into smooth UX." }
      ]
    },
    footer: {
      rights: "© 2026 Twin3 Protocol. All Rights Reserved.",
      code: "Genesis Matrix / v7.3"
    }
  }
};