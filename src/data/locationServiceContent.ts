/**
 * Location-specific data including neighborhoods, landmarks, and plumbing challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  bristol: {
    neighborhoods: ["Clifton", "Bedminster", "Redland", "Horfield", "Totterdown", "Stokes Croft", "Harbourside", "Bishopston"],
    landmarks: ["the Clifton Suspension Bridge", "the SS Great Britain", "Bristol Cathedral", "the Arnolfini", "the Harbourside"],
    drainageInfo: "Bristol's varied housing stock spans Victorian terraces, Georgian townhouses, post-war estates, and modern apartments. The city's hard water causes limescale buildup in boilers and pipes, while mature street trees in Redland and Clifton create root intrusion risk. The Floating Harbour and River Avon influence groundwater conditions near the waterfront.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, Georgian townhouses, converted flats, post-war semis, and modern apartments"
  },
  bath: {
    neighborhoods: ["Twerton", "Oldfield Park", "Weston", "Bathwick", "Larkhall", "Combe Down", "Widcombe", "Lower Weston"],
    landmarks: ["the Roman Baths", "Bath Abbey", "the Royal Crescent", "the Circus", "Pulteney Bridge"],
    drainageInfo: "Bath's Georgian and Victorian heritage means most properties have old plumbing infrastructure. Hard water from limestone aquifers is particularly severe in Bath, causing accelerated scale buildup. Listed building constraints affect repair options throughout the World Heritage site.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Georgian townhouses, Victorian terraces, listed buildings, stone-built period properties, and modern flats"
  },
  clifton: {
    neighborhoods: ["Clifton Village", "Clifton Down", "Hotwells", "Totterdown Clifton", "Whiteladies Road", "The Promenade"],
    landmarks: ["the Clifton Suspension Bridge", "Clifton Village", "Bristol Zoo", "the Avon Gorge", "The Mall"],
    drainageInfo: "Clifton's grand Victorian and Georgian townhouses, many converted into flats, have complex shared drainage under significant load. The elevated position creates lower mains pressure in higher streets. Mature street trees cause widespread root intrusion into ageing clay pipes.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian and Georgian townhouses, converted flats, student accommodation, and period terraces"
  },
  bedminster: {
    neighborhoods: ["Windmill Hill", "Totterdown", "Southville", "Redcliffe", "Knowle", "Filwood", "Hartcliffe"],
    landmarks: ["North Street", "the Tobacco Factory", "Victoria Park", "East Street", "Bedminster Parade"],
    drainageInfo: "Bedminster's Victorian terraces have clay drainage over a century old, shared between terraced rows. Proximity to the New Cut creates elevated groundwater conditions in lower-lying streets. The area's diverse housing includes Victorian terraces, post-war social housing, and newer developments.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian terraces, post-war housing estates, modern developments, and commercial properties"
  },
  redland: {
    neighborhoods: ["Cotham", "Bishopston", "Westbury Park", "Henleaze", "Stoke Bishop", "Sea Mills"],
    landmarks: ["Redland Park", "Cotham Hill", "Redland Road", "Whiteladies Road", "Redland Station"],
    drainageInfo: "Redland's large Victorian and Edwardian houses on tree-lined streets face pervasive root intrusion from century-old trees. Many properties have been converted into flats, multiplying drainage load on aged clay systems. Root intrusion is the area's most common drain problem.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "large Victorian and Edwardian houses, converted flats, period terraces, and family semis"
  },
  horfield: {
    neighborhoods: ["Bishopston", "Lockleaze", "Ashley Down", "St Andrews", "Filton", "Southmead"],
    landmarks: ["Horfield Common", "Memorial Ground", "Filton Avenue", "Muller Road", "Horfield Prison"],
    drainageInfo: "Horfield's inter-war semis often retain original galvanised steel pipework that is corroding from inside, causing discoloured water and pressure reduction. Post-war housing has early copper systems approaching end of lifespan. Boilers in inter-war and post-war properties are frequently old and inefficient.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "inter-war semi-detached houses, post-war housing estates, Victorian terraces, and modern family homes"
  },
  filton: {
    neighborhoods: ["Stoke Gifford", "Bradley Stoke", "Patchway", "Little Stoke", "Harry Stoke", "Charlton Hayes"],
    landmarks: ["Aerospace Bristol Museum", "Cribbs Causeway", "Filton Abbey Wood Station", "The Mall", "Southmead Hospital"],
    drainageInfo: "Filton's post-war housing stock frequently includes pitch fibre drainage that deforms and collapses with age, causing persistent blockages. New developments around the former airfield site have modern plumbing, but older estates from the 1960s and 1970s need increasing maintenance attention.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "post-war housing estates, 1960s-1970s semis and terraces, new-build developments, and commercial premises"
  },
  kingswood: {
    neighborhoods: ["Warmley", "Staple Hill", "Mangotsfield", "Oldland Common", "Cadbury Heath", "Hanham"],
    landmarks: ["Kingswood Heritage Museum", "Regent Street", "Two Mile Hill", "Warmley", "St George"],
    drainageInfo: "Kingswood's diverse housing spans Victorian terraces near the old town centre to post-war estates and modern developments. Some older areas have legacy coal mining ground conditions that can cause pipe displacement. Bristol's moderately hard water affects boilers and heating systems throughout the area.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian terraces, post-war housing estates, modern housing, and commercial premises"
  },
  portishead: {
    landmarks: ["Portishead Marina", "Lake Grounds", "Battery Point", "Portishead Pier", "Nore Road"],
    neighborhoods: ["Marina Quarter", "Old Portishead", "Lake Grounds", "Portbury Wharf", "Woodlands"],
    drainageInfo: "Portishead's marina developments on reclaimed land have high water table conditions and drainage systems now approaching 25-30 years old. Older town centre properties have Victorian-era infrastructure. The coastal position can accelerate corrosion of metal plumbing components.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "marina apartments, Victorian town centre properties, modern housing estates, and waterfront developments"
  },
  clevedon: {
    neighborhoods: ["Old Street", "Church Hill", "Kenn Road", "Yeo Valley", "Tickenham", "Nailsea Road"],
    landmarks: ["Clevedon Pier", "Clevedon Court", "Marine Lake", "Salthouse Fields", "The Triangle"],
    drainageInfo: "Clevedon's Victorian and Edwardian properties have century-old clay drainage and aged supply pipework. The coastal environment can accelerate corrosion. Ground conditions near Marine Lake and the seafront are affected by elevated water tables influenced by tidal patterns.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian and Edwardian terraces, period semis, coastal properties, and modern family homes"
  },
  nailsea: {
    neighborhoods: ["Backwell", "Tickenham", "West End", "Yeo Moor", "Wraxall", "Flax Bourton"],
    landmarks: ["Nailsea and Backwell Station", "Nailsea Court", "Nailsea Town Centre", "Backwell", "Tickenham"],
    drainageInfo: "Nailsea has a large proportion of 1970s and 1980s housing with pitch fibre drainage and early plastic supply pipes reaching end of service life. The North Somerset levels geography means the water table is relatively high in some areas, affecting drainage performance.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "1970s and 1980s detached and semi-detached houses, modern estates, older town centre properties, and rural conversions"
  },
  thornbury: {
    neighborhoods: ["Morton Way", "Kington", "Alveston", "Olveston", "Elberton", "Rockhampton"],
    landmarks: ["Thornbury Castle", "Thornbury High Street", "St Mary the Virgin Church", "Mundy Playing Fields", "Thornbury Golf Centre"],
    drainageInfo: "Thornbury combines a historic town centre with extensive modern housing. The older town has historic building fabric requiring careful plumbing work, while 1970s-2000s housing estates have systems approaching maintenance-intensive age. South Gloucestershire's rural character means some properties are on private drainage.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "historic town centre properties, 1970s-2000s housing estates, modern family homes, and rural cottages"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  bristol: {
    "emergency-plumber": {
      intro: "Bristol's diverse mix of Victorian terraces, Georgian townhouses, and modern apartments means plumbing emergencies can arise from a wide variety of causes. Our Bristol emergency plumbers are positioned across the city to respond rapidly to burst pipes, leaks, and flooding at any time of day or night.",
      commonProblems: ["Burst pipes in Victorian and Edwardian properties during cold snaps", "Leaking joints on aged copper pipework", "Flooding from failed washing machine hoses and dishwasher connections", "Stopcock failures preventing water isolation during emergencies", "Water damage from roof or guttering failures entering property"],
      process: "We assess the situation immediately on arrival, isolate the water supply if needed, carry out temporary or permanent repairs depending on access and parts availability, and advise on follow-up work required.",
      localTip: "Know where your stopcock is before you need it. In Bristol's older properties it is often under the kitchen sink, but may be in a cellar or utility cupboard. Test it annually to make sure it turns freely."
    },
    "boiler-repair": {
      intro: "Bristol's moderately hard water causes limescale buildup in boiler heat exchangers over time, making regular servicing particularly important. Our Gas Safe registered engineers repair and service all makes and models of boiler across Bristol and the surrounding area.",
      commonProblems: ["Scale buildup causing kettling and reduced efficiency", "Diverter valve failure in combi boilers", "Pressure loss from system leaks or failed expansion vessels", "Ignition and pilot light failures", "PCB and control board failures in older boilers"],
      process: "Our engineers diagnose the fault using specialist tools, explain the repair options clearly, carry out agreed repairs using quality parts, and test the system fully before leaving. We carry common spares on all vehicles to resolve most faults in a single visit.",
      localTip: "Bristol's hard water accelerates scale buildup in boiler heat exchangers. Annual servicing with scale inhibitor treatment significantly extends boiler life and maintains energy efficiency."
    },
    "blocked-drains": {
      intro: "Blocked drains in Bristol can affect anything from a Victorian terrace in Bedminster to a converted flat in Clifton. Our engineers understand the varied drainage systems across Bristol's housing stock and respond quickly with the right equipment to clear any blockage.",
      commonProblems: ["Fat and grease buildup in kitchen drains", "Hair and soap accumulation in bathroom drains", "Root intrusion from Bristol's mature street trees in Redland and Clifton", "Wet wipe and sanitary product blockages", "External gully blockages from leaf litter"],
      process: "We assess the type and location of the blockage, select the appropriate clearance method — rodding, jetting, or mechanical cutting — and clear the drain completely. We always test flow before leaving and provide advice on prevention.",
      localTip: "Bristol's mature street trees, particularly in Redland and Clifton, cause widespread root intrusion into clay drains. Properties with large trees near drain runs should have annual inspections."
    },
    "plumbing-repairs": {
      intro: "From dripping taps in Clifton flats to toilet repairs in Bedminster terraces, our Bristol plumbing repair team handles all types of domestic and commercial plumbing work quickly and professionally.",
      commonProblems: ["Dripping taps from worn washers and ceramic discs", "Running toilets from failed siphons and fill valves", "Leaking pipe joints from vibration or thermal movement", "Failing ball valves in cold water tanks", "Shower pump failures in properties with poor water pressure"],
      process: "We diagnose the fault, confirm the repair cost, carry out the repair using quality materials, and test thoroughly before completing the job. Most repairs are completed in a single visit.",
      localTip: "Bristol's hard water causes ceramic disc cartridges in modern taps to wear faster than in soft water areas. Annual replacement of cartridges in heavily used taps prevents drips from developing."
    },
    "central-heating": {
      intro: "Central heating problems in Bristol homes are often related to system age, hard water sludge, or components that have been in service too long. Our heating engineers diagnose and repair all types of central heating systems across Bristol.",
      commonProblems: ["Cold radiators from trapped air or sludge accumulation", "Noisy boilers from scale buildup in heat exchangers", "Slow heat-up times from reduced system circulation", "Thermostat and programmer failures", "Pump failures from impeller wear"],
      process: "We assess the full heating system, diagnose the specific fault, carry out agreed repairs or maintenance, and verify system performance. Where power flushing is recommended, we explain the benefits and the process clearly.",
      localTip: "Bristol's moderately hard water contributes to sludge and scale formation in heating systems. Adding inhibitor chemical annually and fitting a magnetic filter significantly extends system life."
    },
    "gas-safety": {
      intro: "Gas safety is not optional for Bristol landlords and homeowners. Our Gas Safe registered engineers provide annual safety inspections, gas safety certificates, and emergency response to gas leaks throughout Bristol and surrounding areas.",
      commonProblems: ["Gas appliances overdue for annual safety inspection", "Faulty gas meters and supply connections", "Unsafe gas cooker installations", "Carbon monoxide detector alerts", "Gas escape from fittings and connections"],
      process: "Our Gas Safe engineer inspects all gas appliances and connections at the property, tests for gas tightness, checks ventilation, and issues a gas safety record. For landlords, we issue the legally required CP12 certificate.",
      localTip: "Bristol landlords must have annual gas safety inspections carried out by a Gas Safe registered engineer. Failure to comply carries significant penalties. We can provide annual reminders and certificates across your Bristol property portfolio."
    }
  },
  bath: {
    "emergency-plumber": {
      intro: "Emergency plumbing in Bath requires particular care and sensitivity, especially in the city's many listed Georgian and Edwardian properties. Our engineers respond rapidly to burst pipes, leaks, and water emergencies across Bath while understanding the constraints of working in historic buildings.",
      commonProblems: ["Burst pipes in unheated period property spaces", "Leaking lead joints in very old supply pipework", "Flooding from failed appliances in converted apartments", "Leaks from lime mortar-bedded brickwork joints near pipes", "Frozen pipes in exposed loft conversions"],
      process: "We assess the emergency, isolate the water supply, carry out repair using appropriate materials for the property type, and advise on follow-up work. For listed properties, we are mindful of material choices and the importance of minimal disruption.",
      localTip: "Bath's Georgian townhouses often have complex pipe routes developed over two centuries of modification. Keep records of any pipe locations known to you and share these with our engineers on arrival to speed up fault location."
    },
    "boiler-repair": {
      intro: "Bath's particularly hard water makes boiler maintenance critical. Scale buildup in heat exchangers reduces efficiency and causes premature failure. Our Gas Safe engineers provide expert boiler repair and servicing across Bath and the surrounding villages.",
      commonProblems: ["Severe scale buildup from Bath's hard water supply", "Ignition failures in older boilers", "Pressure loss from expanded vessels and system leaks", "Thermostat and controls failures", "Pump failures from accumulated sludge"],
      process: "We diagnose the boiler fault, explain repair options, carry out agreed work, and test fully. For Bath properties, we routinely recommend scale inhibitor treatment and system filters given the area's water hardness.",
      localTip: "Bath has among the hardest water in our service area. Annual boiler servicing with scale inhibitor top-up is essential. Descaling treatments can restore efficiency in boilers showing early scale symptoms."
    },
    "blocked-drains": {
      intro: "Bath's older properties, particularly in the Georgian city centre and Victorian suburbs like Oldfield Park, have drainage infrastructure that can be over 150 years old. Our engineers clear blockages using appropriate equipment for period drainage systems across Bath.",
      commonProblems: ["Debris accumulation in aged clay drainage", "Root ingress from established garden trees", "Fat buildup from residential and commercial kitchens", "Shared drainage conflicts in converted townhouses", "Surface water issues near the River Avon"],
      process: "We assess the blockage type and drain age before selecting the most appropriate clearance method. Period clay drains receive careful treatment with appropriate jetting pressures. We always verify flow restoration before completing the job.",
      localTip: "Bath's Georgian and Victorian properties often have undocumented drainage modifications made over 150 years. A CCTV survey before any significant plumbing work clarifies what lies beneath."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs in Bath's historic properties require the right approach. From Georgian townhouses with original or early-replacement pipework to Victorian terraces in Oldfield Park, our engineers carry out professional repairs that respect the character of Bath's buildings.",
      commonProblems: ["Worn tap washers and ceramic cartridges", "Running toilets and cistern failures", "Leaking pipe joints from thermal movement", "Ball valve failures in old cold water tanks", "Shower and bathroom fitting repairs"],
      process: "We diagnose and quote clearly before starting work, carry out repairs using quality materials appropriate to the property, and test thoroughly. For sensitive historic properties, we choose the least invasive approach.",
      localTip: "Bath's very hard water causes faster wear on tap cartridges and shower heads than most UK areas. Replace cartridges annually in high-use taps and descale shower heads regularly to maintain performance."
    },
    "central-heating": {
      intro: "Central heating in Bath's Georgian and Victorian properties often involves systems of considerable age and complexity. Our engineers diagnose and repair heating faults across all system types, from modern combi boilers to older conventional gravity-fed systems.",
      commonProblems: ["Scale-related boiler noise from hard water", "Cold radiators from sludge accumulation", "Old gravity-fed system problems", "Thermostat and programmer failures", "Pump failures from impeller wear"],
      process: "We assess the full heating system, identify the specific fault, explain repair options including power flushing where beneficial, and carry out agreed work. Bath properties benefit particularly from system treatment given the water hardness.",
      localTip: "Bath's hard water creates scale in heating systems faster than most UK areas. Power flushing every five years and annual inhibitor maintenance are strongly recommended for all Bath properties."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Bath properties, including the city's many rental properties and HMOs. Our Gas Safe registered engineers cover Bath and the surrounding villages for all gas safety requirements.",
      commonProblems: ["Annual inspection requirements for landlords", "Gas appliances in conversion flats", "Older gas fires and back boilers requiring safety checks", "Ventilation requirements in period buildings", "Carbon monoxide safety"],
      process: "We inspect all gas appliances and pipework, test for gas tightness, verify ventilation, and issue the gas safety record. For Bath landlords, we provide CP12 certificates and reminders for annual renewal.",
      localTip: "Bath has a high proportion of rental properties and HMOs. Landlords must ensure all gas appliances are inspected annually by a Gas Safe engineer. Our team covers the full Bath rental market."
    }
  },
  clifton: {
    "emergency-plumber": {
      intro: "Emergency plumbing in Clifton means working with grand Victorian townhouses, converted flats, and the complex shared drainage systems that serve them. Our engineers respond rapidly to burst pipes, leaks, and water emergencies across Clifton and the surrounding area.",
      commonProblems: ["Burst pipes during cold weather in unheated parts of tall townhouses", "Leaking flat roof joints and parapet flashings affecting internal plumbing", "Washing machine and dishwasher hose failures in upper-floor flats", "Shared water supply failures affecting all flats in a building", "Failed stopcock isolators in converted properties"],
      process: "We assess the emergency, isolate the water supply at the appropriate point, carry out repair, and advise on follow-up requirements. For shared systems in converted townhouses, we co-ordinate with managing agents or other occupants as needed.",
      localTip: "In Clifton's converted townhouses, individual flats may have their own isolation valves that can be closed without affecting other occupants. Know the location of yours — it can limit damage significantly in an emergency."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Clifton's diverse housing — from self-contained family homes to complex converted flats with shared heating arrangements. Our Gas Safe engineers cover Clifton and the Avon Gorge area 24 hours a day.",
      commonProblems: ["Scale buildup in boilers from Bristol's hard water", "Shared heating system complications in conversions", "Pressure loss from system leaks in tall buildings", "Old boilers in properties that have not been updated", "Thermostat and programmer failures"],
      process: "We diagnose the boiler fault, explain repair options clearly, carry out agreed work using quality parts, and test fully. Where shared heating systems are involved, we co-ordinate with building management to minimise disruption to all occupants.",
      localTip: "Clifton's tall Victorian townhouses have high water pressure at lower floors and lower pressure at upper floors. If shower pressure on upper floors is poor, a pressure booster pump may be the solution rather than a boiler issue."
    },
    "blocked-drains": {
      intro: "Blocked drains in Clifton frequently result from the complex shared drainage systems serving converted townhouses. A blockage in one flat affects others above and below. Our engineers clear Clifton drain blockages quickly and professionally with minimal disruption.",
      commonProblems: ["Shared drainage stack blockages affecting multiple flats", "Root intrusion from Clifton's mature street trees", "Fat and grease accumulation in kitchen drains of converted flats", "External gully blockages on steep Clifton streets", "Drainage failures from ground movement on the limestone ridge"],
      process: "We locate and assess the blockage, apply the most effective clearance method, and test all affected outlets. For shared drainage blockages, we communicate clearly with all affected residents.",
      localTip: "Clifton's shared drainage stacks can carry waste from four or five flats in tall Victorian conversions. One household's inappropriate disposal habits affect all others. A management plan for shared drain maintenance prevents emergency situations."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs across Clifton's varied housing — from modern bathroom suites in newly converted flats to original Victorian fittings in unchanged properties. Our engineers carry out all types of domestic plumbing repairs efficiently.",
      commonProblems: ["Dripping taps from worn cartridges", "Running toilets in old and new cisterns", "Leaking shower enclosures and trays", "Failed under-sink water filters and softeners", "Pipe noise from water hammer in high-pressure supplies"],
      process: "We diagnose the fault, confirm the cost, carry out the repair, and test thoroughly. We keep common spare parts on our vehicles to resolve most repairs in a single visit.",
      localTip: "Water hammer — banging pipes when taps are closed quickly — is common in Clifton's higher-pressure lower streets. Fitting water hammer arrestors resolves the problem without major plumbing work."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance in Clifton's varied housing stock. From power flushing shared systems in converted townhouses to repairing individual boilers in self-contained homes, our engineers handle all heating system types.",
      commonProblems: ["Cold radiators from sludge in shared heating systems", "Boiler kettling from scale buildup", "Thermostat and zone valve failures", "Pump wear in shared heating systems", "Pressure loss from system leaks"],
      process: "We assess the heating system, diagnose the fault, and carry out agreed repairs. For shared systems in Clifton's converted townhouses, we schedule work to minimise disruption to all residents.",
      localTip: "Shared central heating systems in Clifton's converted townhouses need collective maintenance decisions. A well-managed block will have the heating system inspected annually and power flushed every five to seven years."
    },
    "gas-safety": {
      intro: "Gas safety inspections, servicing, and emergency response for Clifton's residential and commercial properties. Our Gas Safe engineers provide CP12 certificates for landlords and gas safety checks for homeowners across Clifton.",
      commonProblems: ["Annual certificate requirements for Clifton's large rental market", "Gas appliances in converted flat buildings", "Older boilers and gas fires requiring safety assessment", "Ventilation requirements in converted properties", "Gas meter access issues in converted buildings"],
      process: "We inspect all gas appliances and connections, test for gas tightness, check ventilation, and issue the gas safety record. For Clifton landlords and property managers, we provide efficient portfolio inspection services.",
      localTip: "Clifton has one of Bristol's highest concentrations of rental properties. Landlords must ensure annual gas safety inspections are current. We can manage annual scheduling across property portfolios."
    }
  },
  bedminster: {
    "emergency-plumber": {
      intro: "Emergency plumbing for Bedminster's Victorian terraces and diverse housing. Our engineers respond rapidly to burst pipes, leaks, and flooding across Bedminster, Totterdown, Southville, and the surrounding south Bristol area.",
      commonProblems: ["Burst pipes in uninsulated Victorian property spaces", "Leaking joints on old copper and lead pipework", "Flooding from failed washing machines and dishwashers", "External drain failures in shared terraced drainage", "Stopcock failures preventing water isolation"],
      process: "We respond quickly, isolate the water supply, carry out emergency repair, and advise on any follow-up work required. For shared drainage in terraced rows, we co-ordinate with neighbours as needed.",
      localTip: "In Bedminster's Victorian terraces, the shared back passage drainage is a common source of emergency blockages affecting multiple properties. Prompt action prevents the blockage spreading and the situation worsening."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Bedminster's varied housing, from the Victorian terraces of Totterdown and Windmill Hill to the post-war estates further south. Gas Safe registered engineers available 24/7 across the south Bristol area.",
      commonProblems: ["Scale buildup in boilers from Bristol's moderately hard water", "Old boilers in Victorian properties requiring replacement", "Pressure loss from expansion vessel failures", "Ignition failures in ageing boilers", "Thermostatic controls failures"],
      process: "We diagnose boiler faults, explain repair or replacement options honestly, carry out agreed work, and test fully. We always recommend the most cost-effective approach for the customer's specific situation.",
      localTip: "Many Bedminster Victorian properties still have original or early-replacement boilers that are now significantly past their expected lifespan. An honest assessment of whether repair or replacement is better value is something we provide free of charge."
    },
    "blocked-drains": {
      intro: "Blocked drains in Bedminster's Victorian terraces are often shared problems affecting multiple neighbouring properties. Our engineers clear blockages effectively across Bedminster, Totterdown, and the surrounding south Bristol area.",
      commonProblems: ["Shared drainage blockages in terraced rows", "Fat and grease from kitchen drains in closely-packed terraces", "Root intrusion from established back garden trees", "External gully blockages from leaf fall", "Wet wipe accumulation in Victorian drainage"],
      process: "We locate and assess the blockage, clear it using appropriate equipment, test flow, and advise on prevention. For shared drainage, we communicate with all affected properties.",
      localTip: "Bedminster's back alley drainage serving terraced rows is shared between multiple properties. One household causing a blockage affects all neighbours. Consider a joint maintenance schedule with neighbouring terraces."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs for Bedminster's diverse housing stock. From dripping taps and running toilets in Victorian terraces to appliance connections and bathroom fitting repairs in modern properties, our engineers cover it all.",
      commonProblems: ["Dripping taps from worn washers", "Running toilets from old siphon failures", "Leaking joints on old pipework", "Failed shower units in converted bathrooms", "Ball valve failures in cold water tanks"],
      process: "We diagnose the fault, confirm cost, carry out the repair, and test. Most common repairs are completed in a single visit with parts carried on our vehicles.",
      localTip: "Bedminster's Victorian terraces often have original cold water storage tanks in loft spaces that are now well over a century old. These should be inspected and replaced if they show signs of corrosion or contamination risk."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance across Bedminster and south Bristol. From power flushing to radiator repairs and full system servicing, our heating engineers cover all property types in the area.",
      commonProblems: ["Cold radiators from sludge in older systems", "Boiler noise from scale buildup", "Old gravity-fed heating systems in Victorian properties", "Zone valve and pump failures", "Thermostat and programmer faults"],
      process: "We assess the heating system, diagnose faults, carry out agreed repairs, and verify system performance. Power flushing is recommended for older Bedminster properties with signs of sludge accumulation.",
      localTip: "Victorian properties in Bedminster that still have gravity-fed central heating systems are approaching the age where conversion to a modern sealed system with a combi boiler may be more cost-effective than further repairs."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Bedminster's residential and rental properties. Our Gas Safe engineers cover Bedminster, Totterdown, Southville, and the surrounding south Bristol area.",
      commonProblems: ["Annual certificate requirements for rental properties", "Gas appliances in older properties requiring safety assessment", "Carbon monoxide safety checks", "Ventilation requirements in converted homes", "Older gas fires and back boilers"],
      process: "We inspect all gas appliances and connections, test for gas tightness, check ventilation, and issue the gas safety record. For Bedminster landlords, we provide CP12 certificates and annual renewal reminders.",
      localTip: "Bedminster has a significant proportion of privately rented Victorian terraces. Landlords must ensure annual gas safety checks are current for all gas appliances. We can manage annual scheduling across portfolios."
    }
  },
  redland: {
    "emergency-plumber": {
      intro: "Emergency plumbing in Redland's large Victorian and Edwardian houses. Our engineers respond rapidly to burst pipes, leaks, and flooding across Redland, Cotham, Bishopston, and the surrounding north Bristol residential areas.",
      commonProblems: ["Burst pipes in unheated loft conversions of large Victorian houses", "Leaking joints from vibration and thermal movement in old pipework", "Flooding from failed appliances in upper-floor flats of converted houses", "Lead pipe failures in very old supply systems", "Failed isolation valves in shared-conversion properties"],
      process: "We assess the emergency, isolate water, carry out repair, and advise on follow-up. For Redland's converted houses, we consider the shared nature of systems when planning repairs.",
      localTip: "Large Victorian houses in Redland converted into multiple flats have complex plumbing histories. Keep shared system plans if available, and know which valves control your individual flat's water supply."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Redland's mix of large converted houses and self-contained homes. Gas Safe registered engineers available 24/7 across Redland, Cotham, and Bishopston.",
      commonProblems: ["Scale buildup from Bristol hard water", "Old boilers in large Victorian properties", "Shared boiler system complications in conversions", "Pressure and expansion vessel issues", "Controls and programmer failures"],
      process: "We diagnose the boiler fault, explain repair or replacement options clearly, carry out agreed work with quality parts, and test fully before leaving.",
      localTip: "Redland's large Victorian houses converted into flats often have communal boiler systems that require collective maintenance decisions. An annual service agreement for shared boilers prevents expensive emergency failures."
    },
    "blocked-drains": {
      intro: "Blocked drains in Redland are most commonly caused by root intrusion from the area's mature street trees — a distinctive challenge our engineers address daily. We clear drain blockages across Redland, Cotham, and Bishopston with specialist equipment.",
      commonProblems: ["Root intrusion from Redland's large street trees", "Fat and grease from kitchens in converted flats", "Shared drainage blockages affecting multiple residents", "External gully blockages from autumn leaf fall", "Root-damaged pipes requiring relining or replacement"],
      process: "We assess the blockage type, apply appropriate clearance including root cutting where needed, test flow, and advise on long-term management including relining for root-damaged pipes.",
      localTip: "Root intrusion is the defining drain problem in Redland. Once roots have entered a pipe, they regrow unless the entry point is sealed by relining. Plan for relining any pipe with confirmed root intrusion within two to three years."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs across Redland's large Victorian houses, converted flats, and family homes. From minor tap repairs to complex shared system work, our engineers provide professional, efficient plumbing repairs throughout the area.",
      commonProblems: ["Dripping taps and worn cartridges", "Running toilets from siphon and fill valve failures", "Leaking pipe connections in ageing systems", "Shower pump failures in converted flat properties", "Ball valve failures in loft storage tanks"],
      process: "We diagnose, quote, repair, and test. Most repairs are completed in a single visit. For complex shared system issues, we communicate clearly with all affected parties.",
      localTip: "Redland's large Victorian houses often still have original galvanised steel cold water supply pipes in loft spaces. These are corroding internally and should be replaced — rusty or discoloured cold water is the tell-tale sign."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance for Redland's Victorian and Edwardian housing. From individual flat boilers to shared heating systems in converted houses, our engineers diagnose and resolve all heating faults.",
      commonProblems: ["Cold radiators from sludge in long-established systems", "Kettling from scale in heat exchangers", "Pump failures from impeller wear", "Zone valve failures blocking heat to individual zones", "Thermostat and programmer faults"],
      process: "We assess the heating system, diagnose faults, carry out agreed repairs or power flush, and verify system performance. System treatment with inhibitor and magnetic filters is recommended for all Redland properties.",
      localTip: "Redland properties with central heating systems more than 15 years old and no history of power flushing almost certainly have sludge accumulation that is reducing efficiency and shortening boiler life. A power flush pays for itself in reduced running costs."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Redland's mix of owner-occupied and rental properties. Our Gas Safe registered engineers cover Redland, Cotham, Bishopston, and surrounding north Bristol areas.",
      commonProblems: ["Annual inspection requirements for rental flats", "Gas appliances in large converted houses", "Older gas fires in Victorian reception rooms", "Ventilation checks in converted properties", "Carbon monoxide safety"],
      process: "We inspect all gas appliances and connections, test gas tightness, check ventilation, and issue the gas safety record and CP12 certificate for landlords.",
      localTip: "Redland has a very high concentration of rented flats in converted Victorian houses. Landlords managing multiple flats in a single building should arrange annual block inspection visits for efficiency and consistency."
    }
  },
  horfield: {
    "emergency-plumber": {
      intro: "Emergency plumbing in Horfield and north Bristol. Our engineers respond rapidly to burst pipes, leaks, and water emergencies across Horfield, Bishopston, Lockleaze, and the surrounding residential areas.",
      commonProblems: ["Burst galvanised steel pipes in inter-war properties", "Failed stop taps that cannot isolate the supply", "Leaking joints from old solder and compression fittings", "Washing machine and dishwasher supply hose failures", "Flooding from failed water heaters"],
      process: "We respond quickly, isolate water at the appropriate point, carry out emergency repair, and advise on follow-up requirements including any aging pipework that should be replaced proactively.",
      localTip: "Horfield's inter-war semis frequently have original galvanised steel supply pipes that are corroding internally. A burst from one of these requires emergency repair but is also a signal that wider pipe replacement should be planned."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Horfield's varied housing, from inter-war semis to post-war estates and modern developments. Gas Safe registered engineers available 24/7 across Horfield and the surrounding north Bristol area.",
      commonProblems: ["Old boilers approaching end of lifespan in inter-war properties", "Scale accumulation from Bristol hard water", "Pressure and expansion vessel failures", "Ignition and pilot light problems", "Thermostatic control failures"],
      process: "We diagnose the boiler fault, provide an honest assessment of repair versus replacement options, carry out agreed work, and test fully before leaving.",
      localTip: "Many Horfield inter-war and post-war properties have boilers that are now well past recommended replacement age. Annual servicing becomes more important — not less — as boilers age, and early replacement planning prevents unexpected winter breakdowns."
    },
    "blocked-drains": {
      intro: "Drain unblocking across Horfield and north Bristol. Our engineers handle all types of drain blockages in Horfield's varied housing stock, from inter-war semis to modern properties.",
      commonProblems: ["Kitchen drain blockages from fat and food waste", "Bathroom drain blockages from hair and soap", "External gully blockages from leaf fall", "Shared drainage blockages in terraced housing", "Root intrusion from established garden trees"],
      process: "We assess the blockage, apply the most effective clearance method, verify flow, and provide prevention advice. We carry full jetting and rodding equipment on every vehicle.",
      localTip: "Horfield's established gardens often have large trees close to drain runs. Root intrusion is increasingly common in the area. Annual external drain inspection catches root problems before they cause serious pipe damage."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs for Horfield's inter-war semis, post-war properties, and modern homes. From replacing corroding galvanised pipework to fixing taps, toilets, and showers, our engineers provide professional repair across the area.",
      commonProblems: ["Corroding galvanised steel supply pipes causing discoloured water", "Dripping taps from worn washers", "Running toilets from failed siphons and fill valves", "Shower pump failures", "Failed ball valves in cold water storage tanks"],
      process: "We diagnose, quote, repair, and test. Corroding galvanised pipework requires replacement rather than repair — we can advise on the extent of replacement needed.",
      localTip: "Rusty or discoloured cold water in Horfield's inter-war semis almost always indicates corroding galvanised steel supply pipes. Full replacement with copper or plastic pipework restores clean water and prevents pipe failures."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance across Horfield and north Bristol. Our heating engineers diagnose and resolve all heating faults in Horfield's mix of property ages and system types.",
      commonProblems: ["Old gravity-fed heating systems in inter-war properties", "Cold radiators from sludge buildup", "Boiler scale noise from hard water", "Pump failures in old systems", "Thermostat and zone valve failures"],
      process: "We assess the system, diagnose faults, carry out agreed repairs or maintenance, and verify performance. Power flushing is beneficial for most Horfield properties with older heating systems.",
      localTip: "Many Horfield inter-war semis still have gravity-fed heating systems. Conversion to a modern sealed system with a combi boiler significantly improves energy efficiency and reliability."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Horfield residential and rental properties. Our Gas Safe registered engineers cover Horfield, Bishopston, and surrounding north Bristol areas.",
      commonProblems: ["Annual inspection requirements for rental properties", "Older gas appliances requiring safety assessment", "Carbon monoxide detector requirements", "Ventilation checks in older properties", "Gas meter and supply connection inspections"],
      process: "We inspect all gas appliances and pipework, test gas tightness, check ventilation, and issue the gas safety record. For landlords, we provide CP12 certificates and annual renewal management.",
      localTip: "Older gas fires in Horfield's inter-war and post-war properties require careful safety assessment. Some older fire designs are no longer considered safe and should be decommissioned."
    }
  },
  filton: {
    "emergency-plumber": {
      intro: "Emergency plumbing in Filton and the surrounding north Bristol area. Our engineers respond rapidly to burst pipes, leaks, and water emergencies across Filton, Stoke Gifford, Bradley Stoke, and Patchway.",
      commonProblems: ["Burst pipes in post-war and 1970s properties", "Failed isolation valves in older properties", "Leaking supply connections on aging pipework", "Flooding from washing machine and dishwasher hose failures", "External pipe damage from ground movement"],
      process: "We respond quickly, isolate the water supply, carry out emergency repair, and advise on follow-up work. We carry common parts on all vehicles to resolve most emergencies in a single visit.",
      localTip: "Post-war and 1960s properties in Filton may have early plastic supply pipes that have become brittle with age. A pipe failure from one of these signals that wider replacement should be planned."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing across Filton, Stoke Gifford, Bradley Stoke, and the surrounding north Bristol area. Gas Safe registered engineers available 24/7 for all boiler makes and models.",
      commonProblems: ["Scale buildup in combi boilers from Bristol hard water", "Boiler breakdowns in 1970s and 1980s properties with old boilers", "Pressure loss from expansion vessel failures", "Ignition and pilot light failures", "PCB failures in older boiler models"],
      process: "We diagnose the fault, explain repair or replacement options, carry out agreed work using quality parts, and test fully. We carry common spares to resolve most faults on the first visit.",
      localTip: "Filton's 1970s and 1980s housing stock has boilers that are now well past their expected 15-20 year lifespan. Annual servicing and honest assessment of remaining life helps plan replacement at a convenient time rather than in an emergency."
    },
    "blocked-drains": {
      intro: "Drain unblocking across Filton and the surrounding north Bristol area. Our engineers resolve all drain blockage types, including pitch fibre pipe failures common in Filton's post-war housing.",
      commonProblems: ["Deformed pitch fibre drains causing recurring blockages", "Root intrusion from garden trees", "Fat and kitchen waste accumulation", "External gully blockages", "Shared drainage failures in post-war estates"],
      process: "We assess the blockage type and drain condition, apply appropriate clearance, verify flow, and advise on structural remediation if pitch fibre or root damage is found.",
      localTip: "Recurring drain blockages in Filton's 1960s and 1970s properties should prompt a CCTV survey. Deformed pitch fibre pipe is the hidden cause in many cases — clearance treats the symptom while relining treats the cause."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs for Filton's post-war housing estates, 1960s-1970s semis, and new-build developments. Our engineers handle all types of domestic plumbing repairs across the area.",
      commonProblems: ["Early plastic supply pipe failures", "Dripping taps from worn cartridges and washers", "Running toilets from old siphon and fill valve failures", "Shower and bath fitting repairs", "Failed washing machine connections"],
      process: "We diagnose, quote, repair, and test. Most repairs completed in a single visit with parts from our vehicle stock.",
      localTip: "Early plastic supply pipes in Filton's 1970s and 1980s housing can become brittle and fail without warning. If your property still has the original grey or white plastic supply pipes, replacement with copper or modern plastic is advisable."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance across Filton, Bradley Stoke, and the surrounding area. From post-war gravity-fed systems to modern sealed systems in new-build properties, our engineers cover all heating types.",
      commonProblems: ["Cold radiators from sludge in older systems", "Boiler scale and efficiency loss from hard water", "Pump failures in aging systems", "TRV failures causing cold radiators", "Pressure loss and expansion vessel failures"],
      process: "We assess the system, diagnose faults, carry out agreed repairs, and verify performance. Power flushing is recommended for Filton properties with older heating systems and signs of sludge accumulation.",
      localTip: "New-build properties at Charlton Hayes and Stoke Gifford have modern heating systems, but should still have annual boiler servicing and system inhibitor checks from year one to maintain warranty and efficiency."
    },
    "gas-safety": {
      intro: "Gas safety inspections, certificates, and servicing for Filton's residential and commercial properties. Our Gas Safe engineers cover Filton, Stoke Gifford, Bradley Stoke, and Patchway.",
      commonProblems: ["Annual landlord certificate requirements", "Older gas appliances in post-war properties", "Gas safety for new-build properties approaching end of builder warranty", "Carbon monoxide detector requirements", "Gas meter and connection inspections"],
      process: "We inspect all gas appliances and connections, test gas tightness, check ventilation, and issue the gas safety record and CP12 certificate for landlords.",
      localTip: "New-build properties in Filton and Bradley Stoke often pass responsibility for gas safety to the owner after the builder warranty expires. Annual Gas Safe inspections should begin immediately after the first year."
    }
  },
  kingswood: {
    "emergency-plumber": {
      intro: "Emergency plumbing in Kingswood and east Bristol. Our engineers respond to burst pipes, leaks, and water emergencies across Kingswood, Warmley, Staple Hill, and the surrounding South Gloucestershire area.",
      commonProblems: ["Burst pipes in post-war and Victorian properties", "Failed stop cocks in older properties", "Leaking joints from old solder and compression fittings", "Flooding from failed appliances", "External pipe damage from ground movement"],
      process: "We respond quickly, isolate water, carry out emergency repair, and advise on follow-up work. We carry comprehensive emergency repair stock on all vehicles.",
      localTip: "Know where your stopcock is and test it annually. In Kingswood's older properties, stop cocks can seize if not operated regularly, making emergency isolation impossible."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing across Kingswood, Warmley, Staple Hill, Mangotsfield, and the surrounding east Bristol and South Gloucestershire area. Gas Safe registered engineers available 24/7.",
      commonProblems: ["Scale buildup from Bristol area hard water", "Old boilers in diverse housing stock", "Pressure and expansion vessel failures", "Ignition system faults", "Controls and programmer failures"],
      process: "We diagnose the boiler fault, explain options, carry out agreed work, and test fully. Common spares on every vehicle ensure most faults are resolved in one visit.",
      localTip: "Kingswood's diverse housing stock means boiler ages vary considerably. An assessment of your boiler's remaining useful life helps plan replacement rather than being faced with an emergency in winter."
    },
    "blocked-drains": {
      intro: "Drain unblocking across Kingswood and the surrounding east Bristol area. Our engineers handle all drain blockage types in Kingswood's varied housing from Victorian terraces to modern estates.",
      commonProblems: ["Kitchen and bathroom drain blockages", "Root intrusion from garden trees", "Shared drainage failures in terraced housing", "External gully blockages from leaf fall", "Pitch fibre drain deformation in older post-war housing"],
      process: "We assess, clear, verify, and advise. CCTV surveys are recommended for recurring blockages to identify structural causes.",
      localTip: "Some older parts of Kingswood have a legacy of coal mining ground conditions that can cause pipe displacement. If drain problems recur in the same location, a survey to check for ground movement-related pipe damage is worthwhile."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs across Kingswood, Warmley, and the surrounding area. From Victorian terrace repairs to modern housing, our engineers handle all types of domestic plumbing work.",
      commonProblems: ["Dripping taps and worn washers", "Running toilets from siphon failures", "Leaking pipe joints", "Shower and bath fitting repairs", "Failed ball valves in storage tanks"],
      process: "We diagnose, quote, repair, and test. Most repairs completed in a single visit.",
      localTip: "Victorian terraces in the older parts of Kingswood may still have galvanised steel cold water pipes in loft spaces. Rusty water from cold taps signals these need replacement."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance across Kingswood and east Bristol. Our engineers diagnose and resolve heating faults in all property and system types across the area.",
      commonProblems: ["Cold radiators from sludge accumulation", "Boiler noise from scale", "Pump and zone valve failures", "Old gravity-fed systems in period properties", "Thermostat and programmer faults"],
      process: "We assess the system, diagnose faults, carry out repairs, and verify performance. Power flushing is recommended for properties with aging systems and signs of sludge.",
      localTip: "Kingswood properties with Bristol area water should use system inhibitor and have it checked annually at boiler service. Magnetic filters capture circulating sludge and significantly extend system life."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Kingswood's residential and rental properties. Our Gas Safe engineers cover Kingswood, Warmley, Staple Hill, Mangotsfield, and surrounding areas.",
      commonProblems: ["Annual landlord certificate requirements", "Older gas appliances requiring safety assessment", "Carbon monoxide safety in older properties", "Gas fire safety checks", "Ventilation inspections"],
      process: "We inspect gas appliances and connections, test gas tightness, check ventilation, and issue the gas safety record. For landlords, we provide CP12 certificates and renewal management.",
      localTip: "Kingswood landlords managing multiple properties benefit from block inspection scheduling — we can survey several properties in a single area visit, reducing disruption and cost."
    }
  },
  portishead: {
    "emergency-plumber": {
      intro: "Emergency plumbing in Portishead and the North Somerset coast. Our engineers respond to burst pipes, leaks, and water emergencies across Portishead, Portbury, and the surrounding Somerset area.",
      commonProblems: ["Burst pipes in unheated spaces of older Portishead properties", "Failed supply connections in marina apartment buildings", "Flooding from failed appliances in upper-floor flats", "Corrosion-related pipe failures in coastal properties", "Failed stop valves in older Victorian properties"],
      process: "We respond quickly, isolate water at the appropriate point, carry out emergency repair, and advise on follow-up requirements.",
      localTip: "Portishead's coastal environment can accelerate corrosion of metal plumbing fittings. Regular inspection of exposed pipework, particularly in garages and outbuildings, helps catch corrosion before it causes a failure."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Portishead's residential properties. Gas Safe registered engineers available 24/7 across Portishead and the surrounding North Somerset area.",
      commonProblems: ["Scale buildup from hard water in older boilers", "Pressure and expansion vessel failures in marina apartments", "Old boiler breakdowns in Victorian town centre properties", "Ignition and pilot light faults", "Controls and programmer failures"],
      process: "We diagnose the boiler fault, explain repair or replacement options, carry out agreed work, and test fully.",
      localTip: "Portishead's coastal exposure means heating system reliability is particularly important in winter. Annual boiler servicing before the heating season starts prevents the most common cold-weather breakdowns."
    },
    "blocked-drains": {
      intro: "Drain unblocking for Portishead's marina apartments, Victorian town centre properties, and modern housing estates. Our engineers clear all blockage types across the Portishead area.",
      commonProblems: ["Communal drainage blockages in marina apartment blocks", "Fat and kitchen waste accumulation in terraced properties", "Root intrusion in older Victorian properties", "External gully blockages in residential estates", "Drainage performance issues from high water table in marina areas"],
      process: "We assess the blockage, apply appropriate clearance equipment, verify flow, and advise on prevention. For shared communal drainage in marina buildings, we co-ordinate with managing agents.",
      localTip: "Marina apartment communal drainage serving multiple floors can develop blockages that affect all residents simultaneously. Block management companies should schedule annual drainage inspections and jetting."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs for Portishead's varied housing. From Victorian town centre properties to modern marina apartments and residential estates, our engineers handle all domestic plumbing repairs.",
      commonProblems: ["Dripping taps from worn cartridges", "Running toilets from fill valve failures", "Leaking joints in older properties", "Shower pump issues in properties with low pressure", "Corrosion-related fitting failures in coastal exposure"],
      process: "We diagnose, quote, repair, and test. Most repairs completed in a single visit with vehicle stock parts.",
      localTip: "Portishead's marine environment can cause faster corrosion of exposed metal plumbing fittings than inland areas. Stainless steel and plastic fittings are preferable for any external or exposed applications."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance across Portishead and the surrounding area. Our engineers resolve heating faults in all property types, from Victorian cottages to modern marina apartments.",
      commonProblems: ["Cold radiators from sludge", "Boiler scale from hard water", "Pump failures in aging systems", "Zone valve and TRV failures", "Pressure and expansion vessel issues"],
      process: "We assess the system, diagnose faults, carry out agreed repairs, and verify performance.",
      localTip: "Portishead properties on the seafront and marina areas benefit from high-quality boiler covers in winter — coastal wind and cold can make heating failures particularly uncomfortable and urgent."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Portishead residential and rental properties. Our Gas Safe engineers cover Portishead and the surrounding North Somerset area.",
      commonProblems: ["Annual landlord certificate requirements", "Gas appliances in marina apartments and older properties", "Carbon monoxide safety", "Ventilation checks in conversions and flats", "Gas meter inspections"],
      process: "We inspect gas appliances and connections, test gas tightness, check ventilation, and issue the gas safety record and CP12 certificate for landlords.",
      localTip: "Marina apartment blocks in Portishead with multiple landlord-owned units benefit from co-ordinated inspection scheduling. We can inspect all units in a single building visit."
    }
  },
  clevedon: {
    "emergency-plumber": {
      intro: "Emergency plumbing for Clevedon's Victorian and modern properties. Our engineers respond to burst pipes, leaks, and water emergencies across Clevedon and the surrounding North Somerset area.",
      commonProblems: ["Burst pipes in unheated spaces of Victorian properties", "Failed lead or early copper joints in old supply systems", "Flooding from failed appliances", "Corroding fittings in coastal-exposure locations", "Failed stop valves in Victorian terraces"],
      process: "We respond quickly, isolate water, carry out emergency repair, and advise on follow-up including any ageing pipework that should be proactively replaced.",
      localTip: "Clevedon's older Victorian properties may still have lead supply pipes — a health risk that water suppliers are progressively replacing. If you have lead pipes, inform our engineer and arrange a full assessment."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Clevedon's residential properties. Gas Safe registered engineers available 24/7 across Clevedon and the North Somerset coast.",
      commonProblems: ["Scale buildup in boilers from hard water", "Old boiler breakdowns in Victorian properties", "Pressure and expansion vessel failures", "Ignition system faults", "Controls failures"],
      process: "We diagnose the boiler fault, explain repair or replacement options, carry out agreed work, and test fully.",
      localTip: "Clevedon's Victorian and Edwardian housing stock has older boilers and heating systems that need more frequent servicing attention than modern equipment. Annual servicing is essential."
    },
    "blocked-drains": {
      intro: "Drain unblocking for Clevedon's Victorian properties and modern housing. Our engineers clear all types of drain blockages across Clevedon and the surrounding North Somerset area.",
      commonProblems: ["Root intrusion in Victorian clay drains", "Fat accumulation in old pipes", "External gully blockages", "Ground movement-related pipe displacement", "Old drainage modifications and illegal connections"],
      process: "We assess, clear using appropriate equipment, verify flow, and advise. For recurring blockages, CCTV survey is recommended to identify structural causes.",
      localTip: "Clevedon's Victorian drainage is over a century old in many properties. A CCTV survey before buying a Victorian property in Clevedon is strongly recommended — it reveals condition that surface inspection cannot show."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs across Clevedon's Victorian and modern properties. Our engineers handle all domestic plumbing repairs from dripping taps to full system assessments.",
      commonProblems: ["Dripping taps from worn washers and cartridges", "Running toilets", "Leaking joints in old pipework", "Shower and bath fitting repairs", "Ball valve and cold tank failures"],
      process: "We diagnose, quote, repair, and test. Most repairs in a single visit.",
      localTip: "Victorian properties in Clevedon with original bathroom fittings may have non-standard fixtures that require specialist parts. Our engineers carry extensive part stocks and access specialist suppliers."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance for Clevedon's housing. Our engineers diagnose and resolve heating faults across the area.",
      commonProblems: ["Cold radiators from sludge", "Boiler scale noise", "Old gravity-fed systems in Victorian properties", "Pump and zone valve failures", "Thermostat and programmer faults"],
      process: "We assess, diagnose, repair, and verify. Power flushing recommended for older Clevedon properties with aging systems.",
      localTip: "Clevedon's Victorian properties with gravity-fed heating systems benefit significantly from conversion to modern sealed systems — improved efficiency, reliability, and control."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Clevedon's residential and rental properties. Our Gas Safe engineers cover Clevedon and the surrounding North Somerset area.",
      commonProblems: ["Annual landlord certificate requirements", "Older gas appliances requiring safety assessment", "Gas fires in Victorian reception rooms", "Carbon monoxide safety", "Ventilation checks"],
      process: "We inspect gas appliances and connections, test gas tightness, check ventilation, and issue the gas safety record and CP12 certificate for landlords.",
      localTip: "Old gas fires in Clevedon's Victorian properties require careful safety assessment. Older designs may not meet current safety standards and should be professionally assessed."
    }
  },
  nailsea: {
    "emergency-plumber": {
      intro: "Emergency plumbing for Nailsea's residential properties. Our engineers respond to burst pipes, leaks, and water emergencies across Nailsea, Backwell, and the surrounding North Somerset area.",
      commonProblems: ["Burst pipes in 1970s and 1980s properties", "Failed early plastic supply pipes", "Leaking joints from old fittings", "Flooding from failed appliances", "Failed stop valves"],
      process: "We respond quickly, isolate water, carry out emergency repair, and advise on follow-up work including any aging pipework needing proactive replacement.",
      localTip: "Early plastic supply pipes in Nailsea's 1970s and 1980s housing can fail without warning as the plastic becomes brittle with age. Replacement with copper or modern plastic pipework is the long-term solution."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Nailsea's residential properties. Gas Safe registered engineers available 24/7 across Nailsea and the North Somerset area.",
      commonProblems: ["Old boilers in 1970s and 1980s properties approaching end of life", "Scale buildup from hard water", "Pressure and expansion vessel failures", "Ignition and pilot light faults", "Controls failures"],
      process: "We diagnose the boiler fault, explain repair or replacement options honestly, carry out agreed work, and test fully.",
      localTip: "Many Nailsea properties have boilers from the 1990s and early 2000s that are now 20-25 years old. Annual servicing and honest assessment of remaining life helps avoid surprise winter failures."
    },
    "blocked-drains": {
      intro: "Drain unblocking across Nailsea, Backwell, and the surrounding area. Our engineers handle all drain blockage types in Nailsea's 1970s-1980s and newer housing.",
      commonProblems: ["Deformed pitch fibre drains in older housing causing recurring blockages", "Kitchen and bathroom drain blockages", "Root intrusion from established garden trees", "External gully blockages", "Ground saturation from high water table affecting drainage performance"],
      process: "We assess, clear using appropriate equipment, verify flow, and advise. Pitch fibre deformation requires relining — clearance alone does not address the structural cause.",
      localTip: "Pitch fibre drain deformation is common in Nailsea's 1960s and 1970s housing. Recurring blockages in this era of property should trigger a CCTV survey to check for this hidden cause."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs for Nailsea's residential properties. From simple tap repairs to full pipe replacement assessments, our engineers cover all domestic plumbing needs in the area.",
      commonProblems: ["Dripping taps from worn washers and cartridges", "Running toilets from old siphon failures", "Early plastic pipe failures", "Shower and bath fitting repairs", "Ball valve failures"],
      process: "We diagnose, quote, repair, and test. Most repairs completed in a single visit.",
      localTip: "1970s Nailsea properties with original bathroom and kitchen fittings may have non-standard parts. Our engineers have extensive part knowledge and access to specialist plumbing suppliers for unusual fittings."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance for Nailsea's residential properties. Our engineers diagnose and resolve heating faults across all property and system types.",
      commonProblems: ["Cold radiators from sludge in older systems", "Boiler noise from scale buildup", "Old pump failures", "TRV and zone valve failures", "Pressure and expansion vessel issues"],
      process: "We assess the system, diagnose faults, carry out agreed repairs, and verify performance. Power flushing recommended for Nailsea properties with aging heating systems.",
      localTip: "Nailsea properties with 1990s or early 2000s heating systems are at the age where sludge accumulation is likely reducing efficiency. A power flush and inhibitor treatment now prevents more costly repairs later."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Nailsea's residential and rental properties. Our Gas Safe engineers cover Nailsea, Backwell, and surrounding North Somerset areas.",
      commonProblems: ["Annual landlord certificate requirements", "Older gas appliances in 1970s-1980s properties", "Carbon monoxide safety", "Ventilation checks in older properties", "Gas meter inspections"],
      process: "We inspect gas appliances and connections, test gas tightness, check ventilation, and issue the gas safety record and CP12 certificate for landlords.",
      localTip: "Nailsea landlords with older properties should check that gas appliances have been assessed and certified recently. Older appliances may not meet current safety standards."
    }
  },
  thornbury: {
    "emergency-plumber": {
      intro: "Emergency plumbing for Thornbury and the surrounding South Gloucestershire area. Our engineers respond to burst pipes, leaks, and water emergencies across Thornbury, Alveston, Olveston, and surrounding villages.",
      commonProblems: ["Burst pipes in unheated parts of older Thornbury properties", "Failed stop taps in aging systems", "Leaking joints from old pipework", "Flooding from failed appliances", "External pipe damage from ground movement"],
      process: "We respond quickly, isolate water, carry out emergency repair, and advise on follow-up work required.",
      localTip: "Rural properties around Thornbury may have longer response times than central Bristol locations. Knowing your stopcock location and having basic isolation ability can significantly limit damage during the wait."
    },
    "boiler-repair": {
      intro: "Boiler repair and servicing for Thornbury's residential properties. Gas Safe registered engineers available 24/7 across Thornbury and the surrounding South Gloucestershire area.",
      commonProblems: ["Scale buildup in boilers from hard water", "Old boilers in 1970s-1990s properties reaching end of life", "Pressure and expansion vessel failures", "Ignition system faults", "Controls and programmer failures"],
      process: "We diagnose the boiler fault, explain repair or replacement options honestly, carry out agreed work using quality parts, and test fully before leaving.",
      localTip: "Thornbury's 1990s detached houses have boilers now approaching 25-30 years old — well past typical boiler lifespan of 15-20 years. Annual servicing is more critical as boilers age, and early replacement planning is wise."
    },
    "blocked-drains": {
      intro: "Drain unblocking across Thornbury, Alveston, and the surrounding South Gloucestershire area. Our engineers handle all drain blockage types in Thornbury's varied housing stock.",
      commonProblems: ["Kitchen and bathroom drain blockages", "Root intrusion from established garden trees", "External gully blockages from rural debris", "Shared drainage in historic town centre properties", "Septic tank and private drainage issues in rural locations"],
      process: "We assess, clear using appropriate equipment, verify flow, and advise. For rural properties on private drainage, we have additional expertise in septic tank and treatment plant systems.",
      localTip: "Some rural properties around Thornbury are on private drainage rather than mains sewer. Private drainage systems have specific maintenance requirements — our engineers can advise on appropriate care and inspection intervals."
    },
    "plumbing-repairs": {
      intro: "Plumbing repairs across Thornbury and the surrounding area. Our engineers handle all domestic plumbing repairs in Thornbury's mix of historic and modern housing.",
      commonProblems: ["Dripping taps from worn washers and cartridges", "Running toilets", "Leaking joints in aging pipework", "Shower and bath fitting repairs", "Ball valve and cold tank failures"],
      process: "We diagnose, quote, repair, and test. Most repairs completed in a single visit.",
      localTip: "Historic properties in Thornbury's town centre may have unusual or non-standard plumbing fittings from historic modifications. Our engineers have experience sourcing specialist parts for period properties."
    },
    "central-heating": {
      intro: "Central heating repairs and maintenance for Thornbury and surrounding South Gloucestershire properties. Our engineers diagnose and resolve heating faults across all system types.",
      commonProblems: ["Cold radiators from sludge in older systems", "Boiler kettling from scale buildup", "Diverter valve failures in combi boilers", "Pump and zone valve failures", "Thermostat and programmer faults"],
      process: "We assess the system, diagnose faults, carry out agreed repairs, and verify performance. Power flushing recommended for Thornbury properties with older heating systems.",
      localTip: "Thornbury's 1990s housing has heating systems now old enough to benefit significantly from power flushing. The investment in a flush and system treatment typically pays back in reduced fuel bills within a year."
    },
    "gas-safety": {
      intro: "Gas safety inspections and certificates for Thornbury's residential and rental properties. Our Gas Safe engineers cover Thornbury, Alveston, Olveston, and surrounding South Gloucestershire villages.",
      commonProblems: ["Annual landlord certificate requirements", "Older gas appliances requiring safety assessment", "Carbon monoxide safety", "Ventilation checks in older properties", "Rural gas supply and LPG systems"],
      process: "We inspect gas appliances and connections, test gas tightness, check ventilation, and issue the gas safety record and CP12 certificate for landlords.",
      localTip: "Some rural properties around Thornbury use LPG rather than mains gas. Our Gas Safe engineers are qualified to work on LPG systems and can provide gas safety inspections for LPG appliances."
    }
  }
};

export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "emergency-plumber": [
    {
      question: "How quickly can you reach {location} for a plumbing emergency?",
      answer: "Our engineers are positioned across Bristol and surrounding areas and typically reach {location} {responseTime}. For emergencies involving burst pipes, flooding, or gas leaks, we prioritise dispatch immediately to minimise property damage."
    },
    {
      question: "What does an emergency plumber callout cost in {location}?",
      answer: "We never charge a call-out fee. Our engineer assesses the situation on arrival and provides a clear fixed-price quote before any work begins. You only pay for completed work. Emergency work costs more than routine repairs due to urgency and parts availability, but we are always transparent about pricing."
    },
    {
      question: "What should I do while waiting for an emergency plumber in {location}?",
      answer: "Turn off your mains water supply at the stopcock — usually under the kitchen sink or near the front door. If water is near electrical outlets or consumer units, turn off electricity at the main fuse board. Contain water with towels and buckets, and move valuables to safety. Keep your phone charged in case our engineer needs to contact you."
    }
  ],
  "boiler-repair": [
    {
      question: "How quickly can you repair a broken boiler in {location}?",
      answer: "Our Gas Safe engineers reach {location} {responseTime} for emergency boiler callouts. Most common boiler faults are resolved in a single visit as we carry frequently needed spare parts on our vehicles."
    },
    {
      question: "Do you charge a call-out fee for boiler repair in {location}?",
      answer: "No. We never charge a call-out fee for boiler repair in {location} or anywhere else across our service area. Your engineer provides a clear fixed quote before any work starts, so you always know exactly what you will pay."
    },
    {
      question: "Can you repair my make and model of boiler in {location}?",
      answer: "Our Gas Safe engineers are trained on all major boiler makes and models including Worcester Bosch, Vaillant, Baxi, Ideal, Potterton, Glow-worm, and Viessmann. We carry common parts for the most frequently serviced models. For unusual makes, we can usually source parts quickly."
    }
  ],
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain in {location}?",
      answer: "Our engineers are based across Bristol and surrounding areas and typically reach {location} {responseTime}. Most blocked drains are cleared within one to two hours of arrival. We carry full jetting and rodding equipment on every vehicle."
    },
    {
      question: "What does drain unblocking cost in {location}?",
      answer: "Most standard drain blockages in {location} are cleared for between £80 and £150 with no call-out fee. We provide a fixed quote before starting work. Complex blockages requiring jetting or CCTV survey may cost more, and we always explain this clearly before proceeding."
    },
    {
      question: "What causes drains to block in {location}?",
      answer: "In {location} we commonly encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible depending on the age of the drainage system and surrounding vegetation."
    }
  ],
  "plumbing-repairs": [
    {
      question: "How quickly can you carry out plumbing repairs in {location}?",
      answer: "We aim to attend {location} properties {responseTime} for emergency plumbing repairs. For non-urgent repairs, we offer flexible booking including morning and afternoon slots. Most repairs are completed in a single visit."
    },
    {
      question: "Do you charge a call-out fee for plumbing repairs in {location}?",
      answer: "No. We never charge a call-out fee. Your engineer assesses the problem and provides a clear fixed quote before any work begins. You only pay for completed work."
    },
    {
      question: "What plumbing repairs do you carry out in {location}?",
      answer: "We carry out all types of plumbing repairs in {location} including tap repair and replacement, toilet repair, pipe joint repairs, shower and bath fitting repairs, cold water tank repairs, and domestic appliance connections. If it involves water in your property, we can help."
    }
  ],
  "central-heating": [
    {
      question: "How quickly can you respond to heating problems in {location}?",
      answer: "Our engineers reach {location} {responseTime} for heating emergencies. A complete boiler breakdown in cold weather is treated as an emergency and dispatched immediately."
    },
    {
      question: "How much does central heating repair cost in {location}?",
      answer: "Central heating repair costs in {location} depend on the specific fault and parts required. We provide a fixed quote before starting any work. Power flushing typically costs £300-£500 for a standard {location} property. Specific component repairs are quoted individually after diagnosis."
    },
    {
      question: "Should I power flush my heating system in {location}?",
      answer: "Power flushing is beneficial for most {location} properties with heating systems more than 10 years old, particularly where radiators have cold areas, the system is noisy, or boiler efficiency has declined. Bristol's moderately hard water contributes to sludge and scale formation, making power flushing more valuable in this area than in soft water regions."
    }
  ],
  "gas-safety": [
    {
      question: "How much does a gas safety inspection cost in {location}?",
      answer: "A gas safety inspection and CP12 certificate for a standard residential property in {location} typically costs between £65 and £90. We provide a fixed quote beforehand. Properties with multiple gas appliances may sit towards the upper end of this range."
    },
    {
      question: "How often do I need a gas safety inspection in {location}?",
      answer: "Landlords in {location} are legally required to have annual gas safety inspections carried out by a Gas Safe registered engineer and to provide tenants with a copy of the certificate. Homeowners are not legally required to have annual inspections but it is strongly recommended for safety."
    },
    {
      question: "What happens during a gas safety inspection in {location}?",
      answer: "Our Gas Safe engineer inspects all gas appliances at the property, checks gas pipework for tightness and condition, verifies adequate ventilation for all gas appliances, and tests each appliance for safe operation. A gas safety record is issued upon satisfactory completion. Any unsafe appliances are identified and appropriate action recommended."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'general plumbing faults')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'aging pipework issues');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}

/**
 * Service How It Works steps (generic, used across all locations)
 */
export const SERVICE_HOW_IT_WORKS: Record<string, Array<{ title: string; description: string }>> = {
  "emergency-plumber": [
    { title: "Call Us Now", description: "Call {location} emergency line any time, 24/7. Describe the situation and we dispatch the nearest engineer immediately." },
    { title: "Engineer En Route", description: "Your engineer heads to your {location} address {responseTime}, fully equipped to handle the reported situation." },
    { title: "Assess and Isolate", description: "On arrival, we assess the emergency, isolate water or gas if required, and contain any immediate damage." },
    { title: "Repair and Test", description: "We carry out the repair using appropriate materials, test the system fully, and advise on any follow-up work needed." }
  ],
  "boiler-repair": [
    { title: "Diagnose the Fault", description: "Our Gas Safe engineer assesses the boiler using specialist diagnostic tools to identify the exact fault." },
    { title: "Clear Quote", description: "We explain the problem in plain English and provide a clear fixed-price quote before any work starts." },
    { title: "Carry Out Repair", description: "We repair the boiler using quality manufacturer-approved parts, testing after each stage." },
    { title: "Full System Test", description: "We test the boiler and heating system fully, check pressures, and verify operation before leaving." }
  ],
  "blocked-drains": [
    { title: "Locate the Blockage", description: "We assess symptoms and use camera equipment where needed to pinpoint the exact blockage location in your {location} property." },
    { title: "Select Method", description: "We choose the most appropriate clearance method — rodding, jetting, or mechanical cutting — for your drain type and blockage." },
    { title: "Clear and Flush", description: "We clear the blockage completely and flush the drain to verify full flow is restored." },
    { title: "Advise and Prevent", description: "We explain what caused the blockage and provide practical advice to reduce the risk of it recurring." }
  ],
  "plumbing-repairs": [
    { title: "Diagnose the Fault", description: "We assess the plumbing fault, check related components, and identify the root cause rather than just the symptom." },
    { title: "Confirm the Cost", description: "We provide a clear fixed-price quote covering the repair before any work begins. No surprises." },
    { title: "Carry Out Repair", description: "We carry out the repair using quality materials appropriate for your property and water system." },
    { title: "Test Thoroughly", description: "We test the repaired fitting or pipe under normal operating conditions before completing the job." }
  ],
  "central-heating": [
    { title: "System Assessment", description: "We inspect the full heating system including boiler, controls, radiators, and pipework to understand the overall condition." },
    { title: "Diagnose the Fault", description: "Using specialist tools, we identify the specific fault causing heating or hot water problems in your {location} property." },
    { title: "Agree the Repair", description: "We explain the fault and repair options clearly, agree on the work, and provide a fixed-price quote." },
    { title: "Repair and Verify", description: "We carry out the agreed repair, run the heating system, and verify all zones are heating correctly before leaving." }
  ],
  "gas-safety": [
    { title: "Inspect Appliances", description: "Our Gas Safe engineer inspects every gas appliance at your {location} property, checking safe operation and condition." },
    { title: "Test Gas Tightness", description: "We test the gas pipework for tightness to identify any leaks or connection weaknesses." },
    { title: "Check Ventilation", description: "We verify adequate ventilation is present for all gas appliances — a legal requirement for safe operation." },
    { title: "Issue Certificate", description: "We issue the gas safety record immediately on satisfactory completion, ready for landlord records or tenant provision." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "emergency-plumber": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Gas Safe registered engineers for all gas-related emergencies",
    "Fully insured and DBS-checked engineers with ID on arrival"
  ],
  "boiler-repair": [
    "Gas Safe registered engineers — legally required for all boiler work",
    "All major makes and models repaired including Worcester Bosch, Vaillant, Baxi",
    "Common spare parts carried on every vehicle for same-visit repairs",
    "Rapid response to {location} {responseTime} including 24/7 emergency callouts"
  ],
  "blocked-drains": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "Full jetting, rodding, and CCTV equipment on every vehicle",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "plumbing-repairs": [
    "Qualified plumbers with comprehensive parts stock for same-visit repairs",
    "Fixed pricing agreed before work starts, with no call-out fee",
    "Rapid attendance at {location} properties {responseTime}",
    "Experience with all property types from Victorian terraces to modern apartments"
  ],
  "central-heating": [
    "Heating engineers experienced with all system types from gravity-fed to modern sealed",
    "Power flushing and inhibitor treatment to extend system life",
    "Rapid response to {location} properties {responseTime} for heating emergencies",
    "Honest assessment of repair versus replacement to help you make the right decision"
  ],
  "gas-safety": [
    "Gas Safe registered engineers — the legal requirement for all gas work in the UK",
    "CP12 landlord gas safety certificates issued immediately on completion",
    "Annual scheduling reminders for landlord portfolio management",
    "Experience with all gas appliance types from modern boilers to older gas fires"
  ]
};
