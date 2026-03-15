/**
 * Location hub page content: Plumbing profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  bristol: {
    landmarks: [
      "Clifton Suspension Bridge",
      "Cabot Tower",
      "Bristol Cathedral",
      "SS Great Britain",
      "Arnolfini",
      "St Nicholas Market",
      "Harbourside",
      "Bristol Museum and Art Gallery",
      "Wills Memorial Building",
      "Broadmead Shopping Centre",
      "College Green",
      "King Street",
      "Banksy murals, Stokes Croft",
      "The Old Vic Theatre",
      "Bristol Zoo Gardens"
    ],
    drainageProfile: `Bristol's plumbing and drainage landscape reflects a city that has grown across centuries of development, from its medieval port origins through Georgian and Victorian expansion to the modern city of today. The city's varied topography — with the Avon Gorge, the Floating Harbour, and hillside neighbourhoods rising steeply from the centre — creates distinctive plumbing challenges across different areas.

The oldest parts of Bristol, particularly around the city centre, Redcliffe, and Clifton, have Victorian and Edwardian infrastructure that is now well over a century old. Lead pipes and early copper systems remain in some older properties, presenting safety considerations alongside maintenance challenges. The grand Victorian and Georgian terraces of Clifton, Redland, and Cotham have deep drainage systems designed for a different era of water use, and many have been converted into flats whose drainage load far exceeds the original design.

Bristol's geology is varied and influences both ground conditions and water chemistry. The Carboniferous limestone that underlies much of north Bristol and the Mendips contributes to moderate water hardness — scale buildup in boilers, pipes, and appliances is a genuine concern for Bristol homeowners. Areas overlying softer geology closer to the River Avon and its tributaries experience different ground movement patterns that can affect pipe stability over time.

The River Avon and its tidal behaviour through Bristol creates specific considerations for properties near the waterfront. The Floating Harbour, created in 1809 by diverting the Avon and building lock gates, means the central docklands area has high water table conditions. Basement properties and those close to the Harbour are more vulnerable to drainage backup during tidal surges and heavy rainfall.

Bristol's hills create dramatic pressure differentials in both mains water supply and drainage. Properties at higher elevations — Clifton, Redland, Horfield — may experience lower mains water pressure than those at lower levels. Conversely, the steep gradients mean drainage flows fast, which can exacerbate scouring in older clay pipes.

The city's ambitious housing development over recent decades has brought modern plumbing standards to new areas, but the transition zones where new developments meet Victorian infrastructure can create unexpected complications. Our engineers understand Bristol's complex mix of old and new, and bring the specialist knowledge needed to work effectively across the full range of property types found throughout the city.`,
    localFAQs: [
      {
        question: "Why do Bristol's older properties have more plumbing problems?",
        answer: "Bristol has a large stock of Victorian and Edwardian properties, particularly in areas like Clifton, Redland, Bedminster, and Totterdown. Many of these homes still have original or early-replacement plumbing infrastructure — lead or early copper supply pipes, cast iron soil stacks, and clay drainage — that is now well over a century old. Modern water usage patterns, with multiple bathrooms and high-use appliances, place far greater demand on systems designed for a fraction of that load. Conversion of large houses into flats multiplies the stress on shared infrastructure considerably."
      },
      {
        question: "Does Bristol's hard water cause plumbing damage?",
        answer: "Bristol has moderately hard water, drawing on sources that include Mendip limestone catchments. This results in gradual limescale buildup inside boiler heat exchangers, hot water cylinders, pipes, and appliances. Over time, scale reduces efficiency and causes premature wear — particularly in boilers. Annual boiler servicing and the addition of scale inhibitors to heating systems are the most cost-effective preventative measures. Power flushing can remove scale and sludge from established systems."
      },
      {
        question: "What should Bristol property owners do about flooding risk near the Harbour?",
        answer: "Properties near Bristol's Floating Harbour and the River Avon tidal areas face elevated groundwater conditions and occasional drainage backup risk during tidal surges combined with heavy rainfall. Internal backflow valves on ground-floor drains provide protection against sewage backing up into properties. Regular maintenance of external gullies and inspection chambers helps prevent localised flooding from simple blockages. For properties that repeatedly experience flooding, a drainage survey can identify whether structural improvements such as non-return valves are appropriate."
      },
      {
        question: "How does Bristol's hilly topography affect plumbing?",
        answer: "Bristol's hills affect plumbing in two main ways. First, properties at higher elevations — Clifton, Redland, Horfield — may experience lower mains water pressure than flatter areas, which can affect shower performance and appliance operation. Pressure-boosting pumps can resolve this. Second, steep drainage gradients cause water to flow fast through pipes, which can scour older clay drainage and accelerate joint wear. Downhill properties may experience drainage problems if upstream connections fail or blockages develop on the slope above."
      }
    ],
    caseStudy: `Emergency call-out to a converted Victorian townhouse in Clifton: The property had been divided into four flats, and all residents reported cold radiators and reduced hot water pressure simultaneously. Our engineer traced the problem to a combination of severe sludge accumulation in the shared central heating system — common in multi-unit conversions that have never had system maintenance — and a partially blocked hot water distribution pipe caused by years of limescale buildup. Bristol's moderately hard water had contributed to gradual scale deposition that was now significantly restricting flow. We carried out a full power flush of the heating system, added inhibitor chemical to prevent further corrosion and sludge formation, and descaled the hot water pipe section. The result was immediate: full heat output from all radiators across all four flats and restored hot water pressure. Tip: Victorian terraces converted to flats in Clifton, Redland, and Cotham often have decades of accumulated sludge and scale in shared heating systems. A power flush every five to seven years is genuinely cost-effective maintenance that prevents expensive emergency repairs.`
  },

  bath: {
    landmarks: [
      "Roman Baths",
      "Bath Abbey",
      "The Circus",
      "Royal Crescent",
      "Pulteney Bridge",
      "Bath Assembly Rooms",
      "Prior Park",
      "Thermae Bath Spa",
      "Victoria Art Gallery",
      "Parade Gardens",
      "Great Pulteney Street",
      "Holburne Museum"
    ],
    drainageProfile: `Bath's status as a UNESCO World Heritage Site sets it apart from any other city in the region. Its extraordinarily well-preserved Georgian architecture — the Circus, the Royal Crescent, the terraces, the townhouses — represents plumbing challenges unique in England. These Grade I and Grade II listed buildings require specialist knowledge and careful workmanship to maintain, with planning constraints governing what can be changed and how.

The Georgian terraces and townhouses of Bath were built with lead pipe supply systems and early drainage infrastructure that dates from the 18th and early 19th centuries. Much has been replaced over the years, but some original fabric remains, particularly in cellar and basement areas. The dramatic change in elevation across Bath — from the low-lying areas near the River Avon to the high Georgian crescents — creates significant water pressure variation and complex drainage routing.

Bath's geology is primarily Jurassic limestone — the famous Bath stone used in all the city's great buildings. This highly permeable limestone allows rainfall to percolate rapidly through the ground, contributing to the natural springs that made Bath famous. The same geology means groundwater levels can be elevated in some areas, particularly those close to the river valley floor.

The River Avon winds through the centre of Bath, and properties near the river — Bathwick, the Recreation Ground area, Widcombe — face genuine flood risk. The 2012 and 2014 floods demonstrated that Bath's drainage can be overwhelmed during exceptional rainfall events.

Bath's hard water — drawing heavily from limestone aquifers — is among the hardest in the Bristol area. Limescale is a significant concern for all plumbing and heating equipment, making annual servicing and system treatment particularly important.`,
    localFAQs: [
      {
        question: "Do you work on listed buildings in Bath?",
        answer: "Yes. Our engineers have experience working within the constraints that apply to Bath's many listed properties. We understand the need for like-for-like material replacement where possible, minimal invasive work, and the importance of liaising with Bath and North East Somerset Council where planning consent may be needed for certain works."
      },
      {
        question: "Is Bath's water particularly hard?",
        answer: "Yes. Bath draws substantially on limestone aquifer sources, resulting in among the highest water hardness levels in the region. Annual boiler servicing is strongly recommended, along with the use of scale inhibitors in heating systems and consideration of water softeners for properties where limescale is causing significant problems."
      },
      {
        question: "How quickly can you reach Bath for an emergency?",
        answer: "Bath is within our core service area and our engineers typically reach Bath properties within 60 to 90 minutes of an emergency call. For locations in the city centre and the main residential areas, response is usually faster."
      }
    ],
    caseStudy: `Callout to a Georgian townhouse in Bath's Lansdown area: The homeowner reported a complete loss of central heating in winter. Our engineer traced the problem to a failed central heating pump that had been unable to circulate system water through a heavily sludged system. Years of hard water and no system maintenance had created substantial magnetite sludge accumulation. We replaced the pump and carried out a full power flush before recommencing circulation, which also restored full heat output to previously cold radiators. Result: fully restored heating and a system protected against early failure. Tip: Bath property owners should treat hard water seriously — annual boiler servicing and inhibitor maintenance prevents the expensive failures that soft-started with scale and sludge.`
  },

  clifton: {
    landmarks: [
      "Clifton Suspension Bridge",
      "Clifton Village",
      "Clifton Down",
      "Bristol Zoo Gardens",
      "The Mall, Clifton",
      "Clifton Cathedral",
      "The Avon Gorge",
      "Whiteladies Road",
      "Clifton College"
    ],
    drainageProfile: `Clifton occupies the high limestone ridge above the Avon Gorge, and its position creates distinctive plumbing and drainage characteristics. The area's grand Victorian and Georgian townhouses — many now converted into flats, student accommodation, and offices — have complex shared drainage systems that require careful management. The steep streets dropping toward the gorge mean drainage gradients are severe in places, and surface water can rush downhill rapidly during heavy rain.

Clifton's elevated position means lower mains water pressure is common in some streets, particularly those at the top of the hill. This can affect shower performance and appliance operation. The limestone geology beneath Clifton contributes to hard water and associated scale buildup in plumbing systems.

The area's large Victorian and Edwardian properties have been subjected to successive modifications over decades — bathroom additions, kitchen extensions, loft conversions — each adding drainage load to systems originally designed for far simpler use. The result is often complex, non-standard drainage routes that require CCTV survey to properly understand before any repair work.`,
    localFAQs: [
      {
        question: "Does Clifton have lower water pressure than other parts of Bristol?",
        answer: "Clifton's elevated position means some properties, particularly those at the top of the hill on Clifton Down and the higher streets, experience lower mains water pressure. Shower pumps and pressure-boosting systems can resolve low pressure issues, and our engineers can assess your specific situation."
      },
      {
        question: "Why do so many Clifton properties have plumbing problems?",
        answer: "Clifton's large Victorian and Georgian houses have been converted and modified repeatedly over 150 years. Each modification has added to the drainage load and complexity without always upgrading the underlying infrastructure. Many properties have drainage routes that no longer make logical sense without a survey. The age of the original pipework, combined with the modifications, creates multiple potential failure points."
      },
      {
        question: "How quickly can you respond to emergencies in Clifton?",
        answer: "Clifton is within our core Bristol service area and our engineers typically arrive within 60 minutes for emergencies. We operate 24 hours a day, 7 days a week."
      }
    ],
    caseStudy: `Call-out to a converted Victorian townhouse on Victoria Square, Clifton: Four flats sharing drainage from a five-storey property began experiencing backup simultaneously. Our CCTV survey revealed the main discharge stack had a near-complete blockage caused by fat and wet-wipe accumulation, compounded by a displaced joint at cellar level where ground movement had stepped the pipe. We cleared the blockage using high-pressure jetting and repaired the displaced joint using no-dig relining to avoid disrupting the basement. Tip: Converted Clifton townhouses sharing a single drainage stack need at least biennial inspections — one household's habits affect all occupants.`
  },

  bedminster: {
    landmarks: [
      "North Street",
      "Tobacco Factory",
      "Windmill Hill",
      "Totterdown",
      "East Street",
      "Bedminster Parade",
      "Victoria Park",
      "Chessel Street"
    ],
    drainageProfile: `Bedminster, south of Bristol city centre across the New Cut, is a working-class community with strong character and a diverse housing mix. Victorian terraces line the steep streets of Windmill Hill and Totterdown, while post-war housing and more recent regeneration projects have added variety. The area sits at a lower elevation than Clifton and Redland, and proximity to the New Cut — the artificial channel created to divert the Avon — means some streets have elevated groundwater conditions.

The Victorian terraces of Bedminster and Totterdown were built to house working families connected to the city's industrial economy. Their drainage systems — clay pipes now over a century old — serve properties that have been modified many times over the decades. The shared drainage in terraced rows means a problem in one property can quickly affect neighbours.`,
    localFAQs: [
      {
        question: "Are Bedminster's Victorian terraces prone to drainage problems?",
        answer: "Yes. The Victorian terraces of Bedminster and Totterdown have clay drainage systems over a century old that were designed for much lighter use than modern households demand. Shared drainage in terraced rows means a blockage in one property can affect neighbours. Regular inspection and prompt attention to slow drainage helps prevent serious shared drainage problems."
      },
      {
        question: "Is flooding a risk in Bedminster?",
        answer: "Parts of Bedminster near the New Cut have historically experienced flooding during exceptional rainfall combined with high tidal conditions. Properties at the lowest points of Bedminster are most at risk. Internal non-return valves can prevent drainage backup. Our engineers can advise on appropriate protective measures."
      },
      {
        question: "How quickly can you reach Bedminster?",
        answer: "Bedminster is very close to Bristol city centre and our engineers typically arrive within 45-60 minutes for emergency callouts. We cover the whole area including Totterdown, Windmill Hill, and Southville."
      }
    ],
    caseStudy: `Callout to a Victorian terrace on Windmill Hill: The homeowner reported a completely blocked external drain causing water to back up into the back yard. Our inspection revealed a combination of fat and debris accumulation over several years, compounded by a partial root intrusion from a garden tree adjacent to the drain run. We cleared the blockage using jetting and applied a targeted root treatment to inhibit regrowth. We also advised the homeowner that the root intrusion had caused a small joint displacement visible on our inspection camera, which will need monitoring and may require relining in the coming years. Tip: Bedminster gardens often have large established trees close to drain runs. Annual external drain inspection catches root problems early, before they cause serious damage.`
  },

  redland: {
    landmarks: [
      "Redland Park",
      "Redland Court",
      "Cotham Hill",
      "Redland Road",
      "Whiteladies Road",
      "St Bonaventure's Church",
      "Redland Station"
    ],
    drainageProfile: `Redland is one of Bristol's most desirable residential areas, characterised by large Victorian and Edwardian houses on tree-lined streets. The density of mature trees — many of them well over a century old — creates a distinctive green character, but also presents a significant challenge for underground drainage. Root intrusion into clay drain pipes is among the most common plumbing problems we encounter in Redland.

The large family homes of Redland have, in many cases, been converted into flats, adding multiple independent kitchens and bathrooms to drainage systems designed for single-family use. The combination of increased drainage load, ageing clay infrastructure, and pervasive root systems creates a challenging maintenance environment.`,
    localFAQs: [
      {
        question: "Why is tree root intrusion so common in Redland?",
        answer: "Redland's streets are lined with mature trees, many planted at the same time as the Victorian houses in the late 19th century. These trees now have extensive root systems that seek moisture wherever they can find it — including through tiny cracks and joint gaps in clay drain pipes. Root intrusion is the most common cause of recurring drain blockages and pipe damage we see in Redland. Properties with large trees near drain runs should have annual CCTV inspections."
      },
      {
        question: "Do converted Redland flats have drainage problems?",
        answer: "Yes. Redland's large Victorian houses converted into flats have drainage systems designed for a single family now serving multiple independent households. The additional kitchens, bathrooms, and washing machines place far greater load on clay pipes that may be over a century old. Shared drainage disputes between flat owners are also common. A CCTV survey clarifies drain routes and responsibility before problems arise."
      },
      {
        question: "How quickly can you reach Redland for an emergency?",
        answer: "Redland is within our core Bristol service area and our engineers typically arrive within 45-60 minutes for emergency callouts. We provide 24/7 emergency plumbing across Redland and the surrounding area."
      }
    ],
    caseStudy: `Call-out to a converted Victorian house on Redland Road: All four flats were experiencing slow drainage. Our CCTV survey found extensive root ingress from a large lime tree growing in the front garden — roots had penetrated the clay main drain at three separate points over a 12-metre section, reducing the pipe bore by approximately 60%. We cleared the roots using high-pressure jetting with a root-cutting nozzle, then applied a targeted root inhibitor. Given the severity of the intrusion and the frequency of recurrence, we recommended pipe relining as the long-term solution to restore pipe integrity. Tip: Properties near large street trees in Redland should budget for annual drain inspections and plan for pipe relining within five to ten years as preventative maintenance.`
  },

  horfield: {
    landmarks: [
      "Horfield Common",
      "Memorial Ground",
      "Filton Avenue",
      "Muller Road",
      "Horfield Prison",
      "Horfield Baptist Church"
    ],
    drainageProfile: `Horfield is a well-established residential suburb of north Bristol, characterised by a mix of inter-war semi-detached houses, post-war estates, and Victorian terraces. The area sits at a moderate elevation north of the city centre, with good natural drainage gradients toward the River Frome valley. Plumbing infrastructure in Horfield varies considerably by property age — inter-war semis often have original galvanised steel pipework that is now well past its expected lifespan, while post-war properties typically have early copper systems that may also require attention.`,
    localFAQs: [
      {
        question: "What plumbing problems are common in Horfield's inter-war housing?",
        answer: "Horfield's inter-war semi-detached houses often retain original galvanised steel supply pipes that are now corroding from the inside. This causes discoloured water, reduced pressure, and eventual pipe failure. Replacing galvanised steel with modern copper or plastic pipework is strongly recommended for these properties. Boilers in inter-war semis are also often approaching or past the end of their effective lifespan."
      },
      {
        question: "How quickly can you reach Horfield?",
        answer: "Horfield is in north Bristol and our engineers typically reach Horfield properties within 45-60 minutes for emergency callouts. We cover the whole area including Bishopston, Lockleaze, and the Memorial Ground area."
      },
      {
        question: "Do you service boilers in Horfield?",
        answer: "Yes. We provide annual boiler servicing, emergency boiler repair, and boiler replacement across Horfield and the surrounding areas. All gas work is carried out by Gas Safe registered engineers."
      }
    ],
    caseStudy: `Callout to an inter-war semi-detached house on Muller Road: The homeowner reported severely discoloured water and low pressure throughout the property. Our assessment revealed the original galvanised steel supply pipes were corroding heavily, with internal scale and rust reducing the bore of the main supply pipe to a fraction of its original diameter. We replaced the affected pipework sections with modern copper pipe, restoring full flow and clear water. The homeowner also took the opportunity to upgrade the cold water storage tank in the loft, which had been contributing to contamination. Result: clean water, full pressure, and a property that complies with modern water quality standards. Tip: Horfield's inter-war semis should have a plumbing survey to check galvanised steel pipe condition — discoloured or rusty water is a sign the pipework needs replacement.`
  },

  filton: {
    landmarks: [
      "Aerospace Bristol Museum",
      "Cribbs Causeway",
      "Filton Abbey Wood Station",
      "Filton Golf Club",
      "North Bristol NHS Trust (Southmead Hospital)",
      "The Mall at Cribbs Causeway"
    ],
    drainageProfile: `Filton, north of Bristol and closely associated with the aerospace and defence industries, is a mixed area of established residential neighbourhoods and commercial development. Housing ranges from post-war social housing and private estates to more recent new-build developments around the former Filton Airfield site. The area's flat to gently sloping terrain means drainage gradients are more moderate than in hillier parts of Bristol, which can lead to slower flows and greater sedimentation in horizontal drain runs.`,
    localFAQs: [
      {
        question: "What plumbing issues are common in Filton's post-war housing?",
        answer: "Post-war housing in Filton often has early copper supply pipework and cast iron drainage that is now reaching the end of its lifespan. Some properties from the 1960s and 1970s have pitch fibre drain pipes — a material that degrades over time and can collapse or deform, causing persistent drainage problems. A CCTV survey identifies whether pitch fibre is present and its current condition."
      },
      {
        question: "Do you cover new-build properties in Filton?",
        answer: "Yes. We provide plumbing and heating services to all property types in Filton, including new-build properties on the Brabazon development and elsewhere. New-build warranty periods cover builder defects, but our engineers can assist with all maintenance and repair work outside of warranty."
      },
      {
        question: "How quickly can you reach Filton?",
        answer: "Filton is in north Bristol and our engineers typically reach Filton properties within 45-60 minutes for emergency callouts. We also cover Bradley Stoke, Stoke Gifford, and the surrounding area."
      }
    ],
    caseStudy: `Callout to a 1970s detached house in Filton: The homeowner had experienced recurring blocked drains despite multiple clearance visits from a previous contractor. Our CCTV survey revealed the cause — a section of pitch fibre pipe from the original construction had deformed into an oval cross-section, creating a low point that trapped debris. Each clearance had resolved the immediate blockage but could not address the underlying structural failure. We relined the affected section using a cured-in-place liner, restoring a circular cross-section and eliminating the trap that had caused recurring problems. Tip: Persistent recurring blockages in 1960s and 1970s Filton properties should trigger a CCTV survey — pitch fibre pipe failure is frequently the hidden cause.`
  },

  kingswood: {
    landmarks: [
      "Kingswood Heritage Museum",
      "Regent Street, Kingswood",
      "Two Mile Hill",
      "Warmley",
      "St George",
      "Staple Hill"
    ],
    drainageProfile: `Kingswood, in South Gloucestershire to the east of Bristol, is a large suburban area that has grown considerably over the past century. It encompasses a wide range of housing from Victorian terraces in the older town centre to large post-war council estates and more recent private developments. The area sits on the edge of the Bristol coalfield, and some older parts of Kingswood were formerly connected to coal mining activity, which can affect ground conditions and pipe stability in certain locations.`,
    localFAQs: [
      {
        question: "Does Kingswood's mining history affect plumbing?",
        answer: "The older parts of Kingswood and surrounding areas have a legacy of coal mining. Historic mining subsidence can cause ground movement that stresses drain pipes, leading to joint displacement and cracking. If your property is in an area with former mining activity and you have recurring drainage problems, a CCTV survey is worth commissioning to check for ground movement-related pipe damage."
      },
      {
        question: "What plumbing services do you provide in Kingswood?",
        answer: "We provide the full range of plumbing and heating services in Kingswood, including emergency callouts, boiler repair and servicing, blocked drain clearance, central heating repairs, and gas safety inspections. We cover Kingswood, Warmley, Staple Hill, and the surrounding areas."
      },
      {
        question: "How quickly can you reach Kingswood?",
        answer: "Kingswood is within our service area east of Bristol. Our engineers typically arrive within 60-75 minutes for emergency callouts from central Bristol, though response from nearer engineers may be faster."
      }
    ],
    caseStudy: `Callout to a post-war semi-detached property in Kingswood: The homeowner reported that the boiler was making a loud kettling noise and heating was taking much longer than usual to warm rooms. Our engineer diagnosed severe scale buildup in the boiler heat exchanger, consistent with years of operation in hard water without system treatment. We serviced the boiler, carried out a power flush of the heating system to remove sludge and scale deposits, and added inhibitor chemical. We also fitted a magnetic filter to capture circulating debris going forward. Result: quieter boiler operation, faster heat-up times, and a system protected against future sludge accumulation. Tip: Kingswood homeowners should have boilers serviced annually and system inhibitor checked — scale and sludge problems are common throughout the Bristol area's moderately hard water zone.`
  },

  portishead: {
    landmarks: [
      "Portishead Marina",
      "Lake Grounds",
      "Battery Point",
      "Portishead Pier",
      "Nore Road",
      "Portishead Open Air Pool",
      "Portishead Station (future)"
    ],
    drainageProfile: `Portishead, on the Severn Estuary west of Bristol, has grown dramatically from a small Victorian seaside town to a substantial modern residential community. The marina development in the 1990s and subsequent housing growth have added thousands of new homes, creating a dual character of older Victorian housing near the original town centre and extensive modern development around the marina and Lake Grounds.

Portishead's coastal position means ground conditions near the waterfront are influenced by tidal patterns and elevated water table conditions. The estuarine geography creates drainage challenges for lower-lying properties. Older properties near the original High Street have Victorian-era infrastructure, while the marina development has modern drainage systems that are now approaching a quarter century in age and beginning to show maintenance needs.`,
    localFAQs: [
      {
        question: "Are Portishead marina properties prone to drainage problems?",
        answer: "Portishead's marina developments are built on reclaimed land with high water table conditions, which affects drainage performance. As these properties approach 25-30 years of age, drainage systems require increasing maintenance. We provide regular inspections, jetting, and repair services for marina properties throughout Portishead."
      },
      {
        question: "Do you cover Portishead for emergency callouts?",
        answer: "Yes. Portishead is within our service area and our engineers typically arrive within 60-90 minutes for emergency callouts. We cover the whole of Portishead including the marina, Lake Grounds, and the older town centre areas."
      },
      {
        question: "What plumbing issues affect older Portishead properties?",
        answer: "Older properties in Portishead's original town centre have Victorian-era drainage and supply pipework that requires specialist attention. The coastal environment can accelerate corrosion of metal components. Regular inspection and proactive maintenance help identify problems before they become emergencies."
      }
    ],
    caseStudy: `Callout to a marina apartment in Portishead: The property owner reported persistent slow drainage from all bathroom fixtures. Our CCTV survey identified a partial blockage in the communal drainage stack shared by several apartments, combined with a section of pipe that had sagged over the years, creating a trap that accumulated debris. We cleared the blockage and advised the residents management committee on the pipe sag, which will require monitoring and may need addressing through relining in the coming years. Result: restored drainage for all affected apartments. Tip: Marina apartment blocks in Portishead should commission drainage surveys every three to five years — communal systems serving multiple units need regular inspection to catch developing problems before they affect all residents.`
  },

  clevedon: {
    landmarks: [
      "Clevedon Pier",
      "Clevedon Court",
      "Salthouse Fields",
      "The Triangle, Clevedon",
      "Church Hill",
      "Old Street",
      "Marine Lake"
    ],
    drainageProfile: `Clevedon, a Victorian seaside town on the Somerset coast south of Bristol, retains much of its original character. The grand Victorian pier — one of the finest surviving examples in England — is symbolic of a town that was developed as a genteel resort in the 19th century. The Victorian and Edwardian housing that characterises much of the older town has plumbing infrastructure of corresponding age, requiring careful maintenance and sympathetic repair.

Clevedon's coastal position and relatively flat town centre create drainage challenges related to the proximity to tidal water. Properties near Marine Lake and the lower seafront area have elevated groundwater conditions. The town's older properties have clay drainage systems that are now between 100 and 150 years old.`,
    localFAQs: [
      {
        question: "What plumbing issues affect Clevedon's Victorian properties?",
        answer: "Clevedon's older Victorian and Edwardian housing has clay drainage and lead or early copper supply pipework that is now very old. The coastal environment can accelerate corrosion. Common issues include cracked clay drainage pipes, displaced joints, and scale buildup in supply pipes. Annual maintenance and proactive replacement of aging pipework prevents emergency situations."
      },
      {
        question: "How quickly can you reach Clevedon?",
        answer: "Clevedon is within our Somerset and North Somerset service area, approximately 30 minutes from central Bristol. Our engineers typically arrive within 60-90 minutes for emergency callouts from Bristol."
      },
      {
        question: "Do you provide gas safety inspections in Clevedon?",
        answer: "Yes. Our Gas Safe registered engineers provide annual gas safety inspections, landlord certificates, and boiler servicing throughout Clevedon and the surrounding North Somerset area."
      }
    ],
    caseStudy: `Callout to a Victorian terraced property in Old Street, Clevedon: The owner reported a persistent damp patch on a ground-floor wall adjacent to the external drain run. Our CCTV survey revealed a crack in the clay drain pipe at this point, allowing groundwater to enter during wet weather and drain water to escape into the surrounding soil. The soil saturation was causing damp to wick into the property wall. We repaired the crack using no-dig pipe relining, sealed from inside without excavation. The wall dried out over the following weeks. Tip: In Clevedon's older Victorian properties, unexplained wall damp near drain runs should prompt a CCTV drain survey — cracked clay pipes are a common hidden cause.`
  },

  nailsea: {
    landmarks: [
      "Nailsea and Backwell Station",
      "Nailsea Court",
      "Stockway North",
      "Backwell",
      "Tickenham",
      "Nailsea Town Centre"
    ],
    drainageProfile: `Nailsea is a North Somerset market town that has grown substantially from its historic core through large-scale residential development since the 1960s. The original town centre has older properties with traditional drainage infrastructure, while the extensive housing estates that surround it — much of which was developed in the 1970s, 1980s, and 1990s — have drainage systems that are now reaching a maintenance-intensive phase of their lifespan.

Nailsea's position in the North Somerset levels means the water table is relatively high in some areas, and drainage performance can be affected during prolonged wet periods. The town draws its name from the nailmaking industry of earlier centuries, and some areas have legacy ground conditions from historical industrial activity.`,
    localFAQs: [
      {
        question: "What plumbing problems affect Nailsea's 1970s and 1980s housing?",
        answer: "Nailsea has a large stock of housing built in the 1970s and 1980s. Properties of this era may have pitch fibre drainage — a material that deforms and collapses over time — as well as early plastic supply pipes that have become brittle with age. Boilers installed in the 1990s and early 2000s are also now approaching or past their expected lifespan. A plumbing survey helps identify what needs attention before failures occur."
      },
      {
        question: "How quickly can you reach Nailsea for an emergency?",
        answer: "Nailsea is in North Somerset, approximately 30-40 minutes from central Bristol. Our engineers typically arrive within 60-90 minutes for emergency callouts. We cover Nailsea, Backwell, Tickenham, and the surrounding villages."
      },
      {
        question: "Do you carry out boiler servicing in Nailsea?",
        answer: "Yes. We provide annual boiler servicing, emergency repair, and replacement services across Nailsea and North Somerset. All gas work is carried out by Gas Safe registered engineers."
      }
    ],
    caseStudy: `Callout to a 1980s detached house in Nailsea: The homeowners had noticed one radiator that was always cold and a boiler that seemed to cycle on and off more frequently than before. Our engineer traced both problems to a faulty thermostatic radiator valve on the cold radiator and a heavily sludged system that was restricting circulation and causing the boiler to overheat. We replaced the TRV, carried out a power flush, and added system inhibitor. The cold radiator began heating normally and the boiler stopped cycling excessively. Tip: 1980s and 1990s Nailsea properties with original heating systems may have developing circulation problems — cold radiators and boiler short-cycling are early warning signs that a power flush is needed.`
  },

  thornbury: {
    landmarks: [
      "Thornbury Castle",
      "Thornbury High Street",
      "Mundy Playing Fields",
      "St Mary the Virgin Church",
      "Thornbury Golf Centre",
      "Morton Way"
    ],
    drainageProfile: `Thornbury is a historic market town in South Gloucestershire north of Bristol, with a well-preserved Tudor centre including the famous Thornbury Castle. The older town centre has properties dating from the 16th century onward, presenting some of the most complex and historically sensitive plumbing challenges in our service area. The extensive modern housing developments that surround the historic core — much of which was built in the 1970s, 1980s, and since the 1990s — present more contemporary maintenance needs.

Thornbury's position on a gentle ridge in South Gloucestershire provides good natural drainage gradients. The agricultural hinterland means some areas have ground conditions affected by agricultural drainage, and the town's proximity to the Severn estuary means tidal weather patterns can influence rainfall intensity and drainage demand.`,
    localFAQs: [
      {
        question: "Do you work on historic properties in Thornbury?",
        answer: "Yes. We have experience working on Thornbury's older buildings, including properties with historic fabric that requires careful handling. For listed buildings, we are mindful of the need for appropriate materials and techniques, and we can advise on when planning consent may be needed for certain works."
      },
      {
        question: "What plumbing services do you offer in Thornbury?",
        answer: "We provide the full range of plumbing and heating services in Thornbury, including emergency callouts, boiler repair and servicing, blocked drain clearance, central heating repairs, gas safety inspections, and general plumbing repairs. We cover Thornbury, Alveston, Olveston, and the surrounding South Gloucestershire villages."
      },
      {
        question: "How quickly can you reach Thornbury?",
        answer: "Thornbury is north of Bristol in South Gloucestershire. Our engineers typically arrive within 60-90 minutes for emergency callouts. We cover Thornbury and the surrounding area as part of our core Bristol and South Gloucestershire service zone."
      }
    ],
    caseStudy: `Callout to a 1990s detached property in Morton Way, Thornbury: The homeowners reported a boiler that had stopped working entirely overnight. Our Gas Safe engineer diagnosed a failed diverter valve — a component that directs hot water between the heating circuit and hot water cylinder — as the cause of the shutdown. We replaced the diverter valve and carried out a full boiler service, also identifying that the boiler's pressure had been dropping gradually, indicating a small leak in the system that we located and repaired. Result: restored heating and hot water with a fully serviced system. Tip: Thornbury homeowners with 1990s combi boilers should expect diverter valve wear after 20-25 years of operation — annual servicing catches developing faults before they cause a complete breakdown.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
