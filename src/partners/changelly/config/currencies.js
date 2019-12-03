const ChangellyCurrencies = {
  ABYSS: { symbol: 'ABYSS', name: 'The Abyss', fixRateEnabled: false },
  ANT: { symbol: 'ANT', name: 'Aragon', fixRateEnabled: true },
  BAT: { symbol: 'BAT', name: 'Basic Attention Token', fixRateEnabled: true },
  BDG: { symbol: 'BDG', name: 'BitDegree', fixRateEnabled: false },
  BETR: { symbol: 'BETR', name: 'BetterBetting', fixRateEnabled: false },
  BKX: { symbol: 'BKX', name: 'Bankex', fixRateEnabled: false },
  BNT: { symbol: 'BNT', name: 'Bancor Network Token', fixRateEnabled: true },
  BRD: { symbol: 'BRD', name: 'Bread', fixRateEnabled: true },
  DENT: { symbol: 'DENT', name: 'Dent', fixRateEnabled: true },
  DGD: { symbol: 'DGD', name: 'DigixDAO', fixRateEnabled: true },
  DGTX: { symbol: 'DGTX', name: 'Digitex Futures', fixRateEnabled: false },
  EDG: { symbol: 'EDG', name: 'Edgeless', fixRateEnabled: true },
  ENJ: { symbol: 'ENJ', name: 'Enjin', fixRateEnabled: true },
  ETHOS: { symbol: 'ETHOS', name: 'ETHOS', fixRateEnabled: true },
  EURS: { symbol: 'EURS', name: 'STASIS EURS', fixRateEnabled: false },
  FET: { symbol: 'FET', name: 'Fetch', fixRateEnabled: false },
  FUN: { symbol: 'FUN', name: 'FunFair', fixRateEnabled: true },
  GNO: { symbol: 'GNO', name: 'Gnosis', fixRateEnabled: false },
  GNT: { symbol: 'GNT', name: 'Golem', fixRateEnabled: true },
  GUP: { symbol: 'GUP', name: 'Guppy', fixRateEnabled: true },
  GUSD: { symbol: 'GUSD', name: 'Gemini Dollar', fixRateEnabled: true },
  HMQ: { symbol: 'HMQ', name: 'Humaniq', fixRateEnabled: true },
  HT: { symbol: 'HT', name: 'Huobi token', fixRateEnabled: false },
  IOTX: { symbol: 'IOTX', name: 'IoTeX (IOTX)', fixRateEnabled: false },
  KNC: { symbol: 'KNC', name: 'Kyber Network', fixRateEnabled: true },
  LINK: { symbol: 'LINK', name: 'Link', fixRateEnabled: true },
  LRC: { symbol: 'LRC', name: 'Loopring', fixRateEnabled: true },
  LUN: { symbol: 'LUN', name: 'Lunyr', fixRateEnabled: true },
  MANA: { symbol: 'MANA', name: 'Decentraland', fixRateEnabled: true },
  MCO: { symbol: 'MCO', name: 'Monaco', fixRateEnabled: true },
  MKR: { symbol: 'MKR', name: 'Maker', fixRateEnabled: true },
  NEXO: { symbol: 'NEXO', name: 'NEXO', fixRateEnabled: true },
  NGC: { symbol: 'NGC', name: 'NAGA Coin', fixRateEnabled: false },
  NMR: { symbol: 'NMR', name: 'Numeraire', fixRateEnabled: false },
  OMG: { symbol: 'OMG', name: 'OmiseGo', fixRateEnabled: true },
  PAX: { symbol: 'PAX', name: 'Paxos Standard Token', fixRateEnabled: true },
  PAY: { symbol: 'PAY', name: 'TenXPay', fixRateEnabled: true },
  PLR: { symbol: 'PLR', name: 'Pillar', fixRateEnabled: false },
  PMA: { symbol: 'PMA', name: 'PumaPay', fixRateEnabled: false },
  POLY: { symbol: 'POLY', name: 'Polymath', fixRateEnabled: true },
  POWR: { symbol: 'POWR', name: 'Power Ledger', fixRateEnabled: true },
  PPT: { symbol: 'PPT', name: 'Populous', fixRateEnabled: true },
  PTOY: { symbol: 'PTOY', name: 'Patientory', fixRateEnabled: false },
  R: { symbol: 'R', name: 'Revain', fixRateEnabled: false },
  RCN: { symbol: 'RCN', name: 'Ripio Credit Network', fixRateEnabled: true },
  REP: { symbol: 'REP', name: 'Augur', fixRateEnabled: true },
  RLC: { symbol: 'RLC', name: 'iExec RLC', fixRateEnabled: true },
  SALT: { symbol: 'SALT', name: 'Salt', fixRateEnabled: false },
  STORJ: { symbol: 'STORJ', name: 'Storj', fixRateEnabled: true },
  STX: { symbol: 'STX', name: 'Stox', fixRateEnabled: false },
  SUB: { symbol: 'SUB', name: 'Substratum', fixRateEnabled: false },
  SWT: { symbol: 'SWT', name: 'Swarm City', fixRateEnabled: false },
  TEL: { symbol: 'TEL', name: 'Telcoin', fixRateEnabled: false },
  TRST: { symbol: 'TRST', name: 'Trustcoin', fixRateEnabled: false },
  TUSD: { symbol: 'TUSD', name: 'TrueUSD', fixRateEnabled: true },
  USDC: { symbol: 'USDC', name: 'USD coin', fixRateEnabled: true },
  USDT20: { symbol: 'USDT20', name: 'Tether ERC20', fixRateEnabled: true },
  VIB: { symbol: 'VIB', name: 'Viberate', fixRateEnabled: true },
  WINGS: { symbol: 'WINGS', name: 'Wings DAO', fixRateEnabled: true },
  WTC: { symbol: 'WTC', name: 'Waltonchain', fixRateEnabled: true },
  ZAP: { symbol: 'ZAP', name: 'Zap', fixRateEnabled: false },
  ZRX: { symbol: 'ZRX', name: '0x Protocol Token', fixRateEnabled: true },
  ADA: { symbol: 'ADA', name: 'Cardano', fixRateEnabled: true },
  BCD: { symbol: 'BCD', name: 'Bitcoin Diamond', fixRateEnabled: true },
  BCH: { symbol: 'BCH', name: 'Bitcoin Cash ABC', fixRateEnabled: true },
  BSV: { symbol: 'BSV', name: 'Bitcoin Cash SV', fixRateEnabled: true },
  BTC: { symbol: 'BTC', name: 'Bitcoin', fixRateEnabled: true },
  BTG: { symbol: 'BTG', name: 'Bitcoin Gold', fixRateEnabled: true },
  BTT: { symbol: 'BTT', name: 'BitTorrent', fixRateEnabled: true },
  DASH: { symbol: 'DASH', name: 'Dash', fixRateEnabled: true },
  DCR: { symbol: 'DCR', name: 'Decred', fixRateEnabled: true },
  DGB: { symbol: 'DGB', name: 'DigiByte', fixRateEnabled: true },
  DOGE: { symbol: 'DOGE', name: 'Dogecoin', fixRateEnabled: true },
  ETC: { symbol: 'ETC', name: 'Ethereum Classic', fixRateEnabled: true },
  ETH: { symbol: 'ETH', name: 'Ethereum', fixRateEnabled: true },
  GAS: { symbol: 'GAS', name: 'Gas', fixRateEnabled: true },
  KMD: { symbol: 'KMD', name: 'Komodo', fixRateEnabled: false },
  LSK: { symbol: 'LSK', name: 'Lisk', fixRateEnabled: true },
  LTC: { symbol: 'LTC', name: 'Litecoin', fixRateEnabled: true },
  MAID: { symbol: 'MAID', name: 'MaidSafeCoin', fixRateEnabled: true },
  NEBL: { symbol: 'NEBL', name: 'Neblio (NEBL)', fixRateEnabled: false },
  NEO: { symbol: 'NEO', name: 'Neo', fixRateEnabled: true },
  NIM: { symbol: 'NIM', name: 'Nimiq', fixRateEnabled: false },
  ONT: { symbol: 'ONT', name: 'Ontology', fixRateEnabled: true },
  PPC: { symbol: 'PPC', name: 'Peercoin', fixRateEnabled: false },
  PROC: { symbol: 'PROC', name: 'ProCurrency', fixRateEnabled: false },
  QTUM: { symbol: 'QTUM', name: 'Qtum Ignition', fixRateEnabled: true },
  SMART: { symbol: 'SMART', name: 'SmartCash', fixRateEnabled: false },
  STRAT: { symbol: 'STRAT', name: 'Stratis', fixRateEnabled: true },
  TRX: { symbol: 'TRX', name: 'Tron', fixRateEnabled: true },
  USDT: { symbol: 'USDT', name: 'Tether USD', fixRateEnabled: true },
  VET: { symbol: 'VET', name: 'VeChainThor', fixRateEnabled: false },
  WAVES: { symbol: 'WAVES', name: 'Waves', fixRateEnabled: true },
  XRC: { symbol: 'XRC', name: 'Bitcoin Rhodium', fixRateEnabled: false },
  XVG: { symbol: 'XVG', name: 'Verge', fixRateEnabled: true },
  XZC: { symbol: 'XZC', name: 'ZCoin', fixRateEnabled: true },
  ZEC: { symbol: 'ZEC', name: 'Zcash', fixRateEnabled: true },
  ZEN: { symbol: 'ZEN', name: 'Horizen', fixRateEnabled: true }
};
export { ChangellyCurrencies };
