"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAggregatedMiningMetrics = updateAggregatedMiningMetrics;
exports.readMiningMetrics = readMiningMetrics;
const db_1 = require("./db");
const db_2 = require("./db");
const printtable_1 = require("../ui/tables/printtable");
const borderboxstyles_1 = require("../ui/styles/borderboxstyles");
const tableStyles_1 = require("../ui/styles/tableStyles");
const print_1 = require("../ui/print");
/**
 * updateAggregatedMiningMetrics
 * -----------------------------
 * Updates the cumulative mining metrics stored in the database by adding either the full current reading
 * (when marked as initial) or the incremental change.
 *
 * IMPORTANT: Ensure that your mining loop sets metrics.incrementalExtraData.initial = 1 for the first update.
 *
 * @param {MiningCycleMetrics} metrics - An object containing the current cycle's mining metrics and incremental extra data.
 * @returns {void}
 */
function updateAggregatedMiningMetrics(metrics) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    if (!db_1.db) {
        console.error("DB not initialized in updateAggregatedMiningMetrics");
        (0, db_2.initDatabase)();
    }
    try {
        // Retrieve the current mining metrics row from the database.
        const current = db_1.db
            .prepare(`SELECT * FROM mining_metrics WHERE id = 1`)
            .get();
        // Parse the current extra data from the DB (or default to an empty object if not available).
        const extraMiningData = JSON.parse((current === null || current === void 0 ? void 0 : current.extra_mining_data) || "{}");
        // Determine if this update is final or initial by checking control flags in incrementalExtraData.
        const isFinal = metrics.incrementalExtraData && metrics.incrementalExtraData.final === 1;
        const isInitial = metrics.incrementalExtraData &&
            metrics.incrementalExtraData.initial === 1;
        // 1. Total Mining Rounds: Increase only on an initial update.
        const newTotalMiningRounds = isInitial
            ? ((_a = current === null || current === void 0 ? void 0 : current.total_mining_rounds) !== null && _a !== void 0 ? _a : 0) + 1
            : (_b = current === null || current === void 0 ? void 0 : current.total_mining_rounds) !== null && _b !== void 0 ? _b : 0;
        // 2. Successful / Failed Rounds: Only update on a final update.
        const newSuccessfulMiningRounds = isFinal
            ? ((_c = current === null || current === void 0 ? void 0 : current.successful_mining_rounds) !== null && _c !== void 0 ? _c : 0) + (metrics.claimed ? 1 : 0)
            : (_d = current === null || current === void 0 ? void 0 : current.successful_mining_rounds) !== null && _d !== void 0 ? _d : 0;
        const newFailedMiningRounds = isFinal
            ? ((_e = current === null || current === void 0 ? void 0 : current.failed_mining_rounds) !== null && _e !== void 0 ? _e : 0) + (metrics.claimed ? 0 : 1)
            : (_f = current === null || current === void 0 ? void 0 : current.failed_mining_rounds) !== null && _f !== void 0 ? _f : 0;
        // 3. Claimed Amount: Only update on final update when a claim is processed.
        const newTotalClaimedAmount = isFinal && metrics.claimed
            ? ((_g = current === null || current === void 0 ? void 0 : current.total_claimed_amount) !== null && _g !== void 0 ? _g : 0) + ((_h = metrics.claimedAmount) !== null && _h !== void 0 ? _h : 0)
            : (_j = current === null || current === void 0 ? void 0 : current.total_claimed_amount) !== null && _j !== void 0 ? _j : 0;
        // 4. Unclaimed Amount:
        // If the DB value is still zero, use the full current reading; otherwise, add the incremental update.
        const currentUnclaimed = (_k = current === null || current === void 0 ? void 0 : current.total_unclaimed_amount) !== null && _k !== void 0 ? _k : 0;
        const newTotalUnclaimedAmount = currentUnclaimed === 0
            ? (_l = metrics.unclaimedAmount) !== null && _l !== void 0 ? _l : 0
            : isInitial
                ? currentUnclaimed + ((_m = metrics.unclaimedAmount) !== null && _m !== void 0 ? _m : 0)
                : currentUnclaimed + ((_o = metrics.unclaimedIncrement) !== null && _o !== void 0 ? _o : 0);
        // 5. Average Hash Rate: On final update, compute a weighted average.
        const newAvgHashRate = isFinal
            ? (((_p = current === null || current === void 0 ? void 0 : current.avg_hash_rate) !== null && _p !== void 0 ? _p : 0) * ((_q = current === null || current === void 0 ? void 0 : current.total_mining_rounds) !== null && _q !== void 0 ? _q : 0) +
                ((_r = metrics.avgHashRate) !== null && _r !== void 0 ? _r : 0)) /
                (((_s = current === null || current === void 0 ? void 0 : current.total_mining_rounds) !== null && _s !== void 0 ? _s : 0) + 1)
            : (_t = current === null || current === void 0 ? void 0 : current.avg_hash_rate) !== null && _t !== void 0 ? _t : 0;
        // 6. Total Mining Time (min):
        // If the current cumulative time is zero, use the full cumulative time; otherwise, add the incremental time.
        const currentTimeTotal = (_u = current === null || current === void 0 ? void 0 : current.total_mining_time_min) !== null && _u !== void 0 ? _u : 0;
        const newTotalMiningTimeMin = currentTimeTotal === 0
            ? metrics.miningTimeMin
            : currentTimeTotal + ((_v = metrics.miningTimeIncrement) !== null && _v !== void 0 ? _v : 0);
        // 7. Boost: Compute a weighted average of boost over rounds on final update.
        const newBoost = isFinal
            ? (((_w = current === null || current === void 0 ? void 0 : current.boost) !== null && _w !== void 0 ? _w : 0) * (((_x = current === null || current === void 0 ? void 0 : current.total_mining_rounds) !== null && _x !== void 0 ? _x : 0) - 1) +
                ((_y = metrics.maxBoost) !== null && _y !== void 0 ? _y : 0)) /
                ((_z = current === null || current === void 0 ? void 0 : current.total_mining_rounds) !== null && _z !== void 0 ? _z : 1)
            : (_0 = current === null || current === void 0 ? void 0 : current.boost) !== null && _0 !== void 0 ? _0 : 0;
        // 8. Merge incremental extra data from the current cycle into the existing extra mining data.
        const incrementalData = metrics.incrementalExtraData || {};
        for (const key in incrementalData) {
            if (key === "final" || key === "initial")
                continue;
            extraMiningData[key] =
                (extraMiningData[key] || 0) + (Number(incrementalData[key]) || 0);
        }
        // Prepare the SQL statement for updating the mining_metrics table.
        const updateStmt = db_1.db.prepare(`
      UPDATE mining_metrics SET
        total_mining_rounds = ?,
        successful_mining_rounds = ?,
        failed_mining_rounds = ?,
        total_claimed_amount = ?,
        total_unclaimed_amount = ?,
        avg_hash_rate = ?,
        total_mining_time_min = ?,
        boost = ?,
        extra_mining_data = ?
      WHERE id = 1
    `);
        // Build the values array for the update.
        const values = [
            newTotalMiningRounds,
            newSuccessfulMiningRounds,
            newFailedMiningRounds,
            newTotalClaimedAmount,
            newTotalUnclaimedAmount,
            newAvgHashRate,
            newTotalMiningTimeMin,
            newBoost,
            JSON.stringify(extraMiningData),
        ];
        // Execute the update statement with the computed values.
        updateStmt.run(...values);
        // Prepare a formatted string for extra mining data for logging purposes.
        const extraMiningDataFormatted = Object.entries(extraMiningData)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");
        // Build data for the incremental metrics table for UI logging.
        const incrementalTable = [
            { Metric: "Total Mining Rounds (Increment)", Value: isInitial ? 1 : 0 },
            {
                Metric: "Initial Unclaimed Amount",
                Value: isInitial ? (_1 = metrics.unclaimedAmount) !== null && _1 !== void 0 ? _1 : 0 : 0,
            },
            {
                Metric: "Claim Processed",
                Value: isFinal ? (metrics.claimed ? "Successful" : "Failed") : "",
            },
            {
                Metric: "Claimed Amount Increment",
                Value: isFinal && metrics.claimed ? (_2 = metrics.claimedAmount) !== null && _2 !== void 0 ? _2 : 0 : 0,
            },
            {
                Metric: "Unclaimed Increment Added",
                Value: isInitial
                    ? (_3 = metrics.unclaimedAmount) !== null && _3 !== void 0 ? _3 : 0
                    : (_4 = metrics.unclaimedIncrement) !== null && _4 !== void 0 ? _4 : 0,
            },
            {
                Metric: "Mining Time Increment (min)",
                Value: (_5 = metrics.miningTimeIncrement) !== null && _5 !== void 0 ? _5 : 0,
            },
        ];
        // Build data for the cumulative metrics table for UI logging.
        const cumulativeTable = [
            { Metric: "Total Mining Rounds", Value: newTotalMiningRounds },
            { Metric: "Successful Mining Rounds", Value: newSuccessfulMiningRounds },
            { Metric: "Failed Mining Rounds", Value: newFailedMiningRounds },
            { Metric: "Total Claimed Amount", Value: newTotalClaimedAmount },
            { Metric: "Total Unclaimed Amount", Value: newTotalUnclaimedAmount },
            { Metric: "Average Hash Rate", Value: newAvgHashRate },
            { Metric: "Total Mining Time (min)", Value: newTotalMiningTimeMin },
            { Metric: "Boost", Value: newBoost },
            { Metric: "Extra Mining Data", Value: extraMiningDataFormatted },
        ];
        // Print header using the border box UI.
        (0, print_1.printMessageLinesBorderBox)(["==== Mining Metrics DB Update Summary ===="], borderboxstyles_1.miningStyle);
        // Build and print the incremental metrics table.
        (0, printtable_1.printTable)(Object.assign(Object.assign({}, tableStyles_1.miningTableOptions), { data: incrementalTable, title: "Incremental Values Added:" }));
    }
    catch (error) {
        console.error("Error in updateAggregatedMiningMetrics:", error);
    }
}
/**
 * readMiningMetrics
 * -----------------
 * Reads and returns the current mining metrics from the database.
 *
 * @returns {MiningMetricsRow | undefined} The mining metrics row if available, or undefined if not found.
 */
function readMiningMetrics() {
    if (!db_1.db) {
        console.error("DB not initialized in readMiningMetrics");
        (0, db_2.initDatabase)();
    }
    const row = db_1.db.prepare(`SELECT * FROM mining_metrics WHERE id = 1`).get();
    return row;
}
