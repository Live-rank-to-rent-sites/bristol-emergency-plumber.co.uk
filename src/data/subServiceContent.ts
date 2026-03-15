/**
 * Detailed content for each sub-service page
 * Keyed by sub-service slug (globally unique across all parent services)
 */

export interface SubServiceFAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface RelatedLink {
  text: string;
  href: string;
}

export interface SubServiceContent {
  detailedDescription: string;
  signsYouNeed: string[];
  processSteps: ProcessStep[];
  pricingGuide: string;
  faqs: SubServiceFAQ[];
  relatedLinks: RelatedLink[];
}

export const SUB_SERVICE_CONTENT: Record<string, SubServiceContent> = {
  "burst-pipes": {
    detailedDescription:
      "A burst pipe is one of the most damaging plumbing emergencies a Bristol homeowner can face. When a pipe ruptures — whether from freeze-thaw cycles during winter cold snaps, age-related corrosion in Victorian or Edwardian pipework, excessive water pressure, or accidental impact — water can escape at high volume and cause serious structural damage within minutes. Bristol's older housing stock in areas like Clifton, Redland, and Totterdown often contains original lead or galvanised steel supply pipes that are particularly susceptible to splitting. Our emergency plumbers respond within 60 minutes across Bristol, arriving with a full range of pipe repair fittings, compression joints, push-fit connectors, and isolation valves to stop the flow fast. We'll locate the nearest isolation point, stop the damage, then carry out a permanent repair. If the burst has been caused by freezing, we'll advise on lagging the vulnerable section to prevent recurrence.",
    signsYouNeed: [
      "Sudden loss of water pressure throughout the property",
      "Visible water staining on ceilings, walls, or floors",
      "Sound of running water when all taps are off",
      "Unexplained wet patches on carpets, floorboards, or plaster",
      "Water meter spinning with no taps open",
      "Damp or mould appearing rapidly in previously dry areas",
    ],
    processSteps: [
      {
        title: "Emergency call and dispatch",
        description:
          "Call us on 0117 428 0200. We'll take details, advise you to isolate the water at the stopcock, and dispatch a plumber immediately.",
      },
      {
        title: "Isolation and damage limitation",
        description:
          "Our engineer isolates the affected section of pipework and mops up standing water to limit damage to flooring, ceilings, and electrics.",
      },
      {
        title: "Pipe assessment",
        description:
          "We inspect the full length of the damaged pipe, check for additional weak points, and determine the best repair method.",
      },
      {
        title: "Repair or replacement",
        description:
          "Depending on pipe material and condition, we make a permanent repair using appropriate fittings, or replace the affected section entirely.",
      },
      {
        title: "Pressure test and sign-off",
        description:
          "We restore the water supply, pressure-test the repair, and check all downstream fittings are sound before leaving.",
      },
    ],
    pricingGuide:
      "Emergency burst pipe call-outs start from £120 including labour for a straightforward exposed pipe repair. Repairs involving concealed pipework behind tiles or under floorboards are priced after assessment. All work is guaranteed.",
    faqs: [
      {
        question: "Should I turn off my water before you arrive?",
        answer:
          "Yes — locate your stopcock (usually under the kitchen sink or where the supply enters the property) and turn it clockwise to isolate the water. This limits damage while you wait.",
      },
      {
        question: "Will you be able to fix it in one visit?",
        answer:
          "In the vast majority of cases, yes. We carry a comprehensive range of pipe repair materials and fittings on the van to handle most burst pipe scenarios in a single visit.",
      },
      {
        question: "Do I need to inform my insurer?",
        answer:
          "If there is water damage to the fabric of your home, yes. Keep our invoice as evidence of the emergency repair. We can also provide a written report for your insurer on request.",
      },
    ],
    relatedLinks: [
      { text: "Emergency Plumber Bristol", href: "/services/emergency-plumber/" },
      { text: "Water Leak Repair", href: "/services/emergency-plumber/water-leak-repair/" },
      { text: "Frozen Pipes", href: "/services/emergency-plumber/frozen-pipes/" },
    ],
  },

  "water-leak-repair": {
    detailedDescription:
      "Water leaks range from a dripping joint behind a washing machine to a slow seepage inside a solid floor or party wall that goes unnoticed for months. In Bristol's older properties — particularly the Victorian terraces of Easton, Southville, and St Werburghs — concealed pipework can corrode or develop pinhole leaks that saturate plasterwork and create mould before the homeowner notices anything visible. Our plumbers use acoustic listening equipment and thermal imaging cameras to trace hidden leaks without unnecessary demolition. Once located, we isolate the supply, carry out the repair, and test thoroughly. We also check water-consuming appliances and fittings nearby to rule out secondary sources. Fast action on a leak reduces the risk of structural damage, ceiling collapse, and the long remediation process that follows a major escape of water.",
    signsYouNeed: [
      "Unexplained rise in your water bill",
      "Damp patches or water staining on ceilings, walls, or floors",
      "Sound of dripping or running water with all fittings off",
      "Mould or mildew appearing in unusual locations",
      "Water meter reading changes when supply is isolated room by room",
      "Soft or spongy floorboards indicating moisture beneath",
    ],
    processSteps: [
      {
        title: "Leak report and initial advice",
        description:
          "Contact us with a description of the symptoms. We'll advise on immediate steps to reduce damage and book the earliest available appointment.",
      },
      {
        title: "Detection survey",
        description:
          "Using acoustic sensors and thermal cameras where needed, we identify the exact location of the leak without unnecessary opening up of walls or floors.",
      },
      {
        title: "Targeted access",
        description:
          "We create the minimum necessary access point to reach the leak, discussing the approach with you before proceeding.",
      },
      {
        title: "Repair",
        description:
          "The faulty section of pipe, joint, or fitting is repaired or replaced. We use materials appropriate to the existing system.",
      },
      {
        title: "Test and make good",
        description:
          "We pressure-test the repair, restore the water supply, and where appropriate make good minor plasterwork or tilework around the access point.",
      },
    ],
    pricingGuide:
      "Leak detection and repair from £95 for a visible leak at an accessible fitting. Concealed leak tracing and repair is priced after survey, typically £150–£350 depending on access requirements. No hidden charges.",
    faqs: [
      {
        question: "How long does leak detection take?",
        answer:
          "Most concealed leaks in domestic properties are traced within 1–2 hours using acoustic equipment. Complex cases involving buried mains or multi-floor properties may take longer.",
      },
      {
        question: "Will you need to break through tiles or flooring?",
        answer:
          "We aim to minimise invasive access. In many cases we can pinpoint the leak to within a few centimetres, meaning a single small access cut rather than widespread demolition.",
      },
      {
        question: "Can slow leaks really cause serious damage?",
        answer:
          "Yes. Even a pinhole leak losing a litre per hour can saturate a wall, rot joists, and promote harmful black mould growth within weeks. Early detection is always cheaper than remediation.",
      },
    ],
    relatedLinks: [
      { text: "Emergency Plumber Bristol", href: "/services/emergency-plumber/" },
      { text: "Burst Pipes", href: "/services/emergency-plumber/burst-pipes/" },
      { text: "Plumbing Repairs Bristol", href: "/services/plumbing-repairs/" },
    ],
  },

  "frozen-pipes": {
    detailedDescription:
      "Bristol may not experience the severe winters of northern England, but overnight temperatures do drop below zero regularly in January and February, and properties with poorly insulated loft conversions, exposed external pipework, or underfloor supply runs are vulnerable to freezing. When water freezes inside a copper or plastic pipe it expands, creating pressure that can split the pipe at a joint or along its length. The burst often only becomes apparent when the pipe thaws and water escapes. Our plumbers can safely thaw frozen sections using hot air tools (never naked flame) and carry out immediate repairs if a split has already occurred. We'll also advise on permanent lagging solutions to protect the most vulnerable runs. If you lose water to part of your property in cold weather, call us immediately — acting early can prevent the burst that follows thawing.",
    signsYouNeed: [
      "No water from one or more taps during cold weather",
      "Partial loss of pressure to upstairs or loft bathroom",
      "Visible frost on external pipes or those in unheated spaces",
      "Bulging or misshapen section of pipework",
      "Gurgling sounds from pipes that previously ran silently",
      "Sudden burst of water flow once temperatures rise",
    ],
    processSteps: [
      {
        title: "Emergency assessment",
        description:
          "We establish which pipes are frozen and whether any have already burst, advising you to keep the stopcock accessible and heating on.",
      },
      {
        title: "Safe thawing",
        description:
          "Using hot air guns and warm cloths, we gradually thaw the frozen section from the tap end backwards to allow water to escape without pressure build-up.",
      },
      {
        title: "Inspection for damage",
        description:
          "Once thawed, we inspect the full affected section for splits, bulges, or weakened joints that could fail under normal operating pressure.",
      },
      {
        title: "Repair if needed",
        description:
          "Any damaged sections are repaired or replaced immediately using appropriate fittings.",
      },
      {
        title: "Insulation advice",
        description:
          "We identify all vulnerable pipe runs and advise on pipe lagging, tank insulation, or trace heating to prevent recurrence.",
      },
    ],
    pricingGuide:
      "Frozen pipe call-outs from £110 including thawing and inspection. Repair costs if a burst has occurred are additional and depend on extent of damage. Lagging materials supplied and fitted at competitive rates.",
    faqs: [
      {
        question: "Can I thaw a frozen pipe myself?",
        answer:
          "You can try applying warm (not boiling) water or a warm cloth to an accessible pipe. Never use a blowtorch — this is a fire risk and can damage plastic fittings. If you're unsure, call us.",
      },
      {
        question: "My water was fine yesterday — why is it frozen today?",
        answer:
          "Pipes in unheated spaces like loft voids, external walls, or under suspended floors can freeze quickly during an overnight cold snap even if the rest of the property is warm.",
      },
      {
        question: "What if the pipe has already burst when it thaws?",
        answer:
          "Turn off the stopcock immediately and call us. We carry repair materials on every van and can fix a burst pipe in a single visit in most cases.",
      },
    ],
    relatedLinks: [
      { text: "Emergency Plumber Bristol", href: "/services/emergency-plumber/" },
      { text: "Burst Pipes", href: "/services/emergency-plumber/burst-pipes/" },
      { text: "Water Leak Repair", href: "/services/emergency-plumber/water-leak-repair/" },
    ],
  },

  "boiler-breakdown": {
    detailedDescription:
      "A boiler breakdown leaves your home without heating and hot water, which in colder months can be not just uncomfortable but potentially dangerous for elderly or vulnerable residents. Bristol Emergency Plumber's Gas Safe registered engineers cover all makes and models of boiler — combi, system, and conventional — and carry a comprehensive stock of common spare parts on every van. Common breakdown causes include faulty ignition, failed diverter valves, pump failures, pressure vessel problems, PCB faults, and heat exchanger blockages from Bristol's moderately hard water depositing limescale. We diagnose the fault accurately before recommending repair, and we'll always give you an honest assessment of whether repair or replacement represents better value, particularly for older boilers. Most repairs are completed in a single visit.",
    signsYouNeed: [
      "Boiler has locked out and won't relight",
      "Boiler ignites but burner cuts out shortly after",
      "No heating but hot water is working (or vice versa)",
      "Boiler making banging, kettling, or gurgling noises",
      "Pressure gauge showing zero or very low",
      "Error or fault code displayed on boiler panel",
    ],
    processSteps: [
      {
        title: "Diagnostic call",
        description:
          "Describe the symptoms and any fault codes displayed. We'll advise on safe immediate steps and confirm whether emergency attendance is required.",
      },
      {
        title: "Engineer attendance",
        description:
          "A Gas Safe registered engineer arrives, identifies the fault using diagnostic tools, and explains the cause and recommended repair.",
      },
      {
        title: "Parts and repair",
        description:
          "Where the required part is carried on the van, repair is completed immediately. For less common parts, we'll source and return as quickly as possible.",
      },
      {
        title: "Safety checks",
        description:
          "After repair, we carry out gas pressure checks, flue integrity inspection, and confirm safe operation before leaving.",
      },
      {
        title: "Advice and documentation",
        description:
          "We provide written confirmation of work carried out, parts replaced, and any advisory notes about the boiler's condition.",
      },
    ],
    pricingGuide:
      "Boiler breakdown diagnosis from £85 including the first hour of labour. Parts are charged at cost plus margin. We provide a fixed quote before any repair work begins. Emergency out-of-hours attendance carries a supplement.",
    faqs: [
      {
        question: "My boiler has a fault code — what does it mean?",
        answer:
          "Fault codes vary by manufacturer. Common codes indicate ignition failure (e.g. Vaillant F28, Worcester E9), low pressure, or flame sense errors. Tell us the code and we can often diagnose the likely cause before arrival.",
      },
      {
        question: "Is it worth repairing an old boiler or should I replace it?",
        answer:
          "As a general rule, if the repair cost exceeds 50% of a new boiler's installed price and the boiler is over 10 years old, replacement is usually better value. We'll give you an honest assessment.",
      },
      {
        question: "Can you fix any make of boiler?",
        answer:
          "Yes — our engineers are experienced with all major brands including Worcester Bosch, Vaillant, Ideal, Baxi, Potterton, Viessmann, and more.",
      },
    ],
    relatedLinks: [
      { text: "Boiler Repair Bristol", href: "/services/boiler-repair/" },
      { text: "No Hot Water", href: "/services/boiler-repair/no-hot-water/" },
      { text: "Central Heating Bristol", href: "/services/central-heating/" },
    ],
  },

  "no-hot-water": {
    detailedDescription:
      "Loss of hot water is a disruptive emergency, particularly for families with young children or elderly residents. In Bristol properties with combi boilers, the most common causes are diverter valve failure, low system pressure, and limescale buildup in the plate heat exchanger — the latter being more prevalent here than in softer water areas. Properties with conventional (regular) boilers and hot water cylinders may lose hot water due to a failed cylinder thermostat, immersion heater element, or motorised valve. Properties still using electric immersion heaters as primary hot water sources may have a blown element or faulty timer. Our engineers diagnose the root cause accurately and carry the most common diverter valves, thermostats, and elements on the van to restore hot water in a single visit wherever possible.",
    signsYouNeed: [
      "Hot water taps running cold despite heating being on",
      "Lukewarm water that doesn't reach full temperature",
      "Hot water working intermittently or only briefly",
      "Boiler firing but hot water cylinder not heating",
      "Immersion heater light on but no hot water",
      "Boiler showing a hot water fault code",
    ],
    processSteps: [
      {
        title: "System identification",
        description:
          "We establish your hot water system type (combi, system with cylinder, or immersion) to focus the diagnosis correctly.",
      },
      {
        title: "Fault diagnosis",
        description:
          "We test diverter valves, thermostat settings, motorised valves, immersion elements, and system pressure as appropriate.",
      },
      {
        title: "Descale assessment",
        description:
          "On combi boilers we check for plate heat exchanger limescale restriction — common in Bristol — and advise on descaling or replacement if needed.",
      },
      {
        title: "Repair",
        description:
          "Failed components are replaced on the spot where parts are available. We'll confirm a return date for any parts requiring ordering.",
      },
      {
        title: "Test and verify",
        description:
          "We run hot water from multiple outlets to confirm full temperature restoration before leaving.",
      },
    ],
    pricingGuide:
      "No hot water diagnosis from £85. Common repairs such as diverter valve or immersion element replacement are typically £120–£220 all-in. Cylinder thermostat replacement from £95. Prices confirmed before work begins.",
    faqs: [
      {
        question: "My combi boiler heats the radiators but not the hot water — why?",
        answer:
          "This is a classic diverter valve symptom. The valve controls whether the boiler heats the central heating circuit or the hot water circuit. When it sticks in the heating position, you get heat but no hot water.",
      },
      {
        question: "Can hard water cause loss of hot water?",
        answer:
          "Yes. Limescale can block the plate heat exchanger in combi boilers, reducing or eliminating hot water output. A power flush or heat exchanger descale typically resolves this.",
      },
      {
        question: "My cylinder is warm but the water from the tap isn't hot — what's wrong?",
        answer:
          "This can indicate a failing cylinder thermostat set too low, or a motorised valve not opening to allow heat to reach the cylinder. Both are straightforward repairs.",
      },
    ],
    relatedLinks: [
      { text: "Boiler Repair Bristol", href: "/services/boiler-repair/" },
      { text: "Boiler Breakdown", href: "/services/boiler-repair/boiler-breakdown/" },
      { text: "Central Heating Bristol", href: "/services/central-heating/" },
    ],
  },

  "blocked-toilet": {
    detailedDescription:
      "A blocked toilet is one of the most urgent plumbing problems a household can face. When the pan fills and won't clear, or the flush causes water to rise dangerously close to the rim, there's a risk of sewage overflow that creates a serious hygiene issue. Bristol Emergency Plumber's engineers carry specialist toilet augers, high-capacity plungers, and electromechanical drain snakes designed for the tight bends in domestic soil pipes. Most toilet blockages in Bristol homes are caused by excess toilet paper, wet wipes (even those labelled flushable), sanitary products, or small objects dropped into the pan. Victorian-era soil pipes in older Bristol properties can also suffer from partial blockages where decades of scale and grease have narrowed the bore. We clear the blockage, test the flush multiple times, and advise on preventative measures.",
    signsYouNeed: [
      "Toilet not flushing away fully — waste remains in pan",
      "Water rising to the rim when flushed",
      "Gurgling sounds from the pan or nearby drains when flushed",
      "Slow drain after flushing that takes more than 30 seconds to clear",
      "Unpleasant odours from the toilet even when clean",
      "Multiple toilets in the property draining slowly simultaneously",
    ],
    processSteps: [
      {
        title: "Assessment",
        description:
          "We establish whether the blockage is in the pan trap, the soil pipe, or further downstream in the drainage system to select the right clearance method.",
      },
      {
        title: "Manual clearance",
        description:
          "For pan-level blockages we use a toilet auger to break up and remove the obstruction without damaging the pan or trap.",
      },
      {
        title: "Drain rod or electromechanical snake",
        description:
          "For blockages in the soil stack or underground drainage, we use drain rods or a powered drain snake to clear the pipe.",
      },
      {
        title: "Flush testing",
        description:
          "We flush multiple times with full cisterns to confirm complete clearance and check that the waste flows freely to the main drain.",
      },
      {
        title: "Advice",
        description:
          "We advise on what caused the blockage and how to prevent recurrence, including recommendations on what not to flush.",
      },
    ],
    pricingGuide:
      "Toilet unblocking from £85 for a straightforward pan-level blockage. Soil stack or underground drainage blockages are priced from £110. All prices include labour and disposal of removed material.",
    faqs: [
      {
        question: "Can I unblock a toilet myself?",
        answer:
          "A plunger can clear simple blockages close to the pan. If the blockage is in the soil pipe or if the pan is at risk of overflowing, call a professional to avoid making the situation worse.",
      },
      {
        question: "Why does my toilet block repeatedly?",
        answer:
          "Recurring blockages often indicate a partial obstruction downstream — root intrusion, a collapsed pipe section, or accumulated grease and scale in older cast iron soil pipes. A CCTV drain survey can identify the cause.",
      },
      {
        question: "Is a blocked toilet an emergency?",
        answer:
          "If it's the only toilet in the property or if there's a risk of sewage overflow, yes — call us immediately for emergency attendance.",
      },
    ],
    relatedLinks: [
      { text: "Blocked Drains Bristol", href: "/services/blocked-drains/" },
      { text: "Blocked Sink", href: "/services/blocked-drains/blocked-sink/" },
      { text: "Emergency Plumber Bristol", href: "/services/emergency-plumber/" },
    ],
  },

  "blocked-sink": {
    detailedDescription:
      "Blocked kitchen and bathroom sinks are among the most common plumbing call-outs in Bristol. Kitchen sink blockages typically build up over time from cooking grease, food debris, and detergent residue coating the waste pipe walls — a particular issue in Bristol's student HMOs and rented terraces where a succession of occupants may not have maintained the drains well. Bathroom sink blockages are usually caused by hair, soap scum, and toothpaste accumulation in the trap and waste pipe. Our plumbers clear sink blockages quickly and cleanly, using manual clearing tools, drain rods, or high-pressure jetting depending on the severity. We also check the trap condition and overflow connection, and advise on drain maintenance to prevent rapid recurrence.",
    signsYouNeed: [
      "Sink draining slowly or not at all",
      "Water backing up into the sink bowl",
      "Unpleasant odours from the waste pipe or overflow",
      "Gurgling sounds when the sink drains",
      "Water appearing in the adjacent sink or bath when one is drained",
      "Previous DIY attempts with caustic soda or drain cleaner haven't worked",
    ],
    processSteps: [
      {
        title: "Initial inspection",
        description:
          "We remove and inspect the trap, checking for blockages close to the sink before probing further into the waste pipe.",
      },
      {
        title: "Clearing the trap",
        description:
          "Trap and waste blockages are cleared manually. The trap is cleaned, inspected for damage, and refitted.",
      },
      {
        title: "Waste pipe clearance",
        description:
          "If the blockage is further downstream in the waste pipe, we use drain rods or a hand snake to clear the obstruction.",
      },
      {
        title: "Flow test",
        description:
          "We run the sink at full flow for 2–3 minutes to confirm complete clearance and check for any further restrictions.",
      },
      {
        title: "Preventative advice",
        description:
          "We advise on trap maintenance, use of drain strainers, and appropriate cleaning products to prevent rapid re-blocking.",
      },
    ],
    pricingGuide:
      "Sink unblocking from £75 for trap-level blockages. Waste pipe blockages from £90. Prices include labour and all materials. No VAT surprises — we quote clearly before starting.",
    faqs: [
      {
        question: "Should I use caustic soda or drain unblocker first?",
        answer:
          "Chemical drain cleaners can clear partial blockages but often don't fully remove accumulated grease or hair. Repeated use can also damage older waste pipes. Call us for a permanent mechanical clearance.",
      },
      {
        question: "My kitchen sink blocked again two weeks after I cleared it — why?",
        answer:
          "Rapid recurrence usually means grease has coated the pipe walls rather than being fully removed. A thorough mechanical clearance with a drain rod or jet clean will resolve this more effectively than chemical treatments.",
      },
      {
        question: "Can you unblock a sink in a rented property?",
        answer:
          "Yes. We work for both landlords and tenants across Bristol. If you're a tenant, check whether your tenancy agreement requires you or your landlord to arrange this.",
      },
    ],
    relatedLinks: [
      { text: "Blocked Drains Bristol", href: "/services/blocked-drains/" },
      { text: "Blocked Toilet", href: "/services/blocked-drains/blocked-toilet/" },
      { text: "Plumbing Repairs Bristol", href: "/services/plumbing-repairs/" },
    ],
  },

  "tap-repair": {
    detailedDescription:
      "A dripping tap is more than an irritant — a single dripping tap can waste over 5,000 litres of water per year and add meaningfully to your water bill. In Bristol's older properties, worn tap seats, deteriorated washers, and failed ceramic disc cartridges are the most common causes of dripping taps. Hard water deposits can also cause tap handles to stiffen and ceramic cartridges to fail prematurely. Our plumbers repair or replace all types of taps including traditional pillar taps with rubber washers, modern single and double-lever mixer taps with ceramic cartridges, and thermostatic bar mixer showers. We carry a wide range of replacement cartridges, washers, and O-rings, and can also supply and fit a full tap replacement where the existing tap is beyond economic repair.",
    signsYouNeed: [
      "Tap dripping or running continuously when turned off",
      "Tap handle stiff or difficult to operate",
      "Water leaking from the base of the tap or around the spout",
      "Hot and cold water mixing incorrectly from a single lever tap",
      "Tap making noise when turned on or off",
      "Tap handle loose or wobbling",
    ],
    processSteps: [
      {
        title: "Tap type identification",
        description:
          "We identify the tap mechanism — pillar tap, ceramic disc, quarter-turn, or mixer — to source the correct replacement part.",
      },
      {
        title: "Water isolation",
        description:
          "We isolate the water supply to the tap, either at the service valve under the sink or at the stopcock.",
      },
      {
        title: "Disassembly and diagnosis",
        description:
          "The tap is disassembled and the fault identified — worn washer, failed ceramic disc, damaged O-ring, or corroded tap seat.",
      },
      {
        title: "Repair or replacement",
        description:
          "We replace the faulty component or, where the tap body is corroded beyond repair, supply and fit a new tap of equivalent quality.",
      },
      {
        title: "Test",
        description:
          "Water is restored and the tap tested at full pressure to confirm the drip or leak has been resolved.",
      },
    ],
    pricingGuide:
      "Tap washer or cartridge replacement from £65 including labour. New tap supply and installation from £110 plus the cost of the tap. We can advise on tap selection if you need a replacement.",
    faqs: [
      {
        question: "Can I replace a tap washer myself?",
        answer:
          "Replacing a washer on a traditional pillar tap is a manageable DIY job if you can isolate the water. Ceramic disc cartridges and mixer tap repairs are more complex and may require specialist cartridges — we can source and fit these.",
      },
      {
        question: "My tap drips only at night — is this normal?",
        answer:
          "Dripping that worsens at night is often caused by higher mains pressure overnight when demand is low. A worn washer that copes during the day may fail under the elevated night pressure.",
      },
      {
        question: "Will you be able to match my existing taps?",
        answer:
          "We can often source replacement cartridges that restore existing taps. Where you want a full replacement, we'll suggest options that match your current bathroom or kitchen style.",
      },
    ],
    relatedLinks: [
      { text: "Plumbing Repairs Bristol", href: "/services/plumbing-repairs/" },
      { text: "Toilet Repair", href: "/services/plumbing-repairs/toilet-repair/" },
      { text: "Water Leak Repair", href: "/services/emergency-plumber/water-leak-repair/" },
    ],
  },

  "toilet-repair": {
    detailedDescription:
      "Toilets develop a range of faults over time — running cisterns that waste water continuously, broken flush mechanisms, leaking bases, cracked cisterns, and damaged inlet valves. In Bristol's Victorian terrace housing, original high-level cisterns may still be in use and require specialist parts. Modern low-level and concealed cisterns have their own failure modes, including broken syphons, failing dual-flush mechanisms, and corroded push-button assemblies. A constantly running toilet can waste 400 litres per day — far more costly than a dripping tap. Our plumbers diagnose and repair all toilet types, carrying a range of syphons, inlet valves, flush valves, and push-button assemblies to resolve most faults in a single visit.",
    signsYouNeed: [
      "Toilet running continuously — hissing or trickling sound from cistern",
      "Flush mechanism not working or partial flush only",
      "Water on the floor around the base of the toilet",
      "Cistern not refilling after flushing",
      "Cracked or damaged cistern",
      "Wobbly pan or loose connection to soil pipe",
    ],
    processSteps: [
      {
        title: "Fault identification",
        description:
          "We identify whether the fault is in the inlet valve, syphon/flush valve, cistern, pan, or soil pipe connection.",
      },
      {
        title: "Cistern access",
        description:
          "We remove the cistern lid and inspect the mechanism. For concealed cisterns we access via the service panel.",
      },
      {
        title: "Component replacement",
        description:
          "Faulty syphons, dual-flush valves, inlet valves, and float assemblies are replaced with modern equivalent components.",
      },
      {
        title: "Pan and base inspection",
        description:
          "If the fault is at the base, we inspect the pan connector, floor fixing, and soil pipe connection, replacing the wax seal or connector as required.",
      },
      {
        title: "Full function test",
        description:
          "We flush multiple times, check for leaks at all connections, and confirm the cistern refills correctly before leaving.",
      },
    ],
    pricingGuide:
      "Toilet repair from £75 for syphon or inlet valve replacement. Full flush mechanism replacement from £95. Pan-to-soil-pipe connector replacement from £110. All prices include labour and standard parts.",
    faqs: [
      {
        question: "My toilet runs for a few minutes after flushing — is that normal?",
        answer:
          "Some refilling noise is normal, but it should stop within 2–3 minutes. If the hissing or running continues longer, the inlet valve float is likely worn and needs replacement.",
      },
      {
        question: "Water is appearing on the floor only when I flush — where is the leak?",
        answer:
          "Flush-induced floor leaks usually come from the cistern-to-pan connection gasket, the pan-to-floor seal, or a crack in the pan itself. We'll identify the source and advise on the most appropriate repair.",
      },
      {
        question: "Can you fix a concealed cistern without breaking the wall?",
        answer:
          "In most cases yes — concealed cisterns should have an access panel. If there isn't one, or if the panel is tiled over, we'll discuss the best approach with you.",
      },
    ],
    relatedLinks: [
      { text: "Plumbing Repairs Bristol", href: "/services/plumbing-repairs/" },
      { text: "Tap Repair and Replacement", href: "/services/plumbing-repairs/tap-repair/" },
      { text: "Blocked Toilet", href: "/services/blocked-drains/blocked-toilet/" },
    ],
  },

  "radiator-repair": {
    detailedDescription:
      "Radiators that don't heat up fully, develop cold spots, or start leaking are a common problem in Bristol's older central heating systems. Cold patches at the top of a radiator typically indicate trapped air that can be resolved by bleeding. Cold patches at the bottom or across the whole radiator usually point to sludge accumulation — a mixture of corroded iron particles and magnetite that settles at the lowest point of the radiator and reduces flow. This is particularly common in older systems that haven't been maintained with inhibitor. Our plumbers bleed, flush, and balance radiators and, where a radiator is damaged or severely corroded, can supply and fit a replacement. We also check and repack leaking radiator valves, replace thermostatic radiator valves (TRVs), and balance the system so all radiators reach temperature evenly.",
    signsYouNeed: [
      "Radiator cold at the top but warm at the bottom",
      "Radiator cold across the middle or bottom",
      "Radiator making banging or gurgling noises",
      "Water leaking from the radiator body or valves",
      "Some rooms cold while others overheat",
      "System pressure dropping repeatedly — needing regular topping up",
    ],
    processSteps: [
      {
        title: "Diagnosis",
        description:
          "We identify whether the issue is trapped air, sludge accumulation, a faulty valve, or a damaged radiator body.",
      },
      {
        title: "Bleeding",
        description:
          "Where trapped air is the cause, we bleed the radiator at the bleed valve and re-pressurise the system to the correct level.",
      },
      {
        title: "Valve repair or replacement",
        description:
          "Leaking or seized lockshield and TRV valves are repacked, repaired, or replaced.",
      },
      {
        title: "Radiator flush",
        description:
          "For sludge-affected radiators we isolate, remove, and flush the radiator externally before refitting.",
      },
      {
        title: "System balance",
        description:
          "We balance the system so all radiators heat evenly, adjusting lockshield valves to optimise flow distribution.",
      },
    ],
    pricingGuide:
      "Radiator bleeding from £55. TRV or lockshield valve replacement from £85 per radiator. Radiator removal, flush, and refit from £110. New radiator supply and installation from £180 including labour.",
    faqs: [
      {
        question: "How do I bleed a radiator myself?",
        answer:
          "Turn the heating on, let it reach temperature, then switch it off. Use a radiator key to slowly open the bleed valve until air hisses out and water follows — then close. Check system pressure on the boiler afterwards.",
      },
      {
        question: "Why do my radiators keep needing bleeding?",
        answer:
          "Recurring air in the system suggests a leak allowing air ingress, a faulty auto air vent, or an issue with the expansion vessel. We can diagnose the root cause.",
      },
      {
        question: "My radiator is leaking from the body — can it be repaired?",
        answer:
          "Pinhole leaks in radiator bodies are rarely cost-effective to repair permanently. A replacement radiator of the same output can usually be fitted in under two hours.",
      },
    ],
    relatedLinks: [
      { text: "Central Heating Bristol", href: "/services/central-heating/" },
      { text: "Power Flushing", href: "/services/central-heating/power-flushing/" },
      { text: "Boiler Repair Bristol", href: "/services/boiler-repair/" },
    ],
  },

  "power-flushing": {
    detailedDescription:
      "Power flushing is a deep-clean process for central heating systems that removes the accumulated sludge, magnetite, scale, and corrosion debris that gradually degrades system efficiency. Bristol's housing stock includes a large proportion of pre-1980s properties with older steel panel radiators and galvanised or black steel pipework that corrode internally over time — producing the black magnetite sludge that causes cold spots, noisy boilers, and pump failures. The process involves connecting a high-flow, low-pressure pumping unit to the system, circulating a powerful cleansing chemical through every radiator and pipework run, then flushing with fresh water until the discharge runs clear. Inhibitor is dosed at the end to protect the system going forward. A power flush typically extends boiler life, improves heat output, reduces fuel bills, and often resolves noise and pressure problems without the need for more expensive repairs.",
    signsYouNeed: [
      "Several radiators have cold areas or don't heat up fully",
      "System taking a long time to reach temperature",
      "Boiler making banging or kettling noises",
      "Discoloured (brown or black) water when radiators are bled",
      "Repeatedly losing system pressure",
      "New boiler being installed — manufacturer may require a flush",
    ],
    processSteps: [
      {
        title: "System assessment",
        description:
          "We carry out a full system survey — testing radiator temperatures, checking pressure, and assessing the degree of sludge contamination.",
      },
      {
        title: "Chemical dosing",
        description:
          "A concentrated cleansing agent is introduced to the system. The power flush unit is connected and we begin circulating the chemical at high flow rate.",
      },
      {
        title: "Individual radiator flushing",
        description:
          "We work through each radiator in turn, using the magnetic filter and reverse flow to dislodge and remove stubborn deposits.",
      },
      {
        title: "System neutralisation and rinse",
        description:
          "The chemical is neutralised and the entire system flushed with fresh water until discharge water runs completely clear.",
      },
      {
        title: "Inhibitor dose and report",
        description:
          "A full dose of corrosion inhibitor (e.g. Fernox F1 or Sentinel X100) is added. We provide a written report and recommend annual inhibitor checks.",
      },
    ],
    pricingGuide:
      "Power flushing from £350 for systems up to 8 radiators. Larger systems from £450. Includes chemical, inhibitor, and a magnetic filter installation if not already fitted. New boiler installation power flush from £280.",
    faqs: [
      {
        question: "How long does a power flush take?",
        answer:
          "Most domestic systems take 6–8 hours. Larger properties or heavily contaminated systems may take a full day. We'll give you a time estimate during the initial assessment.",
      },
      {
        question: "Will a power flush fix my cold radiators?",
        answer:
          "In the majority of cases, yes. If radiators are cold due to sludge accumulation, a power flush restores full flow and heating. Cold radiators due to air or valve issues are resolved alongside the flush.",
      },
      {
        question: "Is a power flush required for a new boiler?",
        answer:
          "Most boiler manufacturers recommend or require a system flush before installation to protect the warranty. We can arrange this as part of a boiler installation package.",
      },
    ],
    relatedLinks: [
      { text: "Central Heating Bristol", href: "/services/central-heating/" },
      { text: "Radiator Repair", href: "/services/central-heating/radiator-repair/" },
      { text: "Boiler Repair Bristol", href: "/services/boiler-repair/" },
    ],
  },

  "gas-safety-certificate": {
    detailedDescription:
      "A Gas Safety Certificate (CP12) is a legal requirement for landlords in England and Wales, and must be issued annually for every gas appliance and flue in a rented property. Bristol has a significant private rental sector, with large numbers of HMOs, student lets, and family rentals in areas like Clifton, Stokes Croft, Southville, and Easton. Our Gas Safe registered engineers carry out comprehensive safety inspections covering all gas appliances (boilers, gas fires, hobs, ovens, and gas tumble dryers), all associated flues and ventilation, meter connections, and internal pipework. We check for safe operation, correct flue and ventilation provision, tightness testing of the internal gas installation, and confirm that each appliance is burning correctly. The certificate is issued immediately on completion and a copy provided to both landlord and tenant.",
    signsYouNeed: [
      "Annual renewal date for existing Gas Safety Certificate approaching",
      "New tenancy beginning — certificate must be provided before or at move-in",
      "New gas appliance installed — check whether certificate needs updating",
      "No record of a certificate — property may not have had one recently",
      "Buying or selling a rental property — certificate required",
      "Insurance or mortgage requirement for gas safety evidence",
    ],
    processSteps: [
      {
        title: "Booking",
        description:
          "Book a convenient appointment. We need access to all gas appliances and their flues, so please ensure tenants are notified.",
      },
      {
        title: "Appliance inspection",
        description:
          "Each gas appliance is checked for safe operation, correct burner performance, and absence of CO spillage.",
      },
      {
        title: "Flue and ventilation checks",
        description:
          "We inspect all flue routes for integrity, proper termination, and adequate combustion air supply.",
      },
      {
        title: "Tightness test",
        description:
          "We test the entire internal gas installation for leaks using a manometer pressure test.",
      },
      {
        title: "Certificate issue",
        description:
          "The CP12 certificate is completed and copies provided. Any advisory notices or mandatory action items are clearly noted.",
      },
    ],
    pricingGuide:
      "Gas Safety Certificate (CP12) from £75 for a single appliance. £95 for two appliances (boiler + gas fire or hob). Multi-appliance and multi-property landlord rates available on request.",
    faqs: [
      {
        question: "How often does a landlord need a Gas Safety Certificate?",
        answer:
          "Every 12 months. You must provide a copy to existing tenants within 28 days of the inspection, and to new tenants before or at the start of the tenancy.",
      },
      {
        question: "What happens if an appliance fails the inspection?",
        answer:
          "The engineer will issue an 'Immediately Dangerous' (ID) or 'At Risk' (AR) notice and may disconnect the appliance. We'll explain what repair or replacement is needed to bring it to a safe standard.",
      },
      {
        question: "Can homeowners get a Gas Safety Certificate?",
        answer:
          "Yes. While not legally required for owner-occupied properties, a safety inspection is strongly recommended, particularly when buying an older property or after any gas work.",
      },
    ],
    relatedLinks: [
      { text: "Gas Safety Bristol", href: "/services/gas-safety/" },
      { text: "Gas Leak Repair", href: "/services/gas-safety/gas-leak-repair/" },
      { text: "Boiler Repair Bristol", href: "/services/boiler-repair/" },
    ],
  },

  "gas-leak-repair": {
    detailedDescription:
      "A suspected gas leak is a life-threatening emergency and must be treated as such. Natural gas and LPG are both explosive and toxic in sufficient concentrations — any smell of gas, unexplained headaches, or gas alarm activation requires immediate action. If you smell gas, do not operate any electrical switches, do not use your phone indoors, leave the property, and call the National Gas Emergency Service on 0800 111 999. Once the emergency has been made safe by the gas network operator and re-entry is permitted, our Gas Safe registered engineers carry out the repair — isolating the fault, repairing or replacing the affected section of pipework, fitting, or appliance connection, and conducting a full tightness test of the installation before restoring the gas supply. We also carry out post-leak safety checks on all appliances.",
    signsYouNeed: [
      "Smell of gas (rotten egg or sulphur odour) in or around the property",
      "Gas alarm activating",
      "Hissing sound from a gas pipe or appliance",
      "Dead or dying plants above underground gas pipe routes",
      "Unexplained symptoms: headaches, dizziness, nausea when at home",
      "Gas meter showing consumption when no appliances are in use",
    ],
    processSteps: [
      {
        title: "IMMEDIATE: National Gas Emergency",
        description:
          "If you can smell gas NOW, call 0800 111 999, leave the building, and do not use electrical switches. Our repairs happen after the network operator makes the site safe.",
      },
      {
        title: "Post-emergency assessment",
        description:
          "Once cleared for re-entry, our Gas Safe engineer attends, identifies the fault location using gas detection equipment, and assesses the extent of repair required.",
      },
      {
        title: "Isolation and repair",
        description:
          "The faulty section of pipework, joint, or appliance connection is isolated and repaired or replaced using appropriate gas-rated materials.",
      },
      {
        title: "Tightness test",
        description:
          "A full manometer tightness test of the internal installation confirms no remaining leaks before the supply is restored.",
      },
      {
        title: "Appliance checks",
        description:
          "All gas appliances are checked for safe operation following reinstatement of the supply.",
      },
    ],
    pricingGuide:
      "Gas leak repair from £120 for a straightforward joint or connection repair. Complex pipework replacement is quoted after assessment. Emergency out-of-hours attendance supplement applies. All work is Gas Safe registered.",
    faqs: [
      {
        question: "What should I do if I smell gas right now?",
        answer:
          "Stop reading this and act: don't operate any switches, open windows if safe to do so without touching electrical switches, leave the property, and call 0800 111 999 from outside. Call us after the emergency service has attended.",
      },
      {
        question: "Can I stay in my house while waiting for a gas repair?",
        answer:
          "Not if there is an active leak. The National Gas Emergency Service will isolate the supply and advise when it is safe to re-enter. We complete the repair once the property is declared safe.",
      },
      {
        question: "Will you test all my appliances after the repair?",
        answer:
          "Yes. Following any gas leak repair and reinstatement of supply, we carry out safety checks on all gas appliances in the property as standard.",
      },
    ],
    relatedLinks: [
      { text: "Gas Safety Bristol", href: "/services/gas-safety/" },
      { text: "Gas Safety Certificate", href: "/services/gas-safety/gas-safety-certificate/" },
      { text: "Boiler Repair Bristol", href: "/services/boiler-repair/" },
    ],
  },
};

export function getSubServiceContent(slug: string): SubServiceContent | undefined {
  return SUB_SERVICE_CONTENT[slug];
}
