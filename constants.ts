import { ContentData } from './types';

export const Content: ContentData = {
  zh: {
    nav: {
      home: "首頁",
      about: "活動總覽",
      mechanism: "Build to Earn",
      tracks: "核心賽道",
      bootcamp: "議程",
      specs: "技術架構",
      criteria: "評選標準",
      register: "立即報名"
    },
    hero: {
      edition: "v7.3 (Computable Human Edition)",
      title: "twin3 Genesis Hackathon 2026",
      subtitle: "構建可計算的人類矩陣",
      description: "行動代號：Genesis Matrix | 協議層創世黑客松",
      cta: "加入矩陣",
      secondary: "查看文檔"
    },
    overview: {
      title: "活動總覽",
      subtitle: "Event Overview",
      content1: "隨著 AI 的指數級進化，人類社會正步入與矽基智能共存的新紀元。twin3 協議致力於實現可運算人類的技術，透過獨創的 256 維人類特徵矩陣，構建一個「可計算的人類矩陣」。",
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
          name: "twin3 Soul Matrix Builder",
          tag: "The Ingest Track",
          goal: "構建數據管道",
          desc: "開發瀏覽器擴充功能、IoT 橋接器或通訊機器人，將 Web2/IoT 行為數據轉化為標準化的 16 進制矩陣。",
          icon: "Database",
          prize: "獎金：$1,000 USD"
        },
        {
          id: "02",
          name: "Human Experience Exchange",
          tag: "The Utility Track",
          goal: "創造商業價值",
          desc: "利用人類數值 DNA 開發精準金融服務、個人化 AI 代理或數據變現平台，讓數據產生流動價值。",
          icon: "Cpu",
          prize: "獎金：$1,000 USD"
        },
        {
          id: "03",
          name: "zk Humanity Index Integration",
          tag: "The Verification Track",
          goal: "真人驗證整合",
          desc: "利用 zk Humanity Verification SDK，設計抗女巫攻擊機制或遊戲化驗證，證明「我是真人」而不洩漏隱私。",
          icon: "Shield",
          prize: "獎金：$1,000 USD"
        }
      ]
    },
    bootcamp: {
      title: "Bootcamp 議程",
      subtitle: "Genesis Bootcamp",
      date: "2026年 Q1 (具體日期待公告)",
      location: "線上直播 (Discord & YouTube Live)",
      sessions: [
        {
          label: "上午場",
          title: "第一單元：宏觀願景與經濟模型",
          items: [
            {
              time: "10:00 AM - 10:45 AM",
              title: "開場主題演講：AI 經濟的崛起：從「人類體驗」到「可運算資產」",
              speaker: "Ming Wen (twin3 創辦人)",
              desc: "與我們的創辦人一起，深入探討 GenAI 革命帶來的結構性轉變，以及「可運算人類」為何是這個新時代最關鍵的基礎設施。"
            },
            {
              time: "10:45 AM - 11:30 AM",
              title: "核心理念：「Build to Earn」- 社群共創的經濟與治理新規範",
              speaker: "Ming Wen (twin3 協議創辦人)",
              desc: "了解 twin3 如何通過「貢獻證明 (PoC)」和「數據版稅 (Data Royalties)」模型，將您的代碼貢獻轉化為可持續的鏈上資產，並共同治理這個新生態。"
            },
            {
              time: "11:30 AM - 12:00 PM",
              title: "技術總覽：Twin Matrix 剖析 - 靈魂、身體與交易所的架構",
              speaker: "K66 (twin3 核心貢獻者)",
              desc: "從宏觀視角，快速了解 twin3 技術棧：靈魂 (Twin Matrix)、身體 (Personal Agent) 與交易所 (Exchange) 是如何協同工作的。"
            }
          ]
        },
        {
          label: "下午場",
          title: "第二單元：三大賽道核心技術深度解析",
          items: [
            {
              time: "1:00 PM - 2:00 PM",
              title: "賽道一工作坊：打造你的第一個數據連接器 (Builder API 實戰)",
              speaker: "Leon (twin3 核心工程師)",
              desc: "這是一場動手實作的編碼環節。我們將從零開始，構建一個 Chrome 插件，將網頁數據轉譯並注入 Twin Matrix。"
            },
            {
              time: "2:00 PM - 3:00 PM",
              title: "賽道二創意工作坊：編織你的靈魂矩陣 (Soul Matrix 設計)",
              speaker: "Alice (twin3 產品貢獻者)",
              desc: "這是一場創意風暴。我們將探索如何定義新的人類特質，並將「DeFi 風險偏好」或「遊戲玩家戰略思維」等概念，轉化為可驗證的數據結構。【賽道二：應用價值】的推薦課程。"
            },
            {
              time: "3:00 PM - 4:00 PM",
              title: "賽道三工作坊：集成 ZK 人性指數 (ZK SDK 實戰)",
              speaker: "June (twin3 ZK工程師)",
              desc: "這是一份 ZK SDK 的實踐指南。我們將構建一個具備抗女巫攻擊能力的 DApp，在不犧牲用戶隱私的前提下，驗證用戶的憑證。【賽道三：驗證集成】的必修課。"
            },
            {
              time: "4:00 PM - 5:00 PM",
              title: "AMA：與核心團隊面對面",
              speaker: "Core Team",
              desc: "這是你提問的最佳時機。我們的創辦人、工程師與產品負責人將在線上，親自回答你在黑客松開始前遇到的任何問題。"
            }
          ]
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
      rights: "© 2026 twin3 Protocol. All Rights Reserved.",
      code: "Genesis Matrix / v7.3"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "Overview",
      mechanism: "Build to Earn",
      tracks: "Tracks",
      bootcamp: "Agenda",
      specs: "Tech Specs",
      criteria: "Criteria",
      register: "Register Now"
    },
    hero: {
      edition: "v7.3 (Computable Human Edition)",
      title: "twin3 Genesis Hackathon 2026",
      subtitle: "Building the Computable Human Matrix",
      description: "Codename: Genesis Matrix | Protocol Layer Genesis Hackathon",
      cta: "Join the Matrix",
      secondary: "Documentation"
    },
    overview: {
      title: "Event Overview",
      subtitle: "The Rise of Computable Human",
      content1: "As AI evolves exponentially, we enter a new era of coexistence with silicon-based intelligence. The twin3 protocol is dedicated to realizing 'computable human' technology, constructing a 'Computable Human Matrix' via a unique 256-dimension feature matrix.",
      content2: "Your Mission: Build Digital Senses, Define Algorithmic Value, Verify Existence, and Claim Sovereignty."
    },
    mechanism: {
      title: "Core Mechanism",
      subtitle: "Build to Earn",
      desc: "Unlike traditional hackathons with one-time prizes, twin3 transforms developer contributions into sustainable on-chain equity.",
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
          name: "twin3 Soul Matrix Builder",
          tag: "The Ingest Track",
          goal: "Build Data Pipelines",
          desc: "Develop Chrome Extensions, IoT Bridges, or Bots to feed Web2/IoT behavior data into the standardized Hexadecimal Matrix.",
          icon: "Database",
          prize: "Prize: $1,000 USD"
        },
        {
          id: "02",
          name: "Human Experience Exchange",
          tag: "The Utility Track",
          goal: "Create Utility Value",
          desc: "Use Human Numerical DNA to build precision finance, personalized AI agents, or data monetization platforms.",
          icon: "Cpu",
          prize: "Prize: $1,000 USD"
        },
        {
          id: "03",
          name: "zk Humanity Index Integration",
          tag: "The Verification Track",
          goal: "Verification Integration",
          desc: "Integrate twin3 zk Humanity Verification SDK to design anti-sybil mechanisms or gamified verification without compromising privacy.",
          icon: "Shield",
          prize: "Prize: $1,000 USD"
        }
      ]
    },
    bootcamp: {
      title: "Bootcamp Agenda",
      subtitle: "Genesis Bootcamp",
      date: "2026 Q1 (Date TBA)",
      location: "Online (Discord & YouTube Live)",
      sessions: [
        {
          label: "Morning Session",
          title: "Unit 1: Macro Vision & Economic Model",
          items: [
            {
              time: "10:00 AM - 10:45 AM",
              title: "Keynote: Rise of AI Economy - From 'Human Experience' to 'Computable Assets'",
              speaker: "Ming Wen (twin3 Founder)",
              desc: "Join our founder to explore the structural shifts of the GenAI revolution and why the 'Computable Human' is the critical infrastructure of this new era."
            },
            {
              time: "10:45 AM - 11:30 AM",
              title: "Core Philosophy: 'Build to Earn' - New Norms for Economy & Governance",
              speaker: "Ming Wen (twin3 Protocol Founder)",
              desc: "Learn how twin3 uses 'Proof of Contribution (PoC)' and 'Data Royalties' to transform your code into sustainable on-chain assets and shared governance."
            },
            {
              time: "11:30 AM - 12:00 PM",
              title: "Tech Overview: Twin Matrix Anatomy - Soul, Body & Exchange",
              speaker: "K66 (Core Contributor)",
              desc: "A macro view of the twin3 tech stack: Understanding how the Soul (Twin Matrix), Body (Personal Agent), and Exchange work in synergy."
            }
          ]
        },
        {
          label: "Afternoon Session",
          title: "Unit 2: Deep Dive into Core Track Technologies",
          items: [
            {
              time: "1:00 PM - 2:00 PM",
              title: "Track 1 Workshop: Building Your First Data Connector (Builder API)",
              speaker: "Leon (Core Engineer)",
              desc: "A hands-on coding session. We will build a Chrome Extension from scratch to translate and inject web data into the Twin Matrix."
            },
            {
              time: "2:00 PM - 3:00 PM",
              title: "Track 2 Creative Workshop: Weaving Your Soul Matrix (Soul Matrix Design)",
              speaker: "Alice (Product Contributor)",
              desc: "A creative brainstorming session. Explore how to define human traits—like 'DeFi Risk Appetite' or 'Gamer Strategy'—into verifiable data structures. Recommended for Track 2."
            },
            {
              time: "3:00 PM - 4:00 PM",
              title: "Track 3 Workshop: Integrating ZK Humanity Index (ZK SDK)",
              speaker: "June (ZK Engineer)",
              desc: "A practical guide to the ZK SDK. We will build a Sybil-resistant DApp that verifies user credentials without compromising privacy. Mandatory for Track 3."
            },
            {
              time: "4:00 PM - 5:00 PM",
              title: "AMA: Meet the Core Team",
              speaker: "Core Team",
              desc: "The best time for your questions. Our founders, engineers, and product leads will be online to answer anything before the hackathon begins."
            }
          ]
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
      rights: "© 2026 twin3 Protocol. All Rights Reserved.",
      code: "Genesis Matrix / v7.3"
    }
  }
};