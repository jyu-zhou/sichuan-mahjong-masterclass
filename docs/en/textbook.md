# Sichuan Mahjong Masterclass v1.3.0

> **Scope:** A zero-to-advanced course for Sichuan Mahjong (Chuan Mahjong). The canonical line uses four players, 108 suited tiles, Swap Three, fixed Dingque (Declare a Missing Suit), no chow, pung/kong allowed, and Blood Battle to the End.
>
> **Goal:** Progress from “I can play a legal hand” to “I can explain my decisions with tile efficiency, probability, expected value, and opponent-specific risk.” This book does not promise win rate or profit.

## How to use this book

Follow the lessons in order. For every lesson: (1) teach the rule or mathematical assumption back in your own words; (2) verify it in the interactive site; (3) answer the checkpoint without guessing. Advanced reading and Bayesian inference should come only after you can reliably enforce Dingque, count physical copies, and enumerate waits.

Project: <https://github.com/jyu-zhou/sichuan-mahjong-masterclass>  
Author: **jyu-zhou**  
Chinese course: [四川麻将大师学院](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/)

## Rule contract

The current in-game rule pages and fan table are the canonical ruleset. Published Tencent/Joy Mahjong material is used only as a cross-reference for basic mechanisms; historical tournament scoring is never silently merged into the current room.

### Confirmed rules

- **Core game:** Four players, 108 suited tiles, Swap Three, fixed Dingque, no chow, pung/kong allowed; Blood Battle to the End.
- **Base patterns:** Basic Hand 1×; All Pungs 2×; Full Flush / Seven Pairs / Golden Hook 4×; Full Flush Eighteen Arhats 256×, with the full table in the catalogue.
- **Bonus conditions:** Self-draw, Win After Kong, Kong Discard, Robbing a Kong, Last Tile, and each Root are shown as ×2; avoid double counting.
- **Heavenly/Earthly Hand:** Settled directly at the room cap and do not stack with other fan conditions.
- **Ready-hand inspection:** An unready player pays ready non-winners at their maximum possible win multiplier; self-draw bonus is excluded.
- **Flower Pig:** Holding the declared missing suit at the end triggers Flower Pig; for each recipient use max(64×, that recipient’s maximum ready multiplier).
- **Kong refund:** An unready player returns all kong proceeds when the wall is exhausted.
- **Kong-score transfer:** On a Kong Discard, the kong proceeds transfer to the winner; no transfer if the same discard creates multiple winners.

### Room parameters and conservative defaults

- The ordinary cap is a room parameter and should be set to the actual table value.
- When a named base pattern already depends on a four-of-a-kind, the conservative default is not to add a Root again unless settlement evidence confirms stacking.
- Immediate payments for different kong types may vary by room and must stay separate from fan settlement.
- Pass-win reset, exact robbing-a-kong scope, and other platform details should follow the current in-game rules page if the software changes.

## Base fan table

| Pattern | Base multiplier | Fan | Shape summary |
|---|---:|---:|---|
| Basic Hand | ×1 | 0 | Four sets plus a pair; base regular shape |
| All Pungs | ×2 | 1 | Four triplets/kongs plus a pair |
| Full Flush | ×4 | 2 | All winning tiles belong to one suit |
| Seven Pairs | ×4 | 2 | Seven pairs with no exposed melds |
| Golden Hook | ×4 | 2 | Four exposed pung/kong sets and a single-tile pair wait |
| Full Flush All Pungs | ×8 | 3 | Full Flush and All Pungs |
| Dragon Seven Pairs | ×8 | 3 | Seven Pairs containing one four-of-a-kind group |
| Full Flush Seven Pairs | ×16 | 4 | Seven Pairs in one suit |
| Double Dragon Seven Pairs | ×16 | 4 | Seven Pairs containing two four-of-a-kind groups |
| Full Flush Golden Hook | ×16 | 4 | Golden Hook in one suit |
| Full Flush Dragon Seven Pairs | ×32 | 5 | Dragon Seven Pairs in one suit |
| Triple Dragon Seven Pairs | ×32 | 5 | Seven Pairs containing three four-of-a-kind groups |
| Full Flush Double Dragon Seven Pairs | ×64 | 6 | Double Dragon Seven Pairs in one suit |
| Eighteen Arhats | ×64 | 6 | A winning structure with four declared kongs |
| Full Flush Triple Dragon Seven Pairs | ×128 | 7 | Triple Dragon Seven Pairs in one suit |
| Full Flush Eighteen Arhats | ×256 | 8 | Eighteen Arhats in one suit |

---

# Lesson 1 | Rule contract: which version of Sichuan Mahjong this course teaches

**Phase:** Getting Started　　**Suggested time:** 9 min  
**Objective:** Distinguish Blood Battle to the End from Blood Flowing River, and understand why the current room rules override generic rule summaries.

### The core rule set in one paragraph

**Four players, 108 suited tiles only, Swap Three, Declare a Missing Suit, no chow, pung and kong allowed, and a winner leaves the hand. The hand ends when three players have won or the wall is exhausted.** This is the Sichuan Mahjong form commonly called **Blood Battle to the End (Xuezhan Daodi)**, not Blood Flowing River, where winners can keep playing and win repeatedly.

**Rule priority:** current in-game rule pages and fan table first; confirmed room settings second; official Tencent/Joy Mahjong material is used only for cross-checking when it does not conflict. Never silently merge two different rule sets.

### Why rule precision matters

The strategic objective is not “win first every hand.” It is to improve **long-run expected net score while controlling large downside events**. A Flower Pig penalty can be at least 64×, so legality and endgame obligations can dominate a small efficiency gain.

### Learning path

Start with tiles and legal winning shapes, then learn Swap Three and Dingque, tile efficiency, scoring, probability, opponent inference, defense, endgame settlement, and scientific review.

> Base stake and ordinary cap values in the calculators are teaching parameters. Replace them with the actual room parameters when playing.

> **Teach-back checkpoint:** Without looking at tiles, explain why a player leaving after winning changes the number of payers on a later self-draw.

---

# Lesson 2 | The 108 tiles: Characters, Dots, and Bamboo

**Phase:** Getting Started　　**Suggested time:** 10 min  
**Objective:** Recognize all three suits, ranks 1–9, and the hard physical constraint that exactly four copies of each tile exist.

### Three suits only

* **Characters (Wan)**: 1–9 Characters.
* **Dots (Tong)**: 1–9 Dots.
* **Bamboo (Tiao)**: 1–9 Bamboo.

Each exact tile has four physical copies. Therefore 3 suits × 9 ranks × 4 copies = **108 tiles**. This course does not use winds, dragons, or flowers.

### Why copy counting comes first

If a record would require five copies of the same tile, the record is wrong. **An impossible event has probability zero**, which is stronger evidence than any reading heuristic.

### Practice

Use the Hand Lab to find 5 Dots, 2 Characters, and 9 Bamboo. Add four copies of one tile and verify that a fifth copy is rejected.

> “Unseen” never means “in the wall.” An unseen tile may be in another player’s concealed hand.

> **Teach-back checkpoint:** Why does “one visible copy plus two copies in your hand” imply at most one unknown copy, but not one copy definitely in the wall?

---

# Lesson 3 | How to read a hand: sequences, triplets, and the pair

**Phase:** Getting Started　　**Suggested time:** 18 min  
**Objective:** Identify sequences, triplets, the pair, and suits directly from tile graphics.

### See the shape before calculating

**Characters**123 Characters: a sequence

**Dots**555 Dots: a triplet

**Bamboo**77 Bamboo: a pair

A tile’s printed rank is not a tile count: “7 Dots” is one physical tile, not seven tiles. A sequence must use three consecutive ranks in the **same suit**.

**Hands-on task:** build 123 Characters, 555 Dots, and 77 Bamboo in the lab. Every physical copy still obeys the four-copy limit.

> **Teach-back checkpoint:** Among the examples shown, which group can serve as the pair, and why?

---

# Lesson 4 | Winning hand skeleton: four sets plus a pair, or Seven Pairs

**Phase:** Getting Started　　**Suggested time:** 17 min  
**Objective:** Decompose a 14-tile hand into four sets plus a pair, or recognize Seven Pairs.

### Standard winning structure

A regular win is **3+3+3+3+2=14 tiles**. Each three-tile set is either a same-suit sequence such as 234 Characters or a triplet such as 555 Dots. The final two identical tiles form the pair.

This hand can be decomposed into 234 Characters, 456 Characters, 234 Dots, 789 Dots, and 88 Characters. It is a legal regular win if Bamboo was the declared missing suit and no Bamboo remains.

### Seven Pairs

Seven Pairs uses seven pairs for 14 tiles and normally requires a fully concealed hand. Four identical tiles may be decomposed as two pairs for shape analysis; the fan table determines whether the result is Dragon Seven Pairs.

> Always ask in this order: “Is it legal?” → “Which pattern is it?” → “How much does it score?”

> **Teach-back checkpoint:** Given any 14-tile hand, prove legality first. Only then classify the fan pattern.

---

# Lesson 5 | Visual decomposition: turn 14 tiles into five blocks

**Phase:** Getting Started　　**Suggested time:** 18 min  
**Objective:** Explain a complete win as four sets plus one pair even when sets are exposed.

### From a flat row to five blocks

234 Characters

456 Characters

234 Dots

789 Dots

Pair: 88 Characters

Tile count alone is not enough. Missing-suit legality must be satisfied; exposed pungs and kongs already occupy set slots; and Seven Pairs follows a different decomposition.

> Do not demand 14 concealed tiles after exposing a pung or kong. Count the whole hand structure, not only the concealed portion.

> **Teach-back checkpoint:** If 555 Dots is already exposed as a pung, how many complete concealed sets and pairs must the remaining concealed tiles supply?

---

# Lesson 6 | Turn structure: draw, discard, pung, and kong

**Phase:** Getting Started　　**Suggested time:** 14 min  
**Objective:** Describe a full turn and distinguish pung, exposed kong, concealed kong, and added kong.

### Normal turn flow

The dealer starts with 14 tiles and discards first. Other players normally draw one tile and discard one. **Chow is not allowed.** Pung, kong, and win are allowed when their conditions are met.

* **Pung:** two concealed copies plus another player’s discard.
* **Exposed kong:** three concealed copies plus another player’s discard.
* **Concealed kong:** four identical concealed tiles.
* **Added kong:** add a self-drawn fourth copy to an earlier pung; this may be robbed if the rule allows it.

### Replacement draw after a kong

A kong uses four physical tiles to occupy one set slot, so a replacement tile must be drawn. Missing the replacement draw can create an invalid hand state.

Once a player has won and left the hand, that player no longer participates in normal drawing or later self-draw payments. Kong-score accounting remains a separate ledger.

> **Teach-back checkpoint:** After a pung, why can you no longer test only the concealed tiles against a 14-tile winning template?

---

# Lesson 7 | Full hand flow: from dealing to the third winner

**Phase:** Getting Started　　**Suggested time:** 18 min  
**Objective:** Know the prerequisites for each action and how tile counts change.

Deal + Swap Three*→*Declare missing suit*→*Dealer discards*→*Draw–discard cycle*→*Pung / Kong / Win checks*→*Third winner or wall exhausted

### Three common interruptions

1. If another player discards a tile you can pung, a pung immediately creates an exposed triplet and you then discard without first drawing.
2. If you declare a kong, settle the kong event according to the room rules and take the replacement draw.
3. If a discard can win your hand, winning has priority over pung/kong choices; any pass-win restriction must also be respected.

```
Legal to win? ─ yes → verify missing suit + hand shape → decide whether to win
              └ no  → can pung/kong? → expose or wait for normal draw
```

> **Teach-back checkpoint:** After one player wins, does that player keep drawing? Does play continue after the third player wins?

---

# Lesson 8 | Swap Three: a mandatory opening module

**Phase:** Opening Module　　**Suggested time:** 12 min  
**Objective:** Treat the swap as pre-Dingque structure optimization, then re-evaluate the hand after receiving three tiles.

### Operate correctly first

Swap Three usually requires selecting **three tiles from the same suit** and exchanging them according to the room’s direction rule. Exact direction and animation are interface rules, not strategic assumptions.

### Do not simply dump the smallest suit

If 123 Characters is already a sequence while 147 Bamboo is scattered, swapping 147 Bamboo usually destroys less structure, all else equal. But suit count alone is never sufficient: preserve complete sets, strong pairs, and flexible compound shapes.

### Re-evaluate after the swap

The incoming tiles can radically change all three suits. **Dingque must be chosen from the post-swap hand.** Swap history is useful private information, but tiles given away should not be assumed to remain in that opponent’s concealed hand forever.

> **Teach-back checkpoint:** If the three incoming tiles create a complete sequence, why must Dingque be re-evaluated instead of following the pre-swap plan?

---

# Lesson 9 | Dingque: the hard legality constraint

**Phase:** Tile-Efficiency Foundations　　**Suggested time:** 16 min  
**Objective:** Compare all three missing-suit choices with legality first, while understanding the large Flower Pig downside.

### Dingque is a legal constraint, not a style preference

After declaring a missing suit, tiles of that suit cannot remain in a legal winning hand. If the wall ends while you still hold the declared missing suit, the hand can be treated as **Flower Pig (Huazhu)**.

### Three-candidate comparison

Evaluate Missing Characters, Missing Dots, and Missing Bamboo separately: (1) how many tiles must be cleared; (2) how many completed sets remain in the other two suits; (3) pair and partial-set quality; (4) risk of the forced discards while clearing the suit.

* Fewer missing-suit tiles often means faster clearance, but not always the best preserved structure.
* Full Flush is legal: ending with only one suit does not violate Dingque.
* A hand can be only two suits yet still be illegal if one of those suits is the declared missing suit.

### Large downside

For each eligible recipient, the Flower Pig multiplier is the larger of **64×** and that recipient’s maximum ready-hand winning multiplier. Ordinary win caps must not silently cap this special settlement.

> **Teach-back checkpoint:** If Characters is your missing suit and only one 8 Characters remains, are you safe merely because the hand now uses only two suits?

---

# Lesson 10 | Dingque in practice: clear fastest or preserve stronger structure?

**Phase:** Tile-Efficiency Foundations　　**Suggested time:** 18 min  
**Objective:** Balance forced-clearance cost against the quality of the two suits that remain.

### A three-option scorecard

| Metric | Meaning | Precision |
| --- | --- | --- |
| Clearance cost | Physical tiles that must be discarded from the missing suit | Exact |
| Retained efficiency | Completed sets, pairs, and partial sets in the other two suits | Enumeratable |
| Distance to ready | How far each plan is from a legal ready hand | Computable with search |
| Opponent risk | Danger of forced missing-suit discards | Estimated, not exact |

Example: 123 Characters | 147 Dots | 2345678 Bamboo. Characters already form a set, Dots are scattered, Bamboo is highly connected. Missing Dots is structurally more attractive than randomly choosing between the two three-tile suits.

Dingque is a legality constraint. It is not the same question as “Should I pursue Full Flush?”

> **Teach-back checkpoint:** Why is minimizing the number of missing-suit discards not the whole Dingque objective?

---

# Lesson 11 | Building useful shapes: isolated tiles, pairs, partial sets, compound shapes

**Phase:** Tile-Efficiency Foundations　　**Suggested time:** 16 min  
**Objective:** Recognize open waits, closed waits, edge waits, and why compound shapes should not be broken mechanically.

### Three two-tile shapes

**45 Characters** completes with 3 or 6 (open wait); **46 Characters** completes only with 5 (closed wait); **12 Characters** completes only with 3 (edge wait). If all target copies are otherwise unseen, their nominal resources are 8, 4, and 4.

**Nominal resource count is not actual draw probability.** Target tiles may already be concealed by opponents.

### Compound structures

34567 Characters is not merely one sequence. It supports multiple decompositions and future improvements. Evaluate complete sets, pair candidates, and flexible partial sets together rather than counting “connected tiles” in isolation.

> **Teach-back checkpoint:** Why is 45 Characters usually wider than 46 Characters, yet not automatically the correct hold in every hand?

---

# Lesson 12 | Ready hands, effective tiles, and visible-tile correction

**Phase:** Tile-Efficiency Foundations　　**Suggested time:** 20 min  
**Objective:** List all winning tiles and distinguish theoretical copies, unknown-location copies, and actual wall copies.

### Ready hand

A 13-tile hand is ready when adding at least one specific tile produces a legal winning hand. A hand can have multiple winning tile types.

### Three layers of resource counting

1. **Theoretical copies:** four of each winning tile minus copies in your own hand.
2. **Unknown-location copies:** subtract public discards and exposed melds as well.
3. **Actual wall copies:** subtract copies concealed by opponents too. This value is usually unknown.

If you wait on 5 Dots, hold none, and two 5 Dots are publicly visible, at most two copies remain in unknown locations. That does **not** mean a 50% draw chance.

The Hand Lab can enumerate waits for fully concealed 13-tile hands and compare direct-ready discards from a 14-tile hand.

> **Teach-back checkpoint:** Why is “two unknown copies remain” different from “two copies are in the wall”?

---

# Lesson 13 | Why compound shapes matter: one tile can improve several routes

**Phase:** Tile-Efficiency Foundations　　**Suggested time:** 18 min  
**Objective:** Move beyond one-step effective-tile counting and reason about next-turn improvements.

### Open, closed, and edge waits

**Open**3 or 6 Dots

**Closed**5 Dots only

**Edge**3 Dots only

With 23456 Dots, decompositions such as 234 + 56 and 23 + 456 share physical tiles. You may not count the same copy twice.

**Effective tiles** immediately improve distance to ready. **Improvement tiles** may keep the same distance while creating a wider next step. Long-run evaluation therefore cannot be reduced to adding 4s and 8s across overlapping partial sets.

> **Teach-back checkpoint:** Why can 23456 Dots not be treated as two disjoint completed sets at the same time?

---

# Lesson 14 | Shanten, improvements, and “what do I discard after drawing?”

**Phase:** Tile-Efficiency Foundations　　**Suggested time:** 20 min  
**Objective:** Compare legal discards by enumeration and structure rather than visual intuition.

### Shanten convention

This course uses **0-shanten for a ready hand**. One-shanten means one structural improvement away from ready, not “guaranteed to get ready within one draw.”

### Enumerate every legal discard

After drawing to 14 tiles, test every distinct legal discard. For each resulting 13-tile hand, evaluate legality, direct waits, unknown-location resources, future improvement quality, and discard danger.

### One-turn resource count is not enough

Plan A may be ready to eight nominal copies now but have a poor resulting wait; Plan B may have only six immediate improvement copies yet frequently transform into a wider ready hand. Compare like with like and include risk and score.

The lab precisely enumerates waits and direct-ready discards for concealed hands. It is not a universal shanten solver or globally optimal policy engine.

> **Teach-back checkpoint:** When two discards are both not ready, why does the site refuse to claim a globally optimal choice from direct wait count alone?

---

# Lesson 15 | Shanten drill: how not to miss a better discard

**Phase:** Tile-Efficiency Foundations　　**Suggested time:** 18 min  
**Objective:** Use action enumeration rather than intuition to audit a post-draw hand.

### Five-step audit for a 14-tile hand

1. List every distinct legal discard type.
2. Remove one copy to form a 13-tile hand.
3. Check that the declared missing suit has been cleared before calling it ready.
4. Test all 27 suited tile types as candidate winning tiles.
5. Count winning types and remaining unknown copies, then correct further with public information.

Declare Bamboo missing. Compare discarding 5 Dots with discarding 7 Dots in the Hand Lab, then mark visible tiles and observe whether the resource ranking changes.

> Exact structural enumeration can validate waits. It still does not prove which discard maximizes long-run expected score.

> **Teach-back checkpoint:** Why can an upper bound of eleven winning copies never prove that eleven copies are in the wall?

---

# Lesson 16 | Fans and multipliers: keep the scoring layers separate

**Phase:** Scoring & Decisions　　**Suggested time:** 17 min  
**Objective:** Separate base hand multiplier, bonus ×2 conditions, room cap, kong ledger, and special endgame penalties.

### Use the current fan table, not legacy arithmetic

The canonical table in this course starts at **0 fan = 1× for a basic hand**, then 1 fan = 2×, 2 fan = 4×, and so on. The base pattern is classified first; applicable bonus conditions are handled separately.

### Keep three ledgers apart

**Winning payment**, **immediate kong cashflow**, and **end-of-wall settlements** interact but are not the same thing. Reaching an ordinary win cap can eliminate the marginal scoring value of another bonus while a kong may still have its own cashflow, replacement draw, or risk consequences.

The calculators expose base stake and cap as parameters because rooms can differ. Flower Pig uses its own minimum rule and should not be silently capped by the ordinary-win cap.

> **Teach-back checkpoint:** Why does reaching the ordinary cap not prove that every further kong is bad?

---

# Lesson 17 | Base fan catalogue I: 0 to 8 fan

**Phase:** Scoring & Decisions　　**Suggested time:** 18 min  
**Objective:** Memorize the base hand categories and multipliers in the current rule table.

### Canonical base patterns

| Multiplier · fan | Pattern |
| --- | --- |
| 1× · 0 | Basic Hand |
| 2× · 1 | All Pungs |
| 4× · 2 | Full Flush, Seven Pairs, Golden Hook |
| 8× · 3 | Full Flush All Pungs, Dragon Seven Pairs |
| 16× · 4 | Full Flush Seven Pairs, Double Dragon Seven Pairs, Full Flush Golden Hook |
| 32× · 5 | Full Flush Dragon Seven Pairs, Triple Dragon Seven Pairs |
| 64× · 6 | Full Flush Double Dragon Seven Pairs, Eighteen Arhats |
| 128× · 7 | Full Flush Triple Dragon Seven Pairs |
| 256× · 8 | Full Flush Eighteen Arhats |

Classify the complete base pattern as a whole. Do not multiply overlapping base names again unless the rule table explicitly treats them as separate bonuses.

Golden Hook means four exposed pung/kong sets with a single concealed tile waiting as the pair. Eighteen Arhats requires four declared kongs and therefore cannot be validated by a simple 14-concealed-tile checker.

> **Teach-back checkpoint:** Which of Dragon Seven Pairs and Full Flush Dragon Seven Pairs requires one suit, and what are their base multipliers?

---

# Lesson 18 | Fan catalogue II: bonus ×2 conditions, non-stackable hands, and double counting

**Phase:** Scoring & Decisions　　**Suggested time:** 18 min  
**Objective:** Know which conditions multiply the base hand and why some structures must not be counted twice.

### Bonus conditions shown as ×2

| Condition | Trigger | Boundary |
| --- | --- | --- |
| Self-draw | You draw the winning tile | Payers are the players still active |
| Win after Kong | The replacement tile wins | Check whether Self-draw is separately stackable |
| Kong Discard | Your post-kong discard lets another player win | Also audit kong-score transfer |
| Robbing a Kong | Win on another player’s added-kong tile | Do not assume a concealed kong can be robbed |
| Last Tile | Win as the wall is exhausted | ×2 under the current table |
| Root (Gen) | Four identical tiles count as a root | Avoid double-counting structures already embedded in a named base hand |

### Heavenly and Earthly Hands

These special hands are settled directly at the current room cap and do not stack with the other fan conditions.

Until a room settlement record proves otherwise, this course avoids adding a Root again when the base hand already exists because of that same four-of-a-kind structure.

> **Teach-back checkpoint:** Can the four identical tiles inside Dragon Seven Pairs always be multiplied again as a Root? Why is the safe default “not unless confirmed”?

---

# Lesson 19 | Pung and kong decisions: five ledgers, not one

**Phase:** Scoring & Decisions　　**Suggested time:** 19 min  
**Objective:** Audit direct kong cashflow, Root value, replacement draw, information leakage, and refund/transfer risk separately.

### A kong changes at least five things

1. **Immediate kong cashflow** according to the kong type.
2. **Root/fan potential** if the final winning pattern qualifies.
3. **Replacement draw**, which can improve or win the hand.
4. **Information and discard risk**, because more of your structure becomes fixed and visible.
5. **End-of-wall refund risk**: an unready player returns all kong proceeds under the confirmed refund rule.

### Kong-score transfer

If a post-kong discard is won, the score won from that kong is transferred to the winning player. If the same discard creates multiple winners, the confirmed rule says the transfer is **not triggered**.

Exact immediate kong payment amounts can vary by room, so the course keeps kong cashflow as a separate parameterized ledger instead of hiding it inside fan calculation.

> **Teach-back checkpoint:** Why can immediate money collected from a concealed kong fail to be final profit if the wall ends and you are not ready?

---

# Lesson 20 | Kong accounting: four similar events, four separate books

**Phase:** Scoring & Decisions　　**Suggested time:** 18 min  
**Objective:** Separate kong payment, Root fan, replacement-tile win, and Kong Discard loss.

### Four ledgers

| Ledger | Trigger | Interaction |
| --- | --- | --- |
| Kong cashflow | Concealed/exposed/added kong is completed | Immediate, but may later be refunded or transferred |
| Root multiplier | A qualifying four-of-a-kind exists in the winning hand | Do not double-count a named pattern’s embedded structure |
| Replacement-tile win | The kong replacement tile wins | May combine with Self-draw depending on the room rule |
| Kong Discard | The discard after a kong is won by another player | Fan settlement and kong-score transfer are separate |

Historical Tencent tournament rules are useful for context but cannot overwrite the current room’s kong payment schedule. Treat published examples as a separate ruleset.

When one post-kong discard produces multiple winners, do not apply kong-score transfer under the confirmed exception.

> **Teach-back checkpoint:** Why is it a major accounting error to record immediate kong cashflow as if it were the final hand multiplier?

---

# Lesson 21 | Why “win fast” versus “chase value” can reverse

**Phase:** Scoring & Decisions　　**Suggested time:** 15 min  
**Objective:** Use expected value and opportunity cost instead of maximum fan alone.

### Winning bigger is not the same as choosing better

Suppose a fast route wins 60% of the time for +20 and a value route wins 30% for +50, ignoring every other outcome. Their success terms are 12 and 15. The value route leads by only 3, so any additional expected loss from deal-ins, endgame penalties, or staying active can reverse the ranking.

### Expected value

**Strategy value = sum of each final net score × its probability.** Compare complete outcomes, not just the payout when the plan succeeds.

If the ordinary self-draw payment is already capped, another fan may add zero marginal win payment. Giving up effective tiles for that fan can be negative even if the hand looks “bigger.”

Ask: how much extra value is available, how many turns are sacrificed, what discard danger rises, how many opponents are still paying, and what happens if the wall ends?

> **Teach-back checkpoint:** Why can maximum possible fan never by itself determine the best strategy?

---

# Lesson 22 | Probability I: wall composition and the hypergeometric model

**Phase:** Probability & Inference　　**Suggested time:** 18 min  
**Objective:** Use without-replacement probability correctly and state when the formula is invalid.

### The clean model

If the wall is known to contain W tiles, exactly K of them are targets, and you will draw n tiles uniformly without replacement, then

**P(at least one target)=1−C(W−K,n)/C(W,n).**

Example: W=20, K=3, n=2. The no-hit probability is (17/20)×(16/19)=0.7158, so the hit probability is about 28.42%.

### Why “unseen” cannot be substituted for K

If three copies are unseen, they may be split between opponents’ concealed hands and the wall. The true wall count could be 0, 1, 2, or 3.

Also verify that you really get n future draws. Other players may draw, pung, kong, win, or leave before that happens.

> **Teach-back checkpoint:** If three target tiles are unseen but their locations are unknown, why can you not set K=3 automatically?

---

# Lesson 23 | From physical copies to probability: derive the sample space

**Phase:** Probability & Inference　　**Suggested time:** 18 min  
**Objective:** Separate unseen count, wall count, and number of future draws.

### Three quantities that must not be conflated

**Unseen copies** = 4 − copies in your hand − publicly visible copies. They occupy unknown locations.

**Target copies in the wall** require additional hidden-information assumptions.

**Number of draws you will personally receive** depends on turn order, calls, kongs, and players leaving the hand.

### Why not just use 3/20 × 2?

That treats draws as independent and ignores the fact that sampling changes the remaining population. The correct without-replacement model is hypergeometric.

Use the calculator to vary W, K, and n. Setting K=0 should always produce 0%.

> **Teach-back checkpoint:** Can the hypergeometric formula be used directly when K is unknown?

---

# Lesson 24 | Probability II: conditional inference and dynamic hand reading

**Phase:** Probability & Inference　　**Suggested time:** 18 min  
**Objective:** Separate certainty, rule-based exclusion, and probabilistic behavioral clues.

### Three evidence classes

**Certain facts:** your tiles, public discards, exposed melds, declared missing suits, and who has already won. **Rule constraints:** which suits an opponent cannot legally keep to the end. **Probabilistic clues:** sudden suit switches, repeated calls, or deliberate shape breaks.

### A Bayes example

Let the prior probability that an opponent is ready be 20%. Suppose a certain action occurs 60% of the time when ready and 30% when not ready. Then

**0.2×0.6 / (0.2×0.6 + 0.8×0.3) = 1/3.**

These numbers illustrate the calculation only; they are not measured Sichuan Mahjong statistics.

### Time matters

Between observations, draws and discards can change the hidden state itself. Do not repeatedly multiply evidence as if “ready/not ready” were frozen across turns.

> **Teach-back checkpoint:** Why does two exposed Dots triplets support some hypotheses without proving that the opponent is ready in Full Flush?

---

# Lesson 25 | Hidden information and Bayes: reading is not mind-reading

**Phase:** Probability & Inference　　**Suggested time:** 18 min  
**Objective:** Define hypotheses, priors, likelihoods, and posteriors with explicit boundaries.

### Use testable hypotheses

Let H = “Player A is currently ready” and E = “A pungs a Bamboo triplet this turn and discards a Dot.” With P(H)=20%, P(E|H)=60%, and P(E|not H)=30%, Bayes’ rule gives one-third.

The values are illustrative. Without behavioral data, do not claim that a pung “adds exactly ten percentage points” to ready probability.

### State transition before observation update

Between turns, the opponent can draw into ready, lose a ready shape, or change to a wider wait. A more faithful process predicts a new prior after the hidden state transition, then updates that prior with the new observation.

When the evidence base is weak, the labels **higher / lower / insufficient evidence** are often more honest than false precision.

> **Teach-back checkpoint:** Why does the 20% prior in the worked example update to one-third?

---

# Lesson 26 | Per-opponent defense and break-even risk

**Phase:** Probability & Inference　　**Suggested time:** 19 min  
**Objective:** Measure risk as probability × loss and audit each opponent separately.

### Safety is opponent-specific

If Player A declared Characters missing, a Character tile cannot be A’s legal winning discard. Players B and C may still be waiting on it.

### Simple break-even threshold

If an aggressive choice creates +4 expected points but adds one possible 80-point deal-in, the extra deal-in probability that breaks even is **4/80=5%**. Above that threshold, the simplified aggressive option is worse.

### When the shortcut fails

Multiple winners, changing ready probabilities, ready-hand inspection, kong cashflow, or other score transfers require additional terms.

When the probability is unknown, use a range and identify the **decision-flip threshold** rather than inventing 7.23%.

> **Teach-back checkpoint:** Why does “absolutely safe against Player A” not mean “safe to discard”?

---

# Lesson 27 | Risk ledger: who can win, how much, and who pays?

**Phase:** Probability & Inference　　**Suggested time:** 18 min  
**Objective:** Replace the idea of one “safe tile” with a vector of opponent-specific risks.

### One discard creates several risk channels

`Expected loss(t)=Σ[P(opponent j wins on t) × actual payment to j] + other direct losses.`

Linearity of expectation allows opponent-specific loss terms to be added even when several opponents can win on the same discard. But the probability that *at least one* opponent wins cannot be found by simply adding marginal probabilities.

Illustration: if B wins with probability 10% for a payment of 8, and C with probability 5% for 64, the two expected loss terms total 0.1×8+0.05×64=4.

Again, the percentages are classroom assumptions, not measured table statistics.

> **Teach-back checkpoint:** With multiple winners allowed, why can expected losses be added while hit probabilities cannot simply be summed?

---

# Lesson 28 | Four special settlements: Flower Pig, ready-hand inspection, kong refund, and kong-score transfer

**Phase:** Advanced Play　　**Suggested time:** 21 min  
**Objective:** State each settlement trigger and recipient correctly without mixing the ledgers.

### End-of-wall priorities

When the wall is exhausted, first identify unresolved missing-suit violations, then ready status and kong refund obligations. Players who already won and left are not reclassified as “unready losers.”

### Flower Pig

A player still holding the declared missing suit is Flower Pig. For each eligible recipient, the payer uses **max(64×, that recipient’s maximum ready-hand multiplier)**. This special penalty is not silently reduced by an ordinary win cap.

### Ready-hand inspection (Cha Dajiao)

An unready player pays players who are **ready and have not already won**, using each recipient’s maximum possible winning multiplier. **Self-draw bonus is not included.**

### Kong refund

An unready player returns all kong proceeds from the hand.

### Kong-score transfer

This is triggered by a Kong Discard event rather than by wall exhaustion. The proceeds from that kong move to the winner; if the discard produces multiple winners, the confirmed exception says no transfer occurs.

> **Teach-back checkpoint:** List who receives ready-hand inspection payments, whether self-draw bonus is included, and whether multiple winners trigger kong-score transfer.

---

# Lesson 29 | Endgame accounting in practice

**Phase:** Advanced Play　　**Suggested time:** 18 min  
**Objective:** Calculate different settlement ledgers separately and keep recipients distinct.

### Endgame sequence

Third winner / wall exhausted*→*Check missing suit*→*Flower Pig ledger*→*Ready-hand inspection*→*Kong refund*→*Net total

1. **Kong refund:** an unready player returns all kong proceeds; the exact path back to original payers follows the platform’s accounting.
2. **Ready-hand inspection:** pay each ready, non-winner opponent at that opponent’s maximum possible non-self-draw multiplier.
3. **Flower Pig:** calculate each recipient separately using max(64×, that recipient’s maximum ready multiplier).
4. **Kong-score transfer:** audit earlier Kong Discard events separately.

Example: with base stake 5, paying Player A at max(64,16) costs 320, while paying Player B at max(64,128) costs 640. These are simple multiplier examples; they do not imply that other ledgers automatically stack.

> **Teach-back checkpoint:** With base stake 5 and max(64,128), what is the payment to that one recipient?

---

# Lesson 30 | Full-hand timeline: revise strategy from opening to the last tile

**Phase:** Advanced Play　　**Suggested time:** 21 min  
**Objective:** Update the same hand repeatedly as legal status, opponents, and wall depth change.

### Turn 0: Swap Three and Dingque

Re-score all three missing-suit choices after the swap. Do not lock the pre-swap plan.

### Early turns: missing suit not yet cleared

Even if another suit develops beautifully, carrying the missing suit to the end creates a severe Flower Pig risk. Order forced discards with future danger in mind.

### Midgame: first exposed set

Record the exact exposed tile and the accompanying discard. This changes some hypotheses, but does not prove a ready hand or Full Flush.

### Players begin to leave

Every winner reduces the number of future self-draw payers. Recalculate the marginal value of waiting for a bigger hand.

### Late game

Ready status, refund exposure, and Flower Pig avoidance may dominate earlier value ambitions. Review decisions using only information that was available at the time.

> **Teach-back checkpoint:** Why do an opponent’s first and second exposed Dots sets carry different evidential meaning in a timeline?

---

# Lesson 31 | When two players have already won: re-optimize the remaining game

**Phase:** Advanced Play　　**Suggested time:** 18 min  
**Objective:** Recalculate value as the number of active payers and future turns shrinks.

### The same self-draw pays differently by stage

If one opponent would pay 16 base units on a self-draw, then with three active opponents the gross collection is 48 units, with two it is 32, and with one it is 16, assuming identical multipliers and no special transfers.

That arithmetic does not predict self-draw probability. It only shows that the **reward side** changes mechanically as winners leave.

### Decision reversal

Early in the hand, spending one extra turn to build value may be worthwhile because several opponents would pay. Late in the hand, fewer payers, a shallow wall, and ready-hand inspection pressure can make a fast legal ready hand more valuable.

Audit: active player count; missing suit cleared; ready status; cap; exposed information; and realistic number of future personal draws.

> **Teach-back checkpoint:** Why must the expected value of a big hand change when only one opponent remains active?

---

# Lesson 32 | Continuous reading lab: forced missing-suit discards versus voluntary shape breaks

**Phase:** Advanced Play　　**Suggested time:** 18 min  
**Objective:** Separate forced information from voluntary information and update evidence turn by turn.

### One opponent across several turns

| Turn | Action | Certain fact | Not proven |
| --- | --- | --- | --- |
| 1 | Declares Characters missing, discards 1 Characters | Characters are the missing suit | Not “Dots-only win” |
| 2 | Discards 6 Characters | At least two missing-suit tiles have been cleared | Not evidence of good draw quality |
| 4 | Pungs 555 Bamboo, discards 9 Dots | One exposed Bamboo triplet | Not proof of Full Flush |
| 7 | Pungs 888 Bamboo, discards 1 Dots | Two exposed Bamboo triplets | Not proof of ready status |

The same discard can mean very different things during forced Dingque clearance and late after multiple voluntary exposures. Always list at least one alternative explanation and one new observation that would flip the preferred interpretation.

> **Teach-back checkpoint:** Why do two exposed Bamboo pungs still fail to prove that Player A is ready on Bamboo?

---

# Lesson 33 | The twelve-question master checklist and scientific review

**Phase:** Training & Review　　**Suggested time:** 15 min  
**Objective:** Use a repeatable per-draw decision process and classify errors by rule, calculation, or inference.

### Twelve questions after every draw

1. Is the concealed tile count correct?
2. What is the missing suit, and is it cleared?
3. Can the hand legally win now?
4. How many active players remain?
5. Which discards are legal?
6. Which discards make the hand ready?
7. If not ready, which discards improve structure?
8. What target copies are known to remain in unknown locations?
9. Who can win on this discard, and for how much?
10. Does more fan still have marginal value?
11. Does the action affect Flower Pig, ready-hand inspection, or kong refund?
12. Why is the chosen action better than the best alternative?

### Three error classes

* **Rule errors:** illegal missing-suit hold, missed replacement draw, wrong endgame settlement.
* **Calculation errors:** missed waits, impossible copy counts, incorrect concealed/exposed accounting.
* **Inference errors:** fake precision, frozen hidden-state assumptions, or result-based hindsight.

A useful graduation target is ≥90% on rules, ≥85% on wait enumeration, ≥90% on settlement questions, plus at least 20 reviewed real hands.

> **Teach-back checkpoint:** Can you evaluate a losing hand without saying only “bad luck” or using hidden future information?

---

# Lesson 34 | Scientific review: calibration instead of hindsight

**Phase:** Training & Review　　**Suggested time:** 18 min  
**Objective:** Record decision quality separately from outcomes and quantify uncertainty when possible.

### Record only three key decisions per hand

| Moment | Known then | Candidate actions | Comparison | Observed result |
| --- | --- | --- | --- | --- |
| Dingque | Post-swap hand | Missing Characters / Dots / Bamboo | Clearance cost + retained structure | Record, do not reverse-engineer |
| First major call | Visible tiles + active players | Call / decline | Shanten, risk, scoring | One outcome is not proof |
| Endgame | Wall depth, waits, opponent states | Preserve ready / chase value / defend | Expected value + penalties | Keep counterexamples |

### Three evidence levels

* **Provable:** legal hand structure, physical copy counts, exact probability under stated random assumptions.
* **Conditional:** opponent danger, value of chasing fan, profit of a kong under room-specific cashflows.
* **Requires data:** whether training improves long-run score and whether a discard pattern predicts ready status.

Even a 100-hand sample is noisy. Judge decision process first, then collect enough data before claiming a strategy improvement.

> **Teach-back checkpoint:** Why does “I discarded 5 Dots and someone won on it” fail to prove that discarding 5 Dots was wrong at the time?

---

# Appendix A | Mathematical toolkit

## A.1 Physical copy conservation

Every exact tile has four copies. If you hold `h` copies and `v` copies are publicly visible, the maximum number in unknown locations is `4-h-v`. Unknown locations include opponents’ concealed hands and the wall; this is not a wall count.

## A.2 Sampling without replacement

If the wall is known to contain `W` tiles, exactly `K` targets, and you will personally draw `n` tiles uniformly without replacement, then

`P(at least one hit)=1-C(W-K,n)/C(W,n)`

Use the formula directly only when `K` is truly known. Substituting “unseen copies” for `K` changes the sample space and is usually wrong.

## A.3 Bayesian updating

For hypothesis `H` and evidence `E`:

`P(H|E)=P(E|H)P(H)/[P(E|H)P(H)+P(E|¬H)P(¬H)]`

Across turns, first account for the fact that the opponent’s hidden state can change after a draw/discard. Do not multiply observations as if one hidden state were frozen forever.

## A.4 Break-even risk

If an aggressive line adds expected upside `G` but introduces an extra event with loss `L` and probability `p`, the simplest incremental model is `G-pL`, with break-even `p*=G/L`. A full hand may also require multiple-winner losses, ready-hand inspection, kong cashflow, refund exposure, and a change in win probability.

# Appendix B | Twelve questions after every draw

1. Is the concealed tile count correct?  
2. What is the missing suit, and has it been cleared?  
3. Can the hand legally win now?  
4. How many active players remain?  
5. Which discards are legal?  
6. Which discards make the hand directly ready?  
7. If not ready, which discards improve structure most?  
8. What are the nominal and unknown-location resources for the key targets?  
9. What can this discard cost against each opponent separately?  
10. Does chasing more fan still have marginal value?  
11. Does the action change Flower Pig, ready-hand inspection, kong refund, or kong-score transfer exposure?  
12. Why is this action better than the best alternative, and what new evidence would flip the decision?

# Appendix C | 12-week curriculum

| Week | Focus | Pass criterion |
|---|---|---|
| 1 | Tiles, four-sets-plus-pair, Seven Pairs | Independently validate legal wins |
| 2 | Turn flow, pung/kong, Blood Battle | Explain a full hand without prompts |
| 3 | Swap Three and Dingque | Compare all three Dingque options structurally |
| 4 | Partial sets, waits, effective tiles | ≥85% on 13-tile wait drills |
| 5 | Shanten and post-draw discards | Enumerate all legal candidates |
| 6 | Fan table and special settlements | ≥90% on scoring/endgame rules |
| 7 | Kong ledgers and opportunity cost | Separate kong cashflow, Root, and win payment |
| 8 | Hypergeometric probability | State the sample-space assumptions correctly |
| 9 | Bayes and continuous reading | Avoid unsupported fake precision |
| 10 | Per-opponent risk | Build risk vectors and decision-flip thresholds |
| 11 | Endgame and ready inspection | Prioritize legality and large threshold penalties |
| 12 | Review 20 real hands | Record 3 key decisions per hand without hindsight |

# Appendix D | Glossary

- **Swap Three (换三张):** exchange three tiles of one suit before Dingque.
- **Dingque / Declare a Missing Suit (定缺):** choose one suit that must be cleared before a legal win.
- **Shanten (向听):** structural distance to ready; this course defines ready as 0-shanten.
- **Effective tile (有效张):** a tile that advances the current structure toward the objective.
- **Improvement tile (改良张):** may not lower shanten immediately but improves future shape.
- **Flower Pig / Huazhu (花猪):** large special penalty for still holding the declared missing suit at the end.
- **Ready-hand inspection / Cha Dajiao (查大叫):** unready players pay ready non-winners at their maximum possible winning multiplier; Self-draw bonus is excluded.
- **Kong refund / Tuishui (退税):** an unready player returns all kong proceeds.
- **Kong-score transfer / Hujiao Zhuanyi (呼叫转移):** on a Kong Discard, the kong proceeds move to the winner; the confirmed multiple-winner exception disables the transfer.

# Appendix E | Research boundary and responsible use

Sichuan Mahjong is a stochastic multiplayer game with hidden information. Exact enumeration reduces structural errors but cannot remove draw-order variance. Opponent models without measured data are conditional hypotheses, not facts. Use this material for rules education, recreation, and decision training—not as a guarantee of gambling profit.
