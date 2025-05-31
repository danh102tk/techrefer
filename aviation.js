// Aviation abbreviations data (cleaned from your PDF)
const aviationData = [
  {
        abbreviation: "3D",
        meaning: "Three Dimensional"
  },
  {
        abbreviation: "4D",
        meaning: "Four Dimensional"
  },
  {
        abbreviation: "A",
        meaning: "Amber"
  },
  {
        abbreviation: "A",
        meaning: "Ampere"
  },
  {
        abbreviation: "A & P",
        meaning: "Aircraft Technician"
  },
  {
        abbreviation: "A.ICE",
        meaning: "Anti-icing"
  },
  {
        abbreviation: "A/BRK",
        meaning: "Autobrake"
  },
  {
        abbreviation: "A/C",
        meaning: "Aircraft"
  },
  {
        abbreviation: "A/C",
        meaning: "Air Conditioning"
  },
  {
        abbreviation: "A/COLL",
        meaning: "Anti-Collision"
  },
  {
        abbreviation: "A/D",
        meaning: "Analog/Digital"
  },
  {
        abbreviation: "A/DC",
        meaning: "Analog-to-Digital Converter"
  },
  {
        abbreviation: "A/G",
        meaning: "Air to Ground"
  },
  {
        abbreviation: "A/G",
        meaning: "AirGround"
  },
  {
        abbreviation: "A/L",
        meaning: "Airline"
  },
  {
        abbreviation: "A/N",
        meaning: "Alphanumeric"
  },
  {
        abbreviation: "A/P",
        meaning: "AutoPilot"
  },
  {
        abbreviation: "A/S",
        meaning: "Airspeed"
  },
  {
        abbreviation: "A/SKID",
        meaning: "Anti-Skid"
  },
  {
        abbreviation: "A/SKID",
        meaning: "Anti Skid"
  },
  {
        abbreviation: "A/STAB",
        meaning: "Auto Stabilizer"
  },
  {
        abbreviation: "A/T",
        meaning: "AutoThrottle"
  },
  {
        abbreviation: "A/THR",
        meaning: "Autothrust"
  },
  {
        abbreviation: "A/XFMR",
        meaning: "Autotransformer"
  },
  {
        abbreviation: "A99",
        meaning: "99 percent of max specific range in cruise"
  },
  {
        abbreviation: "AAC",
        meaning: "Airline Administrative Communications"
  },
  {
        abbreviation: "AAM",
        meaning: "Air-to-Air Missile"
  },
  {
        abbreviation: "AAP",
        meaning: "Additional Attendant Panel"
  },
  {
        abbreviation: "AAP",
        meaning: "Aft Attendant Panel"
  },
  {
        abbreviation: "AAS",
        meaning: "Airport Advisory Service"
  },
  {
        abbreviation: "ABC",
        meaning: "After Botom Center"
  },
  {
        abbreviation: "ABCM",
        meaning: "Alternate Brake Control Manifold"
  },
  {
        abbreviation: "ABCU",
        meaning: "Alternate Braking Control Unit"
  },
  {
        abbreviation: "ABD",
        meaning: "Airbus Directive and Procedure"
  },
  {
        abbreviation: "ABD",
        meaning: "AirBus Directives"
  },
  {
        abbreviation: "ABDC",
        meaning: "Avionics Broadcast Data Collector"
  },
  {
        abbreviation: "ABM",
        meaning: "APU Build-up Manual"
  },
  {
        abbreviation: "ABN",
        meaning: "Abnormal"
  },
  {
        abbreviation: "ABNORM",
        meaning: "Abnormal"
  },
  {
        abbreviation: "ABPM",
        meaning: "Avionics Bare Processing Module"
  },
  {
        abbreviation: "ABRN",
        meaning: "Airborne"
  },
  {
        abbreviation: "ABS",
        meaning: "Autobrake System"
  },
  {
        abbreviation: "ABS",
        meaning: "Absolute"
  },
  {
        abbreviation: "ABSELV",
        meaning: "Alternate Brake Selector Valve"
  },
  {
        abbreviation: "ABSORB",
        meaning: "Absorber"
  },
  {
        abbreviation: "ABSV",
        meaning: "Alternate Brake Selector Valve"
  },
  {
        abbreviation: "ABV",
        meaning: "Above"
  },
  {
        abbreviation: "AC",
        meaning: "Aircraft Characteristics - Airport and Maintenance Planning"
  },
  {
        abbreviation: "AC",
        meaning: "Alternating Current"
  },
  {
        abbreviation: "AC",
        meaning: "Advisory Circular"
  },
  {
        abbreviation: "AC",
        meaning: "Air Corps"
  },
  {
        abbreviation: "ACARS",
        meaning: "Aircraft Communication Addressing and Reporting System"
  },
  {
        abbreviation: "ACARS",
        meaning: "Arinc Communications Addressing and Reporting System"
  },
  {
        abbreviation: "ACB",
        meaning: "Attendant Call Button"
  },
  {
        abbreviation: "ACC",
        meaning: "Active Clearance Control"
  },
  {
        abbreviation: "ACCEL",
        meaning: "Acceleration/Accelerate"
  },
  {
        abbreviation: "ACCEL",
        meaning: "Acceleration"
  },
  {
        abbreviation: "ACCLRM",
        meaning: "Accelerometer"
  },
  {
        abbreviation: "ACCU",
        meaning: "Accumulator"
  },
  {
        abbreviation: "ACCUR",
        meaning: "Accuracy"
  },
  {
        abbreviation: "ACD",
        meaning: "Additional Control Device"
  },
  {
        abbreviation: "ACD",
        meaning: "Aircraft Control Domain"
  },
  {
        abbreviation: "ACDF",
        meaning: "Automatic CMS Dump Function"
  },
  {
        abbreviation: "ACDO",
        meaning: "Air Carrier District Office"
  },
  {
        abbreviation: "ACE",
        meaning: "Air Cargo Equipment"
  },
  {
        abbreviation: "ACFT",
        meaning: "Aircraft"
  },
  {
        abbreviation: "ACGC",
        meaning: "Aviation Complementary Ground Component"
  },
  {
        abbreviation: "ACGS",
        meaning: "Aircraft GSM Server"
  },
  {
        abbreviation: "ACHC",
        meaning: "Aft Cargo Heat Computer"
  },
  {
        abbreviation: "ACK",
        meaning: "Acknowledge"
  },
  {
        abbreviation: "ACK",
        meaning: "Acknowledgement"
  },
  {
        abbreviation: "ACM",
        meaning: "Air Cycle Machine"
  },
  {
        abbreviation: "ACM",
        meaning: "APU conditions monitoring"
  },
  {
        abbreviation: "ACMF",
        meaning: "Aircraft Condition Monitoring Function"
  },
  {
        abbreviation: "ACMM",
        meaning: "Abbreviated Component Maintenance Manual"
  },
  {
        abbreviation: "ACMP",
        meaning: "Airframe Condition Monitoring Procedure"
  },
  {
        abbreviation: "ACMP",
        meaning: "Alternating Current Motor Pump/elect . hydr . pump"
  },
  {
        abbreviation: "ACMR",
        meaning: "Aircraft Configuration Management Rules"
  },
  {
        abbreviation: "ACMS",
        meaning: "Aircraft Condition Monitoring System"
  },
  {
        abbreviation: "ACMS-RT",
        meaning: "ACMS-Real Time"
  },
  {
        abbreviation: "ACMS-SA",
        meaning: "ACMS-Server Application"
  },
  {
        abbreviation: "ACN",
        meaning: "Aircraft Classification Number"
  },
  {
        abbreviation: "ACOC",
        meaning: "Air Cooled Oil Cooler"
  },
  {
        abbreviation: "ACP",
        meaning: "Area Call Panel"
  },
  {
        abbreviation: "ACP",
        meaning: "Audio Control Panel"
  },
  {
        abbreviation: "ACQ",
        meaning: "Acquire"
  },
  {
        abbreviation: "ACQN",
        meaning: "Acquisition"
  },
  {
        abbreviation: "ACR",
        meaning: "Avionics Communication Router"
  },
  {
        abbreviation: "ACR",
        meaning: "Avionics Configuration Report"
  },
  {
        abbreviation: "ACRIF",
        meaning: "ACR Instrumentation Function"
  },
  {
        abbreviation: "ACRS",
        meaning: "Avionics Communication Routing System"
  },
  {
        abbreviation: "ACS",
        meaning: "Air Conditioning System"
  },
  {
        abbreviation: "ACSC",
        meaning: "Air Conditioning System Controller"
  },
  {
        abbreviation: "ACT",
        meaning: "Active"
  },
  {
        abbreviation: "ACT",
        meaning: "Additional Center Tank"
  },
  {
        abbreviation: "ACTG",
        meaning: "Actuating"
  },
  {
        abbreviation: "ACTI",
        meaning: "Assembly Critical Item"
  },
  {
        abbreviation: "ACTIV",
        meaning: "Active"
  },
  {
        abbreviation: "ACTR",
        meaning: "Actuator"
  },
  {
        abbreviation: "ACTUAL",
        meaning: "Aircraft Configuration of Tracked Units at Aircraft Level"
  },
  {
        abbreviation: "ACTVN",
        meaning: "Activation"
  },
  {
        abbreviation: "ACTVT",
        meaning: "Activate"
  },
  {
        abbreviation: "ACU",
        meaning: "Air Cooling Unit"
  },
  {
        abbreviation: "ACU",
        meaning: "Antenna Control Unit"
  },
  {
        abbreviation: "ACU",
        meaning: "Alpha Call-Up"
  },
  {
        abbreviation: "ACUTE",
        meaning: "Airbus Cockpit Universal Thrust Emulator"
  },
  {
        abbreviation: "AD",
        meaning: "Airworthiness Directive"
  },
  {
        abbreviation: "AD",
        meaning: "Ashless Dispersant"
  },
  {
        abbreviation: "ADB",
        meaning: "Airport DataBase"
  },
  {
        abbreviation: "ADB",
        meaning: "Area Distribution Box"
  },
  {
        abbreviation: "ADBP",
        meaning: "Avionics Data Broadcast Protocol"
  },
  {
        abbreviation: "ADC",
        meaning: "Air Data Computer"
  },
  {
        abbreviation: "ADC",
        meaning: "Aircraft Data Collection"
  },
  {
        abbreviation: "ADCN",
        meaning: "Avionics Data Communication Network"
  },
  {
        abbreviation: "ADD",
        meaning: "Addition"
  },
  {
        abbreviation: "ADD",
        meaning: "Additional"
  },
  {
        abbreviation: "ADEPT",
        meaning: "Aircraft Data Engine Performance"
  },
  {
        abbreviation: "ADF",
        meaning: "Automatic Direction Finder"
  },
  {
        abbreviation: "ADF",
        meaning: "As-Defined"
  },
  {
        abbreviation: "ADFR",
        meaning: "Automatic Deployable Flight Recorder"
  },
  {
        abbreviation: "ADG",
        meaning: "Air Driven Generator"
  },
  {
        abbreviation: "ADGB",
        meaning: "Active Differential Gearbox"
  },
  {
        abbreviation: "ADHF",
        meaning: "Adaptive Dropped Hinge Flap"
  },
  {
        abbreviation: "ADI",
        meaning: "Attitude Director Indicator"
  },
  {
        abbreviation: "ADI",
        meaning: "Attitude Director Indiccator"
  },
  {
        abbreviation: "ADIRS",
        meaning: "Air Data/Inertial Reference System"
  },
  {
        abbreviation: "ADIRS",
        meaning: "Air Data and Inertial Reference"
  },
  {
        abbreviation: "ADIRU",
        meaning: "Air Data/Inertial Reference Unit"
  },
  {
        abbreviation: "ADIRU",
        meaning: "Air Data Inertial Reference Unit"
  },
  {
        abbreviation: "ADIS",
        meaning: "AFDX and Digital Injection System"
  },
  {
        abbreviation: "ADIZ",
        meaning: "Air Defense Identification Zone"
  },
  {
        abbreviation: "ADL",
        meaning: "Airborne Data Loader"
  },
  {
        abbreviation: "ADLU",
        meaning: "Airborne Data Loading Unit"
  },
  {
        abbreviation: "ADM",
        meaning: "Air Data Module"
  },
  {
        abbreviation: "ADMZ",
        meaning: "Aircraft DeMilitarized Zone"
  },
  {
        abbreviation: "ADP",
        meaning: "Air Driven Pump/ Air Driven Demand Hydraulic Pupm"
  },
  {
        abbreviation: "ADPM",
        meaning: "Aircraft Deactivation Procedures Manual"
  },
  {
        abbreviation: "ADPTR",
        meaning: "Adapter"
  },
  {
        abbreviation: "ADR",
        meaning: "Air Data Reference"
  },
  {
        abbreviation: "ADS",
        meaning: "Air Data System"
  },
  {
        abbreviation: "ADS",
        meaning: "Automatic Dependent Surveillance"
  },
  {
        abbreviation: "ADS",
        meaning: "Aircraft maintenance Documentation System"
  },
  {
        abbreviation: "ADS-B",
        meaning: "Automatic Dependent Surveillance-Broadcast"
  },
  {
        abbreviation: "ADS-C",
        meaning: "Automatic Dependent Surveillance-Contract"
  },
  {
        abbreviation: "ADSM",
        meaning: "Avionics Data Storage Module"
  },
  {
        abbreviation: "ADT",
        meaning: "Autonomous Distress Tracking"
  },
  {
        abbreviation: "ADTS",
        meaning: "Autonomous Distress Tracking System"
  },
  {
        abbreviation: "ADU",
        meaning: "Area Distribution Unit"
  },
  {
        abbreviation: "ADV",
        meaning: "Advisory"
  },
  {
        abbreviation: "AEB",
        meaning: "Airline Engineering Bulletin"
  },
  {
        abbreviation: "AEBG",
        meaning: "Aircraft Engine Business Group"
  },
  {
        abbreviation: "AECM",
        meaning: "Alternate Extension Control Module"
  },
  {
        abbreviation: "AES",
        meaning: "Aircraft Earth Station"
  },
  {
        abbreviation: "AESS",
        meaning: "Aircraft Environment Surveillance System"
  },
  {
        abbreviation: "AESU",
        meaning: "Aircraft Environment Surveillance Unit"
  },
  {
        abbreviation: "AEVC",
        meaning: "Avionics Equipment Ventilation Computer"
  },
  {
        abbreviation: "AEVC",
        meaning: "Avionics Equiments Ventilation Computer"
  },
  {
        abbreviation: "AF",
        meaning: "Audio Frequency"
  },
  {
        abbreviation: "AFC",
        meaning: "Automatic Frequency Control"
  },
  {
        abbreviation: "AFCD",
        meaning: "Aft Cargo Door"
  },
  {
        abbreviation: "AFCS",
        meaning: "Automatic Flight Control System"
  },
  {
        abbreviation: "AFDS",
        meaning: "Autopilot Flight Director System"
  },
  {
        abbreviation: "AFDX",
        meaning: "Avionics Full Duplex Switched Ethernet"
  },
  {
        abbreviation: "AFECU",
        meaning: "Automatic Fire Extinguishing Control Unit"
  },
  {
        abbreviation: "AFFECTD",
        meaning: "Affected"
  },
  {
        abbreviation: "AFFIRM",
        meaning: "Affirmative"
  },
  {
        abbreviation: "AFI",
        meaning: "Aircraft Fault Isolation"
  },
  {
        abbreviation: "AFL",
        meaning: "Auto Flush"
  },
  {
        abbreviation: "AFM",
        meaning: "Airplane Flight Manual"
  },
  {
        abbreviation: "AFMC",
        meaning: "Auxiliary Fuel Management Computer"
  },
  {
        abbreviation: "AFMR",
        meaning: "Airframer"
  },
  {
        abbreviation: "AFN",
        meaning: "ATS Facilities Notification"
  },
  {
        abbreviation: "AFOLTS",
        meaning: "Automatic Fire/Over Heat Logic and Test System"
  },
  {
        abbreviation: "AFR",
        meaning: "Aircraft Fault Reporting"
  },
  {
        abbreviation: "AFRP",
        meaning: "Aramid Fiber Reinforced Plastic"
  },
  {
        abbreviation: "AFS",
        meaning: "Automatic Flight System"
  },
  {
        abbreviation: "AFS",
        meaning: "Autoflight System/ Automatic Flight System"
  },
  {
        abbreviation: "AFTR",
        meaning: "After"
  },
  {
        abbreviation: "AFU",
        meaning: "Autofeather Unit / Automatic Feathering Unit"
  },
  {
        abbreviation: "AGB",
        meaning: "Accessory Gearbox"
  },
  {
        abbreviation: "AGB",
        meaning: "Angle Gearbox"
  },
  {
        abbreviation: "AGC",
        meaning: "APU Generator Contactor"
  },
  {
        abbreviation: "AGC",
        meaning: "Automatic Gain Control"
  },
  {
        abbreviation: "AGE",
        meaning: "Aircraft Ground Equipment"
  },
  {
        abbreviation: "AGL",
        meaning: "Above Ground Level"
  },
  {
        abbreviation: "AGLC",
        meaning: "APU Generator Line Contactor"
  },
  {
        abbreviation: "AGP",
        meaning: "Alternate Gauging Processor"
  },
  {
        abbreviation: "AGS",
        meaning: "Aircraft GSM Server"
  },
  {
        abbreviation: "AGS",
        meaning: "Air Generation System"
  },
  {
        abbreviation: "AGU",
        meaning: "Air Generation Unit"
  },
  {
        abbreviation: "AGW",
        meaning: "Actual Gross Weight"
  },
  {
        abbreviation: "AHMS",
        meaning: "APU Health Monitoring System"
  },
  {
        abbreviation: "AIBU",
        meaning: "Advanced Illumination Ballast Unit"
  },
  {
        abbreviation: "A-ICE",
        meaning: "Anti-Ice"
  },
  {
        abbreviation: "AICF",
        meaning: "Anti Ice Control Function"
  },
  {
        abbreviation: "AICS",
        meaning: "Anti Ice Control System"
  },
  {
        abbreviation: "AICU",
        meaning: "Anti Ice Control Unit"
  },
  {
        abbreviation: "AIDS",
        meaning: "Aircraft Integrated Data System"
  },
  {
        abbreviation: "AIDS",
        meaning: "Aircraft Integrat Ed Data System"
  },
  {
        abbreviation: "AIL",
        meaning: "Aileron"
  },
  {
        abbreviation: "AIM",
        meaning: "Aircraft Integrated Maintenance"
  },
  {
        abbreviation: "AIM",
        meaning: "Aircraft Identification Module"
  },
  {
        abbreviation: "AIM",
        meaning: "Airman's Information Manual"
  },
  {
        abbreviation: "AIME",
        meaning: "Autonomous Integrity Monitored Extrapolation"
  },
  {
        abbreviation: "AIMI",
        meaning: "Avionics Information Management Interface"
  },
  {
        abbreviation: "AINS",
        meaning: "Aircraft Information Network System"
  },
  {
        abbreviation: "AIP",
        meaning: "Attendant Indication Panel"
  },
  {
        abbreviation: "AIPC",
        meaning: "Aircraft Illustrated Parts Catalog"
  },
  {
        abbreviation: "AIPR",
        meaning: "Avionic Internal Parameter Requestor"
  },
  {
        abbreviation: "AIR",
        meaning: "Aircraft Inspection Report"
  },
  {
        abbreviation: "AIRAC",
        meaning: "Aeronautical Information Regulation And Control"
  },
  {
        abbreviation: "AIS",
        meaning: "Audio Integrated System"
  },
  {
        abbreviation: "AISD",
        meaning: "Airline Information Services Domain"
  },
  {
        abbreviation: "AIT",
        meaning: "Accident Information Transmission"
  },
  {
        abbreviation: "AIU",
        meaning: "Aircraft Interface Unit"
  },
  {
        abbreviation: "AIU",
        meaning: "Audio Interface Unit"
  },
  {
        abbreviation: "AIV",
        meaning: "Accumulator Isolation Valve"
  },
  {
        abbreviation: "ALE",
        meaning: "Automatic Link Establishment"
  },
  {
        abbreviation: "ALF",
        meaning: "Aft Looking Forward"
  },
  {
        abbreviation: "ALGDO",
        meaning: "Automatic Landing Gear Doors Open"
  },
  {
        abbreviation: "ALIGN",
        meaning: "Alignment"
  },
  {
        abbreviation: "ALIGND",
        meaning: "Aligned"
  },
  {
        abbreviation: "ALLWD",
        meaning: "Allowed"
  },
  {
        abbreviation: "ALNA",
        meaning: "Airline Network Architecture"
  },
  {
        abbreviation: "ALNOT",
        meaning: "Alert Notice"
  },
  {
        abbreviation: "ALPHA",
        meaning: "Angle-of-Attack"
  },
  {
        abbreviation: "ALS",
        meaning: "Airworthiness Limitation Section"
  },
  {
        abbreviation: "ALSCU",
        meaning: "Auxiliary Level Sensing Control Unit"
  },
  {
        abbreviation: "ALT",
        meaning: "Altitude"
  },
  {
        abbreviation: "ALT HOLD",
        meaning: "Altitude Hold"
  },
  {
        abbreviation: "ALT REFF",
        meaning: "Alternate to a Retraction, Extension and/or Free Fall test"
  },
  {
        abbreviation: "ALTM",
        meaning: "Altimeter"
  },
  {
        abbreviation: "ALTN",
        meaning: "Alternate"
  },
  {
        abbreviation: "ALTN",
        meaning: "Alternative"
  },
  {
        abbreviation: "ALTRV",
        meaning: "Altitude Reservation"
  },
  {
        abbreviation: "ALTSM",
        meaning: "Altimeter Setting Monitor"
  },
  {
        abbreviation: "ALTU",
        meaning: "Annunciator Light Test Unit"
  },
  {
        abbreviation: "ALU",
        meaning: "Arithmetic and Logic Unit"
  },
  {
        abbreviation: "AM",
        meaning: "Amplitude Modulation"
  },
  {
        abbreviation: "AMB",
        meaning: "Ambient"
  },
  {
        abbreviation: "AMC",
        meaning: "Automatic Mixture Control"
  },
  {
        abbreviation: "AMD",
        meaning: "Aircraft Maintenance Description"
  },
  {
        abbreviation: "AMDB",
        meaning: "Airport Mapping DataBase"
  },
  {
        abbreviation: "AME",
        meaning: "Amplitude Modulation Equivalent"
  },
  {
        abbreviation: "AMEX",
        meaning: "Avionics Message Exchanger"
  },
  {
        abbreviation: "AMI",
        meaning: "Airline Modifiable Information"
  },
  {
        abbreviation: "AMM",
        meaning: "Aircraft Maintenance Manual"
  },
  {
        abbreviation: "AMP",
        meaning: "Aircraft Maintenance Procedure"
  },
  {
        abbreviation: "AMP",
        meaning: "Amperes"
  },
  {
        abbreviation: "AMPL",
        meaning: "Amplifier"
  },
  {
        abbreviation: "AMS",
        meaning: "Air-ground Message Server"
  },
  {
        abbreviation: "AMTOSS",
        meaning: "Aircraft Maintenance Task Oriented Support System"
  },
  {
        abbreviation: "AMU",
        meaning: "Audio Management Unit"
  },
  {
        abbreviation: "AN",
        meaning: "Air Force-Navy Standard"
  },
  {
        abbreviation: "ANDT",
        meaning: "Aircraft Non Destructive Test"
  },
  {
        abbreviation: "ANF",
        meaning: "Airport Navigation Function"
  },
  {
        abbreviation: "ANI",
        meaning: "Analog Input"
  },
  {
        abbreviation: "ANLG",
        meaning: "Analogic"
  },
  {
        abbreviation: "ANN",
        meaning: "Annunciator"
  },
  {
        abbreviation: "ANN LT",
        meaning: "Annunciator Light"
  },
  {
        abbreviation: "ANNCE",
        meaning: "Announce"
  },
  {
        abbreviation: "ANNCMT",
        meaning: "Announcement"
  },
  {
        abbreviation: "ANNUNC",
        meaning: "Annunciator"
  },
  {
        abbreviation: "ANO",
        meaning: "Analog Output"
  },
  {
        abbreviation: "ANSA",
        meaning: "At Nearest Suitable Airport"
  },
  {
        abbreviation: "ANSI",
        meaning: "American National Standards Institute"
  },
  {
        abbreviation: "ANSU",
        meaning: "Aircraft Network Server Unit"
  },
  {
        abbreviation: "ANSU-OPS",
        meaning: "Aircraft Network Server Unit - Operations"
  },
  {
        abbreviation: "ANT",
        meaning: "Antenna"
  },
  {
        abbreviation: "AOA",
        meaning: "Angle Of Attack"
  },
  {
        abbreviation: "AOC",
        meaning: "Airline Operational Control"
  },
  {
        abbreviation: "AOC",
        meaning: "Air/Oil Heat Exchanger"
  },
  {
        abbreviation: "AOC",
        meaning: "Aircraft Operation Certificate"
  },
  {
        abbreviation: "AOD",
        meaning: "Audio on Demand"
  },
  {
        abbreviation: "AOG",
        meaning: "Aircraft On Ground"
  },
  {
        abbreviation: "AOHE",
        meaning: "Air Oil Heat Exchanger"
  },
  {
        abbreviation: "AOHX",
        meaning: "Air/Oil Heat Exchanger"
  },
  {
        abbreviation: "AoIP",
        meaning: "Aircraft Communication Addressing and Reporting System over Internet Protocol"
  },
  {
        abbreviation: "AOM",
        meaning: "Aircraft Operating Manual"
  },
  {
        abbreviation: "AOMT",
        meaning: "Airbus Onboard Maintenance Tool"
  },
  {
        abbreviation: "AOT",
        meaning: "Alert Operators Transmission"
  },
  {
        abbreviation: "AP",
        meaning: "Autopilot"
  },
  {
        abbreviation: "AP",
        meaning: "Auto Pilot"
  },
  {
        abbreviation: "AP/FD",
        meaning: "Autopilot/Flight Director"
  },
  {
        abbreviation: "APA",
        meaning: "Automatic Pre-Arm"
  },
  {
        abbreviation: "APB",
        meaning: "Auxiliary Power Breaker"
  },
  {
        abbreviation: "APC",
        meaning: "Absolute Pressure Controller"
  },
  {
        abbreviation: "APD",
        meaning: "Aircraft Performance Data"
  },
  {
        abbreviation: "APD",
        meaning: "Apoproach Progress Display"
  },
  {
        abbreviation: "APF",
        meaning: "Aft Pylon Fairing"
  },
  {
        abbreviation: "APGCU",
        meaning: "Auxilary Power Generator Control Unit"
  },
  {
        abbreviation: "API",
        meaning: "Application Programming Interface"
  },
  {
        abbreviation: "API",
        meaning: "American Petroleum Institute"
  },
  {
        abbreviation: "APL",
        meaning: "Airplane"
  },
  {
        abbreviation: "APLC",
        meaning: "Aircraft Power Line Conditioner"
  },
  {
        abbreviation: "APM",
        meaning: "ARINC Processing Module"
  },
  {
        abbreviation: "APM",
        meaning: "Airplane Personality Module"
  },
  {
        abbreviation: "APM",
        meaning: "Aircraft Performance Monitoring"
  },
  {
        abbreviation: "APP",
        meaning: "Appearance"
  },
  {
        abbreviation: "APP",
        meaning: "Approach Control-Approach Control Office"
  },
  {
        abbreviation: "APP",
        meaning: "Approach"
  },
  {
        abbreviation: "APPL",
        meaning: "Application"
  },
  {
        abbreviation: "APPR",
        meaning: "Approach"
  },
  {
        abbreviation: "APPROX",
        meaning: "Approximately"
  },
  {
        abbreviation: "APPSM",
        meaning: "Approach Stabilization Monitor"
  },
  {
        abbreviation: "APPU",
        meaning: "Asymmetry Position Pick-off Unit"
  },
  {
        abbreviation: "APPU",
        meaning: "Assymetry Position Pick-off Unit"
  },
  {
        abbreviation: "APR",
        meaning: "Automatic Power Reserve"
  },
  {
        abbreviation: "APS",
        meaning: "Absolute Pressure Sensor"
  },
  {
        abbreviation: "APS",
        meaning: "Avionics Printing Service"
  },
  {
        abbreviation: "APS",
        meaning: "Antenna Power Supply"
  },
  {
        abbreviation: "APT",
        meaning: "Airbus Pilot Transition"
  },
  {
        abbreviation: "APU",
        meaning: "Auxiliary Power Unit"
  },
  {
        abbreviation: "APU AFE",
        meaning: "APU Automatic Fire Extinguishing Control Unit"
  },
  {
        abbreviation: "AR",
        meaning: "As Required"
  },
  {
        abbreviation: "ARF",
        meaning: "ATSU Routing Function"
  },
  {
        abbreviation: "ARFC",
        meaning: "Aircraft Rescue & Fire Fighting Chart"
  },
  {
        abbreviation: "ArGO",
        meaning: "Airbus Ground Operations"
  },
  {
        abbreviation: "ARINC",
        meaning: "Aeronautical Radio Incorporated"
  },
  {
        abbreviation: "ARINC",
        meaning: "Aeronautical Radio Incorporate"
  },
  {
        abbreviation: "ARM",
        meaning: "Aircraft Recovery Manual"
  },
  {
        abbreviation: "ARN",
        meaning: "Aircraft Registration Number"
  },
  {
        abbreviation: "ARP",
        meaning: "Aerospace Recommended Practice"
  },
  {
        abbreviation: "ARPT",
        meaning: "Airport"
  },
  {
        abbreviation: "ARSR",
        meaning: "Air Route Surveillance Radar"
  },
  {
        abbreviation: "ARTCC",
        meaning: "Air Route Trraffic Control Center"
  },
  {
        abbreviation: "ARTF",
        meaning: "Artificial"
  },
  {
        abbreviation: "ARTS",
        meaning: "Automated Radar Terminal Systems"
  },
  {
        abbreviation: "ARU",
        meaning: "Aircraft Router Unit"
  },
  {
        abbreviation: "ARU",
        meaning: "Audio Reproducer Unit"
  },
  {
        abbreviation: "ARU",
        meaning: "Air Refrigeration Unit"
  },
  {
        abbreviation: "ARV",
        meaning: "Alternate Refill Valve"
  },
  {
        abbreviation: "ASA",
        meaning: "All Speed Aileron"
  },
  {
        abbreviation: "ASA",
        meaning: "Audio and Sign Adapter"
  },
  {
        abbreviation: "ASA",
        meaning: "Airborne Separation Assurance"
  },
  {
        abbreviation: "ASA",
        meaning: "Autoland Status Annunciator"
  },
  {
        abbreviation: "ASAP",
        meaning: "As Soon As Possible"
  },
  {
        abbreviation: "ASCII",
        meaning: "American Standard Code for Information Interchange"
  },
  {
        abbreviation: "ASCTU",
        meaning: "Air Supply Control and Test Unit"
  },
  {
        abbreviation: "ASCU",
        meaning: "Air Systems Control Unit"
  },
  {
        abbreviation: "ASD",
        meaning: "Accelerate Stop Distance"
  },
  {
        abbreviation: "ASD",
        meaning: "Aircraft Schematic Diagram"
  },
  {
        abbreviation: "ASDE",
        meaning: "Airport Surface Detection Equipment"
  },
  {
        abbreviation: "ASE",
        meaning: "Airborne Support Equipment"
  },
  {
        abbreviation: "ASF",
        meaning: "Avionics Server Function"
  },
  {
        abbreviation: "ASFC",
        meaning: "Avionics Server Function Cabinet"
  },
  {
        abbreviation: "ASHM",
        meaning: "Airframe Structure Health Monitoring"
  },
  {
        abbreviation: "ASI",
        meaning: "Airspeed Indicator"
  },
  {
        abbreviation: "ASI",
        meaning: "Air Speed Indicator"
  },
  {
        abbreviation: "ASIC",
        meaning: "Application Specific Integrated Circuits"
  },
  {
        abbreviation: "ASLC",
        meaning: "ACD Security Log Collector"
  },
  {
        abbreviation: "ASM",
        meaning: "Aircraft Schematics Manual"
  },
  {
        abbreviation: "ASM",
        meaning: "Air Separation Module"
  },
  {
        abbreviation: "ASM",
        meaning: "Airline Specific Memory"
  },
  {
        abbreviation: "ASM",
        meaning: "Air To Surface Missile"
  },
  {
        abbreviation: "ASN",
        meaning: "Aerospatiale Norme (Standard)"
  },
  {
        abbreviation: "ASN",
        meaning: "Aerospatiale Standard Norme"
  },
  {
        abbreviation: "ASP",
        meaning: "Air Supply System"
  },
  {
        abbreviation: "ASP",
        meaning: "Audio Selector Panel"
  },
  {
        abbreviation: "ASP",
        meaning: "Aircom Service Processor"
  },
  {
        abbreviation: "ASPSU",
        meaning: "Autonomous Standby Power Supply Unit"
  },
  {
        abbreviation: "ASR",
        meaning: "Aircraft Structural Repair"
  },
  {
        abbreviation: "ASR",
        meaning: "Airport Surveillance Radar"
  },
  {
        abbreviation: "ASS",
        meaning: "Aircraft Security System"
  },
  {
        abbreviation: "ASSCU",
        meaning: "Aircraft Security System Control Unit"
  },
  {
        abbreviation: "ASSY",
        meaning: "Assembly"
  },
  {
        abbreviation: "ASTM",
        meaning: "American Society of Testing Materials"
  },
  {
        abbreviation: "ASU",
        meaning: "Attendant Service Unit"
  },
  {
        abbreviation: "ASYM",
        meaning: "Asymmetric(al)"
  },
  {
        abbreviation: "ASYM",
        meaning: "Assymetrical"
  },
  {
        abbreviation: "AT",
        meaning: "Autothrust"
  },
  {
        abbreviation: "ATA",
        meaning: "Actual Time of Arrival"
  },
  {
        abbreviation: "ATA",
        meaning: "Air Transport Association of America"
  },
  {
        abbreviation: "ATA",
        meaning: "Airline Transport Association"
  },
  {
        abbreviation: "ATB",
        meaning: "Air France Technical Bulletin"
  },
  {
        abbreviation: "ATC",
        meaning: "Air Traffic Control"
  },
  {
        abbreviation: "ATC",
        meaning: "After Top Center"
  },
  {
        abbreviation: "ATC",
        meaning: "Air Trafic Control"
  },
  {
        abbreviation: "ATC/DABS",
        meaning: "Air Traffic Control / Discrete Address Beacon System"
  },
  {
        abbreviation: "ATCCC",
        meaning: "Air Traffic Control Command Center"
  },
  {
        abbreviation: "ATCI",
        meaning: "Air Traffic Control and Information"
  },
  {
        abbreviation: "ATCRB",
        meaning: "Air Traffic Control Radar Beacon"
  },
  {
        abbreviation: "ATD",
        meaning: "Actual Time of Departure"
  },
  {
        abbreviation: "ATE",
        meaning: "Automatic Test Equipment"
  },
  {
        abbreviation: "ATE",
        meaning: "Automated Test Equipment"
  },
  {
        abbreviation: "ATHR",
        meaning: "Auto Thrust"
  },
  {
        abbreviation: "ATI",
        meaning: "Air Transport Indicator"
  },
  {
        abbreviation: "ATIMS",
        meaning: "Air Traffic and Information Management System"
  },
  {
        abbreviation: "ATIS",
        meaning: "Automatic Terminal Information Service"
  },
  {
        abbreviation: "ATLAS",
        meaning: "Abbreviated Test Language for Avionics Systems"
  },
  {
        abbreviation: "ATM",
        meaning: "Air Traffic Management"
  },
  {
        abbreviation: "ATN",
        meaning: "Aeronautical Telecommunications Network"
  },
  {
        abbreviation: "ATO",
        meaning: "Aborted Take Off"
  },
  {
        abbreviation: "ATP",
        meaning: "Airline Transport Pilot"
  },
  {
        abbreviation: "ATQC",
        meaning: "Airbus Temporary Quick Change"
  },
  {
        abbreviation: "ATR",
        meaning: "Austin Trumbull Radio"
  },
  {
        abbreviation: "ATR",
        meaning: "Airline Transport Rating"
  },
  {
        abbreviation: "ATR",
        meaning: "Austin Trum Bull Radio"
  },
  {
        abbreviation: "ATRCCS",
        meaning: "Automatic Turbine Rotor Clearance Control System"
  },
  {
        abbreviation: "ATRU",
        meaning: "Automated Transformer Rectifier Unit"
  },
  {
        abbreviation: "ATS",
        meaning: "Air Traffic Service"
  },
  {
        abbreviation: "ATS",
        meaning: "Autothrottle System"
  },
  {
        abbreviation: "ATS",
        meaning: "Auto Thrust System"
  },
  {
        abbreviation: "ATSAW",
        meaning: "Airborne Traffic Situational Awareness"
  },
  {
        abbreviation: "ATSU",
        meaning: "Air Traffic Service Unit"
  },
  {
        abbreviation: "ATT",
        meaning: "Attitude"
  },
  {
        abbreviation: "ATTND",
        meaning: "Attendant"
  },
  {
        abbreviation: "ATU",
        meaning: "AutoTransformer Unit"
  },
  {
        abbreviation: "ATUC",
        meaning: "ATU Contactor"
  },
  {
        abbreviation: "ATULC",
        meaning: "ATU Line Contactor"
  },
  {
        abbreviation: "ATUPU",
        meaning: "ATU Protection Unit"
  },
  {
        abbreviation: "AUG",
        meaning: "Augmentation"
  },
  {
        abbreviation: "AUTO",
        meaning: "Automatic"
  },
  {
        abbreviation: "AUTOLAND",
        meaning: "Automatic Landing"
  },
  {
        abbreviation: "AUW",
        meaning: "All-Up Weight"
  },
  {
        abbreviation: "AUX",
        meaning: "Auxiliary"
  },
  {
        abbreviation: "AV",
        meaning: "Adjustment Value"
  },
  {
        abbreviation: "AVAIL",
        meaning: "Availability"
  },
  {
        abbreviation: "AVAIL",
        meaning: "Available"
  },
  {
        abbreviation: "AVC",
        meaning: "Automatic Volume Control"
  },
  {
        abbreviation: "AVIONICS",
        meaning: "Aviation Electronics"
  },
  {
        abbreviation: "AVIS",
        meaning: "Aircraft Virtual Insider System"
  },
  {
        abbreviation: "AVM",
        meaning: "Avionics Video Module"
  },
  {
        abbreviation: "AVM",
        meaning: "Aircraft Vibration Monitoring/ Airborne Vibration Monitor"
  },
  {
        abbreviation: "AVNCS",
        meaning: "Avionics"
  },
  {
        abbreviation: "AVS",
        meaning: "Avionics Ventilation System"
  },
  {
        abbreviation: "AVS",
        meaning: "Audio Visual System"
  },
  {
        abbreviation: "AWD",
        meaning: "Aircraft Wiring Diagram"
  },
  {
        abbreviation: "AWG",
        meaning: "American Wire Gage"
  },
  {
        abbreviation: "AWL",
        meaning: "Aircraft Wiring List"
  },
  {
        abbreviation: "AWL",
        meaning: "Attendant Work Light"
  },
  {
        abbreviation: "AWM",
        meaning: "Aircraft Wiring Manual"
  },
  {
        abbreviation: "AWY",
        meaning: "Airway"
  },
  {
        abbreviation: "AX",
        meaning: "Longitudinal Acceleration"
  },
  {
        abbreviation: "AY",
        meaning: "Lateral Acceleration"
  },
  {
        abbreviation: "AZ",
        meaning: "Azimuth"
  },
  {
        abbreviation: "AZFW",
        meaning: "Actual Zero Fuel Weight"
  },
  {
        abbreviation: "B",
        meaning: "Blue"
  },
  {
        abbreviation: "B/C",
        meaning: "Business Class"
  },
  {
        abbreviation: "B/CRS",
        meaning: "Back Course"
  },
  {
        abbreviation: "BAF",
        meaning: "BITE Access Function"
  },
  {
        abbreviation: "BAG",
        meaning: "Bandwidth Allocation Gap"
  },
  {
        abbreviation: "BAL",
        meaning: "Balance"
  },
  {
        abbreviation: "BARO",
        meaning: "Barometric"
  },
  {
        abbreviation: "BAS",
        meaning: "Bleed Air System"
  },
  {
        abbreviation: "BAT",
        meaning: "Battery"
  },
  {
        abbreviation: "BATLC",
        meaning: "Battery Line Contactor"
  },
  {
        abbreviation: "BB",
        meaning: "Building Block"
  },
  {
        abbreviation: "BBAND",
        meaning: "Broadband"
  },
  {
        abbreviation: "BBC",
        meaning: "Before Bottom Center"
  },
  {
        abbreviation: "BCD",
        meaning: "Binary Coded Decimal"
  },
  {
        abbreviation: "BCD",
        meaning: "Binary Coded Decirnal"
  },
  {
        abbreviation: "BCDS",
        meaning: "BITE Centralized Data System"
  },
  {
        abbreviation: "BCF",
        meaning: "Brake Cooling Fan"
  },
  {
        abbreviation: "BCL",
        meaning: "Battery Charge Limiter"
  },
  {
        abbreviation: "BCM",
        meaning: "Backup Control Module"
  },
  {
        abbreviation: "BCN",
        meaning: "Beacon"
  },
  {
        abbreviation: "BCRC",
        meaning: "Bulk Crew Rest Compartment"
  },
  {
        abbreviation: "BCRU",
        meaning: "Battery Charge and Rectifier Unit"
  },
  {
        abbreviation: "BCS",
        meaning: "Brake Control System"
  },
  {
        abbreviation: "BCS",
        meaning: "Braking Control System"
  },
  {
        abbreviation: "BCU",
        meaning: "Brake Control Unit"
  },
  {
        abbreviation: "BCV",
        meaning: "Bleed Control Valve"
  },
  {
        abbreviation: "BCV",
        meaning: "Bottom Dead Center"
  },
  {
        abbreviation: "BCVS",
        meaning: "Bulk Cargo Video System"
  },
  {
        abbreviation: "BDC",
        meaning: "Bottom Dead Center"
  },
  {
        abbreviation: "BF",
        meaning: "Belly Fairing"
  },
  {
        abbreviation: "BFE",
        meaning: "Buyer Furnished Equipment"
  },
  {
        abbreviation: "BFO",
        meaning: "Beat Frequency Oscillator"
  },
  {
        abbreviation: "BGAN",
        meaning: "Broadband Global Area Network"
  },
  {
        abbreviation: "BGM",
        meaning: "Boarding Music"
  },
  {
        abbreviation: "BH",
        meaning: "Block Hours"
  },
  {
        abbreviation: "BHD",
        meaning: "Bulkhead"
  },
  {
        abbreviation: "BIM",
        meaning: "Blade Inspection Method"
  },
  {
        abbreviation: "BIOS",
        meaning: "Basic Input Output System"
  },
  {
        abbreviation: "BIS",
        meaning: "Blade Inspection System"
  },
  {
        abbreviation: "BIT",
        meaning: "Built -In Test"
  },
  {
        abbreviation: "BITE",
        meaning: "Built-In Test Equipment"
  },
  {
        abbreviation: "BIU",
        meaning: "BITE Interface Unit"
  },
  {
        abbreviation: "BK",
        meaning: "Brake"
  },
  {
        abbreviation: "BKFLW",
        meaning: "Backflow"
  },
  {
        abbreviation: "BKGRD",
        meaning: "Background"
  },
  {
        abbreviation: "BKUP",
        meaning: "Backup"
  },
  {
        abbreviation: "BL",
        meaning: "Bleed"
  },
  {
        abbreviation: "BL",
        meaning: "Bend Tangent Line"
  },
  {
        abbreviation: "BL",
        meaning: "Buttock Line"
  },
  {
        abbreviation: "BLD",
        meaning: "Bleed"
  },
  {
        abbreviation: "BLER",
        meaning: "Bluetooth Low Energy Reader"
  },
  {
        abbreviation: "BLES",
        meaning: "Brake Life Extension System"
  },
  {
        abbreviation: "BLG",
        meaning: "Body Landing Gear"
  },
  {
        abbreviation: "BLK",
        meaning: "Black"
  },
  {
        abbreviation: "BLK",
        meaning: "Block"
  },
  {
        abbreviation: "BLOW",
        meaning: "Blower"
  },
  {
        abbreviation: "BLS",
        meaning: "Beluga Loading Software"
  },
  {
        abbreviation: "BLST",
        meaning: "Ballast"
  },
  {
        abbreviation: "BLV",
        meaning: "Bleed Valve"
  },
  {
        abbreviation: "BLWG",
        meaning: "Blowing"
  },
  {
        abbreviation: "BLWR",
        meaning: "Blower"
  },
  {
        abbreviation: "BM",
        meaning: "Bronze Mesh"
  },
  {
        abbreviation: "BMC",
        meaning: "Bleed Monitoring Computer"
  },
  {
        abbreviation: "BMC",
        meaning: "Bleed Management Computer/ Bleed Air Monitoring Computer"
  },
  {
        abbreviation: "BMEP",
        meaning: "Brake Mean _ Effective Pressure"
  },
  {
        abbreviation: "BMI",
        meaning: "BITE Monitoring Interface"
  },
  {
        abbreviation: "BMPS",
        meaning: "Bleed Monitoring Pressure Sensor"
  },
  {
        abbreviation: "BMU",
        meaning: "Battery Management Unit"
  },
  {
        abbreviation: "BMV",
        meaning: "Brake Metering Valve"
  },
  {
        abbreviation: "BNDRY",
        meaning: "Boundary"
  },
  {
        abbreviation: "BNR",
        meaning: "Binary"
  },
  {
        abbreviation: "BOAS",
        meaning: "Blade Outer Air Seal"
  },
  {
        abbreviation: "BOMU",
        meaning: "Bleed and Overheat Monitoring Unit"
  },
  {
        abbreviation: "BoP",
        meaning: "Balance of Plant"
  },
  {
        abbreviation: "BOT",
        meaning: "Begin of Tape"
  },
  {
        abbreviation: "BOT",
        meaning: "Bottom"
  },
  {
        abbreviation: "BPCU",
        meaning: "Bus Power Control Unit"
  },
  {
        abbreviation: "BPS",
        meaning: "Backup Power Supply"
  },
  {
        abbreviation: "BPS",
        meaning: "Bleed Pressure Sensor"
  },
  {
        abbreviation: "BPTU",
        meaning: "Brake Pedal Transmitter Unit"
  },
  {
        abbreviation: "BRG",
        meaning: "Bearing"
  },
  {
        abbreviation: "BRK",
        meaning: "Brake"
  },
  {
        abbreviation: "BRKNG",
        meaning: "Braking"
  },
  {
        abbreviation: "BRKR",
        meaning: "Breaker"
  },
  {
        abbreviation: "BRKR(S)",
        meaning: "Breaker(s)"
  },
  {
        abbreviation: "BRKT",
        meaning: "Bracket"
  },
  {
        abbreviation: "BRT",
        meaning: "Bright"
  },
  {
        abbreviation: "BRT",
        meaning: "Brightness"
  },
  {
        abbreviation: "BSCS",
        meaning: "Braking and Steering Control System"
  },
  {
        abbreviation: "BSCU",
        meaning: "Braking and Steering Control Unit"
  },
  {
        abbreviation: "BSCU",
        meaning: "Brake and Steering Control Unit"
  },
  {
        abbreviation: "BSFC",
        meaning: "Brake Specific Fuel Consumption"
  },
  {
        abbreviation: "BSI",
        meaning: "Borescope Inspection"
  },
  {
        abbreviation: "BSU",
        meaning: "Beam Steering Unit"
  },
  {
        abbreviation: "BSV",
        meaning: "Burner Staging Valve"
  },
  {
        abbreviation: "BTAC",
        meaning: "Bus Tie AC Contactor"
  },
  {
        abbreviation: "BTB",
        meaning: "Bus Tie Breaker"
  },
  {
        abbreviation: "BTB(S)",
        meaning: "Bus Tie Breaker(s)"
  },
  {
        abbreviation: "BTC",
        meaning: "Bus Tie Contactor"
  },
  {
        abbreviation: "BTC",
        meaning: "Before Top Center"
  },
  {
        abbreviation: "BTC",
        meaning: "Bus Transfer Contactor"
  },
  {
        abbreviation: "BTCM",
        meaning: "Brake Temperature Compensation Module"
  },
  {
        abbreviation: "BTDC",
        meaning: "Bus Tie DC Contactor"
  },
  {
        abbreviation: "BTL",
        meaning: "Bottle"
  },
  {
        abbreviation: "BTMS",
        meaning: "Brake Temperature Monitoring System"
  },
  {
        abbreviation: "BTMU",
        meaning: "Brake Temperature Monitoring Unit"
  },
  {
        abbreviation: "BTN",
        meaning: "Button"
  },
  {
        abbreviation: "BTR",
        meaning: "Bus Tie Relay"
  },
  {
        abbreviation: "BTS",
        meaning: "Base Transceiver Station"
  },
  {
        abbreviation: "BTS",
        meaning: "Bleed Temperature Sensor"
  },
  {
        abbreviation: "BTSTRP",
        meaning: "Buttstrap"
  },
  {
        abbreviation: "BTV",
        meaning: "Brake to Vacate"
  },
  {
        abbreviation: "BU",
        meaning: "Battery Unit"
  },
  {
        abbreviation: "BUS",
        meaning: "Busbar"
  },
  {
        abbreviation: "BUSS",
        meaning: "Back-Up Speed Scale"
  },
  {
        abbreviation: "BVCU",
        meaning: "Bleed Valve Control Unit"
  },
  {
        abbreviation: "BWS",
        meaning: "Body Wheel Steering"
  },
  {
        abbreviation: "BXL",
        meaning: "Beluga XL"
  },
  {
        abbreviation: "BYDU",
        meaning: "Back-Up Yaw Damper Unit"
  },
  {
        abbreviation: "BYP",
        meaning: "Bypass"
  },
  {
        abbreviation: "C",
        meaning: "Celsius"
  },
  {
        abbreviation: "C",
        meaning: "Centigrade"
  },
  {
        abbreviation: "C",
        meaning: "Close"
  },
  {
        abbreviation: "C",
        meaning: "Cyan"
  },
  {
        abbreviation: "C",
        meaning: "Center"
  },
  {
        abbreviation: "C.G.",
        meaning: "Center of Gravity"
  },
  {
        abbreviation: "C/B",
        meaning: "Circuit Breaker"
  },
  {
        abbreviation: "C/L",
        meaning: "Checklist"
  },
  {
        abbreviation: "C/M",
        meaning: "Command/Monitor"
  },
  {
        abbreviation: "C/O",
        meaning: "Change Over"
  },
  {
        abbreviation: "C/S",
        meaning: "Call Sign"
  },
  {
        abbreviation: "CA",
        meaning: "Cable Assembly"
  },
  {
        abbreviation: "CA/CRL",
        meaning: "Certification Authority/Certificate Revocation List"
  },
  {
        abbreviation: "CAA",
        meaning: "Civil Aviation Authority (UK)"
  },
  {
        abbreviation: "CAB",
        meaning: "Cabin"
  },
  {
        abbreviation: "CAC",
        meaning: "Crew Alerting Computer"
  },
  {
        abbreviation: "CAD",
        meaning: "Computer Assisted Design"
  },
  {
        abbreviation: "CaDoc",
        meaning: "Cabin Documentation Display"
  },
  {
        abbreviation: "CAL",
        meaning: "Calibration"
  },
  {
        abbreviation: "CAL",
        meaning: "Calibrated"
  },
  {
        abbreviation: "CAL",
        meaning: "Cockpit Amplifier Loudspeaker"
  },
  {
        abbreviation: "CAM",
        meaning: "Cabin Assignment Module"
  },
  {
        abbreviation: "CAM-BTA",
        meaning: "Corrected Altimeter Monitor - Below Transition Altitude"
  },
  {
        abbreviation: "CAMIP",
        meaning: "Capacitive Measurements of Insulating Properties"
  },
  {
        abbreviation: "CAMO",
        meaning: "Continuing Airworthiness Management Organisation"
  },
  {
        abbreviation: "CAN",
        meaning: "Controller Area Network"
  },
  {
        abbreviation: "CANC",
        meaning: "Cancellation"
  },
  {
        abbreviation: "CANCD",
        meaning: "Cancelled"
  },
  {
        abbreviation: "CAO",
        meaning: "Ceiling Air Outlet"
  },
  {
        abbreviation: "CAOA",
        meaning: "Corrected Angle Of Attack"
  },
  {
        abbreviation: "CAOM",
        meaning: "Cabin Attendant Operating Manual"
  },
  {
        abbreviation: "CAP",
        meaning: "Capture"
  },
  {
        abbreviation: "CAPT",
        meaning: "Captain"
  },
  {
        abbreviation: "CAS",
        meaning: "Calibrated Air Speed"
  },
  {
        abbreviation: "CAS",
        meaning: "Cabin Attendant Seat"
  },
  {
        abbreviation: "CAS",
        meaning: "Calibrated Airspeed"
  },
  {
        abbreviation: "CAT",
        meaning: "Category"
  },
  {
        abbreviation: "CAT",
        meaning: "Clear Air Turbulence"
  },
  {
        abbreviation: "CATCH",
        meaning: "Complex Anomaly Tracking and Search"
  },
  {
        abbreviation: "CAU",
        meaning: "Crew Alerting Unit"
  },
  {
        abbreviation: "CAUT",
        meaning: "Caution"
  },
  {
        abbreviation: "CAX",
        meaning: "Compartment Air Extraction"
  },
  {
        abbreviation: "CB,C/B",
        meaning: "Circuit Breaker"
  },
  {
        abbreviation: "CBB",
        meaning: "Connexion By Boeing"
  },
  {
        abbreviation: "CBIT",
        meaning: "Continuous BITE"
  },
  {
        abbreviation: "CBM",
        meaning: "Circuit Breaker Monitoring"
  },
  {
        abbreviation: "CBMF",
        meaning: "Circuit Breaker Monitoring Function"
  },
  {
        abbreviation: "CBMS",
        meaning: "Circuit Breaker Monitoring System"
  },
  {
        abbreviation: "CBMU",
        meaning: "Circuit Breaker Monitoring Unit"
  },
  {
        abbreviation: "CBP",
        meaning: "Circuit Breaker Panel"
  },
  {
        abbreviation: "CBP",
        meaning: "(HP) Compressor Bleed Pressure"
  },
  {
        abbreviation: "CBT",
        meaning: "Computer Based Training"
  },
  {
        abbreviation: "CC",
        meaning: "Current Comparator"
  },
  {
        abbreviation: "CCA",
        meaning: "Central Control Actuator"
  },
  {
        abbreviation: "CCB",
        meaning: "Compartment Control Box"
  },
  {
        abbreviation: "CCB",
        meaning: "Cargo Control Box"
  },
  {
        abbreviation: "CCC",
        meaning: "Crash Crew Chart"
  },
  {
        abbreviation: "CCCP",
        meaning: "Compressor Cavity Control Pressure"
  },
  {
        abbreviation: "CCCV",
        meaning: "Core Compartment Cooling Valve"
  },
  {
        abbreviation: "CCD",
        meaning: "Cursor Control Device"
  },
  {
        abbreviation: "CCD",
        meaning: "Cabin Crew Data"
  },
  {
        abbreviation: "CCDS",
        meaning: "Cabin and Cargo Digitalization System"
  },
  {
        abbreviation: "CCFG",
        meaning: "Compact Constant Frequency Generator"
  },
  {
        abbreviation: "CCG",
        meaning: "Cabin Configuration Guide"
  },
  {
        abbreviation: "CCL",
        meaning: "Cargo Compartment Light"
  },
  {
        abbreviation: "CCL",
        meaning: "Convective Condensation Level"
  },
  {
        abbreviation: "CCMail",
        meaning: "Cabin Crew Mailing"
  },
  {
        abbreviation: "CCOC",
        meaning: "Combustion Casing Outer Case"
  },
  {
        abbreviation: "CCOM",
        meaning: "Cabin Crew Operating Manual"
  },
  {
        abbreviation: "CCR",
        meaning: "Credit Card Reader"
  },
  {
        abbreviation: "CCRC",
        meaning: "Cabin Crew Rest Compartment"
  },
  {
        abbreviation: "CCRM",
        meaning: "Cabin Crew Rest Module"
  },
  {
        abbreviation: "CCS",
        meaning: "Cabin Communication System"
  },
  {
        abbreviation: "CCU",
        meaning: "CSAS Control Unit"
  },
  {
        abbreviation: "CCW",
        meaning: "Counter Clockwise"
  },
  {
        abbreviation: "CCW",
        meaning: "Counterclockwise"
  },
  {
        abbreviation: "CD",
        meaning: "Compact Disk"
  },
  {
        abbreviation: "CD",
        meaning: "Control Display"
  },
  {
        abbreviation: "CDA",
        meaning: "Continuous Descent Approach"
  },
  {
        abbreviation: "CDAM",
        meaning: "Centralized Data Acquisition Module"
  },
  {
        abbreviation: "CDAS",
        meaning: "Cargo Door Actuation System"
  },
  {
        abbreviation: "CDAU",
        meaning: "Centralized Data Acquisition Unit"
  },
  {
        abbreviation: "CDC",
        meaning: "Cargo Door Controller"
  },
  {
        abbreviation: "CDC",
        meaning: "Crash Detection Circuit"
  },
  {
        abbreviation: "CDCCL",
        meaning: "Critical Design Configuration Control Limitation"
  },
  {
        abbreviation: "CDCV",
        meaning: "Cargo Door Control Valve"
  },
  {
        abbreviation: "CDI",
        meaning: "Course Deviation Indicator"
  },
  {
        abbreviation: "CDL",
        meaning: "Configuration Deviation List"
  },
  {
        abbreviation: "CDLC",
        meaning: "Centralized Data Loading Connector"
  },
  {
        abbreviation: "CDLCU",
        meaning: "Cockpit Door Locking Control Unit"
  },
  {
        abbreviation: "CDLS",
        meaning: "Cockpit Door Locking System"
  },
  {
        abbreviation: "CDM",
        meaning: "Cockpit Door Module"
  },
  {
        abbreviation: "CDM",
        meaning: "Coolant Distribution Module"
  },
  {
        abbreviation: "CDP",
        meaning: "Cabin Data Port"
  },
  {
        abbreviation: "CDP",
        meaning: "Cargo Display Panel"
  },
  {
        abbreviation: "CDP",
        meaning: "Compressor Discharge Pressure"
  },
  {
        abbreviation: "CDP",
        meaning: "(HP) Compressor Discharge Pressure"
  },
  {
        abbreviation: "CDS",
        meaning: "Component Documentation Status"
  },
  {
        abbreviation: "CDS",
        meaning: "Control and Display System"
  },
  {
        abbreviation: "CDSS",
        meaning: "Cockpit Door Surveillance System"
  },
  {
        abbreviation: "CDSU",
        meaning: "Cockpit Door Surveillance Unit"
  },
  {
        abbreviation: "CDU",
        meaning: "Center Drive Unit"
  },
  {
        abbreviation: "CDU",
        meaning: "Control and Display Unit"
  },
  {
        abbreviation: "CDU",
        meaning: "Control Display Unit"
  },
  {
        abbreviation: "CE",
        meaning: "Centralized Equipment"
  },
  {
        abbreviation: "CED",
        meaning: "Cooling Effect Detector"
  },
  {
        abbreviation: "CEH",
        meaning: "Complex Electronic Hardware"
  },
  {
        abbreviation: "CEL",
        meaning: "Component Evolution List"
  },
  {
        abbreviation: "CELLI",
        meaning: "Ceiling Emergency LED Light"
  },
  {
        abbreviation: "CEO",
        meaning: "Current Engine Option"
  },
  {
        abbreviation: "CERAP",
        meaning: "Combined Center Rapcon"
  },
  {
        abbreviation: "CESM",
        meaning: "Commercial Engine Service Memorandum"
  },
  {
        abbreviation: "CEV",
        meaning: "Centre d'Essais en Vol"
  },
  {
        abbreviation: "CEV",
        meaning: "Commercial Equipment Ventilation"
  },
  {
        abbreviation: "CF",
        meaning: "Course to a Fixed Waypoint"
  },
  {
        abbreviation: "CFC",
        meaning: "Carbon Fiber Composite"
  },
  {
        abbreviation: "CFCRC",
        meaning: "Center Flight Crew Rest Compartment"
  },
  {
        abbreviation: "CFDIU",
        meaning: "Centralized Fault Display Interface Unit"
  },
  {
        abbreviation: "CFDS",
        meaning: "Centralized Fault Display System"
  },
  {
        abbreviation: "CFFC",
        meaning: "Cockpit Fixed Frequency Converter"
  },
  {
        abbreviation: "CFM",
        meaning: "Cable Fabrication Manual"
  },
  {
        abbreviation: "CFM",
        meaning: "GE's Commercial Fan (CF) + SNECMA's Motors (M)"
  },
  {
        abbreviation: "CFM",
        meaning: "Cubic Feet per Minute"
  },
  {
        abbreviation: "CFMI",
        meaning: "CFM International"
  },
  {
        abbreviation: "CFMI",
        meaning: "Joint CFM International"
  },
  {
        abbreviation: "CFR",
        meaning: "Current Flight Report"
  },
  {
        abbreviation: "CFR",
        meaning: "Coopetative Fuel Research"
  },
  {
        abbreviation: "CFRP",
        meaning: "Carbon Fiber Reinforced Plastic"
  },
  {
        abbreviation: "CFS",
        meaning: "Cabin File Server"
  },
  {
        abbreviation: "CFVCU",
        meaning: "Cargo Fire Verification Control Unit"
  },
  {
        abbreviation: "CFVS",
        meaning: "Cargo Fire Verification System"
  },
  {
        abbreviation: "CG",
        meaning: "Center of Gravity"
  },
  {
        abbreviation: "CGCS",
        meaning: "Center of Gravity Control System"
  },
  {
        abbreviation: "CH",
        meaning: "Character"
  },
  {
        abbreviation: "CH",
        meaning: "Cargo Hold"
  },
  {
        abbreviation: "CH",
        meaning: "Compass Heading"
  },
  {
        abbreviation: "CHAN",
        meaning: "Channel"
  },
  {
        abbreviation: "CHAN, CH",
        meaning: "Channel"
  },
  {
        abbreviation: "CHATV",
        meaning: "Channel Active"
  },
  {
        abbreviation: "CHG",
        meaning: "Change"
  },
  {
        abbreviation: "CHK",
        meaning: "Check"
  },
  {
        abbreviation: "CHMBR",
        meaning: "Chamber"
  },
  {
        abbreviation: "CHR",
        meaning: "Chronograph"
  },
  {
        abbreviation: "CHRG",
        meaning: "Charge"
  },
  {
        abbreviation: "CHRGR",
        meaning: "Charger"
  },
  {
        abbreviation: "CHRO",
        meaning: "Chronometer"
  },
  {
        abbreviation: "CI",
        meaning: "Cost Index"
  },
  {
        abbreviation: "CIC",
        meaning: "Compressor Intermediate Case"
  },
  {
        abbreviation: "CIDS",
        meaning: "Cabin Intercommunication Data System"
  },
  {
        abbreviation: "CIDS",
        meaning: "Cabin Inter Communication Data System"
  },
  {
        abbreviation: "CIF",
        meaning: "Compressor Inlet Temperature"
  },
  {
        abbreviation: "CIN",
        meaning: "Change Identification Number"
  },
  {
        abbreviation: "CINS",
        meaning: "Cabin Information Network System"
  },
  {
        abbreviation: "CIP",
        meaning: "(HP) Compressor Inlet Pressure"
  },
  {
        abbreviation: "CIR",
        meaning: "Common Information Repository"
  },
  {
        abbreviation: "CIS",
        meaning: "Cabin Interphone System"
  },
  {
        abbreviation: "CIT",
        meaning: "Compressor Inlet Temperature"
  },
  {
        abbreviation: "CIT",
        meaning: "(HP) Compressor Inlet Temperature"
  },
  {
        abbreviation: "CIU",
        meaning: "Camera Interface Unit"
  },
  {
        abbreviation: "CJC",
        meaning: "Cold Junction Compensation"
  },
  {
        abbreviation: "CK",
        meaning: "Check"
  },
  {
        abbreviation: "CK, CHK",
        meaning: "Check"
  },
  {
        abbreviation: "CKPT",
        meaning: "Cockpit"
  },
  {
        abbreviation: "CKT",
        meaning: "Circuit"
  },
  {
        abbreviation: "CL",
        meaning: "Center Line"
  },
  {
        abbreviation: "CL",
        meaning: "Checklist"
  },
  {
        abbreviation: "CL",
        meaning: "Close"
  },
  {
        abbreviation: "CL",
        meaning: "Condition Lever"
  },
  {
        abbreviation: "CL/OP",
        meaning: "Closure/Opening"
  },
  {
        abbreviation: "CLA",
        meaning: "Condition Lever Angle"
  },
  {
        abbreviation: "CLB",
        meaning: "Climb"
  },
  {
        abbreviation: "CLCTR",
        meaning: "Collector"
  },
  {
        abbreviation: "CLEDU",
        meaning: "Cabin LED Unit"
  },
  {
        abbreviation: "CLG",
        meaning: "Centerline Landing Gear"
  },
  {
        abbreviation: "CLG",
        meaning: "Ceiling"
  },
  {
        abbreviation: "CLK",
        meaning: "Clock"
  },
  {
        abbreviation: "CLM",
        meaning: "Component Location Manual"
  },
  {
        abbreviation: "CLNG",
        meaning: "Ceiling"
  },
  {
        abbreviation: "CLOG",
        meaning: "Clogging"
  },
  {
        abbreviation: "CLOGD",
        meaning: "Clogged"
  },
  {
        abbreviation: "CLPR",
        meaning: "Clapper"
  },
  {
        abbreviation: "CLR",
        meaning: "Clear"
  },
  {
        abbreviation: "CLRD",
        meaning: "Cleared"
  },
  {
        abbreviation: "CLRNC",
        meaning: "Clearance"
  },
  {
        abbreviation: "CLS",
        meaning: "Cargo Loading System"
  },
  {
        abbreviation: "CLS",
        meaning: "Cargo Loading System Manual"
  },
  {
        abbreviation: "CLSD",
        meaning: "Closed"
  },
  {
        abbreviation: "CLSG",
        meaning: "Closing"
  },
  {
        abbreviation: "CM",
        meaning: "Conversion Manual"
  },
  {
        abbreviation: "CM",
        meaning: "Conversion Module"
  },
  {
        abbreviation: "CMC",
        meaning: "Central Maintenance Computer"
  },
  {
        abbreviation: "CMD",
        meaning: "Command"
  },
  {
        abbreviation: "CMEU",
        meaning: "Cabin Passenger Management Memory Expansion Unit"
  },
  {
        abbreviation: "CMF",
        meaning: "Central Maintenance Function"
  },
  {
        abbreviation: "CML",
        meaning: "Consumable Material List"
  },
  {
        abbreviation: "CMM",
        meaning: "Calibration Memory Module"
  },
  {
        abbreviation: "CMM",
        meaning: "Component Maintenance Manual"
  },
  {
        abbreviation: "CMM IPL",
        meaning: "Component Maintenance Manual Illustrated Parts List"
  },
  {
        abbreviation: "CMMV",
        meaning: "Component Maintenance Manual Vendor"
  },
  {
        abbreviation: "C-MOS",
        meaning: "Complementary Metal Oxyde Semiconductor"
  },
  {
        abbreviation: "CMPLTD",
        meaning: "Completed"
  },
  {
        abbreviation: "CMPTR",
        meaning: "Computer"
  },
  {
        abbreviation: "CMR",
        meaning: "Certification Maintenance Requirements"
  },
  {
        abbreviation: "CMS",
        meaning: "Centralized Maintenance System"
  },
  {
        abbreviation: "CMS",
        meaning: "Component Maintenance Sheet"
  },
  {
        abbreviation: "CMT",
        meaning: "Cabin Management Terminal"
  },
  {
        abbreviation: "CMU",
        meaning: "Communications Management Unit"
  },
  {
        abbreviation: "CMV",
        meaning: "Concentrator and Multiplexer for Video"
  },
  {
        abbreviation: "CNA",
        meaning: "Common Nozzle Assembly"
  },
  {
        abbreviation: "CNCTN",
        meaning: "Connection"
  },
  {
        abbreviation: "CNCTR",
        meaning: "Connector"
  },
  {
        abbreviation: "CNSU",
        meaning: "Cabin Network Server Unit"
  },
  {
        abbreviation: "CNTNR",
        meaning: "Container"
  },
  {
        abbreviation: "CNTOR",
        meaning: "Contactor"
  },
  {
        abbreviation: "CNTRTR",
        meaning: "Concentrator"
  },
  {
        abbreviation: "CNU",
        meaning: "Cabin Network Unit"
  },
  {
        abbreviation: "CNX",
        meaning: "CONNECTIVITY"
  },
  {
        abbreviation: "CNX",
        meaning: "Cancelled"
  },
  {
        abbreviation: "CO RTE",
        meaning: "Company Route"
  },
  {
        abbreviation: "COAS",
        meaning: "Cabin Operations Applications System"
  },
  {
        abbreviation: "COAX",
        meaning: "Coaxial"
  },
  {
        abbreviation: "COC",
        meaning: "Cabin Operation Center"
  },
  {
        abbreviation: "COC",
        meaning: "Customer Originated Change"
  },
  {
        abbreviation: "COCT",
        meaning: "Cabin Operations Consultation Tool"
  },
  {
        abbreviation: "CODEP",
        meaning: "High Temperature Coating"
  },
  {
        abbreviation: "COLLI",
        meaning: "Contour LED Light"
  },
  {
        abbreviation: "COLTS",
        meaning: "Combined Oil Level and Temperature Sensor"
  },
  {
        abbreviation: "COM",
        meaning: "Communication"
  },
  {
        abbreviation: "COM",
        meaning: "Command"
  },
  {
        abbreviation: "COMC",
        meaning: "CSAS Overheat Monitoring Controller"
  },
  {
        abbreviation: "COMDL",
        meaning: "Coding Module"
  },
  {
        abbreviation: "COML",
        meaning: "Commercial"
  },
  {
        abbreviation: "COMM",
        meaning: "Communication"
  },
  {
        abbreviation: "COMP",
        meaning: "Compass"
  },
  {
        abbreviation: "COMP",
        meaning: "Compensator"
  },
  {
        abbreviation: "COMP",
        meaning: "Compressor"
  },
  {
        abbreviation: "COMPSN",
        meaning: "Compensation"
  },
  {
        abbreviation: "COMPT",
        meaning: "Compartment"
  },
  {
        abbreviation: "COMPTR",
        meaning: "Comparator"
  },
  {
        abbreviation: "CON",
        meaning: "Continuous"
  },
  {
        abbreviation: "COND",
        meaning: "Condition"
  },
  {
        abbreviation: "COND",
        meaning: "Conditioned"
  },
  {
        abbreviation: "COND",
        meaning: "Conditioning"
  },
  {
        abbreviation: "CONDTR",
        meaning: "Conditioner"
  },
  {
        abbreviation: "CONFIG",
        meaning: "Configuration"
  },
  {
        abbreviation: "CONFIRMD",
        meaning: "Confirmed"
  },
  {
        abbreviation: "CONN",
        meaning: "Connection"
  },
  {
        abbreviation: "CONSUMPT",
        meaning: "Consumption"
  },
  {
        abbreviation: "CONT",
        meaning: "Continue"
  },
  {
        abbreviation: "CONT",
        meaning: "Continuous"
  },
  {
        abbreviation: "CONT",
        meaning: "Controller"
  },
  {
        abbreviation: "CONT",
        meaning: "Control"
  },
  {
        abbreviation: "CONV",
        meaning: "Converter"
  },
  {
        abbreviation: "COOL",
        meaning: "Cooler"
  },
  {
        abbreviation: "COOL",
        meaning: "Cooling"
  },
  {
        abbreviation: "COOLG",
        meaning: "Cooling"
  },
  {
        abbreviation: "COOLR",
        meaning: "Cooler"
  },
  {
        abbreviation: "COORD",
        meaning: "Coordination"
  },
  {
        abbreviation: "CORR",
        meaning: "Correction"
  },
  {
        abbreviation: "COS",
        meaning: "Cowl Opening System"
  },
  {
        abbreviation: "COSL",
        meaning: "Component Operating and Storage Limits"
  },
  {
        abbreviation: "COSPAS",
        meaning: "Cosmicheskaya Sistema Poiska Avariynyh Sudov"
  },
  {
        abbreviation: "COTS",
        meaning: "Commercial Off-The-Shelf"
  },
  {
        abbreviation: "COUNT",
        meaning: "Counter"
  },
  {
        abbreviation: "COWL",
        meaning: "Cowling"
  },
  {
        abbreviation: "CP",
        meaning: "Center of Pressure"
  },
  {
        abbreviation: "CP",
        meaning: "Control Panel"
  },
  {
        abbreviation: "CPC",
        meaning: "Cabin Pressure Controller"
  },
  {
        abbreviation: "CPCS",
        meaning: "Cabin Pressure Control System"
  },
  {
        abbreviation: "CPCU",
        meaning: "Cabin Pressure Control Unit"
  },
  {
        abbreviation: "CPDB",
        meaning: "Customized Performance DataBase"
  },
  {
        abbreviation: "CPDLC",
        meaning: "Controller-Pilot DataLink Communication"
  },
  {
        abbreviation: "CPIF",
        meaning: "Control Power Intermediate Frequency"
  },
  {
        abbreviation: "CPIOM",
        meaning: "Core Processing Input/Output Module"
  },
  {
        abbreviation: "CPLG",
        meaning: "Coupling"
  },
  {
        abbreviation: "CPLR",
        meaning: "Coupler"
  },
  {
        abbreviation: "CPMS",
        meaning: "Cabin and Passenger Management System"
  },
  {
        abbreviation: "CPMU",
        meaning: "Cabin Passenger Management Unit"
  },
  {
        abbreviation: "CPNY",
        meaning: "Company"
  },
  {
        abbreviation: "CPRSR",
        meaning: "Compressor"
  },
  {
        abbreviation: "CPTR",
        meaning: "Computer"
  },
  {
        abbreviation: "CPU",
        meaning: "Central Processing Unit"
  },
  {
        abbreviation: "CR",
        meaning: "Carriage Return"
  },
  {
        abbreviation: "CR",
        meaning: "Cross"
  },
  {
        abbreviation: "CRC",
        meaning: "Continuous Repetitive Chime"
  },
  {
        abbreviation: "CRC",
        meaning: "Cyclic Redundancy Check"
  },
  {
        abbreviation: "CRC",
        meaning: "Crew Rest Compartment"
  },
  {
        abbreviation: "CRDC",
        meaning: "Common Remote Data Concentrator"
  },
  {
        abbreviation: "CRES",
        meaning: "Corrosion-Resistant Steel"
  },
  {
        abbreviation: "CRG",
        meaning: "Cargo"
  },
  {
        abbreviation: "CRI",
        meaning: "Certification Review Item"
  },
  {
        abbreviation: "CRM",
        meaning: "Communication Router Module"
  },
  {
        abbreviation: "CROR",
        meaning: "Contra Rotating Open Rotor"
  },
  {
        abbreviation: "CROSSFEEDR",
        meaning: "Crossfeeder"
  },
  {
        abbreviation: "CRR",
        meaning: "Crew Rest Room"
  },
  {
        abbreviation: "CRS",
        meaning: "Course"
  },
  {
        abbreviation: "CRS",
        meaning: "Certificate of Release to Service"
  },
  {
        abbreviation: "CRT",
        meaning: "Cathode Ray Tube"
  },
  {
        abbreviation: "CRU",
        meaning: "Central Refirgeration Unit"
  },
  {
        abbreviation: "CRU",
        meaning: "Cabin Router Unit"
  },
  {
        abbreviation: "CRU",
        meaning: "Card Reader Unit"
  },
  {
        abbreviation: "CRZ",
        meaning: "Cruise"
  },
  {
        abbreviation: "CS",
        meaning: "Center Spar"
  },
  {
        abbreviation: "CS",
        meaning: "Certification Specification"
  },
  {
        abbreviation: "CS",
        meaning: "Constant Speed Drive"
  },
  {
        abbreviation: "CSAS",
        meaning: "Conditioned Service Air System"
  },
  {
        abbreviation: "CSBS",
        meaning: "Controllable Sunlight Blocking System"
  },
  {
        abbreviation: "CSBSU",
        meaning: "Controllable Sunlight Blocking System Unit"
  },
  {
        abbreviation: "CSD",
        meaning: "Constant Speed Drive"
  },
  {
        abbreviation: "CSDM",
        meaning: "Cargo Smoke Detection Module"
  },
  {
        abbreviation: "CSDU",
        meaning: "Compact Satellite Data Unit"
  },
  {
        abbreviation: "CSEU",
        meaning: "Control System Electronic Unit"
  },
  {
        abbreviation: "CSI",
        meaning: "Cycles Since Installation"
  },
  {
        abbreviation: "CSK",
        meaning: "Countersink"
  },
  {
        abbreviation: "CSL",
        meaning: "Console"
  },
  {
        abbreviation: "CSM",
        meaning: "Computer Software Manual"
  },
  {
        abbreviation: "CSM/G",
        meaning: "Constant Speed Motor/Generator"
  },
  {
        abbreviation: "CSN",
        meaning: "Cycles Since New"
  },
  {
        abbreviation: "CSR",
        meaning: "Certificate Signing Request"
  },
  {
        abbreviation: "CSTR",
        meaning: "Constraint"
  },
  {
        abbreviation: "CSU",
        meaning: "Command Sensor Unit"
  },
  {
        abbreviation: "CSU",
        meaning: "Commande Sensor Unit"
  },
  {
        abbreviation: "CT",
        meaning: "Current Transformer"
  },
  {
        abbreviation: "CTAF",
        meaning: "Common Traffic Advisory Frequency"
  },
  {
        abbreviation: "CTD",
        meaning: "Column Timer Decoder"
  },
  {
        abbreviation: "CTK",
        meaning: "Center Tank"
  },
  {
        abbreviation: "CTL",
        meaning: "Central"
  },
  {
        abbreviation: "CTL",
        meaning: "Control"
  },
  {
        abbreviation: "CTL PNL",
        meaning: "Control Panel"
  },
  {
        abbreviation: "CTLR",
        meaning: "Controller"
  },
  {
        abbreviation: "CTMS",
        meaning: "Cargo Tracking & Monitoring System"
  },
  {
        abbreviation: "CTR",
        meaning: "Center"
  },
  {
        abbreviation: "CTR",
        meaning: "Contour"
  },
  {
        abbreviation: "CTS",
        meaning: "Clear To Send"
  },
  {
        abbreviation: "CTU",
        meaning: "Cabin Telecommunications Unit"
  },
  {
        abbreviation: "CU",
        meaning: "Control Unit"
  },
  {
        abbreviation: "CU",
        meaning: "Cockpit Unit"
  },
  {
        abbreviation: "CUDU",
        meaning: "Current Unbalance Detection Unit"
  },
  {
        abbreviation: "CUR",
        meaning: "Current"
  },
  {
        abbreviation: "CVDR",
        meaning: "Cockpit Voice and Data Recorder"
  },
  {
        abbreviation: "CVFP",
        meaning: "Charted Visual Flight Procedure"
  },
  {
        abbreviation: "CVM",
        meaning: "Cabin Video Monitoring"
  },
  {
        abbreviation: "CVMS",
        meaning: "Cabin Video Monitoring System"
  },
  {
        abbreviation: "CVMU",
        meaning: "Cell Voltage Monitoring Unit"
  },
  {
        abbreviation: "CVR",
        meaning: "Cockpit Voice Recorder"
  },
  {
        abbreviation: "CVRS",
        meaning: "Cockpit Voice Recorder System"
  },
  {
        abbreviation: "CVT",
        meaning: "Center Vent Tube"
  },
  {
        abbreviation: "CVU",
        meaning: "Crypto Voice Unit"
  },
  {
        abbreviation: "CW",
        meaning: "Clockwise"
  },
  {
        abbreviation: "CW",
        meaning: "Continuous Wave"
  },
  {
        abbreviation: "cw",
        meaning: "Carrier Wave"
  },
  {
        abbreviation: "CWB",
        meaning: "Center Wing Box"
  },
  {
        abbreviation: "CWLU",
        meaning: "Cabin Wireless LAN Unit"
  },
  {
        abbreviation: "CWS",
        meaning: "Cabin Work Station"
  },
  {
        abbreviation: "CWS",
        meaning: "Control Wheel Steering"
  },
  {
        abbreviation: "CWSIU",
        meaning: "Combined Wheel Speed Interface Unit"
  },
  {
        abbreviation: "CY",
        meaning: "Cycle"
  },
  {
        abbreviation: "CYL",
        meaning: "Cylinder"
  },
  {
        abbreviation: "D&C",
        meaning: "Delays and Cancellations"
  },
  {
        abbreviation: "D/LNA",
        meaning: "Diplexer/Low Noise Amplifier"
  },
  {
        abbreviation: "DA",
        meaning: "Drift Angle"
  },
  {
        abbreviation: "DABS",
        meaning: "Discrete Addressable Beacon System"
  },
  {
        abbreviation: "DAC",
        meaning: "Digital to Analog Converter"
  },
  {
        abbreviation: "DAC",
        meaning: "Drawing Aperture Card"
  },
  {
        abbreviation: "DADC",
        meaning: "Digital Air Data Computer"
  },
  {
        abbreviation: "DaFA",
        meaning: "Data For Application"
  },
  {
        abbreviation: "DAGM",
        meaning: "Dry Air Generation Module"
  },
  {
        abbreviation: "DAGS",
        meaning: "Dry Air Generation System"
  },
  {
        abbreviation: "DAM",
        meaning: "Data Acquisition Module"
  },
  {
        abbreviation: "DAMP",
        meaning: "Damping"
  },
  {
        abbreviation: "DAMPG",
        meaning: "Damping"
  },
  {
        abbreviation: "DAN",
        meaning: "Deca Newton"
  },
  {
        abbreviation: "DAR",
        meaning: "Digital ACMS Recorder"
  },
  {
        abbreviation: "DAR",
        meaning: "Digital AIDS Recorder"
  },
  {
        abbreviation: "DASM",
        meaning: "Door ASymmetry Monitoring"
  },
  {
        abbreviation: "D-ATIS",
        meaning: "Digital Automatic Terminal Information System"
  },
  {
        abbreviation: "DAU",
        meaning: "Data Acquisition Unit"
  },
  {
        abbreviation: "DB",
        meaning: "Database"
  },
  {
        abbreviation: "dB",
        meaning: "Decibel"
  },
  {
        abbreviation: "DBC",
        meaning: "Data Bus Communication"
  },
  {
        abbreviation: "DBCR",
        meaning: "DataBase Change Request"
  },
  {
        abbreviation: "DBLR",
        meaning: "Doubler"
  },
  {
        abbreviation: "DBPS",
        meaning: "Display Based Passenger Sign"
  },
  {
        abbreviation: "DBTS",
        meaning: "Data Broadband Transceiver System"
  },
  {
        abbreviation: "DBUS",
        meaning: "Digital Backup Speed"
  },
  {
        abbreviation: "DC",
        meaning: "Direct Current"
  },
  {
        abbreviation: "DC1",
        meaning: "Device Control 1"
  },
  {
        abbreviation: "DCA",
        meaning: "Dedicated Control Alternator"
  },
  {
        abbreviation: "DCD",
        meaning: "Data Control and Display"
  },
  {
        abbreviation: "DCDR",
        meaning: "Decoder"
  },
  {
        abbreviation: "DCDU",
        meaning: "Datalink Control and Display Unit"
  },
  {
        abbreviation: "DCL",
        meaning: "Digital Cabin Logbook"
  },
  {
        abbreviation: "DCL-CCT",
        meaning: "Digital Cabin Logbook - Cabin Configuration Tool"
  },
  {
        abbreviation: "DCP",
        meaning: "Display Control Panel"
  },
  {
        abbreviation: "DCR",
        meaning: "Dock on Crew Rest"
  },
  {
        abbreviation: "DCRC",
        meaning: "Dock on Crew Rest Compartment"
  },
  {
        abbreviation: "DCU",
        meaning: "Dimming Control Unit"
  },
  {
        abbreviation: "DCU",
        meaning: "Direction Control Unit"
  },
  {
        abbreviation: "DCV",
        meaning: "Directional Control Valve"
  },
  {
        abbreviation: "DDM",
        meaning: "Digital Data Module"
  },
  {
        abbreviation: "DDM",
        meaning: "Difference in Depth of Modulation"
  },
  {
        abbreviation: "DDP",
        meaning: "Declaration of Design and Performance"
  },
  {
        abbreviation: "DDRMI",
        meaning: "Digital Distance and Radio Magnetic Indicator"
  },
  {
        abbreviation: "DDV",
        meaning: "Direct Drive Valve"
  },
  {
        abbreviation: "DE",
        meaning: "Decoder Encoder"
  },
  {
        abbreviation: "DECEL",
        meaning: "Decelerate"
  },
  {
        abbreviation: "DECOMPRESS",
        meaning: "Decompression"
  },
  {
        abbreviation: "DECR",
        meaning: "Decrease"
  },
  {
        abbreviation: "DED",
        meaning: "Dedicated"
  },
  {
        abbreviation: "DEDP",
        meaning: "Data Entry and Display Panel"
  },
  {
        abbreviation: "DEF",
        meaning: "Definition"
  },
  {
        abbreviation: "DEFOG",
        meaning: "Defogging"
  },
  {
        abbreviation: "DEFRD",
        meaning: "Deferred"
  },
  {
        abbreviation: "DEFUEL",
        meaning: "Defueling"
  },
  {
        abbreviation: "DEG",
        meaning: "Degree"
  },
  {
        abbreviation: "DEGRADD",
        meaning: "Degraded"
  },
  {
        abbreviation: "DEL",
        meaning: "Delete"
  },
  {
        abbreviation: "DELTA P",
        meaning: "Differential Pressure"
  },
  {
        abbreviation: "DEM",
        meaning: "Demand"
  },
  {
        abbreviation: "DEOA",
        meaning: "Door Emergency Opening Actuator"
  },
  {
        abbreviation: "DEP",
        meaning: "Departure"
  },
  {
        abbreviation: "DEPR",
        meaning: "Depressurize"
  },
  {
        abbreviation: "DEPRECS",
        meaning: "Deployable Recorder System"
  },
  {
        abbreviation: "DEPRESS",
        meaning: "Depressurization"
  },
  {
        abbreviation: "DEPT",
        meaning: "Departure"
  },
  {
        abbreviation: "DES",
        meaning: "Descend"
  },
  {
        abbreviation: "DES",
        meaning: "Descent"
  },
  {
        abbreviation: "DESN",
        meaning: "Decision"
  },
  {
        abbreviation: "DEST",
        meaning: "Destination"
  },
  {
        abbreviation: "DET",
        meaning: "Detection"
  },
  {
        abbreviation: "DET",
        meaning: "Detector"
  },
  {
        abbreviation: "DETECTD",
        meaning: "Detected"
  },
  {
        abbreviation: "DEU",
        meaning: "Decoder/Encoder Unit"
  },
  {
        abbreviation: "DEV",
        meaning: "Deviation"
  },
  {
        abbreviation: "DEWIZ",
        meaning: "Distance Early Warning Identification Zone"
  },
  {
        abbreviation: "DF",
        meaning: "Direction Finder"
  },
  {
        abbreviation: "DFA",
        meaning: "Delayed Flap Approach"
  },
  {
        abbreviation: "DFCV",
        meaning: "Dual-Flapper Check Valve"
  },
  {
        abbreviation: "DFDAMU",
        meaning: "Digital Flight Data Acquisition and Management Unit"
  },
  {
        abbreviation: "DFDAU",
        meaning: "Digital Flight Data Acquisition Unit"
  },
  {
        abbreviation: "DFDR",
        meaning: "Digital Flight Data Recorder"
  },
  {
        abbreviation: "DFDRS",
        meaning: "Digital Flight Data Recording System"
  },
  {
        abbreviation: "DFDRS",
        meaning: "Digital Flight Data Recorder System"
  },
  {
        abbreviation: "DFIDU",
        meaning: "Dual Function Interactive Display Unit"
  },
  {
        abbreviation: "DFPPU",
        meaning: "Differential Feedback Position Pick-off Unit"
  },
  {
        abbreviation: "DFPRM",
        meaning: "Duct and Fuel Pipe Repair Manual"
  },
  {
        abbreviation: "DFPRM IPL",
        meaning: "Duct and Fuel Pipe Repair Manual Illustrated Parts List"
  },
  {
        abbreviation: "DFS",
        meaning: "Digital Frequency Selection"
  },
  {
        abbreviation: "DFSOV",
        meaning: "Dual Flow Shut-Off Valve"
  },
  {
        abbreviation: "DGI",
        meaning: "Digital Input"
  },
  {
        abbreviation: "DGO",
        meaning: "Digital Output"
  },
  {
        abbreviation: "DGPS",
        meaning: "Differential Global Positioning System"
  },
  {
        abbreviation: "DH",
        meaning: "Decision Height"
  },
  {
        abbreviation: "DHCP",
        meaning: "Dynamic Host Configuration Protocol"
  },
  {
        abbreviation: "DI",
        meaning: "Deionization"
  },
  {
        abbreviation: "DIA",
        meaning: "Diameter"
  },
  {
        abbreviation: "DIBU",
        meaning: "Door Illumination Ballast Unit"
  },
  {
        abbreviation: "DIFF",
        meaning: "Differential"
  },
  {
        abbreviation: "DIM",
        meaning: "Direction Input Module"
  },
  {
        abbreviation: "DIMM",
        meaning: "Dimmable"
  },
  {
        abbreviation: "DIP",
        meaning: "Dual In-line Package"
  },
  {
        abbreviation: "DIP",
        meaning: "Door Indication Panel"
  },
  {
        abbreviation: "DIPLXR",
        meaning: "Diplexer"
  },
  {
        abbreviation: "DIR",
        meaning: "Direct"
  },
  {
        abbreviation: "DIR",
        meaning: "Direction"
  },
  {
        abbreviation: "DIR",
        meaning: "Director"
  },
  {
        abbreviation: "DIR",
        meaning: "Direction/Director"
  },
  {
        abbreviation: "DISC",
        meaning: "Disconnect"
  },
  {
        abbreviation: "DISC",
        meaning: "Disconnected"
  },
  {
        abbreviation: "DISC",
        meaning: "Disconnection"
  },
  {
        abbreviation: "DISC",
        meaning: "Disconnect /Discrete"
  },
  {
        abbreviation: "DISCH",
        meaning: "Discharge"
  },
  {
        abbreviation: "DISCH",
        meaning: "Discharged"
  },
  {
        abbreviation: "DISCNTY",
        meaning: "Discontinuity"
  },
  {
        abbreviation: "DISCONT",
        meaning: "Discontinued"
  },
  {
        abbreviation: "DISP",
        meaning: "Dispatch"
  },
  {
        abbreviation: "DIST",
        meaning: "Distance"
  },
  {
        abbreviation: "DISTR",
        meaning: "Distribute"
  },
  {
        abbreviation: "DISTR",
        meaning: "Distribution"
  },
  {
        abbreviation: "DISTR",
        meaning: "Distributor"
  },
  {
        abbreviation: "DITCH",
        meaning: "Ditching"
  },
  {
        abbreviation: "DITS",
        meaning: "Digital Information Transfer System"
  },
  {
        abbreviation: "DIU",
        meaning: "Digital Interface Unit"
  },
  {
        abbreviation: "DIVERTG",
        meaning: "Diverting"
  },
  {
        abbreviation: "DK",
        meaning: "Deck"
  },
  {
        abbreviation: "DLC",
        meaning: "Direct Lift Control"
  },
  {
        abbreviation: "DLCM",
        meaning: "Data Loading Configuration Manager"
  },
  {
        abbreviation: "DLCS",
        meaning: "Data Loading and Configuration System"
  },
  {
        abbreviation: "DLK",
        meaning: "Data Link"
  },
  {
        abbreviation: "DLOAD",
        meaning: "Data Loading"
  },
  {
        abbreviation: "DLRB",
        meaning: "Data Loading Routing Box"
  },
  {
        abbreviation: "DLS",
        meaning: "Data Loading Selector"
  },
  {
        abbreviation: "DLSU",
        meaning: "Data Loading Selector Unit"
  },
  {
        abbreviation: "DM",
        meaning: "Data Module"
  },
  {
        abbreviation: "DM",
        meaning: "Dispatch Message"
  },
  {
        abbreviation: "DMA",
        meaning: "Direct Memory Access"
  },
  {
        abbreviation: "DMC",
        meaning: "Display Management Computer"
  },
  {
        abbreviation: "DMC",
        meaning: "Direct Maintenance Cost"
  },
  {
        abbreviation: "DMDLTR",
        meaning: "Demodulator"
  },
  {
        abbreviation: "DME",
        meaning: "Distance Measuring Equipment"
  },
  {
        abbreviation: "DMFF",
        meaning: "Door Monitoring and Flight Lock Function"
  },
  {
        abbreviation: "DMM",
        meaning: "Data Memory Module"
  },
  {
        abbreviation: "DMMC",
        meaning: "Documentation Manuel De Maintenance Constructeur"
  },
  {
        abbreviation: "DMP",
        meaning: "Display Management Processor"
  },
  {
        abbreviation: "DMPR",
        meaning: "Damper"
  },
  {
        abbreviation: "DMU",
        meaning: "Data Management Unit"
  },
  {
        abbreviation: "DMZ",
        meaning: "DeMilitarized Zone"
  },
  {
        abbreviation: "DN",
        meaning: "Down"
  },
  {
        abbreviation: "DNC",
        meaning: "Do Not Connect"
  },
  {
        abbreviation: "DNI",
        meaning: "Drawing Numerical Index"
  },
  {
        abbreviation: "DNLK",
        meaning: "Downlock"
  },
  {
        abbreviation: "DNLKD",
        meaning: "Downlocked"
  },
  {
        abbreviation: "DNLNK",
        meaning: "Downlink"
  },
  {
        abbreviation: "DNTKFX",
        meaning: "Down Track Fix"
  },
  {
        abbreviation: "DOC",
        meaning: "Direct Operating Cost"
  },
  {
        abbreviation: "DOD",
        meaning: "Domestic Object Damage"
  },
  {
        abbreviation: "DOLLI",
        meaning: "Dome LED Light"
  },
  {
        abbreviation: "DOT",
        meaning: "Department of Transportation"
  },
  {
        abbreviation: "DOW",
        meaning: "Dry Operating Weight"
  },
  {
        abbreviation: "DP",
        meaning: "Design Principle"
  },
  {
        abbreviation: "DPA",
        meaning: "Directional Pilot Valve"
  },
  {
        abbreviation: "DPCU",
        meaning: "Digital Passenger Control Unit"
  },
  {
        abbreviation: "DPDT",
        meaning: "Double Pole/Double Throw"
  },
  {
        abbreviation: "DPDT",
        meaning: "Double Pole, Double Throw"
  },
  {
        abbreviation: "DPE",
        meaning: "Distress Pre-activation of ELT"
  },
  {
        abbreviation: "DPI",
        meaning: "Differential Pressure Indicator"
  },
  {
        abbreviation: "DPS",
        meaning: "Differential Pressure Sensor"
  },
  {
        abbreviation: "DPSK",
        meaning: "Differential Phase Shift Key"
  },
  {
        abbreviation: "DPST",
        meaning: "Double Pole, Single Throw"
  },
  {
        abbreviation: "DR",
        meaning: "Dead Reckoning"
  },
  {
        abbreviation: "DR",
        meaning: "Door"
  },
  {
        abbreviation: "DRAIMS",
        meaning: "Digital Radio and Audio Integrating Management System"
  },
  {
        abbreviation: "DRM",
        meaning: "Duct Repair Manual"
  },
  {
        abbreviation: "DRMI",
        meaning: "Distance Radio Magnetic Indicator"
  },
  {
        abbreviation: "DRVG",
        meaning: "Driving"
  },
  {
        abbreviation: "DRVR",
        meaning: "Driver"
  },
  {
        abbreviation: "DS/C",
        meaning: "Digital Server/Controller"
  },
  {
        abbreviation: "DSB",
        meaning: "Door Sensor Block"
  },
  {
        abbreviation: "DSC",
        meaning: "Digital Signature Checker"
  },
  {
        abbreviation: "DSCRT",
        meaning: "Discrete"
  },
  {
        abbreviation: "DSCS",
        meaning: "Door and Escape Slide Control System"
  },
  {
        abbreviation: "DSCS",
        meaning: "Door and Slide Control System"
  },
  {
        abbreviation: "DSDL",
        meaning: "Dedicated Serial Data Link"
  },
  {
        abbreviation: "DSEB",
        meaning: "Digital Seat Electronic Box"
  },
  {
        abbreviation: "DSF",
        meaning: "Data Security Filter"
  },
  {
        abbreviation: "DSG",
        meaning: "Designation"
  },
  {
        abbreviation: "DSI",
        meaning: "Discrete Input"
  },
  {
        abbreviation: "DSIP",
        meaning: "Door/Slide Indication Panel"
  },
  {
        abbreviation: "DSM",
        meaning: "Decorative Sheet Material"
  },
  {
        abbreviation: "DSMCU",
        meaning: "Doors and Slides Management Control Unit"
  },
  {
        abbreviation: "DSMI",
        meaning: "Applications Specifications Mat\u00c4\u201a\u00c2\u00b0riaux Et Ingr\u00c4\u201a\u00c2\u00b0dients"
  },
  {
        abbreviation: "DSMS",
        meaning: "Doors and Slides Management System"
  },
  {
        abbreviation: "DSO",
        meaning: "Discrete Output"
  },
  {
        abbreviation: "DSP",
        meaning: "Datalink Service Provider"
  },
  {
        abbreviation: "DSP",
        meaning: "Display Select Panel"
  },
  {
        abbreviation: "DSPL",
        meaning: "Display"
  },
  {
        abbreviation: "DSPLYD",
        meaning: "Displayed"
  },
  {
        abbreviation: "DSUB",
        meaning: "D-subminiature"
  },
  {
        abbreviation: "DT",
        meaning: "Distress Tracking"
  },
  {
        abbreviation: "DT ALI",
        meaning: "Damage-Tolerant Airworthiness Limitation Items"
  },
  {
        abbreviation: "DTD",
        meaning: "Document Type Definition"
  },
  {
        abbreviation: "DTG",
        meaning: "Distance to Go"
  },
  {
        abbreviation: "DTMF",
        meaning: "Dual Tone Multiple Frequency"
  },
  {
        abbreviation: "DTMS",
        meaning: "Damage Tolerance Monitoring System"
  },
  {
        abbreviation: "DTMU",
        meaning: "Damage Tolerance Monitoring Unit"
  },
  {
        abbreviation: "DU",
        meaning: "Display Unit"
  },
  {
        abbreviation: "D-ULPA",
        meaning: "Double Ultra Low Particulate Air"
  },
  {
        abbreviation: "DVD",
        meaning: "Digital Versatile Disk"
  },
  {
        abbreviation: "DVFR",
        meaning: "Defense Visual Flight Rules"
  },
  {
        abbreviation: "DVI",
        meaning: "Digital Visual Interface"
  },
  {
        abbreviation: "DVI",
        meaning: "Detailed Visual Inspection"
  },
  {
        abbreviation: "DVR",
        meaning: "Digital Video Recorder"
  },
  {
        abbreviation: "DVRCR",
        meaning: "Differential Voltage Reverse Current Relay"
  },
  {
        abbreviation: "DWC",
        meaning: "Drip Water Collector"
  },
  {
        abbreviation: "DWG",
        meaning: "Drawing"
  },
  {
        abbreviation: "E",
        meaning: "East"
  },
  {
        abbreviation: "E/D",
        meaning: "End of Descent"
  },
  {
        abbreviation: "E/E",
        meaning: "Electrical/Electronic"
  },
  {
        abbreviation: "E/ECI",
        meaning: "Electrical/Electronic Common Installation"
  },
  {
        abbreviation: "E/F",
        meaning: "Equipment/Furnishings"
  },
  {
        abbreviation: "E/WD",
        meaning: "Engine/Warning Display"
  },
  {
        abbreviation: "EABDC",
        meaning: "Enhanced Aircraft Broadcast Data Collector"
  },
  {
        abbreviation: "EADI",
        meaning: "Electronic Attitude Direction Indicator"
  },
  {
        abbreviation: "eADL",
        meaning: "enhanced Airborne Data Loader"
  },
  {
        abbreviation: "EAPAS",
        meaning: "Enhanced Airworthiness Program for Aeroplane Systems"
  },
  {
        abbreviation: "EAROM",
        meaning: "Electrically Alterable Read Only Memory"
  },
  {
        abbreviation: "EARTS",
        meaning: "En Route Automated Radar Tracking System"
  },
  {
        abbreviation: "EATULC",
        meaning: "Emergency ATU Line Contactor"
  },
  {
        abbreviation: "EBAS",
        meaning: "Engine Bleed Air System"
  },
  {
        abbreviation: "EBATC",
        meaning: "Emergency Battery Contactor"
  },
  {
        abbreviation: "EBCU",
        meaning: "Emergency Brake Control Unit"
  },
  {
        abbreviation: "EBHA",
        meaning: "Electrical Backup Hydraulic Actuator"
  },
  {
        abbreviation: "EBTAC",
        meaning: "Emergency Bus Tie AC Contactor"
  },
  {
        abbreviation: "EBTC",
        meaning: "Emergency Bus Tie Contactor"
  },
  {
        abbreviation: "EBTDC",
        meaning: "Emergency Bus Tie DC Contactor"
  },
  {
        abbreviation: "EBU",
        meaning: "Engine Build-up Unit"
  },
  {
        abbreviation: "EBU",
        meaning: "Engine Built Up Unit"
  },
  {
        abbreviation: "EC",
        meaning: "Eddy Current"
  },
  {
        abbreviation: "ECAM",
        meaning: "Electronic Centralized Aircraft Monitoring"
  },
  {
        abbreviation: "ECAM TC",
        meaning: "ECAM Temporary Change"
  },
  {
        abbreviation: "ECAS",
        meaning: "Emergency Cabin Alerting System"
  },
  {
        abbreviation: "ECB",
        meaning: "Electronic Control Box"
  },
  {
        abbreviation: "ECCM",
        meaning: "Electronic Counter Countermeasures"
  },
  {
        abbreviation: "ECF",
        meaning: "Expanded Copper Foil"
  },
  {
        abbreviation: "ECLS",
        meaning: "Electrical Cargo Loading system"
  },
  {
        abbreviation: "ECM",
        meaning: "Engine Condition Monitoring"
  },
  {
        abbreviation: "ECM",
        meaning: "Electronic Countermeasures"
  },
  {
        abbreviation: "ECM",
        meaning: "Engine Conditions Monitoring"
  },
  {
        abbreviation: "ECMS",
        meaning: "Electrical Contactor Management System"
  },
  {
        abbreviation: "ECMU",
        meaning: "Electrical Contactor Management Unit"
  },
  {
        abbreviation: "ECN",
        meaning: "Engineering Change Note"
  },
  {
        abbreviation: "ECON",
        meaning: "Economy"
  },
  {
        abbreviation: "ECON",
        meaning: "Economic"
  },
  {
        abbreviation: "ECP",
        meaning: "ECAM Control Panel"
  },
  {
        abbreviation: "ECS",
        meaning: "Environmental Control System"
  },
  {
        abbreviation: "ECU",
        meaning: "Electronic Control Unit"
  },
  {
        abbreviation: "ECU",
        meaning: "Electronic Control Unit/ Engine Control Unit"
  },
  {
        abbreviation: "ECUCV",
        meaning: "Electronic Control Unit Cooling Valve"
  },
  {
        abbreviation: "ECYC",
        meaning: "Engine Cycle"
  },
  {
        abbreviation: "ED",
        meaning: "Engine Display"
  },
  {
        abbreviation: "EDDS",
        meaning: "Engine Data Display System"
  },
  {
        abbreviation: "EDIU",
        meaning: "Electrical Discrete Interface Unit"
  },
  {
        abbreviation: "eDLRB",
        meaning: "Enhanced Data Loading Routing Box"
  },
  {
        abbreviation: "EDM",
        meaning: "Electrical Discharge Machining"
  },
  {
        abbreviation: "EDMU",
        meaning: "Electrical Distribution Monitoring Unit"
  },
  {
        abbreviation: "EDP",
        meaning: "Engine Driven Pump"
  },
  {
        abbreviation: "EDP",
        meaning: "Engine Driven Pump/ Engine Primary Hydraulic Pump"
  },
  {
        abbreviation: "EDR",
        meaning: "Eddy Dissipation Rate"
  },
  {
        abbreviation: "EDVS",
        meaning: "Electronic Direct View System"
  },
  {
        abbreviation: "EDW",
        meaning: "Electro-Dimmable Window"
  },
  {
        abbreviation: "EEC",
        meaning: "Electronic Engine Control"
  },
  {
        abbreviation: "EEC",
        meaning: "Engine Electronic Controller"
  },
  {
        abbreviation: "EEC",
        meaning: "Emergency Electrical Configuration"
  },
  {
        abbreviation: "EENMU",
        meaning: "Emergency Electrical Network Management Unit"
  },
  {
        abbreviation: "EEPDC",
        meaning: "Emergency Electrical Power Distribution Center"
  },
  {
        abbreviation: "EEPMS",
        meaning: "Emergency Escape Path Marking System"
  },
  {
        abbreviation: "EEPROM",
        meaning: "Electrically Erasable Programmable Read Only Memory"
  },
  {
        abbreviation: "EEPROM",
        meaning: "Electrically Eraseable Programmable Read Only Memory"
  },
  {
        abbreviation: "EFB",
        meaning: "Electronic Flight Bag"
  },
  {
        abbreviation: "EFC",
        meaning: "Expect Further Clearance"
  },
  {
        abbreviation: "EFCC",
        meaning: "Electronic Flight Control Computer"
  },
  {
        abbreviation: "EFCC",
        meaning: "Emergency Flight Control Contactor"
  },
  {
        abbreviation: "EFCS",
        meaning: "Electrical Flight Control System"
  },
  {
        abbreviation: "EFCU",
        meaning: "Electrical Flight Control Unit"
  },
  {
        abbreviation: "EFF",
        meaning: "Effective"
  },
  {
        abbreviation: "EFF",
        meaning: "Effectivity"
  },
  {
        abbreviation: "EFF",
        meaning: "Equipped Front Face"
  },
  {
        abbreviation: "EFF/FFU",
        meaning: "Electronic Flight Folder/Flight Follow-Up"
  },
  {
        abbreviation: "EFH",
        meaning: "Engine Flight Hours"
  },
  {
        abbreviation: "EFI",
        meaning: "Electronic Flight Instruments"
  },
  {
        abbreviation: "EFIS",
        meaning: "Electronic Flight Instrument System"
  },
  {
        abbreviation: "EFIS",
        meaning: "Electronic Flight Instruments System"
  },
  {
        abbreviation: "EFLSCU",
        meaning: "Enhanced Fuel Level Sensing Control Unit"
  },
  {
        abbreviation: "EFOB",
        meaning: "Estimated Fuel on Board"
  },
  {
        abbreviation: "EFT",
        meaning: "Engine Fuel Temperature"
  },
  {
        abbreviation: "EGIU",
        meaning: "Electrical Generation Interface Unit"
  },
  {
        abbreviation: "EGLC",
        meaning: "Emergency Generator Line Contactor"
  },
  {
        abbreviation: "EGMS",
        meaning: "Electrical Galley Management System"
  },
  {
        abbreviation: "EGPWM",
        meaning: "Enhanced Ground Proximity Warning Module"
  },
  {
        abbreviation: "EGPWS",
        meaning: "Enhanced Ground Proximity Warning System"
  },
  {
        abbreviation: "EGT",
        meaning: "Exhaust Gas Temperature"
  },
  {
        abbreviation: "EHA",
        meaning: "Electro-Hydrostatic Actuator"
  },
  {
        abbreviation: "EHAC",
        meaning: "Electro-Hydrostatic Actuator Contactor"
  },
  {
        abbreviation: "EHC",
        meaning: "Electrical Heater Controller"
  },
  {
        abbreviation: "EHCU",
        meaning: "Electromechanical Handforce Control Unit"
  },
  {
        abbreviation: "EHHDLU",
        meaning: "Extended Handheld download Unit"
  },
  {
        abbreviation: "EHM",
        meaning: "Engine Health Monitoring"
  },
  {
        abbreviation: "EHRS",
        meaning: "Temps Entre Decollage-Atterrissage"
  },
  {
        abbreviation: "EHS",
        meaning: "Electrical Heater System"
  },
  {
        abbreviation: "EHSI",
        meaning: "Electronic Horizontal Situation Indicator"
  },
  {
        abbreviation: "EHSV",
        meaning: "Electro Hydraulic Servo Valve"
  },
  {
        abbreviation: "EICAS",
        meaning: "Engine Indicating and Crew Alerting System"
  },
  {
        abbreviation: "EICU",
        meaning: "EFB Interface and Communication Unit"
  },
  {
        abbreviation: "EIF",
        meaning: "Engine Interface Function"
  },
  {
        abbreviation: "EIM",
        meaning: "EFB Interface Module"
  },
  {
        abbreviation: "EIPM",
        meaning: "Engine Interface Power Management"
  },
  {
        abbreviation: "EIPMU",
        meaning: "Engine Interface Power Management Unit"
  },
  {
        abbreviation: "EIS",
        meaning: "Electronic Instrument System"
  },
  {
        abbreviation: "EIU",
        meaning: "Engine Interface Unit"
  },
  {
        abbreviation: "EIVMU",
        meaning: "Engine Interface and Vibration Monitoring Unit"
  },
  {
        abbreviation: "EL",
        meaning: "Electric"
  },
  {
        abbreviation: "ELA",
        meaning: "Electrical Load Analysis"
  },
  {
        abbreviation: "ELAC",
        meaning: "Elevator Aileron Computer"
  },
  {
        abbreviation: "ELAC",
        meaning: "Elevator and Aileron Computer"
  },
  {
        abbreviation: "ELAN",
        meaning: "Ethernet Local Area Network"
  },
  {
        abbreviation: "ELAS",
        meaning: "Emergency Lighting Activation Switch"
  },
  {
        abbreviation: "ELB",
        meaning: "Electronic Log Book"
  },
  {
        abbreviation: "ELC",
        meaning: "Electronic Library Computer"
  },
  {
        abbreviation: "ELC",
        meaning: "Emergency Line Contactor"
  },
  {
        abbreviation: "ELCO",
        meaning: "Exterior Lights Controller"
  },
  {
        abbreviation: "ELCU",
        meaning: "Electrical Load Control Units"
  },
  {
        abbreviation: "ELEC",
        meaning: "Electric"
  },
  {
        abbreviation: "ELEC",
        meaning: "Electrical"
  },
  {
        abbreviation: "ELEC",
        meaning: "Electricity"
  },
  {
        abbreviation: "ELEK",
        meaning: "Electronic"
  },
  {
        abbreviation: "ELEV",
        meaning: "Elevation"
  },
  {
        abbreviation: "ELEV",
        meaning: "Elevator"
  },
  {
        abbreviation: "ELEVN",
        meaning: "Elevation"
  },
  {
        abbreviation: "ELEVR",
        meaning: "Elevator"
  },
  {
        abbreviation: "ELF",
        meaning: "Engineering support and data Link Function"
  },
  {
        abbreviation: "ELFDB",
        meaning: "Emergency Light Floor Disconnect Box"
  },
  {
        abbreviation: "ELM",
        meaning: "Electrical Load Management"
  },
  {
        abbreviation: "ELMF",
        meaning: "Electrical Load Management Function"
  },
  {
        abbreviation: "ELMS",
        meaning: "Electrical Load Management System"
  },
  {
        abbreviation: "ELMU",
        meaning: "Electrical Load Management Unit"
  },
  {
        abbreviation: "ELPU",
        meaning: "Emergency Lightning Protection Unit"
  },
  {
        abbreviation: "ELS",
        meaning: "Electronic Library System"
  },
  {
        abbreviation: "ELSD",
        meaning: "Electrical Load Sensing Device"
  },
  {
        abbreviation: "ELT",
        meaning: "Emergency Locator Transmitter"
  },
  {
        abbreviation: "ELT-DT",
        meaning: "Emergency Locator Transmitter - Distress Tracking"
  },
  {
        abbreviation: "ELV",
        meaning: "Elevation"
  },
  {
        abbreviation: "EMA",
        meaning: "Electronic Module Assembly"
  },
  {
        abbreviation: "EMC",
        meaning: "Electromagnetic Compatibility"
  },
  {
        abbreviation: "EMCD",
        meaning: "Electronic Magnetic Chip Detector"
  },
  {
        abbreviation: "eMCO",
        meaning: "extended Minimum Crew Operations"
  },
  {
        abbreviation: "EMCU",
        meaning: "Electric Motor Control Unit"
  },
  {
        abbreviation: "EMEL",
        meaning: "Edge Mounted Emergency Light"
  },
  {
        abbreviation: "EMER",
        meaning: "Emergency"
  },
  {
        abbreviation: "EMF",
        meaning: "ElectroMotive Force"
  },
  {
        abbreviation: "EMI",
        meaning: "Electromagnetic Interference"
  },
  {
        abbreviation: "EMI",
        meaning: "Electronic Magnetic Interference"
  },
  {
        abbreviation: "EMISN",
        meaning: "Emission"
  },
  {
        abbreviation: "EMLG",
        meaning: "Enhanced Main Landing Gear"
  },
  {
        abbreviation: "EMP",
        meaning: "Electric Motor Pump"
  },
  {
        abbreviation: "EMSAW",
        meaning: "En Route Minimum Safe Altitude Warning"
  },
  {
        abbreviation: "EMU",
        meaning: "Engine Monitoring Unit"
  },
  {
        abbreviation: "EMU",
        meaning: "Engine Maintenance Unit"
  },
  {
        abbreviation: "EMWS",
        meaning: "ElectroMechanical Window Shade"
  },
  {
        abbreviation: "ENA",
        meaning: "Ethernet Network Adapter"
  },
  {
        abbreviation: "ENCDR",
        meaning: "Encoder"
  },
  {
        abbreviation: "END",
        meaning: "Endurance"
  },
  {
        abbreviation: "ENEC",
        meaning: "Emergency Normal to Emergency Contactor"
  },
  {
        abbreviation: "ENG",
        meaning: "Engine"
  },
  {
        abbreviation: "ENM",
        meaning: "Electrical Network Management"
  },
  {
        abbreviation: "ENMF",
        meaning: "Electrical Network Management Function"
  },
  {
        abbreviation: "ENMS",
        meaning: "Electrical Network Management System"
  },
  {
        abbreviation: "ENMU",
        meaning: "Electrical Network Management Unit"
  },
  {
        abbreviation: "ENQ",
        meaning: "Enquiry"
  },
  {
        abbreviation: "ENRM",
        meaning: "Ethernet Network Router Module"
  },
  {
        abbreviation: "ENT",
        meaning: "Entry"
  },
  {
        abbreviation: "ENTMT",
        meaning: "Entertainment"
  },
  {
        abbreviation: "ENVMOD",
        meaning: "Envelope Modulation"
  },
  {
        abbreviation: "EO",
        meaning: "Engine Out"
  },
  {
        abbreviation: "EOS",
        meaning: "Electronic Overspeed System"
  },
  {
        abbreviation: "EOSID",
        meaning: "Engine Out Standard Instrument Departure"
  },
  {
        abbreviation: "EOT",
        meaning: "End of Tape"
  },
  {
        abbreviation: "EOT",
        meaning: "End Of Transmission"
  },
  {
        abbreviation: "EP",
        meaning: "Entry Panel"
  },
  {
        abbreviation: "EPC",
        meaning: "External Power Contactor"
  },
  {
        abbreviation: "EPCS",
        meaning: "Electronic Propulsion Control System"
  },
  {
        abbreviation: "EPCU",
        meaning: "External Power Control Unit"
  },
  {
        abbreviation: "EPD",
        meaning: "Extended Principle Diagram"
  },
  {
        abbreviation: "EPDC",
        meaning: "Electrical Power Distribution Center"
  },
  {
        abbreviation: "EPDS",
        meaning: "Electrical Power Distribution System"
  },
  {
        abbreviation: "EPESC",
        meaning: "Enhanced Passenger Entertainment System Controller"
  },
  {
        abbreviation: "EPGS",
        meaning: "Electrical Power Generation System"
  },
  {
        abbreviation: "EPLC",
        meaning: "External Power Line Contactor"
  },
  {
        abbreviation: "EPLD",
        meaning: "Electronically Programmable Logic Device"
  },
  {
        abbreviation: "EPR",
        meaning: "Engine Pressure Ratio"
  },
  {
        abbreviation: "EPR.D",
        meaning: "EPR Descent"
  },
  {
        abbreviation: "EPR.L",
        meaning: "EPR Latch"
  },
  {
        abbreviation: "EPRL",
        meaning: "Engine Pressure Ratio Limit"
  },
  {
        abbreviation: "EPROM",
        meaning: "Erasable Programmable Read Only Memory"
  },
  {
        abbreviation: "EPROM",
        meaning: "Enable Programmable Read Only Memory"
  },
  {
        abbreviation: "EPS",
        meaning: "Electrical Power Supply"
  },
  {
        abbreviation: "EPSU",
        meaning: "Emergency Power Supply Unit"
  },
  {
        abbreviation: "EPSU",
        meaning: "Emergency Light Power Supply Unit"
  },
  {
        abbreviation: "EPU",
        meaning: "Emergency Power Unit"
  },
  {
        abbreviation: "EQPT",
        meaning: "Equipment"
  },
  {
        abbreviation: "EQUIP",
        meaning: "Equipment"
  },
  {
        abbreviation: "ER",
        meaning: "Extended Range"
  },
  {
        abbreviation: "ER",
        meaning: "Engineering Requirement"
  },
  {
        abbreviation: "ERAI",
        meaning: "Emergency Ram Air Inlet"
  },
  {
        abbreviation: "ERG",
        meaning: "Electromechanical Release Gate"
  },
  {
        abbreviation: "ERMM",
        meaning: "En Route Moving Map"
  },
  {
        abbreviation: "ERP",
        meaning: "Enhanced Runaway Protection"
  },
  {
        abbreviation: "ERP",
        meaning: "Eye Reference Point"
  },
  {
        abbreviation: "ERT",
        meaning: "Engine Running Time"
  },
  {
        abbreviation: "ERU",
        meaning: "Engine Relay Unit"
  },
  {
        abbreviation: "E-Rudder",
        meaning: "Electrical Rudder"
  },
  {
        abbreviation: "ESB",
        meaning: "Electrical System BITE"
  },
  {
        abbreviation: "ESBF",
        meaning: "Electrical System BITE Function"
  },
  {
        abbreviation: "ESC",
        meaning: "Escape"
  },
  {
        abbreviation: "ESCP",
        meaning: "Electrical System Control Panel"
  },
  {
        abbreviation: "ESCV",
        meaning: "Eleventh Stage Cooling Valve"
  },
  {
        abbreviation: "ESD",
        meaning: "ElectroStatic Discharge"
  },
  {
        abbreviation: "ESDN",
        meaning: "Extended System/Structure Description Note"
  },
  {
        abbreviation: "ESDS",
        meaning: "Electrostatic Discharge Sensitive"
  },
  {
        abbreviation: "ESEC",
        meaning: "Emergency Smoke/Evacuation Contactor"
  },
  {
        abbreviation: "ESFC",
        meaning: "Equivalent Specific Fuel Consumption"
  },
  {
        abbreviation: "ESG",
        meaning: "Evolutive Security Gateway"
  },
  {
        abbreviation: "ESMKTC",
        meaning: "Emergency Smoke Tie Contactor"
  },
  {
        abbreviation: "ESN",
        meaning: "Electrical Structure Network"
  },
  {
        abbreviation: "ESN",
        meaning: "Engine Serial Number"
  },
  {
        abbreviation: "ESP",
        meaning: "Electrical Standard Practices"
  },
  {
        abbreviation: "ESPM",
        meaning: "Electrical Standard Practices Manual"
  },
  {
        abbreviation: "ESPU",
        meaning: "External Sources Protection Unit"
  },
  {
        abbreviation: "ESS",
        meaning: "Essential"
  },
  {
        abbreviation: "ESS",
        meaning: "Engine Section Stator"
  },
  {
        abbreviation: "EST",
        meaning: "Estimated"
  },
  {
        abbreviation: "ESTAC",
        meaning: "Emergency Static inverter AC Contactor"
  },
  {
        abbreviation: "ESTC",
        meaning: "Emergency STatic inverter Contactor"
  },
  {
        abbreviation: "ESU",
        meaning: "Ethernet Switch Unit"
  },
  {
        abbreviation: "ET",
        meaning: "Elapsed Time"
  },
  {
        abbreviation: "ET",
        meaning: "Elapse Time"
  },
  {
        abbreviation: "ETA",
        meaning: "Estimated Time of Arrival"
  },
  {
        abbreviation: "ETACS",
        meaning: "External and Taxiing Aid Camera System"
  },
  {
        abbreviation: "ETB",
        meaning: "End of Transmission Block"
  },
  {
        abbreviation: "ETD",
        meaning: "Estimated Time of Departure"
  },
  {
        abbreviation: "ETE",
        meaning: "Estimated Time En Route"
  },
  {
        abbreviation: "ETHNET",
        meaning: "Ethernet"
  },
  {
        abbreviation: "ETLC",
        meaning: "Emergency TR Line Contactor"
  },
  {
        abbreviation: "ETO",
        meaning: "Estimated Time Over"
  },
  {
        abbreviation: "ETOC",
        meaning: "Enhanced Takeoff Configuration"
  },
  {
        abbreviation: "ETOPS",
        meaning: "Extended Range Operations for Two-Engine Aeroplanes"
  },
  {
        abbreviation: "ETOPS",
        meaning: "Extended Range Twin-engine Operation"
  },
  {
        abbreviation: "ETP",
        meaning: "Equal Time Point"
  },
  {
        abbreviation: "ETP",
        meaning: "Equi-Time Point"
  },
  {
        abbreviation: "ETRAC",
        meaning: "Electronic Thrust Reverser Actuation Controller"
  },
  {
        abbreviation: "ETRAS",
        meaning: "Electrical Thrust Reverser Actuation System"
  },
  {
        abbreviation: "ETSO",
        meaning: "European Technical Standard Order"
  },
  {
        abbreviation: "ETT",
        meaning: "Estimated Time for Takeoff"
  },
  {
        abbreviation: "ETX",
        meaning: "End of Text"
  },
  {
        abbreviation: "EUAD",
        meaning: "European Union Airworthiness Directive"
  },
  {
        abbreviation: "EUPB",
        meaning: "Electronic Unit Protection Box"
  },
  {
        abbreviation: "EVAC",
        meaning: "Evacuate"
  },
  {
        abbreviation: "EVAC",
        meaning: "Evacuation"
  },
  {
        abbreviation: "EVBC",
        meaning: "Engine Vane and Control"
  },
  {
        abbreviation: "EVMU",
        meaning: "Engine Vibration Monitoring Unit"
  },
  {
        abbreviation: "EVS",
        meaning: "Enhanced Vision System"
  },
  {
        abbreviation: "EWC",
        meaning: "Embedded Wireless Controller"
  },
  {
        abbreviation: "EWCG",
        meaning: "Empty Weight Center of Gravity"
  },
  {
        abbreviation: "EWD",
        meaning: "Engine/Warning Display"
  },
  {
        abbreviation: "EWIS",
        meaning: "Electrical Wiring Interconnection System"
  },
  {
        abbreviation: "EWS",
        meaning: "Electrical Window Shade"
  },
  {
        abbreviation: "EX",
        meaning: "Example"
  },
  {
        abbreviation: "EXC",
        meaning: "Excitation"
  },
  {
        abbreviation: "EXC",
        meaning: "Excite"
  },
  {
        abbreviation: "EXCESS",
        meaning: "Excessive"
  },
  {
        abbreviation: "EXCHG",
        meaning: "Exchange"
  },
  {
        abbreviation: "EXCHGR",
        meaning: "Exchanger"
  },
  {
        abbreviation: "EXDLS",
        meaning: "External Door Locking System"
  },
  {
        abbreviation: "EXH",
        meaning: "Exhaust"
  },
  {
        abbreviation: "EXLCO",
        meaning: "EXterior Light Control"
  },
  {
        abbreviation: "EXP",
        meaning: "Expansion"
  },
  {
        abbreviation: "EXP",
        meaning: "Expedite"
  },
  {
        abbreviation: "EXSTG",
        meaning: "Existing"
  },
  {
        abbreviation: "EXT",
        meaning: "Exterior"
  },
  {
        abbreviation: "EXT",
        meaning: "External"
  },
  {
        abbreviation: "EXT",
        meaning: "External, Extension"
  },
  {
        abbreviation: "EXTIN",
        meaning: "Extinguish, Extinguished"
  },
  {
        abbreviation: "EXTING",
        meaning: "Extinguish"
  },
  {
        abbreviation: "EXTING",
        meaning: "Extinguisher"
  },
  {
        abbreviation: "EXTING",
        meaning: "Extinguishing"
  },
  {
        abbreviation: "EXTN",
        meaning: "Extension"
  },
  {
        abbreviation: "EXTNDD",
        meaning: "Extended"
  },
  {
        abbreviation: "EXTR",
        meaning: "Extreme"
  },
  {
        abbreviation: "EXTRACT",
        meaning: "Extraction"
  },
  {
        abbreviation: "EXTRACT",
        meaning: "Extractor"
  },
  {
        abbreviation: "F",
        meaning: "Fuel"
  },
  {
        abbreviation: "F/C",
        meaning: "First Class"
  },
  {
        abbreviation: "F/CTL",
        meaning: "Flight Controls"
  },
  {
        abbreviation: "F/E",
        meaning: "Flight Engineer"
  },
  {
        abbreviation: "F/F",
        meaning: "Fuel Flow"
  },
  {
        abbreviation: "F/O",
        meaning: "First Officer"
  },
  {
        abbreviation: "F/S",
        meaning: "Fast/Slow"
  },
  {
        abbreviation: "F3D",
        meaning: "Full 3D"
  },
  {
        abbreviation: "FA",
        meaning: "Course from a Fixed Waypoint to an Altitude Termination"
  },
  {
        abbreviation: "FAA",
        meaning: "Federal Aviation Administration"
  },
  {
        abbreviation: "FAA-PMA",
        meaning: "Federal Aviation Administration - Parts Manufacturing Approval"
  },
  {
        abbreviation: "FAC",
        meaning: "Flight Augmentation Computer"
  },
  {
        abbreviation: "FAD",
        meaning: "Fuel Advisory Departure"
  },
  {
        abbreviation: "FADEC",
        meaning: "Full Authority Digital Engine Control"
  },
  {
        abbreviation: "FAF",
        meaning: "Final Approach Fix"
  },
  {
        abbreviation: "FAFC",
        meaning: "Full Authority Fuel Control"
  },
  {
        abbreviation: "FAIL",
        meaning: "Failed"
  },
  {
        abbreviation: "FAIL",
        meaning: "Failure"
  },
  {
        abbreviation: "FAL",
        meaning: "Fuel Airworthiness Limitations"
  },
  {
        abbreviation: "FANS",
        meaning: "Future Air Navigation System"
  },
  {
        abbreviation: "FAP",
        meaning: "Flight Attendant Panel"
  },
  {
        abbreviation: "FAP",
        meaning: "Forward Attendant Panel"
  },
  {
        abbreviation: "FAR",
        meaning: "Federal Aviation Regulations"
  },
  {
        abbreviation: "FAS",
        meaning: "Flight Augmentation System"
  },
  {
        abbreviation: "FAS",
        meaning: "Final Approach Segment"
  },
  {
        abbreviation: "FAV",
        meaning: "Fan Air Valve"
  },
  {
        abbreviation: "FBB",
        meaning: "Fasten Bed Belt"
  },
  {
        abbreviation: "FBS",
        meaning: "Fixed Based Simulator"
  },
  {
        abbreviation: "FC",
        meaning: "Course from a Fixed Waypoint to a Changeover Point"
  },
  {
        abbreviation: "FC",
        meaning: "Fuel Cell"
  },
  {
        abbreviation: "FC",
        meaning: "Fully Closed"
  },
  {
        abbreviation: "FC",
        meaning: "Functional Class"
  },
  {
        abbreviation: "FCC",
        meaning: "Flight Control Computer"
  },
  {
        abbreviation: "FCC",
        meaning: "Flight Control Contactor"
  },
  {
        abbreviation: "FCC",
        meaning: "Fuel Cell Channel"
  },
  {
        abbreviation: "FCC",
        meaning: "Federal Communications Commission"
  },
  {
        abbreviation: "FCD",
        meaning: "Fan Cowl Door"
  },
  {
        abbreviation: "FCD",
        meaning: "Flight Crew Data"
  },
  {
        abbreviation: "FCDC",
        meaning: "Flight Control Data Concentrator"
  },
  {
        abbreviation: "FCEU",
        meaning: "Flight Control Electronics Unit"
  },
  {
        abbreviation: "FCGS",
        meaning: "Flight Control and Guidance System"
  },
  {
        abbreviation: "FCGU",
        meaning: "Flight Control and Guidance Unit"
  },
  {
        abbreviation: "FCHC",
        meaning: "Forward Cargo Heat Computer"
  },
  {
        abbreviation: "FCI",
        meaning: "Fuel Clogging Indicator"
  },
  {
        abbreviation: "FCMC",
        meaning: "Fuel Control and Monitoring Computer"
  },
  {
        abbreviation: "FCMS",
        meaning: "Fuel Control Monitoring System"
  },
  {
        abbreviation: "FCOC",
        meaning: "Fuel Cooled Oil Cooler"
  },
  {
        abbreviation: "FCOM",
        meaning: "Flight Crew Operating Manual"
  },
  {
        abbreviation: "FCPC",
        meaning: "Flight Control Primary Computer"
  },
  {
        abbreviation: "FCRC",
        meaning: "Flight Crew Rest Compartment"
  },
  {
        abbreviation: "FCRM",
        meaning: "Flight Control Remote Module"
  },
  {
        abbreviation: "FCSC",
        meaning: "Flight Control Secondary Computer"
  },
  {
        abbreviation: "FCTM",
        meaning: "Flight Crew Techniques Manual"
  },
  {
        abbreviation: "FCU",
        meaning: "Flight Control Unit"
  },
  {
        abbreviation: "FCU",
        meaning: "Fuel Control Unit"
  },
  {
        abbreviation: "FCU",
        meaning: "Fuel Control Unit, Flight Control Unit"
  },
  {
        abbreviation: "FCU",
        meaning: "Flush Control Unit"
  },
  {
        abbreviation: "FCV",
        meaning: "Flow Control Valve"
  },
  {
        abbreviation: "FCZ",
        meaning: "Forward Core Zone"
  },
  {
        abbreviation: "FD",
        meaning: "Course from a Fixed Waypoint to a DME Distance"
  },
  {
        abbreviation: "FD",
        meaning: "Flight Director"
  },
  {
        abbreviation: "FD",
        meaning: "Fuselage Datum"
  },
  {
        abbreviation: "FD, F/D",
        meaning: "Flight Director"
  },
  {
        abbreviation: "FDAC",
        meaning: "Full Digital AGU Controller"
  },
  {
        abbreviation: "FDAU",
        meaning: "Flight Data Acquisition Unit"
  },
  {
        abbreviation: "FDB",
        meaning: "Floor Disconnect Box"
  },
  {
        abbreviation: "FDBK",
        meaning: "Feedback"
  },
  {
        abbreviation: "FDC",
        meaning: "Fuel Data Concentrator"
  },
  {
        abbreviation: "FDCE",
        meaning: "Flight Deck and Cabin Effects"
  },
  {
        abbreviation: "FDD",
        meaning: "Floppy Disk Drive"
  },
  {
        abbreviation: "FDDC",
        meaning: "Floppy Disk Drive Controller"
  },
  {
        abbreviation: "FDE",
        meaning: "Flight Deck Effect"
  },
  {
        abbreviation: "FDEP",
        meaning: "Flight Data Entry Panel"
  },
  {
        abbreviation: "FDG",
        meaning: "Fan Drive Gearbox"
  },
  {
        abbreviation: "FDIAF",
        meaning: "Flight Data Interface/Acquisition Function"
  },
  {
        abbreviation: "FDIF",
        meaning: "Flight Data Interface Function"
  },
  {
        abbreviation: "FDIMU",
        meaning: "Flight Data Interface and Management Unit"
  },
  {
        abbreviation: "FDIU",
        meaning: "Flight Data Interface Unit"
  },
  {
        abbreviation: "FDR",
        meaning: "Flight Data Recorder"
  },
  {
        abbreviation: "FDRS",
        meaning: "Flight Data Recording System"
  },
  {
        abbreviation: "FDRV",
        meaning: "Fuel Diverter and Return Valve"
  },
  {
        abbreviation: "FDS",
        meaning: "Fire Detection System"
  },
  {
        abbreviation: "FDS",
        meaning: "Flight Director System"
  },
  {
        abbreviation: "FDU",
        meaning: "Fire Detection Unit"
  },
  {
        abbreviation: "FDU",
        meaning: "Fire Detector Unit"
  },
  {
        abbreviation: "FE",
        meaning: "Flight Envelope"
  },
  {
        abbreviation: "FEDC",
        meaning: "Fire Extinguishing Data Converter"
  },
  {
        abbreviation: "FEDR",
        meaning: "Feeder"
  },
  {
        abbreviation: "FEGV",
        meaning: "Fan Exit Guide Vane"
  },
  {
        abbreviation: "FEIM",
        meaning: "Field Engineering Investigation Memo"
  },
  {
        abbreviation: "FEM",
        meaning: "Finite Element Model"
  },
  {
        abbreviation: "FES",
        meaning: "Fire Extinguishing System"
  },
  {
        abbreviation: "FET",
        meaning: "Field Effect Transistor"
  },
  {
        abbreviation: "FEX",
        meaning: "Fire EXtinguishing"
  },
  {
        abbreviation: "FEXT",
        meaning: "Fire Extinguisher"
  },
  {
        abbreviation: "FF",
        meaning: "Fuel Flow"
  },
  {
        abbreviation: "FF/FU",
        meaning: "Fuel Flow/Fuel Used"
  },
  {
        abbreviation: "FFCCV",
        meaning: "Fan Frame Compressor Case Vertical"
  },
  {
        abbreviation: "FFCCV",
        meaning: "Forward Flange Compressor Casing Vibration"
  },
  {
        abbreviation: "FFCCV",
        meaning: "Fan Frame/Compressor Case Vertical (vibr, sensor)"
  },
  {
        abbreviation: "FFCM",
        meaning: "Free Fall Control Module"
  },
  {
        abbreviation: "FFDN",
        meaning: "Fuel Flow Divider and Nozzles"
  },
  {
        abbreviation: "FFG",
        meaning: "Fuel Flow Governor"
  },
  {
        abbreviation: "FFS",
        meaning: "Full Flight Simulator"
  },
  {
        abbreviation: "FFSU",
        meaning: "Fixed Frequency Supply Unit"
  },
  {
        abbreviation: "FG",
        meaning: "Flight Guidance"
  },
  {
        abbreviation: "F-G/S",
        meaning: "FLS Glide Slope"
  },
  {
        abbreviation: "FGE",
        meaning: "Flight Guidance and Envelope"
  },
  {
        abbreviation: "FGES",
        meaning: "Flight Guidance and Envelope System"
  },
  {
        abbreviation: "FH",
        meaning: "Flight Hours"
  },
  {
        abbreviation: "FHPP",
        meaning: "Fuel High Pressure Pump"
  },
  {
        abbreviation: "FI",
        meaning: "Flight Idle"
  },
  {
        abbreviation: "FIC",
        meaning: "Fan Intermediate Case"
  },
  {
        abbreviation: "FIDS",
        meaning: "Fault Isolation and Detection System"
  },
  {
        abbreviation: "FIDS",
        meaning: "Fault Identification Data System"
  },
  {
        abbreviation: "FIFO",
        meaning: "First Input/First Output"
  },
  {
        abbreviation: "FIFO",
        meaning: "First In/First Out"
  },
  {
        abbreviation: "FIG",
        meaning: "Figure"
  },
  {
        abbreviation: "FILG",
        meaning: "Filling"
  },
  {
        abbreviation: "FIM",
        meaning: "Fault Isolation Manual"
  },
  {
        abbreviation: "FIN",
        meaning: "Functional Item Number"
  },
  {
        abbreviation: "FIS",
        meaning: "Flight Information Services"
  },
  {
        abbreviation: "FIS",
        meaning: "Fiber Splitter"
  },
  {
        abbreviation: "FIS",
        meaning: "Flight Instrument System"
  },
  {
        abbreviation: "FIX",
        meaning: "Fixed"
  },
  {
        abbreviation: "FL",
        meaning: "Flight Level"
  },
  {
        abbreviation: "FL",
        meaning: "Flow"
  },
  {
        abbreviation: "FLA",
        meaning: "Flight Lock Actuator"
  },
  {
        abbreviation: "FLA",
        meaning: "Forward Looking Aft"
  },
  {
        abbreviation: "FLCH",
        meaning: "Flight Level Change"
  },
  {
        abbreviation: "FLD",
        meaning: "Field"
  },
  {
        abbreviation: "FLD",
        meaning: "Floor Level Display"
  },
  {
        abbreviation: "FLE",
        meaning: "Fixed Leading Edge"
  },
  {
        abbreviation: "FLEX",
        meaning: "Flexible"
  },
  {
        abbreviation: "F-LOC",
        meaning: "FLS Localizer"
  },
  {
        abbreviation: "FLP",
        meaning: "Flap"
  },
  {
        abbreviation: "FLR",
        meaning: "Floor"
  },
  {
        abbreviation: "FLS",
        meaning: "FMS Landing System"
  },
  {
        abbreviation: "FLS",
        meaning: "Field Loadable Software"
  },
  {
        abbreviation: "FLSA",
        meaning: "Fuel Level Sensing Amplifier"
  },
  {
        abbreviation: "FLSCU",
        meaning: "Fuel Level Sensing Control Unit"
  },
  {
        abbreviation: "FLT",
        meaning: "Flight"
  },
  {
        abbreviation: "FLT CTL",
        meaning: "Flight Control"
  },
  {
        abbreviation: "FLTN",
        meaning: "Flight Number"
  },
  {
        abbreviation: "FLTR",
        meaning: "Filter"
  },
  {
        abbreviation: "FLUOR",
        meaning: "Fluorescent"
  },
  {
        abbreviation: "FLXTO",
        meaning: "Flexible Take-Off"
  },
  {
        abbreviation: "FLXTO",
        meaning: "Flexible Takeoff"
  },
  {
        abbreviation: "FM",
        meaning: "Course from a Fixed Waypoint with a Manual Termination"
  },
  {
        abbreviation: "FM",
        meaning: "Flight Management"
  },
  {
        abbreviation: "FM",
        meaning: "Flight Manual"
  },
  {
        abbreviation: "FM",
        meaning: "Frequency Modulation"
  },
  {
        abbreviation: "FM",
        meaning: "Fault Message"
  },
  {
        abbreviation: "FMA",
        meaning: "Flight Mode Annunciator"
  },
  {
        abbreviation: "FMC",
        meaning: "Flight Management Computer"
  },
  {
        abbreviation: "FMCS",
        meaning: "Flight Management Computer System"
  },
  {
        abbreviation: "FME",
        meaning: "Flow Metering Equipment"
  },
  {
        abbreviation: "FMEA",
        meaning: "Failure Mode & Effects Analysis"
  },
  {
        abbreviation: "FMEP",
        meaning: "Friction Mean Effective Pressure"
  },
  {
        abbreviation: "FMGC",
        meaning: "Flight Management and Guidance Computer"
  },
  {
        abbreviation: "FMGC-E",
        meaning: "Flight Management and Guidance Computer for E-Rudder"
  },
  {
        abbreviation: "FMGEC",
        meaning: "Flight Management Guidance and Envelope Computer"
  },
  {
        abbreviation: "FMGES",
        meaning: "Flight Management Guidance and Envelope System"
  },
  {
        abbreviation: "FMGS",
        meaning: "Flight Management and Guidance System"
  },
  {
        abbreviation: "FML",
        meaning: "Fiber Metal Laminate"
  },
  {
        abbreviation: "FMS",
        meaning: "Flight Management System"
  },
  {
        abbreviation: "FMST",
        meaning: "Flight Management System Trainer"
  },
  {
        abbreviation: "FMU",
        meaning: "Fuel Metering Unit"
  },
  {
        abbreviation: "FMV",
        meaning: "Fuel Metering Valve"
  },
  {
        abbreviation: "FN",
        meaning: "Engine Thrust"
  },
  {
        abbreviation: "FNCP",
        meaning: "Flight Navigation Control Panel"
  },
  {
        abbreviation: "FNL",
        meaning: "Final"
  },
  {
        abbreviation: "FNSG",
        meaning: "Flight Navigation Symbol Generator"
  },
  {
        abbreviation: "FO",
        meaning: "Fully Open"
  },
  {
        abbreviation: "FOB",
        meaning: "Fuel On Board"
  },
  {
        abbreviation: "FOC",
        meaning: "Fuel/Oil Cooler"
  },
  {
        abbreviation: "FOCT",
        meaning: "Flight Operations Consultation Tool"
  },
  {
        abbreviation: "FOD",
        meaning: "Foreign Object Damage"
  },
  {
        abbreviation: "FOd",
        meaning: "Foreign Object Debris"
  },
  {
        abbreviation: "FOD",
        meaning: "Fuel Over Destination"
  },
  {
        abbreviation: "FOHE",
        meaning: "Fuel/Oil Heat Exchanger"
  },
  {
        abbreviation: "FOMAX",
        meaning: "Flight Operations and MAintenance eXchanger"
  },
  {
        abbreviation: "FOVE",
        meaning: "Flight Operations Versatile Environment"
  },
  {
        abbreviation: "FPA",
        meaning: "Flight Path Angle"
  },
  {
        abbreviation: "FPEEPMS",
        meaning: "Floor Proximity Emergency Escape Path Marking System"
  },
  {
        abbreviation: "FPF",
        meaning: "Fire Protection Function"
  },
  {
        abbreviation: "FPH",
        meaning: "Floor Panel Heating"
  },
  {
        abbreviation: "FPI",
        meaning: "Fluorescent Penetrant Inspection"
  },
  {
        abbreviation: "F-PLN",
        meaning: "Flight Plan"
  },
  {
        abbreviation: "FPM",
        meaning: "Floor Path Marking"
  },
  {
        abbreviation: "FPM",
        meaning: "Feet Per Minute"
  },
  {
        abbreviation: "FPMU",
        meaning: "Fuel Properties Measurement Unit"
  },
  {
        abbreviation: "FPPU",
        meaning: "Feedback Position Pick-off Unit"
  },
  {
        abbreviation: "FPPU",
        meaning: "Feed-Back Position Pick-Off Unit"
  },
  {
        abbreviation: "FPRM",
        meaning: "Fuel Pipe Repair Manual"
  },
  {
        abbreviation: "FPS",
        meaning: "Fire Protection System"
  },
  {
        abbreviation: "FPT",
        meaning: "Flight Path Target"
  },
  {
        abbreviation: "FPV",
        meaning: "Flight Path Vector"
  },
  {
        abbreviation: "FQ",
        meaning: "Fuel Quantity"
  },
  {
        abbreviation: "FQDC",
        meaning: "Fuel Quantity Data Concentrator"
  },
  {
        abbreviation: "FQI",
        meaning: "Fuel Quantity Indicating/Indication/Indicator"
  },
  {
        abbreviation: "FQIC",
        meaning: "Fuel Quantity Indication Computer"
  },
  {
        abbreviation: "FQIC",
        meaning: "Fuel Quantity Indicating Computer"
  },
  {
        abbreviation: "FQIS",
        meaning: "Fuel Quantity Indicating System"
  },
  {
        abbreviation: "FQMS",
        meaning: "Fuel Quantity and Management System"
  },
  {
        abbreviation: "FR",
        meaning: "Frame"
  },
  {
        abbreviation: "FR",
        meaning: "Fault Reporting Manual"
  },
  {
        abbreviation: "FRDS",
        meaning: "Flight Recorder Data Streaming"
  },
  {
        abbreviation: "FREQ",
        meaning: "Frequency"
  },
  {
        abbreviation: "FRM",
        meaning: "Fault Reporting Manual"
  },
  {
        abbreviation: "FRS",
        meaning: "Flammability Reduction System"
  },
  {
        abbreviation: "FRT",
        meaning: "Front"
  },
  {
        abbreviation: "FRU",
        meaning: "Frequency Reference Unit"
  },
  {
        abbreviation: "FRV",
        meaning: "Fuel Return Valve"
  },
  {
        abbreviation: "FS",
        meaning: "Front Spar"
  },
  {
        abbreviation: "FSA",
        meaning: "FlySmart with Airbus"
  },
  {
        abbreviation: "FSA-NG",
        meaning: "FlySmart with Airbus-New Generation"
  },
  {
        abbreviation: "FSB",
        meaning: "Fasten Seat Belts"
  },
  {
        abbreviation: "FSCM",
        meaning: "Federal Supply Code for Manufacturers"
  },
  {
        abbreviation: "FSCM",
        meaning: "Federal Supplier Code Manufacturer"
  },
  {
        abbreviation: "FSDO",
        meaning: "Flight Standards District Office"
  },
  {
        abbreviation: "FSEU",
        meaning: "Flaps/Slats Electronic Unit"
  },
  {
        abbreviation: "FSH",
        meaning: "Full Screen Height"
  },
  {
        abbreviation: "FSN",
        meaning: "Fleet Serial Number"
  },
  {
        abbreviation: "FSOV",
        meaning: "Fire ShutOff Valve"
  },
  {
        abbreviation: "FSS",
        meaning: "Front Secondary Structure"
  },
  {
        abbreviation: "FSS",
        meaning: "Flight Service Station"
  },
  {
        abbreviation: "FSTD",
        meaning: "Flight Simulation Training Devices"
  },
  {
        abbreviation: "FT",
        meaning: "Foot Or Feet"
  },
  {
        abbreviation: "FT",
        meaning: "Functional Test"
  },
  {
        abbreviation: "FT/MIN",
        meaning: "Feet Per Minute"
  },
  {
        abbreviation: "FTE",
        meaning: "Fixed Trailing Edge"
  },
  {
        abbreviation: "FTG",
        meaning: "Fitting"
  },
  {
        abbreviation: "FTI",
        meaning: "Flight Test Installation"
  },
  {
        abbreviation: "FTIS",
        meaning: "Fuel Tank Inerting System"
  },
  {
        abbreviation: "FTSP",
        meaning: "Floor Temperature Setting Panel"
  },
  {
        abbreviation: "FTU",
        meaning: "Force Transducer Unit"
  },
  {
        abbreviation: "FU",
        meaning: "Fuel Used"
  },
  {
        abbreviation: "FU",
        meaning: "Fuel Used, Follow Up"
  },
  {
        abbreviation: "FUSLG",
        meaning: "Fuselage"
  },
  {
        abbreviation: "FW",
        meaning: "Failure Warning"
  },
  {
        abbreviation: "FWC",
        meaning: "Flight Warning Computer"
  },
  {
        abbreviation: "FWC",
        meaning: "Fault Warning Computer"
  },
  {
        abbreviation: "FWCD",
        meaning: "Forward Cargo Door"
  },
  {
        abbreviation: "FWD",
        meaning: "Forward"
  },
  {
        abbreviation: "FWL",
        meaning: "Firewall"
  },
  {
        abbreviation: "FWS",
        meaning: "Flight Warning System"
  },
  {
        abbreviation: "FWSOV",
        meaning: "Fire Wall Shut Off Valve"
  },
  {
        abbreviation: "G",
        meaning: "Green"
  },
  {
        abbreviation: "G",
        meaning: "Gravitational Acceleration"
  },
  {
        abbreviation: "G/S",
        meaning: "Glide Slope"
  },
  {
        abbreviation: "GA",
        meaning: "Go-Around"
  },
  {
        abbreviation: "GA",
        meaning: "General Aviation"
  },
  {
        abbreviation: "GAD",
        meaning: "General Assembly Drawing"
  },
  {
        abbreviation: "GADO",
        meaning: "General Aviation District Office"
  },
  {
        abbreviation: "GAIN",
        meaning: "Electrical GAlley INsert equipment"
  },
  {
        abbreviation: "GAIR",
        meaning: "General Assembly Inspection Report"
  },
  {
        abbreviation: "GAL",
        meaning: "Gallon"
  },
  {
        abbreviation: "GALY",
        meaning: "Galley"
  },
  {
        abbreviation: "GAPCU",
        meaning: "Ground and Auxiliary Power Control Unit"
  },
  {
        abbreviation: "GB",
        meaning: "Generator Breaker"
  },
  {
        abbreviation: "GBAS",
        meaning: "Ground Based Augmentation System"
  },
  {
        abbreviation: "GBF",
        meaning: "Ground Blowing Fan"
  },
  {
        abbreviation: "GCB",
        meaning: "Generator Circuit Breaker"
  },
  {
        abbreviation: "GCR",
        meaning: "Generator Control Relay"
  },
  {
        abbreviation: "GCR",
        meaning: "Ground Clutter Reduction"
  },
  {
        abbreviation: "GCS",
        meaning: "Global Communication Suite"
  },
  {
        abbreviation: "GCU",
        meaning: "Generator Control Unit"
  },
  {
        abbreviation: "GD&T",
        meaning: "Geometric Dimensioning and Tolerancing"
  },
  {
        abbreviation: "GDD",
        meaning: "General Definition Drawing"
  },
  {
        abbreviation: "GDE",
        meaning: "Guide"
  },
  {
        abbreviation: "GDNC",
        meaning: "Guidance"
  },
  {
        abbreviation: "GDO",
        meaning: "Ground Door Opening"
  },
  {
        abbreviation: "GE",
        meaning: "General Electric"
  },
  {
        abbreviation: "GEM",
        meaning: "Ground Equipment Manual"
  },
  {
        abbreviation: "GEM",
        meaning: "Ground Based Engine Monitoring"
  },
  {
        abbreviation: "GEN",
        meaning: "Generator"
  },
  {
        abbreviation: "GES",
        meaning: "Ground Earth Station"
  },
  {
        abbreviation: "GFE",
        meaning: "Government Furnished Equipment"
  },
  {
        abbreviation: "GFI",
        meaning: "Ground Fault Interruption"
  },
  {
        abbreviation: "GFI",
        meaning: "Ground Fault Interrupter"
  },
  {
        abbreviation: "GFLI",
        meaning: "Ground Fuel Level Indication"
  },
  {
        abbreviation: "GFR",
        meaning: "Ground Fault Report"
  },
  {
        abbreviation: "GFRP",
        meaning: "Glass Fiber Reinforced Plastic"
  },
  {
        abbreviation: "GGBU",
        meaning: "Gear Guard Battery Unit"
  },
  {
        abbreviation: "GGMU",
        meaning: "Gear Guard Main Unit"
  },
  {
        abbreviation: "GGPCU",
        meaning: "Generator and Ground Power Control Unit"
  },
  {
        abbreviation: "GGSU",
        meaning: "Gear Guard Sensor Unit"
  },
  {
        abbreviation: "GHR",
        meaning: "Ground Handling Relay"
  },
  {
        abbreviation: "GI",
        meaning: "Ground Idle"
  },
  {
        abbreviation: "GLA",
        meaning: "Gust Load Alleviation"
  },
  {
        abbreviation: "GLASU",
        meaning: "Galley Light Attendant Service Unit"
  },
  {
        abbreviation: "GLC",
        meaning: "Generator Line Contactor"
  },
  {
        abbreviation: "GLM",
        meaning: "Gyro Life Monitor"
  },
  {
        abbreviation: "GLR",
        meaning: "Generator Line Relay"
  },
  {
        abbreviation: "GLS",
        meaning: "GBAS Landing System"
  },
  {
        abbreviation: "GLSSU",
        meaning: "GPS Landing System Sensor Unit"
  },
  {
        abbreviation: "GLT",
        meaning: "Ground Leak Test"
  },
  {
        abbreviation: "GMT",
        meaning: "Greenwich Mean Time"
  },
  {
        abbreviation: "GNC",
        meaning: "Galley Network Controller"
  },
  {
        abbreviation: "GND",
        meaning: "Ground"
  },
  {
        abbreviation: "GNLU",
        meaning: "GNSS Navigation and Landing Unit"
  },
  {
        abbreviation: "GNSS",
        meaning: "Global Navigation Satellite System"
  },
  {
        abbreviation: "GOBO",
        meaning: "Graphical Optical Blackout"
  },
  {
        abbreviation: "GP",
        meaning: "Group"
  },
  {
        abbreviation: "GPA",
        meaning: "Gas Path Analysis"
  },
  {
        abbreviation: "GPCU",
        meaning: "Ground Power Control Unit"
  },
  {
        abbreviation: "GPIRS",
        meaning: "Global Positioning and Inertial Reference System"
  },
  {
        abbreviation: "GPM",
        meaning: "General Processing Module"
  },
  {
        abbreviation: "GPM",
        meaning: "Gallon Per Minute"
  },
  {
        abbreviation: "GPRS",
        meaning: "General Packet Radio Service"
  },
  {
        abbreviation: "GPS",
        meaning: "Global Positioning System"
  },
  {
        abbreviation: "GPS",
        meaning: "Geometrical Product Specification"
  },
  {
        abbreviation: "GPSSU",
        meaning: "Global Positioning System Sensor Unit"
  },
  {
        abbreviation: "GPT",
        meaning: "Ground Programming Tool"
  },
  {
        abbreviation: "GPU",
        meaning: "Ground Power Unit"
  },
  {
        abbreviation: "GPWC",
        meaning: "Ground Proximity Warning Computer"
  },
  {
        abbreviation: "GPWS",
        meaning: "Ground Proximity Warning System"
  },
  {
        abbreviation: "GR",
        meaning: "Gear"
  },
  {
        abbreviation: "GRA",
        meaning: "Geared Rotary Actuator"
  },
  {
        abbreviation: "GRD, GND",
        meaning: "Ground"
  },
  {
        abbreviation: "GRM",
        meaning: "Geometrical Reference Mock-up"
  },
  {
        abbreviation: "GRP",
        meaning: "Geographic Reference Point"
  },
  {
        abbreviation: "GRP",
        meaning: "Glass-Reinforced Plastic"
  },
  {
        abbreviation: "GRU",
        meaning: "Ground Refrigeration Unit"
  },
  {
        abbreviation: "GRVTY",
        meaning: "Gravity"
  },
  {
        abbreviation: "GS",
        meaning: "Ground Speed"
  },
  {
        abbreviation: "GSB",
        meaning: "Ground Service Bus"
  },
  {
        abbreviation: "GSE",
        meaning: "Ground Support Equipment"
  },
  {
        abbreviation: "GSHLD",
        meaning: "Glareshield"
  },
  {
        abbreviation: "GSM",
        meaning: "Global System for Mobile Communication"
  },
  {
        abbreviation: "GSP",
        meaning: "Ground Service Panel"
  },
  {
        abbreviation: "GSSR",
        meaning: "Ground Service Select Relay"
  },
  {
        abbreviation: "GSTR",
        meaning: "Ground Service Transfer Relay"
  },
  {
        abbreviation: "GUI",
        meaning: "Graphical User Interface"
  },
  {
        abbreviation: "GVI",
        meaning: "General Visual Inspection"
  },
  {
        abbreviation: "GW",
        meaning: "Gross Weight"
  },
  {
        abbreviation: "GWDU",
        meaning: "Galley Waste Disposal Unit"
  },
  {
        abbreviation: "GWR",
        meaning: "General Working Rules"
  },
  {
        abbreviation: "GYRO",
        meaning: "Gyroscope"
  },
  {
        abbreviation: "H",
        meaning: "Hexadecimal, Hot, Hour"
  },
  {
        abbreviation: "H/W",
        meaning: "Hardware"
  },
  {
        abbreviation: "H2",
        meaning: "Hydrogen"
  },
  {
        abbreviation: "HA",
        meaning: "Holding Pattern to an Altitude Termination"
  },
  {
        abbreviation: "HARN",
        meaning: "Harness"
  },
  {
        abbreviation: "HBCS",
        meaning: "High Bandwidth Connectivity System"
  },
  {
        abbreviation: "HC",
        meaning: "Heater Circuit"
  },
  {
        abbreviation: "HCF",
        meaning: "High Cycle Fatigue"
  },
  {
        abbreviation: "HCS",
        meaning: "Humidification Control System"
  },
  {
        abbreviation: "HCU",
        meaning: "Head Up Combiner Unit"
  },
  {
        abbreviation: "HCU",
        meaning: "Hydraulic Control Unit"
  },
  {
        abbreviation: "HDDA",
        meaning: "Hard Disk Drive Array"
  },
  {
        abbreviation: "HDG",
        meaning: "Heading"
  },
  {
        abbreviation: "HDG HOLD",
        meaning: "Heading Hold"
  },
  {
        abbreviation: "HDG SEL",
        meaning: "Heading Selected"
  },
  {
        abbreviation: "HDG/S",
        meaning: "Heading Selected"
  },
  {
        abbreviation: "HDL",
        meaning: "Handle"
  },
  {
        abbreviation: "HDLG",
        meaning: "Handling"
  },
  {
        abbreviation: "HDM",
        meaning: "HSDU Data Module"
  },
  {
        abbreviation: "HDMI",
        meaning: "High-Definition Multimedia Interface"
  },
  {
        abbreviation: "HDST",
        meaning: "Headset"
  },
  {
        abbreviation: "HDWHL",
        meaning: "Handwheel"
  },
  {
        abbreviation: "HEATG",
        meaning: "Heating"
  },
  {
        abbreviation: "HEDS",
        meaning: "Head End Data Switch"
  },
  {
        abbreviation: "HEGS",
        meaning: "Hydraulic Electrical Generating System"
  },
  {
        abbreviation: "HELGA",
        meaning: "HLD and Enhanced Low Gain Antenna"
  },
  {
        abbreviation: "HEPA",
        meaning: "High Efficiency Particulate Air"
  },
  {
        abbreviation: "HERTO",
        meaning: "High Energy Rejected Takeoff"
  },
  {
        abbreviation: "HES",
        meaning: "Head-End Switch"
  },
  {
        abbreviation: "HES",
        meaning: "Head End Server"
  },
  {
        abbreviation: "HESU",
        meaning: "Head-End Server Unit"
  },
  {
        abbreviation: "HF",
        meaning: "High Frequency"
  },
  {
        abbreviation: "HF",
        meaning: "Holding Pattern to a Fixed Waypoint"
  },
  {
        abbreviation: "HFDR",
        meaning: "High Frequency Data Radio"
  },
  {
        abbreviation: "HFEC",
        meaning: "High Frequency Eddy Current"
  },
  {
        abbreviation: "HFP",
        meaning: "Heated Floor Panel"
  },
  {
        abbreviation: "HG",
        meaning: "Mercury"
  },
  {
        abbreviation: "HGA",
        meaning: "High Gain Antenna"
  },
  {
        abbreviation: "HGW",
        meaning: "High Gross Weight"
  },
  {
        abbreviation: "HHX",
        meaning: "Hydraulic Heat Exchanger"
  },
  {
        abbreviation: "HI",
        meaning: "High"
  },
  {
        abbreviation: "HID",
        meaning: "High Intensity Discharge"
  },
  {
        abbreviation: "HIDS",
        meaning: "Host Intrusion Detection System"
  },
  {
        abbreviation: "HIG",
        meaning: "Hermetically Sealed Integrating Gyro"
  },
  {
        abbreviation: "HIV",
        meaning: "Hydraulic Isolation Valve"
  },
  {
        abbreviation: "HL",
        meaning: "High Level"
  },
  {
        abbreviation: "HLD",
        meaning: "High Power Amplifier/Low Noise Amplifier/Diplexer"
  },
  {
        abbreviation: "HLD",
        meaning: "Hold"
  },
  {
        abbreviation: "HLD",
        meaning: "High Lift Device"
  },
  {
        abbreviation: "HLDR",
        meaning: "Holder"
  },
  {
        abbreviation: "HLFC",
        meaning: "Hybrid Laminar Flow Control"
  },
  {
        abbreviation: "HLL",
        meaning: "High Leak Logic"
  },
  {
        abbreviation: "HLS",
        meaning: "High Lift System"
  },
  {
        abbreviation: "HLTY",
        meaning: "Healthy"
  },
  {
        abbreviation: "HM",
        meaning: "Holding Pattern with a Manual Termination"
  },
  {
        abbreviation: "HMA",
        meaning: "Human Monitoring Application"
  },
  {
        abbreviation: "HMC",
        meaning: "Hydromechanical Control"
  },
  {
        abbreviation: "HMC",
        meaning: "Hydraulic Monitoring and Control"
  },
  {
        abbreviation: "HMCA",
        meaning: "Hydraulic Monitoring and Control Application"
  },
  {
        abbreviation: "HMCRF",
        meaning: "Hydraulic Monitoring and Control Remote Function"
  },
  {
        abbreviation: "HMDU",
        meaning: "Hatrack Mounted Display Unit"
  },
  {
        abbreviation: "HMG",
        meaning: "Hydraulic Motor Generator"
  },
  {
        abbreviation: "HMI",
        meaning: "Human-Machine Interface"
  },
  {
        abbreviation: "HMS",
        meaning: "Human Monitoring System"
  },
  {
        abbreviation: "HMU",
        meaning: "Hydromechanical Metering Unit"
  },
  {
        abbreviation: "HMU",
        meaning: "Hydromechanical Unit"
  },
  {
        abbreviation: "HNDRL",
        meaning: "Handrail"
  },
  {
        abbreviation: "HOR",
        meaning: "Hold Open Rod"
  },
  {
        abbreviation: "HOR",
        meaning: "Horizontal"
  },
  {
        abbreviation: "HORZ",
        meaning: "Horizon"
  },
  {
        abbreviation: "HOT",
        meaning: "High Oil Temperature"
  },
  {
        abbreviation: "HP",
        meaning: "High Pressure"
  },
  {
        abbreviation: "HPA",
        meaning: "High Power Amplifier"
  },
  {
        abbreviation: "HPC",
        meaning: "High Pressure Compressor"
  },
  {
        abbreviation: "HPCR",
        meaning: "High Pressure Compressor Rotor"
  },
  {
        abbreviation: "hPFD",
        meaning: "harmonized Primary Flight Display"
  },
  {
        abbreviation: "HPP",
        meaning: "Hardware Pin Programming"
  },
  {
        abbreviation: "HPR",
        meaning: "High Power Relay"
  },
  {
        abbreviation: "HPSOV",
        meaning: "High Pressure Shutoff Valve"
  },
  {
        abbreviation: "HPT",
        meaning: "High Pressure Turbine"
  },
  {
        abbreviation: "HPTACC",
        meaning: "High Pressure Turbine Active Clearance Control"
  },
  {
        abbreviation: "HPTC",
        meaning: "High Pressure Turbine Clearance"
  },
  {
        abbreviation: "HPTC",
        meaning: "(HP) Turbine Clearance"
  },
  {
        abbreviation: "HPTCC",
        meaning: "High Pressure Turbine Case Cooling"
  },
  {
        abbreviation: "HPTCC",
        meaning: "High Pressure Turbine Clearance Control"
  },
  {
        abbreviation: "HPTCC",
        meaning: "(HP) Turbine (Active) Clearance Control"
  },
  {
        abbreviation: "HPTCCV",
        meaning: "(HP) Turbine Clearance Control Valve"
  },
  {
        abbreviation: "HPTCV",
        meaning: "High Pressure Turbine Cooling Valve"
  },
  {
        abbreviation: "HPTR",
        meaning: "High Pressure Turbine Rotor"
  },
  {
        abbreviation: "HPU",
        meaning: "Head up Projection Unit"
  },
  {
        abbreviation: "HPV",
        meaning: "HP Bleed Valve"
  },
  {
        abbreviation: "HR",
        meaning: "Hour"
  },
  {
        abbreviation: "HRP",
        meaning: "Horizontal Reference Plane"
  },
  {
        abbreviation: "HRR",
        meaning: "Heat Release Rate"
  },
  {
        abbreviation: "HRU",
        meaning: "Highly Resistive Union"
  },
  {
        abbreviation: "HS",
        meaning: "High Speed"
  },
  {
        abbreviation: "HSD",
        meaning: "High Speed Data"
  },
  {
        abbreviation: "HSDU",
        meaning: "High Speed Data Unit"
  },
  {
        abbreviation: "HSI",
        meaning: "Horizontal Situation Indicator"
  },
  {
        abbreviation: "HSMU",
        meaning: "Hydraulic System Monitoring Unit"
  },
  {
        abbreviation: "HSMU",
        meaning: "Hydraulic System Management Unit"
  },
  {
        abbreviation: "HSU",
        meaning: "HUD Sunvisor Unit"
  },
  {
        abbreviation: "HTG",
        meaning: "Heating"
  },
  {
        abbreviation: "HTR",
        meaning: "Heater"
  },
  {
        abbreviation: "HUD",
        meaning: "Head-Up Display"
  },
  {
        abbreviation: "HUD",
        meaning: "Head Up Display"
  },
  {
        abbreviation: "HUDC",
        meaning: "Head Up Display Computer"
  },
  {
        abbreviation: "HUMIDIF",
        meaning: "Humidification"
  },
  {
        abbreviation: "HV",
        meaning: "High Voltage"
  },
  {
        abbreviation: "HVDC",
        meaning: "High Voltage Direct Current"
  },
  {
        abbreviation: "HVOF",
        meaning: "High Velocity Oxygen-Fuel"
  },
  {
        abbreviation: "HVPS",
        meaning: "High Voltage Power Supply"
  },
  {
        abbreviation: "HX",
        meaning: "Heat Exchanger"
  },
  {
        abbreviation: "HXX",
        meaning: "Hydraulic Heat Exchanger"
  },
  {
        abbreviation: "HYD",
        meaning: "Hydraulic"
  },
  {
        abbreviation: "HZ",
        meaning: "Hertz (cycles per second)"
  },
  {
        abbreviation: "I/C",
        meaning: "Inspection/Check"
  },
  {
        abbreviation: "I/O",
        meaning: "Input/Output"
  },
  {
        abbreviation: "I/P",
        meaning: "Input"
  },
  {
        abbreviation: "I/P",
        meaning: "Intercept Point"
  },
  {
        abbreviation: "I/P",
        meaning: "Intercept Profile"
  },
  {
        abbreviation: "I4D",
        meaning: "Initial 4D"
  },
  {
        abbreviation: "IA",
        meaning: "Inspection Authorisation"
  },
  {
        abbreviation: "IAE",
        meaning: "International Aero Engines"
  },
  {
        abbreviation: "IAF",
        meaning: "Initial Approach Fix"
  },
  {
        abbreviation: "IAS",
        meaning: "Indicated Airspeed"
  },
  {
        abbreviation: "IASC",
        meaning: "Integrated Air System Controller"
  },
  {
        abbreviation: "IBIT",
        meaning: "Initiated BITE"
  },
  {
        abbreviation: "IBLC",
        meaning: "Inter-Bus Line Contactor"
  },
  {
        abbreviation: "IBR",
        meaning: "Integrally Bladed Rotor"
  },
  {
        abbreviation: "IBU",
        meaning: "Integrated Ballast Unit"
  },
  {
        abbreviation: "IBVSU",
        meaning: "Instrument Bus Voltage Sense Units"
  },
  {
        abbreviation: "IC",
        meaning: "Integrated Circuit"
  },
  {
        abbreviation: "ICA",
        meaning: "Instructions for Continued Airworthiness"
  },
  {
        abbreviation: "ICAO",
        meaning: "International Civil Aviation Organization"
  },
  {
        abbreviation: "ICAO",
        meaning: "International Civil Aviation Organisation"
  },
  {
        abbreviation: "ICC",
        meaning: "Integrated Change Control"
  },
  {
        abbreviation: "ICD",
        meaning: "Interface Control Document"
  },
  {
        abbreviation: "ICP",
        meaning: "Inside Control Panel"
  },
  {
        abbreviation: "ICP",
        meaning: "Integrated Control Panel"
  },
  {
        abbreviation: "ICPS",
        meaning: "Integrated Control Panel System"
  },
  {
        abbreviation: "ICU",
        meaning: "Isolation Control Unit"
  },
  {
        abbreviation: "ICU",
        meaning: "IGGS Controller Unit"
  },
  {
        abbreviation: "ICU",
        meaning: "Instrument Comparator Unit"
  },
  {
        abbreviation: "ICY",
        meaning: "Interchangeability"
  },
  {
        abbreviation: "ICY-CS",
        meaning: "Interchangeability Compliance Sheet"
  },
  {
        abbreviation: "ID",
        meaning: "Identification"
  },
  {
        abbreviation: "ID",
        meaning: "Inner Diameter"
  },
  {
        abbreviation: "ID",
        meaning: "Inside Diameter"
  },
  {
        abbreviation: "IDENT",
        meaning: "Identification"
  },
  {
        abbreviation: "IDENT",
        meaning: "Identifier"
  },
  {
        abbreviation: "IDENT",
        meaning: "Identify"
  },
  {
        abbreviation: "IDG",
        meaning: "Integrated Drive Generator"
  },
  {
        abbreviation: "IDLS",
        meaning: "Internal Door Locking System"
  },
  {
        abbreviation: "IDU",
        meaning: "Interactive Display Unit"
  },
  {
        abbreviation: "IEPR",
        meaning: "Integrated Engine Pressure Ratio"
  },
  {
        abbreviation: "IF",
        meaning: "Initial Fix"
  },
  {
        abbreviation: "IF",
        meaning: "Intermediate Frequency"
  },
  {
        abbreviation: "IFCC",
        meaning: "Integrated Flight Control Computer"
  },
  {
        abbreviation: "IFCS",
        meaning: "Integrated Flight Control System"
  },
  {
        abbreviation: "IFE",
        meaning: "In-Flight Entertainment"
  },
  {
        abbreviation: "IFEC",
        meaning: "In-Flight Entertainment Center"
  },
  {
        abbreviation: "IFF",
        meaning: "Identification, Freind or Foe"
  },
  {
        abbreviation: "IFIM",
        meaning: "International Flight Information Manual"
  },
  {
        abbreviation: "IFPA",
        meaning: "In-Flight Performance Application"
  },
  {
        abbreviation: "IFPC",
        meaning: "Integrated Fuel Pump and Control"
  },
  {
        abbreviation: "IFR",
        meaning: "Instrument Flight Rules"
  },
  {
        abbreviation: "IFS",
        meaning: "Inner Fixed Structure"
  },
  {
        abbreviation: "IFSAU",
        meaning: "Integrated Flight Systems Accessory Unit"
  },
  {
        abbreviation: "IFSD",
        meaning: "In Flight Shut Down"
  },
  {
        abbreviation: "IG",
        meaning: "Idle Gate"
  },
  {
        abbreviation: "IGA",
        meaning: "Intermediate Gain Antenna"
  },
  {
        abbreviation: "IGB",
        meaning: "Inlet Gear Box"
  },
  {
        abbreviation: "IGB",
        meaning: "Inlet Gearbox"
  },
  {
        abbreviation: "IGDS",
        meaning: "Inert Gas Distribution System"
  },
  {
        abbreviation: "IGFET",
        meaning: "Insulated Gate Field Effect Transistor"
  },
  {
        abbreviation: "IGGS",
        meaning: "Inert Gas Generation System"
  },
  {
        abbreviation: "IGN",
        meaning: "Ignition"
  },
  {
        abbreviation: "IGS",
        meaning: "Idle Gate System"
  },
  {
        abbreviation: "IGSC",
        meaning: "Inert Gas System Control"
  },
  {
        abbreviation: "IGV",
        meaning: "Inlet Guide Vane"
  },
  {
        abbreviation: "IGV",
        meaning: "Inlet Guide Vanes"
  },
  {
        abbreviation: "IGVA",
        meaning: "Inlet Guide Vanes Actuator"
  },
  {
        abbreviation: "IGW",
        meaning: "Initial Gross Weight"
  },
  {
        abbreviation: "IGWI",
        meaning: "Integrated Galley Warming Insert"
  },
  {
        abbreviation: "IHP",
        meaning: "Indicated Horsepower"
  },
  {
        abbreviation: "ILF",
        meaning: "Integrated Loading Facility"
  },
  {
        abbreviation: "ILLUM",
        meaning: "Illumination"
  },
  {
        abbreviation: "ILLUM",
        meaning: "Illuminate, Illuminated"
  },
  {
        abbreviation: "ILS",
        meaning: "Instrument Landing System"
  },
  {
        abbreviation: "IM",
        meaning: "Inner Marker"
  },
  {
        abbreviation: "IMA",
        meaning: "Integrated Modular Avionics"
  },
  {
        abbreviation: "IMACS",
        meaning: "Information Management Aircraft-ground Communication System"
  },
  {
        abbreviation: "IMCC",
        meaning: "Information Management Common Chassis"
  },
  {
        abbreviation: "IMEI",
        meaning: "International Mobile Equipment Identity"
  },
  {
        abbreviation: "IMEP",
        meaning: "Indicated Mean Effective Pressure"
  },
  {
        abbreviation: "IML",
        meaning: "Integration Maintenance Load"
  },
  {
        abbreviation: "IMM",
        meaning: "Immediate"
  },
  {
        abbreviation: "IMMR",
        meaning: "Integrated Multi Mode Receiver"
  },
  {
        abbreviation: "IMP",
        meaning: "Imperial"
  },
  {
        abbreviation: "IMR",
        meaning: "Interlock Monitoring Relay"
  },
  {
        abbreviation: "IMSI",
        meaning: "International Mobile Subscriber Identity"
  },
  {
        abbreviation: "IMU",
        meaning: "Inertial Measurement Unit"
  },
  {
        abbreviation: "IN",
        meaning: "Inch"
  },
  {
        abbreviation: "INB",
        meaning: "Inbound"
  },
  {
        abbreviation: "INBD",
        meaning: "Inboard"
  },
  {
        abbreviation: "INBO",
        meaning: "Inboard"
  },
  {
        abbreviation: "INC",
        meaning: "Incorporated"
  },
  {
        abbreviation: "INCR",
        meaning: "Increment"
  },
  {
        abbreviation: "INCR",
        meaning: "Increase"
  },
  {
        abbreviation: "IND",
        meaning: "Indicator"
  },
  {
        abbreviation: "INDEP",
        meaning: "Independent"
  },
  {
        abbreviation: "INDG",
        meaning: "Indicating"
  },
  {
        abbreviation: "INFLT",
        meaning: "Inflight"
  },
  {
        abbreviation: "INFO",
        meaning: "Information"
  },
  {
        abbreviation: "INHB",
        meaning: "Inhibit"
  },
  {
        abbreviation: "INHIB",
        meaning: "Inhibit"
  },
  {
        abbreviation: "INHIB",
        meaning: "Inhibited"
  },
  {
        abbreviation: "INHIB",
        meaning: "Inhibition"
  },
  {
        abbreviation: "INIT",
        meaning: "Initial"
  },
  {
        abbreviation: "INIT",
        meaning: "Initialization"
  },
  {
        abbreviation: "INIT",
        meaning: "Initialisation"
  },
  {
        abbreviation: "INOP",
        meaning: "Inoperative"
  },
  {
        abbreviation: "INPH",
        meaning: "Interphone"
  },
  {
        abbreviation: "INR",
        meaning: "Inner"
  },
  {
        abbreviation: "INRTL",
        meaning: "Inertial"
  },
  {
        abbreviation: "INS",
        meaning: "Inertial Navigation System"
  },
  {
        abbreviation: "INST",
        meaning: "Instinctive"
  },
  {
        abbreviation: "INST",
        meaning: "Instrument"
  },
  {
        abbreviation: "INST(S)",
        meaning: "Instrument (s)"
  },
  {
        abbreviation: "INSTL",
        meaning: "Installation"
  },
  {
        abbreviation: "INSUL",
        meaning: "Insulate"
  },
  {
        abbreviation: "INSUL",
        meaning: "Insulation"
  },
  {
        abbreviation: "INSUL",
        meaning: "Insulator"
  },
  {
        abbreviation: "INT",
        meaning: "Interior"
  },
  {
        abbreviation: "INTCON",
        meaning: "Interconnection"
  },
  {
        abbreviation: "INTCP",
        meaning: "Intercept"
  },
  {
        abbreviation: "INTEG",
        meaning: "Integral"
  },
  {
        abbreviation: "INTEG",
        meaning: "Integrally"
  },
  {
        abbreviation: "INTERCOM",
        meaning: "Intercommunication"
  },
  {
        abbreviation: "INTFC",
        meaning: "Interface"
  },
  {
        abbreviation: "INTL",
        meaning: "Internal"
  },
  {
        abbreviation: "INTLK",
        meaning: "Interlock"
  },
  {
        abbreviation: "INTMD",
        meaning: "Intermediate"
  },
  {
        abbreviation: "INTMT",
        meaning: "Intermittent"
  },
  {
        abbreviation: "INTPH",
        meaning: "Interphone"
  },
  {
        abbreviation: "INTRG",
        meaning: "Interrogate"
  },
  {
        abbreviation: "INTRG",
        meaning: "Interrogator"
  },
  {
        abbreviation: "INTRPT",
        meaning: "Interrupt"
  },
  {
        abbreviation: "INV",
        meaning: "Inverter"
  },
  {
        abbreviation: "INV",
        meaning: "Static Inverter"
  },
  {
        abbreviation: "IOM",
        meaning: "Input/Output Module"
  },
  {
        abbreviation: "IP",
        meaning: "Intermediate Pressure"
  },
  {
        abbreviation: "IP",
        meaning: "Internet Protocol"
  },
  {
        abbreviation: "IP",
        meaning: "Intermediate Pressure, Input"
  },
  {
        abbreviation: "IPB",
        meaning: "Illustrated Parts Breakdown"
  },
  {
        abbreviation: "IPC",
        meaning: "Illustrated Parts Catalog"
  },
  {
        abbreviation: "IPCOM",
        meaning: "Internet Protocol Communication"
  },
  {
        abbreviation: "IPCU",
        meaning: "Ice Protection Control Unit"
  },
  {
        abbreviation: "IPCV",
        meaning: "Intermediate Pressure Check Valve"
  },
  {
        abbreviation: "IPD",
        meaning: "Illustrated Parts Data"
  },
  {
        abbreviation: "IPDU",
        meaning: "Ice Protection Data Unit"
  },
  {
        abbreviation: "IPL",
        meaning: "Illustrated Parts List"
  },
  {
        abbreviation: "IPM",
        meaning: "Illustrated Parts Manual"
  },
  {
        abbreviation: "IPPU",
        meaning: "Instrumentation Position Pick-off Unit"
  },
  {
        abbreviation: "IPRAM",
        meaning: "Integrated Prerecorded Announcement Module"
  },
  {
        abbreviation: "IPSB",
        meaning: "Installed Physical Secondary Barrier"
  },
  {
        abbreviation: "IPSM",
        meaning: "Intelligent Power Supply Module"
  },
  {
        abbreviation: "IPTCC",
        meaning: "Intermediate Pressure Turbine Case Cooling"
  },
  {
        abbreviation: "IR",
        meaning: "Inertial Reference"
  },
  {
        abbreviation: "IR",
        meaning: "Infrared"
  },
  {
        abbreviation: "IR",
        meaning: "Voltage < U= I.R>"
  },
  {
        abbreviation: "IRAN",
        meaning: "Inspect and Repair As Necessary"
  },
  {
        abbreviation: "IRBM",
        meaning: "Intermediate-Range Ballistic Missile"
  },
  {
        abbreviation: "IRD",
        meaning: "Integrated Receiver Decoder"
  },
  {
        abbreviation: "IRDC",
        meaning: "Interface Remote Data Concentrator"
  },
  {
        abbreviation: "IRDM",
        meaning: "Integrated Receiver Decoder Module"
  },
  {
        abbreviation: "IRMP",
        meaning: "Inertial Reference Mode Panel"
  },
  {
        abbreviation: "IRP",
        meaning: "Integrated Refuel Panel"
  },
  {
        abbreviation: "IRS",
        meaning: "Inertial Reference System"
  },
  {
        abbreviation: "IRU",
        meaning: "Inertial Reference Unit"
  },
  {
        abbreviation: "ISA",
        meaning: "International Standard Atmosphere"
  },
  {
        abbreviation: "ISB",
        meaning: "Inspection Service Bulletin"
  },
  {
        abbreviation: "ISDN",
        meaning: "Integrated Services Data Network"
  },
  {
        abbreviation: "ISDN",
        meaning: "Integrated Services Digital Network"
  },
  {
        abbreviation: "ISDPL",
        meaning: "Inadvertent Slide Deployment Prevention Light"
  },
  {
        abbreviation: "ISIS",
        meaning: "Integrated Standby Instrument System"
  },
  {
        abbreviation: "ISLN",
        meaning: "Isolation"
  },
  {
        abbreviation: "ISM",
        meaning: "Illumination Sensor Module"
  },
  {
        abbreviation: "ISM",
        meaning: "In-Service Monitoring"
  },
  {
        abbreviation: "ISO",
        meaning: "International Standardization Organization"
  },
  {
        abbreviation: "ISOL",
        meaning: "Isolation"
  },
  {
        abbreviation: "ISP",
        meaning: "Integrated Static Probe"
  },
  {
        abbreviation: "ISP",
        meaning: "Internet Service Provider"
  },
  {
        abbreviation: "ISPS",
        meaning: "In-Seat Power Supply"
  },
  {
        abbreviation: "ISPSS",
        meaning: "In-Seat Power Supply System"
  },
  {
        abbreviation: "ISPSU",
        meaning: "In-Seat Power Supply Unit"
  },
  {
        abbreviation: "ITP",
        meaning: "In-Trail Procedure"
  },
  {
        abbreviation: "ITT",
        meaning: "Intermediate Turbine Temperature"
  },
  {
        abbreviation: "ITTI",
        meaning: "Interturbine Temperature Indicator"
  },
  {
        abbreviation: "IUL",
        meaning: "In-Use Light"
  },
  {
        abbreviation: "IV",
        meaning: "Isolation Valve"
  },
  {
        abbreviation: "IVASEB",
        meaning: "Integrated Video and Audio Seat Electronic Box"
  },
  {
        abbreviation: "IVS",
        meaning: "Inertial Vertical Speed"
  },
  {
        abbreviation: "IVSI",
        meaning: "Instantaneous Rate of Climb Indicator"
  },
  {
        abbreviation: "IWDL",
        meaning: "Internal Wireless Data Link"
  },
  {
        abbreviation: "JAA",
        meaning: "Joint Airworthiness Authorities"
  },
  {
        abbreviation: "JAM",
        meaning: "Jammed"
  },
  {
        abbreviation: "JAM",
        meaning: "Jamming"
  },
  {
        abbreviation: "JAR",
        meaning: "Joint Aviation Requirements"
  },
  {
        abbreviation: "JAR",
        meaning: "Joint Airworthiness Regulations"
  },
  {
        abbreviation: "JATO",
        meaning: "Jet Assist Takeoff"
  },
  {
        abbreviation: "JEP",
        meaning: "Jeppesen"
  },
  {
        abbreviation: "JFC",
        meaning: "Jet Fuel Control"
  },
  {
        abbreviation: "JFET",
        meaning: "Junction Field Effect Transistor"
  },
  {
        abbreviation: "JFGW",
        meaning: "Jettison Final Gross Weight"
  },
  {
        abbreviation: "JID",
        meaning: "Jeppesen Inflight Database"
  },
  {
        abbreviation: "JITX",
        meaning: "Jeppesen Integrated Tool Kit X"
  },
  {
        abbreviation: "JTSN",
        meaning: "Jettison"
  },
  {
        abbreviation: "JUNCTN",
        meaning: "Junction"
  },
  {
        abbreviation: "K,KT, KTS",
        meaning: "Knots"
  },
  {
        abbreviation: "KANDU",
        meaning: "Ku/Ka-band Aircraft Networking Data Unit"
  },
  {
        abbreviation: "KBD",
        meaning: "Keyboard"
  },
  {
        abbreviation: "KCAS",
        meaning: "Knots Calibrated Airspeed"
  },
  {
        abbreviation: "KCCU",
        meaning: "Keyboard and Cursor Control Unit"
  },
  {
        abbreviation: "KEAS",
        meaning: "Knots Equivalent Airspeed"
  },
  {
        abbreviation: "KFS",
        meaning: "Kaspersky File System"
  },
  {
        abbreviation: "KG",
        meaning: "Kilogramme"
  },
  {
        abbreviation: "KHz",
        meaning: "Kilo Hertz"
  },
  {
        abbreviation: "KIAS",
        meaning: "Knots Indicated Airspeed"
  },
  {
        abbreviation: "KOZ",
        meaning: "Keep Out Zone"
  },
  {
        abbreviation: "KPP",
        meaning: "Key Process Parameter"
  },
  {
        abbreviation: "KRFU",
        meaning: "Ku/Ka-band Radio Frequency Unit"
  },
  {
        abbreviation: "KT, KN",
        meaning: "Knot"
  },
  {
        abbreviation: "KU",
        meaning: "Keyboard Unit"
  },
  {
        abbreviation: "KVAR",
        meaning: "Kilovolt Amperes Reactive"
  },
  {
        abbreviation: "KVS",
        meaning: "V2/Vs"
  },
  {
        abbreviation: "L",
        meaning: "Left"
  },
  {
        abbreviation: "L",
        meaning: "Length"
  },
  {
        abbreviation: "L",
        meaning: "Left, Liter"
  },
  {
        abbreviation: "L/E",
        meaning: "Leading Edge"
  },
  {
        abbreviation: "L/G",
        meaning: "Landing Gear"
  },
  {
        abbreviation: "L/H",
        meaning: "Left Hand"
  },
  {
        abbreviation: "L/HIRF",
        meaning: "Lightning/High Intensity Radiated Fields"
  },
  {
        abbreviation: "LA",
        meaning: "Linear Accelerometer"
  },
  {
        abbreviation: "LAA",
        meaning: "Latch Actuator"
  },
  {
        abbreviation: "LAAS",
        meaning: "Low Altitude Alert System"
  },
  {
        abbreviation: "LAF",
        meaning: "Load Alleviation Function"
  },
  {
        abbreviation: "LAILA",
        meaning: "LAvatory Interface and Light Adapter"
  },
  {
        abbreviation: "LAL",
        meaning: "Loading Area Light"
  },
  {
        abbreviation: "LAMM",
        meaning: "Lights, Audio and Miscellaneous Module"
  },
  {
        abbreviation: "LAN",
        meaning: "Local Area Network"
  },
  {
        abbreviation: "LAO",
        meaning: "Lateral Air Outlet"
  },
  {
        abbreviation: "LASCR",
        meaning: "Light Activated Silicon Control Rectifier"
  },
  {
        abbreviation: "LAT",
        meaning: "Lateral"
  },
  {
        abbreviation: "LAT",
        meaning: "Latitude"
  },
  {
        abbreviation: "LAT",
        meaning: "Latitude, Lateral"
  },
  {
        abbreviation: "LAT REV",
        meaning: "Lateral Revision"
  },
  {
        abbreviation: "LAV",
        meaning: "Lavatory"
  },
  {
        abbreviation: "LB",
        meaning: "Pound"
  },
  {
        abbreviation: "LB/HR",
        meaning: "Pound per Hour"
  },
  {
        abbreviation: "LBA",
        meaning: "Logical Bus Application"
  },
  {
        abbreviation: "LBA",
        meaning: "Left Bottom Aft"
  },
  {
        abbreviation: "LBA",
        meaning: "Propeller Low Angle, Low Blade Angle"
  },
  {
        abbreviation: "LBC",
        meaning: "Local Booking Code"
  },
  {
        abbreviation: "LBF",
        meaning: "Left Bottom Forward"
  },
  {
        abbreviation: "LBP",
        meaning: "Left Bottom Plug"
  },
  {
        abbreviation: "LBS",
        meaning: "L-Band System"
  },
  {
        abbreviation: "LBU",
        meaning: "L-Band Unit"
  },
  {
        abbreviation: "LC",
        meaning: "Line Contactor"
  },
  {
        abbreviation: "LCA",
        meaning: "Life Cycle Assessment"
  },
  {
        abbreviation: "LCCA",
        meaning: "Lateral Central Control Actuator"
  },
  {
        abbreviation: "LCD",
        meaning: "Liquid Crystal Display"
  },
  {
        abbreviation: "LCDT",
        meaning: "Load Compressor Discharge Temperature"
  },
  {
        abbreviation: "LCF",
        meaning: "Left Center Fuselage"
  },
  {
        abbreviation: "LCF",
        meaning: "Low Cycle Fatigue"
  },
  {
        abbreviation: "LCH",
        meaning: "Latch"
  },
  {
        abbreviation: "LCHD",
        meaning: "Latched"
  },
  {
        abbreviation: "LCIT",
        meaning: "Load Compressor Inlet Temperature"
  },
  {
        abbreviation: "LCM",
        meaning: "Logic Control Module"
  },
  {
        abbreviation: "LCN",
        meaning: "Load Classification Number"
  },
  {
        abbreviation: "LCO",
        meaning: "Limit Cycle Oscillation"
  },
  {
        abbreviation: "LCP",
        meaning: "Local Control Panel"
  },
  {
        abbreviation: "LCS",
        meaning: "Light Cockpit SATCOM"
  },
  {
        abbreviation: "LCTR",
        meaning: "Locator"
  },
  {
        abbreviation: "LD",
        meaning: "Lower Deck"
  },
  {
        abbreviation: "LD CAB",
        meaning: "Lower Deck Cabin"
  },
  {
        abbreviation: "LD GALY",
        meaning: "Lower Deck Galley"
  },
  {
        abbreviation: "LD LAV",
        meaning: "Lower Deck Lavatory"
  },
  {
        abbreviation: "LDC",
        meaning: "Local Door Controller"
  },
  {
        abbreviation: "LDCC",
        meaning: "Lower Deck Cargo Compartment"
  },
  {
        abbreviation: "LDF",
        meaning: "Lower Deck Facilities"
  },
  {
        abbreviation: "LDG",
        meaning: "Landing"
  },
  {
        abbreviation: "LDG GR",
        meaning: "Landing Gear"
  },
  {
        abbreviation: "LDM",
        meaning: "LED-Driver Module"
  },
  {
        abbreviation: "LDMCR",
        meaning: "Lower Deck Mobile Crew Rest"
  },
  {
        abbreviation: "LDPA",
        meaning: "LanDing Performance Application"
  },
  {
        abbreviation: "LDS",
        meaning: "Laptop Docking Station"
  },
  {
        abbreviation: "LDSF",
        meaning: "Lower Deck Surveillance Function"
  },
  {
        abbreviation: "LDSS",
        meaning: "Lower Deck Surveillance System"
  },
  {
        abbreviation: "LE",
        meaning: "Leading Edge"
  },
  {
        abbreviation: "LED",
        meaning: "Light Emitting Diode"
  },
  {
        abbreviation: "LEHGS",
        meaning: "Local Electro-Hydraulic Generation System"
  },
  {
        abbreviation: "LEL",
        meaning: "Lower Explosive Limit"
  },
  {
        abbreviation: "LEMAC",
        meaning: "Leading Edge of The Mean Aerodynamic Chord"
  },
  {
        abbreviation: "LEO",
        meaning: "Low Earth Orbit"
  },
  {
        abbreviation: "LER",
        meaning: "Leading Edge Rib"
  },
  {
        abbreviation: "LF",
        meaning: "Low Frequency"
  },
  {
        abbreviation: "LF",
        meaning: "Left Front, Line Feed"
  },
  {
        abbreviation: "LFEC",
        meaning: "Low Fequency Eddy Current"
  },
  {
        abbreviation: "LFES",
        meaning: "Landing Field Elevation Selector"
  },
  {
        abbreviation: "LGA",
        meaning: "Low Gain Antenna"
  },
  {
        abbreviation: "LGCIS",
        meaning: "Landing Gear Control Indication System"
  },
  {
        abbreviation: "LGCIU",
        meaning: "Landing Gear Control and Interface Unit"
  },
  {
        abbreviation: "LGCIU",
        meaning: "Landing Gear Control Interface Unit"
  },
  {
        abbreviation: "LGCM",
        meaning: "Light Green Communication Manager"
  },
  {
        abbreviation: "LGCU",
        meaning: "Left Generator Control Unit"
  },
  {
        abbreviation: "LGERS",
        meaning: "Landing Gear Extension and Retraction System"
  },
  {
        abbreviation: "LGL",
        meaning: "LED Gobo Light"
  },
  {
        abbreviation: "LGMS",
        meaning: "Landing Gear Management System"
  },
  {
        abbreviation: "LGMS",
        meaning: "Landing Gear Monitoring System"
  },
  {
        abbreviation: "LGPCU",
        meaning: "Landing Gear Position Control Unit"
  },
  {
        abbreviation: "LGW",
        meaning: "Landing Gross Weight"
  },
  {
        abbreviation: "LGWSS",
        meaning: "Landing Gear Well Surveillance System"
  },
  {
        abbreviation: "LH",
        meaning: "Left Hand"
  },
  {
        abbreviation: "LH",
        meaning: "Left-Hand (Threads)"
  },
  {
        abbreviation: "LH2",
        meaning: "Liquid Hydrogen"
  },
  {
        abbreviation: "LIB",
        meaning: "Loudspeaker and Indicator Box"
  },
  {
        abbreviation: "LIFO",
        meaning: "Last In First Out"
  },
  {
        abbreviation: "LIM",
        meaning: "Limit"
  },
  {
        abbreviation: "LIM",
        meaning: "Limitation"
  },
  {
        abbreviation: "LIM",
        meaning: "Limiter"
  },
  {
        abbreviation: "LIM",
        meaning: "Limiting"
  },
  {
        abbreviation: "LIQD",
        meaning: "Liquid"
  },
  {
        abbreviation: "LIS",
        meaning: "Localizer Inertial Smoothing"
  },
  {
        abbreviation: "LKD",
        meaning: "Locked"
  },
  {
        abbreviation: "LKG",
        meaning: "Locking"
  },
  {
        abbreviation: "LKSHFT",
        meaning: "Lockshaft"
  },
  {
        abbreviation: "LL",
        meaning: "Latitude/longitude"
  },
  {
        abbreviation: "LL",
        meaning: "Latitude/Longitude - Last Leg"
  },
  {
        abbreviation: "LLA",
        meaning: "Lavatory Light Adapter"
  },
  {
        abbreviation: "LLP",
        meaning: "Life Limited Parts"
  },
  {
        abbreviation: "LLS",
        meaning: "Liquid Level Sensor"
  },
  {
        abbreviation: "LM",
        meaning: "Local Manufacturer"
  },
  {
        abbreviation: "LMES",
        meaning: "Loss of Main Electrical Supply"
  },
  {
        abbreviation: "LMF",
        meaning: "Local Maintenance Function"
  },
  {
        abbreviation: "LMM, MM",
        meaning: "Localizer Middle Marker"
  },
  {
        abbreviation: "LMP",
        meaning: "Left Middle Plug"
  },
  {
        abbreviation: "LMS",
        meaning: "Leakage Measurement System"
  },
  {
        abbreviation: "LN",
        meaning: "Left Nose"
  },
  {
        abbreviation: "LNA",
        meaning: "Low Noise Amplifier"
  },
  {
        abbreviation: "L-NAV",
        meaning: "Lateral Navigation"
  },
  {
        abbreviation: "LNG",
        meaning: "Long"
  },
  {
        abbreviation: "LNR",
        meaning: "Linear"
  },
  {
        abbreviation: "LO",
        meaning: "Low"
  },
  {
        abbreviation: "LOA",
        meaning: "Lock Actuator"
  },
  {
        abbreviation: "LOC",
        meaning: "Localizer"
  },
  {
        abbreviation: "LOCKG",
        meaning: "Locking"
  },
  {
        abbreviation: "LOGO",
        meaning: "Logographic"
  },
  {
        abbreviation: "LOL",
        meaning: "Low Oil Level"
  },
  {
        abbreviation: "LOM, OM",
        meaning: "Localizer Outer Marker"
  },
  {
        abbreviation: "LONG",
        meaning: "Longitude"
  },
  {
        abbreviation: "LONGL",
        meaning: "Longitudinal"
  },
  {
        abbreviation: "LONGN",
        meaning: "Longeron"
  },
  {
        abbreviation: "LOP",
        meaning: "Low Oil Pressure"
  },
  {
        abbreviation: "LOPA",
        meaning: "Layout of Passenger Accommodations"
  },
  {
        abbreviation: "LORA",
        meaning: "Load Reference Acquisition"
  },
  {
        abbreviation: "LORAN",
        meaning: "Long-Range Navigation"
  },
  {
        abbreviation: "LOS",
        meaning: "Lavatory Occupied Sign"
  },
  {
        abbreviation: "LOX",
        meaning: "Liquid Oxygen"
  },
  {
        abbreviation: "LP",
        meaning: "Low Pressure"
  },
  {
        abbreviation: "LPA",
        meaning: "Left Protocol Adapter"
  },
  {
        abbreviation: "LPC",
        meaning: "Low Pressure Compressor"
  },
  {
        abbreviation: "LPCNG",
        meaning: "LPC New Generation"
  },
  {
        abbreviation: "LPM",
        meaning: "Local Power Management"
  },
  {
        abbreviation: "LPM",
        meaning: "Liter Per Minute"
  },
  {
        abbreviation: "LPMF",
        meaning: "Local Power Management Function"
  },
  {
        abbreviation: "LPT",
        meaning: "Low Pressure Turbine"
  },
  {
        abbreviation: "LPTACC",
        meaning: "Low Pressure Turbine Active Clearance Control"
  },
  {
        abbreviation: "LPTC",
        meaning: "Low Pressure Turbine Clearance"
  },
  {
        abbreviation: "LPTCC",
        meaning: "Low Pressure Turbine Case Cooling"
  },
  {
        abbreviation: "LPTCC",
        meaning: "Low Pressure Turbine Clearance Control"
  },
  {
        abbreviation: "LPTCC",
        meaning: "Low Pressure Turbine (Active) Clearance Control"
  },
  {
        abbreviation: "LPTCV",
        meaning: "Low-Pressure Turbine Cooling Valve"
  },
  {
        abbreviation: "LPTR",
        meaning: "Low Pressure Turbine Rotor"
  },
  {
        abbreviation: "LPU",
        meaning: "Lightning Protection Unit"
  },
  {
        abbreviation: "LPV",
        meaning: "Localizer Performance with Vertical Guidance"
  },
  {
        abbreviation: "LR",
        meaning: "Limited Recline"
  },
  {
        abbreviation: "LR",
        meaning: "Left Rear"
  },
  {
        abbreviation: "LRC",
        meaning: "Long Range Cruise"
  },
  {
        abbreviation: "LRE",
        meaning: "List of Radioactive and Hazardous Elements"
  },
  {
        abbreviation: "LRI",
        meaning: "Line Replaceable Item"
  },
  {
        abbreviation: "LRM",
        meaning: "Line Replaceable Module"
  },
  {
        abbreviation: "LROPS",
        meaning: "Long Range Operations"
  },
  {
        abbreviation: "LRRA",
        meaning: "Low Range Radio Altimeter"
  },
  {
        abbreviation: "LRU",
        meaning: "Line Replaceable Unit"
  },
  {
        abbreviation: "LRU",
        meaning: "Line Replaceable Units"
  },
  {
        abbreviation: "LS",
        meaning: "Landing System"
  },
  {
        abbreviation: "LS",
        meaning: "Loudspeaker"
  },
  {
        abbreviation: "LS",
        meaning: "Low Speed"
  },
  {
        abbreviation: "LS",
        meaning: "Line Select"
  },
  {
        abbreviation: "LSAP",
        meaning: "Loadable Software Aircraft Parts"
  },
  {
        abbreviation: "LSB",
        meaning: "Least Significant Bit"
  },
  {
        abbreviation: "LSB",
        meaning: "Lower Sideband"
  },
  {
        abbreviation: "LSB",
        meaning: "Lower Side Band"
  },
  {
        abbreviation: "LSBM",
        meaning: "Load Secure Batch Media"
  },
  {
        abbreviation: "LSC",
        meaning: "Load Signature Certificate"
  },
  {
        abbreviation: "LSC",
        meaning: "Least Significant Character"
  },
  {
        abbreviation: "LSD",
        meaning: "Load Sensing Device"
  },
  {
        abbreviation: "LSDS",
        meaning: "Load Sensing Drive Strut"
  },
  {
        abbreviation: "LSI",
        meaning: "Large Scale Integrated/Integration/Integrator"
  },
  {
        abbreviation: "LSI",
        meaning: "Loads Stress Interface"
  },
  {
        abbreviation: "LSI",
        meaning: "Load Select Indicator"
  },
  {
        abbreviation: "LSI",
        meaning: "Large Scale Integration"
  },
  {
        abbreviation: "LSR",
        meaning: "Load Shedding Relay"
  },
  {
        abbreviation: "LSU",
        meaning: "Lavatory Service Unit"
  },
  {
        abbreviation: "LT",
        meaning: "Light"
  },
  {
        abbreviation: "LT(S)",
        meaning: "Light(s)"
  },
  {
        abbreviation: "LTA",
        meaning: "Left Top Aft"
  },
  {
        abbreviation: "LTD",
        meaning: "Limited"
  },
  {
        abbreviation: "LTD PLT",
        meaning: "Lighted Plate"
  },
  {
        abbreviation: "LTE",
        meaning: "Long Term Evolution"
  },
  {
        abbreviation: "LTF",
        meaning: "Left Top Forward"
  },
  {
        abbreviation: "LTG",
        meaning: "Lighting"
  },
  {
        abbreviation: "LTM",
        meaning: "Livestock Transportation Manual"
  },
  {
        abbreviation: "LTP",
        meaning: "Left Top Plug"
  },
  {
        abbreviation: "LV",
        meaning: "Low Voltage"
  },
  {
        abbreviation: "LVDC",
        meaning: "Low Voltage Direct Current"
  },
  {
        abbreviation: "LVDS",
        meaning: "Low Voltage Differential Signaling"
  },
  {
        abbreviation: "LVDT",
        meaning: "Linear Variable Differential Transducer"
  },
  {
        abbreviation: "LVL",
        meaning: "Level"
  },
  {
        abbreviation: "LVL/CH",
        meaning: "Level Change"
  },
  {
        abbreviation: "LVO",
        meaning: "Low Visibility Operations"
  },
  {
        abbreviation: "LVP",
        meaning: "Low Visibility Procedure"
  },
  {
        abbreviation: "LVR",
        meaning: "Lever"
  },
  {
        abbreviation: "LVT",
        meaning: "Linear Voltage Transducer"
  },
  {
        abbreviation: "LW",
        meaning: "Left Wing"
  },
  {
        abbreviation: "LW",
        meaning: "Landing Weight"
  },
  {
        abbreviation: "LW",
        meaning: "Left Wing , Landing Weight"
  },
  {
        abbreviation: "LWR",
        meaning: "Lower"
  },
  {
        abbreviation: "LWSA",
        meaning: "Lavatory Water Supply Assy"
  },
  {
        abbreviation: "M",
        meaning: "Mach, Magenta, Meter"
  },
  {
        abbreviation: "M/G",
        meaning: "Motor/Generator"
  },
  {
        abbreviation: "M/L",
        meaning: "Mood Lighting"
  },
  {
        abbreviation: "MA",
        meaning: "Missed Approach"
  },
  {
        abbreviation: "MAA",
        meaning: "Maximum Authorized Altitude"
  },
  {
        abbreviation: "MAC",
        meaning: "Mean Aerodynamic Chord"
  },
  {
        abbreviation: "MACT",
        meaning: "Module Application Configuration Table"
  },
  {
        abbreviation: "MAF",
        meaning: "Maintenance Access Function"
  },
  {
        abbreviation: "MAG",
        meaning: "Magnetic"
  },
  {
        abbreviation: "MAG DEC",
        meaning: "Magnetic Declination"
  },
  {
        abbreviation: "MAG VAR",
        meaning: "Magnetic Variation"
  },
  {
        abbreviation: "MAIN MUX",
        meaning: "Main Multiplexer"
  },
  {
        abbreviation: "MAINT",
        meaning: "Maintenance"
  },
  {
        abbreviation: "MALF",
        meaning: "Malfunction"
  },
  {
        abbreviation: "MAN",
        meaning: "Manual"
  },
  {
        abbreviation: "MAPT, MAP",
        meaning: "Missed Approach Point"
  },
  {
        abbreviation: "MAS",
        meaning: "Modulated Air System"
  },
  {
        abbreviation: "MAT",
        meaning: "Multi-purpose Access Terminal"
  },
  {
        abbreviation: "MAX",
        meaning: "Maximum"
  },
  {
        abbreviation: "MAX CLB",
        meaning: "Maximum Climb"
  },
  {
        abbreviation: "MAX DES",
        meaning: "Maximum Descent"
  },
  {
        abbreviation: "MAX END",
        meaning: "Maximum Endurance"
  },
  {
        abbreviation: "MAX PWR",
        meaning: "Max Power"
  },
  {
        abbreviation: "MB",
        meaning: "Millibars"
  },
  {
        abbreviation: "MB",
        meaning: "Marker Beacon"
  },
  {
        abbreviation: "MBN",
        meaning: "Metallic Bonding Network"
  },
  {
        abbreviation: "MCA",
        meaning: "Major Component Assembly"
  },
  {
        abbreviation: "MCA",
        meaning: "Maintenance Central Access"
  },
  {
        abbreviation: "MCA",
        meaning: "Minimum Crossing Altitude"
  },
  {
        abbreviation: "MCC",
        meaning: "Maintenance Control Center"
  },
  {
        abbreviation: "MCCT",
        meaning: "Module Common Configuration Table"
  },
  {
        abbreviation: "MCD",
        meaning: "Movable Class Divider"
  },
  {
        abbreviation: "MCD",
        meaning: "Magnetic Chip Detector"
  },
  {
        abbreviation: "MCDL",
        meaning: "Master Configuration Deviation List"
  },
  {
        abbreviation: "MCDP",
        meaning: "Maintenance Control and Display Panel"
  },
  {
        abbreviation: "MCDU",
        meaning: "Multipurpose Control & Display Unit"
  },
  {
        abbreviation: "MCDU",
        meaning: "Main Control Data Unit"
  },
  {
        abbreviation: "MCDU",
        meaning: "Multipurpose Control and Display Unit"
  },
  {
        abbreviation: "MCE",
        meaning: "Motor Control Electronic"
  },
  {
        abbreviation: "MCL",
        meaning: "Maximum Climb"
  },
  {
        abbreviation: "mCLEDU",
        meaning: "mini Cabin LED Unit"
  },
  {
        abbreviation: "MCP",
        meaning: "Master Control Panel"
  },
  {
        abbreviation: "MCP",
        meaning: "Mode Control Panel"
  },
  {
        abbreviation: "MCPU",
        meaning: "Motor Control and Protection Unit"
  },
  {
        abbreviation: "MCSU",
        meaning: "Mechanical Crash Sensor Unit"
  },
  {
        abbreviation: "MCT",
        meaning: "Maximum Continuous Thrust"
  },
  {
        abbreviation: "MCTI",
        meaning: "Manufacturing Critical Item"
  },
  {
        abbreviation: "MCU",
        meaning: "Master Control Unit"
  },
  {
        abbreviation: "MCU",
        meaning: "Modular Concept Unit"
  },
  {
        abbreviation: "MCU",
        meaning: "Motor Control Unit"
  },
  {
        abbreviation: "MCU",
        meaning: "Module Case Unit (Standard Arinc)"
  },
  {
        abbreviation: "MCUR",
        meaning: "Mean Cycle Between Unscheduled Removals"
  },
  {
        abbreviation: "MD",
        meaning: "Main Deck"
  },
  {
        abbreviation: "MDA",
        meaning: "Minimum Descent Altitude"
  },
  {
        abbreviation: "MDC",
        meaning: "Massive Data Capitalization"
  },
  {
        abbreviation: "MDCC",
        meaning: "Main Deck Cargo Compartment"
  },
  {
        abbreviation: "MDCCU",
        meaning: "Massive Data Capitalization Control Unit"
  },
  {
        abbreviation: "MDCD",
        meaning: "Main Deck Cargo Door"
  },
  {
        abbreviation: "MDCLC",
        meaning: "Massive Data Capitalization Landscape Camera"
  },
  {
        abbreviation: "MDCLS",
        meaning: "Main Deck Cargo Loading System"
  },
  {
        abbreviation: "MDDU",
        meaning: "Multipurpose Disk Drive Unit"
  },
  {
        abbreviation: "MDH",
        meaning: "Minimum Descent Height"
  },
  {
        abbreviation: "MDH",
        meaning: "Minimum Decision Height"
  },
  {
        abbreviation: "MDL",
        meaning: "Module"
  },
  {
        abbreviation: "MDR",
        meaning: "Multiregional DBS (Digital Broadcast System) Receiver"
  },
  {
        abbreviation: "MDU",
        meaning: "Manual Drive Unit"
  },
  {
        abbreviation: "MEA",
        meaning: "Minimum En Route IRR Altitude"
  },
  {
        abbreviation: "MEAS",
        meaning: "Measurement"
  },
  {
        abbreviation: "MEC",
        meaning: "Main Engine Control"
  },
  {
        abbreviation: "MEC",
        meaning: "Main Equipment Center"
  },
  {
        abbreviation: "MECH",
        meaning: "Mechanic"
  },
  {
        abbreviation: "MECH",
        meaning: "Mechanical"
  },
  {
        abbreviation: "MECH",
        meaning: "Mechanism"
  },
  {
        abbreviation: "MED",
        meaning: "Medium"
  },
  {
        abbreviation: "MEK",
        meaning: "Methyl-Ethyl-Ketone"
  },
  {
        abbreviation: "MEL",
        meaning: "Minimum Equipment List"
  },
  {
        abbreviation: "MEO",
        meaning: "Middle Earth Orbit"
  },
  {
        abbreviation: "MEP",
        meaning: "Main Executive Program"
  },
  {
        abbreviation: "mEPSU",
        meaning: "mini Emergency Power Supply Unit"
  },
  {
        abbreviation: "MES",
        meaning: "Main Engine Start"
  },
  {
        abbreviation: "MET",
        meaning: "Meteorological"
  },
  {
        abbreviation: "METO",
        meaning: "Maximum Except Takeoff Power"
  },
  {
        abbreviation: "MEW",
        meaning: "Manufacturer's Empty Weight"
  },
  {
        abbreviation: "MEW",
        meaning: "Manufacturers Empty Weight"
  },
  {
        abbreviation: "MFA",
        meaning: "Memorized Fault Annunciator"
  },
  {
        abbreviation: "MFC",
        meaning: "Multifunction Computer"
  },
  {
        abbreviation: "MFD",
        meaning: "MultiFunction Display"
  },
  {
        abbreviation: "MFG",
        meaning: "Manufacturing"
  },
  {
        abbreviation: "MFP",
        meaning: "Maintenance Facility Planning"
  },
  {
        abbreviation: "MFP",
        meaning: "MultiFunction Probe"
  },
  {
        abbreviation: "MFR",
        meaning: "Manufacturer"
  },
  {
        abbreviation: "MFRL",
        meaning: "Multifunctional Runway Light"
  },
  {
        abbreviation: "MFS",
        meaning: "MultiFunction Sensor"
  },
  {
        abbreviation: "MGB",
        meaning: "Main Gear Box"
  },
  {
        abbreviation: "MGMT",
        meaning: "Management"
  },
  {
        abbreviation: "MGY",
        meaning: "Master Geometry"
  },
  {
        abbreviation: "MHA",
        meaning: "Minimum Holding Altitude"
  },
  {
        abbreviation: "MHE",
        meaning: "Magnetic Heading East"
  },
  {
        abbreviation: "MHM",
        meaning: "Maintenance HMI Manager"
  },
  {
        abbreviation: "MHN",
        meaning: "Magnetic Heading North"
  },
  {
        abbreviation: "MHS",
        meaning: "Magnetic Heading South"
  },
  {
        abbreviation: "MHW",
        meaning: "Magnetic Heading West"
  },
  {
        abbreviation: "mHz",
        meaning: "Megahertz"
  },
  {
        abbreviation: "MI",
        meaning: "Magnetic Indicator"
  },
  {
        abbreviation: "MI",
        meaning: "Miles"
  },
  {
        abbreviation: "MIA",
        meaning: "Minimum IFR Altitudes"
  },
  {
        abbreviation: "MIB",
        meaning: "Management Information Base"
  },
  {
        abbreviation: "MIC",
        meaning: "Microphone"
  },
  {
        abbreviation: "MICBAC",
        meaning: "Micro-System Bus Access Channel"
  },
  {
        abbreviation: "MID",
        meaning: "Middle"
  },
  {
        abbreviation: "MID",
        meaning: "Modification Information Document"
  },
  {
        abbreviation: "MIDU",
        meaning: "Multi-Input Interactive Display Unit"
  },
  {
        abbreviation: "MIG",
        meaning: "Metal Inert-Gas"
  },
  {
        abbreviation: "MILA",
        meaning: "Mini Light Adapter"
  },
  {
        abbreviation: "MILSPEC",
        meaning: "Military Specifications"
  },
  {
        abbreviation: "MIN",
        meaning: "Minimum"
  },
  {
        abbreviation: "MIP",
        meaning: "Master Interphone Panel"
  },
  {
        abbreviation: "MIS",
        meaning: "Meteorological Impact Statement"
  },
  {
        abbreviation: "MISC",
        meaning: "Miscellaneous"
  },
  {
        abbreviation: "MKR",
        meaning: "Marker (radio) Beacon"
  },
  {
        abbreviation: "MKR",
        meaning: "Marker"
  },
  {
        abbreviation: "MLA",
        meaning: "Maneuver Load Alleviation"
  },
  {
        abbreviation: "MLAP",
        meaning: "Maintenance Laptop"
  },
  {
        abbreviation: "MLB",
        meaning: "Maintenance LogBook"
  },
  {
        abbreviation: "MLC",
        meaning: "Mood Lighting Controller"
  },
  {
        abbreviation: "MLFAP",
        meaning: "Mood Lighting Flight Attendant Panel"
  },
  {
        abbreviation: "MLG",
        meaning: "Main Landing Gear"
  },
  {
        abbreviation: "MLGB",
        meaning: "Main Landing Gear Bay"
  },
  {
        abbreviation: "MLI",
        meaning: "Magnetic Level Indicator"
  },
  {
        abbreviation: "MLIH",
        meaning: "Magnetic Level Indicator Housing"
  },
  {
        abbreviation: "MLS",
        meaning: "Microwave Landing System"
  },
  {
        abbreviation: "MLW",
        meaning: "Maximum Landing Weight"
  },
  {
        abbreviation: "MM",
        meaning: "Middle Marker"
  },
  {
        abbreviation: "MM",
        meaning: "Memory Module"
  },
  {
        abbreviation: "MM",
        meaning: "Maintenance Manual"
  },
  {
        abbreviation: "MMEL",
        meaning: "Master Minimum Equipment List"
  },
  {
        abbreviation: "MMF",
        meaning: "Magnetomotive Force"
  },
  {
        abbreviation: "MMI",
        meaning: "Manual Magnetic Indicator"
  },
  {
        abbreviation: "MMO",
        meaning: "Maximum Operating Speed In Mach Number"
  },
  {
        abbreviation: "MMR",
        meaning: "Multi-Mode Receiver"
  },
  {
        abbreviation: "MMR",
        meaning: "Minimum Refreshment Rate"
  },
  {
        abbreviation: "MN",
        meaning: "Minute"
  },
  {
        abbreviation: "MNFOLD",
        meaning: "Manifold"
  },
  {
        abbreviation: "MOCA",
        meaning: "Minimum Obstruction Clearance Altitude"
  },
  {
        abbreviation: "MOD",
        meaning: "Modification"
  },
  {
        abbreviation: "MOD",
        meaning: "Module"
  },
  {
        abbreviation: "Modem",
        meaning: "Modulator-Demodulator"
  },
  {
        abbreviation: "MODLTR",
        meaning: "Modulator"
  },
  {
        abbreviation: "Modman",
        meaning: "Modem/Manager"
  },
  {
        abbreviation: "MON",
        meaning: "Monitor"
  },
  {
        abbreviation: "MON",
        meaning: "Monitored"
  },
  {
        abbreviation: "MON",
        meaning: "Monitoring"
  },
  {
        abbreviation: "MONG",
        meaning: "Monitoring"
  },
  {
        abbreviation: "MONMT",
        meaning: "Monument"
  },
  {
        abbreviation: "MOR",
        meaning: "Modular Overceiling Rack"
  },
  {
        abbreviation: "MORA",
        meaning: "Minimum Off Route Altitude"
  },
  {
        abbreviation: "MORV",
        meaning: "Mixer Overpressure Relief Valve"
  },
  {
        abbreviation: "MOS",
        meaning: "Metal Oxyde Semiconductor"
  },
  {
        abbreviation: "MOS",
        meaning: "Metal Oxide Semiconductor"
  },
  {
        abbreviation: "MOSFET",
        meaning: "Metal Oxide Semiconductor Field Effect Transistor"
  },
  {
        abbreviation: "MOT",
        meaning: "Motor"
  },
  {
        abbreviation: "MOT",
        meaning: "Motorized"
  },
  {
        abbreviation: "MPaT",
        meaning: "Materials, Processes and Tests"
  },
  {
        abbreviation: "MPD",
        meaning: "Maintenance Planning Document"
  },
  {
        abbreviation: "MPDS",
        meaning: "Mobile Packet Data Service"
  },
  {
        abbreviation: "MPDS",
        meaning: "Maintenance Planning Data System"
  },
  {
        abbreviation: "MPFAP",
        meaning: "Multi Purpose Flight Attendant Panel"
  },
  {
        abbreviation: "MPH",
        meaning: "Miles Per Hour"
  },
  {
        abbreviation: "MPN",
        meaning: "Manufacturer Part Number"
  },
  {
        abbreviation: "MPU",
        meaning: "Modem Processor Unit"
  },
  {
        abbreviation: "MPV",
        meaning: "Manifold Pressure Valve"
  },
  {
        abbreviation: "MRA",
        meaning: "Minimum Reception Altitude"
  },
  {
        abbreviation: "MRB",
        meaning: "Maintenance Review Board"
  },
  {
        abbreviation: "MRBR",
        meaning: "Maintenance Review Board Report"
  },
  {
        abbreviation: "MRDS",
        meaning: "Maintenance and Recording Data System"
  },
  {
        abbreviation: "MRIU",
        meaning: "Main Rotating Interface Unit"
  },
  {
        abbreviation: "MRT",
        meaning: "Minimum Remaining Thickness"
  },
  {
        abbreviation: "MRW",
        meaning: "Maximum Ramp Weight"
  },
  {
        abbreviation: "MS",
        meaning: "Military Standard, Military Specification"
  },
  {
        abbreviation: "MSA",
        meaning: "Minimum Safe Altitude"
  },
  {
        abbreviation: "MSAW",
        meaning: "Minimum Safe Altitude Warning"
  },
  {
        abbreviation: "MSB",
        meaning: "Most Significant Bit"
  },
  {
        abbreviation: "MSD",
        meaning: "Mass Storage Device"
  },
  {
        abbreviation: "MSD",
        meaning: "Most Significant Digit"
  },
  {
        abbreviation: "MSDS",
        meaning: "Material Safety Data Sheet"
  },
  {
        abbreviation: "MSG",
        meaning: "Maintenance Steering Group"
  },
  {
        abbreviation: "MSG",
        meaning: "Message"
  },
  {
        abbreviation: "MSI",
        meaning: "Maintenance Significant Item"
  },
  {
        abbreviation: "MSI",
        meaning: "Medium-Scale Integration"
  },
  {
        abbreviation: "MSL",
        meaning: "Mean Sea Level"
  },
  {
        abbreviation: "MSL",
        meaning: "Maintenance System Load"
  },
  {
        abbreviation: "MSM",
        meaning: "Monitoring System Module"
  },
  {
        abbreviation: "MSN",
        meaning: "Manufacturer Serial Number"
  },
  {
        abbreviation: "MSN",
        meaning: "n\u00c4\u201a\u00c2\u00bamero de s\u00c4\u201a\u00c2\u00a9rie avionneur"
  },
  {
        abbreviation: "MSP",
        meaning: "Managed Service Provider"
  },
  {
        abbreviation: "M-SPD",
        meaning: "Manual Speed"
  },
  {
        abbreviation: "MSTR",
        meaning: "Master"
  },
  {
        abbreviation: "MSU",
        meaning: "Media Server Unit"
  },
  {
        abbreviation: "MSU",
        meaning: "Mode Selector Unit"
  },
  {
        abbreviation: "MSU",
        meaning: "Motor Switching Unit"
  },
  {
        abbreviation: "MSW",
        meaning: "Microswitch"
  },
  {
        abbreviation: "MTBD",
        meaning: "Mean Time Between Defects"
  },
  {
        abbreviation: "MTBF",
        meaning: "Mean Time Between Failures"
  },
  {
        abbreviation: "MTBR",
        meaning: "Mean Time Between Removals"
  },
  {
        abbreviation: "MTBUR",
        meaning: "Mean Time Between Unscheduled Removals"
  },
  {
        abbreviation: "MTC",
        meaning: "Modulated Turbine Cooling"
  },
  {
        abbreviation: "MTD",
        meaning: "Maintenance Training Device"
  },
  {
        abbreviation: "MTD",
        meaning: "Maximum Transmission Delay"
  },
  {
        abbreviation: "MTG",
        meaning: "Mounting"
  },
  {
        abbreviation: "MTG",
        meaning: "Miles To Go"
  },
  {
        abbreviation: "MTI",
        meaning: "Multi Tank Indicator"
  },
  {
        abbreviation: "MTI",
        meaning: "Moving Target Indicator"
  },
  {
        abbreviation: "MTO",
        meaning: "Maximum Take-Off"
  },
  {
        abbreviation: "MTOGW",
        meaning: "Maximum Takeoff Gross Weight"
  },
  {
        abbreviation: "MTOW",
        meaning: "Maximum Takeoff Weight"
  },
  {
        abbreviation: "MTP",
        meaning: "Maintenance and Test Panel"
  },
  {
        abbreviation: "MTR",
        meaning: "Manufacturing Tolerance Requirement"
  },
  {
        abbreviation: "MTR",
        meaning: "Military Training Routes"
  },
  {
        abbreviation: "MTTF",
        meaning: "Mean Time to Failure"
  },
  {
        abbreviation: "MTTR",
        meaning: "Mean Time to Repair"
  },
  {
        abbreviation: "MTTUR",
        meaning: "Mean Time to Unscheduled Removal"
  },
  {
        abbreviation: "MTW",
        meaning: "Maximum Taxi Weight"
  },
  {
        abbreviation: "MU",
        meaning: "Management Unit"
  },
  {
        abbreviation: "MU",
        meaning: "Management Unit, Microswitch Unit"
  },
  {
        abbreviation: "MUX",
        meaning: "Multiplex"
  },
  {
        abbreviation: "MUX",
        meaning: "Multiplexer"
  },
  {
        abbreviation: "MVA",
        meaning: "Minimum Vectoring Altitude"
  },
  {
        abbreviation: "MVDR",
        meaning: "Multiple VHF Data Radio"
  },
  {
        abbreviation: "MVT",
        meaning: "Movement"
  },
  {
        abbreviation: "MWLU",
        meaning: "Multidomain Wireless LAN Unit"
  },
  {
        abbreviation: "MXR",
        meaning: "Mixer"
  },
  {
        abbreviation: "MZFW",
        meaning: "Maximum Zero Fuel Weight"
  },
  {
        abbreviation: "N",
        meaning: "North"
  },
  {
        abbreviation: "N",
        meaning: "Normal, North"
  },
  {
        abbreviation: "N MOS",
        meaning: "Negative Metal Oxide Semiconductor"
  },
  {
        abbreviation: "N/A",
        meaning: "Not Applicable"
  },
  {
        abbreviation: "N/W",
        meaning: "Nose Wheel"
  },
  {
        abbreviation: "N/WS",
        meaning: "Nose Wheel Steering"
  },
  {
        abbreviation: "N1",
        meaning: "Engine Fan Speed"
  },
  {
        abbreviation: "N1",
        meaning: "Low Pressure Rotor Speed"
  },
  {
        abbreviation: "N1",
        meaning: "Low Pressure Rotor Rotational Speed"
  },
  {
        abbreviation: "N1, N2, N3",
        meaning: "Rotor Assembly Number"
  },
  {
        abbreviation: "N1.D",
        meaning: "N1 Descent"
  },
  {
        abbreviation: "N1.L",
        meaning: "N1 Latch"
  },
  {
        abbreviation: "N1ACT",
        meaning: "N1 Actual"
  },
  {
        abbreviation: "N1COM",
        meaning: "N1 Command"
  },
  {
        abbreviation: "N2",
        meaning: "High Pressure Rotor Speed"
  },
  {
        abbreviation: "N2",
        meaning: "Nitrogen"
  },
  {
        abbreviation: "N2",
        meaning: "High/Intermediate Pressure Compressor Rotational Speed"
  },
  {
        abbreviation: "N3",
        meaning: "(HP) Compressor Rotational Speed"
  },
  {
        abbreviation: "NAC",
        meaning: "Nacelle"
  },
  {
        abbreviation: "NAC",
        meaning: "Nacelle Air Cooling"
  },
  {
        abbreviation: "NADP",
        meaning: "Noise Abatement Departure Procedure"
  },
  {
        abbreviation: "NAI",
        meaning: "Nacelle Anti-Icing"
  },
  {
        abbreviation: "NAIADS",
        meaning: "New Air and Inertia Automatic Data Switching"
  },
  {
        abbreviation: "NAIF",
        meaning: "NSS ACR Instrumentation Function"
  },
  {
        abbreviation: "NAK",
        meaning: "Negative Acknowledge"
  },
  {
        abbreviation: "NAS",
        meaning: "Navy and Army Standard"
  },
  {
        abbreviation: "NAS",
        meaning: "National Airspace System (US)"
  },
  {
        abbreviation: "NAS",
        meaning: "National Aircraft Standards (US)"
  },
  {
        abbreviation: "NASA",
        meaning: "National Aeronautics and Space Administration"
  },
  {
        abbreviation: "NATS",
        meaning: "North American Telephone System"
  },
  {
        abbreviation: "NAV",
        meaning: "Navigation"
  },
  {
        abbreviation: "NAVAID",
        meaning: "Navigation Aid"
  },
  {
        abbreviation: "NAVAISA",
        meaning: "Navigational Aids (VOR/DME)"
  },
  {
        abbreviation: "NBCM",
        meaning: "Normal Brake Control Manifold"
  },
  {
        abbreviation: "NBD",
        meaning: "Network Block Device"
  },
  {
        abbreviation: "NBF",
        meaning: "Network BITE Function"
  },
  {
        abbreviation: "NBPT",
        meaning: "No Break Power Transfer"
  },
  {
        abbreviation: "NBSELV",
        meaning: "Normal Brake Selector Valve"
  },
  {
        abbreviation: "NC",
        meaning: "Normally Closed"
  },
  {
        abbreviation: "NCD",
        meaning: "No Computed Data"
  },
  {
        abbreviation: "NCR",
        meaning: "NSS Communication Router"
  },
  {
        abbreviation: "NCU",
        meaning: "NSS Control Unit"
  },
  {
        abbreviation: "NCU",
        meaning: "Network Control Unit"
  },
  {
        abbreviation: "NCV",
        meaning: "Nacelle Cooling Valve"
  },
  {
        abbreviation: "ND",
        meaning: "Navigation Display"
  },
  {
        abbreviation: "NDB",
        meaning: "Non-Directional Beacon"
  },
  {
        abbreviation: "NDB",
        meaning: "Non Direction Beacon"
  },
  {
        abbreviation: "NDM",
        meaning: "Noise Definition Manual"
  },
  {
        abbreviation: "NDT",
        meaning: "Non-Destructive Test"
  },
  {
        abbreviation: "NEA",
        meaning: "Nitrogen Enriched Air"
  },
  {
        abbreviation: "NEG",
        meaning: "Negative"
  },
  {
        abbreviation: "NEO",
        meaning: "New Engine Option"
  },
  {
        abbreviation: "NEOL",
        meaning: "Near End Of Life"
  },
  {
        abbreviation: "NEUT",
        meaning: "Neutral"
  },
  {
        abbreviation: "NFC",
        meaning: "Near Field Communication"
  },
  {
        abbreviation: "NFDC",
        meaning: "National Flight Data Center (US)"
  },
  {
        abbreviation: "NFDD",
        meaning: "National Flight Data Digest (US)"
  },
  {
        abbreviation: "NFMS",
        meaning: "Network File Management Service"
  },
  {
        abbreviation: "NFMS",
        meaning: "New Flight Management System"
  },
  {
        abbreviation: "NFSI",
        meaning: "Non-Functional Standard Item"
  },
  {
        abbreviation: "NFT",
        meaning: "Free Turbine Shaft Speed"
  },
  {
        abbreviation: "NGAC",
        meaning: "New Generation Air Chiller"
  },
  {
        abbreviation: "NGV",
        meaning: "Nozzle Guide Vane"
  },
  {
        abbreviation: "NH",
        meaning: "High Pressure Compressor Speed"
  },
  {
        abbreviation: "NHA",
        meaning: "Next Higher Assembly"
  },
  {
        abbreviation: "NH-NLI",
        meaning: "NH-NL Indicator"
  },
  {
        abbreviation: "NHT",
        meaning: "NH Transmitter"
  },
  {
        abbreviation: "NL",
        meaning: "Low Pressure Compressor Speed"
  },
  {
        abbreviation: "NLG",
        meaning: "Nose Landing Gear"
  },
  {
        abbreviation: "NLT",
        meaning: "NL Transmitter"
  },
  {
        abbreviation: "NM, NMI",
        meaning: "Nautical Mile"
  },
  {
        abbreviation: "NMI",
        meaning: "Non Maskable Interrupt"
  },
  {
        abbreviation: "NMS",
        meaning: "Noise Masking System"
  },
  {
        abbreviation: "NMU",
        meaning: "Noise Masking Unit"
  },
  {
        abbreviation: "NO",
        meaning: "Normal Operation"
  },
  {
        abbreviation: "NO",
        meaning: "Normally Open"
  },
  {
        abbreviation: "No.",
        meaning: "Number"
  },
  {
        abbreviation: "NORM",
        meaning: "Normal"
  },
  {
        abbreviation: "NOVOLRAM",
        meaning: "Non-volatile Random Access Memory"
  },
  {
        abbreviation: "NP",
        meaning: "Propeller Speed"
  },
  {
        abbreviation: "NP",
        meaning: "Power Turbine Speed"
  },
  {
        abbreviation: "NRW",
        meaning: "Net Recoverable Weight"
  },
  {
        abbreviation: "NS",
        meaning: "No Smoking"
  },
  {
        abbreviation: "NSA",
        meaning: "Norme Sud Aviation"
  },
  {
        abbreviation: "NSA",
        meaning: "Norme Sud-Aviation"
  },
  {
        abbreviation: "NSCM",
        meaning: "NATO Supply Code for Manufacturers"
  },
  {
        abbreviation: "NSDW",
        meaning: "Non Specific Design Work"
  },
  {
        abbreviation: "NSI",
        meaning: "Non Standard Item"
  },
  {
        abbreviation: "NSIU",
        meaning: "Nose Static Interface Unit"
  },
  {
        abbreviation: "NSM",
        meaning: "Network Server Module"
  },
  {
        abbreviation: "NSS",
        meaning: "Network Server System"
  },
  {
        abbreviation: "NTF",
        meaning: "Non-Textile Floor covering"
  },
  {
        abbreviation: "NTM",
        meaning: "Nondestructive Testing Manual"
  },
  {
        abbreviation: "NTSC",
        meaning: "National Television System Committee"
  },
  {
        abbreviation: "NTWK",
        meaning: "Network"
  },
  {
        abbreviation: "NUM",
        meaning: "Numerical"
  },
  {
        abbreviation: "NVM",
        meaning: "Non-Volatile Memory"
  },
  {
        abbreviation: "NVM",
        meaning: "Nonvolatile Memory"
  },
  {
        abbreviation: "NWS",
        meaning: "Nose Wheel Steering"
  },
  {
        abbreviation: "O",
        meaning: "Open"
  },
  {
        abbreviation: "O/P",
        meaning: "Output"
  },
  {
        abbreviation: "O2",
        meaning: "Oxygen"
  },
  {
        abbreviation: "OAMS",
        meaning: "Onboard Asynchronous Messaging Service"
  },
  {
        abbreviation: "OANC",
        meaning: "Onboard Airport Navigation Computer"
  },
  {
        abbreviation: "OANS",
        meaning: "Onboard Airport Navigation System"
  },
  {
        abbreviation: "OAT",
        meaning: "Outside Air Temperature"
  },
  {
        abbreviation: "OBCE",
        meaning: "On-Board Control Equipment"
  },
  {
        abbreviation: "OBCE-WW",
        meaning: "On-Board Control Equipment - WorldWide"
  },
  {
        abbreviation: "OBOGS",
        meaning: "On Board Oxygen Generation System"
  },
  {
        abbreviation: "OBRM",
        meaning: "On Board Replaceable Module"
  },
  {
        abbreviation: "OBRM",
        meaning: "On-Board Replaceable Memory"
  },
  {
        abbreviation: "OBS",
        meaning: "Omni Bearing Selector"
  },
  {
        abbreviation: "OBS",
        meaning: "Observer"
  },
  {
        abbreviation: "OC",
        meaning: "Oceanic Clearance"
  },
  {
        abbreviation: "OC",
        meaning: "Open Circuit"
  },
  {
        abbreviation: "OC",
        meaning: "Overcurrent"
  },
  {
        abbreviation: "OCCPD",
        meaning: "Occupied"
  },
  {
        abbreviation: "OCCPNT",
        meaning: "Occupant"
  },
  {
        abbreviation: "OCED",
        meaning: "Operator-Customized ECAM Database"
  },
  {
        abbreviation: "OCM",
        meaning: "Outflow Valve Control Module"
  },
  {
        abbreviation: "OCP",
        meaning: "Outside Control Panel"
  },
  {
        abbreviation: "OCSM",
        meaning: "Outflow Valve Control and Sensor Module"
  },
  {
        abbreviation: "OCU",
        meaning: "Outflow Valve Control Unit"
  },
  {
        abbreviation: "OD",
        meaning: "Outer Diameter"
  },
  {
        abbreviation: "OD",
        meaning: "Outside Diameter"
  },
  {
        abbreviation: "ODM",
        meaning: "On-Board Data Manager"
  },
  {
        abbreviation: "ODMS",
        meaning: "Oil Debris Monitoring System"
  },
  {
        abbreviation: "ODR",
        meaning: "Operator Differences Requirement"
  },
  {
        abbreviation: "ODR",
        meaning: "On-Demand Repository"
  },
  {
        abbreviation: "ODSM",
        meaning: "Open world Data Storage Module"
  },
  {
        abbreviation: "ODU",
        meaning: "Optical Display Unit"
  },
  {
        abbreviation: "OEA",
        meaning: "Oxygen Enriched Air"
  },
  {
        abbreviation: "OEB",
        meaning: "Operations Engineering Bulletin"
  },
  {
        abbreviation: "OEW",
        meaning: "Operational Empty Weight"
  },
  {
        abbreviation: "OEW",
        meaning: "Operating Empty Weight"
  },
  {
        abbreviation: "OF",
        meaning: "Overfrequency"
  },
  {
        abbreviation: "OFDM",
        meaning: "Onboard Flight Data Monitoring"
  },
  {
        abbreviation: "OFF/R",
        meaning: "Off Reset"
  },
  {
        abbreviation: "OFMV",
        meaning: "Oil Flow Management Valve"
  },
  {
        abbreviation: "OFP",
        meaning: "Operational Flight Program"
  },
  {
        abbreviation: "OFST",
        meaning: "Offset"
  },
  {
        abbreviation: "OFV",
        meaning: "Outflow Valve"
  },
  {
        abbreviation: "OFW",
        meaning: "Outer False Work"
  },
  {
        abbreviation: "OGV",
        meaning: "Outlet Guide Vane"
  },
  {
        abbreviation: "OH",
        meaning: "Opposite Hand"
  },
  {
        abbreviation: "OHDS",
        meaning: "OverHeat Detection System"
  },
  {
        abbreviation: "OHDSL",
        meaning: "OverHeat Detection System Light"
  },
  {
        abbreviation: "OHDU",
        meaning: "Overheat Detection Unit"
  },
  {
        abbreviation: "OHSC",
        meaning: "Overhead Stowage Compartment"
  },
  {
        abbreviation: "OHU",
        meaning: "Optical Head Unit"
  },
  {
        abbreviation: "OIS",
        meaning: "Onboard Information System"
  },
  {
        abbreviation: "OIT",
        meaning: "Oil Inlet Temperature"
  },
  {
        abbreviation: "OIT",
        meaning: "Onboard Information Terminal"
  },
  {
        abbreviation: "OK",
        meaning: "Correct"
  },
  {
        abbreviation: "OLMS",
        meaning: "Operational Loads Monitoring System"
  },
  {
        abbreviation: "OM",
        meaning: "Outer Marker"
  },
  {
        abbreviation: "OMS",
        meaning: "Onboard Maintenance System"
  },
  {
        abbreviation: "OMT",
        meaning: "Onboard Maintenance Terminal"
  },
  {
        abbreviation: "OMTS",
        meaning: "On-Board Mobile Telephony System"
  },
  {
        abbreviation: "OOOI",
        meaning: "Out of the gate, Off the ground, On the ground, Into the gate"
  },
  {
        abbreviation: "OOOI",
        meaning: "Out of Gate, Off The Ground, On The Ground In To The Gate (out-off-on-in)"
  },
  {
        abbreviation: "OOT",
        meaning: "Oil Outlet Temperature"
  },
  {
        abbreviation: "OP",
        meaning: "Operational"
  },
  {
        abbreviation: "OP",
        meaning: "Open"
  },
  {
        abbreviation: "OPER",
        meaning: "Operative/Operation/Operating"
  },
  {
        abbreviation: "OPM",
        meaning: "Optical Module"
  },
  {
        abbreviation: "OPMS",
        meaning: "Oleo Pressure Monitoring System"
  },
  {
        abbreviation: "OPNG",
        meaning: "Opening"
  },
  {
        abbreviation: "OPP",
        meaning: "Opposite"
  },
  {
        abbreviation: "OPR",
        meaning: "Operate"
  },
  {
        abbreviation: "OPRN",
        meaning: "Operation"
  },
  {
        abbreviation: "OPS",
        meaning: "Operations"
  },
  {
        abbreviation: "OPS",
        meaning: "Operational Program Software"
  },
  {
        abbreviation: "OPSOV",
        meaning: "Over-Pressure Shut Off Valve"
  },
  {
        abbreviation: "OPT",
        meaning: "Optimum"
  },
  {
        abbreviation: "OPT",
        meaning: "Optional"
  },
  {
        abbreviation: "OPT",
        meaning: "Option"
  },
  {
        abbreviation: "OPTS",
        meaning: "Oleo Pressure and Temperature Sensor"
  },
  {
        abbreviation: "OPU",
        meaning: "Overspeed Protection Unit"
  },
  {
        abbreviation: "OPU",
        meaning: "Overvoltage Protection Unit"
  },
  {
        abbreviation: "OPV",
        meaning: "Overpressure Valve"
  },
  {
        abbreviation: "OPV",
        meaning: "Over Pressure Valve"
  },
  {
        abbreviation: "OQAR",
        meaning: "Optical Quick Access Recorder"
  },
  {
        abbreviation: "ORT",
        meaning: "Owner Requirement Table"
  },
  {
        abbreviation: "ORVD",
        meaning: "Overpressure Relief Valve with Dump Function"
  },
  {
        abbreviation: "OS",
        meaning: "Operating System"
  },
  {
        abbreviation: "OSCM",
        meaning: "Oxygen System Control and Monitoring"
  },
  {
        abbreviation: "OSCU",
        meaning: "Oxygen System Control Unit"
  },
  {
        abbreviation: "OSF",
        meaning: "Open world Server Function"
  },
  {
        abbreviation: "OSFC",
        meaning: "Open world Server Function Cabinet"
  },
  {
        abbreviation: "OSG",
        meaning: "Overspeed Go Vernor"
  },
  {
        abbreviation: "OSP",
        meaning: "Open Software Platform"
  },
  {
        abbreviation: "OSS",
        meaning: "Out Side Service"
  },
  {
        abbreviation: "OTSSU",
        meaning: "Outboard Transmission Speed Sensor Unit"
  },
  {
        abbreviation: "OU",
        meaning: "Outlet Unit"
  },
  {
        abbreviation: "OUT",
        meaning: "Outlet"
  },
  {
        abbreviation: "OUTB",
        meaning: "Outbound"
  },
  {
        abbreviation: "OUTBD",
        meaning: "Outboard"
  },
  {
        abbreviation: "OUTFLW",
        meaning: "Outflow"
  },
  {
        abbreviation: "OUTR",
        meaning: "Outer"
  },
  {
        abbreviation: "OVBD",
        meaning: "Overboard"
  },
  {
        abbreviation: "OVFL",
        meaning: "Overflow"
  },
  {
        abbreviation: "OVHD",
        meaning: "Overhead"
  },
  {
        abbreviation: "OVHT",
        meaning: "Overheat"
  },
  {
        abbreviation: "OVLD",
        meaning: "Overload"
  },
  {
        abbreviation: "OVPRESS",
        meaning: "Overpressure"
  },
  {
        abbreviation: "OVRD",
        meaning: "Override"
  },
  {
        abbreviation: "OVSP",
        meaning: "Overspeed"
  },
  {
        abbreviation: "OVSTEER",
        meaning: "Oversteer"
  },
  {
        abbreviation: "OVTEMP",
        meaning: "Overtemperature"
  },
  {
        abbreviation: "OWD",
        meaning: "Open World Diode"
  },
  {
        abbreviation: "OWD",
        meaning: "Overwing Door"
  },
  {
        abbreviation: "OWS",
        meaning: "Open World Shell"
  },
  {
        abbreviation: "OXY",
        meaning: "Oxygen"
  },
  {
        abbreviation: "P",
        meaning: "Purple"
  },
  {
        abbreviation: "P&W",
        meaning: "Pratt & Whitney"
  },
  {
        abbreviation: "P/B",
        meaning: "Pushbutton"
  },
  {
        abbreviation: "P/B",
        meaning: "Push-Button"
  },
  {
        abbreviation: "P/BSW",
        meaning: "Pushbutton Switch"
  },
  {
        abbreviation: "P/C",
        meaning: "Printed Circuit"
  },
  {
        abbreviation: "P/C",
        meaning: "Premium Class"
  },
  {
        abbreviation: "P/H",
        meaning: "Right Hand"
  },
  {
        abbreviation: "P/N",
        meaning: "Part Number"
  },
  {
        abbreviation: "P/RST",
        meaning: "Push To Reset"
  },
  {
        abbreviation: "P/S",
        meaning: "Pitot/Static"
  },
  {
        abbreviation: "P/Y",
        meaning: "Premium Economy Class"
  },
  {
        abbreviation: "PA",
        meaning: "Passenger Address"
  },
  {
        abbreviation: "PA",
        meaning: "Public Address"
  },
  {
        abbreviation: "PADS",
        meaning: "Pneumatic Air Distribution System"
  },
  {
        abbreviation: "P-ALT",
        meaning: "Profile Altitude"
  },
  {
        abbreviation: "PAMB",
        meaning: "Ambient Air Pressure"
  },
  {
        abbreviation: "PARAM",
        meaning: "Parameter"
  },
  {
        abbreviation: "PARK",
        meaning: "Parking"
  },
  {
        abbreviation: "PAS",
        meaning: "Pitch Attitude Sensor"
  },
  {
        abbreviation: "PASS",
        meaning: "Passenger"
  },
  {
        abbreviation: "PATS",
        meaning: "Passenger Air-to-Ground Telephone System"
  },
  {
        abbreviation: "PAX",
        meaning: "Passenger"
  },
  {
        abbreviation: "PB",
        meaning: "Processing Board"
  },
  {
        abbreviation: "PBD",
        meaning: "Place Bearing/Distance"
  },
  {
        abbreviation: "PBE",
        meaning: "Protective Breathing Equipment"
  },
  {
        abbreviation: "PBIT",
        meaning: "Power-Up Built-in Test"
  },
  {
        abbreviation: "PBM",
        meaning: "Power Plant Build-up Manual"
  },
  {
        abbreviation: "PBSELV",
        meaning: "Park Brake Selector Valve"
  },
  {
        abbreviation: "PBSW",
        meaning: "Pushbutton Switch"
  },
  {
        abbreviation: "PC",
        meaning: "Pack Controller"
  },
  {
        abbreviation: "PC",
        meaning: "Personal Computer"
  },
  {
        abbreviation: "PCA",
        meaning: "Positive Control Area"
  },
  {
        abbreviation: "PCA",
        meaning: "Power Control Actuator"
  },
  {
        abbreviation: "PCB",
        meaning: "Printed Circuit Board"
  },
  {
        abbreviation: "PCD",
        meaning: "Protection and Commutation Device"
  },
  {
        abbreviation: "PCDM",
        meaning: "Primary Contactor Driver Module"
  },
  {
        abbreviation: "PCDS",
        meaning: "Primary Contactor Driver System"
  },
  {
        abbreviation: "PCE",
        meaning: "PreCooler Exchanger"
  },
  {
        abbreviation: "PCF",
        meaning: "Perforated Copper Foil"
  },
  {
        abbreviation: "P-CLB",
        meaning: "Profile Climb"
  },
  {
        abbreviation: "PCM",
        meaning: "Power Conditioning Module"
  },
  {
        abbreviation: "PCM",
        meaning: "Pulse Code Modulation"
  },
  {
        abbreviation: "PCMCIA",
        meaning: "Personal Computer Memory Card International Association"
  },
  {
        abbreviation: "PCMS",
        meaning: "Propulsion Control and Monitoring System"
  },
  {
        abbreviation: "PCOS",
        meaning: "Power Cowl Opening System"
  },
  {
        abbreviation: "PCPU",
        meaning: "Primary COS Power Unit"
  },
  {
        abbreviation: "PCS",
        meaning: "Propulsion Control System"
  },
  {
        abbreviation: "PCT",
        meaning: "Probe Compensator Temperature"
  },
  {
        abbreviation: "PCTI",
        meaning: "Performance Critical Item"
  },
  {
        abbreviation: "PCU",
        meaning: "Passenger Control Unit"
  },
  {
        abbreviation: "PCU",
        meaning: "Power Control Unit"
  },
  {
        abbreviation: "PCU",
        meaning: "Power Controller Unit"
  },
  {
        abbreviation: "PCU",
        meaning: "Power Control Unit, Passenger Control Unit, Propeller Control Unit"
  },
  {
        abbreviation: "PD",
        meaning: "Principle Diagram"
  },
  {
        abbreviation: "PD",
        meaning: "Potential Difference"
  },
  {
        abbreviation: "PDB",
        meaning: "Performance Database"
  },
  {
        abbreviation: "PDCS",
        meaning: "Power Distribution Control System"
  },
  {
        abbreviation: "PDES",
        meaning: "Profile Descent"
  },
  {
        abbreviation: "PDFU",
        meaning: "Pedal Damping and Friction Unit"
  },
  {
        abbreviation: "PDI",
        meaning: "Power and Data Interface"
  },
  {
        abbreviation: "PDI",
        meaning: "Pictorial Deviation Indicator"
  },
  {
        abbreviation: "PDIU",
        meaning: "Propulsion Discrete Interface Unit"
  },
  {
        abbreviation: "PDL",
        meaning: "Portable Data Loader"
  },
  {
        abbreviation: "PDMC",
        meaning: "Power Distribution Maintenance Computer"
  },
  {
        abbreviation: "PDMI",
        meaning: "Power Distribution Maintenance Interface"
  },
  {
        abbreviation: "PDMIC",
        meaning: "Power Distribution Maintenance Interface Contactor"
  },
  {
        abbreviation: "PDMMF",
        meaning: "Power Distribution Monitoring and Maintenance Function"
  },
  {
        abbreviation: "PDO",
        meaning: "Power Door Opening"
  },
  {
        abbreviation: "PDOS",
        meaning: "Power Door Opening System"
  },
  {
        abbreviation: "PDT",
        meaning: "Probe Dual Temperature"
  },
  {
        abbreviation: "PDU",
        meaning: "Power Drive Unit"
  },
  {
        abbreviation: "PE",
        meaning: "HP Stage Air Pressure"
  },
  {
        abbreviation: "PED",
        meaning: "Portable Electronic Device"
  },
  {
        abbreviation: "PED",
        meaning: "Pedestal"
  },
  {
        abbreviation: "PEDMU",
        meaning: "Primary Electrical Distribution Management Unit"
  },
  {
        abbreviation: "PEF",
        meaning: "Pylon Extension Fairing"
  },
  {
        abbreviation: "PEPDC",
        meaning: "Primary Electrical Power Distribution Center"
  },
  {
        abbreviation: "PERF",
        meaning: "Performance"
  },
  {
        abbreviation: "PERM",
        meaning: "Permanent"
  },
  {
        abbreviation: "PERS",
        meaning: "Personal"
  },
  {
        abbreviation: "PES",
        meaning: "Passenger Entertainment System"
  },
  {
        abbreviation: "PES",
        meaning: "Pitch Enhancement System"
  },
  {
        abbreviation: "PESAR",
        meaning: "Passenger Entertainment System Audio Reproducer"
  },
  {
        abbreviation: "PESC",
        meaning: "PES Controller"
  },
  {
        abbreviation: "PESMMUX",
        meaning: "Passenger Entertainment System Main Mux"
  },
  {
        abbreviation: "PF",
        meaning: "Pilot Flying"
  },
  {
        abbreviation: "PF",
        meaning: "Power Factor"
  },
  {
        abbreviation: "PF3D",
        meaning: "Primary Full Format Flight Display"
  },
  {
        abbreviation: "PFA",
        meaning: "PERMIT FOR ALTERNATIVE"
  },
  {
        abbreviation: "PFC",
        meaning: "Primary Flight Control"
  },
  {
        abbreviation: "PFCS",
        meaning: "Primary Flight Control System"
  },
  {
        abbreviation: "PFD",
        meaning: "Primary Flight Display"
  },
  {
        abbreviation: "PFDB",
        meaning: "Power Floor Disconnect Box"
  },
  {
        abbreviation: "PFI",
        meaning: "Ready For Installation"
  },
  {
        abbreviation: "PFIS",
        meaning: "Passenger Flight Information System"
  },
  {
        abbreviation: "PFQ",
        meaning: "Preselected Fuel Quantity"
  },
  {
        abbreviation: "PFR",
        meaning: "Post Flight Report"
  },
  {
        abbreviation: "PFTU",
        meaning: "Pedal Feel and Trim Unit"
  },
  {
        abbreviation: "PH",
        meaning: "Phase"
  },
  {
        abbreviation: "pH",
        meaning: "Measure of Ability"
  },
  {
        abbreviation: "PHARS",
        meaning: "Pretensioning Head Arc Reduction System"
  },
  {
        abbreviation: "PHC",
        meaning: "Probe Heat Computer"
  },
  {
        abbreviation: "PHC",
        meaning: "Probes Heat Computer"
  },
  {
        abbreviation: "PHMU",
        meaning: "Power Health Monitoring Unit"
  },
  {
        abbreviation: "PHMU",
        meaning: "Prognostics and Health Management Unit"
  },
  {
        abbreviation: "PHX",
        meaning: "Primary Heat Exchanger"
  },
  {
        abbreviation: "PIBAL",
        meaning: "Pilot Balloon Observation"
  },
  {
        abbreviation: "PIESD",
        meaning: "Passenger Information and Entertainment Services Domain"
  },
  {
        abbreviation: "PIM",
        meaning: "Programming and Indication Module"
  },
  {
        abbreviation: "PIM",
        meaning: "Passive InterModulation"
  },
  {
        abbreviation: "PIMBIT",
        meaning: "Passive InterModulation Built-In Test"
  },
  {
        abbreviation: "PIMU",
        meaning: "Propulsion Interface Monitor Unit"
  },
  {
        abbreviation: "PIN PROG",
        meaning: "Pin Programming"
  },
  {
        abbreviation: "PIP",
        meaning: "Performance Improvement Package"
  },
  {
        abbreviation: "PIPC",
        meaning: "Power Plant Illustrated Parts Catalog"
  },
  {
        abbreviation: "PIREP",
        meaning: "Pilot Report"
  },
  {
        abbreviation: "PISA",
        meaning: "Passenger Interface and Supply Adapter"
  },
  {
        abbreviation: "PIU",
        meaning: "Passenger Information Unit"
  },
  {
        abbreviation: "PK",
        meaning: "Parker-Kalon"
  },
  {
        abbreviation: "PKI",
        meaning: "Public Key Infrastructure"
  },
  {
        abbreviation: "PKK",
        meaning: "Power Plant Kit"
  },
  {
        abbreviation: "PL",
        meaning: "Plate"
  },
  {
        abbreviation: "PL",
        meaning: "Power Lever"
  },
  {
        abbreviation: "PLA",
        meaning: "Power Light Adapter"
  },
  {
        abbreviation: "PLA",
        meaning: "Power Lever Angle"
  },
  {
        abbreviation: "PLC",
        meaning: "Powerline Communication"
  },
  {
        abbreviation: "PLCRD",
        meaning: "Placard"
  },
  {
        abbreviation: "PLD",
        meaning: "Please Lock Door"
  },
  {
        abbreviation: "PLI",
        meaning: "Pitch Limit Indicator"
  },
  {
        abbreviation: "PLSP",
        meaning: "Point Level Sensor Processor"
  },
  {
        abbreviation: "PLT",
        meaning: "Pilot"
  },
  {
        abbreviation: "PLU",
        meaning: "Power Locking Unit"
  },
  {
        abbreviation: "PM",
        meaning: "Phase Modulation"
  },
  {
        abbreviation: "PMA",
        meaning: "Permanent Magnet Alternator"
  },
  {
        abbreviation: "P-MACH",
        meaning: "Profile Mach"
  },
  {
        abbreviation: "PMAT",
        meaning: "Portable Multipurpose Access Terminal"
  },
  {
        abbreviation: "PMC",
        meaning: "Power Management Control"
  },
  {
        abbreviation: "PMC",
        meaning: "Power Management Controller"
  },
  {
        abbreviation: "PMDB",
        meaning: "Production Management Data Base"
  },
  {
        abbreviation: "PMG",
        meaning: "Permanent Magnet Generator"
  },
  {
        abbreviation: "PMM",
        meaning: "Personalization Memory Module"
  },
  {
        abbreviation: "PMP",
        meaning: "Pump"
  },
  {
        abbreviation: "PMR",
        meaning: "Performance Maintenance Recorder"
  },
  {
        abbreviation: "PMS",
        meaning: "Process and Material Specification"
  },
  {
        abbreviation: "PMS",
        meaning: "Propulsion Monitoring System"
  },
  {
        abbreviation: "PMU",
        meaning: "Power Management Unit"
  },
  {
        abbreviation: "PMUX",
        meaning: "Power Plant Multiplexer"
  },
  {
        abbreviation: "PMUX",
        meaning: "Propulsion Multiplexer"
  },
  {
        abbreviation: "PN",
        meaning: "Part Number"
  },
  {
        abbreviation: "PNEU",
        meaning: "Pneumatic"
  },
  {
        abbreviation: "PNF",
        meaning: "Pilot Non Flying"
  },
  {
        abbreviation: "PNL",
        meaning: "Panel"
  },
  {
        abbreviation: "PNR",
        meaning: "Part Number"
  },
  {
        abbreviation: "PNTL",
        meaning: "Pintle"
  },
  {
        abbreviation: "Po",
        meaning: "Ambient Static Pressure"
  },
  {
        abbreviation: "PO",
        meaning: "Outside Air Pressure"
  },
  {
        abbreviation: "POB",
        meaning: "Pressure-Off Brake"
  },
  {
        abbreviation: "POB",
        meaning: "Power-Off Brake"
  },
  {
        abbreviation: "POB",
        meaning: "Pressure Off Brake"
  },
  {
        abbreviation: "POD",
        meaning: "Push Open Device"
  },
  {
        abbreviation: "PODD",
        meaning: "Passenger Owned Devices Domain"
  },
  {
        abbreviation: "POM",
        meaning: "Point of Measurement"
  },
  {
        abbreviation: "POR",
        meaning: "Point of Regulation"
  },
  {
        abbreviation: "PORT",
        meaning: "Portable"
  },
  {
        abbreviation: "POS",
        meaning: "Position"
  },
  {
        abbreviation: "POT",
        meaning: "Potentiometer"
  },
  {
        abbreviation: "POXIP",
        meaning: "Passenger Oxygen Indication Panel"
  },
  {
        abbreviation: "PPE",
        meaning: "Personal Protective Equipment"
  },
  {
        abbreviation: "PPH",
        meaning: "Pounds Per Hour"
  },
  {
        abbreviation: "PPI",
        meaning: "Plan Position Indicator"
  },
  {
        abbreviation: "PPMS",
        meaning: "Pilot Physiological Monitoring System"
  },
  {
        abbreviation: "PPOS",
        meaning: "Present Position"
  },
  {
        abbreviation: "PPSI",
        meaning: "Pre-Processed Signal Input"
  },
  {
        abbreviation: "PPU",
        meaning: "Position Pick-off Unit"
  },
  {
        abbreviation: "PR",
        meaning: "Pressure"
  },
  {
        abbreviation: "PRAM",
        meaning: "Prerecorded Announcement and Music"
  },
  {
        abbreviation: "PRB",
        meaning: "Probe"
  },
  {
        abbreviation: "PREAMP",
        meaning: "Preamplifier"
  },
  {
        abbreviation: "PRECOOL",
        meaning: "Precooler"
  },
  {
        abbreviation: "PRED",
        meaning: "Prediction"
  },
  {
        abbreviation: "PRED",
        meaning: "Predictive"
  },
  {
        abbreviation: "PRED",
        meaning: "Predictions"
  },
  {
        abbreviation: "PRE-EMPT",
        meaning: "Pre-emptive"
  },
  {
        abbreviation: "PREREC",
        meaning: "Prerecorded"
  },
  {
        abbreviation: "PRES POS",
        meaning: "Present Position"
  },
  {
        abbreviation: "PRESEL",
        meaning: "Preselection"
  },
  {
        abbreviation: "PRESEL",
        meaning: "Preselector"
  },
  {
        abbreviation: "PRESS",
        meaning: "Pressure"
  },
  {
        abbreviation: "PRESS",
        meaning: "Pressurization"
  },
  {
        abbreviation: "PRESS",
        meaning: "Pressurize"
  },
  {
        abbreviation: "PREV",
        meaning: "Previous"
  },
  {
        abbreviation: "PRI",
        meaning: "Priority"
  },
  {
        abbreviation: "PRIM",
        meaning: "Primary"
  },
  {
        abbreviation: "PRIM",
        meaning: "PRIMary System"
  },
  {
        abbreviation: "PRIM",
        meaning: "PRIMary Computer"
  },
  {
        abbreviation: "PRM",
        meaning: "Person with Reduced Mobility"
  },
  {
        abbreviation: "PROC",
        meaning: "Procedure"
  },
  {
        abbreviation: "PROCSR",
        meaning: "Processor"
  },
  {
        abbreviation: "PROCT",
        meaning: "Procedure Turn"
  },
  {
        abbreviation: "PROF",
        meaning: "Profile"
  },
  {
        abbreviation: "PROG",
        meaning: "Program"
  },
  {
        abbreviation: "PROG",
        meaning: "Programming"
  },
  {
        abbreviation: "PROG",
        meaning: "Progress"
  },
  {
        abbreviation: "PROJ",
        meaning: "Projector"
  },
  {
        abbreviation: "PROM",
        meaning: "Programmable Read Only Memory"
  },
  {
        abbreviation: "PROT",
        meaning: "Protection"
  },
  {
        abbreviation: "PROX",
        meaning: "Proximity"
  },
  {
        abbreviation: "PRPHL",
        meaning: "Peripheral"
  },
  {
        abbreviation: "PRR",
        meaning: "Power Ready Relay"
  },
  {
        abbreviation: "PRR",
        meaning: "Production Revision Record"
  },
  {
        abbreviation: "PRSODV",
        meaning: "Pressure Raising Shut Off and Dump Valve"
  },
  {
        abbreviation: "PRSOV",
        meaning: "Pressure Regulating and Shut-Off Valve"
  },
  {
        abbreviation: "PRSOV",
        meaning: "Pressure Regulating and Shutoff Valve"
  },
  {
        abbreviation: "PRSRZG",
        meaning: "Pressurizing"
  },
  {
        abbreviation: "PRT",
        meaning: "Power Recovery Turbine"
  },
  {
        abbreviation: "PRV",
        meaning: "Pressure Regulating Valve"
  },
  {
        abbreviation: "PS12",
        meaning: "Fan Inlet Static Air Pressure"
  },
  {
        abbreviation: "PS13",
        meaning: "Fan Outlet Static Air Pressure"
  },
  {
        abbreviation: "PS3",
        meaning: "(HP) Compressor Discharge Static Air Pressure"
  },
  {
        abbreviation: "PSA",
        meaning: "Passenger Service Adapter"
  },
  {
        abbreviation: "PSB",
        meaning: "Power Supply Board"
  },
  {
        abbreviation: "PSCU",
        meaning: "Proximity Switch Control Unit"
  },
  {
        abbreviation: "PSD",
        meaning: "Protected Switch Device"
  },
  {
        abbreviation: "PSDU",
        meaning: "Power Supply Decoupling Unit"
  },
  {
        abbreviation: "PSEU",
        meaning: "Proximity Switch Electronic Unit"
  },
  {
        abbreviation: "PSI",
        meaning: "Pound per Square Inch (14,2 psi = 1 at)"
  },
  {
        abbreviation: "PSIA",
        meaning: "Pound per Square Inch Absolute"
  },
  {
        abbreviation: "PSIC",
        meaning: "Proximity Sensor Interface Card"
  },
  {
        abbreviation: "PSID",
        meaning: "Pound per Square Inch Differential"
  },
  {
        abbreviation: "PSIG",
        meaning: "Pound per Square Inch Gage"
  },
  {
        abbreviation: "PSIU",
        meaning: "Passenger Service Information Unit"
  },
  {
        abbreviation: "PSIU",
        meaning: "Bloc Passager"
  },
  {
        abbreviation: "PSM",
        meaning: "Pressure Sensor Module"
  },
  {
        abbreviation: "PSM",
        meaning: "Power Supply Module"
  },
  {
        abbreviation: "P-SPEED",
        meaning: "Profile Speed"
  },
  {
        abbreviation: "PSS",
        meaning: "Passenger Services System"
  },
  {
        abbreviation: "PSS",
        meaning: "Pressure Sub-System"
  },
  {
        abbreviation: "PSS",
        meaning: "Passenger Service System"
  },
  {
        abbreviation: "PSS",
        meaning: "Pressure Sub_System"
  },
  {
        abbreviation: "PSSTR",
        meaning: "Preliminary Supplier Selection Technical Review"
  },
  {
        abbreviation: "PSU",
        meaning: "Passenger Service Unit"
  },
  {
        abbreviation: "PSU",
        meaning: "Power Supply Unit"
  },
  {
        abbreviation: "PSUD",
        meaning: "Passenger Service Unit De Coder"
  },
  {
        abbreviation: "PT",
        meaning: "Point"
  },
  {
        abbreviation: "PT",
        meaning: "Total Air Pressure"
  },
  {
        abbreviation: "PT2",
        meaning: "Fan Inlet Total Air Pressure (Primary flow)"
  },
  {
        abbreviation: "PTC",
        meaning: "Positive Temperature Coefficient"
  },
  {
        abbreviation: "PTFE",
        meaning: "Polytetrafluoroethylene"
  },
  {
        abbreviation: "PTP",
        meaning: "Programming and Test Panel"
  },
  {
        abbreviation: "PTP",
        meaning: "Programming Test Panel"
  },
  {
        abbreviation: "PTR",
        meaning: "Push to Reset"
  },
  {
        abbreviation: "PTR",
        meaning: "Printer"
  },
  {
        abbreviation: "PTT",
        meaning: "Push-to-Test"
  },
  {
        abbreviation: "PTT",
        meaning: "Push-to-Talk"
  },
  {
        abbreviation: "PTT",
        meaning: "Push To Talk"
  },
  {
        abbreviation: "PTU",
        meaning: "Power Transfer Unit"
  },
  {
        abbreviation: "PU",
        meaning: "Parts Usage"
  },
  {
        abbreviation: "PU",
        meaning: "Pick Up"
  },
  {
        abbreviation: "PU",
        meaning: "Processing Unit"
  },
  {
        abbreviation: "PURL",
        meaning: "Power Unit Read Light"
  },
  {
        abbreviation: "PURS",
        meaning: "Purser"
  },
  {
        abbreviation: "PVC",
        meaning: "Polyvinyl Chloride"
  },
  {
        abbreviation: "PVI",
        meaning: "Paravisual Indicating"
  },
  {
        abbreviation: "PVIS",
        meaning: "Passenger Visual Information System"
  },
  {
        abbreviation: "PVP",
        meaning: "Port\u00c4\u201a\u00c2\u00a9e Visuelle de Piste"
  },
  {
        abbreviation: "PW",
        meaning: "Pratt & Whitney"
  },
  {
        abbreviation: "PW",
        meaning: "Pratt Whitney"
  },
  {
        abbreviation: "PWCU",
        meaning: "Potable Water Control Unit"
  },
  {
        abbreviation: "PWIP",
        meaning: "Potable Water Indication Panel"
  },
  {
        abbreviation: "PWM",
        meaning: "Pulse Width Modulator"
  },
  {
        abbreviation: "PWR",
        meaning: "Power"
  },
  {
        abbreviation: "PWS",
        meaning: "Potable Water System"
  },
  {
        abbreviation: "PWS",
        meaning: "Predictive WindShear"
  },
  {
        abbreviation: "PWSP",
        meaning: "Potable Water Service Panel"
  },
  {
        abbreviation: "PXE",
        meaning: "Pre-boot eXecution Environment"
  },
  {
        abbreviation: "PYL",
        meaning: "Pylon"
  },
  {
        abbreviation: "Q",
        meaning: "Pitch Rate"
  },
  {
        abbreviation: "QAD",
        meaning: "Quick-Attach-Detach"
  },
  {
        abbreviation: "QAD",
        meaning: "Quick Attach Detach"
  },
  {
        abbreviation: "QAM",
        meaning: "Quadrature Amplitude Modulation"
  },
  {
        abbreviation: "QAR",
        meaning: "Quick Access Recorder"
  },
  {
        abbreviation: "QAT",
        meaning: "Quadruple ARINC Transmitter"
  },
  {
        abbreviation: "QC",
        meaning: "Quality Control"
  },
  {
        abbreviation: "QCCU",
        meaning: "Quantity Calculation Control Unit"
  },
  {
        abbreviation: "QD",
        meaning: "Quick Donning"
  },
  {
        abbreviation: "QEC",
        meaning: "Quick Engine Change"
  },
  {
        abbreviation: "QECA",
        meaning: "Quick Engine Change Assembly"
  },
  {
        abbreviation: "QFE",
        meaning: "Local Station Pressure (Pression atmospherique au niveau du terrain)"
  },
  {
        abbreviation: "QFRP",
        meaning: "Quartz Fiber Reinforced Plastic"
  },
  {
        abbreviation: "QFU",
        meaning: "Cap Magnetique de la Piste"
  },
  {
        abbreviation: "QMU",
        meaning: "QAM Modulator Unit"
  },
  {
        abbreviation: "QNE",
        meaning: "Altitude Pression du Terrain (Ref. 1013)"
  },
  {
        abbreviation: "QNH",
        meaning: "Altimeter Setting (pression atmospherique au niveau de la mer)"
  },
  {
        abbreviation: "QTY",
        meaning: "Quantity"
  },
  {
        abbreviation: "R",
        meaning: "Red"
  },
  {
        abbreviation: "R",
        meaning: "Right"
  },
  {
        abbreviation: "R",
        meaning: "Right, Red"
  },
  {
        abbreviation: "R/C",
        meaning: "Rate of Climb"
  },
  {
        abbreviation: "R/D",
        meaning: "Rate of Descent"
  },
  {
        abbreviation: "R/I",
        meaning: "Radio/Inertial"
  },
  {
        abbreviation: "R/I",
        meaning: "Removal/Installation"
  },
  {
        abbreviation: "R/I",
        meaning: "Remove/ Install"
  },
  {
        abbreviation: "R/L",
        meaning: "Reading Light"
  },
  {
        abbreviation: "R/T",
        meaning: "Radio Transmit"
  },
  {
        abbreviation: "R-12",
        meaning: "Refrigerant"
  },
  {
        abbreviation: "RA",
        meaning: "Radio Altimeter"
  },
  {
        abbreviation: "RA",
        meaning: "Radio Altitude"
  },
  {
        abbreviation: "RA",
        meaning: "Radio Altitude Or Resolution Advisory"
  },
  {
        abbreviation: "RAAS",
        meaning: "Runway Awareness and Advisory System"
  },
  {
        abbreviation: "RABS",
        meaning: "Reverse Actuated Bleed System"
  },
  {
        abbreviation: "RAC",
        meaning: "Rotor Active Clearance"
  },
  {
        abbreviation: "RACA",
        meaning: "Ram Air Channel Actuator"
  },
  {
        abbreviation: "RACC",
        meaning: "Rotor Active Clearance Control"
  },
  {
        abbreviation: "RACSB",
        meaning: "Rotor Active Clearance Start Bleed"
  },
  {
        abbreviation: "RAD",
        meaning: "Radio"
  },
  {
        abbreviation: "RADIUS",
        meaning: "Remote Authentication Dial-In User Service"
  },
  {
        abbreviation: "RADVR",
        meaning: "Random Access Digital Video Reproducer"
  },
  {
        abbreviation: "RAI",
        meaning: "Ram Air Inlet"
  },
  {
        abbreviation: "RAIMS",
        meaning: "Radio and Audio Integrating Management System"
  },
  {
        abbreviation: "RALS",
        meaning: "Recording and Aircraft Locating System"
  },
  {
        abbreviation: "RAM",
        meaning: "Random Access Memory"
  },
  {
        abbreviation: "RAO",
        meaning: "Ram Air Outlet"
  },
  {
        abbreviation: "RAT",
        meaning: "Ram Air Turbine"
  },
  {
        abbreviation: "RATC",
        meaning: "Remote Air Traffic Control"
  },
  {
        abbreviation: "RATO",
        meaning: "Rocket Assisted Takeoff"
  },
  {
        abbreviation: "RAU",
        meaning: "Remote Acquisition Unit"
  },
  {
        abbreviation: "RB",
        meaning: "Resource BITE"
  },
  {
        abbreviation: "RBA",
        meaning: "Right Bottom Aft"
  },
  {
        abbreviation: "RBCU",
        meaning: "Remote Braking Control Unit"
  },
  {
        abbreviation: "RBF",
        meaning: "Right Bottom Forward"
  },
  {
        abbreviation: "RBP",
        meaning: "Right Bottom Plug"
  },
  {
        abbreviation: "RBPU",
        meaning: "Rudder and Brake Pedal Unit"
  },
  {
        abbreviation: "RBS",
        meaning: "Reverse Bleed System"
  },
  {
        abbreviation: "RBS",
        meaning: "Radar Beacon System"
  },
  {
        abbreviation: "RC",
        meaning: "Repetitive Chime"
  },
  {
        abbreviation: "RCC",
        meaning: "Remote Charge Converter"
  },
  {
        abbreviation: "RCC",
        meaning: "Remote Control Center"
  },
  {
        abbreviation: "RCCB",
        meaning: "Remote Control Circuit Breaker"
  },
  {
        abbreviation: "RCCBM",
        meaning: "RCCB Module"
  },
  {
        abbreviation: "RCD",
        meaning: "RAAS Configuration Database"
  },
  {
        abbreviation: "RCDR",
        meaning: "Recorder"
  },
  {
        abbreviation: "RCDR-ELT-AIM",
        meaning: "Recorder ELT Aircraft Identification Module"
  },
  {
        abbreviation: "RCF",
        meaning: "Right Center Fuselage"
  },
  {
        abbreviation: "RCL",
        meaning: "Recall"
  },
  {
        abbreviation: "RCM",
        meaning: "Ratio Changer Module"
  },
  {
        abbreviation: "RCP",
        meaning: "Reverse Current Protection"
  },
  {
        abbreviation: "RCP",
        meaning: "Remote Control Panel"
  },
  {
        abbreviation: "RCPT",
        meaning: "Receptacle"
  },
  {
        abbreviation: "RCPTN",
        meaning: "Reception"
  },
  {
        abbreviation: "RCS",
        meaning: "Radio Communication System"
  },
  {
        abbreviation: "RCT",
        meaning: "Rear Center Tank"
  },
  {
        abbreviation: "RCT",
        meaning: "React"
  },
  {
        abbreviation: "RCVR",
        meaning: "Receiver"
  },
  {
        abbreviation: "RCVY",
        meaning: "Recovery"
  },
  {
        abbreviation: "RCZ",
        meaning: "Rear Core Zone"
  },
  {
        abbreviation: "RD",
        meaning: "Retro Drawing"
  },
  {
        abbreviation: "RDC",
        meaning: "Remote Data Concentrator"
  },
  {
        abbreviation: "RDG",
        meaning: "Reading"
  },
  {
        abbreviation: "RDL",
        meaning: "Resident Data Loader"
  },
  {
        abbreviation: "RDMI",
        meaning: "Radio Distance Magnetic Indicator"
  },
  {
        abbreviation: "RDU",
        meaning: "Receiver Decoder Unit"
  },
  {
        abbreviation: "RDY",
        meaning: "Ready"
  },
  {
        abbreviation: "READG",
        meaning: "Reading"
  },
  {
        abbreviation: "REC",
        meaning: "Recalculate - Recommended"
  },
  {
        abbreviation: "REC",
        meaning: "Recorder"
  },
  {
        abbreviation: "RECIRC",
        meaning: "Recirculate"
  },
  {
        abbreviation: "RECIRC",
        meaning: "Recirculation"
  },
  {
        abbreviation: "RECONF",
        meaning: "Reconfiguration"
  },
  {
        abbreviation: "RECT",
        meaning: "Rectifier"
  },
  {
        abbreviation: "RED",
        meaning: "Reduction"
  },
  {
        abbreviation: "REDCR",
        meaning: "Reducer"
  },
  {
        abbreviation: "REDUND",
        meaning: "Redundancy"
  },
  {
        abbreviation: "REF",
        meaning: "Reference"
  },
  {
        abbreviation: "REFF",
        meaning: "Root End Fillet Fairing"
  },
  {
        abbreviation: "REFRIG",
        meaning: "Refrigeration"
  },
  {
        abbreviation: "REFUEL",
        meaning: "Refueling"
  },
  {
        abbreviation: "REG",
        meaning: "Regulator"
  },
  {
        abbreviation: "REGUL",
        meaning: "Regulation"
  },
  {
        abbreviation: "REIC",
        meaning: "Reconfigurable ETOPS Isolation Contactor"
  },
  {
        abbreviation: "REL",
        meaning: "Release"
  },
  {
        abbreviation: "REL",
        meaning: "Reluctance"
  },
  {
        abbreviation: "REL",
        meaning: "Relative"
  },
  {
        abbreviation: "REM",
        meaning: "Representative Model"
  },
  {
        abbreviation: "REP",
        meaning: "Repository"
  },
  {
        abbreviation: "REP",
        meaning: "Representative"
  },
  {
        abbreviation: "REQ",
        meaning: "Required"
  },
  {
        abbreviation: "RES",
        meaning: "Resistance"
  },
  {
        abbreviation: "RES",
        meaning: "Reserve"
  },
  {
        abbreviation: "RESANA",
        meaning: "Resultat d'Analyse"
  },
  {
        abbreviation: "RESANAM",
        meaning: "Resultat d'Analyse Voie Monitor"
  },
  {
        abbreviation: "RESAWAC",
        meaning: "Resultat d'Analyse Voie Command"
  },
  {
        abbreviation: "RET",
        meaning: "Retract"
  },
  {
        abbreviation: "RETRD",
        meaning: "Retracted"
  },
  {
        abbreviation: "REV",
        meaning: "Reverse"
  },
  {
        abbreviation: "REV",
        meaning: "Revise"
  },
  {
        abbreviation: "REV",
        meaning: "Revision"
  },
  {
        abbreviation: "REW",
        meaning: "Recoverable Empty Weight"
  },
  {
        abbreviation: "RF",
        meaning: "Radio Frequency"
  },
  {
        abbreviation: "RF",
        meaning: "Right Front"
  },
  {
        abbreviation: "RFC",
        meaning: "Request for Change"
  },
  {
        abbreviation: "RFC",
        meaning: "Request For Charge"
  },
  {
        abbreviation: "RFI",
        meaning: "Radio Frequency Interference"
  },
  {
        abbreviation: "RFI",
        meaning: "Request for Information"
  },
  {
        abbreviation: "RFID",
        meaning: "Radio Frequency Identification"
  },
  {
        abbreviation: "RFU",
        meaning: "Radio Frequency Unit"
  },
  {
        abbreviation: "RFW",
        meaning: "Request for Work"
  },
  {
        abbreviation: "RGAU",
        meaning: "Rate Gyro and Accelerometer Unit"
  },
  {
        abbreviation: "RGB",
        meaning: "Red Green Blue"
  },
  {
        abbreviation: "RGBW",
        meaning: "Red Green Blue White"
  },
  {
        abbreviation: "RGCU",
        meaning: "Right Generator Control Unit"
  },
  {
        abbreviation: "RGS",
        meaning: "Remote Ground Station"
  },
  {
        abbreviation: "RH",
        meaning: "Right Hand"
  },
  {
        abbreviation: "RHEO",
        meaning: "Rheostat"
  },
  {
        abbreviation: "RHI",
        meaning: "Range Height Indicator Scope"
  },
  {
        abbreviation: "RHL",
        meaning: "Rudder Hinge Line"
  },
  {
        abbreviation: "RIM",
        meaning: "Rear Interface Module"
  },
  {
        abbreviation: "RIU",
        meaning: "Recorder Interface Unit"
  },
  {
        abbreviation: "RIU",
        meaning: "Rotating Interface Unit"
  },
  {
        abbreviation: "RLA",
        meaning: "Reverser Lever Angle"
  },
  {
        abbreviation: "RLD",
        meaning: "Required Landing Distance"
  },
  {
        abbreviation: "RLF",
        meaning: "Relief"
  },
  {
        abbreviation: "R-LMF",
        meaning: "Right Side Local Maintenance Function"
  },
  {
        abbreviation: "RLY",
        meaning: "Relay"
  },
  {
        abbreviation: "R-MAX",
        meaning: "Retrofit Maintenance Exchanger"
  },
  {
        abbreviation: "RMF",
        meaning: "Rear Mount Fairing"
  },
  {
        abbreviation: "RMI",
        meaning: "Radio Magnetic Indicator"
  },
  {
        abbreviation: "RMO",
        meaning: "Retrofit Modification Offer"
  },
  {
        abbreviation: "RMP",
        meaning: "Radio and Audio Management Panel"
  },
  {
        abbreviation: "RMP",
        meaning: "Radio Management Panel"
  },
  {
        abbreviation: "RMR",
        meaning: "Removal Module Reprogrammer"
  },
  {
        abbreviation: "RMS",
        meaning: "Root Mean Square"
  },
  {
        abbreviation: "RMT",
        meaning: "Remote"
  },
  {
        abbreviation: "RMU",
        meaning: "Radio Management Unit"
  },
  {
        abbreviation: "RN",
        meaning: "Right Nose"
  },
  {
        abbreviation: "RNAV",
        meaning: "Area Navigation"
  },
  {
        abbreviation: "RNG",
        meaning: "Range"
  },
  {
        abbreviation: "RNLG",
        meaning: "Reinforced Nose Landing Gear"
  },
  {
        abbreviation: "RNP",
        meaning: "Required Navigation Performance"
  },
  {
        abbreviation: "ROLR",
        meaning: "Roller"
  },
  {
        abbreviation: "ROLS",
        meaning: "Remote Oil Level Sensor"
  },
  {
        abbreviation: "ROM",
        meaning: "Read Only Memory"
  },
  {
        abbreviation: "R-OMS",
        meaning: "Right Side Onboard Maintenance System"
  },
  {
        abbreviation: "ROP",
        meaning: "Runway Overrun Protection"
  },
  {
        abbreviation: "ROPS",
        meaning: "Runway Overrun Prevention System"
  },
  {
        abbreviation: "ROT",
        meaning: "Runway Occupancy Time"
  },
  {
        abbreviation: "ROT",
        meaning: "Rotation"
  },
  {
        abbreviation: "ROTG",
        meaning: "Rotating"
  },
  {
        abbreviation: "ROW",
        meaning: "Runway end Overrun Warning"
  },
  {
        abbreviation: "RPA",
        meaning: "Right Protocol Adapter"
  },
  {
        abbreviation: "RPCU",
        meaning: "Residual Pressure Control Unit"
  },
  {
        abbreviation: "RPDR",
        meaning: "Reproducer"
  },
  {
        abbreviation: "RPF",
        meaning: "Reporting Processing Function"
  },
  {
        abbreviation: "RPF",
        meaning: "Rear Pylon Fairing"
  },
  {
        abbreviation: "RPLNT",
        meaning: "Repellent"
  },
  {
        abbreviation: "RPM",
        meaning: "Revolutions Per Minute"
  },
  {
        abbreviation: "RPSA",
        meaning: "Rotating Pressure Sensing Assembly"
  },
  {
        abbreviation: "RPTG",
        meaning: "Repeating"
  },
  {
        abbreviation: "RPTG",
        meaning: "Reporting"
  },
  {
        abbreviation: "RPTR",
        meaning: "Repeater"
  },
  {
        abbreviation: "RQRD",
        meaning: "Required"
  },
  {
        abbreviation: "RR",
        meaning: "Rolls Royce"
  },
  {
        abbreviation: "RR",
        meaning: "Right Rear"
  },
  {
        abbreviation: "R-R",
        meaning: "Rolls - Royce"
  },
  {
        abbreviation: "RRU",
        meaning: "Recorder Release Unit"
  },
  {
        abbreviation: "RS",
        meaning: "Rear Spar"
  },
  {
        abbreviation: "RSC",
        meaning: "Removable Structural Component"
  },
  {
        abbreviation: "RSE",
        meaning: "Responsible System Engineering"
  },
  {
        abbreviation: "RSM",
        meaning: "Removable SIM Module"
  },
  {
        abbreviation: "RST",
        meaning: "Reset"
  },
  {
        abbreviation: "RSV",
        meaning: "Reserve"
  },
  {
        abbreviation: "RSV",
        meaning: "Seserves"
  },
  {
        abbreviation: "RSVR",
        meaning: "Reservoir"
  },
  {
        abbreviation: "RT",
        meaning: "Receiver Transmitter"
  },
  {
        abbreviation: "RTA",
        meaning: "Required Time of Arrival"
  },
  {
        abbreviation: "RTA",
        meaning: "Right Top Aft"
  },
  {
        abbreviation: "RTA",
        meaning: "Required Time Arrival"
  },
  {
        abbreviation: "RTBC",
        meaning: "Refuel and Towing on Battery Contactor"
  },
  {
        abbreviation: "RTC",
        meaning: "Return To Cabin"
  },
  {
        abbreviation: "RTD",
        meaning: "Resistant Temperature Detector"
  },
  {
        abbreviation: "RTE",
        meaning: "Route"
  },
  {
        abbreviation: "RTE DATA",
        meaning: "Route Data"
  },
  {
        abbreviation: "RTF",
        meaning: "Right Top Forward"
  },
  {
        abbreviation: "RTM",
        meaning: "Real Time Monitoring"
  },
  {
        abbreviation: "RTM",
        meaning: "Receiver/Transmitter Module"
  },
  {
        abbreviation: "RTN",
        meaning: "Return"
  },
  {
        abbreviation: "RTNC",
        meaning: "Refuel and Towing on Normal Contactor"
  },
  {
        abbreviation: "RTO",
        meaning: "Rejected TakeOff"
  },
  {
        abbreviation: "RTO",
        meaning: "Rejected Takeoff, Refused Take off"
  },
  {
        abbreviation: "RTOK",
        meaning: "Retest OK"
  },
  {
        abbreviation: "RTOLW",
        meaning: "Regulatory TakeOff and Landing Weight"
  },
  {
        abbreviation: "RTOW",
        meaning: "Regulatory TakeOff Weight"
  },
  {
        abbreviation: "RTP",
        meaning: "Right Top Plug"
  },
  {
        abbreviation: "RTR",
        meaning: "Router"
  },
  {
        abbreviation: "RTRY",
        meaning: "Rotary"
  },
  {
        abbreviation: "RTS",
        meaning: "Return to Seat"
  },
  {
        abbreviation: "RTS",
        meaning: "Request To Send"
  },
  {
        abbreviation: "RTT",
        meaning: "Return To Tank"
  },
  {
        abbreviation: "RTU",
        meaning: "Radar Transceiver Unit"
  },
  {
        abbreviation: "RTV",
        meaning: "Room Temperature Vulcanizing"
  },
  {
        abbreviation: "RU",
        meaning: "Restricted Use"
  },
  {
        abbreviation: "RUD",
        meaning: "Rudder"
  },
  {
        abbreviation: "RVCP",
        meaning: "Remote Video Control Panel"
  },
  {
        abbreviation: "RVDT",
        meaning: "Rotary Variable Differential Transducer"
  },
  {
        abbreviation: "RVDT",
        meaning: "Rotary Variable Differential Transformer/Transducer"
  },
  {
        abbreviation: "RVR",
        meaning: "Runway Visual Range"
  },
  {
        abbreviation: "RVSM",
        meaning: "Reduced Vertical Separation Minimum"
  },
  {
        abbreviation: "RVSR",
        meaning: "Reverser"
  },
  {
        abbreviation: "RVT",
        meaning: "Rotary Variable Transformer"
  },
  {
        abbreviation: "RW",
        meaning: "Right Wing"
  },
  {
        abbreviation: "RWDS",
        meaning: "Rearwards"
  },
  {
        abbreviation: "RWY",
        meaning: "Runway"
  },
  {
        abbreviation: "RWY",
        meaning: "Run Way"
  },
  {
        abbreviation: "RX",
        meaning: "Receive"
  },
  {
        abbreviation: "S",
        meaning: "Minimum Slat Retract Speed (EFIS)"
  },
  {
        abbreviation: "S",
        meaning: "South"
  },
  {
        abbreviation: "S/C",
        meaning: "Step Climb"
  },
  {
        abbreviation: "S/D",
        meaning: "Step Descent"
  },
  {
        abbreviation: "S/MECH",
        meaning: "Shortening Mechanism"
  },
  {
        abbreviation: "S/N",
        meaning: "Serial Number"
  },
  {
        abbreviation: "S/V",
        meaning: "Shop Visit"
  },
  {
        abbreviation: "S/W",
        meaning: "Software"
  },
  {
        abbreviation: "SA",
        meaning: "Stress Analysis"
  },
  {
        abbreviation: "SACL",
        meaning: "Stand Alone Content Loader"
  },
  {
        abbreviation: "SACU",
        meaning: "Stand Alone Compensator Unit"
  },
  {
        abbreviation: "SACU",
        meaning: "Semi-Automatic Control Unit"
  },
  {
        abbreviation: "SAD",
        meaning: "Stress Analysis Data"
  },
  {
        abbreviation: "SAE",
        meaning: "Society of Automotive Engineers"
  },
  {
        abbreviation: "SAF",
        meaning: "Safety"
  },
  {
        abbreviation: "SAF",
        meaning: "Sustainable Aviation Fuel"
  },
  {
        abbreviation: "SAGB",
        meaning: "Step Aside GearBox"
  },
  {
        abbreviation: "SAL",
        meaning: "System Address Label"
  },
  {
        abbreviation: "SALSA",
        meaning: "Spot Array Light Supply Adapter"
  },
  {
        abbreviation: "SAM",
        meaning: "Stress Analysis Manual"
  },
  {
        abbreviation: "SAM",
        meaning: "Stabilizer Trim and Aileron Lockout Module"
  },
  {
        abbreviation: "SAOHE",
        meaning: "Surface Air/Oil Heat Exchanger"
  },
  {
        abbreviation: "SAR",
        meaning: "Smart ACMS Recorder"
  },
  {
        abbreviation: "SAR",
        meaning: "Specific Air Range"
  },
  {
        abbreviation: "SARSAT",
        meaning: "Search and Rescue Satellite-Aided Tracking"
  },
  {
        abbreviation: "SAS",
        meaning: "Secondary Air System"
  },
  {
        abbreviation: "SAT",
        meaning: "Static Air Temperature"
  },
  {
        abbreviation: "SATCOM",
        meaning: "Satellite Communication"
  },
  {
        abbreviation: "SAV",
        meaning: "Starter Air Valve"
  },
  {
        abbreviation: "SB",
        meaning: "Service Bulletin"
  },
  {
        abbreviation: "SB",
        meaning: "Symbol Generator"
  },
  {
        abbreviation: "SBAS",
        meaning: "Satellite Based Augmentation System"
  },
  {
        abbreviation: "SBB",
        meaning: "Swift Broadband"
  },
  {
        abbreviation: "SBE",
        meaning: "Service Bulletin Engine"
  },
  {
        abbreviation: "SBIT",
        meaning: "Service Bulletin Information Transmission"
  },
  {
        abbreviation: "SBP",
        meaning: "Standby Pitot Probe"
  },
  {
        abbreviation: "SBSP",
        meaning: "Standby Static Probe"
  },
  {
        abbreviation: "SBTU",
        meaning: "Speed Brake Transducer Unit"
  },
  {
        abbreviation: "SC",
        meaning: "Single Chime"
  },
  {
        abbreviation: "SCAV",
        meaning: "Scavenge"
  },
  {
        abbreviation: "SCE",
        meaning: "Source"
  },
  {
        abbreviation: "SCG",
        meaning: "System Configuration Guide"
  },
  {
        abbreviation: "SCI",
        meaning: "Secure Communication Interface"
  },
  {
        abbreviation: "SCM",
        meaning: "SDU Configuration Module"
  },
  {
        abbreviation: "SCM",
        meaning: "Spoiler Control Module"
  },
  {
        abbreviation: "SCN",
        meaning: "Specification Change Notice"
  },
  {
        abbreviation: "SCS",
        meaning: "Supplemental Cooling System"
  },
  {
        abbreviation: "SCU",
        meaning: "Supplemental Control Unit"
  },
  {
        abbreviation: "SCU",
        meaning: "System Control Unit"
  },
  {
        abbreviation: "SCU",
        meaning: "Split Control Unit"
  },
  {
        abbreviation: "SCV",
        meaning: "Surge Control Valve"
  },
  {
        abbreviation: "SD",
        meaning: "System Display"
  },
  {
        abbreviation: "SD",
        meaning: "Secure Digital"
  },
  {
        abbreviation: "SD08/28/2024 SDCU",
        meaning: "Smoke Detector Control Unit"
  },
  {
        abbreviation: "SDAC",
        meaning: "System Data Acquisition Concentrator"
  },
  {
        abbreviation: "SDAC",
        meaning: "System Data Analog Converter"
  },
  {
        abbreviation: "SDCP",
        meaning: "Smoke Detection Control Panel"
  },
  {
        abbreviation: "SDCU",
        meaning: "Smoke Detection Control Unit"
  },
  {
        abbreviation: "SDF",
        meaning: "Smoke Detection Function"
  },
  {
        abbreviation: "SDI",
        meaning: "Source/Destination Identifier"
  },
  {
        abbreviation: "SDI",
        meaning: "Special Detailed Inspection"
  },
  {
        abbreviation: "SDI",
        meaning: "Source/Destination Identifier (Bits)"
  },
  {
        abbreviation: "SDIC",
        meaning: "Shut Down In Cruise"
  },
  {
        abbreviation: "SDL",
        meaning: "Simple Data Loader"
  },
  {
        abbreviation: "SDM",
        meaning: "Smart Diode Module"
  },
  {
        abbreviation: "SDN",
        meaning: "System Description Note"
  },
  {
        abbreviation: "SDOF",
        meaning: "Single Degree of Freedom"
  },
  {
        abbreviation: "SDS",
        meaning: "Smoke Detection System"
  },
  {
        abbreviation: "SDT",
        meaning: "Smart Dataloading Tool"
  },
  {
        abbreviation: "SDU",
        meaning: "Satellite Data Unit"
  },
  {
        abbreviation: "SDW",
        meaning: "Specific Design Work"
  },
  {
        abbreviation: "SE",
        meaning: "Section"
  },
  {
        abbreviation: "SEAL",
        meaning: "Sealing"
  },
  {
        abbreviation: "SEB",
        meaning: "Seat Electronic Box"
  },
  {
        abbreviation: "SEB",
        meaning: "Seat Electronics Box"
  },
  {
        abbreviation: "SEC",
        meaning: "Secondary"
  },
  {
        abbreviation: "SEC",
        meaning: "SECondary Computer"
  },
  {
        abbreviation: "SEC",
        meaning: "Spoiler Elevator Computer"
  },
  {
        abbreviation: "SEC",
        meaning: "Secondary/Security"
  },
  {
        abbreviation: "SEC",
        meaning: "Spoiler and Elevator Computer"
  },
  {
        abbreviation: "SECT",
        meaning: "Section"
  },
  {
        abbreviation: "SECT",
        meaning: "Sector Scan"
  },
  {
        abbreviation: "SEI",
        meaning: "Standby Engine Indicator"
  },
  {
        abbreviation: "SEL",
        meaning: "Select"
  },
  {
        abbreviation: "SEL",
        meaning: "Selected"
  },
  {
        abbreviation: "SEL",
        meaning: "Selection"
  },
  {
        abbreviation: "SEL",
        meaning: "Selector"
  },
  {
        abbreviation: "SEL",
        meaning: "Select Selector"
  },
  {
        abbreviation: "SELCAL",
        meaning: "Selective Calling"
  },
  {
        abbreviation: "SELCAL",
        meaning: "Selective Call (System)"
  },
  {
        abbreviation: "SELV",
        meaning: "Selector Valve"
  },
  {
        abbreviation: "SEMR",
        meaning: "System Equipment Maintenance Requirements"
  },
  {
        abbreviation: "SENS",
        meaning: "Sensitivity"
  },
  {
        abbreviation: "SEPDC",
        meaning: "Secondary Electrical Power Distribution Center"
  },
  {
        abbreviation: "SEQ",
        meaning: "Sequence"
  },
  {
        abbreviation: "SEQ",
        meaning: "Sequential"
  },
  {
        abbreviation: "SER",
        meaning: "Serial"
  },
  {
        abbreviation: "SER",
        meaning: "Serial Number"
  },
  {
        abbreviation: "SER",
        meaning: "Service Evaluation Request"
  },
  {
        abbreviation: "SERV",
        meaning: "Service"
  },
  {
        abbreviation: "SES",
        meaning: "Support Equipment Summary"
  },
  {
        abbreviation: "SET",
        meaning: "Setting"
  },
  {
        abbreviation: "SFAR",
        meaning: "Special Federal Aviation Regulation"
  },
  {
        abbreviation: "SFC",
        meaning: "Specific Fuel Consumption"
  },
  {
        abbreviation: "SFCC",
        meaning: "Slat Flap Control Computer"
  },
  {
        abbreviation: "SFCC",
        meaning: "Slat Flat Control Computer"
  },
  {
        abbreviation: "SFE",
        meaning: "Seller Furnished Equipment"
  },
  {
        abbreviation: "SFE",
        meaning: "Seller Furnished Equiptment"
  },
  {
        abbreviation: "SFTP",
        meaning: "Secured File Transfer Protocol"
  },
  {
        abbreviation: "SG",
        meaning: "Starter Generator"
  },
  {
        abbreviation: "SG",
        meaning: "Specific Gravity"
  },
  {
        abbreviation: "SG",
        meaning: "Symbol Generator"
  },
  {
        abbreviation: "SGCU",
        meaning: "Smart Galley Control Unit"
  },
  {
        abbreviation: "SGCU",
        meaning: "Starter Generator Control Unit"
  },
  {
        abbreviation: "SGSC",
        meaning: "Sheddable Ground Servicing Contactor"
  },
  {
        abbreviation: "SGU",
        meaning: "Symbol Generator Unit"
  },
  {
        abbreviation: "SGV",
        meaning: "Structural Guide Vane"
  },
  {
        abbreviation: "SH ABS",
        meaning: "Shock Absorber"
  },
  {
        abbreviation: "SHED",
        meaning: "Sheddable"
  },
  {
        abbreviation: "SHED",
        meaning: "Shedding"
  },
  {
        abbreviation: "SHLD",
        meaning: "Shield"
  },
  {
        abbreviation: "SHLD",
        meaning: "Shielding"
  },
  {
        abbreviation: "SHR PN",
        meaning: "Shear Pin"
  },
  {
        abbreviation: "SHT",
        meaning: "Short"
  },
  {
        abbreviation: "SHX",
        meaning: "Secondary Heat Exchanger"
  },
  {
        abbreviation: "SI",
        meaning: "Slip Indicator"
  },
  {
        abbreviation: "SI",
        meaning: "International System of Units"
  },
  {
        abbreviation: "SIC",
        meaning: "System Isolation Contactor"
  },
  {
        abbreviation: "SICU",
        meaning: "System Interface Control Unit"
  },
  {
        abbreviation: "SID",
        meaning: "Standard Instrument Departure"
  },
  {
        abbreviation: "SIG",
        meaning: "Signal"
  },
  {
        abbreviation: "SigDB",
        meaning: "Signature Database"
  },
  {
        abbreviation: "SIL",
        meaning: "Speech Interference Level"
  },
  {
        abbreviation: "SIL",
        meaning: "Service Information Letter"
  },
  {
        abbreviation: "SIM",
        meaning: "Simulation"
  },
  {
        abbreviation: "SIM",
        meaning: "Subscriber Identity Module"
  },
  {
        abbreviation: "SIR",
        meaning: "Service Identification Request"
  },
  {
        abbreviation: "SIRU",
        meaning: "Secure Interface Router Unit"
  },
  {
        abbreviation: "SIS",
        meaning: "Standalone Identification System"
  },
  {
        abbreviation: "SIS",
        meaning: "Service Interphone System"
  },
  {
        abbreviation: "SITA",
        meaning: "soci\u00c4\u201a\u00c2\u00a9t\u00c4\u201a\u00c2\u00a9 internationale de t\u00c4\u201a\u00c2\u00a9l\u00c4\u201a\u00c2\u00a9com a\u00c4\u201a\u00c2\u00a9ro"
  },
  {
        abbreviation: "SITR",
        meaning: "System Installation Technical Reference"
  },
  {
        abbreviation: "SIU",
        meaning: "Server Interface Unit"
  },
  {
        abbreviation: "SKT",
        meaning: "Socket"
  },
  {
        abbreviation: "SL ALI",
        meaning: "Safe Life Airworthiness Limitation Items"
  },
  {
        abbreviation: "SLA",
        meaning: "Spot Light Adapter"
  },
  {
        abbreviation: "SLC",
        meaning: "Starter Line Contactor"
  },
  {
        abbreviation: "SLCA",
        meaning: "Streamlined Life Cycle Assessment"
  },
  {
        abbreviation: "SLCTD",
        meaning: "Selected"
  },
  {
        abbreviation: "SLCTR",
        meaning: "Selector"
  },
  {
        abbreviation: "SLD",
        meaning: "Slide"
  },
  {
        abbreviation: "SLD",
        meaning: "Sliding"
  },
  {
        abbreviation: "SLS",
        meaning: "Satellite Landing System"
  },
  {
        abbreviation: "SLS",
        meaning: "Sea Level Standard"
  },
  {
        abbreviation: "SLST",
        meaning: "Sea Level Static Turust"
  },
  {
        abbreviation: "SLT",
        meaning: "Slat"
  },
  {
        abbreviation: "SM",
        meaning: "Standards Manual"
  },
  {
        abbreviation: "SMC",
        meaning: "System Manager Controller"
  },
  {
        abbreviation: "SMC",
        meaning: "Stall Management Computer"
  },
  {
        abbreviation: "SMEL",
        meaning: "Seat-Mounted Emergency Light"
  },
  {
        abbreviation: "SMK",
        meaning: "Smoke"
  },
  {
        abbreviation: "SMKG",
        meaning: "Smoking"
  },
  {
        abbreviation: "SMM",
        meaning: "System Management Module"
  },
  {
        abbreviation: "SMP",
        meaning: "Software Management Plan"
  },
  {
        abbreviation: "SMTR",
        meaning: "Transmitter"
  },
  {
        abbreviation: "SN",
        meaning: "Serial Number"
  },
  {
        abbreviation: "SNGL",
        meaning: "Single"
  },
  {
        abbreviation: "SNMP",
        meaning: "Simple Network Management Protocol"
  },
  {
        abbreviation: "SNR",
        meaning: "Signal-to-Noise Ratio"
  },
  {
        abbreviation: "SNSG",
        meaning: "Sensing"
  },
  {
        abbreviation: "SNSR",
        meaning: "Sensor"
  },
  {
        abbreviation: "SO",
        meaning: "Shutoff"
  },
  {
        abbreviation: "SOAP",
        meaning: "Spectrographic Oil Analysis Program"
  },
  {
        abbreviation: "SOL",
        meaning: "Solenoid"
  },
  {
        abbreviation: "SOMF",
        meaning: "Structural Overload Monitoring Function"
  },
  {
        abbreviation: "SOV",
        meaning: "Shut-Off Valve"
  },
  {
        abbreviation: "SOV",
        meaning: "Shutoff Valve"
  },
  {
        abbreviation: "SPB",
        meaning: "Seat Power Box"
  },
  {
        abbreviation: "SPC",
        meaning: "Smart PCMCIA Card"
  },
  {
        abbreviation: "SPC",
        meaning: "Spare Part Code"
  },
  {
        abbreviation: "SPD",
        meaning: "Speed"
  },
  {
        abbreviation: "SPDB",
        meaning: "Secondary Power Distribution Box"
  },
  {
        abbreviation: "SPDBRK",
        meaning: "Speedbrake"
  },
  {
        abbreviation: "SPEC",
        meaning: "Specification"
  },
  {
        abbreviation: "SPIB",
        meaning: "Spare Parts Introduction Bulletin"
  },
  {
        abbreviation: "SPKR",
        meaning: "Speaker"
  },
  {
        abbreviation: "SPL",
        meaning: "Sound Pressure Level"
  },
  {
        abbreviation: "SPLR",
        meaning: "Spoiler"
  },
  {
        abbreviation: "SPLY",
        meaning: "Supply"
  },
  {
        abbreviation: "SPM",
        meaning: "Signal Processing Module"
  },
  {
        abbreviation: "SPM",
        meaning: "Standard Practices Manual"
  },
  {
        abbreviation: "SPM",
        meaning: "Stabilizer Position Module"
  },
  {
        abbreviation: "SPP",
        meaning: "Software Pin Programming"
  },
  {
        abbreviation: "SPP-BA",
        meaning: "SPP Broadcasting Application"
  },
  {
        abbreviation: "SPPU",
        meaning: "Station Position Pick-off Unit"
  },
  {
        abbreviation: "SPR",
        meaning: "Spar"
  },
  {
        abbreviation: "SPRDR",
        meaning: "Spreader"
  },
  {
        abbreviation: "SPS",
        meaning: "Seat Power Supply"
  },
  {
        abbreviation: "SPSS",
        meaning: "Seat Power Supply System"
  },
  {
        abbreviation: "SPST",
        meaning: "Single Pole Single Throw"
  },
  {
        abbreviation: "SPTL",
        meaning: "Software Pedal Travel Limitation"
  },
  {
        abbreviation: "SPU",
        meaning: "Starter Power Unit"
  },
  {
        abbreviation: "SQ",
        meaning: "Squelch"
  },
  {
        abbreviation: "SQL",
        meaning: "Squelch"
  },
  {
        abbreviation: "SRF",
        meaning: "Servicing and aircraft condition parameters Reporting Function"
  },
  {
        abbreviation: "SRI",
        meaning: "aircraft Structural Repair Identification"
  },
  {
        abbreviation: "SRM",
        meaning: "Structural Repair Manual"
  },
  {
        abbreviation: "SRP",
        meaning: "Service Related Problem"
  },
  {
        abbreviation: "SRPS",
        meaning: "Safe Redundant Power Supply"
  },
  {
        abbreviation: "SRPSU",
        meaning: "Slide Release Power Supply Unit"
  },
  {
        abbreviation: "SRPU",
        meaning: "Safe Redundant Power Unit"
  },
  {
        abbreviation: "SRS",
        meaning: "Speed Reference System"
  },
  {
        abbreviation: "SRTL",
        meaning: "Software Rudder Travel Limitation"
  },
  {
        abbreviation: "SRU",
        meaning: "Shop Replaceable Unit"
  },
  {
        abbreviation: "SSA",
        meaning: "Side Slip Angle"
  },
  {
        abbreviation: "SSB",
        meaning: "Single Side Band"
  },
  {
        abbreviation: "SSCVR",
        meaning: "Solid State Cockpit Voice Recorder"
  },
  {
        abbreviation: "SSD",
        meaning: "Solide State Drive"
  },
  {
        abbreviation: "SSEC",
        meaning: "Static Source Error Correction"
  },
  {
        abbreviation: "SSFDR",
        meaning: "Solid State Flight Data Recorder"
  },
  {
        abbreviation: "SSI",
        meaning: "Small-Scale Integration"
  },
  {
        abbreviation: "SSID",
        meaning: "Service Set Identifier"
  },
  {
        abbreviation: "SSLA",
        meaning: "Solenoid Slider Assembly"
  },
  {
        abbreviation: "SSM",
        meaning: "Sign Status Matrix"
  },
  {
        abbreviation: "SSMM",
        meaning: "Solid State Mass Memory"
  },
  {
        abbreviation: "SSP",
        meaning: "System Signal Processor"
  },
  {
        abbreviation: "SSPC",
        meaning: "Solid State Power Controller"
  },
  {
        abbreviation: "SSTDU",
        meaning: "Side Stick Transducer and Damper Unit"
  },
  {
        abbreviation: "SSTU",
        meaning: "Side Stick Transducer Unit"
  },
  {
        abbreviation: "SSU",
        meaning: "Side Stick Unit"
  },
  {
        abbreviation: "SSU",
        meaning: "Saybolt Secotids Universal"
  },
  {
        abbreviation: "STA",
        meaning: "Station"
  },
  {
        abbreviation: "STAB",
        meaning: "Stabilizer"
  },
  {
        abbreviation: "STAR",
        meaning: "Standard Terminal Arrival Route"
  },
  {
        abbreviation: "STAT",
        meaning: "Static"
  },
  {
        abbreviation: "STAT INV",
        meaning: "Static Inverter"
  },
  {
        abbreviation: "STBY",
        meaning: "Standby"
  },
  {
        abbreviation: "STC",
        meaning: "Supplemental Type Certificate"
  },
  {
        abbreviation: "STC",
        meaning: "Sensitivity Time Control"
  },
  {
        abbreviation: "STCM",
        meaning: "Stabilizer Trim Control Module"
  },
  {
        abbreviation: "STD",
        meaning: "Standard"
  },
  {
        abbreviation: "STEERG",
        meaning: "Steering"
  },
  {
        abbreviation: "STELLA",
        meaning: "STair Electrical Light Load Adapter"
  },
  {
        abbreviation: "STEP",
        meaning: "Synchronized Targeted Embodiment Point"
  },
  {
        abbreviation: "STGR",
        meaning: "Stringer"
  },
  {
        abbreviation: "STL",
        meaning: "System Torque Limiter"
  },
  {
        abbreviation: "STOL",
        meaning: "Short Takeoff and Landing"
  },
  {
        abbreviation: "STOVL",
        meaning: "Short Takeoff and Vertical Landing"
  },
  {
        abbreviation: "STR",
        meaning: "Stringer"
  },
  {
        abbreviation: "STR",
        meaning: "Specific Tolerance Requirement"
  },
  {
        abbreviation: "STRG",
        meaning: "Steering"
  },
  {
        abbreviation: "STRK",
        meaning: "Stroke"
  },
  {
        abbreviation: "STRM",
        meaning: "Secure open and Trip Resident Memory"
  },
  {
        abbreviation: "STS",
        meaning: "Status"
  },
  {
        abbreviation: "STS",
        meaning: "System Status"
  },
  {
        abbreviation: "STWG",
        meaning: "Stowage"
  },
  {
        abbreviation: "STX",
        meaning: "Start of Text"
  },
  {
        abbreviation: "SUCT",
        meaning: "Suction"
  },
  {
        abbreviation: "SUP",
        meaning: "Supply"
  },
  {
        abbreviation: "SUPPL",
        meaning: "Supplementary"
  },
  {
        abbreviation: "SUPPR",
        meaning: "Suppressor"
  },
  {
        abbreviation: "SURF",
        meaning: "Surface"
  },
  {
        abbreviation: "SV",
        meaning: "Servovalve"
  },
  {
        abbreviation: "SVA",
        meaning: "Stator Vane Actuator"
  },
  {
        abbreviation: "SVA",
        meaning: "Servo Valve Assembly"
  },
  {
        abbreviation: "SVCE",
        meaning: "Service"
  },
  {
        abbreviation: "SVO",
        meaning: "Servo"
  },
  {
        abbreviation: "SVR",
        meaning: "Shop Visit Rate"
  },
  {
        abbreviation: "SVS",
        meaning: "Synthetic Vision System"
  },
  {
        abbreviation: "SW",
        meaning: "Switch"
  },
  {
        abbreviation: "SW",
        meaning: "Software"
  },
  {
        abbreviation: "SWC",
        meaning: "Stall Warning Computer"
  },
  {
        abbreviation: "SWTG",
        meaning: "Switching"
  },
  {
        abbreviation: "SyDMP",
        meaning: "System Design Modification Plan"
  },
  {
        abbreviation: "SyDPAP",
        meaning: "System Development and Process Assurance Plan"
  },
  {
        abbreviation: "SyFAR",
        meaning: "System FAL Acceptance Review"
  },
  {
        abbreviation: "SyFFR",
        meaning: "System First Flight Review"
  },
  {
        abbreviation: "SYN",
        meaning: "Synchronize"
  },
  {
        abbreviation: "SYNC",
        meaning: "Synchro"
  },
  {
        abbreviation: "SYNC",
        meaning: "Synchronize"
  },
  {
        abbreviation: "SYNC",
        meaning: "Synchronous"
  },
  {
        abbreviation: "SYNTHR",
        meaning: "Synthetizer"
  },
  {
        abbreviation: "SyPDR",
        meaning: "System Preliminary Design Review"
  },
  {
        abbreviation: "SyPR",
        meaning: "System Planning Review"
  },
  {
        abbreviation: "SYS",
        meaning: "System"
  },
  {
        abbreviation: "T",
        meaning: "Trim"
  },
  {
        abbreviation: "T",
        meaning: "TRUE"
  },
  {
        abbreviation: "T",
        meaning: "Turn"
  },
  {
        abbreviation: "T",
        meaning: "Total, True, Turn"
  },
  {
        abbreviation: "T.O",
        meaning: "TakeOff"
  },
  {
        abbreviation: "T/C",
        meaning: "Top of Climb"
  },
  {
        abbreviation: "T/C",
        meaning: "Thermocouple"
  },
  {
        abbreviation: "T/D",
        meaning: "Top of Descent"
  },
  {
        abbreviation: "T/E",
        meaning: "Trailing Edge"
  },
  {
        abbreviation: "T/F",
        meaning: "Track of a Fixed Waypoint"
  },
  {
        abbreviation: "T/R",
        meaning: "Thrust Reverser"
  },
  {
        abbreviation: "T/TISS",
        meaning: "Traffic and Terrain Integrated Surveillance System"
  },
  {
        abbreviation: "T12",
        meaning: "Fan Inlet Total Air Temperature"
  },
  {
        abbreviation: "T25",
        meaning: "(HP) Compressor Inlet Air Temperature"
  },
  {
        abbreviation: "T2C",
        meaning: "HP Compressor Inlet Temperature"
  },
  {
        abbreviation: "T2CAS",
        meaning: "Traffic and Terrain Collision Avoidance System"
  },
  {
        abbreviation: "T3",
        meaning: "(HP) Compressor Discharge Air Temperature"
  },
  {
        abbreviation: "T5",
        meaning: "(LP) Turbine Discharge Total Air Temperature"
  },
  {
        abbreviation: "T54",
        meaning: "Low Pressure Turbine Inlet Temperature"
  },
  {
        abbreviation: "TA",
        meaning: "Traffic Advisory"
  },
  {
        abbreviation: "TAC",
        meaning: "Taxiing Aid Camera"
  },
  {
        abbreviation: "TACAN",
        meaning: "Tactical Air Navigation"
  },
  {
        abbreviation: "TACH",
        meaning: "Tachometer"
  },
  {
        abbreviation: "TACS",
        meaning: "Taxiing Aid Camera System"
  },
  {
        abbreviation: "TACT",
        meaning: "Tactical"
  },
  {
        abbreviation: "TADD",
        meaning: "Trim Air Drive Device"
  },
  {
        abbreviation: "TAI",
        meaning: "Thermal Anti-Ice"
  },
  {
        abbreviation: "TAPRV",
        meaning: "Trim Air Pressure Regulating Valve"
  },
  {
        abbreviation: "TAS",
        meaning: "True Airspeed"
  },
  {
        abbreviation: "TAS",
        meaning: "True Air Speed"
  },
  {
        abbreviation: "TASE",
        meaning: "Training Areas of Special Emphasis"
  },
  {
        abbreviation: "TAT",
        meaning: "Total Air Temperature"
  },
  {
        abbreviation: "TAT",
        meaning: "Turn Around Time"
  },
  {
        abbreviation: "TAWS",
        meaning: "Terrain Awareness and Warning System"
  },
  {
        abbreviation: "TB",
        meaning: "Terminal Block"
  },
  {
        abbreviation: "TBC",
        meaning: "To Be Confirmed"
  },
  {
        abbreviation: "TBD",
        meaning: "To Be Determined"
  },
  {
        abbreviation: "TBO",
        meaning: "Time Between Overhauls"
  },
  {
        abbreviation: "TBO",
        meaning: "Time Between Overhaul"
  },
  {
        abbreviation: "TBV",
        meaning: "Transient Bleed Valve"
  },
  {
        abbreviation: "TC",
        meaning: "HP Turbine Case Pressure"
  },
  {
        abbreviation: "TC",
        meaning: "Theoretical Contour"
  },
  {
        abbreviation: "TC",
        meaning: "Thermocouple"
  },
  {
        abbreviation: "TC",
        meaning: "(HP) Turbine Case Temperature"
  },
  {
        abbreviation: "TCA",
        meaning: "Throttle Control Assy"
  },
  {
        abbreviation: "TCA",
        meaning: "Terminal Control Area"
  },
  {
        abbreviation: "TCAF",
        meaning: "Turbine Cooling Air Front"
  },
  {
        abbreviation: "TCAM",
        meaning: "Turbine Cooling Air Middle"
  },
  {
        abbreviation: "TCAP",
        meaning: "TCAS Resolution Advisory Prevention"
  },
  {
        abbreviation: "TCAR",
        meaning: "Turbine Cooling Air Rear"
  },
  {
        abbreviation: "TCAS",
        meaning: "Traffic Alert and Collision Avoidance System"
  },
  {
        abbreviation: "TCAS",
        meaning: "Traffic Collision Avoidance System"
  },
  {
        abbreviation: "TCC",
        meaning: "Thrust Control Computer"
  },
  {
        abbreviation: "TCC",
        meaning: "Turbine Case Cooling"
  },
  {
        abbreviation: "TCC",
        meaning: "Turbine Clearance Control"
  },
  {
        abbreviation: "TCF",
        meaning: "Turbine Center Frame"
  },
  {
        abbreviation: "TCG",
        meaning: "Time Corrected Gain"
  },
  {
        abbreviation: "TCIU",
        meaning: "Telephone Communication Interface Unit"
  },
  {
        abbreviation: "TCM",
        meaning: "Thrust Control Malfunction"
  },
  {
        abbreviation: "TCMA",
        meaning: "Thrust Control Malfunction Accommodation"
  },
  {
        abbreviation: "TCP",
        meaning: "Transmission Control Protocol"
  },
  {
        abbreviation: "TCPS",
        meaning: "Temperature Compensated Pressure Switch"
  },
  {
        abbreviation: "TCS",
        meaning: "Temperature Control System"
  },
  {
        abbreviation: "TCS",
        meaning: "Terminal Control Software"
  },
  {
        abbreviation: "TCT",
        meaning: "Temperature Control Thermostat"
  },
  {
        abbreviation: "TCU",
        meaning: "Throttle Control Unit"
  },
  {
        abbreviation: "TCU",
        meaning: "Transport Cargo Unit"
  },
  {
        abbreviation: "TCV",
        meaning: "Thermal Control Valve"
  },
  {
        abbreviation: "TDB",
        meaning: "Terrain DataBase"
  },
  {
        abbreviation: "TDC",
        meaning: "Top Dead Center"
  },
  {
        abbreviation: "TDO",
        meaning: "Time Delay Opening"
  },
  {
        abbreviation: "TDS",
        meaning: "Technical Data Sheet"
  },
  {
        abbreviation: "TE",
        meaning: "HP Stage Air Temperature"
  },
  {
        abbreviation: "TE",
        meaning: "Trailing Edge"
  },
  {
        abbreviation: "TEC",
        meaning: "Turbine Exhaust Case"
  },
  {
        abbreviation: "TECU",
        meaning: "Electronic Control, Unit Internal Temperature"
  },
  {
        abbreviation: "TED",
        meaning: "Tool and Equipment Drawing"
  },
  {
        abbreviation: "TEFO",
        meaning: "Total Engine Flame Out"
  },
  {
        abbreviation: "TEG",
        meaning: "Test Equipment Guidance"
  },
  {
        abbreviation: "TEI",
        meaning: "Tool and Equipment Index"
  },
  {
        abbreviation: "TELECOM",
        meaning: "Telecommunications"
  },
  {
        abbreviation: "TEM",
        meaning: "Tool and Equipment Manual"
  },
  {
        abbreviation: "TEMAC",
        meaning: "Trailling Edge of The Mean Aerodynamic Chord"
  },
  {
        abbreviation: "TEMP",
        meaning: "Temperature"
  },
  {
        abbreviation: "TEMPER",
        meaning: "Turbine Engine Modular Performance Estimating Routine"
  },
  {
        abbreviation: "TEO",
        meaning: "Engine Oil Temperature"
  },
  {
        abbreviation: "TER",
        meaning: "Trailing Edge Rib"
  },
  {
        abbreviation: "TFR",
        meaning: "Transfer"
  },
  {
        abbreviation: "TFTS",
        meaning: "Terrestrial Flight Telephone System"
  },
  {
        abbreviation: "TFU",
        meaning: "Technical Follow-up"
  },
  {
        abbreviation: "TGB",
        meaning: "Transfer Gearbox"
  },
  {
        abbreviation: "TGB",
        meaning: "Transfer Gear Box"
  },
  {
        abbreviation: "TGCU",
        meaning: "Terminal GPRS / UMTS Client Unit"
  },
  {
        abbreviation: "TGT",
        meaning: "Target"
  },
  {
        abbreviation: "TGT",
        meaning: "Turbine Gas Temperature"
  },
  {
        abbreviation: "THD",
        meaning: "Total Harmonic Distortion"
  },
  {
        abbreviation: "THERAP",
        meaning: "Therapeutic"
  },
  {
        abbreviation: "THP",
        meaning: "(HP) Fuel Temperature"
  },
  {
        abbreviation: "THR",
        meaning: "Thrust"
  },
  {
        abbreviation: "THR HOLD",
        meaning: "Throttle Hold"
  },
  {
        abbreviation: "THRM",
        meaning: "Thermal"
  },
  {
        abbreviation: "THRMST",
        meaning: "Thermostat"
  },
  {
        abbreviation: "THROT",
        meaning: "Throttle"
  },
  {
        abbreviation: "THROT PUSH",
        meaning: "Throttle Pusher"
  },
  {
        abbreviation: "THRSH",
        meaning: "Threshold"
  },
  {
        abbreviation: "THRU",
        meaning: "Through"
  },
  {
        abbreviation: "THS",
        meaning: "Trimmable Horizontal Stabilizer"
  },
  {
        abbreviation: "THSA",
        meaning: "Trimmable Horizontal Stabilizer Actuator"
  },
  {
        abbreviation: "TIC",
        meaning: "Turbine Impingement Cooling"
  },
  {
        abbreviation: "TIC",
        meaning: "Turbine Intermediate Case"
  },
  {
        abbreviation: "TIG",
        meaning: "Tungsten Inert Gas"
  },
  {
        abbreviation: "TIR",
        meaning: "Total Indicator Reading"
  },
  {
        abbreviation: "TIS-B",
        meaning: "Traffic Information Service - Broadcast"
  },
  {
        abbreviation: "TIT",
        meaning: "Turbine Inlet Temperature"
  },
  {
        abbreviation: "TIU",
        meaning: "Terminal Interface Unit"
  },
  {
        abbreviation: "TIV",
        meaning: "Temperature Isolation Valve"
  },
  {
        abbreviation: "TK",
        meaning: "Tank"
  },
  {
        abbreviation: "TK",
        meaning: "Track"
  },
  {
        abbreviation: "TKE",
        meaning: "Track Angle Error"
  },
  {
        abbreviation: "TLA",
        meaning: "Throttle Lever Angle"
  },
  {
        abbreviation: "TLA",
        meaning: "Thrust Lever Angle, Throttle Lever Angle"
  },
  {
        abbreviation: "TLC",
        meaning: "TR Line Contactor"
  },
  {
        abbreviation: "TLCS",
        meaning: "Trolley Lift & Conveyance System"
  },
  {
        abbreviation: "TLM",
        meaning: "Taxiway Landing Monitor"
  },
  {
        abbreviation: "TLS",
        meaning: "Transcowl Locking System"
  },
  {
        abbreviation: "TLS",
        meaning: "Trolley Lift System"
  },
  {
        abbreviation: "TLU",
        meaning: "Travel Limitation Unit"
  },
  {
        abbreviation: "TLV",
        meaning: "Tertiary Lock Valve"
  },
  {
        abbreviation: "TM",
        meaning: "Torque Motor"
  },
  {
        abbreviation: "TM",
        meaning: "Transportability Manual"
  },
  {
        abbreviation: "TMC",
        meaning: "Test Means Component"
  },
  {
        abbreviation: "TMC",
        meaning: "Thrust Management Computer"
  },
  {
        abbreviation: "TMC",
        meaning: "Torque Motor Current"
  },
  {
        abbreviation: "TMG",
        meaning: "Tooling Master Geometry"
  },
  {
        abbreviation: "TMLB",
        meaning: "Technical and Maintenance LogBook"
  },
  {
        abbreviation: "TMR",
        meaning: "Timer"
  },
  {
        abbreviation: "TMS",
        meaning: "Thermal Management System"
  },
  {
        abbreviation: "TMS",
        meaning: "Thrust Management System"
  },
  {
        abbreviation: "TMSP",
        meaning: "Thrust Mode Select Panel"
  },
  {
        abbreviation: "T-NAV",
        meaning: "Time Control Navigation"
  },
  {
        abbreviation: "TO, T/O",
        meaning: "Takeoff"
  },
  {
        abbreviation: "TO/GA",
        meaning: "Takeoff/Go Around"
  },
  {
        abbreviation: "TOGA",
        meaning: "Takeoff/Go Around"
  },
  {
        abbreviation: "TOGW",
        meaning: "Takeoff Gross Weight"
  },
  {
        abbreviation: "TOGW",
        meaning: "Take-Off Gross Weight"
  },
  {
        abbreviation: "TOIL",
        meaning: "Toilet"
  },
  {
        abbreviation: "TOL",
        meaning: "Tolerance"
  },
  {
        abbreviation: "TOM",
        meaning: "Takeoff Monitoring"
  },
  {
        abbreviation: "TOMCONF",
        meaning: "Take-Off Multi Configuration"
  },
  {
        abbreviation: "TOPA",
        meaning: "TakeOff Performance Application"
  },
  {
        abbreviation: "TOS",
        meaning: "TakeOff Securing"
  },
  {
        abbreviation: "TOT",
        meaning: "Total"
  },
  {
        abbreviation: "TOW",
        meaning: "Takeoff Weight"
  },
  {
        abbreviation: "TOW",
        meaning: "Take-Off Weight"
  },
  {
        abbreviation: "T-P",
        meaning: "Turn Point"
  },
  {
        abbreviation: "TPIC",
        meaning: "Tire Pressure Indicating Computer"
  },
  {
        abbreviation: "TPIS",
        meaning: "Tire Pressure Indicating System"
  },
  {
        abbreviation: "TPIU",
        meaning: "Type Pressure Indicator Unit"
  },
  {
        abbreviation: "TPR",
        meaning: "Turbofan Power Ratio"
  },
  {
        abbreviation: "TPS",
        meaning: "Temporary Protection System"
  },
  {
        abbreviation: "TPU",
        meaning: "Terminal Processor Unit"
  },
  {
        abbreviation: "TR",
        meaning: "Thrust Reverser"
  },
  {
        abbreviation: "TR",
        meaning: "Transformer Rectifier"
  },
  {
        abbreviation: "TR",
        meaning: "Transistor"
  },
  {
        abbreviation: "TR",
        meaning: "Transmitter Receiver"
  },
  {
        abbreviation: "T-R",
        meaning: "Transmitter-Receiver"
  },
  {
        abbreviation: "TRA",
        meaning: "Throttle Resolver Angle"
  },
  {
        abbreviation: "TRA",
        meaning: "Thrust Lever Resolver Angle"
  },
  {
        abbreviation: "TRANS",
        meaning: "Transition"
  },
  {
        abbreviation: "TRANSLG",
        meaning: "Translating"
  },
  {
        abbreviation: "TRAS",
        meaning: "Thrust Reverser Actuation System"
  },
  {
        abbreviation: "TRC",
        meaning: "Thrust Rating Computer"
  },
  {
        abbreviation: "TRDV",
        meaning: "Thrust Reverser Directional Valve"
  },
  {
        abbreviation: "TRF",
        meaning: "Turbine Rear Frame"
  },
  {
        abbreviation: "TRF",
        meaning: "Tuned Radio Frequency Receiver"
  },
  {
        abbreviation: "TRGT",
        meaning: "Target"
  },
  {
        abbreviation: "TRIG",
        meaning: "Trigger"
  },
  {
        abbreviation: "TRK",
        meaning: "Track"
  },
  {
        abbreviation: "TRLY",
        meaning: "Trolley"
  },
  {
        abbreviation: "TROPO",
        meaning: "Tropopause"
  },
  {
        abbreviation: "TRP",
        meaning: "Thrust Rating Panel"
  },
  {
        abbreviation: "TRPU",
        meaning: "Thrust Reverser Power Unit"
  },
  {
        abbreviation: "TRPV",
        meaning: "Thrust Reverser Pressurizing Valve"
  },
  {
        abbreviation: "TRQE",
        meaning: "Torque"
  },
  {
        abbreviation: "TRU",
        meaning: "Transformer Rectifier Units"
  },
  {
        abbreviation: "TRV",
        meaning: "Travel"
  },
  {
        abbreviation: "TS",
        meaning: "TCU Sensor"
  },
  {
        abbreviation: "TSA",
        meaning: "Throttle Sensor Angle"
  },
  {
        abbreviation: "TSAS",
        meaning: "Temperature Secondary Air System"
  },
  {
        abbreviation: "TSD",
        meaning: "Trouble Shooting Data"
  },
  {
        abbreviation: "TSF",
        meaning: "Trouble Shooting Function"
  },
  {
        abbreviation: "TSFC",
        meaning: "Thrust Specific Fuel Consumption"
  },
  {
        abbreviation: "TSH",
        meaning: "Trouble Shooting Handbook"
  },
  {
        abbreviation: "TSI",
        meaning: "Time Since Installation"
  },
  {
        abbreviation: "TSM",
        meaning: "Trouble Shooting Manual"
  },
  {
        abbreviation: "TSN",
        meaning: "Time Since New"
  },
  {
        abbreviation: "TSP",
        meaning: "Tank Signalling Processor"
  },
  {
        abbreviation: "TSPA",
        meaning: "Tank Signal Processor A"
  },
  {
        abbreviation: "TSPB",
        meaning: "Tank Signal Processor B"
  },
  {
        abbreviation: "TST",
        meaning: "Test"
  },
  {
        abbreviation: "TSU",
        meaning: "Torque Sensor Unit"
  },
  {
        abbreviation: "TT",
        meaning: "Trim Tank"
  },
  {
        abbreviation: "TT2",
        meaning: "Engine Inlet Temperature"
  },
  {
        abbreviation: "TTG",
        meaning: "Time To Go"
  },
  {
        abbreviation: "TTI",
        meaning: "Tune Test Inhibit"
  },
  {
        abbreviation: "TTL",
        meaning: "Transistor Transistor Logic"
  },
  {
        abbreviation: "TTOL",
        meaning: "Taxi, Takeoff and Landing"
  },
  {
        abbreviation: "TTS",
        meaning: "Trim Tank System"
  },
  {
        abbreviation: "TTWS",
        meaning: "Tail Tipping Warning System"
  },
  {
        abbreviation: "TU",
        meaning: "Tapping Unit"
  },
  {
        abbreviation: "TUCD",
        meaning: "Thermostat Unit Control Device"
  },
  {
        abbreviation: "TURB",
        meaning: "Turbine"
  },
  {
        abbreviation: "TURB",
        meaning: "Turbulence"
  },
  {
        abbreviation: "TURB",
        meaning: "Turbulent"
  },
  {
        abbreviation: "TURBL",
        meaning: "Turbulence"
  },
  {
        abbreviation: "TV",
        meaning: "Television"
  },
  {
        abbreviation: "TVBC",
        meaning: "Turbine Vane and Blade Cooling"
  },
  {
        abbreviation: "TVOR",
        meaning: "Terminal Vor"
  },
  {
        abbreviation: "TWDC",
        meaning: "Tank Wall Data Concentrator"
  },
  {
        abbreviation: "TWLU",
        meaning: "Terminal Wireless LAN Unit"
  },
  {
        abbreviation: "TX",
        meaning: "Transmit"
  },
  {
        abbreviation: "TYP",
        meaning: "Typical"
  },
  {
        abbreviation: "U/FLOOR",
        meaning: "Underfloor"
  },
  {
        abbreviation: "U/S",
        meaning: "Unserviceable"
  },
  {
        abbreviation: "UADF",
        meaning: "User Application Definition File"
  },
  {
        abbreviation: "UAMM",
        meaning: "Unreliable Airspeed Mitigation Means"
  },
  {
        abbreviation: "UART",
        meaning: "Universal Asynchronous Receiver Transmitter"
  },
  {
        abbreviation: "UAT",
        meaning: "Universal Access Transceiver"
  },
  {
        abbreviation: "UBR",
        meaning: "Utility Bus Relays"
  },
  {
        abbreviation: "UD",
        meaning: "Upper Deck"
  },
  {
        abbreviation: "UDCC",
        meaning: "Upper Deck Cargo Compartment"
  },
  {
        abbreviation: "UDCD",
        meaning: "Upper Deck Cargo Door"
  },
  {
        abbreviation: "UDP",
        meaning: "User Datagram Protocol"
  },
  {
        abbreviation: "UEB",
        meaning: "Underseat Electronic Box"
  },
  {
        abbreviation: "UER",
        meaning: "Unscheduled Engine Removal"
  },
  {
        abbreviation: "UERF",
        meaning: "Uncontained Engine Rotor Failure"
  },
  {
        abbreviation: "UF",
        meaning: "Underfrequency"
  },
  {
        abbreviation: "UFD",
        meaning: "Unit Fault Data"
  },
  {
        abbreviation: "UHF",
        meaning: "Ultra High Frequency"
  },
  {
        abbreviation: "UICDL",
        meaning: "User Interface Configuration Download List"
  },
  {
        abbreviation: "ULA",
        meaning: "Universal Light Adapter"
  },
  {
        abbreviation: "ULA M",
        meaning: "Universal Light Adapter Module"
  },
  {
        abbreviation: "ULB",
        meaning: "Underwater Locator Beacon"
  },
  {
        abbreviation: "ULD",
        meaning: "Unit Load Device"
  },
  {
        abbreviation: "ULLI",
        meaning: "Understep LED Light"
  },
  {
        abbreviation: "ULR",
        meaning: "Ultra Long Range"
  },
  {
        abbreviation: "UMS",
        meaning: "User Modifiable Software"
  },
  {
        abbreviation: "UMTS",
        meaning: "Universal Mobile Telecommunications System"
  },
  {
        abbreviation: "UNBAL",
        meaning: "Unbalance"
  },
  {
        abbreviation: "UNBAL",
        meaning: "Unbalanced"
  },
  {
        abbreviation: "UNC",
        meaning: "United National, coarse"
  },
  {
        abbreviation: "UND",
        meaning: "Under"
  },
  {
        abbreviation: "UNDERPRESS",
        meaning: "Underpressure"
  },
  {
        abbreviation: "UNF",
        meaning: "United National, fine"
  },
  {
        abbreviation: "UNIV",
        meaning: "Universal"
  },
  {
        abbreviation: "UNLK",
        meaning: "Unlock"
  },
  {
        abbreviation: "UNLKD",
        meaning: "Unlocked"
  },
  {
        abbreviation: "UNSCHD",
        meaning: "Unscheduled"
  },
  {
        abbreviation: "UPLK",
        meaning: "Uplock"
  },
  {
        abbreviation: "UPLKD",
        meaning: "Uplocked"
  },
  {
        abbreviation: "UPPR",
        meaning: "Upper"
  },
  {
        abbreviation: "UPR",
        meaning: "Upper"
  },
  {
        abbreviation: "US",
        meaning: "United States"
  },
  {
        abbreviation: "USB",
        meaning: "Universal Serial Bus"
  },
  {
        abbreviation: "USB",
        meaning: "Upper Sideband"
  },
  {
        abbreviation: "USB",
        meaning: "Upper Side Band"
  },
  {
        abbreviation: "USS",
        meaning: "United Sates, standard"
  },
  {
        abbreviation: "UTC",
        meaning: "Universal Time Coordinated"
  },
  {
        abbreviation: "UTC",
        meaning: "Coordinated Universal Time"
  },
  {
        abbreviation: "UV",
        meaning: "Ultra-Violet"
  },
  {
        abbreviation: "UV",
        meaning: "Under Voltage"
  },
  {
        abbreviation: "UWBS",
        meaning: "Universal Wireless Backbone System"
  },
  {
        abbreviation: "V",
        meaning: "Valve"
  },
  {
        abbreviation: "V",
        meaning: "Volt"
  },
  {
        abbreviation: "V- NAV",
        meaning: "Vertical Navigation"
  },
  {
        abbreviation: "V/S",
        meaning: "Vertical Speed"
  },
  {
        abbreviation: "V1",
        meaning: "Takeoff Decision Speed"
  },
  {
        abbreviation: "V2",
        meaning: "Scheduled Target Speed (T.O. at 35 feed)"
  },
  {
        abbreviation: "V3",
        meaning: "Flap Retraction Speed"
  },
  {
        abbreviation: "V4",
        meaning: "Slat Retraction Speed"
  },
  {
        abbreviation: "VAC",
        meaning: "Voltage Alternating Current"
  },
  {
        abbreviation: "VAC",
        meaning: "Volts of Alternating Current"
  },
  {
        abbreviation: "VACU",
        meaning: "Vacuum"
  },
  {
        abbreviation: "VAFN",
        meaning: "Variable Area Fan Nozzle"
  },
  {
        abbreviation: "VAPC",
        meaning: "Variable Absolute Pressure Controller"
  },
  {
        abbreviation: "VAR",
        meaning: "Variable"
  },
  {
        abbreviation: "VAR",
        meaning: "Variation"
  },
  {
        abbreviation: "VAR",
        meaning: "Volt Ampere Reactive"
  },
  {
        abbreviation: "VBV",
        meaning: "Variable Bleed Valve"
  },
  {
        abbreviation: "VBV",
        meaning: "Variable Bypass Valve"
  },
  {
        abbreviation: "VC",
        meaning: "Ventilation Controller"
  },
  {
        abbreviation: "VCC",
        meaning: "Video Control Center"
  },
  {
        abbreviation: "VCI",
        meaning: "Video Control Insert"
  },
  {
        abbreviation: "VCM",
        meaning: "Video Camera Module"
  },
  {
        abbreviation: "VCO",
        meaning: "Voltage Controlled Oscillator"
  },
  {
        abbreviation: "VCP",
        meaning: "Video Control Panel"
  },
  {
        abbreviation: "VCRU",
        meaning: "Vapor Cycle Refrigeration Unit"
  },
  {
        abbreviation: "VCS",
        meaning: "Ventilation Control System"
  },
  {
        abbreviation: "VCU",
        meaning: "Video Control Unit"
  },
  {
        abbreviation: "VCU",
        meaning: "Vacuum Control Unit"
  },
  {
        abbreviation: "VDAR",
        meaning: "Virtual DAR"
  },
  {
        abbreviation: "VDB",
        meaning: "VHF Data Broadcast"
  },
  {
        abbreviation: "VDC",
        meaning: "Voltage Direct Current"
  },
  {
        abbreviation: "VDC",
        meaning: "Volts of Direct Current"
  },
  {
        abbreviation: "VDEV",
        meaning: "Vertical Deviation"
  },
  {
        abbreviation: "VDHM",
        meaning: "Variable Displacement Hydraulic Motor"
  },
  {
        abbreviation: "VDL",
        meaning: "VHF Data Link"
  },
  {
        abbreviation: "VDR",
        meaning: "VHF Data Radio"
  },
  {
        abbreviation: "VDU",
        meaning: "Video Display Unit"
  },
  {
        abbreviation: "VE",
        meaning: "Virtual Equipment"
  },
  {
        abbreviation: "VEF",
        meaning: "Critical Engine Failure Speed"
  },
  {
        abbreviation: "VEL",
        meaning: "Velocity"
  },
  {
        abbreviation: "VENT",
        meaning: "Ventilation"
  },
  {
        abbreviation: "VERT",
        meaning: "Vertical"
  },
  {
        abbreviation: "VFE",
        meaning: "Maxi Velocity Flaps Extended"
  },
  {
        abbreviation: "VFG",
        meaning: "Variable Frequency Generator"
  },
  {
        abbreviation: "VFO",
        meaning: "Variable Frequency Oscillator"
  },
  {
        abbreviation: "VFR",
        meaning: "Visual Flight Rules"
  },
  {
        abbreviation: "VFTO",
        meaning: "Velocity Final Take-Off"
  },
  {
        abbreviation: "VG",
        meaning: "Vertical Gyro"
  },
  {
        abbreviation: "VG",
        meaning: "Ground Terminal Module"
  },
  {
        abbreviation: "VGM",
        meaning: "Versatile Graphical Module"
  },
  {
        abbreviation: "VHCU",
        meaning: "Versatile Heating Control Unit"
  },
  {
        abbreviation: "VHDU",
        meaning: "Versatile Heating Data Unit"
  },
  {
        abbreviation: "VHF",
        meaning: "Very High Frequency"
  },
  {
        abbreviation: "VHV",
        meaning: "Very High Voltage"
  },
  {
        abbreviation: "VIB",
        meaning: "Vibration"
  },
  {
        abbreviation: "VIGV",
        meaning: "Variable Inlet Guide Vane"
  },
  {
        abbreviation: "VIMU",
        meaning: "Video Multiplexer Unit"
  },
  {
        abbreviation: "VL",
        meaning: "Virtual Link"
  },
  {
        abbreviation: "VLE",
        meaning: "Velocity Maximum Landing Gear Extend"
  },
  {
        abbreviation: "VLF",
        meaning: "Very Low Frequency"
  },
  {
        abbreviation: "VLO",
        meaning: "Velocity Landing Operations"
  },
  {
        abbreviation: "VLS",
        meaning: "Lowest Selectable Speed"
  },
  {
        abbreviation: "VLS",
        meaning: "Lower Selectable Speed"
  },
  {
        abbreviation: "VLV",
        meaning: "Valve"
  },
  {
        abbreviation: "VM",
        meaning: "Voltmeter"
  },
  {
        abbreviation: "VM",
        meaning: "Virtual Machine"
  },
  {
        abbreviation: "VMBE",
        meaning: "Brake Energy Limited Speed"
  },
  {
        abbreviation: "VMCA",
        meaning: "Velocity Minimum Control Air Speed (air)"
  },
  {
        abbreviation: "VMCG",
        meaning: "Velocity Minimum Control Ground Speed"
  },
  {
        abbreviation: "VMIN",
        meaning: "Minimum Operating Speed"
  },
  {
        abbreviation: "VMO",
        meaning: "Maximum Operating Speed"
  },
  {
        abbreviation: "VMU",
        meaning: "Video Modulator Unit"
  },
  {
        abbreviation: "VMU",
        meaning: "Minimum Unstick Speed"
  },
  {
        abbreviation: "VN",
        meaning: "Grounding Point"
  },
  {
        abbreviation: "VNSU",
        meaning: "Versatile Network Server Unit"
  },
  {
        abbreviation: "VOD",
        meaning: "Video On Demand"
  },
  {
        abbreviation: "VODDSU",
        meaning: "VOD Data Server Unit"
  },
  {
        abbreviation: "VODMU",
        meaning: "VOD Modulator Unit"
  },
  {
        abbreviation: "VODSU",
        meaning: "VOD Server Unit"
  },
  {
        abbreviation: "VOL",
        meaning: "Volume"
  },
  {
        abbreviation: "VOLT",
        meaning: "Voltage"
  },
  {
        abbreviation: "VOR",
        meaning: "VHF Omnidirectional Range"
  },
  {
        abbreviation: "VOR",
        meaning: "VHF Omnidirectional and Radio Range"
  },
  {
        abbreviation: "VOR-D",
        meaning: "VOR-DME"
  },
  {
        abbreviation: "VORTAC",
        meaning: "VOR and TACAN co-located, a VOR combined with UHF tactical air navigation"
  },
  {
        abbreviation: "VORV",
        meaning: "Variable Oil Reduction Valve"
  },
  {
        abbreviation: "VOX",
        meaning: "Voice"
  },
  {
        abbreviation: "VOZC",
        meaning: "Volatile Organic and Ozone Converter"
  },
  {
        abbreviation: "VPN",
        meaning: "Virtual Private Network"
  },
  {
        abbreviation: "VPS",
        meaning: "Value Position Sensor"
  },
  {
        abbreviation: "VQAR",
        meaning: "Virtual QAR"
  },
  {
        abbreviation: "VR",
        meaning: "Rotation Speed"
  },
  {
        abbreviation: "VREF",
        meaning: "Landing Reference Speed"
  },
  {
        abbreviation: "VRU",
        meaning: "Video Reproducer Unit"
  },
  {
        abbreviation: "VS",
        meaning: "Stalling Speed At Which Air Plane Is Controllable"
  },
  {
        abbreviation: "VSB",
        meaning: "Vendor Service Bulletin"
  },
  {
        abbreviation: "VSC",
        meaning: "Vacuum System Controller"
  },
  {
        abbreviation: "VSCF",
        meaning: "Variable Speed Constant Frequency"
  },
  {
        abbreviation: "VSEB",
        meaning: "Video Seat Electronic Box"
  },
  {
        abbreviation: "VSI",
        meaning: "Vertical Speed Indicator"
  },
  {
        abbreviation: "VSS",
        meaning: "Stick Shaker Speed"
  },
  {
        abbreviation: "VSTOL",
        meaning: "Vertical or Short Takeoff and Landing"
  },
  {
        abbreviation: "VSV",
        meaning: "Variable Stator Vane"
  },
  {
        abbreviation: "VSVA",
        meaning: "Variable Stator Vane Actuator"
  },
  {
        abbreviation: "VSWR",
        meaning: "Voltage Standing Wave Ratio"
  },
  {
        abbreviation: "VSWR",
        meaning: "Voltage Standing Wave Rectifier"
  },
  {
        abbreviation: "VTK",
        meaning: "Vertical Track"
  },
  {
        abbreviation: "VTOL",
        meaning: "Vertical Take Off and Landing"
  },
  {
        abbreviation: "VTP",
        meaning: "Vertical Tail Plane"
  },
  {
        abbreviation: "VTR",
        meaning: "Video Tape Reproducer"
  },
  {
        abbreviation: "VTS",
        meaning: "Vacuum Toilet System"
  },
  {
        abbreviation: "VTVM",
        meaning: "Vacuum-Tube Voltmeter"
  },
  {
        abbreviation: "VU",
        meaning: "Virtual Unit"
  },
  {
        abbreviation: "VV",
        meaning: "Velocity Vector"
  },
  {
        abbreviation: "W",
        meaning: "West"
  },
  {
        abbreviation: "W",
        meaning: "White"
  },
  {
        abbreviation: "W",
        meaning: "Weight, West, White, Watt"
  },
  {
        abbreviation: "W/D",
        meaning: "Wiring Diagram"
  },
  {
        abbreviation: "W/W",
        meaning: "Wheel Well"
  },
  {
        abbreviation: "WABSIC",
        meaning: "Wheel And Brake System Integrated Component"
  },
  {
        abbreviation: "WACS",
        meaning: "Wireless Airport Communication System"
  },
  {
        abbreviation: "WAI",
        meaning: "Wing Anti-Ice"
  },
  {
        abbreviation: "WAI",
        meaning: "Wing Anti Ice"
  },
  {
        abbreviation: "WAP",
        meaning: "Wireless Access Point"
  },
  {
        abbreviation: "WARN",
        meaning: "Warning"
  },
  {
        abbreviation: "WBA",
        meaning: "Weight and Balance Application"
  },
  {
        abbreviation: "WBBC",
        meaning: "Weight and Balance Backup Computation"
  },
  {
        abbreviation: "WBC",
        meaning: "Weight & Balance Computer"
  },
  {
        abbreviation: "WBC",
        meaning: "Weight and Balance Computer"
  },
  {
        abbreviation: "WBL",
        meaning: "Wing Buttock Line"
  },
  {
        abbreviation: "WBM",
        meaning: "Weight and Balance Manual"
  },
  {
        abbreviation: "WBS",
        meaning: "Weight and Balance System"
  },
  {
        abbreviation: "WD",
        meaning: "Warning Display"
  },
  {
        abbreviation: "WD",
        meaning: "Wing Datum"
  },
  {
        abbreviation: "WD",
        meaning: "Wiring Diagram"
  },
  {
        abbreviation: "WDB",
        meaning: "Wall Disconnect Box"
  },
  {
        abbreviation: "WDM",
        meaning: "Wiring Diagram Manual"
  },
  {
        abbreviation: "WDO",
        meaning: "Window"
  },
  {
        abbreviation: "WEU",
        meaning: "Warning Electronic Unit"
  },
  {
        abbreviation: "WFM",
        meaning: "Weight of Fuel Meterred"
  },
  {
        abbreviation: "WG",
        meaning: "Wire Group"
  },
  {
        abbreviation: "WG",
        meaning: "Wing"
  },
  {
        abbreviation: "WGD",
        meaning: "Windshield Guidance Display"
  },
  {
        abbreviation: "WGDC",
        meaning: "Windshield Guidance Display Computer"
  },
  {
        abbreviation: "WGDS",
        meaning: "Windshield Guidance Display System"
  },
  {
        abbreviation: "WGL",
        meaning: "Wireless Ground Link"
  },
  {
        abbreviation: "WGT, WT",
        meaning: "Weight"
  },
  {
        abbreviation: "WHC",
        meaning: "Window Heat Computer"
  },
  {
        abbreviation: "WHCU",
        meaning: "Wireless Heater Control Unit"
  },
  {
        abbreviation: "WHL",
        meaning: "Wheel"
  },
  {
        abbreviation: "WHLS",
        meaning: "Wheels"
  },
  {
        abbreviation: "WHR",
        meaning: "Watt Hour"
  },
  {
        abbreviation: "WINDML",
        meaning: "Windmilling"
  },
  {
        abbreviation: "WIP",
        meaning: "Wing Ice Protection"
  },
  {
        abbreviation: "WIPCU",
        meaning: "Water Ice Protection Control Unit"
  },
  {
        abbreviation: "WIPDU",
        meaning: "Water Ice Protection Data Unit"
  },
  {
        abbreviation: "WIPS",
        meaning: "Wing Ice Protection System"
  },
  {
        abbreviation: "WL",
        meaning: "Water Line"
  },
  {
        abbreviation: "WLAN",
        meaning: "Wireless Local Area Network"
  },
  {
        abbreviation: "WLC",
        meaning: "Wing Lower Cover"
  },
  {
        abbreviation: "WLDP",
        meaning: "Warning Light Display Panel"
  },
  {
        abbreviation: "WLG",
        meaning: "Wing Landing Gear"
  },
  {
        abbreviation: "WLIP",
        meaning: "Water Lines Ice Protection"
  },
  {
        abbreviation: "WLIPS",
        meaning: "Water Lines Ice Protection System"
  },
  {
        abbreviation: "WLM",
        meaning: "Wireless LAN Manager"
  },
  {
        abbreviation: "WLU",
        meaning: "Wireless LAN Unit"
  },
  {
        abbreviation: "WMEL",
        meaning: "Wall Mounted Emergency Light"
  },
  {
        abbreviation: "WoffW",
        meaning: "Weight off Wheels"
  },
  {
        abbreviation: "WOJ",
        meaning: "Weight On Jacks"
  },
  {
        abbreviation: "WOW",
        meaning: "Weight On Wheels"
  },
  {
        abbreviation: "WOW",
        meaning: "Weight On Wheel"
  },
  {
        abbreviation: "WPT",
        meaning: "Waypoint"
  },
  {
        abbreviation: "WRCS",
        meaning: "Windshield Rapid Curing System"
  },
  {
        abbreviation: "WRDC",
        meaning: "Wheel Remote Data Concentrator"
  },
  {
        abbreviation: "WRG",
        meaning: "Wiring"
  },
  {
        abbreviation: "WRK",
        meaning: "Work"
  },
  {
        abbreviation: "WRK",
        meaning: "Working"
  },
  {
        abbreviation: "WRP",
        meaning: "Weather Radar Processor"
  },
  {
        abbreviation: "WS",
        meaning: "Wireless System"
  },
  {
        abbreviation: "WS",
        meaning: "Wing Station"
  },
  {
        abbreviation: "WSC",
        meaning: "Window Shade Controller"
  },
  {
        abbreviation: "WSCS",
        meaning: "Wheel Steering Control System"
  },
  {
        abbreviation: "WSCU",
        meaning: "Wireless System Control Unit"
  },
  {
        abbreviation: "WSHLD",
        meaning: "Windshield"
  },
  {
        abbreviation: "WSSG",
        meaning: "Warning System Symbol Generator"
  },
  {
        abbreviation: "WT",
        meaning: "Weight"
  },
  {
        abbreviation: "WTB",
        meaning: "Wing Tip Brake"
  },
  {
        abbreviation: "WTF",
        meaning: "Wheel and Tire Failure"
  },
  {
        abbreviation: "WTR",
        meaning: "Water"
  },
  {
        abbreviation: "WX",
        meaning: "Weather Mode (ND)"
  },
  {
        abbreviation: "WX",
        meaning: "Weather"
  },
  {
        abbreviation: "WX/T",
        meaning: "Weather/Turbulence"
  },
  {
        abbreviation: "WXR",
        meaning: "Weather Radar"
  },
  {
        abbreviation: "X",
        meaning: "Cross"
  },
  {
        abbreviation: "X",
        meaning: "Trans"
  },
  {
        abbreviation: "X BLEED",
        meaning: "Crossbleed"
  },
  {
        abbreviation: "X FEED",
        meaning: "Crossfeed"
  },
  {
        abbreviation: "X LINE",
        meaning: "Crossline"
  },
  {
        abbreviation: "X VALVE",
        meaning: "Cross Valve"
  },
  {
        abbreviation: "XBAR",
        meaning: "Crossbar"
  },
  {
        abbreviation: "XCHECK",
        meaning: "Crosscheck"
  },
  {
        abbreviation: "XCVR",
        meaning: "Transceiver"
  },
  {
        abbreviation: "XDCR",
        meaning: "Transducer"
  },
  {
        abbreviation: "XFER",
        meaning: "Transfer"
  },
  {
        abbreviation: "XFMR",
        meaning: "Transformer"
  },
  {
        abbreviation: "XFR",
        meaning: "Transfer"
  },
  {
        abbreviation: "XG",
        meaning: "Center of Gravity"
  },
  {
        abbreviation: "XING",
        meaning: "Crossing"
  },
  {
        abbreviation: "XLOAD",
        meaning: "Crossload"
  },
  {
        abbreviation: "XLR",
        meaning: "Extra Long Range"
  },
  {
        abbreviation: "XLTR",
        meaning: "Translator"
  },
  {
        abbreviation: "XMISSION",
        meaning: "Transmission"
  },
  {
        abbreviation: "XMIT",
        meaning: "Transmit"
  },
  {
        abbreviation: "XMSN",
        meaning: "Transmission"
  },
  {
        abbreviation: "XMTR",
        meaning: "Transmitter"
  },
  {
        abbreviation: "XPDR",
        meaning: "Transponder"
  },
  {
        abbreviation: "XPDR",
        meaning: "Transmitter"
  },
  {
        abbreviation: "X-TALK",
        meaning: "Cross-talk"
  },
  {
        abbreviation: "XTK",
        meaning: "Cross Track Error"
  },
  {
        abbreviation: "XWIND",
        meaning: "Crosswind"
  },
  {
        abbreviation: "Y",
        meaning: "Yellow"
  },
  {
        abbreviation: "Y/C",
        meaning: "Economy Class"
  },
  {
        abbreviation: "Y/D",
        meaning: "Yaw Damper"
  },
  {
        abbreviation: "YDM",
        meaning: "Yaw Damper Module"
  },
  {
        abbreviation: "Z",
        meaning: "Greenwich Mean Time"
  },
  {
        abbreviation: "Z",
        meaning: "Zone"
  },
  {
        abbreviation: "ZC",
        meaning: "Zone Controller"
  },
  {
        abbreviation: "ZEA",
        meaning: "Zero Emission Aircraft"
  },
  {
        abbreviation: "ZEHPPS",
        meaning: "Zero Emission Hydrogen Power Plant System"
  },
  {
        abbreviation: "ZEROe",
        meaning: "ZERO Emission"
  },
  {
        abbreviation: "ZFCG",
        meaning: "Zero Fuel Center of Gravity"
  },
  {
        abbreviation: "ZFW",
        meaning: "Zero Fuel Weight"
  },
  {
        abbreviation: "ZP",
        meaning: "Pressure Altitude"
    }
]

// Populate the table
function populateTable() {
  const tableBody = document.querySelector('#aviationTable tbody');
  tableBody.innerHTML = '';

  aviationData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${item.abbreviation}</strong></td>
      <td>${item.meaning}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Filter table based on search input with priority levels
function filterTable() {
  const input = document.getElementById('searchBox').value.toUpperCase().trim();
  const rows = document.querySelectorAll('#aviationTable tbody tr');
  
  if (!input) {
    // If search box is empty, show all rows
    rows.forEach(row => {
      row.style.display = '';
      row.dataset.matchPriority = '0';
    });
    return;
  }

  // Classify rows based on match priority
  rows.forEach(row => {
    const abbrev = row.cells[0].textContent.toUpperCase();
    const meaning = row.cells[1].textContent.toUpperCase();
    
    // Priority levels:
    // 1 - Exact match with abbreviation
    // 2 - Partial match with abbreviation (start with)
    // 3 - Partial match with abbreviation (contains)
    // 4 - Exact match with meaning
    // 5 - Partial match with meaning (start with)
    // 6 - Partial match with meaning (contains)
    // 0 - No match (hidden)

    if (abbrev === input) {
      row.style.display = '';
      row.dataset.matchPriority = '1';
    } else if (abbrev.startsWith(input)) {
      row.style.display = '';
      row.dataset.matchPriority = '2';
    } else if (abbrev.includes(input)) {
      row.style.display = '';
      row.dataset.matchPriority = '3';
    } else if (meaning === input) {
      row.style.display = '';
      row.dataset.matchPriority = '4';
    } else if (meaning.startsWith(input)) {
      row.style.display = '';
      row.dataset.matchPriority = '5';
    } else if (meaning.includes(input)) {
      row.style.display = '';
      row.dataset.matchPriority = '6';
    } else {
      row.style.display = 'none';
      row.dataset.matchPriority = '0';
    }
  });

  // Sort the visible rows based on match priority
  const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
  const tbody = document.querySelector('#aviationTable tbody');
  
  // Sort from highest priority (1) to lowest (6)
  visibleRows.sort((a, b) => {
    return parseInt(a.dataset.matchPriority) - parseInt(b.dataset.matchPriority);
  });

  // Reorder the rows in the table
  visibleRows.forEach(row => {
    tbody.appendChild(row);
  });
}
// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  populateTable();
});
function loadSupplements() {
  const tbody = document.getElementById("supplementTable").querySelector("tbody");
  tbody.innerHTML = "";

  db.ref("supplements").on("child_added", snapshot => {
    const data = snapshot.val();
    const key = snapshot.key;
    addSupplementRow(data.abbr, data.meaning, data.status, key);
  });
}

function submitSupplement() {
  const abbr = document.getElementById("newAbbr").value.trim();
  const meaning = document.getElementById("newMeaning").value.trim();

  if (!abbr || !meaning) {
    alert("Please enter both abbreviation and meaning.");
    return;
  }

  db.ref("supplements").push({
    abbr,
    meaning,
    status: "Pending"
  });

  document.getElementById("newAbbr").value = "";
  document.getElementById("newMeaning").value = "";
}

function addSupplementRow(abbr, meaning, status, key) {
  const tbody = document.getElementById("supplementTable").querySelector("tbody");
  const row = tbody.insertRow();

  row.insertCell(0).textContent = abbr;
  row.insertCell(1).textContent = meaning;
  row.insertCell(2).textContent = status;

  const actionCell = row.insertCell(3);
  const approveBtn = document.createElement("button");
  approveBtn.textContent = "Approve";
  approveBtn.onclick = () => {
    db.ref("supplements/" + key).update({ status: "Approved" });
    row.cells[2].textContent = "Approved";
    approveBtn.remove();
  };
  if (status === "Pending") actionCell.appendChild(approveBtn);
  else actionCell.textContent = "-";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "8px";
  deleteBtn.onclick = () => {
    if (confirm("Are you sure to delete this entry?")) {
      db.ref("supplements/" + key).remove();
      row.remove();
    }
  };
  actionCell.appendChild(deleteBtn);
}


function updateStatus(abbr, newStatus) {
  const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  const updated = stored.map(entry => entry.abbr === abbr ? { ...entry, status: newStatus } : entry);
  localStorage.setItem("supplementAbbr", JSON.stringify(updated));
}

// Load saved entries on page load
window.addEventListener("DOMContentLoaded", loadSupplements);







// // Admin credentials (in a real app, these would be stored securely server-side)
// const ADMIN_CREDENTIALS = {
//   username: "admin",
//   password: "Aviatermrefer102" // In production, use proper password hashing
// };

// // Session management
// let isAdminLoggedIn = false;

// // DOM elements
// const loginModal = document.getElementById("loginModal");
// const loginForm = document.getElementById("loginForm");
// const closeModal = document.querySelector(".close");

// // Populate the table
// function populateTable() {
//   const tableBody = document.querySelector('#aviationTable tbody');
//   tableBody.innerHTML = '';

//   aviationData.forEach(item => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td><strong>${item.abbreviation}</strong></td>
//       <td>${item.meaning}</td>
//     `;
//     tableBody.appendChild(row);
//   });
// }

// // Filter table based on search input
// function filterTable() {
//   const input = document.getElementById('searchBox').value.toUpperCase();
//   const rows = document.querySelectorAll('#aviationTable tbody tr');

//   rows.forEach(row => {
//     const abbrev = row.cells[0].textContent.toUpperCase();
//     const meaning = row.cells[1].textContent.toUpperCase();
//     if (abbrev.includes(input) || meaning.includes(input)) {
//       row.style.display = '';
//     } else {
//       row.style.display = 'none';
//     }
//   });
// }

// // Supplement functions
// function loadSupplements() {
//   const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
//   const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
//   table.innerHTML = "";

//   stored.forEach(entry => addSupplementRow(entry.abbr, entry.meaning, entry.status));
// }

// function submitSupplement() {
//   const abbr = document.getElementById("newAbbr").value.trim();
//   const meaning = document.getElementById("newMeaning").value.trim();

//   if (!abbr || !meaning) {
//     alert("Please enter both abbreviation and meaning.");
//     return;
//   }

//   const entry = { abbr, meaning, status: "Pending Approval" };
//   const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
//   stored.push(entry);
//   localStorage.setItem("supplementAbbr", JSON.stringify(stored));

//   addSupplementRow(abbr, meaning, entry.status);

//   document.getElementById("newAbbr").value = "";
//   document.getElementById("newMeaning").value = "";
// }

// function addSupplementRow(abbr, meaning, status) {
//   const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
//   const newRow = table.insertRow();

//   newRow.insertCell(0).textContent = abbr;
//   newRow.insertCell(1).textContent = meaning;
//   newRow.insertCell(2).textContent = status;

//   const actionCell = newRow.insertCell(3);
//   if (status === "Pending Approval" && isAdminLoggedIn) {
//     const approveBtn = document.createElement("button");
//     approveBtn.textContent = "Approve";
//     approveBtn.className = "approve-btn";
//     approveBtn.onclick = function() {
//       newRow.cells[2].textContent = "Approved";
//       updateStatus(abbr, "Approved");
//       approveBtn.remove();
//     };
//     actionCell.appendChild(approveBtn);
//   }
// }

// function updateStatus(abbr, newStatus) {
//   const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
//   const updated = stored.map(entry => entry.abbr === abbr ? { ...entry, status: newStatus } : entry);
//   localStorage.setItem("supplementAbbr", JSON.stringify(updated));
// }

// // Login functions
// function showLoginModal() {
//   loginModal.style.display = "block";
// }

// function hideLoginModal() {
//   loginModal.style.display = "none";
// }

// function handleLogin(event) {
//   event.preventDefault();
  
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
  
//   if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//     isAdminLoggedIn = true;
//     hideLoginModal();
//     loadSupplements(); // Reload supplements to show approve buttons
//     alert("Login successful! You can now approve abbreviations.");
//   } else {
//     alert("Invalid credentials. Please try again.");
//   }
  
//   // Clear form
//   document.getElementById("username").value = "";
//   document.getElementById("password").value = "";
// }

// // Event Listeners
// closeModal.onclick = hideLoginModal;
// window.onclick = function(event) {
//   if (event.target === loginModal) {
//     hideLoginModal();
//   }
// };

// loginForm.addEventListener("submit", handleLogin);

// // Initialize the page
// window.addEventListener("DOMContentLoaded", loadSupplements);













// function loadSupplements() {
//   const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
//   const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
//   table.innerHTML = "";

//   stored.forEach(entry => addSupplementRow(entry.abbr, entry.meaning, entry.status));
// }

// function submitSupplement() {
//   const abbr = document.getElementById("newAbbr").value.trim();
//   const meaning = document.getElementById("newMeaning").value.trim();

//   if (!abbr || !meaning) {
//     alert("Please enter both abbreviation and meaning.");
//     return;
//   }

//   const entry = { abbr, meaning, status: "Pending Approval" };
//   const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
//   stored.push(entry);
//   localStorage.setItem("supplementAbbr", JSON.stringify(stored));

//   addSupplementRow(abbr, meaning, entry.status);

//   document.getElementById("newAbbr").value = "";
//   document.getElementById("newMeaning").value = "";
// }

// function addSupplementRow(abbr, meaning, status) {
//   const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
//   const newRow = table.insertRow();

//   newRow.insertCell(0).textContent = abbr;
//   newRow.insertCell(1).textContent = meaning;
//   newRow.insertCell(2).textContent = status;

//   const actionCell = newRow.insertCell(3);
//   if (status === "Pending Approval") {
//     const approveBtn = document.createElement("button");
//     approveBtn.textContent = "Approve";
//     approveBtn.onclick = function () {
//       newRow.cells[2].textContent = "Approved";
//       updateStatus(abbr, "Approved");
//       approveBtn.remove();
//     };
//     actionCell.appendChild(approveBtn);
//   } else {
//     actionCell.textContent = "-";
//   }

//   const selectCell = newRow.insertCell(4);
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.dataset.abbr = abbr;
//   selectCell.appendChild(checkbox);
// }

// function updateStatus(abbr, newStatus) {
//   const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
//   const updated = stored.map(entry => entry.abbr === abbr ? { ...entry, status: newStatus } : entry);
//   localStorage.setItem("supplementAbbr", JSON.stringify(updated));
// }

// function removeSelected() {
//   const checkboxes = document.querySelectorAll('#supplementTable tbody input[type="checkbox"]:checked');
//   let stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
//   const abbrsToRemove = Array.from(checkboxes).map(cb => cb.dataset.abbr);
//   stored = stored.filter(entry => !abbrsToRemove.includes(entry.abbr));
//   localStorage.setItem("supplementAbbr", JSON.stringify(stored));
//   loadSupplements();
// }

// function removeAll() {
//   if (confirm("Are you sure you want to remove all supplement entries?")) {
//     localStorage.removeItem("supplementAbbr");
//     loadSupplements();
//   }
// }

// function downloadCSV() {
//   db.ref("supplements").once("value", snapshot => {
//     const data = snapshot.val();
//     let csv = "Abbreviation,Meaning,Status\n";
//     for (let key in data) {
//       const entry = data[key];
//       csv += `"${entry.abbr}","${entry.meaning}","${entry.status}"\n`;
//     }

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "supplements.csv";
//     a.click();
//     URL.revokeObjectURL(url);
//   });
// }


// function enableAdminMode() {
//   document.getElementById("adminControls").style.display = "block";
// }

// // Load saved entries on page load
// window.addEventListener("DOMContentLoaded", () => {
//   loadSupplements();

//   // Fake admin login simulation for demo:
//   // Replace with real auth in production
//   const isAdmin = true; // or from login logic
//   if (isAdmin) enableAdminMode();
// });





// // Firebase Auth
// const auth = firebase.auth();

// // Đăng nhập admin
// function loginAdmin() {
//   const email = document.getElementById("adminEmail").value.trim();
//   const password = document.getElementById("adminPassword").value.trim();

//   auth.signInWithEmailAndPassword(email, password)
//     .then(() => {
//       document.getElementById("adminLogin").style.display = "none";
//       document.getElementById("adminControls").style.display = "block";
//     })
//     .catch(error => {
//       document.getElementById("loginError").textContent = "Login failed: " + error.message;
//     });
// }

// // Đăng xuất
// function logoutAdmin() {
//   auth.signOut().then(() => {
//     document.getElementById("adminControls").style.display = "none";
//     document.getElementById("adminLogin").style.display = "block";
//   });
// }

// // Theo dõi trạng thái đăng nhập
// auth.onAuthStateChanged(user => {
//   if (user) {
//     document.getElementById("adminLogin").style.display = "none";
//     document.getElementById("adminControls").style.display = "block";
//   } else {
//     document.getElementById("adminLogin").style.display = "block";
//     document.getElementById("adminControls").style.display = "none";
//   }
// });
