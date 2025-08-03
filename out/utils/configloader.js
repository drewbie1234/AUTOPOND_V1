"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAppConfig = loadAppConfig;
exports.loadMiningConfig = loadMiningConfig;
exports.loadSolanaConfig = loadSolanaConfig;
exports.loadSwapConfig = loadSwapConfig;
exports.loadWsConfig = loadWsConfig;
exports.loadFullConfig = loadFullConfig;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
// A helper to load a file or return a default value if it fails
function loadFile(filePath, defaultValue) {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    }
    catch (error) {
        console.warn(`${filePath} not found or could not be parsed. Using default values.`);
        return defaultValue;
    }
}
// ───────────────────────────────────────────
// 1) Individual loaders for each config type
// ───────────────────────────────────────────
function loadAppConfig() {
    return loadFile("./config/appconfig.json", {
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
function loadMiningConfig() {
    return loadFile("./config/miningconfig.json", {
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
        boostHashAmountPerSession: 0.1,
    });
}
function loadSolanaConfig() {
    return loadFile("./config/solanaconfig.json", {
        rpcEndpoint: "https://api.mainnet-beta.solana.com",
        wpondTransferTimeThreshold: 900,
        rewardsWalletAddress: "1orFCnFfgwPzSgUaoK6Wr3MjgXZ7mtk8NGz9Hh4iWWL",
        wpondTokenMint: "3JgFwoYV74f6LwWjQWnr3YDPFnmBdwQfNyubv99jqUoq",
        discountWalletAddresses: [],
    });
}
function loadSwapConfig() {
    // Load swapconfig.json with default swap settings.
    const swapConfig = loadFile("./config/swapconfig.json", {
        tokenA: "SOL",
        tokenB: "USDT",
        tokenAMint: "",
        tokenBMint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        tokenALowThreshold: 0.01,
        tokenBLowThreshold: 2,
        // Regular mode amounts
        tokenAMinAmount: 0.0052,
        tokenAMaxAmount: 0.0058,
        tokenBMinAmount: 1.1,
        tokenBMaxAmount: 1.2,
        // Reward mode amounts
        tokenARewardMin: 0.052,
        tokenARewardMax: 0.054,
        tokenBRewardMin: 10,
        tokenBRewardMax: 11.5,
        maxReferralFee: "0.000005",
        swapRounds: 30,
        swapRewardsActive: false,
        enableRewardsCheck: false,
        skipSwapIfNoRewards: false,
        useReferralList: true,
        turboswap: true,
        swapDelayRange: [5000, 20000],
        swapRoundDelayRange: [60000, 180000],
    });
    // ────────────────────────────────
    // Backward Compatibility for Multi-Pair Support:
    // If the loaded swap config does not include a valid 'pairs' array,
    // create a default one using the individual swap fields.
    // ────────────────────────────────
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
function loadWsConfig() {
    return loadFile("./config/wsconfig.json", {
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
function loadFullConfig() {
    return {
        app: loadAppConfig(),
        mining: loadMiningConfig(),
        solana: loadSolanaConfig(),
        swap: loadSwapConfig(),
        ws: loadWsConfig(), // WebSocket configuration
    };
}
