# Fact Registry

RequiemGuide 的硬规则：**没有进入本目录登记的事实，不允许以陈述句写进任何页面。**

每个事实一条记录：

```json
{
  "fact": "Sun Quartz Puzzle Box code",
  "value": "Star → Sun → Moon → Sun",
  "source": "published-guide",
  "sourceUrl": "https://...",
  "verification": "corroborated",
  "lastChecked": "2026-09-18"
}
```

## verification 取值

| 值 | 含义 | 页面措辞权限 |
|---|---|---|
| `verified` | 一手实测或官方来源确认 | 可直接陈述 |
| `corroborated` | ≥2 个独立可靠来源一致 | 可陈述，页面 Verification 块标记 Cross-checked |
| `community` | 仅社区报告 | 只能写 "Players report..." |
| `unverified` | 无法确认 | 禁止写成事实 |
| `contradicted` | 有来源矛盾或证伪 | 必须从页面删除 |

## 文件

- `puzzles.json` — 谜题密码、位置、需求、奖励
- `bosses.json` — Boss 名单、弱点、阶段行为（**禁止**无来源的 HP 数值）
- `story.json` — 章节结构、角色、结局条件、游戏时长

## 每周复核

 rescue 实验期间（4–8 周），每次修改页面前先查本目录；研究代理的新结论直接追加到对应文件并更新 `lastChecked`。
