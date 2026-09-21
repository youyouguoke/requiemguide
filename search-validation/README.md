# Search Validation Dashboard — RequiemGuide V2.2

实验期（4–8 周）的唯一增长依据。规则：

1. **数字只能从 GSC 实际数据抄录**，禁止预填、估算或编造。
2. 流程是 `Query → Page → 优化`，不是 `猜 Query → 写文章`。
3. 每周更新一次 `queries.csv` 的 impressions/clicks/ctr/position。
4. Query 分类：
   - **A — Exact Problem**（sun quartz code 类，最高优先）
   - **B — Location**（where to find 类）
   - **C — Progression**（what to do after 类）
   - **D — Generic**（requiem guide 类，不重点追）

## 决策树（4–8 周后严格执行）

```
GSC 有 Impression?
├─ YES → 有真实 Query?
│        ├─ YES → Position Top 30? → Optimize（Title/Answer 靠前）→ Continue
│        │         Position 8–20 + CTR 低? → 优化 Title / Quick Answer
│        └─ NO → Expand（从 A 类 query 扩同类页面，仍需 Fact Registry 登记）
└─ NO → 技术检查（Index / Sitemap / Cannibalization）→ 再观察
```

**停止条件**：8 周 + 10–15 个 verified problem pages + 正常 index + 几乎没有 impression → 停止扩大项目。

## 文件

- `queries.csv` — Query→Page 跟踪表（impressions/clicks/ctr/position 留空，等 GSC 数据）
- `README.md` — 本文件
