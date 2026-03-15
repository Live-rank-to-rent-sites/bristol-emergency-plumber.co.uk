import { BRAND } from './brand';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "emergency-plumber-bristol-burst-pipes-winter",
    title: "Emergency Plumber Bristol: What to Do When Pipes Burst in Winter",
    metaTitle: "Emergency Plumber Bristol: What to Do When Pipes Burst | Winter Guide",
    metaDescription: "Burst pipe in Bristol? Learn what to do immediately to minimise damage and when to call an emergency plumber. Expert advice for Bristol homeowners.",
    excerpt: "A burst pipe in winter can cause serious damage to your Bristol home within minutes. Here is what to do the moment disaster strikes.",
    content: `A burst pipe is one of the most stressful plumbing emergencies a Bristol homeowner can face. Water can flood a room quickly, damaging floors, walls, furniture, and electrics. Knowing what to do in the first few minutes makes a significant difference to the amount of damage your property suffers.

## Why Pipes Burst in Winter

Bristol's winters are mild compared to much of the UK, but temperatures still drop low enough to cause problems. When water freezes inside a pipe, it expands. This expansion puts enormous pressure on the pipe walls. When the pipe thaws, if the freeze has caused a fracture, the pipe may burst suddenly — releasing water at full mains pressure into your home.

Pipes most at risk are those in unheated spaces: loft runs, under-floor voids, garages, external walls, and outbuildings. Properties in exposed areas around Bristol — including the higher ground of Clifton and Redland — tend to experience sharper overnight temperatures.

## Immediate Steps When a Pipe Bursts

### Step 1: Turn Off the Water

Your first action should be to locate your stopcock and turn off the mains water supply. In most Bristol homes, the stopcock is beneath the kitchen sink or near the front door. Turning it clockwise cuts off the flow of water to your property and limits the damage immediately.

### Step 2: Turn Off Electricity in Affected Areas

If water is near electrical sockets, light fittings, or consumer units, turn off the electricity at the main fuse board. Water and electricity together create serious safety hazards. Do not enter a room with standing water near electrics without first isolating the power.

### Step 3: Drain the System

Turn on all cold taps throughout the property to drain remaining water from the pipes. Flush toilets to reduce remaining water in the system. This reduces the pressure in the system and the volume of water that can continue to leak.

### Step 4: Collect Water and Protect Belongings

Place buckets under drips and leaks. Move furniture, rugs, and valuables away from the affected area. Lay towels and absorbent materials to limit spread. Mop up standing water promptly to reduce long-term damp and mould risk.

### Step 5: Call an Emergency Plumber

Once you have controlled the situation as much as possible, call ${BRAND.brandName} on ${BRAND.phoneFormatted}. Our emergency engineers cover Bristol and surrounding areas 24 hours a day, 7 days a week. We will locate the burst, carry out the repair, and restore your water supply.

## Preventing Winter Pipe Bursts in Bristol

- Insulate pipes in unheated areas such as lofts, under floors, and garages
- During cold snaps, keep the heating on a low background temperature rather than switching it off entirely
- Know where your stopcock is before you need it
- If your property is empty for an extended period in winter, consider draining the system down

## What We Do at the Property

When our engineer arrives at your Bristol property, we begin with a full assessment to locate all areas of damage. We isolate the affected pipe, carry out the repair using appropriate materials, and test the system before restoring your water supply. We always check for secondary damage — wet insulation, damp timber, and water in cavity walls — to make sure the repair is complete.

Call ${BRAND.phoneFormatted} any time for emergency plumbing assistance across Bristol and surrounding areas. We aim to arrive within 60 to 90 minutes of your call.`,
    author: "Bristol Emergency Plumber",
    publishDate: "2026-01-15",
    category: "Emergency Plumbing",
    tags: ["burst pipes", "emergency plumber", "winter plumbing", "Bristol"],
    readingTime: 5,
    featured: true
  },
  {
    slug: "blocked-drains-bristol-causes-and-fixes",
    title: "Blocked Drains in Bristol: Common Causes and How to Fix Them",
    metaTitle: "Blocked Drains Bristol | Common Causes and Solutions",
    metaDescription: "Blocked drains in your Bristol home? Find out the most common causes and when to call a professional plumber. Tips from Bristol's emergency plumbing experts.",
    excerpt: "Blocked drains are one of the most common plumbing problems in Bristol. Understanding the causes helps you prevent them — and know when to call for help.",
    content: `Blocked drains are a nuisance in any Bristol home, but they can become serious very quickly if left untreated. Water backing up into sinks, baths, or toilets is unpleasant and potentially hazardous. Understanding the most common causes helps you prevent blockages and act quickly when they occur.

## Why Drains Block in Bristol Homes

### Fat, Oil, and Grease

The single most common cause of kitchen drain blockages is fats, oils, and grease. When you wash greasy pans, the liquid fat travels down the drain. As it cools in the pipe, it solidifies and sticks to the pipe walls. Over time, this buildup narrows the pipe and eventually causes a complete blockage.

Bristol's mix of older housing stock means many properties have narrower-diameter drain pipes that are more susceptible to grease blockages than modern systems.

### Hair and Soap Scum

Bathroom drains are most commonly blocked by hair combined with soap scum and shampoo residue. Hair catches on any imperfection inside the pipe and forms a net that traps other debris. A simple drain guard at the plughole prevents most hair-related blockages.

### Tree Root Intrusion

Bristol's older residential areas — including Redland, Clifton, and Bedminster — have mature street trees and well-established garden vegetation. Tree roots naturally seek moisture and can infiltrate drain pipes through tiny cracks and joint gaps, eventually causing serious blockages or pipe damage.

### Flushing the Wrong Things

Wet wipes — even those labelled flushable — do not break down in drain pipes and cause serious blockages. Sanitary products, cotton wool, nappies, and cooking oil should never be flushed or poured down drains.

## What to Try Yourself

For minor slow drainage, a plunger can sometimes clear a soft blockage close to the plughole. Natural remedies such as bicarbonate of soda followed by white vinegar and then boiling water can help with grease buildup in kitchen drains.

However, if water is backing up significantly, if multiple drains are affected, or if the problem keeps recurring, professional help is needed.

## When to Call ${BRAND.brandName}

Contact us on ${BRAND.phoneFormatted} if you experience:
- Complete blockage with water not draining at all
- Sewage smells from drains or manholes
- Multiple drains backing up simultaneously
- Gurgling sounds suggesting a partial blockage deeper in the system
- A recurring blockage that keeps returning after DIY clearance

Our engineers carry rodding equipment, high-pressure jetting gear, and CCTV cameras to diagnose and resolve any blockage in Bristol homes and businesses. We cover Bristol and surrounding areas including Bath, Clifton, Bedminster, Kingswood, and Portishead.

Call ${BRAND.phoneFormatted} for fast professional drain unblocking across Bristol.`,
    author: "Bristol Emergency Plumber",
    publishDate: "2026-01-10",
    category: "Blocked Drains",
    tags: ["blocked drains", "drain unblocking", "plumbing tips", "Bristol"],
    readingTime: 6
  },
  {
    slug: "boiler-breakdown-bristol-emergency-heating-repair",
    title: "Boiler Breakdown? Bristol's Guide to Emergency Heating Repair",
    metaTitle: "Boiler Breakdown Bristol | Emergency Heating Repair Guide",
    metaDescription: "Boiler broken down in Bristol? Learn what to check before calling an engineer, common boiler faults, and how our Gas Safe engineers can help fast.",
    excerpt: "A boiler breakdown in winter is a genuine emergency. Here is what Bristol homeowners should check first and when to call for professional help.",
    content: `Waking up to a cold house in Bristol is a miserable experience, and a broken boiler is one of the most common reasons people call an emergency plumber. Knowing what to check before you call can sometimes resolve the problem quickly — but knowing when professional help is essential could prevent a serious situation from getting worse.

## First Checks Before Calling an Engineer

### Check the Boiler Pressure

Most modern combi boilers have a pressure gauge on the front. Normal operating pressure is between 1 and 1.5 bar. If the needle is below 1 bar, low pressure is likely causing the shutdown. You can repressurise the boiler using the filling loop — usually a flexible silver hose beneath the boiler. Open the valves slowly until the pressure reaches 1.2 bar, then close them again.

### Check the Thermostat and Timer

Is the thermostat set correctly? Has the timer accidentally been changed? A simple setting error can prevent your heating from coming on. Check that your room thermostat is set above the current room temperature.

### Check the Pilot Light or Ignition

On older boilers, the pilot light may have gone out. Many boilers have a reset button — check your manual for instructions. If the boiler fails to ignite after resetting, or if you smell gas, do not attempt further resets. Call a Gas Safe engineer immediately.

### Check Your Gas Supply

If other gas appliances (hob, oven) are not working either, there may be a supply issue. Contact your gas supplier or check the National Grid gas emergency line on 0800 111 999.

## Common Boiler Faults in Bristol Homes

**No heat or hot water**: This can indicate a diverter valve failure, a motorised valve problem, a thermostat fault, or a more serious internal component failure.

**Banging, kettling, or gurgling noises**: Kettling sounds — like a kettle boiling — often indicate scale or sludge buildup in the heat exchanger. Bristol's hard water contributes to limescale deposits in plumbing systems. Power flushing can often resolve this.

**Boiler keeps switching off (lockout)**: Repeated lockouts usually indicate a fault that the boiler's safety system is detecting. Common causes include low pressure, a faulty sensor, a frozen condensate pipe (in cold weather), or pump failure.

**Frozen condensate pipe**: Modern condensing boilers have a plastic condensate pipe that runs outside. In cold weather this can freeze, causing the boiler to stop. Pouring warm (not boiling) water over the pipe may thaw it.

## Why You Need a Gas Safe Engineer

Gas appliance work in the UK must be carried out by a Gas Safe registered engineer. All ${BRAND.brandName} engineers who work on boilers and gas systems hold current Gas Safe registration. Attempting to repair a boiler yourself, or using an unregistered engineer, is illegal and dangerous.

For emergency boiler repair in Bristol, call ${BRAND.phoneFormatted}. Our Gas Safe engineers cover Bristol and surrounding areas including Bath, Clifton, Bedminster, Horfield, and Kingswood 24 hours a day.`,
    author: "Bristol Emergency Plumber",
    publishDate: "2026-01-05",
    category: "Boiler Repair",
    tags: ["boiler repair", "emergency heating", "boiler breakdown", "Bristol"],
    readingTime: 7,
    featured: true
  },
  {
    slug: "bristol-hard-water-plumbing-problems",
    title: "Bristol's Hard Water Problem: How It Affects Your Plumbing",
    metaTitle: "Hard Water in Bristol | Impact on Plumbing and How to Solve It",
    metaDescription: "Bristol has moderately hard water that affects boilers, pipes, and appliances. Learn how hard water causes plumbing problems and what Bristol homeowners can do.",
    excerpt: "Bristol's water supply contains dissolved minerals that cause limescale buildup in pipes, boilers, and appliances over time. Here is what you need to know.",
    content: `Bristol sits in a region with moderately hard water. While not as severe as some parts of the South East of England, Bristol's water supply contains enough dissolved calcium and magnesium to cause real problems for plumbing systems, boilers, and appliances over time.

## What Is Hard Water?

Hard water contains higher concentrations of dissolved minerals — primarily calcium carbonate and magnesium — picked up as rainwater passes through limestone and chalk geology before reaching reservoirs and treatment works. Bristol Water supplies most of the city, drawing from sources in the Mendip Hills and River Severn, both of which contribute to moderate water hardness.

## How Hard Water Affects Bristol Properties

### Limescale in Boilers and Heat Exchangers

The heat exchanger inside your boiler is the component most vulnerable to limescale damage. As hard water is heated, calcium carbonate precipitates out and forms a hard scale on metal surfaces. This insulates the metal from the water, reducing efficiency and causing the boiler to overheat. The characteristic kettling or rumbling sound from a boiler often indicates scale buildup. Left untreated, limescale can cause premature heat exchanger failure — an expensive repair.

### Scale in Pipes and Valves

Over years of use, limescale gradually narrows the internal diameter of pipes and accumulates on valve seating surfaces. This can restrict flow, cause taps to drip, and make valves difficult to turn. Shower heads become blocked, reducing pressure. Hot water cylinders accumulate scale on their immersion heater elements, increasing running costs.

### Sludge in Central Heating Systems

Hard water also contributes to the formation of magnetite — a black magnetic sludge that accumulates in central heating systems. Combined with corrosion from oxygen in the system water, this sludge reduces circulation, causes cold spots in radiators, and can damage pump impellers and boiler components.

## What You Can Do

### Regular Boiler Servicing

Annual boiler servicing allows engineers to monitor the condition of internal components, clean accessible parts, and identify limescale buildup before it causes serious problems. ${BRAND.brandName} provides boiler servicing across Bristol and surrounding areas.

### Power Flushing

Power flushing uses specialist equipment to circulate cleaning solutions through your central heating system at high velocity, removing sludge, scale, and corrosion deposits. A professionally carried out power flush followed by the addition of inhibitor chemical significantly extends system life and improves heating efficiency. Most Bristol homes with systems more than 10 years old benefit from power flushing.

### Magnetic System Filters

A magnetic filter fitted to your central heating system captures circulating sludge before it reaches the boiler. These are inexpensive to install and significantly extend the life of boilers and pumps in Bristol homes.

### Water Softeners

For properties with severe scale problems, a plumbed-in water softener treats the supply water before it enters the system, eliminating scale formation. Our plumbing engineers can advise on and install water softener systems throughout Bristol.

If you are experiencing problems associated with hard water in your Bristol property, call ${BRAND.brandName} on ${BRAND.phoneFormatted} for advice and service.`,
    author: "Bristol Emergency Plumber",
    publishDate: "2025-12-28",
    category: "Plumbing Maintenance",
    tags: ["hard water", "limescale", "boiler maintenance", "Bristol plumbing"],
    readingTime: 6
  },
  {
    slug: "cctv-drain-surveys-bristol",
    title: "CCTV Drain Surveys in Bristol: When Do You Need One?",
    metaTitle: "CCTV Drain Surveys Bristol | When You Need One and What to Expect",
    metaDescription: "Considering a CCTV drain survey in Bristol? Find out when it's necessary, what it reveals, and how it can save you money on property purchases and repairs.",
    excerpt: "A CCTV drain survey uses a small camera to inspect your Bristol property's drainage from the inside. Here is when it is worth the investment.",
    content: `A CCTV drain survey involves feeding a small waterproof camera through your drainage pipes to record their condition from the inside. The footage reveals blockages, cracks, root intrusion, collapsed sections, and incorrect connections that are impossible to detect from above ground.

## When to Commission a CCTV Drain Survey in Bristol

### Before Buying a Property

A standard homebuyer's survey does not cover underground drainage. If you are buying a house in Bristol — particularly in older areas such as Clifton, Redland, Bedminster, or the city centre — a pre-purchase drain survey can reveal hidden problems that could cost thousands to repair.

Bristol's housing stock includes many Victorian and Edwardian terraces with clay drainage now over a hundred years old. Root intrusion from the mature trees in areas like Redland and Clifton is common. Joint failures, collapsed sections, and historic modifications are all discoverable only by camera inspection.

### Investigating Recurring Blockages

If you repeatedly experience blocked drains despite professional clearance, there is usually an underlying structural problem. Root ingress through a cracked joint, a displaced pipe causing a step that traps debris, or a collapsed section further along the system — any of these will cause blockages to keep returning until the root cause is addressed. A CCTV survey identifies exactly what is happening and where.

### Before Extensions or Groundworks

If you are planning an extension, landscaping project, or other groundwork near your Bristol property, a drain survey first locates the exact route of your drainage. This prevents costly accidental pipe damage during excavation.

### After Property Flooding or Subsidence

Flooding and ground movement can damage underground pipes without any obvious surface signs. A drain survey after flooding or if you have noticed subsidence — cracking walls, sticking doors — confirms whether drainage damage is contributing to the problem.

### For Landlords

Bristol landlords have a duty of care to tenants regarding property condition. CCTV surveys provide documented evidence of drainage condition, useful for insurance, dispute resolution, and planned maintenance.

## What Happens During a Survey

Our engineer accesses the drainage system through an inspection chamber or manhole, then feeds a high-definition waterproof camera through the pipe network. The camera transmits live footage to a screen, and the whole survey is recorded. You receive a written report with annotated screenshots within 24 hours, clearly identifying any issues and recommending remedial work.

## Cost and Value

A residential CCTV drain survey in Bristol typically costs between £150 and £300. Set against the potential cost of discovering drainage problems after purchase — or the recurring cost of clearing a blockage that keeps returning — a survey is excellent value.

To book a CCTV drain survey across Bristol and surrounding areas, call ${BRAND.brandName} on ${BRAND.phoneFormatted}. We cover Bristol, Bath, Clifton, Bedminster, Kingswood, Portishead, and all surrounding areas.`,
    author: "Bristol Emergency Plumber",
    publishDate: "2025-12-20",
    category: "Drain Surveys",
    tags: ["CCTV drain survey", "drain inspection", "Bristol drains", "property survey"],
    readingTime: 7
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = BLOG_POSTS.map((post) => post.category);
  return [...new Set(categories)];
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
}

// Blog posts related to each service - used for cross-linking on service pages
export const SERVICE_BLOG_POSTS: Record<string, string[]> = {
  "emergency-plumber": ["emergency-plumber-bristol-burst-pipes-winter", "blocked-drains-bristol-causes-and-fixes"],
  "boiler-repair": ["boiler-breakdown-bristol-emergency-heating-repair", "bristol-hard-water-plumbing-problems"],
  "blocked-drains": ["blocked-drains-bristol-causes-and-fixes", "cctv-drain-surveys-bristol"],
  "plumbing-repairs": ["bristol-hard-water-plumbing-problems", "emergency-plumber-bristol-burst-pipes-winter"],
  "central-heating": ["boiler-breakdown-bristol-emergency-heating-repair", "bristol-hard-water-plumbing-problems"],
  "gas-safety": ["boiler-breakdown-bristol-emergency-heating-repair", "emergency-plumber-bristol-burst-pipes-winter"],
};

export function getRelatedBlogPosts(serviceSlug: string): BlogPost[] {
  const relatedSlugs = SERVICE_BLOG_POSTS[serviceSlug] || [];
  return relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
