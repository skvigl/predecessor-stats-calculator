import { IItem } from '../types'

export const items: IItem[] = [
  {
    name: 'Solstone',
    tags: ['Active', 'Vision'],
    abilities: [
      {
        name: 'Active - Oracle Ward',
        description:
          'Place an invisible Oracle Ward for 120s at your target location, revealing any nearby Visible and Stealthed Enemy Units - 174s (-3s per level) CD.',
      },
      {
        name: 'Max Charges',
        description: '3.',
      },
      {
        name: 'Refill',
        description: 'Charges are restored upon visiting base.',
      },
    ],
  },
  {
    name: 'Stealth Ward',
    cost: 25,
    tags: ['Active', 'Vision'],
    abilities: [
      {
        name: 'Active - Stealth Ward',
        description:
          'Place an invisible Ward for 84s (+2 per level) at your target location, revealing any nearby Visible and Camouflagued Enemy Units - 174s (-3s per level) CD.',
      },
    ],
  },
  {
    name: 'Sentry',
    cost: 25,
    tags: ['Active', 'Vision'],
    abilities: [
      {
        name: 'Active - Sentry',
        description:
          'Reveal nearby Enemy Wards in a small area around you for 15s - 96s (-2 per level) CD.',
      },
      {
        name: 'Max Charges',
        description: '2.',
      },
    ],
  },
  {
    name: 'Wild Hunt',
    tags: ['Active', 'On-hit'],
    abilities: [
      {
        name: 'Active - Slay',
        description: 'Deal 1000 true damage to an Enemy Minion or Monster',
      },
      {
        name: 'Jungler',
        description:
          'Dealing damage to Monsters applies a burn, dealing 30 (+15% Magical Power)(+3% bonus health) magical damage over 3s. Basic attacks against Monsters restore 3 mana on-hit and you restore 1-6 mana per second based on your missing mana whilst in the jungle. Melee Heroes heal for 5% of damage dealt to Monsters. Gain an additional 140XP for the first Monster you kill. Additionally, you receive diminishing gold from excessive Minion kills.',
      },
    ],
  },
  {
    name: 'Hunt',
    tags: ['Active', 'On-hit'],
    abilities: [
      {
        name: 'Active - Slay',
        description: 'Deal 500 true damage to an Enemy Minion or Monster',
      },
      {
        name: 'Jungler',
        description:
          'Dealing damage to Monsters applies a burn, dealing 30 (+15% Magical Power)(+3% bonus health) magical damage over 3s. Basic attacks against Monsters restore 3 mana on-hit and you restore 1-6 mana per second based on your missing mana whilst in the jungle. Melee Heroes heal for 5% of damage dealt to Monsters. Gain an additional 140XP for the first Monster you kill. Additionally, you receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'BGH',
        description:
          'Killing Monsters grants a stack of Hunt. At 40 stacks, the item evolves, increasing the damage of Cull to 1000.',
      },
    ],
  },
  {
    name: 'Titan Crest',
    tags: ['Crest', 'Health'],
    stats: {
      Health: 80,
    },
    abilities: [
      {
        name: 'Titan',
        description:
          'After taking damage, heal 15 (+0.75% of maximum health) over 15s. This healing is doubled for 5s after killing an Enemy Unit. Upon restoring 400 health, evolves into Goliath Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 20 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Goliath Crest',
    tags: ['Crest', 'Health', 'Health Regen'],
    components: ['Titan Crest'],
    stats: {
      Health: 120,
      'Health Regen': 25,
    },
    abilities: [
      {
        name: 'Legendary Titan',
        description:
          'After taking damage, heal 15 (+0.75% of maximum health) over 15s. This healing is doubled for 5s after killing an Enemy Unit. Upon restoring 400 health, return to base to evolve into a Legendary Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: "Saphir's Mantle",
    tags: [
      'Crest',
      'Health',
      'Health Regen',
      'Physical Armor',
      'Magical Armor',
    ],
    components: ['Goliath Crest'],
    stats: {
      Health: 200,
      'Health Regen': 75,
      'Physical Armor': 5,
      'Magical Armor': 10,
    },
    abilities: [
      {
        name: 'Active - Sturdy',
        description:
          'Gain (+20% Maximum Health) bonus health for 6s. During this time, dealing damage Slows Enemies by 15% for 1s - 90s CD.',
      },
      {
        name: 'Passive',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Razorback',
    tags: [
      'Crest',
      'Health',
      'Health Regen',
      'Physical Armor',
      'Magical Armor',
    ],
    components: ['Goliath Crest'],
    stats: {
      Health: 150,
      'Health Regen': 50,
      'Physical Armor': 15,
      'Magical Armor': 8,
    },
    abilities: [
      {
        name: 'Active - Echidna',
        description:
          'Reflect 50% of damage received from Enemy Heroes as true damage for 4s - 90s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Nyr Warboots',
    tags: [
      'Crest',
      'Health',
      'Health Regen',
      'Physical Armor',
      'Magical Armor',
    ],
    components: ['Goliath Crest'],
    stats: {
      Health: 175,
      'Health Regen': 75,
      'Physical Armor': 8,
      'Magical Armor': 8,
    },
    abilities: [
      {
        name: 'Active - Resilience',
        description:
          'Gain 30% movement speed and store 45% of damage received for 5s. After the duration, regenerate health equal to the damage stored over 3s - 120s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Guardian Crest',
    tags: ['Crest', 'Health', 'Health Regen'],
    stats: {
      Health: 40,
      'Health Regen': 25,
    },
    abilities: [
      {
        name: 'Guardian',
        description:
          'Your next basic attack or damaging ability against an Enemy Target will restore 20 health and grant you 25 gold. Charges generate every 30s, up to a maximum of 3, and require a nearby Allied Hero within 3000u to activate. Upon granting 300 gold, evolves into Warden Crest.',
      },
      {
        name: 'Pacifist',
        description: 'Receive diminishing gold from excessive Minion kills.',
      },
    ],
  },
  {
    name: 'Warden Crest',
    tags: ['Crest', 'Health', 'Health Regen'],
    components: ['Guardian Crest'],
    stats: {
      Health: 120,
      'Health Regen': 50,
      'Gold Per Second': 0.2,
    },
    abilities: [
      {
        name: 'Legendary Guardian',
        description:
          'Your next basic attack or damaging ability against an Enemy Target will restore 30 health and grant you 25 gold. Charges generate every 30s, up to a maximum of 3, and require a nearby Allied Hero within 3000u to activate. After granting 300 gold, return to base to evolve into a Legendary Crest.',
      },
      {
        name: 'Passive',
        description: 'Receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Oracle',
        description: 'Gain Solstone upon completion of Legendary Guardian.',
      },
    ],
  },
  {
    name: 'Sanctification',
    tags: ['Crest', 'Health', 'Health Regen', 'Mana Regen'],
    components: ['Warden Crest'],
    stats: {
      Health: 200,
      'Health Regen': 75,
      'Mana Regen': 75,
    },
    abilities: [
      {
        name: 'Active - Safeguard',
        description:
          "Grants yourself and nearby Allied Heroes a 250 (+12% of Caster's Maximum Health) shield for 3s. While the shield holds, Heroes gain 60% tenacity - 120s CD.",
      },
      {
        name: 'Wealthy Pacifist',
        description:
          'Increase Passive Gold Income by 50% and receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Visionary',
        description: 'Gain Solstone and increase your Ward Cap from 2 to 3.',
      },
    ],
  },
  {
    name: 'Rift Walkers',
    tags: ['Crest', 'Magical Power', 'Health', 'Health Regen', 'Mana'],
    components: ['Warden Crest'],
    stats: {
      'Magical Power': 15,
      Health: 150,
      'Health Regen': 100,
      Mana: 100,
    },
    abilities: [
      {
        name: 'Active - Rift Snatcher',
        description:
          'Dash forward a short distance and pull all nearby Enemy Heroes towards you. Enemy Heroes pulled by Rift Snatcher take 15% increased damage for 3s - 120s CD.',
      },
      {
        name: 'Wealthy Pacifist',
        description:
          'Increase Passive Gold Income by 50% and receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Visionary',
        description: 'Gain Solstone and increase your Ward Cap from 2 to 3.',
      },
    ],
  },
  {
    name: 'Leafsong',
    tags: [
      'Crest',
      'Health',
      'Health Regen',
      'Physical Armor',
      'Magical Armor',
    ],
    components: ['Warden Crest'],
    stats: {
      Health: 150,
      'Health Regen': 75,
      'Physical Armor': 15,
      'Magical Armor': 10,
    },
    abilities: [
      {
        name: 'Active - Phantom Rush',
        description:
          'Increase the movement speed of yourself and nearby Allies by 50% for 4s. Heroes affected by Phantom Rush are immune to Slows and may pass through Enemy Heroes - 120s CD.',
      },
      {
        name: 'Wealthy Pacifist',
        description:
          'Increase Passive Gold Income by 50% and receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Visionary',
        description: 'Gain Solstone and increase your Ward Cap from 2 to 3.',
      },
    ],
  },
  {
    name: 'Consort Crest',
    tags: ['Crest', 'Magical Power', 'Mana Regen'],
    stats: {
      'Magical Power': 5,
      'Mana Regen': 25,
    },
    abilities: [
      {
        name: 'Consort',
        description:
          'Your next basic attack or damaging ability against an Enemy Target will deal 10 additional magic damage and grant you 25 gold. Charges generate every 30s, up to a maximum of 3, and require a nearby Allied Hero within 3000u to activate. Upon granting 300 gold, evolves into Keeper Crest.',
      },
      {
        name: 'Pacifist',
        description: 'Receive diminishing gold from excessive Minion kills.',
      },
    ],
  },
  {
    name: 'Keeper Crest',
    tags: ['Crest', 'Magical Power', 'Mana Regen'],
    components: ['Consort Crest'],
    stats: {
      'Magical Power': 10,
      'Mana Regen': 50,
      'Gold Per Second': 0.2,
    },
    abilities: [
      {
        name: 'Legendary Consort',
        description:
          'Your next basic attack or damaging ability against an Enemy Target will deal 15 additional magic damage and grant you 25 gold. Charges generate every 30s, up to a maximum of 3, and require a nearby Allied Hero within 3000u to activate. Upon granting 300 gold, return to base to evolve into a Legendary Crest.',
      },
      {
        name: 'Pacifist',
        description: 'Receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Oracle',
        description: 'Gain Solstone upon completion of Legendary Consort.',
      },
    ],
  },
  {
    name: 'Tranquility',
    tags: ['Crest', 'Magical Power', 'Mana Regen', 'Ability Haste'],
    components: ['Keeper Crest'],
    stats: {
      'Magical Power': 20,
      'Mana Regen': 50,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Active - Grace',
        description:
          'Heal yourself and nearby Allied Heroes for 150 (+50% Magical Power) and grant affected Units 10% damage mitigation for 3s - 30s CD.',
      },
      {
        name: 'Wealthy Pacifist',
        description:
          'Increase Passive Gold Income by 50% and receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Visionary',
        description: 'Gain Solstone and increase Ward Cap from 2 to 3.',
      },
    ],
  },
  {
    name: 'Silentium',
    tags: ['Crest', 'Magical Power', 'Magical Armor', 'Mana Regen'],
    components: ['Keeper Crest'],
    stats: {
      'Magical Power': 25,
      'Magical Armor': 18,
      'Mana Regen': 75,
    },
    abilities: [
      {
        name: 'Active - Muzzle',
        description:
          'Silence an Enemy Hero for 1.5s. If Muzzle interrupts an ability, deal 150 (+50% Magical Power)(+50% Bonus Physical Power) magical damage to the Target - 120s CD.',
      },
      {
        name: 'Wealthy Pacifist',
        description:
          'Increase Passive Gold Income by 50% and receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Visionary',
        description: 'Gain Solstone and increase Ward Cap from 2 to 3.',
      },
    ],
  },
  {
    name: 'Malediction',
    tags: ['Crest', 'Magical Power', 'Physical Armor', 'Mana Regen'],
    components: ['Keeper Crest'],
    stats: {
      'Magical Power': 20,
      'Physical Armor': 20,
      'Mana Regen': 75,
    },
    abilities: [
      {
        name: 'Active - Cripple',
        description:
          'Target a nearby Enemy Hero, Slowing them and reducing their total attack speed by 30% for 2.5s - 120s CD.',
      },
      {
        name: 'Wealthy Pacifist',
        description:
          'Increase Passive Gold Income by 50% and receive diminishing gold from excessive Minion kills.',
      },
      {
        name: 'Visionary',
        description: 'Gain Solstone and increase Ward Cap from 2 to 3.',
      },
    ],
  },
  {
    name: 'Magician Crest',
    tags: ['Crest', 'Magical Power', 'Mana'],
    stats: {
      'Magical Power': 10,
      Mana: 50,
    },
    abilities: [
      {
        name: 'Magician',
        description:
          'Restore 5 mana each time you deal damage to an Enemy Hero or Monster with an ability (once per ability), or 8 mana when killing an Enemy Unit. Upon restoring 400 mana, evolves into Wizard Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 20 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Wizard Crest',
    tags: ['Crest', 'Magical Power', 'Mana', 'Magical Penetration'],
    components: ['Magician Crest'],
    stats: {
      'Magical Power': 12,
      Mana: 120,
      'Magical Penetration': 4,
    },
    abilities: [
      {
        name: 'Legendary Magician',
        description:
          'Restore 5 mana each time you deal damage to an Enemy Hero or Monster with an ability (once per ability), or 8 mana when killing an Enemy Unit. Upon restoring 400 mana, return to base to evolve into a Legendary Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Time-Flux Band',
    tags: [
      'Crest',
      'Magical Power',
      'Mana',
      'Magical Penetration',
      'Ability Haste',
    ],
    components: ['Wizard Crest'],
    stats: {
      'Magical Power': 20,
      Mana: 150,
      'Magical Penetration': 8,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Active - Turntable',
        description:
          'Mark your current location and gain 20% movement speed for 4s. After 4s, teleport back to the marked location and reset your basic ability cooldowns - 90s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Soulbearer',
    tags: [
      'Crest',
      'Magical Power',
      'Mana',
      'Magical Penetration',
      'Ability Haste',
    ],
    components: ['Wizard Crest'],
    stats: {
      'Magical Power': 15,
      Mana: 300,
      'Magical Penetration': 8,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Active - Anima',
        description:
          'Gain a (+25% maximum mana) shield, 20% magical lifesteal, and 10% movement speed for 8s - 90s CD',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Epoch',
    tags: ['Crest', 'Magical Power', 'Mana', 'Magical Penetration', 'Health'],
    components: ['Wizard Crest'],
    stats: {
      'Magical Power': 25,
      Mana: 150,
      'Magical Penetration': 8,
      Health: 100,
    },
    abilities: [
      {
        name: 'Active - Stasis Device',
        description:
          'Enter Stasis for 2.5s, rendering yourself invulnerable for the duration but unable to move, attack, or use abilities - 120s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Occult Crest',
    tags: ['Crest', 'Magical Power', 'Health'],
    components: [],
    stats: {
      'Magical Power': 10,
      Health: 40,
    },
    abilities: [
      {
        name: 'Occultist',
        description:
          'Restore 4 health each time you deal damage to an Enemy Hero or Monster with an ability (once per ability), or 6 health when killing an Enemy Unit. Upon restoring 300 health, evolves into Warlock Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 20 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Warlock Crest',
    tags: ['Crest', 'Magical Power', 'Health', 'Magical Penetration'],
    components: ['Occult Crest'],
    stats: {
      'Magical Power': 12,
      Health: 100,
      'Magical Penetration': 4,
    },
    abilities: [
      {
        name: 'Legendary Occultist',
        description:
          'Restore 4 health each time you deal damage to an Enemy Hero or Monster with an ability (once per ability), or 6 health when killing an Enemy Unit. Upon restoring 300 health, return to base to evolve into a Legendary Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Typhoon',
    tags: ['Crest', 'Magical Power', 'Health', 'Magical Penetration', 'Attack Speed'],
    components: ['Warlock Crest'],
    stats: {
      'Magical Power': 20,
      Health: 100,
      'Magical Penetration': 8,
      'Attack Speed': 15,
    },
    abilities: [
      {
        name: 'Cyclone',
        description:
          'Basic attacks grant a stack of Cyclone for 3s, increasing your attack speed by 2(+2% Magical Power)%. Cyclone stacks up to 6 times.',
      },
      {
        name: 'Active - Mirage',
        description:
          'When at maximum stacks of Cyclone, dash a short distance and reduce your current basic ability cooldowns by 3s - 30s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Tempest',
    tags: [
      'Crest',
      'Magical Power',
      'Health',
      'Magical Penetration',
      'Ability Haste',
    ],
    components: ['Warlock Crest'],
    stats: {
      'Magical Power': 15,
      Health: 150,
      'Magical Penetration': 8,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Active - Overcharge',
        description:
          'Overcharge for 8s causing lightning to zap up to 3 nearby Enemy Heroes each second, dealing 30 (+10% Magical Power) magical damage and healing you equal to the damage dealt. Multiple strikes against the same Target deal 50% reduced damage - 90s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Obelisk',
    tags: ['Crest', 'Magical Power', 'Health', 'Magical Penetration'],
    components: ['Warlock Crest'],
    stats: {
      'Magical Power': 35,
      Health: 100,
      'Magical Penetration': 8,
    },
    abilities: [
      {
        name: 'Soul Stealer',
        description:
          'When you achieve a Takedown, gain a Soul which permanently grants you 2 Magical Power.',
      },
      {
        name: 'Active - Condemn',
        description:
          'Enhance your next basic attack to deal 80 (+30% Magical Power)(+15 per Soul) additional magic damage. If a Target struck by Condemn dies within 4s, gain a Soul - 30s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 40 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Warrior Crest',
    tags: ['Crest', 'Physical Power', 'Health'],
    stats: {
      'Physical Power': 6,
      Health: 40,
    },
    abilities: [
      {
        name: 'Warrior',
        description:
          'Upon dealing damage to an Enemy Hero or Monster, or killing an Enemy Unit, regenerate (+3% Maximum Health) over 15s. Upon restoring 400 health, evolves into Champion Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 15 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Champion Crest',
    tags: ['Crest', 'Physical Power', 'Health'],
    components: ['Warrior Crest'],
    stats: {
      'Physical Power': 10,
      Health: 100,
    },
    abilities: [
      {
        name: 'Legendary Warrior',
        description:
          'Upon dealing damage to an Enemy Hero or Monster, or killing an Enemy Unit, regenerate (+3.5% Maximum Health) over 15s. Upon restoring 600 health, return to base to evolve into a legendary Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 15 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Iceskorn Talons',
    tags: ['Crest', 'Physical Power', 'Health', 'Ability Haste'],
    components: ['Champion Crest'],
    stats: {
      'Physical Power': 15,
      Health: 150,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Active - Glacial Colosseum',
        description:
          'Create a dueling zone around you in a large area that remains for 15s. Yourself and Allied Heroes within the zone gain 15% increased damage and 15% bonus movement speed for 3s. Enemy Units within the zone are Slowed by 15% - 40s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Fenix',
    tags: ['Crest', 'Physical Power', 'Health'],
    components: ['Champion Crest'],
    stats: {
      'Physical Power': 30,
      Health: 100,
    },
    abilities: [
      {
        name: 'Active - Rebirth',
        description:
          'Mark your current location and resurrect at the mark with 40% maximum health and mana should you die within the next 6s - 210s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Brutallax',
    tags: ['Crest', 'Physical Power', 'Health', 'Lifesteal', 'On-hit'],
    components: ['Champion Crest'],
    stats: {
      'Physical Power': 20,
      Health: 125,
      Lifesteal: 8,
    },
    abilities: [
      {
        name: 'Active - Purifying Rage',
        description:
          'Cleans all Negative Debuffs, then gain 60% tenacity and 30% attack speed for 8s. Successful basic attacks extend this duration by 0.5s on-hit - 150s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Marksman Crest',
    tags: ['Crest', 'Physical Power', 'Attack Speed'],
    stats: {
      'Physical Power': 5,
      'Attack Speed': 5,
    },
    abilities: [
      {
        name: 'Marksman',
        description:
          'Restore 1 health when landing successful basic attacks against Enemy Heroes and Monsters, or 6 health when killing an Enemy Unit. Upon restoring 400 health, evolves into Sharpshooter Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 15 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Sharpshooter Crest',
    tags: ['Crest', 'Physical Power', 'Attack Speed'],
    components: ['Marksman Crest'],
    stats: {
      'Physical Power': 10,
      'Attack Speed': 10,
    },
    abilities: [
      {
        name: 'Legendary Marksman',
        description:
          'Restore 1 health when landing successful basic attacks against Enemy Heroes and Monsters, or 6 health when killing an Enemy Unit. Upon restoring 400 health, return to base to evolve into a Legendary Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 15 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Pacifier',
    tags: [
      'Crest',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'Lifesteal',
    ],
    components: ['Sharpshooter Crest'],
    stats: {
      'Physical Power': 15,
      'Attack Speed': 10,
      'Critical Chance': 20,
      Lifesteal: 5,
    },
    abilities: [
      {
        name: 'Active - Adrenalize',
        description:
          'Dash a short distance and empower your next basic attack within 6s to deal 40 (+20% Bonus Physical Power) additional physical damage, doubled against Targets below 40% maximum health. Killing an Enemy Hero within 6s allows Adrenalize to be recast for 10s - 120s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Liberator',
    tags: [
      'Crest',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'Lifesteal',
    ],
    components: ['Sharpshooter Crest'],
    stats: {
      'Physical Power': 10,
      'Attack Speed': 15,
      'Critical Chance': 20,
      Lifesteal: 5,
    },
    abilities: [
      {
        name: 'Active - Purifying Guard',
        description:
          'Cleanse all Negative Debuffs and gain a 100 (+10 per level)(+150% Bonus Physical Power) shield for 2.5s - 150s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Eviscerator',
    tags: [
      'Crest',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'On-hit',
    ],
    components: ['Sharpshooter Crest'],
    stats: {
      'Physical Power': 12,
      'Attack Speed': 20,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Active - Rending Strikes',
        description:
          'Upon activation, gain 25% attack speed and empower your basic attacks to deal (+10% Total Physical Power) true damage on-hit for 6s, increasing by (+5% Total Physical Power) for each successful hit against Enemy Heroes - 90s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Rogue Crest',
    tags: ['Crest', 'Physical Power', 'Ability Haste'],
    stats: {
      'Physical Power': 6,
      'Ability Haste': 5,
    },
    abilities: [
      {
        name: 'Rogue',
        description:
          'Restore 4 health each time you deal damage to an Enemy Hero or Monster with an ability (once per ability), or 6 health when killing an Enemy Unit. Upon restoring 300 health, evolves into Assassin Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 15 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Assassin Crest',
    tags: ['Crest', 'Physical Power', 'Ability Haste', 'Physical Penetration'],
    components: ['Rogue Crest'],
    stats: {
      'Physical Power': 10,
      'Ability Haste': 10,
      'Physical Penetration': 4,
    },
    abilities: [
      {
        name: 'Legendary Rogue',
        description:
          'Restore 4 health each time you deal damage to an Enemy Hero or Monster with an ability (once per ability), or 6 health when killing an Enemy Unit. Upon restoring 300 health, return to base to evolve into a Legendary Crest.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 15 extra basic damage to minions',
      },
    ],
  },
  {
    name: 'Witchstalker',
    tags: [
      'Crest',
      'Physical Power',
      'Ability Haste',
      'Physical Penetration',
      'Omnivamp',
    ],
    components: ['Assassin Crest'],
    stats: {
      'Physical Power': 15,
      'Ability Haste': 10,
      'Physical Penetration': 4,
      Omnivamp: 6,
    },
    abilities: [
      {
        name: 'Active - Purifying Strike',
        description:
          'Cleanse all Negative Debuffs and empower your next basic attack or damaging ability against an Enemy Hero to deal 4% (+4% per effect removed) of their maximum health as bonus true damage, healing you for an equal amount - 150s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Ortus',
    tags: ['Crest', 'Physical Power', 'Ability Haste', 'Physical Penetration'],
    components: ['Assassin Crest'],
    stats: {
      'Physical Power': 15,
      'Ability Haste': 15,
      'Physical Penetration': 10,
    },
    abilities: [
      {
        name: 'Active - Limit Breaker',
        description:
          'Upon activiation, gain 20% decaying movement speed for 5s. During this time, your next 3 basic attacks or damaging abilities reduce current basic ability cooldowns by 1s and deal 30 (+25% Bonus Physical Power) bonus true damage - 90s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to Minions.',
      },
    ],
  },
  {
    name: 'Nex',
    tags: ['Crest', 'Physical Power', 'Ability Haste', 'Physical Penetration'],
    components: ['Assassin Crest'],
    stats: {
      'Physical Power': 20,
      'Ability Haste': 10,
      'Physical Penetration': 10,
    },
    abilities: [
      {
        name: 'Sow',
        description:
          'Store 30% of all damage dealt to Enemy Heroes (15% for AOE abilities) in the past 5s as Sow. Sow charges are expended upon using Reap.',
      },
      {
        name: 'Active - Reap',
        description:
          'Dash a short distance and deal (+100% Bonus Physical Power)(+100% of Sow) physical damage to all nearby Enemy Heroes and Slow them by 80% for 1s - 90s CD.',
      },
      {
        name: 'Creep Slayer',
        description: 'Deal 30 extra basic damage to minions.',
      },
    ],
  },
  {
    name: 'Refillable Potion',
    tags: ['Active'],
    abilities: [
      {
        name: 'Consume',
        description:
          'Restores 80 (+10 per level) health per second for 10s, restoring a total of 80-260 health.',
      },
      {
        name: 'Max Charges',
        description: '2.',
      },
      {
        name: 'Refill',
        description: 'Charges are restored upon visiting base.',
      },
    ],
  },
  {
    name: 'Wraps',
    cost: 350,
    tags: ['Magical Armor'],
    stats: {
      'Magical Armor': 10,
    },
  },
  {
    name: 'Vitality Beads',
    cost: 350,
    tags: ['Health'],
    stats: {
      Health: 100,
    },
  },
  {
    name: 'Tunic',
    cost: 350,
    tags: ['Physical Armor'],
    stats: {
      'Physical Armor': 12,
    },
  },
  {
    name: 'Spirit Beads',
    cost: 350,
    tags: ['Mana'],
    stats: {
      Mana: 150,
    },
  },
  {
    name: 'Shortsword',
    cost: 350,
    tags: ['Physical Power'],
    stats: {
      'Physical Power': 8,
    },
  },
  {
    name: 'Longbow',
    cost: 350,
    tags: ['Attack Speed'],
    stats: {
      'Attack Speed': 10,
    },
  },
  {
    name: 'Life Stream',
    cost: 350,
    tags: ['Health Regen'],
    stats: {
      'Health Regen': 75,
    },
  },
  {
    name: 'Energy Stream',
    cost: 350,
    tags: ['Mana Regen'],
    stats: {
      'Mana Regen': 50,
    },
  },
  {
    name: 'Codex',
    cost: 350,
    tags: ['Magical Power'],
    stats: {
      'Magical Power': 15,
    },
  },
  {
    name: 'Spell Slasher',
    cost: 600,
    tags: ['Passive'],
    abilities: [
      {
        name: 'Spellblade',
        description:
          'After using an ability, your next basic attack within 6s deals (+40% Total Physical Power) bonus physical damage - 1.5s CD.',
      },
    ],
  },
  {
    name: 'Crossbow',
    cost: 600,
    tags: ['Critical Chance'],
    stats: {
      'Critical Chance': 15,
    },
  },
  {
    name: 'Sabre',
    cost: 650,
    tags: ['Physical Power'],
    stats: {
      'Physical Power': 15,
    },
  },
  {
    name: 'Nullifying Mask',
    cost: 700,
    tags: ['Magical Armor'],
    components: ['Wraps'],
    stats: {
      'Magical Armor': 25,
    },
  },
  {
    name: 'Strength Tonic',
    cost: 750,
    tags: ['Active'],
    abilities: [
      {
        name: 'Consume',
        description:
          'Grant 30 physical power and 10% omnivamp for 5 minutes. Effect is lost upon death.',
      },
    ],
  },
  {
    name: 'Stamina Tonic',
    cost: 750,
    tags: ['Active'],
    abilities: [
      {
        name: 'Consume',
        description:
          'Grant 300 health and 20% increased healing for 5 minutes. Effect is lost upon death.',
      },
    ],
  },
  {
    name: 'Protection Tonic',
    cost: 750,
    tags: ['Active'],
    abilities: [
      {
        name: 'Consume',
        description:
          'Grant 20 physical armor, 20 magical armor and 15 tenacity for 5 minutes. Effect is lost upon death.',
      },
    ],
  },
  {
    name: 'Intellect Tonic',
    cost: 750,
    tags: ['Active'],
    abilities: [
      {
        name: 'Consume',
        description:
          'Grant 50 magical power and 5 Mana Regen for 5 minutes. Effect is lost upon death.',
      },
    ],
  },
  {
    name: 'Violet Brooch',
    cost: 800,
    tags: ['Health', 'Ability Haste'],
    components: ['Vitality Beads'],
    stats: {
      Health: 150,
      'Ability Haste': 10,
    },
  },
  {
    name: 'Steel Mail',
    cost: 800,
    tags: ['Physical Armor'],
    components: ['Tunic'],
    stats: {
      'Physical Armor': 30,
    },
  },
  {
    name: 'Blood Tome',
    cost: 800,
    tags: ['Magical Power', 'Magical Lifesteal'],
    components: ['Codex'],
    stats: {
      'Magical Power': 20,
      'Magical Lifesteal': 5,
    },
  },
  {
    name: 'Tenacious Drape',
    cost: 900,
    tags: ['Health', 'Tenacity'],
    components: ['Vitality Beads'],
    stats: {
      Health: 150,
      Tenacity: 15,
    },
  },
  {
    name: 'Stalwart Gauntlets',
    cost: 900,
    tags: ['Health', 'Health Regen'],
    components: ['Vitality Beads', 'Life Stream'],
    stats: {
      Health: 150,
      'Health Regen': 125,
    },
  },
  {
    name: 'Essence Ring',
    cost: 900,
    tags: ['Mana Regen', 'Ability Haste'],
    components: ['Energy Stream', 'Energy Stream'],
    stats: {
      'Mana Regen': 125,
      'Ability Haste': 10,
    },
  },
  {
    name: 'Crimson Edge',
    cost: 900,
    tags: ['Physical Power', 'Lifesteal'],
    components: ['Shortsword'],
    stats: {
      'Physical Power': 15,
      Lifesteal: 5,
    },
  },
  {
    name: 'Chronomatic Wand',
    cost: 900,
    tags: ['Magical Power', 'Ability Haste'],
    components: ['Codex'],
    stats: {
      'Magical Power': 20,
      'Ability Haste': 10,
    },
  },
  {
    name: 'Banded Emerald',
    cost: 900,
    tags: ['Health'],
    components: ['Vitality Beads'],
    stats: {
      Health: 275,
    },
  },
  {
    name: 'Scepter',
    cost: 900,
    tags: ['Magical Power'],
    stats: {
      'Magical Power': 30,
    },
  },
  {
    name: 'Polar Treads',
    cost: 950,
    tags: ['Passive', 'Magical Armor', 'Mana Regen'],
    components: ['Wraps', 'Energy Stream'],
    stats: {
      'Magical Armor': 12,
      'Mana Regen': 75,
    },
    abilities: [
      {
        name: 'Celerity',
        description: 'Gain 5% bonus movement speed out of combat.',
      },
    ],
  },
  {
    name: 'Horned Plate',
    cost: 950,
    tags: ['Passive', 'Physical Armor'],
    components: ['Tunic', 'Tunic'],
    stats: {
      'Physical Armor': 25,
    },
    abilities: [
      {
        name: 'Blighted Skin',
        description:
          "When hit by a basic attack, reduce the Source's Healing by 15% for 3s.",
      },
    ],
  },
  {
    name: 'Rune Bow',
    cost: 1000,
    tags: ['Attack Speed'],
    components: ['Longbow', 'Longbow'],
    stats: {
      'Attack Speed': 30,
    },
  },
  {
    name: 'Hallowed Braid',
    cost: 1000,
    tags: ['Passive', 'Health', 'Mana Regen'],
    components: ['Energy Stream', 'Vitality Beads'],
    stats: {
      Health: 150,
      'Mana Regen': 50,
    },
    abilities: [
      {
        name: 'Elegy',
        description:
          'Hero Deaths grant a stack of Elegy, up to a maximum of 20. Each stack grants 1 magical power and 10% Manage regeneration.',
      },
    ],
  },
  {
    name: 'Spiked Birch',
    cost: 1050,
    tags: ['Passive', 'Magical Power'],
    components: ['Codex', 'Codex'],
    stats: {
      'Magical Power': 35,
    },
    abilities: [
      {
        name: 'Blighted Spells',
        description:
          "Dealing magical damage reduces the Target's Healing by 15% for 3s.",
      },
    ],
  },
  {
    name: 'Serrated Blade',
    cost: 1050,
    tags: ['Passive', 'Physical Power'],
    components: ['Shortsword', 'Shortsword'],
    stats: {
      'Physical Power': 20,
    },
    abilities: [
      {
        name: 'Blighted Strikes',
        description:
          "Dealing physical damage reduces the Target's Healing by 15% for 3s.",
      },
    ],
  },
  {
    name: 'Alchemical Rod',
    cost: 1050,
    tags: ['Passive', 'Magical Power', 'Mana'],
    components: ['Codex', 'Spirit Beads'],
    stats: {
      'Magical Power': 20,
      Mana: 200,
    },
    abilities: [
      {
        name: 'Font',
        description:
          'Killing an Enemy Minion grants 8 bonus mana, up to a maximum of 400. At maximum stacks, gain 10 ability haste.',
      },
    ],
  },
  {
    name: 'Honed Kris',
    cost: 1050,
    tags: ['Physical Power', 'Physical Penetration'],
    components: ['Shortsword', 'Shortsword'],
    stats: {
      'Physical Power': 20,
      'Physical Penetration': 4,
    },
  },
  {
    name: 'Divine Wreath',
    cost: 1050,
    tags: ['Magical Power', 'Mana Regen', 'Heal & Shield Power'],
    components: ['Energy Stream', 'Codex'],
    stats: {
      'Magical Power': 15,
      'Mana Regen': 75,
      'Heal & Shield Power': 10,
    },
  },
  {
    name: 'Soul Chalice',
    cost: 1100,
    tags: ['Passive', 'Physical Power', 'Mana'],
    components: ['Shortsword', 'Spirit Beads'],
    stats: {
      'Physical Power': 15,
      Mana: 400,
    },
    abilities: [
      {
        name: 'Critical Font',
        description:
          'Killing an Enemy Minion grants 8 bonus mana, up to a maximum of 400. At maximum stacks, gain 2.5% of your bonus mana as additional critical strike chance.',
      },
    ],
  },
  {
    name: 'Claymore',
    cost: 1100,
    tags: ['Passive', 'Physical Power', 'Health'],
    components: ['Shortsword', 'Vitality Beads'],
    stats: {
      'Physical Power': 10,
      Health: 120,
    },
    abilities: [
      {
        name: 'Sunder',
        description:
          'Every third consecutive basic attack deals 15% (+3% of Bonus Health) bonus physical damage and slows the Target by 10% for 1s.',
      },
    ],
  },
  {
    name: 'Cerulean Stone',
    cost: 1150,
    tags: ['Physical Armor', 'Mana', 'Ability Haste'],
    components: ['Tunic', 'Spirit Beads'],
    stats: {
      'Physical Armor': 15,
      Mana: 200,
      'Ability Haste': 10,
    },
  },
  {
    name: 'Composite Bow',
    cost: 1150,
    tags: ['Passive', 'Attack Speed', 'On-hit'],
    components: ['Longbow', 'Longbow'],
    stats: {
      'Attack Speed': 20,
    },
    abilities: [
      {
        name: 'Honed Strikes',
        description: 'Basic attacks deal 12 bonus physical damage on-hit.',
      },
    ],
  },
  {
    name: 'Barbed Pauldron',
    cost: 1150,
    tags: ['Passive', 'Physical Armor'],
    components: ['Tunic', 'Tunic'],
    stats: {
      'Physical Armor': 25,
    },
    abilities: [
      {
        name: 'Stifle',
        description:
          "When hit by a basic attack, reduce the Source's total attack speed by 3% for 3s, stacking up to 5 times.",
      },
    ],
  },
  {
    name: 'Abyssal Bracers',
    cost: 1150,
    tags: ['Passive', 'Magical Power', 'Physical Armor'],
    components: ['Codex', 'Tunic'],
    stats: {
      'Magical Power': 20,
      'Physical Armor': 15,
    },
    abilities: [
      {
        name: 'Ferrumancer',
        description:
          'Casting an ability grants 3 magical power and physical armor for 5s, stacking up to 5 times.',
      },
    ],
  },
  {
    name: 'Temporal Ripper',
    cost: 1200,
    tags: ['Physical Power', 'Ability Haste'],
    components: ['Shortsword', 'Shortsword'],
    stats: {
      'Physical Power': 20,
      'Ability Haste': 10,
    },
  },
  {
    name: 'Ravenous Rapier',
    cost: 1200,
    tags: ['Passive', 'Physical Power', 'Lifesteal', 'On-hit'],
    components: ['Sabre'],
    stats: {
      'Physical Power': 20,
      Lifesteal: 5,
    },
    abilities: [
      {
        name: 'Sever',
        description:
          'Basic attacks against Enemy Heroes deal 2.5% of their current health as bonus physical damage on-hit.',
      },
    ],
  },
  {
    name: 'Fortified Mantle',
    cost: 1200,
    tags: ['Physical Power', 'Physical Armor'],
    components: ['Shortsword', 'Tunic'],
    stats: {
      'Physical Power': 15,
      'Physical Armor': 15,
    },
  },
  {
    name: 'Brimstone',
    cost: 1200,
    tags: ['Passive', 'Health', 'Mana'],
    components: ['Vitality Beads', 'Spirit Beads'],
    stats: {
      Health: 150,
      Mana: 200,
    },
    abilities: [
      {
        name: 'Blaze',
        description:
          'Deal 20 magical damage per second to nearby Enemies, increased by 50% against Monsters.',
      },
    ],
  },
  {
    name: 'Bloodlust',
    cost: 1200,
    tags: ['Physical Power', 'Omnivamp'],
    components: ['Sabre'],
    stats: {
      'Physical Power': 20,
      Omnivamp: 5,
    },
  },
  {
    name: 'Potent Staff',
    cost: 1200,
    tags: ['Magical Power'],
    stats: {
      'Magical Power': 40,
    },
  },
  {
    name: 'Greatsword',
    cost: 1200,
    tags: ['Physical Power'],
    stats: {
      'Physical Power': 30,
    },
  },
  {
    name: 'Robust Arbalest',
    cost: 1250,
    tags: ['Passive', 'Critical Chance', 'Attack Speed'],
    components: ['Crossbow', 'Longbow'],
    stats: {
      'Critical Chance': 20,
      'Attack Speed': 15,
    },
    abilities: [
      {
        name: 'Swift',
        description:
          'Basic attacking an Enemy Hero grants 3% movement speed for 3s.',
      },
    ],
  },
  {
    name: 'Zealous Tomahawk',
    cost: 1300,
    tags: ['Passive', 'Physical Power'],
    components: ['Sabre'],
    stats: {
      'Physical Power': 15,
    },
    abilities: [
      {
        name: 'Desolate',
        description:
          "Your physical damage ignores 15% of your target's physical armor (Before Penetration).",
      },
    ],
  },
  {
    name: 'Loch Shawl',
    cost: 1300,
    tags: ['Passive', 'Health', 'Health Regen'],
    components: ['Vitality Beads', 'Life Stream'],
    stats: {
      Health: 200,
      'Health Regen': 75,
    },
    abilities: [
      {
        name: 'Colossus',
        description:
          'Killing an Enemy Minion grants 4 bonus health per stack, up to a maximum of 400. At maximum stacks, gain 10 ability haste.',
      },
    ],
  },
  {
    name: 'Dusk Stave',
    cost: 1300,
    tags: ['Magical Power', 'Mana', 'Ability Haste'],
    components: ['Spirit Beads', 'Codex'],
    stats: {
      'Magical Power': 25,
      Mana: 150,
      'Ability Haste': 10,
    },
  },
  {
    name: 'Barbaric Cleaver',
    cost: 1300,
    tags: ['Passive', 'Physical Power'],
    components: ['Shortsword', 'Shortsword'],
    stats: {
      'Physical Power': 20,
    },
    abilities: [
      {
        name: 'Cleave',
        description:
          'Basic attack deal an additional (+25% Total Physical Power) physical damage in a small area around the Target. Damage ranges from 100% to 50% based on distance between Targets.',
      },
    ],
  },
  {
    name: 'Diffusal Cane',
    cost: 1350,
    tags: ['Magical Power', 'Magical Penetration'],
    components: ['Codex', 'Codex'],
    stats: {
      'Magical Power': 35,
      'Magical Penetration': 8,
    },
  },
  {
    name: 'Ruthless Broadsword',
    cost: 1400,
    tags: ['Passive', 'Physical Power', 'Ability Haste'],
    components: ['Shortsword', 'Shortsword'],
    stats: {
      'Physical Power': 20,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Corrode',
        description:
          'Dealing damage to an Enemy Hero reduces their physical armor by 5% for 2s, stacking up to 6 times.',
      },
    ],
  },
  {
    name: 'Ironwood Warbow',
    cost: 1400,
    tags: ['Passive', 'Physical Power', 'Attack Speed'],
    components: ['Shortsword', 'Longbow', 'Shortsword'],
    stats: {
      'Physical Power': 25,
      'Attack Speed': 10,
    },
    abilities: [
      {
        name: 'Zap',
        description:
          'Every fourth successful basic attack deals 15 (+40% Bonus Physical Power) bonus magical damage.',
      },
    ],
  },
  {
    name: 'Heroic Guard',
    cost: 1400,
    tags: ['Passive', 'Physical Power', 'Magical Armor'],
    components: ['Sabre', 'Wraps'],
    stats: {
      'Physical Power': 20,
      'Magical Armor': 15,
    },
    abilities: [
      {
        name: 'Bravery',
        description:
          'Upon falling below 40% maximum health, Cleanse all Negative Debuffs - 90s CD.',
      },
    ],
  },
  {
    name: 'Scalding Sceptre',
    cost: 1450,
    tags: ['Magical Power', 'Magical Penetration'],
    components: ['Scepter'],
    stats: {
      'Magical Power': 30,
      'Magical Penetration': 20,
    },
  },
  {
    name: 'Void Crystal',
    cost: 1800,
    tags: ['Passive', 'Magical Power', 'Health'],
    components: ['Codex', 'Vitality Beads', 'Codex'],
    stats: {
      'Magical Power': 400,
      Health: 150,
    },
    abilities: [
      {
        name: 'Fiend',
        description:
          'Dealing magical damage to an Enemy Hero increases your magical damage dealt by 3% for 5s, stacking up to 4 times.',
      },
    ],
  },
  {
    name: 'Chaotic Core',
    cost: 1800,
    tags: ['Magical Power', 'Ability Haste'],
    components: ['Potent Staff'],
    stats: {
      'Magical Power': 50,
      'Ability Haste': 10,
    },
  },
  {
    name: 'Vanguardian',
    cost: 2600,
    tags: ['Passive', 'Health', 'Magical Armor', 'Tenacity'],
    components: ['Tenacious Drape', 'Vitality Beads', 'Nullifying Mask'],
    stats: {
      Health: 300,
      'Magical Armor': 30,
      Tenacity: 30,
    },
    abilities: [
      {
        name: 'Vanguard',
        description:
          'Receiving damage from an Enemy Hero grants you 30 physical armor and 30 magical armor for 4s. While active, damage received from Enemy Heroes refreshes the duration - 60s CD.',
      },
      {
        name: 'Guardian',
        description:
          'Nearby Allied Heroes gain 10 physical armor and 10 magical armor.',
      },
    ],
  },
  {
    name: 'Truesilver Bracelet',
    cost: 2600,
    tags: [
      'Passive',
      'Magical Power',
      'Health',
      'Magical Armor',
      'Ability Haste',
    ],
    components: ['Nullifying Mask', 'Violet Brooch', 'Codex'],
    stats: {
      'Magical Power': 25,
      Health: 250,
      'Magical Armor': 25,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Reprisal',
        description:
          'Casting your ultimate grants you a 250 (+15% Bonus Health) shield for 5s. While the shield holds, gain CC immunity. Upon removal, it explodes dealing magical damage to nearby Enemies for 60% of the initial strength - 40s CD.',
      },
    ],
  },
  {
    name: 'Marshal',
    cost: 2600,
    tags: ['Passive', 'Magical Power', 'Mana Regen', 'Ability Haste', 'On-hit'],
    components: ['Essence Ring', 'Scepter', 'Codex'],
    stats: {
      'Magical Power': 45,
      'Mana Regen': 125,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Sheriff',
        description:
          "Yourself and nearby Allied Heroes gain 20% attack speed and deal 15 (+1 per the Target's level) magical damage on-hit.",
      },
    ],
  },
  {
    name: 'Crystal Tear',
    cost: 2650,
    tags: [
      'Passive',
      'Magical Power',
      'Mana Regen',
      'Ability Haste',
      'Heal & Shield Power',
    ],
    components: ['Essence Ring', 'Codex', 'Divine Wreath'],
    stats: {
      'Magical Power': 30,
      'Mana Regen': 225,
      'Ability Haste': 10,
      'Heal & Shield Power': 15,
    },
    abilities: [
      {
        name: 'Elation',
        description:
          'Healing or Shielding Allied Heroes grants you both 40 magical power and 20 ability haste for 5s.',
      },
    ],
  },
  {
    name: 'Timewarp',
    cost: 2700,
    tags: [
      'Passive',
      'Magical Power',
      'Physical Armor',
      'Mana Regen',
      'Ability Haste',
    ],
    components: ['Abyssal Bracers', 'Essence Ring'],
    stats: {
      'Magical Power': 25,
      'Physical Armor': 15,
      'Mana Regen': 150,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Ferrumancer',
        description:
          'Casting an ability grants you 5 magical power and 5 physical armor for 5s, stacking up to 5 times.',
      },
      {
        name: 'Chime',
        description:
          'When you cast an ability, reduce all other current basic ability cooldowns by 15%, with a maximum reduction of 1s.',
      },
    ],
  },
  {
    name: 'Requiem',
    cost: 2700,
    tags: [
      'Passive',
      'Magical Power',
      'Health',
      'Mana Regen',
      'Heal & Shield Power',
    ],
    components: ['Hallowed Braid', 'Divine Wreath'],
    stats: {
      'Magical Power': 20,
      Health: 200,
      'Mana Regen': 125,
      'Heal & Shield Power': 10,
    },
    abilities: [
      {
        name: 'Elegy',
        description:
          'When a Hero dies, gain a stack of Elegy, up to a maximum of 20 stacks. Each stack grants 1 magical power and 10% Mana regeneration.',
      },
      {
        name: 'Remembrance',
        description:
          'Grant nearby Allies 1 physical power and 0.5% lifesteal per stack of Elegy.',
      },
    ],
  },
  {
    name: 'Fire Blossom',
    cost: 2700,
    tags: ['Passive', 'Health', 'Mana', 'Physical Armor'],
    components: ['Brimstone', 'Steel Mail'],
    stats: {
      Health: 275,
      Mana: 200,
      'Physical Armor': 40,
    },
    abilities: [
      {
        name: 'Heatwave',
        description:
          'Deal 25 (+1.5% Bonus Health) magical damage per second to nearby Enemies, increased by 50% against Immobilied Targets, and 100% against Monsters.',
      },
    ],
  },
  {
    name: 'Elafrost',
    cost: 2700,
    tags: ['Passive', 'Magical Power', 'Health', 'Mana', 'Ability Haste'],
    components: ['Scepter', 'Violet Brooch', 'Spirit Beads'],
    stats: {
      'Magical Power': 30,
      Health: 200,
      Mana: 300,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Frostbite',
        description:
          'Basic attacks Slow Enemies by 3% for 2s, stacking up to 8 times. Melee basic attacks apply 2 stacks.',
      },
      {
        name: 'Frostfang',
        description:
          'Applying 8 stacks of Frostbite to a Target deals an additional (+10% Maximum Mana) magical damage and Roots them for 1s - 8s CD per Target.',
      },
    ],
  },
  {
    name: 'Wellspring',
    cost: 2700,
    tags: ['Passive', 'Magical Power', 'Mana Regen', 'Heal & Shield Power'],
    components: ['Divine Wreath', 'Scepter'],
    stats: {
      'Magical Power': 45,
      'Mana Regen': 100,
      'Heal & Shield Power': 20,
    },
    abilities: [
      {
        name: 'Vital Waters',
        description:
          'Casting an ability heals nearby Allies for 40 (+20% Magical Power) over 2s.',
      },
      {
        name: 'Soothing Waters',
        description:
          "Vital Waters heals an additional 15% of your lowest Ally's maximum health. Basic attacks against Enemy Heroes reduce the cooldown of Soothing Waters by 1s - 15s CD.",
      },
    ],
  },
  {
    name: "Golem's Gift",
    cost: 2800,
    tags: ['Passive', 'Magical Power', 'Physical Armor', 'Ability Haste'],
    components: ['Abyssal Bracers', 'Chronomatic Wand'],
    stats: {
      'Magical Power': 70,
      'Physical Armor': 30,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Artillery Golem',
        description:
          'Gain 40 magical power and 40 physical armor. Whenever you take physical damage from an Enemy Hero, decrease both bonuses by 10. This efect resets to full when you leave combat.',
      },
    ],
  },
  {
    name: 'Tainted Totem',
    cost: 2800,
    tags: [
      'Passive',
      'Physical Armor',
      'Magical Armor',
      'Mana Regen',
      'Ability Haste',
    ],
    components: ['Steel Mail', 'Essence Ring', 'Nullifying Mask'],
    stats: {
      'Physical Armor': 40,
      'Magical Armor': 30,
      'Mana Regen': 150,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Chilling Blight',
        description:
          'Nearby Enemy Heroes have their Healing reduced by 30% and are Slowed by 10%.',
      },
      {
        name: 'Nirvana',
        description:
          'Yourself and nearby Allied Heroes receive 20% increased Healing and Shielding.',
      },
    ],
  },
  {
    name: 'Overlord',
    cost: 2800,
    tags: ['Passive', 'Physical Power', 'Health', 'On-hit'],
    components: ['Barbaric Cleaver', 'Banded Emerald'],
    stats: {
      'Physical Power': 25,
      Health: 350,
    },
    abilities: [
      {
        name: 'Colossal Cleave',
        description:
          'Basic attacks deal (+30% Total Physical Power)(+2% Maximum Health) physical damage in a small area around the Target. Damage ranges from 100% to 50% based on the distance between Targets.',
      },
      {
        name: 'Bludgeon',
        description:
          'Basic attacks deal (+3.5% Bonus Health) physical damage on-hit.',
      },
    ],
  },
  {
    name: 'Hexbound Bracers',
    cost: 2800,
    tags: ['Passive', 'Physical Armor', 'Mana', 'Ability Haste'],
    components: ['Steel Mail', 'Cerulean Stone', 'Spirit Beads'],
    stats: {
      'Physical Armor': 50,
      Mana: 400,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Meditation',
        description: 'Gain 20 ability haste while above 60% maximum mana.',
      },
      {
        name: 'Mana Reactor',
        description:
          'Restore mana equal to 10% of the damage taken from Enemy Heroes.',
      },
    ],
  },
  {
    name: 'Galaxy Greaves',
    cost: 2800,
    tags: [
      'Passive',
      'Physical Armor',
      'Magical Armor',
      'Mana Regen',
      'Ability Haste',
    ],
    components: ['Steel Mail', 'Polar Treads', 'Wraps'],
    stats: {
      'Physical Armor': 30,
      'Magical Armor': 30,
      'Mana Regen': 100,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'ZeroG',
        description:
          'Moving generates stacks of ZeroG. At 100 stacks, your next jump will have increased height.',
      },
      {
        name: 'Celerity',
        description: 'Gain 10% bonus movement speed out of combat.',
      },
    ],
  },
  {
    name: 'Flux Matrix',
    cost: 2800,
    tags: ['Passive', 'Health', 'Magical Armor', 'Ability Haste'],
    components: ['Violet Brooch', 'Nullifying Mask', 'Violet Brooch'],
    stats: {
      Health: 350,
      'Magical Armor': 35,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Unstable Shackles',
        description:
          'Nearby Enemy Heroes take 15% additional magical damage and have their tenacity decreased by 20%.',
      },
    ],
  },
  {
    name: 'Dynamo',
    cost: 2800,
    tags: ['Passive', 'Health', 'Physical Armor', 'Mana'],
    components: ['Banded Emerald', 'Steel Mail', 'Spirit Beads'],
    stats: {
      Health: 300,
      'Physical Armor': 55,
      Mana: 200,
    },
    abilities: [
      {
        name: 'Immobilizer',
        description:
          'Immobilizing an Enemy deals 30 (+5% Maximum Health) bonus magical damage to the Target and nearby Enemies, shredding their physical armor and magical armor by 30% for 4s. Damage is increased by 200% against Monsters - 12s CD.',
      },
    ],
  },
  {
    name: 'Breach',
    cost: 2800,
    tags: [
      'Passive',
      'Physical Power',
      'Physical Penetration',
      'Ability Haste',
    ],
    components: ['Honed Kris', 'Temporal Ripper'],
    stats: {
      'Physical Power': 50,
      'Attack Speed': 10,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Shatter',
        description:
          'Deal 50% bonus damage to Shielded Targets as physical damage.',
      },
    ],
  },
  {
    name: 'Bonesaw',
    cost: 2800,
    tags: ['Passive', 'Physical Power', 'Health', 'On-hit'],
    components: ['Claymore', 'Banded Emerald'],
    stats: {
      'Physical Power': 25,
      Health: 400,
    },
    abilities: [
      {
        name: 'Colossal Sunder',
        description:
          'Every third consecutive basic attack deals (+3% Maximum Health) bonus physical damage on-hit and slows the Target by 20% for 1s.',
      },
      {
        name: 'Flurry',
        description:
          'Dealing damage with Colossal Sunder grants 8% attack speed for 5s, stacking up to 6 times.',
      },
    ],
  },
  {
    name: 'Malady',
    cost: 2800,
    tags: [
      'Passive',
      'Physical Power',
      'Physical Penetration',
      'Ability Haste',
    ],
    components: ['Honed Kris', 'Temporal Ripper'],
    stats: {
      'Physical Power': 45,
      'Physical Penetration': 8,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Parting Gift',
        description:
          "Killing an Enemy Unit causes them to explode in a small radius, dealing (+30% of the Target's Maximum Health) as physical damage. Damage ranges from 100% to 40% based on distance between Targets and is capped at 500 - 2s CD.",
      },
      {
        name: 'Demise',
        description:
          "Dealing damage to an Enemy Hero that is below 40% maximum health deals an additional 40 (+30% Bonus Physical Power) physical damage, increasing by 10 with each activation. Takedowns reset Demise's cooldown - 45s CD.",
      },
    ],
  },
  {
    name: 'Azure Core',
    cost: 2800,
    tags: ['Passive', 'Magical Power', 'Mana', 'Ability Haste'],
    components: ['Alchemical Rod', 'Dusk Stave'],
    stats: {
      'Magical Power': 50,
      Mana: 350,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Font',
        description:
          'Killing an Enemy Minion grants 8 bonus mana per stack, up to a maximum of 400. At maximum stacks, gain 10 ability haste.',
      },
      {
        name: 'Arcane Magic',
        description: 'Grants bonus magical power equal to (+3% Maximum Mana).',
      },
    ],
  },
  {
    name: 'Tainted Guard',
    cost: 2850,
    tags: ['Passive', 'Health', 'Physical Armor', 'Ability Haste'],
    components: ['Violet Brooch', 'Horned Plate', 'Vitality Beads'],
    stats: {
      Health: 400,
      'Physical Armor': 40,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Blighted Thorns',
        description:
          "When hit by a basic attack, reduce the Source's Healing by 30% and apply a bleed dealing 30 (+30% Bonus Physical Armor) magical damage over 3s.",
      },
    ],
  },
  {
    name: 'Spellbreaker',
    cost: 2900,
    tags: ['Passive', 'Magical Power', 'Magical Armor', 'Ability Haste'],
    components: ['Chronomatic Wand', 'Scepter', 'Nullifying Mask'],
    stats: {
      'Magical Power': 55,
      'Magical Armor': 35,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Veil',
        description:
          'Grants a Spell Shield that blocks the next Enemy ability - 60s CD.',
      },
      {
        name: 'Malefic',
        description: 'Gain 20% increased magical power while Veil is active.',
      },
    ],
  },
  {
    name: 'Dreambinder',
    cost: 2900,
    tags: ['Passive', 'Magical Power', 'Health', 'Tenacity'],
    components: ['Scepter', 'Tenacious Drape', 'Codex'],
    stats: {
      'Magical Power': 60,
      Health: 350,
      Tenacity: 15,
    },
    abilities: [
      {
        name: 'Chilling Spells',
        description: 'Damaging abilities Slow affected Units by 25% for 1.5s.',
      },
      {
        name: 'Thaw',
        description:
          'Abilities deal 10% additional damage to Slowed Enemy Heroes.',
      },
    ],
  },
  {
    name: 'Mesmer',
    cost: 2900,
    tags: [
      'Passive',
      'Physical Power',
      'Magical Armor',
      'Physical Penetration',
    ],
    components: ['Sabre', 'Honed Kris', 'Nullifying Mask'],
    stats: {
      'Physical Power': 40,
      'Magical Armor': 25,
      'Physical Penetration': 8,
    },
    abilities: [
      {
        name: 'Vengeful Shroud',
        description:
          'Grants a Spell Shield that blocks the next Enemy ability. Upon blocking an Enemy Ability, gain 30 physical power for 3s - 60s CD.',
      },
    ],
  },
  {
    name: 'Demon Edge',
    cost: 2900,
    tags: ['Passive', 'Physical Power'],
    components: ['Shortsword', 'Zealous Tomahawk', 'Shortsword'],
    stats: {
      'Physical Power': 45,
    },
    abilities: [
      {
        name: 'Demonic',
        description:
          'While above 40% maximum health gain (+15% Bonus Physical Power).',
      },
      {
        name: 'Ceaseless',
        description: 'While below 40% maximum health, gain 10% omnivamp.',
      },
      {
        name: 'Desolate',
        description:
          "Your physical damage ignores 35% of your target's physical armor (Before Penetration).",
      },
    ],
  },
  {
    name: 'Astral Catalyst',
    cost: 2900,
    tags: ['Passive', 'Magical Power', 'Mana', 'Ability Haste'],
    components: ['Dusk Stave', 'Chronomatic Wand'],
    stats: {
      'Magical Power': 50,
      Mana: 350,
      'Ability Haste': 25,
    },
    abilities: [
      {
        name: 'Spellslinger',
        description:
          'Using an ability grants you 3% increased magical power for 3s, stacking up to 4 times.',
      },
      {
        name: 'Ravenous',
        description: "Takedowns refund 25% of your ultimate's total cooldown.",
      },
    ],
  },
  {
    name: 'Unbroken Will',
    cost: 2950,
    tags: ['Passive', 'Health', 'Health Regen', 'Magical Armor', 'Tenacity'],
    components: ['Nullifying Mask', 'Stalwart Gauntlets', 'Tenacious Drape'],
    stats: {
      Health: 350,
      'Health Regen': 150,
      'Magical Armor': 30,
      Tenacity: 15,
    },
    abilities: [
      {
        name: 'Undying',
        description:
          'When you are Immobilized, take 20% decreased damage for 2s.',
      },
      {
        name: 'Persistence',
        description:
          'If you are Immobilized or Displaced, you restore (+6% Maximum Health) health over 4s.',
      },
    ],
  },
  {
    name: 'Wraith Leggings',
    cost: 3000,
    tags: ['Passive', 'Magical Power', 'Magical Penetration'],
    components: ['Diffusal Cane', 'Scepter'],
    stats: {
      'Magical Power': 80,
      'Magical Penetration': 15,
    },
    abilities: [
      {
        name: 'Spectre',
        description:
          'Dealing damage to an Enemy Hero with an ability grants 100 movement speed for 1.5s.',
      },
      {
        name: 'Carnage',
        description:
          'Abilities deal an additional 20% magical damage against Enemy Heroes below 40% maximum health.',
      },
    ],
  },
  {
    name: "Warden's Faith",
    cost: 3000,
    tags: ['Passive', 'Health', 'Physical Armor'],
    components: ['Steel Mail', 'Banded Emerald', 'Steel Mail'],
    stats: {
      Health: 300,
      'Physical Armor': 70,
    },
    abilities: [
      {
        name: 'Stalwart',
        description: 'Take 15% reduced damage from Critical Strikes.',
      },
      {
        name: 'Retribution',
        description:
          'When hit by a basic attack, reduce current basic ability cooldowns by 0.2s.',
      },
    ],
  },
  {
    name: 'The Perforator',
    cost: 3000,
    tags: ['Passive', 'Physical Power', 'Ability Haste'],
    components: ['Zealous Tomahawk', 'Greatsword'],
    stats: {
      'Physical Power': 50,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Calamity',
        description:
          'Abilities deal 0% to 35% (based on 0 to 1600 maximum health difference) bonus physical damage against Enemy Heroes with greater maximum health than you.',
      },
      {
        name: 'Desolate',
        description:
          "Your physical damage ignores 35% of your target's physical armor (Before Penetration).",
      },
    ],
  },
  {
    name: 'Tainted Blade',
    cost: 3000,
    tags: ['Passive', 'Physical Power', 'Health', 'Ability Haste'],
    components: ['Violet Brooch', 'Serrated Blade', 'Sabre'],
    stats: {
      'Physical Power': 40,
      Health: 200,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Blighted Strikes',
        description:
          'Dealing physical damage to an Enemy Target reduces their Healing by 30% for 3s.',
      },
      {
        name: 'Hex',
        description:
          'Damaging an Enemy Target affected by Blight with an ability deals an additional 20 physical damage and causes them to take 10% more damage for 3s - 1s CD.',
      },
    ],
  },
  {
    name: 'Storm Breaker',
    cost: 3000,
    tags: [
      'Passive',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'Movement Speed',
    ],
    components: ['Ironwood Warbow', 'Robust Arbalest'],
    stats: {
      'Physical Power': 25,
      'Attack Speed': 40,
      'Critical Chance': 20,
      'Movement Speed': 3,
    },
    abilities: [
      {
        name: 'Chain Zap',
        description:
          'Every fourth successful basic attack releases a bolt of lightning which leaps between 7 Targets, dealing 50 (+1.5 per 1% Critical Strike Chance) magical damage to each.',
      },
    ],
  },
  {
    name: 'Stonewall',
    cost: 3000,
    tags: ['Passive', 'Health', 'Health Regen', 'Physical Armor'],
    components: ['Stalwart Gauntlets', 'Steel Mail', 'Steel Mail'],
    stats: {
      Health: 150,
      'Health Regen': 150,
      'Physical Armor': 70,
    },
    abilities: [
      {
        name: 'Shockwave',
        description:
          'Taking damage that would reduce you below 40% maximum health unleashes a shockwave, Stunning all nearby Enemies for 1s - 90s CD.',
      },
      {
        name: 'Bulwark',
        description:
          'Take 10 (+7.5% Bonus Physical Armor)% decreased damage from physical abilities.',
      },
    ],
  },
  {
    name: 'Raiment of Renewal',
    cost: 3000,
    tags: ['Passive', 'Health', 'Health Regen', 'Mana', 'Ability Haste'],
    components: ['Violet Brooch', 'Stalwart Gauntlets', 'Vitality Beads'],
    stats: {
      Health: 600,
      'Health Regen': 150,
      Mana: 200,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Regenerator',
        description: 'Regenerate 10% of damage taken over 5s.',
      },
      {
        name: 'Synthesis',
        description: 'Increase all Healing received by 20%.',
      },
    ],
  },
  {
    name: 'Oathkeeper',
    cost: 3000,
    tags: ['Passive', 'Magical Power', 'Health', 'Ability Haste', 'On-hit'],
    components: ['Chronomatic Wand', 'Spell Slasher', 'Violet Brooch'],
    stats: {
      'Magical Power': 60,
      Health: 250,
      'Ability Haste': 25,
    },
    abilities: [
      {
        name: 'Celestial Spellblade',
        description:
          'After using an ability, your next basic attack within 6s deals (+60% Total Physical Power)(+40% Magical Power) bonus magical damage on-hit - 1.5s CD.',
      },
    ],
  },
  {
    name: 'Magnify',
    cost: 3000,
    tags: ['Passive', 'Magical Power', 'Attack Speed', 'Ability Haste'],
    components: ['Chaotic Core', 'Rune Bow'],
    stats: {
      'Magical Power': 50,
      'Attack Speed': 30,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Shredding Strikes',
        description:
          "Your basic attacks decrease the Target's magical armor by 6% for 3s, stacking up to 5 times.",
      },
      {
        name: 'Magnifying Strikes',
        description:
          'Basic attacks against Enemy Heroes grant you 8 magical power for 3s, stacking up to 5 times.',
      },
    ],
  },
  {
    name: 'Lightning Hawk',
    cost: 3000,
    tags: [
      'Passive',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'Movement Speed',
    ],
    components: ['Ironwood Warbow', 'Robust Arbalest'],
    stats: {
      'Physical Power': 35,
      'Attack Speed': 25,
      'Critical Chance': 20,
      'Movement Speed': 3,
    },
    abilities: [
      {
        name: 'Chilling Zap',
        description:
          'Every fourth successful basic attack deals 30 (+100% Bonus Physical Power) bonus magical damage and Slows the Target by 35% for 0.5s.',
      },
    ],
  },
  {
    name: 'Leviathan',
    cost: 3000,
    tags: ['Passive', 'Health', 'Health Regen'],
    components: ['Loch Shawl', 'Stalwart Gauntlets'],
    stats: {
      Health: 400,
      'Health Regen': 225,
    },
    abilities: [
      {
        name: 'Colossus',
        description:
          'Killing an Enemy Minion grants 4 bonus health per stack, up to a maximum of 300 bonus health. At maximum stacks, gain 10 ability haste.',
      },
      {
        name: 'Hasty Colossus',
        description: 'Gain (+1% Maximum Health) ability haste.',
      },
    ],
  },
  {
    name: 'Legacy',
    cost: 3000,
    tags: ['Passive', 'Physical Power', 'Magical Armor', 'Ability Haste'],
    components: ['Heroic Guard', 'Temporal Ripper'],
    stats: {
      'Physical Power': 30,
      'Magical Armor': 30,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Tenacious Bravery',
        description:
          'Upon falling below 40% maximum health, Cleans all Negative Debuffs and gain 60% tenacity for 5s - 60s CD.',
      },
      {
        name: 'Resolute',
        description:
          'Gain 1 physical power for every 2% missing health, for a maximum of 30 physical power.',
      },
    ],
  },
  {
    name: 'Dread',
    cost: 3000,
    tags: [
      'Passive',
      'Physical Power',
      'Physical Penetration',
      'Magical Armor',
      'Mana Regen',
    ],
    components: ['Honed Kris', 'Sabre', 'Polar Treads'],
    stats: {
      'Physical Power': 40,
      'Physical Penetration': 10,
      'Magical Armor': 30,
      'Mana Regen': 150,
    },
    abilities: [
      {
        name: 'Voracity',
        description:
          'Killing an Enemy Target restores 5% of your missing health, increased to 25% for Enemy Heroes.',
      },
      {
        name: 'Celerity',
        description: 'Gain 10% bonus movement speed out of combat.',
      },
    ],
  },
  {
    name: 'Tectonic Mallet',
    cost: 3000,
    tags: ['Passive', 'Physical Power', 'Magical Armor', 'Omnivamp'],
    components: ['Nullifying Mask', 'Bloodlust', 'Shortsword'],
    stats: {
      'Physical Power': 35,
      'Magical Armor': 40,
      Omnivamp: 5,
    },
    abilities: [
      {
        name: 'Magnitude',
        description:
          'Gain 25% of your bonus movement speed as bonus physical power.',
      },
      {
        name: 'Harmonic Absorber',
        description: 'While Slowed, gain 10% increased movement speed.',
      },
    ],
  },
  {
    name: 'Frostguard',
    cost: 3000,
    tags: ['Passive', 'Health', 'Physical Armor', 'Mana', 'Ability Haste'],
    components: ['Barbed Pauldron', 'Cerulean Stone', 'Vitality Beads'],
    stats: {
      Health: 200,
      'Physical Armor': 50,
      Mana: 250,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Chilling Presence',
        description:
          'Slow nearby Enemies by 10% and apply a stack of Stifle every 0.5s.',
      },
      {
        name: 'Stifle',
        description:
          "When hit by a basic attack, reduce the Source's total attack speed by 3% for 3s, stacking up to 5 times.",
      },
    ],
  },
  {
    name: 'Combustion',
    cost: 3200,
    tags: ['Passive', 'Magical Power', 'Magical Penetration', 'Mana'],
    components: ['Scepter', 'Diffusal Cane', 'Spirit Beads'],
    stats: {
      'Magical Power': 70,
      'Magical Penetration': 10,
      Mana: 200,
    },
    abilities: [
      {
        name: 'Pyro',
        description:
          'Your next instance of ability damage will deal 80 (+10% Magical Power) bonus magical damage to the Target and nearby Enemies - 12s CD.',
      },
      {
        name: 'Pyromaniac',
        description:
          'Damaging Enemy Heroes reduces the cooldown of Pyro by 0.5s.',
      },
    ],
  },
  {
    name: 'Citadel',
    cost: 3000,
    tags: ['Passive', 'Physical Power', 'Health', 'Physical Armor'],
    components: ['Fortified Mantle', 'Vitality Beads', 'Fortified Mantle'],
    stats: {
      'Physical Power': 35,
      Health: 200,
      'Physical Armor': 35,
    },
    abilities: [
      {
        name: 'Fortification',
        description: 'Gain 10 physical armor far each nearby Enemy Hero.',
      },
      {
        name: 'Intimidation',
        description:
          'Nearby Enemy Heroes have their physical armor decreased by 20%.',
      },
    ],
  },
  {
    name: 'Draconum',
    cost: 3050,
    tags: ['Passive', 'Physical Power', 'Physical Armor', 'Ability Haste'],
    components: ['Temporal Ripper', 'Fortified Mantle'],
    stats: {
      'Physical Power': 35,
      'Physical Armor': 35,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Surge',
        description:
          'Taking or dealing damage generates 2 physical power and 2% increased Healing, stacking up to 10 times. Stacks are lost out of combat.',
      },
      {
        name: 'Flow',
        description:
          'Takedowns restore 12% of your missing health and grant you 3% Attack Speed per stack of Surge for 8s.',
      },
    ],
  },
  {
    name: 'Void Helm',
    cost: 3100,
    tags: ['Passive', 'Health', 'Magical Armor', 'Ability Haste'],
    components: ['Nullifying Mask', 'Violet Brooch', 'Banded Emerald'],
    stats: {
      Health: 500,
      'Magical Armor': 25,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Justicar',
        description:
          'For every 40 magical damage received, gain 4 magical armor and 75% Health regeneration for 8s, stacking up to 8 times. At maximum stacks, gain 10% movement speed.',
      },
    ],
  },
  {
    name: 'Vanquisher',
    cost: 3100,
    tags: ['Passive', 'Physical Power', 'Mana', 'Physical Penetration'],
    components: ['Honed Kris', 'Spirit Beads', 'Honed Kris'],
    stats: {
      'Physical Power': 45,
      Mana: 20,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Arcane Power',
        description: 'Gain (+2% Maximum Mana) Physical Power.',
      },
      {
        name: 'Annihilate',
        description:
          'If you deal damage that would leave a Hero below 5% of their maximum health, execute them.',
      },
    ],
  },
  {
    name: 'Tainted Scepter',
    cost: 3100,
    tags: ['Passive', 'Magical Power', 'Health', 'Ability Haste'],
    components: ['Scepter', 'Spiked Birch', 'Violet Brooch'],
    stats: {
      'Magical Power': 65,
      Health: 200,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Blighted Spells',
        description:
          'Dealing magical damage to an Enemy Target reduces their Healing by 30% for 3s.',
      },
      {
        name: 'Malice',
        description:
          'Every second, gain a stack of Malice, up to a maximum of 15. Damaging an Enemy Hero with an ability consumes Malice to deal 6 true damage per stack. Takedowns grant maximum stacks of Malice instantly.',
      },
    ],
  },
  {
    name: 'Painweaver',
    cost: 3100,
    tags: [
      'Passive',
      'Physical Power',
      'Physical Penetration',
      'Ability Haste',
      'On-hit',
    ],
    components: ['Honed Kris', 'Spell Slasher', 'Temporal Ripper'],
    stats: {
      'Physical Power': 45,
      'Physical Penetration': 12,
      'Ability Haste': 15,
    },
    abilities: [
      {
        name: 'Spellweaver',
        description:
          "After using an ability, your next basic attack within 6s deal (+50% Bonus Physical Power) bonus physical damage on-hit, increasing by up to 50% based on the Target's missing health - 1.5s CD.",
      },
    ],
  },
  {
    name: 'Omen',
    cost: 3100,
    tags: [
      'Passive',
      'Physical Power',
      'Physical Penetration',
      'Ability Haste',
    ],
    components: ['Honed Kris', 'Temporal Ripper'],
    stats: {
      'Physical Power': 45,
      'Physical Penetration': 8,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Bestial Torment',
        description:
          'Moving generates stacks of Torment. At 100 stacks, your next basic attack consumes them to deal 30 (+40% Bonus Physical Power) bonus physical damage and reduce your curent basic ability cooldowns by 1.5s.',
      },
    ],
  },
  {
    name: 'Nightfall',
    cost: 3100,
    tags: ['Passive', 'Physical Power', 'Physical Penetration', 'Omnivamp'],
    components: ['Sabre', 'Honed Kris', 'Crimson Edge'],
    stats: {
      'Physical Power': 45,
      'Physical Penetration': 8,
      Omnivamp: 5,
    },
    abilities: [
      {
        name: 'Eclipse',
        description:
          'Dealing damage to an isolated Enemy Hero grants 10% attack speed and 10 ability haste for 5s, stacking up to 3 times. At maximum stacks, gain 10% omnivamp.',
      },
    ],
  },
  {
    name: 'Lifebinder',
    cost: 3100,
    tags: [
      'Passive',
      'Magical Power',
      'Health',
      'Magical Lifesteal',
      'Tenacity',
    ],
    components: ['Blood Tome', 'Tenacious Drape', 'Blood Tome'],
    stats: {
      'Magical Power': 55,
      Health: 200,
      'Magical Lifesteal': 15,
      Tenacity: 15,
    },
    abilities: [
      {
        name: 'Leech',
        description:
          'Damaging an Enemy Hero with an ability restores 4% (+1% per 100 Magical Power) of your maximum health over 8s. Additional applications refresh the duration.',
      },
      {
        name: 'Magi',
        description: 'Achieving a Takedown grants 50 magical power for 8s.',
      },
    ],
  },
  {
    name: 'Infernum',
    cost: 3100,
    tags: ['Passive', 'Physical Power', 'Health', 'Ability Haste'],
    components: ['Temporal Ripper', 'Vitality Beads', 'Temporal Ripper'],
    stats: {
      'Physical Power': 40,
      Health: 300,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Cinder',
        description:
          'Abilities burn Enemy Units, dealing an additional (+80% Total Physical Power) physical damage over 3s.',
      },
    ],
  },
  {
    name: 'Deathstalker',
    cost: 3100,
    tags: [
      'Passive',
      'Physical Power',
      'Physical Penetration',
      'Ability Haste',
    ],
    components: ['Honed Kris', 'Ruthless Broadsword'],
    stats: {
      'Physical Power': 40,
      'Physical Penetration': 10,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Corrode',
        description:
          'Dealing damage to an Enemy Hero reduces their physical armor by 5% for 2s. Stacks up to 6 times.',
      },
      {
        name: 'Virulence',
        description:
          'Your abilities deal 20% bonus true damage against Targets with 6 stacks of Corrode.',
      },
    ],
  },
  {
    name: 'Crystalline Cuirass',
    cost: 3100,
    tags: ['Passive', 'Health', 'Magical Armor', 'Ability Haste'],
    components: ['Nullifying Mask', 'Violet Brooch', 'Nullifying Mask'],
    stats: {
      Health: 200,
      'Magical Armor': 70,
      'Ability Haste': 10,
    },
    abilities: [
      {
        name: 'Volatile',
        description:
          'When you take ability damage, release a pulse of energy dealing 20 (+3% Maximum Health) magical damage to all nearby Enemies - 1.5s CD.',
      },
    ],
  },
  {
    name: 'Basilisk',
    cost: 3150,
    tags: ['Passive', 'Physical Power', 'Health', 'Ability Haste'],
    components: ['Sabre', 'Ruthless Broadsword', 'Vitality Beads'],
    stats: {
      'Physical Power': 35,
      Health: 250,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Corrode',
        description:
          'Dealing damage to an Enemy Hero reduces their physical armor by 5% for 2s. Stacks up to 6 times.',
      },
      {
        name: 'Eminence',
        description:
          'Your basic attacks against Targets with 6 stacks of Corrode deal 4% of their missing health as bonus physical damage.',
      },
    ],
  },
  {
    name: 'Terminus',
    cost: 3200,
    tags: [
      'Passive',
      'Physical Power',
      'Lifesteal',
      'Critical Chance',
      'On-hit',
    ],
    components: ['Crimson Edge', 'Crossbow', 'Crimson Edge'],
    stats: {
      'Physical Power': 50,
      Lifesteal: 15,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Passive - Spellblade',
        description:
          'After using an ability, your next 2 basic attacks within 6s deal bonus physical damage based on your critical strike chance - 3s CD.',
      },
      {
        name: 'Passive',
        description: 'Basic attacks restore 1% maximum mana on-hit.',
      },
    ],
  },
  {
    name: 'Tainted Rounds',
    cost: 3200,
    tags: [
      'Passive',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'On-hit',
    ],
    components: ['Serrated Blade', 'Crossbow', 'Rune Bow'],
    stats: {
      'Physical Power': 25,
      'Attack Speed': 30,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Blighted Strikes',
        description:
          "Successful Basic Attacks reduce the Target's Healing by 30% for 3s.",
      },
      {
        name: 'Wicked Strikes',
        description:
          "Basic attacks deal (+12% Total Physical Power) magical damage on-hit, increasing by up to 100% based on the Target's missing health.",
      },
    ],
  },
  {
    name: 'Sky Splitter',
    cost: 3200,
    tags: [
      'Passive',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'Lifesteal',
      'On-hit',
    ],
    components: ['Ravenous Rapier', 'Composite Bow', 'Crossbow'],
    stats: {
      'Physical Power': 25,
      'Attack Speed': 25,
      'Critical Chance': 20,
      Lifesteal: 5,
    },
    abilities: [
      {
        name: 'Rend',
        description:
          "Basic attacks deal 5% of the Target's current health as bonus physical damage on-hit and heal you equal to 50% of the bonus damage dealt.",
      },
      {
        name: 'MPA',
        description:
          "Rend's bonus damage deals a minimum of 10 and is capped at 50 against Monsters and Minions.",
      },
    ],
  },
  {
    name: 'Absolution',
    cost: 3200,
    tags: ['Passive', 'Physical Power', 'Magical Armor', 'Critical Chance'],
    components: ['Sabre', 'Heroic Guard', 'Crossbow'],
    stats: {
      'Physical Power': 40,
      'Magical Armor': 30,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Swift Bravery',
        description:
          'Upon falling below 40% maximum health, cleans all Negative Debuffs and gain 20% movement speed for 3s - 60s CD.',
      },
      {
        name: 'Determined',
        description:
          'Gain 1% attack speed for every 2% missing health, for a maximum of 30% attack speed.',
      },
    ],
  },
  {
    name: 'Resolution',
    cost: 3200,
    tags: ['Passive', 'Physical Power', 'Mana', 'Critical Chance', 'On-hit'],
    components: ['Greatsword', 'Soul Chalice', 'Crossbow'],
    stats: {
      'Physical Power': 45,
      Mana: 200,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Critical Font',
        description:
          'Killing an Enemy Minion grants 8 bonus mana, up to a maximum of 400. At maximum stacks, gain gain 2.5% of your bonus mana as additional critical strike chance.',
      },
      {
        name: 'Arcane Strikes',
        description:
          'Deal 3% of your maximum mana as bonus physical damage on-hit.',
      },
    ],
  },
  {
    name: 'Viper',
    cost: 3200,
    tags: ['Passive', 'Physical Power', 'Critical Chance', 'Ability Haste'],
    components: ['Sabre', 'Ruthless Broadsword', 'Crossbow'],
    stats: {
      'Physical Power': 45,
      'Critical Chance': 20,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Corrode',
        description:
          'Dealing damage to an Enemy Hero reduces their physical armor by 5% for 2s. Stacks up to 6 times.',
      },
      {
        name: 'Diligence',
        description:
          'Your Critical Strikes deal 15% more damage against Targets with 6 stacks of Corrode.',
      },
    ],
  },
  {
    name: 'Mindrazor',
    cost: 3200,
    tags: ['Passive', 'Physical Power', 'Mana', 'Ability Haste'],
    components: ['Barbaric Cleaver', 'Spirit Beads', 'Temporal Ripper'],
    stats: {
      'Physical Power': 40,
      Mana: 200,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Ingenious Cleave',
        description:
          'Dealing damage to an Enemy Unit with a basic attack or ability deals an additional (+25% Total Physical Power) physical damage in a small area around them. Damage ranges from 100% to 50% based on distance between Targets. DOT sources are excluded.',
      },
      {
        name: 'Arcane Power',
        description: 'Gain (+2.5% Maximum Mana) Physical Power.',
      },
    ],
  },
  {
    name: 'Megacosm',
    cost: 3200,
    tags: ['Passive', 'Magical Power', 'Mana', 'Ability Haste'],
    components: ['Potent Staff', 'Dusk Stave'],
    stats: {
      'Magical Power': 70,
      Mana: 200,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Disintegrate',
        description:
          'Dealing damage to an Enemy Target with an ability deals 5% of their maximum health as magical damage over 3s. Additional applications within the duration deal 2.5% of their maximum health as magical damage instantly and refresh the duration.',
      },
    ],
  },
  {
    name: 'Kingsbane',
    cost: 3200,
    tags: ['Passive', 'Physical Power', 'Physical Armor', 'Critical Chance'],
    components: ['Greatsword', 'Crimson Edge', 'Crossbow'],
    stats: {
      'Physical Power': 45,
      Lifesteal: 8,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Order',
        description:
          'Successful Basic Attacks against Enemy Heroes grant you a shield equal to 12% of the damage dealt for 3s.',
      },
      {
        name: 'Regicide',
        description:
          'Takedowns grant you a (+150% Total Physical Power) shield for 3s.',
      },
    ],
  },
  {
    name: 'Caustica',
    cost: 3200,
    tags: ['Passive', 'Magical Power', 'Magical Penetration'],
    components: ['Scalding Sceptre', 'Potent Staff'],
    stats: {
      'Magical Power': 80,
      'Magical Penetration': 20,
    },
    abilities: [
      {
        name: 'Magus',
        description:
          'While above 50% maximum mana, gain 20% magical penetration.',
      },
      {
        name: 'Arcane Resolve',
        description:
          'While below 50% maximum mana, gain (+1% Maximum Mana) mana regeneration per second.',
      },
    ],
  },
  {
    name: 'World Breaker',
    cost: 3300,
    tags: ['Passive', 'Magical Power', 'Health', 'Tenacity'],
    components: ['Void Crystal', 'Tenacious Drape'],
    stats: {
      'Magical Power': 45,
      Health: 200,
      Tenacity: 30,
    },
    abilities: [
      {
        name: 'Fiend',
        description:
          'Dealing magical damage to an Enemy Hero increases your magical damage dealt by 4% for 5s, stacking up to 5 times',
      },
      {
        name: 'Maya',
        description: 'Gain (+2% Maximum Health) bonus magical power.',
      },
    ],
  },
  {
    name: 'Salvation',
    cost: 3300,
    tags: ['Passive', 'Physical Power', 'Health', 'Tenacity'],
    components: ['Greatsword', 'Banded Emerald', 'Tenacious Drape'],
    stats: {
      'Physical Power': 35,
      Health: 500,
      Tenacity: 30,
    },
    abilities: [
      {
        name: 'Aegis',
        description:
          'Falling below 40% maximum health grants you a (+20% Maximum Health) shield (halved for Ranged Heroes) and 10% Omnivamp for 6s - 60s CD.',
      },
    ],
  },
  {
    name: 'Prophecy',
    cost: 3300,
    tags: [
      'Passive',
      'Magical Power',
      'Attack Speed',
      'Ability Haste',
      'On-hit',
    ],
    components: ['Scepter', 'Composite Bow', 'Chronomatic Wand'],
    stats: {
      'Magical Power': 60,
      'Attack Speed': 25,
      'Ability Haste': 20,
    },
    abilities: [
      {
        name: 'Magical Strikes',
        description:
          'Basic attacks deal 15 (+20 Magical Power) bonus magic damage on-hit.',
      },
      {
        name: 'Hasty',
        description: 'Gain (+75% Ability Haste)% attack speed.',
      },
    ],
  },
  {
    name: 'Mutilator',
    cost: 3300,
    tags: ['Passive', 'Physical Power', 'Ability Haste', 'Omnivamp'],
    components: ['Bloodlust', 'Temporal Ripper'],
    stats: {
      'Physical Power': 45,
      'Ability Haste': 20,
      Omnivamp: 8,
    },
    abilities: [
      {
        name: 'Mutilate',
        description:
          "Basic attacks deal 1.5% of the Enemy Hero's maximum health as bonus physical damage. Applies twice on non-DOT abilities.",
      },
      {
        name: 'Devour',
        description:
          'Damaging an Enemy Hero with an ability steals 8% of their maximum health for 20s. Can only occur once per Target.',
      },
    ],
  },
  {
    name: 'Demolisher',
    cost: 3300,
    tags: ['Passive', 'Physical Power', 'Critical Chance'],
    components: ['Spell Slasher', 'Ravenous Rapier', 'Temporal Ripper'],
    stats: {
      'Physical Power': 50,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'First Strike',
        description:
          'Your first basic attack when entering combat deals 50% additional physical damage. Takedowns refresh this effect.',
      },
      {
        name: 'Desolate',
        description:
          "Your physical damage ignores 35% of your target's physical armor (Before Penetration).",
      },
    ],
  },
  {
    name: 'Dust Devil',
    cost: 3300,
    tags: [
      'Passive',
      'Physical Power',
      'Attack Speed',
      'Critical Chance',
      'Movement Speed',
    ],
    components: ['Robust Arbalest', 'Rune Bow'],
    stats: {
      'Physical Power': 45,
      'Attack Speed': 20,
      'Critical Chance': 20,
      'Movement Speed': 3,
    },
    abilities: [
      {
        name: 'Menace',
        description:
          'Critical Strikes grant 2% attack speed for 5s, stacking up to 6 times. At maximum stacks, gain 30 physical power and 10% movement speed.',
      },
    ],
  },
  {
    name: 'Augmentation',
    cost: 3300,
    tags: ['Passive', 'Physical Power', 'Health', 'Attack Speed', 'On-hit'],
    components: ['Sabre', 'Composite Bow', 'Banded Emerald'],
    stats: {
      'Physical Power': 30,
      Health: 300,
      'Attack Speed': 30,
    },
    abilities: [
      {
        name: 'True Strikes',
        description:
          'Basic attacks deal (+30% Base Physical Power) bonus true damage on-hit.',
      },
      {
        name: 'Overclocked',
        description:
          'Upon casting your ultimate, gain 15% movement speed for 6s - 20s CD.',
      },
    ],
  },
  {
    name: 'Ashbringer',
    cost: 3300,
    tags: [
      'Passive',
      'Physical Power',
      'Attack Speed',
      'Ability Haste',
      'Critical Chance',
      'On-hit',
    ],
    components: ['Zealous Tomahawk', 'Composite Bow', 'Crossbow'],
    stats: {
      'Physical Power': 30,
      'Attack Speed': 20,
      'Ability Haste': 10,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Clockwork',
        description:
          'Basic Attacks against Enemy Heroes decrease your current basic ability cooldowns by 0.25 seconds. This effect is doubled when you deal a Critical Strike.',
      },
      {
        name: 'Honed Strikes',
        description: 'Basic attacks deal 20 bonus physical damage on-hit.',
      },
      {
        name: 'Desolate',
        description:
          "Your physical damage ignores 35% of your target's physical armor (Before Penetration).",
      },
    ],
  },
  {
    name: 'Oblivion Crown',
    cost: 3600,
    tags: ['Passive', 'Magical Power'],
    components: ['Potent Staff', 'Potent Staff'],
    stats: {
      'Magical Power': 120,
    },
    abilities: [
      {
        name: 'Annihilate',
        description: 'Increase your magical power by 35%.',
      },
    ],
  },
  {
    name: 'Imperator',
    cost: 3600,
    tags: ['Passive', 'Physical Power', 'Critical Chance'],
    components: ['Greatsword', 'Sabre', 'Crossbow'],
    stats: {
      'Physical Power': 55,
      'Critical Chance': 20,
    },
    abilities: [
      {
        name: 'Perfection',
        description: 'Gain 1 physical power per 4% critical strike chance.',
      },
      {
        name: 'Precision',
        description: 'Critical strikes deal 15% more damage.',
      },
    ],
  },
]
