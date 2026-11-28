/* =====================================================================
   ACHYUT'S PORTFOLIO — EDIT THIS FILE TO UPDATE THE WEBSITE
   ---------------------------------------------------------------------
   HOW IT'S ORGANIZED
   • sections  → big topics in the left timeline (Robotics now; add more later,
                 e.g. "Tennis" or "Academics", by copying the whole block).
   • phases    → the school stages inside a section (Elementary, Middle, High).
   • items     → the steps of the journey inside a phase. Each item becomes
                 a card that opens when clicked. Add as many as you like.

   EVERYDAY UPDATES
   • Change any text between the quotes "like this".
   • Photo: put the image in the "photos" folder, then add inside photos: [ ]
       { src: "photos/my-robot.jpg", caption: "What this shows" },
   • Award: inside awards: [ ] add
       { name: "Award name", event: "Event name", year: "2026" },
     No awards for a step? Write  awards: false  to hide the awards line.
   • New step: copy one whole item { ... }, paste it into the right phase,
     and give it a new id (letters, numbers and dashes only).
   • "How I designed it": fill in design: { ... }. Delete that line for a
     year with no design story. For a year designed with sketches instead of
     CAD, add  cad: false  inside design: { } (see Season 1).
   • Keep the commas between items. Save, then re-upload the site.
   ===================================================================== */

window.SITE = {
  name: "Achyut Karthikeyan",
  headline: "From Duplo blocks to robots that solve real problems.",
  intro: "I started stacking Duplo at age 3. Every year since, the builds got smaller in parts and bigger in ideas: LEGO, FLL, VEX, FRC, and finally Ball Boy, a robot I designed for my own tennis practice.",
  heroPhoto: "",
  contactEmail: "",
  next: "Add what's next: the next season, a new build, or what you want to study.",

  sections: [
    {
      id: "robotics",
      title: "Robotics",
      phases: [

        /* ---------------- ELEMENTARY ---------------- */
        {
          id: "elementary", title: "Elementary school", years: "Age 3 – Grade 5",
          intro: "Where the curiosity started: blocks, bricks and a first robotics team.",
          items: [
            {
              id: "duplo", type: "duplo", stage: "Duplo", era: "Age 3",
              title: "Where it started: Duplo",
              roles: ["Builder"], game: "",
              built: "Towers, houses, trains and anything else I could imagine, usually taller than I was.",
              enjoyed: "Making something new out of the same pile of blocks every single day.",
              learned: ["A wide base keeps a tower standing", "When something falls, rebuild it better"],
              photos: [], awards: false
            },
            {
              id: "lego", type: "lego", stage: "LEGO", era: "Add grades",
              title: "LEGO: smaller bricks, bigger ideas",
              roles: ["Designer", "Builder"], game: "",
              built: "Sets at first, then my own creations: vehicles, machines and builds with gears and moving parts.",
              enjoyed: "Putting the instructions away and inventing my own designs.",
              learned: ["How gears change speed and strength", "Planning a build before starting", "Patience with big projects"],
              photos: [], awards: false
            },
            {
              id: "fll", type: "fll", stage: "FLL", era: "Add grade",
              title: "My first robotics team: FIRST LEGO League",
              roles: ["Team member"], game: "Add season / challenge name",
              built: "My first competition robot, built from LEGO with a team, to complete missions on the challenge table.",
              enjoyed: "The moment something I helped build ran its missions on the table at competition.",
              learned: ["Motors, sensors and how robots are programmed", "My first lines of robot code", "Working as part of a team"],
              photos: [], awards: false
            }
          ]
        },

        /* ---------------- MIDDLE ---------------- */
        {
          id: "middle", title: "Middle school", years: "Grades 6 – 8",
          intro: "Three VEX V5 Robotics Competition seasons: from building the hardware to leading the team.",
          items: [
            {
              id: "vex-ms-1", type: "vex", stage: "VEX V5", era: "Season 1 · 2021–22",
              title: "First year in VEX: learning the basics",
              roles: ["Hardware", "Drivetrain"], game: "Tipping Point (VEX V5 Robotics Competition)",
              built: "In my first VEX season I learned all the basic mechanisms and focused on the drivetrain, building several iterations in different configurations. The game was Tipping Point, where robots score rings, move mobile goals into their zone and balance on a platform at the end of the match.",
              enjoyed: "Our team qualified for the National Championship and the VEX Worlds Championship. It was my first time at a VEX championship venue, and I was amazed by the designs other students had built. Seeing them showed me how far I could take my own robots.",
              learned: ["How the basic VEX mechanisms work", "How different drivetrain configurations change speed, pushing power and turning", "Build, test, rebuild: improving a design through iterations", "Learning from the best teams by studying their robots at championships"],
              design: { cad: false, tool: "Hand sketches", how: "No CAD this year. I designed with sketches and hands-on building, learning from my teammates as we built and rebuilt the robot.", images: [] },
              photos: [],
              awards: [
                { name: "Qualified for the National Championship", event: "VEX V5 Robotics Competition", year: "2021–22" },
                { name: "Qualified for the VEX Worlds Championship", event: "VEX V5 Robotics Competition", year: "2021–22" }
              ]
            },
            {
              id: "vex-ms-2", type: "vex", stage: "VEX", era: "Season 2 · Add year",
              title: "Taking over the code",
              roles: ["Lead programmer"], game: "Add this season's VEX game",
              built: "Wrote the driver controls and the autonomous routines for our robot.",
              enjoyed: "Writing an autonomous run and seeing the robot score on its own.",
              learned: ["Programming autonomous routines", "Using sensors to make the robot precise", "Testing and debugging under time pressure"],
              design: { tool: "CAD tool used", how: "Describe how you designed this robot: first sketches, the CAD model, what you changed after testing, and why.", images: [] },
              photos: [], awards: []
            },
            {
              id: "vex-ms-3", type: "vex", stage: "VEX", era: "Season 3 · Add year",
              title: "Leading the team",
              roles: ["Team captain", "Lead programmer"], game: "Add this season's VEX game",
              built: "Led the team through the season while still writing the robot's code.",
              enjoyed: "Helping teammates find their strengths and seeing the whole team improve.",
              learned: ["Leading and planning a season", "Communicating clearly with teammates", "Making decisions when the clock is ticking"],
              design: { tool: "CAD tool used", how: "Describe how you designed this robot: first sketches, the CAD model, what you changed after testing, and why.", images: [] },
              photos: [], awards: []
            }
          ]
        },

        /* ---------------- HIGH ---------------- */
        {
          id: "high", title: "High school", years: "Grade 9 – now",
          intro: "Full-size robots, back to VEX, and a robot of my own: Ball Boy.",
          items: [
            {
              id: "frc", type: "frc", stage: "FRC", era: "Freshman year",
              title: "Going full size with FRC",
              roles: ["Team member"], game: "Add season / game name",
              built: "Worked on a full-size FRC robot with a private robotics club.",
              enjoyed: "Working at a much bigger scale, with real machining and a large team.",
              learned: ["How big engineering teams split up the work", "Larger motors, metal parts and safety", "The full engineering design process"],
              design: { tool: "CAD tool used", how: "Describe your part in designing the FRC robot.", images: [] },
              photos: [], awards: []
            },
            {
              id: "vex-hs", type: "vex", stage: "VEX", era: "Sophomore year",
              title: "Back to VEX, with everything I'd learned",
              roles: ["Add role"], game: "Add this season's VEX game",
              built: "Rejoined VEX through my high school program, bringing ideas from FRC and middle school.",
              enjoyed: "Using what I'd learned to make smarter design choices from the start.",
              learned: ["Add what you're learning this season"],
              design: { tool: "CAD tool used", how: "Describe how you designed this robot: first sketches, the CAD model, what you changed after testing, and why.", images: [] },
              photos: [], awards: []
            },
            {
              id: "ball-boy", type: "capstone", stage: "Ball Boy", era: "Add year",
              title: "Ball Boy: a robot that collects tennis balls",
              roles: ["Inventor", "Designer", "Programmer"], game: "",
              tagline: "A robot that collects tennis balls so players can keep playing.",
              problem: "After tennis practice there are dozens of balls scattered across the court, and picking them up by hand takes forever. I wanted a robot to do it for me.",
              built: "Describe how Ball Boy works: how it drives, how it picks up balls, and where it stores them.",
              result: "Describe how well it works: how many balls it collects, how fast, and what you'd improve.",
              enjoyed: "Solving a problem from my own life with everything I'd learned.",
              learned: ["Add what building Ball Boy taught you"],
              design: { tool: "CAD tool used", how: "Describe how you designed Ball Boy in CAD: early sketches, versions you tried, and the design changes that made it work.", images: [] },
              lineage: [
                { from: "LEGO", what: "Gears and mechanisms for the pickup", link: "lego" },
                { from: "VEX hardware", what: "A strong drivetrain and intake design", link: "vex-ms-1" },
                { from: "VEX programming", what: "Controls and automation", link: "vex-ms-2" },
                { from: "Team captain", what: "Planning the project from idea to finish", link: "vex-ms-3" },
                { from: "FRC", what: "The full engineering design process", link: "frc" }
              ],
              product: {
                vision: "Describe the dream: Ball Boy as a product that any player, coach or club can buy.",
                who: ["Tennis players who practice alone", "Coaches running drills", "Tennis clubs and schools"],
                roadmap: [
                  { step: "Working prototype", status: "done" },
                  { step: "Testing on real courts with players and coaches", status: "now" },
                  { step: "Improved version: lighter, faster, cheaper to build", status: "next" },
                  { step: "Pilot with a local tennis club", status: "next" },
                  { step: "Launch Ball Boy as a product", status: "next" }
                ]
              },
              photos: [], awards: []
            }
          ]
        }
      ]
    }
  ]
};
