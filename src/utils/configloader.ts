import * as fs from "fs";
import {
  FullConfig,
  AppConfig,
  MiningConfig,
  SolanaConfig,
  SwapConfig,
  WsConfig,
} from "../types/config";

// A helper to load a file or return a default value if it fails
function loadFile<T>(filePath: string, defaultValue: T): T {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data) as T;
  } catch (error) {
    console.warn(
      `${filePath} not found or could not be parsed. Using default values.`
    );
    return defaultValue;
  }
}

// ───────────────────────────────────────────
// 1) Individual loaders for each config type
// ───────────────────────────────────────────

export function loadAppConfig(): AppConfig {
  return loadFile<AppConfig>("./config/appconfig.json", {
    wizardMode: false,
    defaultMode: "Mine",
    defaultCycleCount: 0,
    loggingEnabled: false,
    manualaccountcreation: true,
    myRigAddresses: [
      "5q6gVQuZJvMnqpxoS3yAgipyUJ69kYZWuCmTY4i6nA2X",
      "3jRksPvB4EXwo737Jww5Ncd35tqw6VP3HBr31MMep9di",
    ],
    watchRigAddresses: [],
  });
}

export function loadMiningConfig(): MiningConfig {
  return loadFile<MiningConfig>("./config/miningconfig.json", {
    activeMiningRetryDelayMs: 6000,
    miningLoopFailRetryDelayMs: 60000,
    miningSuccessDelayMs: 1000,
    initialDelayMs: 3000,
    popupDelayMs: 3000,
    maxIterations: 25,
    claimTimeThreshold: 120,
    loopIterationDelayMs: 30000,
    miningCompleteHashRate: 0,
    miningCompleteUnclaimedThreshold: 100,
    claimMaxThreshold: 500,
    claimBoostThreshold: 30,
    mineButtonTrigger: "MINE",
    confirmButtonText: "Confirm",
    stopClaimButtonText: "STOP & CLAIM",
    stopAnywayButtonText: "STOP ANYWAY",
    skipMiningOnFailure: true,
    skipMiningIfInactive: false,
    boostHash: false,
    boostHashAmountPerSession: "0.01",
  });
}

export function loadSolanaConfig(): SolanaConfig {
  return loadFile<SolanaConfig>("./config/solanaconfig.json", {
    rpcEndpoint: "https://api.mainnet-beta.solana.com",
    wpondTransferTimeThreshold: 900,
    rewardsWalletAddress: "1orFCnFfgwPzSgUaoK6Wr3MjgXZ7mtk8NGz9Hh4iWWL",
    wpondTokenMint: "3JgFwoYV74f6LwWjQWnr3YDPFnmBdwQfNyubv99jqUoq",
    discountWalletAddresses: [],
  });
}

export function loadSwapConfig(): SwapConfig {
  const swapConfig = loadFile<SwapConfig>("./config/swapconfig.json", {
    pairs: [], // Default to empty pairs array
    selectedPairs: undefined, // Explicitly undefined for non-persistence
    tokenA: "USDC",
    tokenB: "SOL",
    tokenAMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    tokenBMint: "So11111111111111111111111111111111111111112",
    tokenALowThreshold: 10,
    tokenBLowThreshold: 0.1,
    tokenAMinAmount: 10,
    tokenAMaxAmount: 12,
    tokenBMinAmount: 0.09,
    tokenBMaxAmount: 0.1,
    tokenARewardMin: 10,
    tokenARewardMax: 12,
    tokenBRewardMin: 0.08,
    tokenBRewardMax: 0.1,
    maxReferralFee: "0.000007",
    swapRounds: 10,
    swapRewardsActive: false,
    enableRewardsCheck: false,
    skipSwapIfNoRewards: false,
    useReferralList: true,
    turboswap: false,
    swapDelayRange: [10000, 12000],
    swapRoundDelayRange: [15000, 20000],
    roundsPerPair: 1, // Default to 1 (random pair per round)
  });

  if (!swapConfig.pairs || swapConfig.pairs.length === 0) {
    swapConfig.pairs = [
      {
        tokenA: swapConfig.tokenA || "",
        tokenB: swapConfig.tokenB || "",
        tokenAMint: swapConfig.tokenAMint,
        tokenBMint: swapConfig.tokenBMint,
        tokenALowThreshold: swapConfig.tokenALowThreshold || 0,
        tokenBLowThreshold: swapConfig.tokenBLowThreshold || 0,
        tokenAMinAmount: swapConfig.tokenAMinAmount || 0,
        tokenAMaxAmount: swapConfig.tokenAMaxAmount || 0,
        tokenBMinAmount: swapConfig.tokenBMinAmount || 0,
        tokenBMaxAmount: swapConfig.tokenBMaxAmount || 0,
        tokenARewardMin: swapConfig.tokenARewardMin || 0,
        tokenARewardMax: swapConfig.tokenARewardMax || 0,
        tokenBRewardMin: swapConfig.tokenBRewardMin || 0,
        tokenBRewardMax: swapConfig.tokenBRewardMax || 0,
      },
    ];
  }
  return swapConfig;
}

export function loadWsConfig(): WsConfig {
  return loadFile<WsConfig>("./config/wsconfig.json", {
    wss: "wss://example.websocket.url",
    apiKey: "your-api-key-here",
    heartbeatInterval: 30000,
    maxReconnectDelay: 10000,
    activeMiningTimeout: 30000,
    requiredActiveMiners: 5,
    activityThresholdSeconds: 60,
    enableRawLogging: false,
    enableFilteredLogging: true,
  });
}

// ──────────────────────────────────────────────────────────────────
// 2) A "full" loader that loads all configurations into one `FullConfig` object
// ──────────────────────────────────────────────────────────────────

export function loadFullConfig(): FullConfig {
  return {
    app: loadAppConfig(),
    mining: loadMiningConfig(),
    solana: loadSolanaConfig(),
    swap: loadSwapConfig(),
    ws: loadWsConfig(), // WebSocket configuration
  };
}
