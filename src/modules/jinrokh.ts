// src/modules/jinrokh.ts

export const jinrokhGuide = {
  boss: "Jin'rokh the Breaker",
  videoUrl: "https://www.youtube.com/watch?v=tW62lYhgPvI",
  videoId: "tW62lYhgPvI",
  guide: [
    {
      phase: "Introduction & Setup",
      points: [
        {
          title: "Intro & Overview",
          desc: "First boss of Throne of Thunder's heroic tier. Easier than later bosses but punishes mistakes. Only two new heroic abilities; others deal more damage and require tighter execution.",
          timestamp: "0:00",
          seconds: 0
        },
        {
          title: "Raid Composition",
          desc: "2 tanks, 2–3 healers, 5–6 DPS. 3 healers recommended for progression; can drop to 2 when comfortable.",
          timestamp: "0:35",
          seconds: 35
        }
      ]
    },
    {
      phase: "Core Mechanics",
      points: [
        {
          title: "Static Burst (Tank Debuff)",
          desc: "Taunt swap as usual, but delay taunt by 2–3 seconds after debuff is applied. This allows stacks to drop and minimizes overlap damage.",
          timestamp: "1:00",
          seconds: 60
        },
        {
          title: "Focused Lightning",
          desc: "Ball chases a player and explodes on contact. Kite to room edge, avoid crossing fissures, and spread balls out to prevent chain explosions and heavy raid damage.",
          timestamp: "1:37",
          seconds: 97
        },
        {
          title: "Conductive Water",
          desc: "Pools increase damage/healing by 40%, but double Nature damage taken. Never stand in electrified pools.",
          timestamp: "2:15",
          seconds: 135
        }
      ]
    },
    {
      phase: "Heroic Abilities",
      points: [
        {
          title: "Ionization (Heroic Only)",
          desc: "Debuff applied to all but tanks for 24s. When dispelled or expired, deals 450k damage to self and anyone within 8 yards. Never let this explode in conductive water. Use immunities before cast if possible. If debuffed, move out, call for dispel, and use defensives.",
          timestamp: "2:49",
          seconds: 169
        },
        {
          title: "Thunderstorm (Heroic Change)",
          desc: "AoE damage, electrifies conductive water (get out!). Periodically spawns pillars of lightning and orbs. Dodge pillars (540k) and orbs (200k), stay loosely clumped for healing but keep moving.",
          timestamp: "4:57",
          seconds: 297
        }
      ]
    },
    {
      phase: "Room & Fight Management",
      points: [
        {
          title: "Room Management",
          desc: "Conductive water fills the room over time. Rotate statue activations to maximize space. In last phase, avoid electrified pools and keep moving.",
          timestamp: "6:32",
          seconds: 392
        }
      ]
    },
    {
      phase: "Recap & Tips",
      points: [
        {
          title: "Summary & Tips",
          desc: "Dispel ionization safely, avoid conductive water, communicate cooldowns and dispels, dodge thunderstorm orbs, rotate statues, rinse and repeat.",
          timestamp: "7:19",
          seconds: 439
        }
      ]
    }
  ]
};
