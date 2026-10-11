window.SCMJ_CONTENT = {
  "locale": "en",
  "lang": "en",
  "siteTitle": "Sichuan Mahjong Masterclass",
  "siteSubtitle": "Chuan Mahjong · From zero to evidence-based decision making",
  "projectUrl": "https://github.com/jyu-zhou/sichuan-mahjong-masterclass",
  "author": "jyu-zhou",
  "version": "1.3.0",
  "lessons": [
    {
      "phase": "Getting Started",
      "title": "Rule contract: which version of Sichuan Mahjong this course teaches",
      "minutes": 9,
      "objective": "Distinguish Blood Battle to the End from Blood Flowing River, and understand why the current room rules override generic rule summaries.",
      "checkpoint": "Without looking at tiles, explain why a player leaving after winning changes the number of payers on a later self-draw.",
      "html": "<h3>The core rule set in one paragraph</h3><p><strong>Four players, 108 suited tiles only, Swap Three, Declare a Missing Suit, no chow, pung and kong allowed, and a winner leaves the hand. The hand ends when three players have won or the wall is exhausted.</strong> This is the Sichuan Mahjong form commonly called <strong>Blood Battle to the End (Xuezhan Daodi)</strong>, not Blood Flowing River, where winners can keep playing and win repeatedly.</p><p><strong>Rule priority:</strong> current in-game rule pages and fan table first; confirmed room settings second; official Tencent/Joy Mahjong material is used only for cross-checking when it does not conflict. Never silently merge two different rule sets.</p><h3>Why rule precision matters</h3><p>The strategic objective is not “win first every hand.” It is to improve <strong>long-run expected net score while controlling large downside events</strong>. A Flower Pig penalty can be at least 64×, so legality and endgame obligations can dominate a small efficiency gain.</p><h3>Learning path</h3><p>Start with tiles and legal winning shapes, then learn Swap Three and Dingque, tile efficiency, scoring, probability, opponent inference, defense, endgame settlement, and scientific review.</p><blockquote><p>Base stake and ordinary cap values in the calculators are teaching parameters. Replace them with the actual room parameters when playing.</p></blockquote>"
    },
    {
      "phase": "Getting Started",
      "title": "The 108 tiles: Characters, Dots, and Bamboo",
      "minutes": 10,
      "objective": "Recognize all three suits, ranks 1–9, and the hard physical constraint that exactly four copies of each tile exist.",
      "checkpoint": "Why does “one visible copy plus two copies in your hand” imply at most one unknown copy, but not one copy definitely in the wall?",
      "html": "<h3>Three suits only</h3><ul><li><strong>Characters (Wan)</strong>: 1–9 Characters.</li><li><strong>Dots (Tong)</strong>: 1–9 Dots.</li><li><strong>Bamboo (Tiao)</strong>: 1–9 Bamboo.</li></ul><p>Each exact tile has four physical copies. Therefore 3 suits × 9 ranks × 4 copies = <strong>108 tiles</strong>. This course does not use winds, dragons, or flowers.</p><h3>Why copy counting comes first</h3><p>If a record would require five copies of the same tile, the record is wrong. <strong>An impossible event has probability zero</strong>, which is stronger evidence than any reading heuristic.</p><h3>Practice</h3><p>Use the Hand Lab to find 5 Dots, 2 Characters, and 9 Bamboo. Add four copies of one tile and verify that a fifth copy is rejected.</p><blockquote><p>“Unseen” never means “in the wall.” An unseen tile may be in another player’s concealed hand.</p></blockquote>"
    },
    {
      "phase": "Getting Started",
      "title": "How to read a hand: sequences, triplets, and the pair",
      "minutes": 18,
      "objective": "Identify sequences, triplets, the pair, and suits directly from tile graphics.",
      "checkpoint": "Among the examples shown, which group can serve as the pair, and why?",
      "html": "<h3>See the shape before calculating</h3><div class=\"skill-figure\"><div><b>Characters</b><div class=\"sample-tiles\" data-tiles=\"w1 w2 w3\"></div><small>123 Characters: a sequence</small></div><div><b>Dots</b><div class=\"sample-tiles\" data-tiles=\"p5 p5 p5\"></div><small>555 Dots: a triplet</small></div><div><b>Bamboo</b><div class=\"sample-tiles\" data-tiles=\"s7 s7\"></div><small>77 Bamboo: a pair</small></div></div><p>A tile’s printed rank is not a tile count: “7 Dots” is one physical tile, not seven tiles. A sequence must use three consecutive ranks in the <strong>same suit</strong>.</p><p><strong>Hands-on task:</strong> build 123 Characters, 555 Dots, and 77 Bamboo in the lab. Every physical copy still obeys the four-copy limit.</p>"
    },
    {
      "phase": "Getting Started",
      "title": "Winning hand skeleton: four sets plus a pair, or Seven Pairs",
      "minutes": 17,
      "objective": "Decompose a 14-tile hand into four sets plus a pair, or recognize Seven Pairs.",
      "checkpoint": "Given any 14-tile hand, prove legality first. Only then classify the fan pattern.",
      "html": "<h3>Standard winning structure</h3><p>A regular win is <strong>3+3+3+3+2=14 tiles</strong>. Each three-tile set is either a same-suit sequence such as 234 Characters or a triplet such as 555 Dots. The final two identical tiles form the pair.</p><div class=\"sample-tiles\" data-tiles=\"w2 w3 w4 w4 w5 w6 p2 p3 p4 p7 p8 p9 w8 w8\"></div><p>This hand can be decomposed into 234 Characters, 456 Characters, 234 Dots, 789 Dots, and 88 Characters. It is a legal regular win if Bamboo was the declared missing suit and no Bamboo remains.</p><h3>Seven Pairs</h3><p>Seven Pairs uses seven pairs for 14 tiles and normally requires a fully concealed hand. Four identical tiles may be decomposed as two pairs for shape analysis; the fan table determines whether the result is Dragon Seven Pairs.</p><blockquote><p>Always ask in this order: “Is it legal?” → “Which pattern is it?” → “How much does it score?”</p></blockquote>"
    },
    {
      "phase": "Getting Started",
      "title": "Visual decomposition: turn 14 tiles into five blocks",
      "minutes": 18,
      "objective": "Explain a complete win as four sets plus one pair even when sets are exposed.",
      "checkpoint": "If 555 Dots is already exposed as a pung, how many complete concealed sets and pairs must the remaining concealed tiles supply?",
      "html": "<h3>From a flat row to five blocks</h3><div class=\"skill-figure five\"><div><div class=\"sample-tiles\" data-tiles=\"w2 w3 w4\"></div><small>234 Characters</small></div><div><div class=\"sample-tiles\" data-tiles=\"w4 w5 w6\"></div><small>456 Characters</small></div><div><div class=\"sample-tiles\" data-tiles=\"p2 p3 p4\"></div><small>234 Dots</small></div><div><div class=\"sample-tiles\" data-tiles=\"p7 p8 p9\"></div><small>789 Dots</small></div><div><div class=\"sample-tiles\" data-tiles=\"w8 w8\"></div><small>Pair: 88 Characters</small></div></div><p>Tile count alone is not enough. Missing-suit legality must be satisfied; exposed pungs and kongs already occupy set slots; and Seven Pairs follows a different decomposition.</p><blockquote><p>Do not demand 14 concealed tiles after exposing a pung or kong. Count the whole hand structure, not only the concealed portion.</p></blockquote>"
    },
    {
      "phase": "Getting Started",
      "title": "Turn structure: draw, discard, pung, and kong",
      "minutes": 14,
      "objective": "Describe a full turn and distinguish pung, exposed kong, concealed kong, and added kong.",
      "checkpoint": "After a pung, why can you no longer test only the concealed tiles against a 14-tile winning template?",
      "html": "<h3>Normal turn flow</h3><p>The dealer starts with 14 tiles and discards first. Other players normally draw one tile and discard one. <strong>Chow is not allowed.</strong> Pung, kong, and win are allowed when their conditions are met.</p><ul><li><strong>Pung:</strong> two concealed copies plus another player’s discard.</li><li><strong>Exposed kong:</strong> three concealed copies plus another player’s discard.</li><li><strong>Concealed kong:</strong> four identical concealed tiles.</li><li><strong>Added kong:</strong> add a self-drawn fourth copy to an earlier pung; this may be robbed if the rule allows it.</li></ul><h3>Replacement draw after a kong</h3><p>A kong uses four physical tiles to occupy one set slot, so a replacement tile must be drawn. Missing the replacement draw can create an invalid hand state.</p><p>Once a player has won and left the hand, that player no longer participates in normal drawing or later self-draw payments. Kong-score accounting remains a separate ledger.</p>"
    },
    {
      "phase": "Getting Started",
      "title": "Full hand flow: from dealing to the third winner",
      "minutes": 18,
      "objective": "Know the prerequisites for each action and how tile counts change.",
      "checkpoint": "After one player wins, does that player keep drawing? Does play continue after the third player wins?",
      "html": "<div class=\"process\"><span>Deal + Swap Three</span><i>→</i><span>Declare missing suit</span><i>→</i><span>Dealer discards</span><i>→</i><span>Draw–discard cycle</span><i>→</i><span>Pung / Kong / Win checks</span><i>→</i><span>Third winner or wall exhausted</span></div><h3>Three common interruptions</h3><ol><li>If another player discards a tile you can pung, a pung immediately creates an exposed triplet and you then discard without first drawing.</li><li>If you declare a kong, settle the kong event according to the room rules and take the replacement draw.</li><li>If a discard can win your hand, winning has priority over pung/kong choices; any pass-win restriction must also be respected.</li></ol><pre><code>Legal to win? ─ yes → verify missing suit + hand shape → decide whether to win\n              └ no  → can pung/kong? → expose or wait for normal draw\n</code></pre>"
    },
    {
      "phase": "Opening Module",
      "title": "Swap Three: a mandatory opening module",
      "minutes": 12,
      "objective": "Treat the swap as pre-Dingque structure optimization, then re-evaluate the hand after receiving three tiles.",
      "checkpoint": "If the three incoming tiles create a complete sequence, why must Dingque be re-evaluated instead of following the pre-swap plan?",
      "html": "<h3>Operate correctly first</h3><p>Swap Three usually requires selecting <strong>three tiles from the same suit</strong> and exchanging them according to the room’s direction rule. Exact direction and animation are interface rules, not strategic assumptions.</p><h3>Do not simply dump the smallest suit</h3><p>If 123 Characters is already a sequence while 147 Bamboo is scattered, swapping 147 Bamboo usually destroys less structure, all else equal. But suit count alone is never sufficient: preserve complete sets, strong pairs, and flexible compound shapes.</p><h3>Re-evaluate after the swap</h3><p>The incoming tiles can radically change all three suits. <strong>Dingque must be chosen from the post-swap hand.</strong> Swap history is useful private information, but tiles given away should not be assumed to remain in that opponent’s concealed hand forever.</p>"
    },
    {
      "phase": "Tile-Efficiency Foundations",
      "title": "Dingque: the hard legality constraint",
      "minutes": 16,
      "objective": "Compare all three missing-suit choices with legality first, while understanding the large Flower Pig downside.",
      "checkpoint": "If Characters is your missing suit and only one 8 Characters remains, are you safe merely because the hand now uses only two suits?",
      "html": "<h3>Dingque is a legal constraint, not a style preference</h3><p>After declaring a missing suit, tiles of that suit cannot remain in a legal winning hand. If the wall ends while you still hold the declared missing suit, the hand can be treated as <strong>Flower Pig (Huazhu)</strong>.</p><h3>Three-candidate comparison</h3><p>Evaluate Missing Characters, Missing Dots, and Missing Bamboo separately: (1) how many tiles must be cleared; (2) how many completed sets remain in the other two suits; (3) pair and partial-set quality; (4) risk of the forced discards while clearing the suit.</p><ul><li>Fewer missing-suit tiles often means faster clearance, but not always the best preserved structure.</li><li>Full Flush is legal: ending with only one suit does not violate Dingque.</li><li>A hand can be only two suits yet still be illegal if one of those suits is the declared missing suit.</li></ul><h3>Large downside</h3><p>For each eligible recipient, the Flower Pig multiplier is the larger of <strong>64×</strong> and that recipient’s maximum ready-hand winning multiplier. Ordinary win caps must not silently cap this special settlement.</p>"
    },
    {
      "phase": "Tile-Efficiency Foundations",
      "title": "Dingque in practice: clear fastest or preserve stronger structure?",
      "minutes": 18,
      "objective": "Balance forced-clearance cost against the quality of the two suits that remain.",
      "checkpoint": "Why is minimizing the number of missing-suit discards not the whole Dingque objective?",
      "html": "<h3>A three-option scorecard</h3><table><thead><tr><th>Metric</th><th>Meaning</th><th>Precision</th></tr></thead><tbody><tr><td>Clearance cost</td><td>Physical tiles that must be discarded from the missing suit</td><td>Exact</td></tr><tr><td>Retained efficiency</td><td>Completed sets, pairs, and partial sets in the other two suits</td><td>Enumeratable</td></tr><tr><td>Distance to ready</td><td>How far each plan is from a legal ready hand</td><td>Computable with search</td></tr><tr><td>Opponent risk</td><td>Danger of forced missing-suit discards</td><td>Estimated, not exact</td></tr></tbody></table><p>Example: 123 Characters | 147 Dots | 2345678 Bamboo. Characters already form a set, Dots are scattered, Bamboo is highly connected. Missing Dots is structurally more attractive than randomly choosing between the two three-tile suits.</p><p>Dingque is a legality constraint. It is not the same question as “Should I pursue Full Flush?”</p>"
    },
    {
      "phase": "Tile-Efficiency Foundations",
      "title": "Building useful shapes: isolated tiles, pairs, partial sets, compound shapes",
      "minutes": 16,
      "objective": "Recognize open waits, closed waits, edge waits, and why compound shapes should not be broken mechanically.",
      "checkpoint": "Why is 45 Characters usually wider than 46 Characters, yet not automatically the correct hold in every hand?",
      "html": "<h3>Three two-tile shapes</h3><p><strong>45 Characters</strong> completes with 3 or 6 (open wait); <strong>46 Characters</strong> completes only with 5 (closed wait); <strong>12 Characters</strong> completes only with 3 (edge wait). If all target copies are otherwise unseen, their nominal resources are 8, 4, and 4.</p><p><strong>Nominal resource count is not actual draw probability.</strong> Target tiles may already be concealed by opponents.</p><h3>Compound structures</h3><p>34567 Characters is not merely one sequence. It supports multiple decompositions and future improvements. Evaluate complete sets, pair candidates, and flexible partial sets together rather than counting “connected tiles” in isolation.</p>"
    },
    {
      "phase": "Tile-Efficiency Foundations",
      "title": "Ready hands, effective tiles, and visible-tile correction",
      "minutes": 20,
      "objective": "List all winning tiles and distinguish theoretical copies, unknown-location copies, and actual wall copies.",
      "checkpoint": "Why is “two unknown copies remain” different from “two copies are in the wall”?",
      "html": "<h3>Ready hand</h3><p>A 13-tile hand is ready when adding at least one specific tile produces a legal winning hand. A hand can have multiple winning tile types.</p><h3>Three layers of resource counting</h3><ol><li><strong>Theoretical copies:</strong> four of each winning tile minus copies in your own hand.</li><li><strong>Unknown-location copies:</strong> subtract public discards and exposed melds as well.</li><li><strong>Actual wall copies:</strong> subtract copies concealed by opponents too. This value is usually unknown.</li></ol><p>If you wait on 5 Dots, hold none, and two 5 Dots are publicly visible, at most two copies remain in unknown locations. That does <strong>not</strong> mean a 50% draw chance.</p><p>The Hand Lab can enumerate waits for fully concealed 13-tile hands and compare direct-ready discards from a 14-tile hand.</p>"
    },
    {
      "phase": "Tile-Efficiency Foundations",
      "title": "Why compound shapes matter: one tile can improve several routes",
      "minutes": 18,
      "objective": "Move beyond one-step effective-tile counting and reason about next-turn improvements.",
      "checkpoint": "Why can 23456 Dots not be treated as two disjoint completed sets at the same time?",
      "html": "<h3>Open, closed, and edge waits</h3><div class=\"skill-figure\"><div><b>Open</b><div class=\"sample-tiles\" data-tiles=\"p4 p5\"></div><small>3 or 6 Dots</small></div><div><b>Closed</b><div class=\"sample-tiles\" data-tiles=\"p4 p6\"></div><small>5 Dots only</small></div><div><b>Edge</b><div class=\"sample-tiles\" data-tiles=\"p1 p2\"></div><small>3 Dots only</small></div></div><p>With 23456 Dots, decompositions such as 234 + 56 and 23 + 456 share physical tiles. You may not count the same copy twice.</p><p><strong>Effective tiles</strong> immediately improve distance to ready. <strong>Improvement tiles</strong> may keep the same distance while creating a wider next step. Long-run evaluation therefore cannot be reduced to adding 4s and 8s across overlapping partial sets.</p>"
    },
    {
      "phase": "Tile-Efficiency Foundations",
      "title": "Shanten, improvements, and “what do I discard after drawing?”",
      "minutes": 20,
      "objective": "Compare legal discards by enumeration and structure rather than visual intuition.",
      "checkpoint": "When two discards are both not ready, why does the site refuse to claim a globally optimal choice from direct wait count alone?",
      "html": "<h3>Shanten convention</h3><p>This course uses <strong>0-shanten for a ready hand</strong>. One-shanten means one structural improvement away from ready, not “guaranteed to get ready within one draw.”</p><h3>Enumerate every legal discard</h3><p>After drawing to 14 tiles, test every distinct legal discard. For each resulting 13-tile hand, evaluate legality, direct waits, unknown-location resources, future improvement quality, and discard danger.</p><h3>One-turn resource count is not enough</h3><p>Plan A may be ready to eight nominal copies now but have a poor resulting wait; Plan B may have only six immediate improvement copies yet frequently transform into a wider ready hand. Compare like with like and include risk and score.</p><p>The lab precisely enumerates waits and direct-ready discards for concealed hands. It is not a universal shanten solver or globally optimal policy engine.</p>"
    },
    {
      "phase": "Tile-Efficiency Foundations",
      "title": "Shanten drill: how not to miss a better discard",
      "minutes": 18,
      "objective": "Use action enumeration rather than intuition to audit a post-draw hand.",
      "checkpoint": "Why can an upper bound of eleven winning copies never prove that eleven copies are in the wall?",
      "html": "<h3>Five-step audit for a 14-tile hand</h3><ol><li>List every distinct legal discard type.</li><li>Remove one copy to form a 13-tile hand.</li><li>Check that the declared missing suit has been cleared before calling it ready.</li><li>Test all 27 suited tile types as candidate winning tiles.</li><li>Count winning types and remaining unknown copies, then correct further with public information.</li></ol><div class=\"sample-tiles\" data-tiles=\"w2 w3 w4 w4 w5 w6 p4 p4 p4 p5 p7 p8 p8 p8\"></div><p>Declare Bamboo missing. Compare discarding 5 Dots with discarding 7 Dots in the Hand Lab, then mark visible tiles and observe whether the resource ranking changes.</p><blockquote><p>Exact structural enumeration can validate waits. It still does not prove which discard maximizes long-run expected score.</p></blockquote>"
    },
    {
      "phase": "Scoring & Decisions",
      "title": "Fans and multipliers: keep the scoring layers separate",
      "minutes": 17,
      "objective": "Separate base hand multiplier, bonus ×2 conditions, room cap, kong ledger, and special endgame penalties.",
      "checkpoint": "Why does reaching the ordinary cap not prove that every further kong is bad?",
      "html": "<h3>Use the current fan table, not legacy arithmetic</h3><p>The canonical table in this course starts at <strong>0 fan = 1× for a basic hand</strong>, then 1 fan = 2×, 2 fan = 4×, and so on. The base pattern is classified first; applicable bonus conditions are handled separately.</p><h3>Keep three ledgers apart</h3><p><strong>Winning payment</strong>, <strong>immediate kong cashflow</strong>, and <strong>end-of-wall settlements</strong> interact but are not the same thing. Reaching an ordinary win cap can eliminate the marginal scoring value of another bonus while a kong may still have its own cashflow, replacement draw, or risk consequences.</p><p>The calculators expose base stake and cap as parameters because rooms can differ. Flower Pig uses its own minimum rule and should not be silently capped by the ordinary-win cap.</p>"
    },
    {
      "phase": "Scoring & Decisions",
      "title": "Base fan catalogue I: 0 to 8 fan",
      "minutes": 18,
      "objective": "Memorize the base hand categories and multipliers in the current rule table.",
      "checkpoint": "Which of Dragon Seven Pairs and Full Flush Dragon Seven Pairs requires one suit, and what are their base multipliers?",
      "html": "<h3>Canonical base patterns</h3><table><thead><tr><th>Multiplier · fan</th><th>Pattern</th></tr></thead><tbody><tr><td>1× · 0</td><td>Basic Hand</td></tr><tr><td>2× · 1</td><td>All Pungs</td></tr><tr><td>4× · 2</td><td>Full Flush, Seven Pairs, Golden Hook</td></tr><tr><td>8× · 3</td><td>Full Flush All Pungs, Dragon Seven Pairs</td></tr><tr><td>16× · 4</td><td>Full Flush Seven Pairs, Double Dragon Seven Pairs, Full Flush Golden Hook</td></tr><tr><td>32× · 5</td><td>Full Flush Dragon Seven Pairs, Triple Dragon Seven Pairs</td></tr><tr><td>64× · 6</td><td>Full Flush Double Dragon Seven Pairs, Eighteen Arhats</td></tr><tr><td>128× · 7</td><td>Full Flush Triple Dragon Seven Pairs</td></tr><tr><td>256× · 8</td><td>Full Flush Eighteen Arhats</td></tr></tbody></table><p>Classify the complete base pattern as a whole. Do not multiply overlapping base names again unless the rule table explicitly treats them as separate bonuses.</p><p>Golden Hook means four exposed pung/kong sets with a single concealed tile waiting as the pair. Eighteen Arhats requires four declared kongs and therefore cannot be validated by a simple 14-concealed-tile checker.</p>"
    },
    {
      "phase": "Scoring & Decisions",
      "title": "Fan catalogue II: bonus ×2 conditions, non-stackable hands, and double counting",
      "minutes": 18,
      "objective": "Know which conditions multiply the base hand and why some structures must not be counted twice.",
      "checkpoint": "Can the four identical tiles inside Dragon Seven Pairs always be multiplied again as a Root? Why is the safe default “not unless confirmed”?",
      "html": "<h3>Bonus conditions shown as ×2</h3><table><thead><tr><th>Condition</th><th>Trigger</th><th>Boundary</th></tr></thead><tbody><tr><td>Self-draw</td><td>You draw the winning tile</td><td>Payers are the players still active</td></tr><tr><td>Win after Kong</td><td>The replacement tile wins</td><td>Check whether Self-draw is separately stackable</td></tr><tr><td>Kong Discard</td><td>Your post-kong discard lets another player win</td><td>Also audit kong-score transfer</td></tr><tr><td>Robbing a Kong</td><td>Win on another player’s added-kong tile</td><td>Do not assume a concealed kong can be robbed</td></tr><tr><td>Last Tile</td><td>Win as the wall is exhausted</td><td>×2 under the current table</td></tr><tr><td>Root (Gen)</td><td>Four identical tiles count as a root</td><td>Avoid double-counting structures already embedded in a named base hand</td></tr></tbody></table><h3>Heavenly and Earthly Hands</h3><p>These special hands are settled directly at the current room cap and do not stack with the other fan conditions.</p><p>Until a room settlement record proves otherwise, this course avoids adding a Root again when the base hand already exists because of that same four-of-a-kind structure.</p>"
    },
    {
      "phase": "Scoring & Decisions",
      "title": "Pung and kong decisions: five ledgers, not one",
      "minutes": 19,
      "objective": "Audit direct kong cashflow, Root value, replacement draw, information leakage, and refund/transfer risk separately.",
      "checkpoint": "Why can immediate money collected from a concealed kong fail to be final profit if the wall ends and you are not ready?",
      "html": "<h3>A kong changes at least five things</h3><ol><li><strong>Immediate kong cashflow</strong> according to the kong type.</li><li><strong>Root/fan potential</strong> if the final winning pattern qualifies.</li><li><strong>Replacement draw</strong>, which can improve or win the hand.</li><li><strong>Information and discard risk</strong>, because more of your structure becomes fixed and visible.</li><li><strong>End-of-wall refund risk</strong>: an unready player returns all kong proceeds under the confirmed refund rule.</li></ol><h3>Kong-score transfer</h3><p>If a post-kong discard is won, the score won from that kong is transferred to the winning player. If the same discard creates multiple winners, the confirmed rule says the transfer is <strong>not triggered</strong>.</p><p>Exact immediate kong payment amounts can vary by room, so the course keeps kong cashflow as a separate parameterized ledger instead of hiding it inside fan calculation.</p>"
    },
    {
      "phase": "Scoring & Decisions",
      "title": "Kong accounting: four similar events, four separate books",
      "minutes": 18,
      "objective": "Separate kong payment, Root fan, replacement-tile win, and Kong Discard loss.",
      "checkpoint": "Why is it a major accounting error to record immediate kong cashflow as if it were the final hand multiplier?",
      "html": "<h3>Four ledgers</h3><table><thead><tr><th>Ledger</th><th>Trigger</th><th>Interaction</th></tr></thead><tbody><tr><td>Kong cashflow</td><td>Concealed/exposed/added kong is completed</td><td>Immediate, but may later be refunded or transferred</td></tr><tr><td>Root multiplier</td><td>A qualifying four-of-a-kind exists in the winning hand</td><td>Do not double-count a named pattern’s embedded structure</td></tr><tr><td>Replacement-tile win</td><td>The kong replacement tile wins</td><td>May combine with Self-draw depending on the room rule</td></tr><tr><td>Kong Discard</td><td>The discard after a kong is won by another player</td><td>Fan settlement and kong-score transfer are separate</td></tr></tbody></table><p>Historical Tencent tournament rules are useful for context but cannot overwrite the current room’s kong payment schedule. Treat published examples as a separate ruleset.</p><p>When one post-kong discard produces multiple winners, do not apply kong-score transfer under the confirmed exception.</p>"
    },
    {
      "phase": "Scoring & Decisions",
      "title": "Why “win fast” versus “chase value” can reverse",
      "minutes": 15,
      "objective": "Use expected value and opportunity cost instead of maximum fan alone.",
      "checkpoint": "Why can maximum possible fan never by itself determine the best strategy?",
      "html": "<h3>Winning bigger is not the same as choosing better</h3><p>Suppose a fast route wins 60% of the time for +20 and a value route wins 30% for +50, ignoring every other outcome. Their success terms are 12 and 15. The value route leads by only 3, so any additional expected loss from deal-ins, endgame penalties, or staying active can reverse the ranking.</p><h3>Expected value</h3><p><strong>Strategy value = sum of each final net score × its probability.</strong> Compare complete outcomes, not just the payout when the plan succeeds.</p><p>If the ordinary self-draw payment is already capped, another fan may add zero marginal win payment. Giving up effective tiles for that fan can be negative even if the hand looks “bigger.”</p><p>Ask: how much extra value is available, how many turns are sacrificed, what discard danger rises, how many opponents are still paying, and what happens if the wall ends?</p>"
    },
    {
      "phase": "Probability & Inference",
      "title": "Probability I: wall composition and the hypergeometric model",
      "minutes": 18,
      "objective": "Use without-replacement probability correctly and state when the formula is invalid.",
      "checkpoint": "If three target tiles are unseen but their locations are unknown, why can you not set K=3 automatically?",
      "html": "<h3>The clean model</h3><p>If the wall is known to contain W tiles, exactly K of them are targets, and you will draw n tiles uniformly without replacement, then</p><p><strong>P(at least one target)=1−C(W−K,n)/C(W,n).</strong></p><p>Example: W=20, K=3, n=2. The no-hit probability is (17/20)×(16/19)=0.7158, so the hit probability is about 28.42%.</p><h3>Why “unseen” cannot be substituted for K</h3><p>If three copies are unseen, they may be split between opponents’ concealed hands and the wall. The true wall count could be 0, 1, 2, or 3.</p><p>Also verify that you really get n future draws. Other players may draw, pung, kong, win, or leave before that happens.</p>"
    },
    {
      "phase": "Probability & Inference",
      "title": "From physical copies to probability: derive the sample space",
      "minutes": 18,
      "objective": "Separate unseen count, wall count, and number of future draws.",
      "checkpoint": "Can the hypergeometric formula be used directly when K is unknown?",
      "html": "<h3>Three quantities that must not be conflated</h3><p><strong>Unseen copies</strong> = 4 − copies in your hand − publicly visible copies. They occupy unknown locations.</p><p><strong>Target copies in the wall</strong> require additional hidden-information assumptions.</p><p><strong>Number of draws you will personally receive</strong> depends on turn order, calls, kongs, and players leaving the hand.</p><h3>Why not just use 3/20 × 2?</h3><p>That treats draws as independent and ignores the fact that sampling changes the remaining population. The correct without-replacement model is hypergeometric.</p><p>Use the calculator to vary W, K, and n. Setting K=0 should always produce 0%.</p>"
    },
    {
      "phase": "Probability & Inference",
      "title": "Probability II: conditional inference and dynamic hand reading",
      "minutes": 18,
      "objective": "Separate certainty, rule-based exclusion, and probabilistic behavioral clues.",
      "checkpoint": "Why does two exposed Dots triplets support some hypotheses without proving that the opponent is ready in Full Flush?",
      "html": "<h3>Three evidence classes</h3><p><strong>Certain facts:</strong> your tiles, public discards, exposed melds, declared missing suits, and who has already won. <strong>Rule constraints:</strong> which suits an opponent cannot legally keep to the end. <strong>Probabilistic clues:</strong> sudden suit switches, repeated calls, or deliberate shape breaks.</p><h3>A Bayes example</h3><p>Let the prior probability that an opponent is ready be 20%. Suppose a certain action occurs 60% of the time when ready and 30% when not ready. Then</p><p><strong>0.2×0.6 / (0.2×0.6 + 0.8×0.3) = 1/3.</strong></p><p>These numbers illustrate the calculation only; they are not measured Sichuan Mahjong statistics.</p><h3>Time matters</h3><p>Between observations, draws and discards can change the hidden state itself. Do not repeatedly multiply evidence as if “ready/not ready” were frozen across turns.</p>"
    },
    {
      "phase": "Probability & Inference",
      "title": "Hidden information and Bayes: reading is not mind-reading",
      "minutes": 18,
      "objective": "Define hypotheses, priors, likelihoods, and posteriors with explicit boundaries.",
      "checkpoint": "Why does the 20% prior in the worked example update to one-third?",
      "html": "<h3>Use testable hypotheses</h3><p>Let H = “Player A is currently ready” and E = “A pungs a Bamboo triplet this turn and discards a Dot.” With P(H)=20%, P(E|H)=60%, and P(E|not H)=30%, Bayes’ rule gives one-third.</p><p>The values are illustrative. Without behavioral data, do not claim that a pung “adds exactly ten percentage points” to ready probability.</p><h3>State transition before observation update</h3><p>Between turns, the opponent can draw into ready, lose a ready shape, or change to a wider wait. A more faithful process predicts a new prior after the hidden state transition, then updates that prior with the new observation.</p><p>When the evidence base is weak, the labels <strong>higher / lower / insufficient evidence</strong> are often more honest than false precision.</p>"
    },
    {
      "phase": "Probability & Inference",
      "title": "Per-opponent defense and break-even risk",
      "minutes": 19,
      "objective": "Measure risk as probability × loss and audit each opponent separately.",
      "checkpoint": "Why does “absolutely safe against Player A” not mean “safe to discard”?",
      "html": "<h3>Safety is opponent-specific</h3><p>If Player A declared Characters missing, a Character tile cannot be A’s legal winning discard. Players B and C may still be waiting on it.</p><h3>Simple break-even threshold</h3><p>If an aggressive choice creates +4 expected points but adds one possible 80-point deal-in, the extra deal-in probability that breaks even is <strong>4/80=5%</strong>. Above that threshold, the simplified aggressive option is worse.</p><h3>When the shortcut fails</h3><p>Multiple winners, changing ready probabilities, ready-hand inspection, kong cashflow, or other score transfers require additional terms.</p><p>When the probability is unknown, use a range and identify the <strong>decision-flip threshold</strong> rather than inventing 7.23%.</p>"
    },
    {
      "phase": "Probability & Inference",
      "title": "Risk ledger: who can win, how much, and who pays?",
      "minutes": 18,
      "objective": "Replace the idea of one “safe tile” with a vector of opponent-specific risks.",
      "checkpoint": "With multiple winners allowed, why can expected losses be added while hit probabilities cannot simply be summed?",
      "html": "<h3>One discard creates several risk channels</h3><p><code>Expected loss(t)=Σ[P(opponent j wins on t) × actual payment to j] + other direct losses.</code></p><p>Linearity of expectation allows opponent-specific loss terms to be added even when several opponents can win on the same discard. But the probability that <em>at least one</em> opponent wins cannot be found by simply adding marginal probabilities.</p><p>Illustration: if B wins with probability 10% for a payment of 8, and C with probability 5% for 64, the two expected loss terms total 0.1×8+0.05×64=4.</p><p>Again, the percentages are classroom assumptions, not measured table statistics.</p>"
    },
    {
      "phase": "Advanced Play",
      "title": "Four special settlements: Flower Pig, ready-hand inspection, kong refund, and kong-score transfer",
      "minutes": 21,
      "objective": "State each settlement trigger and recipient correctly without mixing the ledgers.",
      "checkpoint": "List who receives ready-hand inspection payments, whether self-draw bonus is included, and whether multiple winners trigger kong-score transfer.",
      "html": "<h3>End-of-wall priorities</h3><p>When the wall is exhausted, first identify unresolved missing-suit violations, then ready status and kong refund obligations. Players who already won and left are not reclassified as “unready losers.”</p><h3>Flower Pig</h3><p>A player still holding the declared missing suit is Flower Pig. For each eligible recipient, the payer uses <strong>max(64×, that recipient’s maximum ready-hand multiplier)</strong>. This special penalty is not silently reduced by an ordinary win cap.</p><h3>Ready-hand inspection (Cha Dajiao)</h3><p>An unready player pays players who are <strong>ready and have not already won</strong>, using each recipient’s maximum possible winning multiplier. <strong>Self-draw bonus is not included.</strong></p><h3>Kong refund</h3><p>An unready player returns all kong proceeds from the hand.</p><h3>Kong-score transfer</h3><p>This is triggered by a Kong Discard event rather than by wall exhaustion. The proceeds from that kong move to the winner; if the discard produces multiple winners, the confirmed exception says no transfer occurs.</p>"
    },
    {
      "phase": "Advanced Play",
      "title": "Endgame accounting in practice",
      "minutes": 18,
      "objective": "Calculate different settlement ledgers separately and keep recipients distinct.",
      "checkpoint": "With base stake 5 and max(64,128), what is the payment to that one recipient?",
      "html": "<h3>Endgame sequence</h3><div class=\"process\"><span>Third winner / wall exhausted</span><i>→</i><span>Check missing suit</span><i>→</i><span>Flower Pig ledger</span><i>→</i><span>Ready-hand inspection</span><i>→</i><span>Kong refund</span><i>→</i><span>Net total</span></div><ol><li><strong>Kong refund:</strong> an unready player returns all kong proceeds; the exact path back to original payers follows the platform’s accounting.</li><li><strong>Ready-hand inspection:</strong> pay each ready, non-winner opponent at that opponent’s maximum possible non-self-draw multiplier.</li><li><strong>Flower Pig:</strong> calculate each recipient separately using max(64×, that recipient’s maximum ready multiplier).</li><li><strong>Kong-score transfer:</strong> audit earlier Kong Discard events separately.</li></ol><p>Example: with base stake 5, paying Player A at max(64,16) costs 320, while paying Player B at max(64,128) costs 640. These are simple multiplier examples; they do not imply that other ledgers automatically stack.</p>"
    },
    {
      "phase": "Advanced Play",
      "title": "Full-hand timeline: revise strategy from opening to the last tile",
      "minutes": 21,
      "objective": "Update the same hand repeatedly as legal status, opponents, and wall depth change.",
      "checkpoint": "Why do an opponent’s first and second exposed Dots sets carry different evidential meaning in a timeline?",
      "html": "<h3>Turn 0: Swap Three and Dingque</h3><p>Re-score all three missing-suit choices after the swap. Do not lock the pre-swap plan.</p><h3>Early turns: missing suit not yet cleared</h3><p>Even if another suit develops beautifully, carrying the missing suit to the end creates a severe Flower Pig risk. Order forced discards with future danger in mind.</p><h3>Midgame: first exposed set</h3><p>Record the exact exposed tile and the accompanying discard. This changes some hypotheses, but does not prove a ready hand or Full Flush.</p><h3>Players begin to leave</h3><p>Every winner reduces the number of future self-draw payers. Recalculate the marginal value of waiting for a bigger hand.</p><h3>Late game</h3><p>Ready status, refund exposure, and Flower Pig avoidance may dominate earlier value ambitions. Review decisions using only information that was available at the time.</p>"
    },
    {
      "phase": "Advanced Play",
      "title": "When two players have already won: re-optimize the remaining game",
      "minutes": 18,
      "objective": "Recalculate value as the number of active payers and future turns shrinks.",
      "checkpoint": "Why must the expected value of a big hand change when only one opponent remains active?",
      "html": "<h3>The same self-draw pays differently by stage</h3><p>If one opponent would pay 16 base units on a self-draw, then with three active opponents the gross collection is 48 units, with two it is 32, and with one it is 16, assuming identical multipliers and no special transfers.</p><p>That arithmetic does not predict self-draw probability. It only shows that the <strong>reward side</strong> changes mechanically as winners leave.</p><h3>Decision reversal</h3><p>Early in the hand, spending one extra turn to build value may be worthwhile because several opponents would pay. Late in the hand, fewer payers, a shallow wall, and ready-hand inspection pressure can make a fast legal ready hand more valuable.</p><p>Audit: active player count; missing suit cleared; ready status; cap; exposed information; and realistic number of future personal draws.</p>"
    },
    {
      "phase": "Advanced Play",
      "title": "Continuous reading lab: forced missing-suit discards versus voluntary shape breaks",
      "minutes": 18,
      "objective": "Separate forced information from voluntary information and update evidence turn by turn.",
      "checkpoint": "Why do two exposed Bamboo pungs still fail to prove that Player A is ready on Bamboo?",
      "html": "<h3>One opponent across several turns</h3><table><thead><tr><th>Turn</th><th>Action</th><th>Certain fact</th><th>Not proven</th></tr></thead><tbody><tr><td>1</td><td>Declares Characters missing, discards 1 Characters</td><td>Characters are the missing suit</td><td>Not “Dots-only win”</td></tr><tr><td>2</td><td>Discards 6 Characters</td><td>At least two missing-suit tiles have been cleared</td><td>Not evidence of good draw quality</td></tr><tr><td>4</td><td>Pungs 555 Bamboo, discards 9 Dots</td><td>One exposed Bamboo triplet</td><td>Not proof of Full Flush</td></tr><tr><td>7</td><td>Pungs 888 Bamboo, discards 1 Dots</td><td>Two exposed Bamboo triplets</td><td>Not proof of ready status</td></tr></tbody></table><p>The same discard can mean very different things during forced Dingque clearance and late after multiple voluntary exposures. Always list at least one alternative explanation and one new observation that would flip the preferred interpretation.</p>"
    },
    {
      "phase": "Training & Review",
      "title": "The twelve-question master checklist and scientific review",
      "minutes": 15,
      "objective": "Use a repeatable per-draw decision process and classify errors by rule, calculation, or inference.",
      "checkpoint": "Can you evaluate a losing hand without saying only “bad luck” or using hidden future information?",
      "html": "<h3>Twelve questions after every draw</h3><ol><li>Is the concealed tile count correct?</li><li>What is the missing suit, and is it cleared?</li><li>Can the hand legally win now?</li><li>How many active players remain?</li><li>Which discards are legal?</li><li>Which discards make the hand ready?</li><li>If not ready, which discards improve structure?</li><li>What target copies are known to remain in unknown locations?</li><li>Who can win on this discard, and for how much?</li><li>Does more fan still have marginal value?</li><li>Does the action affect Flower Pig, ready-hand inspection, or kong refund?</li><li>Why is the chosen action better than the best alternative?</li></ol><h3>Three error classes</h3><ul><li><strong>Rule errors:</strong> illegal missing-suit hold, missed replacement draw, wrong endgame settlement.</li><li><strong>Calculation errors:</strong> missed waits, impossible copy counts, incorrect concealed/exposed accounting.</li><li><strong>Inference errors:</strong> fake precision, frozen hidden-state assumptions, or result-based hindsight.</li></ul><p>A useful graduation target is ≥90% on rules, ≥85% on wait enumeration, ≥90% on settlement questions, plus at least 20 reviewed real hands.</p>"
    },
    {
      "phase": "Training & Review",
      "title": "Scientific review: calibration instead of hindsight",
      "minutes": 18,
      "objective": "Record decision quality separately from outcomes and quantify uncertainty when possible.",
      "checkpoint": "Why does “I discarded 5 Dots and someone won on it” fail to prove that discarding 5 Dots was wrong at the time?",
      "html": "<h3>Record only three key decisions per hand</h3><table><thead><tr><th>Moment</th><th>Known then</th><th>Candidate actions</th><th>Comparison</th><th>Observed result</th></tr></thead><tbody><tr><td>Dingque</td><td>Post-swap hand</td><td>Missing Characters / Dots / Bamboo</td><td>Clearance cost + retained structure</td><td>Record, do not reverse-engineer</td></tr><tr><td>First major call</td><td>Visible tiles + active players</td><td>Call / decline</td><td>Shanten, risk, scoring</td><td>One outcome is not proof</td></tr><tr><td>Endgame</td><td>Wall depth, waits, opponent states</td><td>Preserve ready / chase value / defend</td><td>Expected value + penalties</td><td>Keep counterexamples</td></tr></tbody></table><h3>Three evidence levels</h3><ul><li><strong>Provable:</strong> legal hand structure, physical copy counts, exact probability under stated random assumptions.</li><li><strong>Conditional:</strong> opponent danger, value of chasing fan, profit of a kong under room-specific cashflows.</li><li><strong>Requires data:</strong> whether training improves long-run score and whether a discard pattern predicts ready status.</li></ul><p>Even a 100-hand sample is noisy. Judge decision process first, then collect enough data before claiming a strategy improvement.</p>"
    }
  ],
  "quiz": [
    {
      "level": "Rules",
      "q": "How many tiles are in this suited-only Sichuan Mahjong set?",
      "opts": [
        "108",
        "136",
        "144",
        "80"
      ],
      "a": 0,
      "why": "Characters, Dots, and Bamboo each have 9 ranks with 4 copies: 3×9×4=108."
    },
    {
      "level": "Rules",
      "q": "In Blood Battle to the End, what normally happens after the first player wins?",
      "opts": [
        "They keep drawing for another win",
        "They leave the hand while the others continue",
        "The entire hand ends immediately",
        "Other players can no longer pung"
      ],
      "a": 1,
      "why": "Up to three players can win; a winner leaves the ongoing hand."
    },
    {
      "level": "Rules",
      "q": "Which action is not allowed in this ruleset?",
      "opts": [
        "Pung",
        "Concealed kong",
        "Chow",
        "Self-draw win"
      ],
      "a": 2,
      "why": "Pung, kong, and win are allowed; chow is not."
    },
    {
      "level": "Rules",
      "q": "What is the regular winning skeleton?",
      "opts": [
        "Four sets plus one pair",
        "Five sequences",
        "Six pairs",
        "Three triplets plus three pairs"
      ],
      "a": 0,
      "why": "4×3+2=14 tiles."
    },
    {
      "level": "Rules",
      "q": "You declared Bamboo missing and still hold 8 Bamboo. Which statement is correct?",
      "opts": [
        "Using only two suits makes the hand legal",
        "You cannot legally win until the missing suit is cleared",
        "You may win first and clear later",
        "It automatically becomes Full Flush"
      ],
      "a": 1,
      "why": "The declared missing suit must be cleared; otherwise a legal win is unavailable and Flower Pig may apply at the end."
    },
    {
      "level": "Rules",
      "q": "The three tiles selected for Swap Three normally must be…",
      "opts": [
        "From the same suit",
        "One from each suit",
        "The same rank",
        "A pair plus one"
      ],
      "a": 0,
      "why": "The standard Swap Three rule selects three tiles from one suit; direction depends on the platform."
    },
    {
      "level": "Rules",
      "q": "What must happen after a kong?",
      "opts": [
        "Discard immediately without drawing",
        "Take the replacement draw required by the rules",
        "Every opponent pays a winning payment",
        "The hand automatically wins"
      ],
      "a": 1,
      "why": "A kong occupies a set slot with four physical tiles, so a replacement draw is required."
    },
    {
      "level": "Rules",
      "q": "What is the tile-count structure of Seven Pairs?",
      "opts": [
        "Five pairs",
        "Four pairs",
        "Seven pairs, 14 tiles",
        "Three pairs plus one pair"
      ],
      "a": 2,
      "why": "Seven Pairs is a separate 14-tile winning route."
    },
    {
      "level": "Rules",
      "q": "How many physical copies exist of any exact tile?",
      "opts": [
        "3",
        "4",
        "6",
        "Unlimited"
      ],
      "a": 1,
      "why": "Every exact suited tile has four copies."
    },
    {
      "level": "Rules",
      "q": "A Kong Discard creates multiple winners. Does kong-score transfer trigger?",
      "opts": [
        "Yes, normally",
        "No",
        "Yes, doubled",
        "Only for the dealer"
      ],
      "a": 1,
      "why": "The confirmed rule explicitly excludes transfer when the same Kong Discard produces multiple winners."
    },
    {
      "level": "Rules",
      "q": "Who receives ready-hand inspection payments?",
      "opts": [
        "All players who already won",
        "Players who are ready and have not already won",
        "Every player at the table",
        "Only the dealer"
      ],
      "a": 1,
      "why": "An unready player pays each ready non-winner at that player’s maximum possible winning multiplier."
    },
    {
      "level": "Rules",
      "q": "Is the self-draw bonus included in ready-hand inspection?",
      "opts": [
        "Yes",
        "No",
        "Only for the dealer",
        "Always +2 fan"
      ],
      "a": 1,
      "why": "The confirmed rule excludes the self-draw multiplier."
    },
    {
      "level": "Rules",
      "q": "What is the minimum Flower Pig multiplier per eligible recipient?",
      "opts": [
        "4×",
        "8×",
        "16×",
        "64×"
      ],
      "a": 3,
      "why": "Use the larger of 64× and that recipient’s maximum ready-hand winning multiplier."
    },
    {
      "level": "Rules",
      "q": "If an unready player collected kong scores earlier and the wall ends, what happens?",
      "opts": [
        "They always keep them",
        "They return all kong proceeds",
        "Only concealed-kong proceeds are returned",
        "The proceeds are doubled"
      ],
      "a": 1,
      "why": "The confirmed refund rule requires an unready player to return all kong proceeds."
    },
    {
      "level": "Efficiency",
      "q": "With 45 Characters and all 3/6 Characters otherwise unseen, how many nominal completion copies exist?",
      "opts": [
        "4",
        "6",
        "8",
        "9"
      ],
      "a": 2,
      "why": "3 Characters and 6 Characters each have four copies: eight nominal resources."
    },
    {
      "level": "Efficiency",
      "q": "With 46 Characters and all 5 Characters unseen, how many nominal completion copies exist?",
      "opts": [
        "4",
        "8",
        "6",
        "2"
      ],
      "a": 0,
      "why": "A closed wait completes only with 5 Characters, four copies."
    },
    {
      "level": "Efficiency",
      "q": "You wait on 5 Dots, hold none, and two are publicly visible. How many copies remain in unknown locations at most?",
      "opts": [
        "2",
        "3",
        "4",
        "0"
      ],
      "a": 0,
      "why": "4−2=2. They may still be concealed by opponents rather than in the wall."
    },
    {
      "level": "Efficiency",
      "q": "Under this course convention, what is the shanten number of a ready hand?",
      "opts": [
        "1",
        "0",
        "−2",
        "3"
      ],
      "a": 1,
      "why": "Ready is defined as 0-shanten."
    },
    {
      "level": "Efficiency",
      "q": "How should a 14-tile post-draw hand be compared?",
      "opts": [
        "Only by maximum fan",
        "Enumerate legal discards and compare waits, improvements, score, and risk",
        "Always discard a previously seen tile",
        "Always discard the highest rank"
      ],
      "a": 1,
      "why": "A disciplined comparison checks every legal candidate rather than choosing by appearance."
    },
    {
      "level": "Efficiency",
      "q": "Why does a larger effective-tile count not guarantee higher expected value?",
      "opts": [
        "Mahjong is not random",
        "Risk, score, endgame penalties, and future structure also matter",
        "Because the hand cannot win",
        "All effective tiles are equivalent"
      ],
      "a": 1,
      "why": "Tile efficiency is one component of the decision, not the whole objective."
    },
    {
      "level": "Probability",
      "q": "A wall is known to contain 20 tiles, including 3 targets. What is the chance the next draw is a target?",
      "opts": [
        "15%",
        "20%",
        "3%",
        "80%"
      ],
      "a": 0,
      "why": "K/W=3/20=15%."
    },
    {
      "level": "Probability",
      "q": "With the same wall, what is the probability of at least one target in two draws without replacement?",
      "opts": [
        "15%",
        "28.42%",
        "30%",
        "90%"
      ],
      "a": 1,
      "why": "1−(17/20)×(16/19)=28.42%."
    },
    {
      "level": "Probability",
      "q": "You only know that three target copies are unseen. Can you set the wall target count K to 3?",
      "opts": [
        "Yes",
        "No, opponents may hold some copies",
        "Only during Dingque",
        "Only at the opening"
      ],
      "a": 1,
      "why": "Unseen copies are not the same as wall copies."
    },
    {
      "level": "Probability",
      "q": "Prior ready probability is 20%; an action has likelihood 60% if ready and 30% if not. What is the posterior?",
      "opts": [
        "1/3",
        "1/2",
        "60%",
        "20%"
      ],
      "a": 0,
      "why": "0.2×0.6/(0.2×0.6+0.8×0.3)=1/3."
    },
    {
      "level": "Probability",
      "q": "When applying Bayes across turns, what must be considered?",
      "opts": [
        "The opponent’s hidden state may change after draws and discards",
        "Every observation is independent",
        "Evidence never expires",
        "The wall can be ignored"
      ],
      "a": 0,
      "why": "The hidden state itself can transition between observations."
    },
    {
      "level": "Probability",
      "q": "An aggressive line gains 4 points but adds an 80-point deal-in loss. What extra deal-in probability breaks even?",
      "opts": [
        "2%",
        "4%",
        "5%",
        "20%"
      ],
      "a": 2,
      "why": "4/80=5% in this simplified one-risk comparison."
    },
    {
      "level": "Strategy",
      "q": "Player A declared Characters missing. Is a Character discard automatically safe for the whole table?",
      "opts": [
        "Yes",
        "No, Players B or C may still win on Characters",
        "Only the dealer can win",
        "Characters can never deal in"
      ],
      "a": 1,
      "why": "Dingque restricts Player A only; evaluate every opponent separately."
    },
    {
      "level": "Strategy",
      "q": "Your ordinary self-draw payout is already capped. Is chasing an extra Root always correct?",
      "opts": [
        "Always",
        "No; compare marginal value with cost and risk",
        "Yes whenever a kong exists",
        "Roots cannot be chased"
      ],
      "a": 1,
      "why": "The marginal winning payment may be zero at the cap, while other kong cashflows and risks remain."
    },
    {
      "level": "Strategy",
      "q": "Near the end, what should be confirmed early when ready-hand inspection is possible?",
      "opts": [
        "Whether your hand can become legally ready",
        "Whether you can stall",
        "Whether you can discard more dangerous tiles",
        "Whether you can pung everything"
      ],
      "a": 0,
      "why": "Legal ready status can cross a large settlement threshold."
    },
    {
      "level": "Strategy",
      "q": "How should a losing decision be reviewed?",
      "opts": [
        "Infer it was wrong from the outcome",
        "Compare alternatives using only information available then",
        "Count only wins",
        "Look at which tile appeared later"
      ],
      "a": 1,
      "why": "Counterfactual review must not use the hidden future tile order."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Basic Hand?",
      "opts": [
        "1×",
        "2×",
        "4×",
        "8×"
      ],
      "a": 0,
      "why": "Basic Hand is 0 fan, 1×."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Full Flush Seven Pairs?",
      "opts": [
        "8×",
        "16×",
        "32×",
        "64×"
      ],
      "a": 1,
      "why": "Full Flush Seven Pairs is 4 fan, 16×."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Dragon Seven Pairs?",
      "opts": [
        "4×",
        "8×",
        "16×",
        "32×"
      ],
      "a": 1,
      "why": "Dragon Seven Pairs is 3 fan, 8×."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Eighteen Arhats?",
      "opts": [
        "8×",
        "16×",
        "32×",
        "64×"
      ],
      "a": 3,
      "why": "Eighteen Arhats is 6 fan, 64×."
    },
    {
      "level": "Rules",
      "q": "Do Heavenly or Earthly Hand stack with Self-draw, Roots, and other fan conditions?",
      "opts": [
        "Yes, always",
        "No; they settle directly at the room cap",
        "It depends on discard order",
        "Only Roots stack"
      ],
      "a": 1,
      "why": "The special hand is settled at the cap and does not stack with other fan."
    },
    {
      "level": "Rules",
      "q": "A Kong Discard produces multiple winners. Does kong-score transfer occur?",
      "opts": [
        "Yes",
        "No",
        "Yes, doubled",
        "Only for the dealer"
      ],
      "a": 1,
      "why": "The confirmed exception disables the transfer for multiple winners."
    },
    {
      "level": "Rules",
      "q": "Can the four identical tiles inside Dragon Seven Pairs automatically count as an extra Root ×2?",
      "opts": [
        "Always",
        "Not without confirmation; avoid double counting",
        "Only on a single wait",
        "Only on self-draw"
      ],
      "a": 1,
      "why": "The base pattern may already incorporate the same four-of-a-kind structure."
    },
    {
      "level": "Rules",
      "q": "For one Flower Pig recipient, which multiplier is used?",
      "opts": [
        "Ordinary win cap",
        "Fixed 16×",
        "max(64×, that recipient’s maximum ready multiplier)",
        "The highest multiplier anywhere at the table"
      ],
      "a": 2,
      "why": "The comparison is made separately for each eligible recipient."
    },
    {
      "level": "Probability",
      "q": "You hold two copies and one more is public. At most how many copies remain in unknown locations?",
      "opts": [
        "0",
        "1",
        "2",
        "3"
      ],
      "a": 1,
      "why": "4−2−1=1, whose location is still unknown."
    },
    {
      "level": "Strategy",
      "q": "Deal-in risks are 10% for an 8-point payment and 5% for a 64-point payment. What is the sum of the two expected-loss terms?",
      "opts": [
        "4",
        "1.3",
        "3.2",
        "72"
      ],
      "a": 0,
      "why": "0.1×8+0.05×64=4. Linearity of expectation applies even if winners can coincide."
    },
    {
      "level": "Rules",
      "q": "Full Flush is 4×. If Self-draw alone adds ×2 and no cap is hit, what does each active opponent pay?",
      "opts": [
        "4× base",
        "6× base",
        "8× base",
        "16× base"
      ],
      "a": 2,
      "why": "4×2=8×."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Full Flush Eighteen Arhats?",
      "opts": [
        "32×",
        "64×",
        "128×",
        "256×"
      ],
      "a": 3,
      "why": "It is 8 fan, 256×."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Triple Dragon Seven Pairs?",
      "opts": [
        "16×",
        "32×",
        "64×",
        "128×"
      ],
      "a": 1,
      "why": "It is 5 fan, 32×."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Full Flush Triple Dragon Seven Pairs?",
      "opts": [
        "32×",
        "64×",
        "128×",
        "256×"
      ],
      "a": 2,
      "why": "It is 7 fan, 128×."
    },
    {
      "level": "Rules",
      "q": "What is the base multiplier of Golden Hook?",
      "opts": [
        "2×",
        "4×",
        "8×",
        "16×"
      ],
      "a": 1,
      "why": "Golden Hook is 2 fan, 4×."
    }
  ],
  "fans": [
    [
      "Basic Hand",
      1,
      0,
      "Four sets plus a pair; base regular shape"
    ],
    [
      "All Pungs",
      2,
      1,
      "Four triplets/kongs plus a pair"
    ],
    [
      "Full Flush",
      4,
      2,
      "All winning tiles belong to one suit"
    ],
    [
      "Seven Pairs",
      4,
      2,
      "Seven pairs with no exposed melds"
    ],
    [
      "Golden Hook",
      4,
      2,
      "Four exposed pung/kong sets and a single-tile pair wait"
    ],
    [
      "Full Flush All Pungs",
      8,
      3,
      "Full Flush and All Pungs"
    ],
    [
      "Dragon Seven Pairs",
      8,
      3,
      "Seven Pairs containing one four-of-a-kind group"
    ],
    [
      "Full Flush Seven Pairs",
      16,
      4,
      "Seven Pairs in one suit"
    ],
    [
      "Double Dragon Seven Pairs",
      16,
      4,
      "Seven Pairs containing two four-of-a-kind groups"
    ],
    [
      "Full Flush Golden Hook",
      16,
      4,
      "Golden Hook in one suit"
    ],
    [
      "Full Flush Dragon Seven Pairs",
      32,
      5,
      "Dragon Seven Pairs in one suit"
    ],
    [
      "Triple Dragon Seven Pairs",
      32,
      5,
      "Seven Pairs containing three four-of-a-kind groups"
    ],
    [
      "Full Flush Double Dragon Seven Pairs",
      64,
      6,
      "Double Dragon Seven Pairs in one suit"
    ],
    [
      "Eighteen Arhats",
      64,
      6,
      "A winning structure with four declared kongs"
    ],
    [
      "Full Flush Triple Dragon Seven Pairs",
      128,
      7,
      "Triple Dragon Seven Pairs in one suit"
    ],
    [
      "Full Flush Eighteen Arhats",
      256,
      8,
      "Eighteen Arhats in one suit"
    ]
  ],
  "timeline": [
    [
      "Opening",
      "Swap Three and Dingque",
      "Re-evaluate all three suits after the exchange, then declare the missing suit.",
      "Certain: your complete hand, the three tiles you sent, and your Dingque choice. Unknown: which received tiles opponents will keep."
    ],
    [
      "Clearing phase",
      "Missing-suit tiles remain",
      "Legality comes before ambitious scoring; track how dangerous each forced discard may become.",
      "Certain: you cannot legally win while the declared missing suit remains. Estimated: which order of discards is safer."
    ],
    [
      "Midgame I",
      "Opponent exposes the first set",
      "Record the exact exposed tiles, Dingque suit, and discard. Do not immediately declare Full Flush or ready status.",
      "Certain: the exposed set. Inference: some hand-shape hypotheses become more likely, but evidence remains limited."
    ],
    [
      "Midgame II",
      "Second exposure or voluntary shape break",
      "Interpret the new action together with the possibility that the hidden state changed between turns.",
      "Certain: new public information. Invalid shortcut: treating observations across turns as independent evidence of one frozen hidden state."
    ],
    [
      "A player wins",
      "Fewer active opponents",
      "Recalculate self-draw payers, exposure time, and the marginal value of chasing fan.",
      "Certain: future normal payer count shrinks. A previously attractive big-hand line may lose value."
    ],
    [
      "Endgame",
      "Shallow wall and inspection risk",
      "Avoid Flower Pig, seek a legal ready hand, then compare discard danger and fan value.",
      "Certain: endgame settlements create large threshold effects. Evaluate high-loss deal-ins opponent by opponent."
    ]
  ],
  "rules": {
    "confirmed": [
      [
        "Core game",
        "Four players, 108 suited tiles, Swap Three, fixed Dingque, no chow, pung/kong allowed; Blood Battle to the End."
      ],
      [
        "Base patterns",
        "Basic Hand 1×; All Pungs 2×; Full Flush / Seven Pairs / Golden Hook 4×; Full Flush Eighteen Arhats 256×, with the full table in the catalogue."
      ],
      [
        "Bonus conditions",
        "Self-draw, Win After Kong, Kong Discard, Robbing a Kong, Last Tile, and each Root are shown as ×2; avoid double counting."
      ],
      [
        "Heavenly/Earthly Hand",
        "Settled directly at the room cap and do not stack with other fan conditions."
      ],
      [
        "Ready-hand inspection",
        "An unready player pays ready non-winners at their maximum possible win multiplier; self-draw bonus is excluded."
      ],
      [
        "Flower Pig",
        "Holding the declared missing suit at the end triggers Flower Pig; for each recipient use max(64×, that recipient’s maximum ready multiplier)."
      ],
      [
        "Kong refund",
        "An unready player returns all kong proceeds when the wall is exhausted."
      ],
      [
        "Kong-score transfer",
        "On a Kong Discard, the kong proceeds transfer to the winner; no transfer if the same discard creates multiple winners."
      ]
    ],
    "parameters": [
      "The ordinary cap is a room parameter and should be set to the actual table value.",
      "When a named base pattern already depends on a four-of-a-kind, the conservative default is not to add a Root again unless settlement evidence confirms stacking.",
      "Immediate payments for different kong types may vary by room and must stay separate from fan settlement.",
      "Pass-win reset, exact robbing-a-kong scope, and other platform details should follow the current in-game rules page if the software changes."
    ]
  },
  "ui": {
    "overview": "Overview",
    "course": "Course",
    "lab": "Hand Lab",
    "fans": "Fan Catalogue",
    "math": "Calculators",
    "practice": "Practice",
    "timeline": "Timeline",
    "rules": "Rules",
    "textbook": "Full Textbook",
    "progress": "Progress",
    "start": "Start Lesson 1",
    "language": "中文",
    "source": "Source",
    "author": "Author",
    "offline": "Offline-ready",
    "projectTag": "Source: jyu-zhou/sichuan-mahjong-masterclass · Author: jyu-zhou",
    "footer": "This project teaches rules, probability, and decision analysis. It does not guarantee win rate or profit. Progress is stored only in your browser. Rule screenshots and third-party materials remain the property of their respective rights holders."
  }
};
