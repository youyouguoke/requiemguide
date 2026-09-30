# Keyword Pool — query-shaped page targets（hoopervault sitemap 形态）

# 规则（V2.2 Freeze 兼容）：
# - [EXISTS] = 已有页面，只跟踪 GSC 数据（对应 queries.csv）
# - [NEW]    = 候选页，只有当 GSC 对映射 query 给出真实 impression 时才允许建页
# - 数字列永远从 GSC 抄录，禁止预填
# 意图分类：A=Exact Problem  B=Location  C=Progression  D=Generic

# ── Puzzle / Code ──────────────────────────────────────────────
/puzzles/safe-codes                          [EXISTS] A  resident evil requiem safe codes
/puzzles/safe-codes                          [EXISTS] A  re9 safe code
/puzzles/sun-quartz-box                      [EXISTS] A  sun quartz code / sun quartz puzzle
/puzzles/moon-quartz-box                     [EXISTS] A  moon quartz code / moon quartz puzzle
/puzzles/star-quartz-box                     [EXISTS] A  star quartz code / star quartz puzzle
/puzzles/star-quartz-box                     [EXISTS] B  level 2 wristband location
/puzzles/star-quartz-box                     [EXISTS] B  level 3 wristband location
/puzzles/central-hall-quartz                 [EXISTS] A  central hall quartz mechanism
/puzzles/blood-analyzer                      [EXISTS] A  blood analyzer solution / blood order

# 保险箱逐页查询是真实存在的（bar and lounge / examination room safe code），
# 先观察 GSC 是否把这类 query 打到 /puzzles/safe-codes/，再决定是否拆页
/puzzles/safe-codes/bar-and-lounge           [NEW] A  bar and lounge safe code
/puzzles/safe-codes/examination-room         [NEW] A  examination room safe code
/puzzles/safe-codes/insanity                 [NEW] A  requiem safe codes insanity

# ── Boss ───────────────────────────────────────────────────────
/bosses/blister-borne                        [EXISTS] A  blister borne weakness / how to beat
/bosses/chunk                                [EXISTS] A  chunk boss fight
/bosses/titan-spinner                        [EXISTS] A  titan spinner weakness
/bosses/shadow-ghost                         [EXISTS] A  shadow ghost how to beat
/bosses/emily-transformed                    [EXISTS] A  emily transformed boss fight

# ── Walkthrough / Progression ──────────────────────────────────
/walkthrough/                                [EXISTS] C  what to do after care center
/walkthrough/                                [EXISTS] D  resident evil requiem walkthrough

# ── Story ──────────────────────────────────────────────────────
/story/endings                               [EXISTS] C  resident evil requiem endings
/story/endings                               [EXISTS] A  requiem hope ending code

# ── Weapon / Item ──────────────────────────────────────────────
/weapons/msbg-500                            [EXISTS] B  msbg 500 shotgun location
/weapons/requiem                             [EXISTS] B  requiem magnum location
/items/moon-quartz                           [EXISTS] B  where to find moon quartz

# ── NEW clusters（来自真实 SERP/社区信号，建页前必须过 Fact Registry）──
/guides/final-puzzle                         [NEW] A  resident evil requiem final puzzle
/guides/final-puzzle                         [NEW] A  requiem final puzzle solution
/guides/final-puzzle                         [NEW] A  marie's doll requiem
/guides/infinite-ammo                        [NEW] A  resident evil requiem infinite ammo
/guides/infinite-ammo                        [NEW] A  how to unlock infinite ammo requiem
/collectibles/antique-coins                  [NEW] B  resident evil requiem antique coin locations
/collectibles/antique-coins                  [NEW] B  requiem antique coins
/collectibles/mr-raccoon                     [NEW] B  requiem mr raccoon locations
/guides/insanity-mode                        [NEW] C  resident evil requiem insanity mode
/guides/insanity-mode                        [NEW] C  requiem insanity guide
/guides/challenges                           [NEW] C  resident evil requiem challenges
/guides/challenges                           [NEW] C  requiem trophy guide / achievements
/weapons/parts-and-charms                    [NEW] B  requiem weapon parts
/weapons/parts-and-charms                    [NEW] B  requiem charms

# 证据锚点（2026-09 实扫）：
# - safe-codes 簇：gamerlume / gamingpromax / gameshedge / gamerurge 四站同构竞争，
#   且各有独立长尾页（bar and lounge / monitor control room safe）→ 证明逐页 query 存在
# - final puzzle 簇：r/residentevil  decoding 热帖 + YouTube complete guide
#   （Marie's Doll 步骤链）→ 社区强信号，需先登记进 Fact Registry 再建页
# - infinite ammo / challenges / charms：YouTube 100% completion guide 标题即 query
# - antique coins：多站确认 22 枚、保险箱出 8 枚；硬币购买升级（Hip Pouch 等）带来 B+C 混合意图
