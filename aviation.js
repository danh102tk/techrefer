// Aviation abbreviations data (cleaned from your PDF)
const aviationData = [
  { abbreviation: "A99", meaning: "99% of max specific range in cruise" },
  { abbreviation: "A/C", meaning: "Air Conditioning" },
  { abbreviation: "A/C", meaning: "Aircraft" },
  { abbreviation: "A/D", meaning: "Analog/Digital" },
  { abbreviation: "A/G", meaning: "AirGround" },
  { abbreviation: "A/P", meaning: "AutoPilot" },
  { abbreviation: "A/S", meaning: "AirSpeed" },
  { abbreviation: "A/SKID", meaning: "Anti Skid" },
  { abbreviation: "A/T", meaning: "AutoThrottle" },
  { abbreviation: "A & P", meaning: "Aircraft Technician" },
  { abbreviation: "A", meaning: "Ampere" },
  { abbreviation: "AAM", meaning: "Air-to-Air Missile" },
  { abbreviation: "AAS", meaning: "Airport Advisory Service" },
  { abbreviation: "ABC", meaning: "After Botom Center" },
  { abbreviation: "ABD", meaning: "AirBus Directives" },
  { abbreviation: "ABS", meaning: "Absolute" },
  { abbreviation: "ABSV", meaning: "Alternate Brake Selector Valve" },
  { abbreviation: "AC", meaning: "Alternating Current" },
  { abbreviation: "AC", meaning: "Advisory Circular" },
  { abbreviation: "AC", meaning: "Air Corps" },
  { abbreviation: "ACARS", meaning: "Arinc Communications Addressing and Reporting System" },
  { abbreviation: "ACC", meaning: "Active Clearance Control" },
  { abbreviation: "ACCEL", meaning: "Acceleration" },
  { abbreviation: "ACCLRM", meaning: "Accelerometer" },
  { abbreviation: "ACDO", meaning: "Air Carrier District Office" },
  { abbreviation: "ACE", meaning: "Air Cargo Equipment" },
  { abbreviation: "ACHC", meaning: "Aft Cargo Heat Computer" },
  { abbreviation: "ACK", meaning: "Acknowledgement" },
  { abbreviation: "ACM", meaning: "Air Cycle Machine" },
  { abbreviation: "ACM", meaning: "APU conditions monitoring" },
  { abbreviation: "ACMP", meaning: "Alternating Current Motor Pump/elect . hydr . pump" },
  { abbreviation: "ACMS", meaning: "Aircraft Condition Monitoring System" },
  { abbreviation: "ACP", meaning: "Area Call Panel" },
  { abbreviation: "ACP", meaning: "Audio Control Panel" },
  { abbreviation: "ACQ", meaning: "Acquire" },
  { abbreviation: "ACT", meaning: "Active" },
  { abbreviation: "AD", meaning: "Airworthiness Directive" },
  { abbreviation: "AD", meaning: "Ashless Dispersant" },
  { abbreviation: "ADC", meaning: "Air Data Computer" },
  { abbreviation: "ADEPT", meaning: "Aircraft Data Engine Performance" },
  { abbreviation: "ADF", meaning: "Automatic Direction Finder" },
  { abbreviation: "ADI", meaning: "Attitude Director Indiccator" },
  { abbreviation: "ADIRS", meaning: "Air Data and Inertial Reference" },
  { abbreviation: "ADIRU", meaning: "Air Data Inertial Reference Unit" },
  { abbreviation: "ADIZ", meaning: "Air Defense Identification Zone" },
  { abbreviation: "ADM", meaning: "Air Data Module" },
  { abbreviation: "ADP", meaning: "Air Driven Pump/ Air Driven Demand Hydraulic Pupm" },
  { abbreviation: "ADV", meaning: "Advisory" },
  { abbreviation: "AEB", meaning: "Airline Engineering Bulletin" },
  { abbreviation: "AEBG", meaning: "Aircraft Engine Business Group" },
  { abbreviation: "AEVC", meaning: "Avionics Equiments Ventilation Computer" },
  { abbreviation: "AF", meaning: "Audio Frequency" },
  { abbreviation: "AFC", meaning: "Automatic Frequency Control" },
  { abbreviation: "AFCS", meaning: "Automatic Flight Control System" },
  { abbreviation: "AFDS", meaning: "Autopilot Flight Director System" },
  { abbreviation: "AFOLTS", meaning: "Automatic Fire/Over Heat Logic and Test System" },
  { abbreviation: "AFS", meaning: "Autoflight System/ Automatic Flight System" },
  { abbreviation: "AFU", meaning: "Autofeather Unit / Automatic Feathering Unit" },
  { abbreviation: "AGB", meaning: "Accessory Gearbox" },
  { abbreviation: "AGL", meaning: "Above Ground Level" },
  { abbreviation: "AHMS", meaning: "APU Health Monitoring System" },
  { abbreviation: "AIDS", meaning: "Aircraft Integrat Ed Data System" },
  { abbreviation: "AIL", meaning: "Aileron" },
  { abbreviation: "AIM", meaning: "Airman's Information Manual" },
  { abbreviation: "AIP", meaning: "Attendant Indication Panel" },
  { abbreviation: "AIRAC", meaning: "Aeronautical Information Regulation And Control" },
  { abbreviation: "AIU", meaning: "Audio Interface Unit" },
  { abbreviation: "AIV", meaning: "Accumulator Isolation Valve" },
  { abbreviation: "ALF", meaning: "Aft Looking Forward" },
  { abbreviation: "ALNOT", meaning: "Alert Notice" },
  { abbreviation: "ALT", meaning: "Altitude" },
  { abbreviation: "ALT HOLD", meaning: "Altitude Hold" },
  { abbreviation: "ALTM", meaning: "Altimeter" },
  { abbreviation: "ALTN", meaning: "Alternate" },
  { abbreviation: "ALTRV", meaning: "Altitude Reservation" },
  { abbreviation: "ALU", meaning: "Arithmetic and Logic Unit" },
  { abbreviation: "AM", meaning: "Amplitude Modulation" },
  { abbreviation: "AMB", meaning: "Ambient" },
  { abbreviation: "AMC", meaning: "Automatic Mixture Control" },
  { abbreviation: "AMM", meaning: "Aircraft Maintenance Manual" },
  { abbreviation: "AMP", meaning: "Amperes" },
  { abbreviation: "AMTOSS", meaning: "Aircraft Maintenance Task Oriented Support System" },
  { abbreviation: "AMU", meaning: "Audio Management Unit" },
  { abbreviation: "AN", meaning: "Air Force-Navy Standard" },
  { abbreviation: "ANNUNC", meaning: "Annunciator" },
  { abbreviation: "ANT", meaning: "Antenna" },
  { abbreviation: "AOA", meaning: "Angle of Attack" },
  { abbreviation: "AOC", meaning: "Air/Oil Heat Exchanger" },
  { abbreviation: "AOC", meaning: "Aircraft Operation Certificate" },
  { abbreviation: "AOG", meaning: "Aircraft On Ground" },
  { abbreviation: "AP", meaning: "Auto Pilot" },
  { abbreviation: "APB", meaning: "Auxiliary Power Breaker" },
  { abbreviation: "APC", meaning: "Absolute Pressure Controller" },
  { abbreviation: "APD", meaning: "Apoproach Progress Display" },
  { abbreviation: "APGCU", meaning: "Auxilary Power Generator Control Unit" },
  { abbreviation: "API", meaning: "American Petroleum Institute" },
  { abbreviation: "APL", meaning: "Airplane" },
  { abbreviation: "APM", meaning: "Aircraft Performance Monitoring" },
  { abbreviation: "APP", meaning: "Approach" },
  { abbreviation: "APPROX", meaning: "Approximately" },
  { abbreviation: "APPU", meaning: "Assymetry Position Pick-off Unit" },
  { abbreviation: "APU", meaning: "Auxiliary Power Unit" },
  { abbreviation: "ARINC", meaning: "Aeronautical Radio Incorporate" },
  { abbreviation: "ARPT", meaning: "Airport" },
  { abbreviation: "ARSR", meaning: "Air Route Surveillance Radar" },
  { abbreviation: "ARTCC", meaning: "Air Route Trraffic Control Center" },
  { abbreviation: "ARTS", meaning: "Automated Radar Terminal Systems" },
  { abbreviation: "ASA", meaning: "Airborne Separation Assurance" },
  { abbreviation: "ASA", meaning: "Autoland Status Annunciator" },
  { abbreviation: "ASAP", meaning: "As Soon As Possible" },
  { abbreviation: "ASCII", meaning: "American Standard Code for Information Interchange" },
  { abbreviation: "ASCTU", meaning: "Air Supply Control and Test Unit" },
  { abbreviation: "ASDE", meaning: "Airport Surface Detection Equipment" },
  { abbreviation: "ASI", meaning: "Air Speed Indicator" },
  { abbreviation: "ASM", meaning: "Airline Specific Memory" },
  { abbreviation: "ASM", meaning: "Air To Surface Missile" },
  { abbreviation: "ASN", meaning: "Aerospatiale Standard Norme" },
  { abbreviation: "ASP", meaning: "Aircom Service Processor" },
  { abbreviation: "ASP", meaning: "Audio Selector Panel" },
  { abbreviation: "ASR", meaning: "Airport Surveillance Radar" },
  { abbreviation: "ASSY", meaning: "Assembly" },
  { abbreviation: "ASTM", meaning: "American Society of Testing Materials" },
  { abbreviation: "ASYM", meaning: "Assymetrical" },
  { abbreviation: "ATA", meaning: "Airline Transport Association" },
  { abbreviation: "ATB", meaning: "Air France Technical Bulletin" },
  { abbreviation: "ATC", meaning: "After Top Center" },
  { abbreviation: "ATC", meaning: "Air Trafic Control" },
  { abbreviation: "ATCCC", meaning: "Air Traffic Control Command Center" },
  { abbreviation: "ATC/DABS", meaning: "Air Traffic Control / Discrete Address Beacon System" },
  { abbreviation: "ATE", meaning: "Automated Test Equipment" },
  { abbreviation: "ATHR", meaning: "Auto Thrust" },
  { abbreviation: "ATIS", meaning: "Automatic Terminal Information Service" },
  { abbreviation: "ATO", meaning: "Aborted Take Off" },
  { abbreviation: "ATP", meaning: "Airline Transport Pilot" },
  { abbreviation: "ATR", meaning: "Airline Transport Rating" },
  { abbreviation: "ATR", meaning: "Austin Trum Bull Radio" },
  { abbreviation: "ATS", meaning: "Auto Thrust System" },
  { abbreviation: "ATT", meaning: "Attitude" },
  { abbreviation: "ATTND", meaning: "Attendant" },
  { abbreviation: "AUG", meaning: "Augmentation" },
  { abbreviation: "AUTO", meaning: "Automatic" },
  { abbreviation: "AUX", meaning: "Auxiliary" },
  { abbreviation: "AVC", meaning: "Automatic Volume Control" },
  { abbreviation: "AVIONICS", meaning: "Aviation Electronics" },
  { abbreviation: "AVM", meaning: "Aircraft Vibration Monitoring/ Airborne Vibration Monitor" },
  { abbreviation: "AVNCS", meaning: "Avionics" },
  { abbreviation: "AVS", meaning: "Audio Visual System" },
  { abbreviation: "AWG", meaning: "American Wire Gage" },
  { abbreviation: "AWY", meaning: "Airway" },
  { abbreviation: "B/CRS", meaning: "Back Course" },
  { abbreviation: "BAL", meaning: "Balance" },
  { abbreviation: "BARO", meaning: "Barometric" },
  { abbreviation: "BAT", meaning: "Battery" },
  { abbreviation: "BBC", meaning: "Before Bottom Center" },
  { abbreviation: "BCD", meaning: "Binary Coded Decirnal" },
  { abbreviation: "BCL", meaning: "Battery Charge Limiter" },
  { abbreviation: "BCV", meaning: "Bottom Dead Center" },
  { abbreviation: "BDC", meaning: "Bottom Dead Center" },
  { abbreviation: "BFE", meaning: "Buyer Furnished Equipment" },
  { abbreviation: "BFO", meaning: "Beat Frequency Oscillator" },
  { abbreviation: "BIM", meaning: "Blade Inspection Method" },
  { abbreviation: "BIS", meaning: "Blade Inspection System" },
  { abbreviation: "BIT", meaning: "Built -In Test" },
  { abbreviation: "BITE", meaning: "Built-In Test Equipment" },
  { abbreviation: "BK", meaning: "Brake" },
  { abbreviation: "BKGRD", meaning: "Background" },
  { abbreviation: "BL", meaning: "Bend Tangent Line" },
  { abbreviation: "BL", meaning: "Buttock Line" },
  { abbreviation: "BLD", meaning: "Bleed" },
  { abbreviation: "BMC", meaning: "Bleed Management Computer/ Bleed Air Monitoring Computer" },
  { abbreviation: "BMEP", meaning: "Brake Mean _ Effective Pressure" },
  { abbreviation: "BMV", meaning: "Brake Metering Valve" },
  { abbreviation: "BNR", meaning: "Binary" },
  { abbreviation: "BPCU", meaning: "Bus Power Control Unit" },
  { abbreviation: "BRG", meaning: "Bearing" },
  { abbreviation: "BRKR(S)", meaning: "Breaker(s)" },
  { abbreviation: "BRT", meaning: "Bright" },
  { abbreviation: "BSCU", meaning: "Brake and Steering Control Unit" },
  { abbreviation: "BSFC", meaning: "Brake Specific Fuel Consumption" },
  { abbreviation: "BSI", meaning: "Borescope Inspection" },
  { abbreviation: "BSV", meaning: "Burner Staging Valve" },
  { abbreviation: "BTB", meaning: "Bus Tie Breaker" },
  { abbreviation: "BTB(S)", meaning: "Bus Tie Breaker(s)" },
  { abbreviation: "BTC", meaning: "Before Top Center" },
  { abbreviation: "BTC", meaning: "Bus Transfer Contactor" },
  { abbreviation: "BTL", meaning: "Bottle" },
  { abbreviation: "BTMS", meaning: "Brake Temperature Monitoring System" },
  { abbreviation: "BVCU", meaning: "Bleed Valve Control Unit" },
  { abbreviation: "C", meaning: "Center" },
  { abbreviation: "C/B", meaning: "Circuit Breaker" },
  { abbreviation: "C/M", meaning: "Command/Monitor" },
  { abbreviation: "C.G.", meaning: "Center of Gravity" },
  { abbreviation: "CAA", meaning: "Civil Aviation Authority (UK)" },
  { abbreviation: "CAC", meaning: "Crew Alerting Computer" },
  { abbreviation: "CAD", meaning: "Computer Assisted Design" },
  { abbreviation: "CAL", meaning: "Cockpit Amplifier Loudspeaker" },
  { abbreviation: "CAM", meaning: "Cabin Assignment Module" },
  { abbreviation: "CAP", meaning: "Capture" },
  { abbreviation: "CAPT", meaning: "Captain" },
  { abbreviation: "CAS", meaning: "Calibrated Airspeed" },
  { abbreviation: "CAT", meaning: "Category" },
  { abbreviation: "CAT", meaning: "Clear Air Turbulence" },
  { abbreviation: "CB,C/B", meaning: "Circuit Breaker" },
  { abbreviation: "CBMS", meaning: "Circuit Breaker Monitoring System" },
  { abbreviation: "CBP", meaning: "(HP) Compressor Bleed Pressure" },
  { abbreviation: "CBT", meaning: "Computer Based Training" },
  { abbreviation: "CCA", meaning: "Central Control Actuator" },
  { abbreviation: "CCCV", meaning: "Core Compartment Cooling Valve" },
  { abbreviation: "CCFG", meaning: "Compact Constant Frequency Generator" },
  { abbreviation: "CCL", meaning: "Convective Condensation Level" },
  { abbreviation: "CCW", meaning: "Counterclockwise" },
  { abbreviation: "CDI", meaning: "Course Deviation Indicator" },
  { abbreviation: "CDL", meaning: "Configuration Deviation List" },
  { abbreviation: "CDP", meaning: "(HP) Compressor Discharge Pressure" },
  { abbreviation: "CDU", meaning: "Control Display Unit" },
  { abbreviation: "CERAP", meaning: "Combined Center Rapcon" },
  { abbreviation: "CESM", meaning: "Commercial Engine Service Memorandum" },
  { abbreviation: "CF", meaning: "Course to a Fixed Waypoint" },
  { abbreviation: "CFDIU", meaning: "Centralized Fault Display Interface Unit" },
  { abbreviation: "CFDS", meaning: "Centralized Fault Display System" },
  { abbreviation: "CFM", meaning: "GE's Commercial Fan (CF) + SNECMA's Motors (M)" },
  { abbreviation: "CFM", meaning: "Cubic Feet per Minute" },
  { abbreviation: "CFMI", meaning: "Joint CFM International" },
  { abbreviation: "CFR", meaning: "Coopetative Fuel Research" },
  { abbreviation: "CG", meaning: "Center of Gravity" },
  { abbreviation: "CHAN, CH", meaning: "Channel" },
  { abbreviation: "CHATV", meaning: "Channel Active" },
  { abbreviation: "CHG", meaning: "Change" },
  { abbreviation: "CHK", meaning: "Check" },
  { abbreviation: "CHR", meaning: "Chronograph" },
  { abbreviation: "CHRGR", meaning: "Charger" },
  { abbreviation: "CIDS", meaning: "Cabin Inter Communication Data System" },
  { abbreviation: "CIP", meaning: "(HP) Compressor Inlet Pressure" },
  { abbreviation: "CIS", meaning: "Cabin Interphone System" },
  { abbreviation: "CIT", meaning: "(HP) Compressor Inlet Temperature" },
  { abbreviation: "CK, CHK", meaning: "Check" },
  { abbreviation: "CL", meaning: "Close" },
  { abbreviation: "CL", meaning: "Condition Lever" },
  { abbreviation: "CLA", meaning: "Condition Lever Angle" },
  { abbreviation: "CLB", meaning: "Climb" },
  { abbreviation: "CLG", meaning: "Ceiling" },
  { abbreviation: "CLR", meaning: "Clear" },
  { abbreviation: "CLSD", meaning: "Closed" },
  { abbreviation: "CMD", meaning: "Command" },
  { abbreviation: "CMM", meaning: "Calibration Memory Module" },
  { abbreviation: "CNX", meaning: "Cancelled" },
  { abbreviation: "COC", meaning: "Customer Originated Change" },
  { abbreviation: "CODEP", meaning: "High Temperature Coating" },
  { abbreviation: "COM", meaning: "Command" },
  { abbreviation: "COMM", meaning: "Communication" },
  { abbreviation: "COMP", meaning: "Compressor" },
  { abbreviation: "COMPT", meaning: "Compartment" },
  { abbreviation: "CON", meaning: "Continuous" },
  { abbreviation: "COND", meaning: "Condition" },
  { abbreviation: "CONFIG", meaning: "Configuration" },
  { abbreviation: "CONN", meaning: "Connection" },
  { abbreviation: "CONT", meaning: "Continuous" },
  { abbreviation: "CONT", meaning: "Control" },
  { abbreviation: "CORR", meaning: "Correction" },
  { abbreviation: "CO RTE", meaning: "Company Route" },
  { abbreviation: "COSL", meaning: "Component Operating and Storage Limits" },
  { abbreviation: "CP", meaning: "Center of Pressure" },
  { abbreviation: "CP", meaning: "Control Panel" },
  { abbreviation: "CPCS", meaning: "Cabin Pressure Control System" },
  { abbreviation: "CPTR", meaning: "Computer" },
  { abbreviation: "CIF", meaning: "Compressor Inlet Temperature" },
  { abbreviation: "CPCU", meaning: "Cabin Pressure Control Unit" },
  { abbreviation: "CPU", meaning: "Central Processing Unit" },
  { abbreviation: "CR", meaning: "Carriage Return" },
  { abbreviation: "CR", meaning: "Cross" },
  { abbreviation: "CRC", meaning: "Continuous Repetitive Chime" },
  { abbreviation: "CRG", meaning: "Cargo" },
  { abbreviation: "CRS", meaning: "Course" },
  { abbreviation: "CRT", meaning: "Cathode Ray Tube" },
  { abbreviation: "CRZ", meaning: "Cruise" },
  { abbreviation: "CSD", meaning: "Constant Speed Drive" },
  { abbreviation: "CSEU", meaning: "Control System Electronic Unit" },
  { abbreviation: "CSI", meaning: "Cycles Since Installation" },
  { abbreviation: "CSM", meaning: "Computer Software Manual" },
  { abbreviation: "CS", meaning: "Constant Speed Drive" },
  { abbreviation: "M/G", meaning: "Motor/Generator" },
  { abbreviation: "CSN", meaning: "Cycles Since New" },
  { abbreviation: "CSTR", meaning: "Constraint" },
  { abbreviation: "CSU", meaning: "Commande Sensor Unit" },
  { abbreviation: "CT", meaning: "Current Transformer" },
  { abbreviation: "CTAF", meaning: "Common Traffic Advisory Frequency" },
  { abbreviation: "CTD", meaning: "Column Timer Decoder" },
  { abbreviation: "CTL PNL", meaning: "Control Panel" },
  { abbreviation: "CTR", meaning: "Center" },
  { abbreviation: "CTR", meaning: "Contour" },
  { abbreviation: "CTS", meaning: "Clear To Send" },
  { abbreviation: "CU", meaning: "Control Unit" },
  { abbreviation: "CVFP", meaning: "Charted Visual Flight Procedure" },
  { abbreviation: "CVR", meaning: "Cockpit Voice Recorder" },
  { abbreviation: "CW", meaning: "Clockwise" },
  { abbreviation: "cw", meaning: "Continuous Wave" },
  { abbreviation: "cw", meaning: "Carrier Wave" },
  { abbreviation: "CWS", meaning: "Control Wheel Steering" },
  { abbreviation: "D&C", meaning: "Delays and Cancellations" },
  { abbreviation: "DA", meaning: "Drift Angle" },
  { abbreviation: "DABS", meaning: "Discrete Addressable Beacon System" },
  { abbreviation: "DAC", meaning: "Digital to Analog Converter" },
  { abbreviation: "DADC", meaning: "Digital Air Data Computer" },
  { abbreviation: "DAM", meaning: "Data Acquisition Module" },
  { abbreviation: "DAN", meaning: "Deca Newton" },
  { abbreviation: "DAR", meaning: "Digital Aids Recorder" },
  { abbreviation: "dB", meaning: "Decibel" },
  { abbreviation: "DC", meaning: "Direct Current" },
  { abbreviation: "DC1", meaning: "Device Control 1" },
  { abbreviation: "DCA", meaning: "Dedicated Control Alternator" },
  { abbreviation: "DCV", meaning: "Directional Control Valve" },
  { abbreviation: "DDM", meaning: "Difference in Depth of Modulation" },
  { abbreviation: "DDRMI", meaning: "Digital Distance and Radio Magnetic Indicator" },
  { abbreviation: "DE", meaning: "Decoder Encoder" },
  { abbreviation: "DECEL", meaning: "Decelerate" },
  { abbreviation: "DECR", meaning: "Decrease" },
  { abbreviation: "DED", meaning: "Dedicated" },
  { abbreviation: "DEG", meaning: "Degree" },
  { abbreviation: "DEM", meaning: "Demand" },
  { abbreviation: "DEPR", meaning: "Depressurize" },
  { abbreviation: "DEPT", meaning: "Departure" },
  { abbreviation: "DES", meaning: "Descent" },
  { abbreviation: "DESN", meaning: "Decision" },
  { abbreviation: "DEST", meaning: "Destination" },
  { abbreviation: "DET", meaning: "Detector" },
  { abbreviation: "DEU", meaning: "Decoder/Encoder Unit" },
  { abbreviation: "DEV", meaning: "Deviation" },
  { abbreviation: "DEWIZ", meaning: "Distance Early Warning Identification Zone" },
  { abbreviation: "DFA", meaning: "Delayed Flap Approach" },
  { abbreviation: "DFDAU", meaning: "Digital Flight Data Acquisition Unit" },
  { abbreviation: "DFDR", meaning: "Digital Flight Data Recorder" },
  { abbreviation: "DFDRS", meaning: "Digital Flight Data Recorder System" },
  { abbreviation: "DFS", meaning: "Digital Frequency Selection" },
  { abbreviation: "DH", meaning: "Decision Height" },
  { abbreviation: "DIFF", meaning: "Differential" },
  { abbreviation: "DIR", meaning: "Direction/Director" },
  { abbreviation: "DISC", meaning: "Disconnect /Discrete" },
  { abbreviation: "DISCH", meaning: "Discharge" },
  { abbreviation: "DISCONT", meaning: "Discontinued" },
  { abbreviation: "DISP", meaning: "Dispatch" },
  { abbreviation: "DIST", meaning: "Distance" },
  { abbreviation: "DITS", meaning: "Digital Information Transfer System" },
  { abbreviation: "DK", meaning: "Deck" },
  { abbreviation: "DMC", meaning: "Direct Maintenance Cost" },
  { abbreviation: "DMC", meaning: "Display Management Computer" },
  { abbreviation: "DME", meaning: "Distance Measuring Equipment" },
  { abbreviation: "DMMC", meaning: "Documentation Manuel De Maintenance Constructeur" },
  { abbreviation: "DMU", meaning: "Data Management Unit" },
  { abbreviation: "DN", meaning: "Down" },
  { abbreviation: "DNTKFX", meaning: "Down Track Fix" },
  { abbreviation: "DOC", meaning: "Direct Operating Cost" },
  { abbreviation: "DOD", meaning: "Domestic Object Damage" },
  { abbreviation: "DOT", meaning: "Department of Transportation" },
  { abbreviation: "DPA", meaning: "Directional Pilot Valve" },
  { abbreviation: "DPDT", meaning: "Double Pole, Double Throw" },
  { abbreviation: "DPSK", meaning: "Differential Phase Shift Key" },
  { abbreviation: "DPST", meaning: "Double Pole, Single Throw" },
  { abbreviation: "DR", meaning: "Door" },
  { abbreviation: "DSDL", meaning: "Dedicated Serial Data Link" },
  { abbreviation: "DSG", meaning: "Designation" },
  { abbreviation: "DSMI", meaning: "Applications Specifications Matðriaux Et Ingrðdients" },
  { abbreviation: "DSP", meaning: "Display Select Panel" },
  { abbreviation: "DSPL", meaning: "Display" },
  { abbreviation: "DTG", meaning: "Distance To Go" },
  { abbreviation: "DTMF", meaning: "Dual Tone Multiple Frequency" },
  { abbreviation: "DU", meaning: "Display Unit" },
  { abbreviation: "DVFR", meaning: "Defense Visual Flight Rules" },
  { abbreviation: "DVRCR", meaning: "Differential Voltage Reverse Current Relay" },
  { abbreviation: "E", meaning: "East" },
  { abbreviation: "E/D", meaning: "End of Descent" },
  { abbreviation: "E/E", meaning: "Electrical/Electronic" },
  { abbreviation: "E/WD", meaning: "Engine/Warning Display" },
  { abbreviation: "EADI", meaning: "Electronic Attitude Direction Indicator" },
  { abbreviation: "EARTS", meaning: "En Route Automated Radar Tracking System" },
  { abbreviation: "EBU", meaning: "Engine Built Up Unit" },
  { abbreviation: "ECAM", meaning: "Electronic Centralized Aircraft Monitoring" },
  { abbreviation: "ECB", meaning: "Electronic Control Box" },
  { abbreviation: "ECCM", meaning: "Electronic Counter Countermeasures" },
  { abbreviation: "ECM", meaning: "Electronic Countermeasures" },
  { abbreviation: "ECM", meaning: "Engine Conditions Monitoring" },
  { abbreviation: "ECON", meaning: "Economic" },
  { abbreviation: "ECP", meaning: "Ecam Control Panel" },
  { abbreviation: "ECS", meaning: "Environmental Control System" },
  { abbreviation: "ECU", meaning: "Electronic Control Unit/ Engine Control Unit" },
  { abbreviation: "ECUCV", meaning: "Electronic Control Unit Cooling Valve" },
  { abbreviation: "ECYC", meaning: "Engine Cycle" },
  { abbreviation: "EDDS", meaning: "Engine Data Display System" },
  { abbreviation: "EDP", meaning: "Engine Driven Pump/ Engine Primary Hydraulic Pump" },
  { abbreviation: "EEC", meaning: "Electronic Engine Control" },
  { abbreviation: "EEPROM", meaning: "Electrically Eraseable Programmable Read Only Memory" },
  { abbreviation: "EFC", meaning: "Expect Further Clearance" },
  { abbreviation: "EFCS", meaning: "Electrical Flight Control System" },
  { abbreviation: "EFH", meaning: "Engine Flight Hours" },
  { abbreviation: "EFI", meaning: "Electronic Flight Instruments" },
  { abbreviation: "EFIS", meaning: "Electronic Flight Instruments System" },
  { abbreviation: "EFOB", meaning: "Estimated Fuel On Board" },
  { abbreviation: "EFT", meaning: "Engine Fuel Temperature" },
  { abbreviation: "EGIU", meaning: "Electrical Generation Interface Unit" },
  { abbreviation: "EGT", meaning: "Exhaust Gas Temperature" },
  { abbreviation: "EHRS", meaning: "Temps Entre Decollage-Atterrissage" },
  { abbreviation: "EHSI", meaning: "Electronic Horizontal Situation Indicator" },
  { abbreviation: "EHSV", meaning: "Electro Hydraulic Servo Valve" },
  { abbreviation: "EICAS", meaning: "Engine Indicating and Crew Alerting System" },
  { abbreviation: "EIS", meaning: "Electronic Instrument System" },
  { abbreviation: "EIU", meaning: "Engine Interface Unit" },
  { abbreviation: "ELAC", meaning: "Elevator and Aileron Computer" },
  { abbreviation: "ELCU", meaning: "Electrical Load Control Units" },
  { abbreviation: "ELEC", meaning: "Electrical" },
  { abbreviation: "ELEV", meaning: "Elevator" },
  { abbreviation: "ELT", meaning: "Emergency Locator Transmitter" },
  { abbreviation: "ELV", meaning: "Elevation" },
  { abbreviation: "EMER", meaning: "Emergency" },
  { abbreviation: "EMF", meaning: "ElectroMotive Force" },
  { abbreviation: "EMI", meaning: "Electronic Magnetic Interference" },
  { abbreviation: "EMSAW", meaning: "En Route Minimum Safe Altitude Warning" },
  { abbreviation: "EMU", meaning: "Engine Maintenance Unit" },
  { abbreviation: "ENG", meaning: "Engine" },
  { abbreviation: "ENQ", meaning: "Enquiry" },
  { abbreviation: "ENT", meaning: "Entry" },
  { abbreviation: "ENTMT", meaning: "Entertainment" },
  { abbreviation: "EO", meaning: "Engine Out" },
  { abbreviation: "EOT", meaning: "End Of Transmission" },
  { abbreviation: "EPC", meaning: "External Power Contactor" },
  { abbreviation: "EPCS", meaning: "Electronic Propulsion Control System" },
  { abbreviation: "EPR", meaning: "Engine Pressure Ratio" },
  { abbreviation: "EPRL", meaning: "Engine Pressure Ratio Limit" },
  { abbreviation: "EPROM", meaning: "Enable Programmable Read Only Memory" },
  { abbreviation: "EPS", meaning: "Electrical Power Supply" },
  { abbreviation: "EPSU", meaning: "Emergency Light Power Supply Unit" },
  { abbreviation: "EQUIP", meaning: "Equipment" },
  { abbreviation: "ERP", meaning: "Eye Reference Point" },
  { abbreviation: "ERT", meaning: "Engine Running Time" },
  { abbreviation: "ESCP", meaning: "Electrical System Control Panel" },
  { abbreviation: "ESCV", meaning: "Eleventh Stage Cooling Valve" },
  { abbreviation: "ESDS", meaning: "Electrostatic Discharge Sensitive" },
  { abbreviation: "ESFC", meaning: "Equivalent Specific Fuel Consumption" },
  { abbreviation: "ESN", meaning: "Engine Serial Number" },
  { abbreviation: "ESS", meaning: "Essential" },
  { abbreviation: "EST", meaning: "Estimated" },
  { abbreviation: "ET", meaning: "Elapse Time" },
  { abbreviation: "ETA", meaning: "Estimated Time of Arrival" },
  { abbreviation: "ETB", meaning: "End of Transmission Block" },
  { abbreviation: "ETD", meaning: "Estimated Time of Departure" },
  { abbreviation: "ETE", meaning: "Estimated Time En Route" },
  { abbreviation: "ETOPS", meaning: "Extended Range Twin-engine Operation" },
  { abbreviation: "ETP", meaning: "Equal Time Point" },
  { abbreviation: "ETX", meaning: "End of Text" },
  { abbreviation: "EVAC", meaning: "Evacuation" },
  { abbreviation: "EVBC", meaning: "Engine Vane and Control" },
  { abbreviation: "EVMU", meaning: "Engine Vibration Monitoring Unit" },
  { abbreviation: "EWCG", meaning: "Empty Weight Center of Gravity" },
  { abbreviation: "EXH", meaning: "Exhaust" },
  { abbreviation: "EXP", meaning: "Expedite" },
  { abbreviation: "EXT", meaning: "External, Extension" },
  { abbreviation: "EXTIN", meaning: "Extinguish, Extinguished" },
  { abbreviation: "EXTING", meaning: "Extinguishing" },
  { abbreviation: "F/E", meaning: "Flight Engineer" },
  { abbreviation: "F/F", meaning: "Fuel Flow" },
  { abbreviation: "F/S", meaning: "Fast/Slow" },
  { abbreviation: "F-PLN", meaning: "Flight Plan" },
  { abbreviation: "FAA-PMA", meaning: "Federal Aviation Administration - Parts Manufacturing Approval" },
  { abbreviation: "FAA", meaning: "Federal Aviation Administration" },
  { abbreviation: "FAC", meaning: "Flight Augmentation Computer" },
  { abbreviation: "FAD", meaning: "Fuel Advisory Departure" },
  { abbreviation: "FADEC", meaning: "Full Authority Digital Engine Control" },
  { abbreviation: "FAF", meaning: "Final Approach Fix" },
  { abbreviation: "FAFC", meaning: "Full Authority Fuel Control" },
  { abbreviation: "FANS", meaning: "Future Air Navigation System" },
  { abbreviation: "FAP", meaning: "Forward Attendant Panel" },
  { abbreviation: "FAR", meaning: "Federal Aviation Regulations" },
  { abbreviation: "FAV", meaning: "Fan Air Valve" },
  { abbreviation: "FBS", meaning: "Fixed Based Simulator" },
  { abbreviation: "FCC", meaning: "Federal Communications Commission" },
  { abbreviation: "FCC", meaning: "Flight Control Computer" },
  { abbreviation: "FCDC", meaning: "Flight Control Data Concentrator" },
  { abbreviation: "FCEU", meaning: "Flight Control Electronics Unit" },
  { abbreviation: "FCHC", meaning: "Forward Cargo Heat Computer" },
  { abbreviation: "FCI", meaning: "Fuel Clogging Indicator" },
  { abbreviation: "FCOC", meaning: "Fuel Cooled Oil Cooler" },
  { abbreviation: "FCU", meaning: "Fuel Control Unit, Flight Control Unit" },
  { abbreviation: "FCU", meaning: "Flush Control Unit" },
  { abbreviation: "FCV", meaning: "Flow Control Valve" },
  { abbreviation: "FD, F/D", meaning: "Flight Director" },
  { abbreviation: "FDAU", meaning: "Flight Data Acquisition Unit" },
  { abbreviation: "FDEP", meaning: "Flight Data Entry Panel" },
  { abbreviation: "FDIU", meaning: "Flight Data Interface Unit" },
  { abbreviation: "FDR", meaning: "Flight Data Recorder" },
  { abbreviation: "FDS", meaning: "Flight Director System" },
  { abbreviation: "FDU", meaning: "Fire Detector Unit" },
  { abbreviation: "FEIM", meaning: "Field Engineering Investigation Memo" },
  { abbreviation: "FET", meaning: "Field Effect Transistor" },
  { abbreviation: "FEXT", meaning: "Fire Extinguisher" },
  { abbreviation: "FF", meaning: "Fuel Flow" },
  { abbreviation: "FF/FU", meaning: "Fuel Flow/Fuel Used" },
  { abbreviation: "FFCCV", meaning: "Fan Frame/Compressor Case Vertical (vibr, sensor)" },
  { abbreviation: "FFDN", meaning: "Fuel Flow Divider and Nozzles" },
  { abbreviation: "FFG", meaning: "Fuel Flow Governor" },
  { abbreviation: "FFS", meaning: "Full Flight Simulator" },
  { abbreviation: "FG", meaning: "Flight Guidance" },
  { abbreviation: "FHPP", meaning: "Fuel High Pressure Pump" },
  { abbreviation: "FI", meaning: "Flight Idle" },
  { abbreviation: "FIDS", meaning: "Fault Identification Data System" },
  { abbreviation: "FIFO", meaning: "First In/First Out" },
  { abbreviation: "FIM", meaning: "Fault Isolation Manual" },
  { abbreviation: "FIN", meaning: "Functional Item Number" },
  { abbreviation: "FIS", meaning: "Flight Instrument System" },
  { abbreviation: "FL", meaning: "Flow" },
  { abbreviation: "FL", meaning: "Flight Level" },
  { abbreviation: "FLA", meaning: "Forward Looking Aft" },
  { abbreviation: "FLCH", meaning: "Flight Level Change" },
  { abbreviation: "FLD", meaning: "Field" },
  { abbreviation: "FLSA", meaning: "Fuel Level Sensing Amplifier" },
  { abbreviation: "FLSCU", meaning: "Fuel Level Sensing Control Unit" },
  { abbreviation: "FLT", meaning: "Flight" },
  { abbreviation: "FLT CTL", meaning: "Flight Control" },
  { abbreviation: "FLTN", meaning: "Flight Number" },
  { abbreviation: "FLUOR", meaning: "Fluorescent" },
  { abbreviation: "FLXTO", meaning: "Flexible Takeoff" },
  { abbreviation: "FM", meaning: "Frequency Modulation" },
  { abbreviation: "FMA", meaning: "Flight Mode Annunciator" },
  { abbreviation: "FMC", meaning: "Flight Management Computer" },
  { abbreviation: "FMCS", meaning: "Flight Management Computer System" },
  { abbreviation: "FMEP", meaning: "Friction Mean Effective Pressure" },
  { abbreviation: "FMGC", meaning: "Flight Management and Guidance Computer" },
  { abbreviation: "FMS", meaning: "Flight Management System" },
  { abbreviation: "FMU", meaning: "Fuel Metering Unit" },
  { abbreviation: "FMV", meaning: "Fuel Metering Valve" },
  { abbreviation: "FN", meaning: "Engine Thrust" },
  { abbreviation: "FOB", meaning: "Fuel On Board" },
  { abbreviation: "FOD", meaning: "Fuel Over Destination" },
  { abbreviation: "FOD", meaning: "Foreign Object Damage" },
  { abbreviation: "FPA", meaning: "Flight Path Angle" },
  { abbreviation: "FPI", meaning: "Fluorescent Penetrant Inspection" },
  { abbreviation: "FPM", meaning: "Feet Per Minute" },
  { abbreviation: "FPPU", meaning: "Feed-Back Position Pick-Off Unit" },
  { abbreviation: "FPV", meaning: "Flight Path Vector" },
  { abbreviation: "FQIC", meaning: "Fuel Quantity Indicating Computer" },
  { abbreviation: "FQIS", meaning: "Fuel Quantity Indicating System" },
  { abbreviation: "FREQ", meaning: "Frequency" },
  { abbreviation: "FR", meaning: "Fault Reporting Manual" },
  { abbreviation: "FRT", meaning: "Front" },
  { abbreviation: "FRV", meaning: "Fuel Return Valve" },
  { abbreviation: "FSB", meaning: "Fasten Seat Belts" },
  { abbreviation: "FSCM", meaning: "Federal Supplier Code Manufacturer" },
  { abbreviation: "FSDO", meaning: "Flight Standards District Office" },
  { abbreviation: "FSEU", meaning: "Flaps/Slats Electronic Unit" },
  { abbreviation: "FSS", meaning: "Flight Service Station" },
  { abbreviation: "FT", meaning: "Foot Or Feet" },
  { abbreviation: "FT", meaning: "Functional Test" },
  { abbreviation: "FT/MIN", meaning: "Feet Per Minute" },
  { abbreviation: "FU", meaning: "Fuel Used, Follow Up" },
  { abbreviation: "FW", meaning: "Failure Warning" },
  { abbreviation: "FWC", meaning: "Fault Warning Computer" },
  { abbreviation: "FWD", meaning: "Forward" },
  { abbreviation: "FWSOV", meaning: "Fire Wall Shut Off Valve" },
  { abbreviation: "G", meaning: "Gravitational Acceleration" },
  { abbreviation: "G/S", meaning: "Glide Slope" },
  { abbreviation: "GA", meaning: "General Aviation" },
  { abbreviation: "GA", meaning: "Go-Around" },
  { abbreviation: "GADO", meaning: "General Aviation District Office" },
  { abbreviation: "GAL", meaning: "Gallon" },
  { abbreviation: "GB", meaning: "Generator Breaker" },
  { abbreviation: "GCB", meaning: "Generator Circuit Breaker" },
  { abbreviation: "GCR", meaning: "Generator Control Relay" },
  { abbreviation: "GCR", meaning: "Ground Clutter Reduction" },
  { abbreviation: "GCU", meaning: "Generator Control Unit" },
  { abbreviation: "GE", meaning: "General Electric" },
  { abbreviation: "GEM", meaning: "Ground Based Engine Monitoring" },
  { abbreviation: "GEN", meaning: "Generator" },
  { abbreviation: "GHR", meaning: "Ground Handling Relay" },
  { abbreviation: "GI", meaning: "Ground Idle" },
  { abbreviation: "GLC", meaning: "Generator Line Contactor" },
  { abbreviation: "GMT", meaning: "Greenwich Mean Time" },
  { abbreviation: "GND", meaning: "Ground" },
  { abbreviation: "GP", meaning: "Group" },
  { abbreviation: "GPA", meaning: "Gas Path Analysis" },
  { abbreviation: "GPCU", meaning: "Ground Power Control Unit" },
  { abbreviation: "GPM", meaning: "Gallon Per Minute" },
  { abbreviation: "GPS", meaning: "Global Positioning System" },
  { abbreviation: "GPU", meaning: "Ground Power Unit" },
  { abbreviation: "GPWC", meaning: "Ground Proximity Warning Computer" },
  { abbreviation: "GPWS", meaning: "Ground Proximity Warning System" },
  { abbreviation: "GR", meaning: "Gear" },
  { abbreviation: "GRD, GND", meaning: "Ground" },
  { abbreviation: "GS", meaning: "Ground Speed" },
  { abbreviation: "GSE", meaning: "Ground Support Equipment" },
  { abbreviation: "GSSR", meaning: "Ground Service Select Relay" },
  { abbreviation: "GSTR", meaning: "Ground Service Transfer Relay" },
  { abbreviation: "GW", meaning: "Gross Weight" },
  { abbreviation: "H", meaning: "Hexadecimal, Hot, Hour" },
  { abbreviation: "HCF", meaning: "High Cycle Fatigue" },
  { abbreviation: "HCU", meaning: "Hydraulic Control Unit" },
  { abbreviation: "HDG", meaning: "Heading" },
  { abbreviation: "HDL", meaning: "Handle" },
  { abbreviation: "HDG HOLD", meaning: "Heading Hold" },
  { abbreviation: "HDG SEL", meaning: "Heading Selected" },
  { abbreviation: "HF", meaning: "High Frequency" },
  { abbreviation: "HG", meaning: "Mercury" },
  { abbreviation: "HGW", meaning: "High Gross Weight" },
  { abbreviation: "HI", meaning: "High" },
  { abbreviation: "HIG", meaning: "Hermetically Sealed Integrating Gyro" },
  { abbreviation: "HIV", meaning: "Hydraulic Isolation Valve" },
  { abbreviation: "HMG", meaning: "Hydraulic Motor Generator" },
  { abbreviation: "HMU", meaning: "HydroMechanical Unit" },
  { abbreviation: "HOR", meaning: "Horizontal" },
  { abbreviation: "HORZ", meaning: "Horizon" },
  { abbreviation: "HOT", meaning: "High Oil Temperature" },
  { abbreviation: "HP", meaning: "High Pressure" },
  { abbreviation: "HPC", meaning: "High Pressure Compressor" },
  { abbreviation: "HPCR", meaning: "High Pressure Compressor Rotor" },
  { abbreviation: "HPSOV", meaning: "High Pressure Shutoff Valve" },
  { abbreviation: "HPT", meaning: "High Pressure Turbine" },
  { abbreviation: "HPTC", meaning: "(HP) Turbine Clearance" },
  { abbreviation: "HPTCC", meaning: "(HP) Turbine (Active) Clearance Control" },
  { abbreviation: "HPTCCV", meaning: "(HP) Turbine Clearance Control Valve" },
  { abbreviation: "HPTCV", meaning: "High Pressure Turbine Cooling Valve" },
  { abbreviation: "HPTR", meaning: "High Pressure Turbine Rotor" },
  { abbreviation: "HR", meaning: "Hour" },
  { abbreviation: "HSI", meaning: "Horizontal Situation Indicator" },
  { abbreviation: "HTR", meaning: "Heater" },
  { abbreviation: "HUD", meaning: "Head Up Display" },
  { abbreviation: "HYD", meaning: "Hydraulic" },
  { abbreviation: "HZ", meaning: "Hertz (cycles per second)" },
  { abbreviation: "I/C", meaning: "Inspection/Check" },
  { abbreviation: "I/O", meaning: "Input/Output" },
  { abbreviation: "I/P", meaning: "Intercept Profile" },
  { abbreviation: "IA", meaning: "Inspection Authorisation" },
  { abbreviation: "IAS", meaning: "Indicated Airspeed" },
  { abbreviation: "IBVSU", meaning: "Instrument Bus Voltage Sense Units" },
  { abbreviation: "IC", meaning: "Integrated Circuit" },
  { abbreviation: "ICAO", meaning: "International Civil Aviation Organisation" },
  { abbreviation: "ICU", meaning: "Instrument Comparator Unit" },
  { abbreviation: "IDENT", meaning: "Identification" },
  { abbreviation: "IDG", meaning: "Integrated Drive Generator" },
  { abbreviation: "IDU", meaning: "Interactive Display Unit" },
  { abbreviation: "IEPR", meaning: "Integrated Engine Pressure Ratio" },
  { abbreviation: "IF", meaning: "Intermediate Frequency" },
  { abbreviation: "IFF", meaning: "Identification, Freind or Foe" },
  { abbreviation: "IFIM", meaning: "International Flight Information Manual" },
  { abbreviation: "IFR", meaning: "Instrument Flight Rules" },
  { abbreviation: "IFSAU", meaning: "Integrated Flight Systems Accessory Unit" },
  { abbreviation: "IFSD", meaning: "In Flight Shut Down" },
  { abbreviation: "IG", meaning: "Idle Gate" },
  { abbreviation: "IGB", meaning: "Inlet Gearbox" },
  { abbreviation: "IGFET", meaning: "Insulated Gate Field Effect Transistor" },
  { abbreviation: "IGN", meaning: "Ignition" },
  { abbreviation: "IGS", meaning: "Idle Gate System" },
  { abbreviation: "IGV", meaning: "Inlet Guide Vanes" },
  { abbreviation: "IGVA", meaning: "Inlet Guide Vanes Actuator" },
  { abbreviation: "IGW", meaning: "Initial Gross Weight" },
  { abbreviation: "IHP", meaning: "Indicated Horsepower" },
  { abbreviation: "ILLUM", meaning: "Illuminate, Illuminated" },
  { abbreviation: "ILS", meaning: "Instrument Landing System" },
  { abbreviation: "IMEP", meaning: "Indicated Mean Effective Pressure" },
  { abbreviation: "IMP", meaning: "Imperial" },
  { abbreviation: "IN", meaning: "Inch" },
  { abbreviation: "INB", meaning: "Inbound" },
  { abbreviation: "INBO", meaning: "Inboard" },
  { abbreviation: "INC", meaning: "Incorporated" },
  { abbreviation: "INCR", meaning: "Increase" },
  { abbreviation: "IND", meaning: "Indicator" },
  { abbreviation: "INFLT", meaning: "Inflight" },
  { abbreviation: "INHB", meaning: "Inhibit" },
  { abbreviation: "INIT", meaning: "Initialisation" },
  { abbreviation: "INOP", meaning: "Inoperative" },
  { abbreviation: "INPH", meaning: "Interphone" },
  { abbreviation: "INR", meaning: "Inner" },
  { abbreviation: "INST(S)", meaning: "Instrument (s)" },
  { abbreviation: "INTCP", meaning: "Intercept" },
  { abbreviation: "INV", meaning: "Static Inverter" },
  { abbreviation: "IP", meaning: "Intermediate Pressure, Input" },
  { abbreviation: "IPB", meaning: "Illustrated Parts Breakdown" },
  { abbreviation: "IPL", meaning: "Illustrated Parts List" },
  { abbreviation: "IPM", meaning: "Illustrated Parts Manual" },
  { abbreviation: "IR", meaning: "Inertial Reference" },
  { abbreviation: "IR", meaning: "Infrared" },
  { abbreviation: "IR", meaning: "Voltage < U= I.R>" },
  { abbreviation: "IRAN", meaning: "Inspect and Repair As Necessary" },
  { abbreviation: "IRBM", meaning: "Intermediate-Range Ballistic Missile" },
  { abbreviation: "IRMP", meaning: "Inertial Reference Mode Panel" },
  { abbreviation: "IRS", meaning: "Inertial Reference System" },
  { abbreviation: "IRU", meaning: "Inertial Reference Unit" },
  { abbreviation: "ISA", meaning: "International Standard Atmosphere" },
  { abbreviation: "ISLN", meaning: "Isolation" },
  { abbreviation: "ITT", meaning: "Intermediate Turbine Temperature" },
  { abbreviation: "ITTI", meaning: "Interturbine Temperature Indicator" },
  { abbreviation: "IVSI", meaning: "Instantaneous Rate of Climb Indicator" },
  { abbreviation: "JAA", meaning: "Joint Airworthiness Authorities" },
  { abbreviation: "JAR", meaning: "Joint Airworthiness Regulations" },
  { abbreviation: "JATO", meaning: "Jet Assist Takeoff" },
  { abbreviation: "JFC", meaning: "Jet Fuel Control" },
  { abbreviation: "JFET", meaning: "Junction Field Effect Transistor" },
  { abbreviation: "K,KT, KTS", meaning: "Knots" },
  { abbreviation: "KCAS", meaning: "Knots Calibrated Airspeed" },
  { abbreviation: "KEAS", meaning: "Knots Equivalent Airspeed" },
  { abbreviation: "KG", meaning: "Kilogramme" },
  { abbreviation: "KHz", meaning: "Kilo Hertz" },
  { abbreviation: "KIAS", meaning: "Knots Indicated Airspeed" },
  { abbreviation: "KT, KN", meaning: "Knot" },
  { abbreviation: "KVAR", meaning: "Kilovolt Amperes Reactive" },
  { abbreviation: "KVS", meaning: "V2/Vs" },
  { abbreviation: "L", meaning: "Left, Liter" },
  { abbreviation: "L-NAV", meaning: "Lateral Navigation" },
  { abbreviation: "L/E", meaning: "Leading Edge" },
  { abbreviation: "L/G", meaning: "Landing Gear" },
  { abbreviation: "L/H", meaning: "Left Hand" },
  { abbreviation: "LAAS", meaning: "Low Altitude Alert System" },
  { abbreviation: "LAF", meaning: "Load Alleviation Function" },
  { abbreviation: "LASCR", meaning: "Light Activated Silicon Control Rectifier" },
  { abbreviation: "LAT", meaning: "Latitude, Lateral" },
  { abbreviation: "LAT REV", meaning: "Lateral Revision" },
  { abbreviation: "LAV", meaning: "Lavatory" },
  { abbreviation: "LB", meaning: "Pound" },
  { abbreviation: "LB/HR", meaning: "Pound per Hour" },
  { abbreviation: "LBA", meaning: "Propeller Low Angle, Low Blade Angle" },
  { abbreviation: "LCCA", meaning: "Lateral Central Control Actuator" },
  { abbreviation: "LCD", meaning: "Liquid Crystal Display" },
  { abbreviation: "LCF", meaning: "Low Cycle Fatigue" },
  { abbreviation: "LCIT", meaning: "Load Compressor Inlet Temperature" },
  { abbreviation: "LCM", meaning: "Logic Control Module" },
  { abbreviation: "LCN", meaning: "Load Classification Number" },
  { abbreviation: "LDG", meaning: "Landing" },
  { abbreviation: "LDG GR", meaning: "Landing Gear" },
  { abbreviation: "LE", meaning: "Leading Edge" },
  { abbreviation: "LED", meaning: "Light Emitting Diode" },
  { abbreviation: "LEMAC", meaning: "Leading Edge of The Mean Aerodynamic Chord" },
  { abbreviation: "LF", meaning: "Left Front, Line Feed" },
  { abbreviation: "LFES", meaning: "Landing Field Elevation Selector" },
  { abbreviation: "LGCIU", meaning: "Landing Gear Control Interface Unit" },
  { abbreviation: "LGCU", meaning: "Left Generator Control Unit" },
  { abbreviation: "LGPCU", meaning: "Landing Gear Position Control Unit" },
  { abbreviation: "LGW", meaning: "Landing Gross Weight" },
  { abbreviation: "LH", meaning: "Left-Hand (Threads)" },
  { abbreviation: "LIFO", meaning: "Last In First Out" },
  { abbreviation: "LIM", meaning: "Limit" },
  { abbreviation: "LIS", meaning: "Localizer Inertial Smoothing" },
  { abbreviation: "LL", meaning: "Latitude/Longitude - Last Leg" },
  { abbreviation: "LLP", meaning: "Life Limited Parts" },
  { abbreviation: "LM", meaning: "Local Manufacturer" },
  { abbreviation: "LMM, MM", meaning: "Localizer Middle Marker" },
  { abbreviation: "LN", meaning: "Left Nose" },
  { abbreviation: "LO", meaning: "Low" },
  { abbreviation: "LOC", meaning: "Localizer" },
  { abbreviation: "LOGO", meaning: "Logographic" },
  { abbreviation: "LOL", meaning: "Low Oil Level" },
  { abbreviation: "LOM, OM", meaning: "Localizer Outer Marker" },
  { abbreviation: "LONG", meaning: "Longitude" },
  { abbreviation: "LOP", meaning: "Low Oil Pressure" },
  { abbreviation: "LORAN", meaning: "Long-Range Navigation" },
  { abbreviation: "LOX", meaning: "Liquid Oxygen" },
  { abbreviation: "LP", meaning: "Low Pressure" },
  { abbreviation: "LPC", meaning: "Low Pressure Compressor" },
  { abbreviation: "LPM", meaning: "Liter Per Minute" },
  { abbreviation: "LPT", meaning: "Low Pressure Turbine" },
  { abbreviation: "LPTC", meaning: "Low Pressure Turbine Clearance" },
  { abbreviation: "LPTCC", meaning: "Low Pressure Turbine (Active) Clearance Control" },
  { abbreviation: "LPTCV", meaning: "Low-Pressure Turbine Cooling Valve" },
  { abbreviation: "LPTR", meaning: "Low Pressure Turbine Rotor" },
  { abbreviation: "LR", meaning: "Left Rear" },
  { abbreviation: "LRC", meaning: "Long Range Cruise" },
  { abbreviation: "LRRA", meaning: "Low Range Radio Altimeter" },
  { abbreviation: "LRU", meaning: "Line Replaceable Units" },
  { abbreviation: "LS", meaning: "Line Select" },
  { abbreviation: "LSB", meaning: "Least Significant Bit" },
  { abbreviation: "LSB", meaning: "Lower Side Band" },
  { abbreviation: "LSC", meaning: "Least Significant Character" },
  { abbreviation: "LSI", meaning: "Load Select Indicator" },
  { abbreviation: "LSI", meaning: "Large Scale Integration" },
  { abbreviation: "LSU", meaning: "Lavatory Service Unit" },
  { abbreviation: "LT(S)", meaning: "Light(s)" },
  { abbreviation: "LVDT", meaning: "Linear Variable Differential Transducer" },
  { abbreviation: "LVL", meaning: "Level" },
  { abbreviation: "LVL/CH", meaning: "Level Change" },
  { abbreviation: "LW", meaning: "Left Wing , Landing Weight" },
  { abbreviation: "LWR", meaning: "Lower" },
  { abbreviation: "M", meaning: "Mach, Magenta, Meter" },
  { abbreviation: "M-SPD", meaning: "Manual Speed" },
  { abbreviation: "MA", meaning: "Missed Approach" },
  { abbreviation: "MAA", meaning: "Maximum Authorized Altitude" },
  { abbreviation: "MAC", meaning: "Mean Aerodynamic Chord" },
  { abbreviation: "MAG", meaning: "Magnetic" },
  { abbreviation: "MAG DEC", meaning: "Magnetic Declination" },
  { abbreviation: "MAG VAR", meaning: "Magnetic Variation" },
  { abbreviation: "MAINT", meaning: "Maintenance" },
  { abbreviation: "MALF", meaning: "Malfunction" },
  { abbreviation: "MAN", meaning: "Manual" },
  { abbreviation: "MAPT, MAP", meaning: "Missed Approach Point" },
  { abbreviation: "MAX", meaning: "Maximum" },
  { abbreviation: "MAX CLB", meaning: "Maximum Climb" },
  { abbreviation: "MAX DES", meaning: "Maximum Descent" },
  { abbreviation: "MAX END", meaning: "Maximum Endurance" },
  { abbreviation: "MAX PWR", meaning: "Max Power" },
  { abbreviation: "MB", meaning: "Millibars" },
  { abbreviation: "MB", meaning: "Marker Beacon" },
  { abbreviation: "MCC", meaning: "Maintenance Control Center" },
  { abbreviation: "MCD", meaning: "Magnetic Chip Detector" },
  { abbreviation: "MCDP", meaning: "Maintenance Control and Display Panel" },
  { abbreviation: "MCDU", meaning: "Main Control Data Unit" },
  { abbreviation: "MCDU", meaning: "Multipurpose Control and Display Unit" },
  { abbreviation: "MCL", meaning: "Maximum Climb" },
  { abbreviation: "MCP", meaning: "Mode Control Panel" },
  { abbreviation: "MCT", meaning: "Maximum Continuous Thrust" },
  { abbreviation: "MCU", meaning: "Modular Concept Unit" },
  { abbreviation: "MCU", meaning: "Module Case Unit (Standard Arinc)" },
  { abbreviation: "MCA", meaning: "Minimum Crossing Altitude" },
  { abbreviation: "MDA", meaning: "Minimum Descent Altitude" },
  { abbreviation: "MDH", meaning: "Minimum Decision Height" },
  { abbreviation: "MEA", meaning: "Minimum En Route IRR Altitude" },
  { abbreviation: "MEC", meaning: "Main Engine Control" },
  { abbreviation: "MEC", meaning: "Main Equipment Center" },
  { abbreviation: "MECH", meaning: "Mechanic" },
  { abbreviation: "MED", meaning: "Medium" },
  { abbreviation: "MEK", meaning: "Methyl-Ethyl-Ketone" },
  { abbreviation: "MEL", meaning: "Minimum Equipment List" },
  { abbreviation: "MES", meaning: "Main Engine Start" },
  { abbreviation: "METO", meaning: "Maximum Except Takeoff Power" },
  { abbreviation: "MEW", meaning: "Manufacturers Empty Weight" },
  { abbreviation: "MFA", meaning: "Memorized Fault Annunciator" },
  { abbreviation: "MFC", meaning: "Multifunction Computer" },
  { abbreviation: "MHA", meaning: "Minimum Holding Altitude" },
  { abbreviation: "mHz", meaning: "Megahertz" },
  { abbreviation: "MI", meaning: "Miles" },
  { abbreviation: "MIA", meaning: "Minimum IFR Altitudes" },
  { abbreviation: "MIC", meaning: "Microphone" },
  { abbreviation: "MIG", meaning: "Metal Inert-Gas" },
  { abbreviation: "MILSPEC", meaning: "Military Specifications" },
  { abbreviation: "MIN", meaning: "Minimum" },
  { abbreviation: "MIS", meaning: "Meteorological Impact Statement" },
  { abbreviation: "MKR", meaning: "Marker" },
  { abbreviation: "MLG", meaning: "Main Landing Gear" },
  { abbreviation: "MLS", meaning: "Microwave Landing System" },
  { abbreviation: "MLW", meaning: "Maximum Landing Weight" },
  { abbreviation: "MM", meaning: "Memory Module" },
  { abbreviation: "MM", meaning: "Middle Marker" },
  { abbreviation: "MM", meaning: "Maintenance Manual" },
  { abbreviation: "MMEL", meaning: "Master Minimum Equipment List" },
  { abbreviation: "MMF", meaning: "Magnetomotive Force" },
  { abbreviation: "MMO", meaning: "Maximum Operating Speed In Mach Number" },
  { abbreviation: "MMR", meaning: "Minimum Refreshment Rate" },
  { abbreviation: "MN", meaning: "Minute" },
  { abbreviation: "MOCA", meaning: "Minimum Obstruction Clearance Altitude" },
  { abbreviation: "MOD", meaning: "Module" },
  { abbreviation: "MON", meaning: "Monitor" },
  { abbreviation: "MONG", meaning: "Monitoring" },
  { abbreviation: "MOS", meaning: "Metal Oxide Semiconductor" },
  { abbreviation: "MOSFET", meaning: "Metal Oxide Semiconductor Field Effect Transistor" },
  { abbreviation: "MPDS", meaning: "Maintenance Planning Data System" },
  { abbreviation: "MPH", meaning: "Miles Per Hour" },
  { abbreviation: "MPN", meaning: "Manufacturer Part Number" },
  { abbreviation: "MRA", meaning: "Minimum Reception Altitude" },
  { abbreviation: "MRB", meaning: "Maintenance Review Board" },
  { abbreviation: "MRDS", meaning: "Maintenance and Recording Data System" },
  { abbreviation: "MS", meaning: "Military Standard, Military Specification" },
  { abbreviation: "MSA", meaning: "Minimum Safe Altitude" },
  { abbreviation: "MSAW", meaning: "Minimum Safe Altitude Warning" },
  { abbreviation: "MSB", meaning: "Most Significant Bit" },
  { abbreviation: "MSD", meaning: "Most Significant Digit" },
  { abbreviation: "MSG", meaning: "Message" },
  { abbreviation: "MSI", meaning: "Medium-Scale Integration" },
  { abbreviation: "MSL", meaning: "Mean Sea Level" },
  { abbreviation: "MSN", meaning: "número de série avionneur" },
  { abbreviation: "MSU", meaning: "Mode Selector Unit" },
  { abbreviation: "MTBF", meaning: "Mean Time Between Failures" },
  { abbreviation: "MTBR", meaning: "Mean Time Between Removals" },
  { abbreviation: "MTD", meaning: "Maximum Transmission Delay" },
  { abbreviation: "MTG", meaning: "Miles To Go" },
  { abbreviation: "MTI", meaning: "Moving Target Indicator" },
  { abbreviation: "MTOW", meaning: "Maximum Takeoff Weight" },
  { abbreviation: "MTR", meaning: "Military Training Routes" },
  { abbreviation: "MTW", meaning: "Maximum Taxi Weight" },
  { abbreviation: "MU", meaning: "Management Unit, Microswitch Unit" },
  { abbreviation: "MUX", meaning: "Multiplexer" },
  { abbreviation: "MVA", meaning: "Minimum Vectoring Altitude" },
  { abbreviation: "MZFW", meaning: "Maximum Zero Fuel Weight" },
  { abbreviation: "N", meaning: "Normal, North" },
  { abbreviation: "N/A", meaning: "Not Applicable" },
  { abbreviation: "N/W", meaning: "Nose Wheel" },
  { abbreviation: "N1, N2, N3", meaning: "Rotor Assembly Number" },
  { abbreviation: "N1", meaning: "Low Pressure Rotor Rotational Speed" },
  { abbreviation: "N1ACT", meaning: "N1 Actual" },
  { abbreviation: "N1COM", meaning: "N1 Command" },
  { abbreviation: "N2", meaning: "High/Intermediate Pressure Compressor Rotational Speed" },
  { abbreviation: "N3", meaning: "(HP) Compressor Rotational Speed" },
  { abbreviation: "NAC", meaning: "Nacelle" },
  { abbreviation: "NAK", meaning: "Negative Acknowledge" },
  { abbreviation: "NAS", meaning: "National Airspace System (US)" },
  { abbreviation: "NAS", meaning: "National Aircraft Standards (US)" },
  { abbreviation: "NASA", meaning: "National Aeronautics and Space Administration" },
  { abbreviation: "NAV", meaning: "Navigation" },
  { abbreviation: "NAVAISA", meaning: "Navigational Aids (VOR/DME)" },
  { abbreviation: "NCD", meaning: "No Computed Data" },
  { abbreviation: "ND", meaning: "Navigation Display" },
  { abbreviation: "NDB", meaning: "Non Direction Beacon" },
  { abbreviation: "NEG", meaning: "Negative" },
  { abbreviation: "NEUT", meaning: "Neutral" },
  { abbreviation: "NFDC", meaning: "National Flight Data Center (US)" },
  { abbreviation: "NFDD", meaning: "National Flight Data Digest (US)" },
  { abbreviation: "NFT", meaning: "Free Turbine Shaft Speed" },
  { abbreviation: "NH", meaning: "High Pressure Compressor Speed" },
  { abbreviation: "NHT", meaning: "NH Transmitter" },
  { abbreviation: "NH-NLI", meaning: "NH-NL Indicator" },
  { abbreviation: "NL", meaning: "Low Pressure Compressor Speed" },
  { abbreviation: "NLG", meaning: "Nose Landing Gear" },
  { abbreviation: "NLT", meaning: "NL Transmitter" },
  { abbreviation: "NM, NMI", meaning: "Nautical Mile" },
  { abbreviation: "NO", meaning: "Normal Operation" },
  { abbreviation: "NORM", meaning: "Normal" },
  { abbreviation: "NP", meaning: "Propeller Speed" },
  { abbreviation: "NP", meaning: "Power Turbine Speed" },
  { abbreviation: "NS", meaning: "No Smoking" },
  { abbreviation: "NSA", meaning: "Norme Sud-Aviation" },
  { abbreviation: "NVM", meaning: "Nonvolatile Memory" },
  { abbreviation: "O/P", meaning: "Output" },
  { abbreviation: "OAT", meaning: "Outside Air Temperature" },
  { abbreviation: "OBRM", meaning: "On-Board Replaceable Memory" },
  { abbreviation: "OBS", meaning: "Omni Bearing Selector" },
  { abbreviation: "OBS", meaning: "Observer" },
  { abbreviation: "OEW", meaning: "Operating Empty Weight" },
  { abbreviation: "OFF/R", meaning: "Off Reset" },
  { abbreviation: "OGV", meaning: "Outlet Guide Vane" },
  { abbreviation: "OHU", meaning: "Optical Head Unit" },
  { abbreviation: "OLMS", meaning: "Operational Loads Monitoring System" },
  { abbreviation: "OOOI", meaning: "Out of Gate, Off The Ground, On The Ground In To The Gate (out-off-on-in)" },
  { abbreviation: "OP", meaning: "Open" },
  { abbreviation: "OPP", meaning: "Opposite" },
  { abbreviation: "OPR", meaning: "Operate" },
  { abbreviation: "OPRN", meaning: "Operation" },
  { abbreviation: "OPT", meaning: "Optimum" },
  { abbreviation: "OPV", meaning: "Over Pressure Valve" },
  { abbreviation: "OSG", meaning: "Overspeed Go Vernor" },
  { abbreviation: "OSS", meaning: "Out Side Service" },
  { abbreviation: "OUTB", meaning: "Outbound" },
  { abbreviation: "OUTBD", meaning: "Outboard" },
  { abbreviation: "OUTR", meaning: "Outer" },
  { abbreviation: "OVBD", meaning: "Overboard" },
  { abbreviation: "OVHD", meaning: "Overhead" },
  { abbreviation: "OVHT", meaning: "Overheat" },
  { abbreviation: "OVRD", meaning: "Override" },
  { abbreviation: "P-ALT", meaning: "Profile Altitude" },
  { abbreviation: "P-CLB", meaning: "Profile Climb" },
  { abbreviation: "P-MACH", meaning: "Profile Mach" },
  { abbreviation: "P-SPEED", meaning: "Profile Speed" },
  { abbreviation: "P/B", meaning: "Push-Button" },
  { abbreviation: "P/N", meaning: "Part Number" },
  { abbreviation: "P/RST", meaning: "Push To Reset" },
  { abbreviation: "P/S", meaning: "Pitot/Static" },
  { abbreviation: "P&W", meaning: "Pratt & Whitney" },
  { abbreviation: "Po", meaning: "Ambient Static Pressure" },
  { abbreviation: "PA", meaning: "Passenger Address" },
  { abbreviation: "PA", meaning: "Public Address" },
  { abbreviation: "PAS", meaning: "Pitch Attitude Sensor" },
  { abbreviation: "PASS", meaning: "Passenger" },
  { abbreviation: "PCA", meaning: "Positive Control Area" },
  { abbreviation: "PCA", meaning: "Power Control Actuator" },
  { abbreviation: "PCB", meaning: "Printed Circuit Board" },
  { abbreviation: "PCU", meaning: "Power Control Unit, Passenger Control Unit, Propeller Control Unit" },
  { abbreviation: "PD", meaning: "Potential Difference" },
  { abbreviation: "PDES", meaning: "Profile Descent" },
  { abbreviation: "PDI", meaning: "Pictorial Deviation Indicator" },
  { abbreviation: "PDIU", meaning: "Propulsion Discrete Interface Unit" },
  { abbreviation: "PDU", meaning: "Power Drive Unit" },
  { abbreviation: "PERF", meaning: "Performance" },
  { abbreviation: "PES", meaning: "Passenger Entertainment System" },
  { abbreviation: "PES", meaning: "Pitch Enhancement System" },
  { abbreviation: "PFD", meaning: "Primary Flight Display" },
  { abbreviation: "pH", meaning: "Measure of Ability" },
  { abbreviation: "PHC", meaning: "Probes Heat Computer" },
  { abbreviation: "PIBAL", meaning: "Pilot Balloon Observation" },
  { abbreviation: "PIMU", meaning: "Propulsion Interface Monitor Unit" },
  { abbreviation: "PIU", meaning: "Passenger Information Unit" },
  { abbreviation: "PK", meaning: "Parker-Kalon" },
  { abbreviation: "PL", meaning: "Power Lever" },
  { abbreviation: "PLA", meaning: "Power Lever Angle" },
  { abbreviation: "PLI", meaning: "Pitch Limit Indicator" },
  { abbreviation: "PLT", meaning: "Pilot" },
  { abbreviation: "PM", meaning: "Phase Modulation" },
  { abbreviation: "PMA", meaning: "Permanent Magnet Alternator" },
  { abbreviation: "PMC", meaning: "Power Management Control" },
  { abbreviation: "PMDB", meaning: "Production Management Data Base" },
  { abbreviation: "PMG", meaning: "Permanent Magnet Generator" },
  { abbreviation: "PMR", meaning: "Performance Maintenance Recorder" },
  { abbreviation: "PMUX", meaning: "Propulsion Multiplexer" },
  { abbreviation: "PNL", meaning: "Panel" },
  { abbreviation: "PO", meaning: "Outside Air Pressure" },
  { abbreviation: "POB", meaning: "Pressure Off Brake" },
  { abbreviation: "POR", meaning: "Point of Regulation" },
  { abbreviation: "POS", meaning: "Position" },
  { abbreviation: "PPH", meaning: "Pounds Per Hour" },
  { abbreviation: "PPI", meaning: "Plan Position Indicator" },
  { abbreviation: "PPOS", meaning: "Present Position" },
  { abbreviation: "PRED", meaning: "Predictions" },
  { abbreviation: "PRESS", meaning: "Pressure" },
  { abbreviation: "PRIM", meaning: "Primary" },
  { abbreviation: "PROC", meaning: "Procedure" },
  { abbreviation: "PROCT", meaning: "Procedure Turn" },
  { abbreviation: "PROF", meaning: "Profile" },
  { abbreviation: "PROG", meaning: "Progress" },
  { abbreviation: "PROM", meaning: "Programmable Read Only Memory" },
  { abbreviation: "PROT", meaning: "Protection" },
  { abbreviation: "PROX", meaning: "Proximity" },
  { abbreviation: "PRR", meaning: "Production Revision Record" },
  { abbreviation: "PRSODV", meaning: "Pressure Raising Shut Off and Dump Valve" },
  { abbreviation: "PRSOV", meaning: "Pressure Regulating and Shutoff Valve" },
  { abbreviation: "PRT", meaning: "Power Recovery Turbine" },
  { abbreviation: "PRV", meaning: "Pressure Regulating Valve" },
  { abbreviation: "PS12", meaning: "Fan Inlet Static Air Pressure" },
  { abbreviation: "PS13", meaning: "Fan Outlet Static Air Pressure" },
  { abbreviation: "PS3", meaning: "(HP) Compressor Discharge Static Air Pressure" },
  { abbreviation: "PSEU", meaning: "Proximity Switch Electronic Unit" },
  { abbreviation: "PSI", meaning: "Pound per Square Inch (14,2 psi = 1 at)" },
  { abbreviation: "PSIA", meaning: "Pound per Square Inch Absolute" },
  { abbreviation: "PSID", meaning: "Pound per Square Inch Differential" },
  { abbreviation: "PSIG", meaning: "Pound per Square Inch Gage" },
  { abbreviation: "PSIU", meaning: "Bloc Passager" },
  { abbreviation: "PSM", meaning: "Power Supply Module" },
  { abbreviation: "PSS", meaning: "Passenger Service System" },
  { abbreviation: "PSS", meaning: "Pressure Sub_System" },
  { abbreviation: "PSU", meaning: "Passenger Service Unit" },
  { abbreviation: "PSUD", meaning: "Passenger Service Unit De Coder" },
  { abbreviation: "PT", meaning: "Total Air Pressure" },
  { abbreviation: "PT2", meaning: "Fan Inlet Total Air Pressure (Primary flow)" },
  { abbreviation: "PTP", meaning: "Programming Test Panel" },
  { abbreviation: "PTR", meaning: "Printer" },
  { abbreviation: "PTT", meaning: "Push To Talk" },
  { abbreviation: "PTU", meaning: "Power Transfer Unit" },
  { abbreviation: "PURL", meaning: "Power Unit Read Light" },
  { abbreviation: "PVC", meaning: "Polyvinyl Chloride" },
  { abbreviation: "PVP", meaning: "Portée Visuelle de Piste" },
  { abbreviation: "PW", meaning: "Pratt Whitney" },
  { abbreviation: "PWR", meaning: "Power" },
  { abbreviation: "QAD", meaning: "Quick Attach Detach" },
  { abbreviation: "QAR", meaning: "Quick Access Recorder" },
  { abbreviation: "QC", meaning: "Quality Control" },
  { abbreviation: "QEC", meaning: "Quick Engine Change" },
  { abbreviation: "QECA", meaning: "Quick Engine Change Assembly" },
  { abbreviation: "QFE", meaning: "Local Station Pressure (Pression atmospherique au niveau du terrain)" },
  { abbreviation: "QFU", meaning: "Cap Magnetique de la Piste" },
  { abbreviation: "QNE", meaning: "Altitude Pression du Terrain (Ref. 1013)" },
  { abbreviation: "QNH", meaning: "Altimeter Setting (pression atmospherique au niveau de la mer)" },
  { abbreviation: "QTY", meaning: "Quantity" },
  { abbreviation: "R", meaning: "Right, Red" },
  { abbreviation: "R-12", meaning: "Refrigerant" },
  { abbreviation: "R-R", meaning: "Rolls - Royce" },
  { abbreviation: "P/H", meaning: "Right Hand" },
  { abbreviation: "R/I", meaning: "Remove/ Install" },
  { abbreviation: "RA", meaning: "Radio Altitude Or Resolution Advisory" },
  { abbreviation: "RABS", meaning: "Reverse Actuated Bleed System" },
  { abbreviation: "RACC", meaning: "Rotor Active Clearance Control" },
  { abbreviation: "RAM", meaning: "Random Access Memory" },
  { abbreviation: "RAT", meaning: "Ram Air Turbine" },
  { abbreviation: "RATO", meaning: "Rocket Assisted Takeoff" },
  { abbreviation: "RBS", meaning: "Radar Beacon System" },
  { abbreviation: "RCDR", meaning: "Recorder" },
  { abbreviation: "RCL", meaning: "Recall" },
  { abbreviation: "RCM", meaning: "Ratio Changer Module" },
  { abbreviation: "RCT", meaning: "React" },
  { abbreviation: "RCVR", meaning: "Receiver" },
  { abbreviation: "RDG", meaning: "Reading" },
  { abbreviation: "RDMI", meaning: "Radio Distance Magnetic Indicator" },
  { abbreviation: "REC", meaning: "Recalculate - Recommended" },
  { abbreviation: "REC", meaning: "Recorder" },
  { abbreviation: "RECIRC", meaning: "Recirculate" },
  { abbreviation: "RED", meaning: "Reduction" },
  { abbreviation: "REF", meaning: "Reference" },
  { abbreviation: "REFRIG", meaning: "Refrigeration" },
  { abbreviation: "REG", meaning: "Regulator" },
  { abbreviation: "REL", meaning: "Release" },
  { abbreviation: "REL", meaning: "Relative" },
  { abbreviation: "REP", meaning: "Representative" },
  { abbreviation: "REQ", meaning: "Required" },
  { abbreviation: "RES", meaning: "Reserve" },
  { abbreviation: "RESANA", meaning: "Resultat d'Analyse" },
  { abbreviation: "RESANAM", meaning: "Resultat d'Analyse Voie Monitor" },
  { abbreviation: "RESAWAC", meaning: "Resultat d'Analyse Voie Command" },
  { abbreviation: "REV", meaning: "Revision" },
  { abbreviation: "REV", meaning: "Reverse" },
  { abbreviation: "RF", meaning: "Right Front" },
  { abbreviation: "RF", meaning: "Radio Frequency" },
  { abbreviation: "RFC", meaning: "Request For Charge" },
  { abbreviation: "RFI", meaning: "Radio Frequency Interference" },
  { abbreviation: "PFI", meaning: "Ready For Installation" },
  { abbreviation: "RGCU", meaning: "Right Generator Control Unit" },
  { abbreviation: "RGS", meaning: "Remote Ground Station" },
  { abbreviation: "RH", meaning: "Right Hand" },
  { abbreviation: "RHI", meaning: "Range Height Indicator Scope" },
  { abbreviation: "RMI", meaning: "Radio Magnetic Indicator" },
  { abbreviation: "RMP", meaning: "Radio Management Panel" },
  { abbreviation: "RMR", meaning: "Removal Module Reprogrammer" },
  { abbreviation: "RMS", meaning: "Root Mean Square" },
  { abbreviation: "RMU", meaning: "Radio Management Unit" },
  { abbreviation: "RN", meaning: "Right Nose" },
  { abbreviation: "RNAV", meaning: "Area Navigation" },
  { abbreviation: "RNG", meaning: "Range" },
  { abbreviation: "ROM", meaning: "Read Only Memory" },
  { abbreviation: "ROT", meaning: "Rotation" },
  { abbreviation: "RPM", meaning: "Revolutions Per Minute" },
  { abbreviation: "RPTG", meaning: "Reporting" },
  { abbreviation: "RQRD", meaning: "Required" },
  { abbreviation: "RR", meaning: "Right Rear" },
  { abbreviation: "RSE", meaning: "Responsible System Engineering" },
  { abbreviation: "RST", meaning: "Reset" },
  { abbreviation: "RSV", meaning: "Seserves" },
  { abbreviation: "RSVR", meaning: "Reservoir" },
  { abbreviation: "RT", meaning: "Receiver Transmitter" },
  { abbreviation: "RTA", meaning: "Required Time Arrival" },
  { abbreviation: "RTD", meaning: "Resistant Temperature Detector" },
  { abbreviation: "RTE", meaning: "Route" },
  { abbreviation: "RTE DATA", meaning: "Route Data" },
  { abbreviation: "RTO", meaning: "Rejected Takeoff, Refused Take off" },
  { abbreviation: "RTOK", meaning: "Retest OK" },
  { abbreviation: "RTS", meaning: "Request To Send" },
  { abbreviation: "RU", meaning: "Restricted Use" },
  { abbreviation: "RUD", meaning: "Rudder" },
  { abbreviation: "RVDT", meaning: "Rotary Variable Differential Transformer/Transducer" },
  { abbreviation: "RVR", meaning: "Runway Visual Range" },
  { abbreviation: "RVSR", meaning: "Reverser" },
  { abbreviation: "RW", meaning: "Right Wing" },
  { abbreviation: "RWY", meaning: "Run Way" },
  { abbreviation: "S", meaning: "South" },
  { abbreviation: "S/C", meaning: "Step Climb" },
  { abbreviation: "S/D", meaning: "Step Descent" },
  { abbreviation: "S/V", meaning: "Shop Visit" },
  { abbreviation: "SAE", meaning: "Society of Automotive Engineers" },
  { abbreviation: "SAM", meaning: "Stabilizer Trim and Aileron Lockout Module" },
  { abbreviation: "SAR", meaning: "Specific Air Range" },
  { abbreviation: "SAT", meaning: "Static Air Temperature" },
  { abbreviation: "SATCOM", meaning: "Satellite Communication" },
  { abbreviation: "SAV", meaning: "Starter Air Valve" },
  { abbreviation: "SB", meaning: "Symbol Generator" },
  { abbreviation: "SB", meaning: "Service Bulletin" },
  { abbreviation: "SC", meaning: "Single Chime" },
  { abbreviation: "SCM", meaning: "Spoiler Control Module" },
  { abbreviation: "SCN", meaning: "Specification Change Notice" },
  { abbreviation: "SD", meaning: "System Display" },
  { abbreviation: "SDAC", meaning: "System Data Acquisition Concentrator" },
  { abbreviation: "SD08/28/2024 SDCU", meaning: "Smoke Detector Control Unit" },
  { abbreviation: "SDI", meaning: "Source/Destination Identifier (Bits)" },
  { abbreviation: "SEB", meaning: "Seat Electronics Box" },
  { abbreviation: "SEC", meaning: "Secondary/Security" },
  { abbreviation: "SEC", meaning: "Spoiler and Elevator Computer" },
  { abbreviation: "SECT", meaning: "Sector Scan" },
  { abbreviation: "SEI", meaning: "Standby Engine Indicator" },
  { abbreviation: "SEL", meaning: "Select Selector" },
  { abbreviation: "SELCAL", meaning: "Selective Call (System)" },
  { abbreviation: "SENS", meaning: "Sensitivity" },
  { abbreviation: "SER", meaning: "Service Evaluation Request" },
  { abbreviation: "SERV", meaning: "Service" },
  { abbreviation: "SFC", meaning: "Specific Fuel Consumption" },
  { abbreviation: "SFCC", meaning: "Slat Flat Control Computer" },
  { abbreviation: "SFE", meaning: "Seller Furnished Equiptment" },
  { abbreviation: "SG", meaning: "Specific Gravity" },
  { abbreviation: "SG", meaning: "Symbol Generator" },
  { abbreviation: "SI", meaning: "International System of Units" },
  { abbreviation: "SID", meaning: "Standard Instrument Departure" },
  { abbreviation: "SIL", meaning: "Speech Interference Level" },
  { abbreviation: "SIM", meaning: "Simulation" },
  { abbreviation: "SIS", meaning: "Service Interphone System" },
  { abbreviation: "SITA", meaning: "société internationale de télécom aéro" },
  { abbreviation: "SLCTD", meaning: "Selected" },
  { abbreviation: "SLCTR", meaning: "Selector" },
  { abbreviation: "SLS", meaning: "Sea Level Standard" },
  { abbreviation: "SLST", meaning: "Sea Level Static Turust" },
  { abbreviation: "SLT", meaning: "Slat" },
  { abbreviation: "SMC", meaning: "Stall Management Computer" },
  { abbreviation: "SMP", meaning: "Software Management Plan" },
  { abbreviation: "SOAP", meaning: "Spectrographic Oil Analysis Program" },
  { abbreviation: "SOL", meaning: "Solenoid" },
  { abbreviation: "SOV", meaning: "Shutoff Valve" },
  { abbreviation: "SPC", meaning: "Spare Part Code" },
  { abbreviation: "SPD", meaning: "Speed" },
  { abbreviation: "SPDBRK", meaning: "Speedbrake" },
  { abbreviation: "SPLR", meaning: "Spoiler" },
  { abbreviation: "SPM", meaning: "Stabilizer Position Module" },
  { abbreviation: "SQL", meaning: "Squelch" },
  { abbreviation: "SRP", meaning: "Service Related Problem" },
  { abbreviation: "SRS", meaning: "Speed Reference System" },
  { abbreviation: "SRU", meaning: "Shop Replaceable Unit" },
  { abbreviation: "SSB", meaning: "Single Side Band" },
  { abbreviation: "SSI", meaning: "Small-Scale Integration" },
  { abbreviation: "SSM", meaning: "Sign Status Matrix" },
  { abbreviation: "SSU", meaning: "Saybolt Secotids Universal" },
  { abbreviation: "STA", meaning: "Station" },
  { abbreviation: "STAB", meaning: "Stabilizer" },
  { abbreviation: "STAR", meaning: "Standard Terminal Arrival Route" },
  { abbreviation: "STAT INV", meaning: "Static Inverter" },
  { abbreviation: "STBY", meaning: "Standby" },
  { abbreviation: "STC", meaning: "Supplemental Type Certificate" },
  { abbreviation: "STC", meaning: "Sensitivity Time Control" },
  { abbreviation: "STCM", meaning: "Stabilizer Trim Control Module" },
  { abbreviation: "STD", meaning: "Standard" },
  { abbreviation: "STEERG", meaning: "Steering" },
  { abbreviation: "STOL", meaning: "Short Takeoff and Landing" },
  { abbreviation: "STOVL", meaning: "Short Takeoff and Vertical Landing" },
  { abbreviation: "STRG", meaning: "Steering" },
  { abbreviation: "STS", meaning: "System Status" },
  { abbreviation: "STX", meaning: "Start of Text" },
  { abbreviation: "SUP", meaning: "Supply" },
  { abbreviation: "SURF", meaning: "Surface" },
  { abbreviation: "SVR", meaning: "Shop Visit Rate" },
  { abbreviation: "SW", meaning: "Switch" },
  { abbreviation: "SW", meaning: "Software" },
  { abbreviation: "SWC", meaning: "Stall Warning Computer" },
  { abbreviation: "SYN", meaning: "Synchronize" },
  { abbreviation: "SYNC", meaning: "Synchronous" },
  { abbreviation: "SYS", meaning: "System" },
  { abbreviation: "T", meaning: "Total, True, Turn" },
  { abbreviation: "T-NAV", meaning: "Time Control Navigation" },
  { abbreviation: "T-P", meaning: "Turn Point" },
  { abbreviation: "T/C", meaning: "Top of Climb" },
  { abbreviation: "T/C", meaning: "Thermocouple" },
  { abbreviation: "T/D", meaning: "Top of Descent" },
  { abbreviation: "T/E", meaning: "Trailing Edge" },
  { abbreviation: "T/R", meaning: "Thrust Reverser" },
  { abbreviation: "T12", meaning: "Fan Inlet Total Air Temperature" },
  { abbreviation: "T25", meaning: "(HP) Compressor Inlet Air Temperature" },
  { abbreviation: "T3", meaning: "(HP) Compressor Discharge Air Temperature" },
  { abbreviation: "T5", meaning: "(LP) Turbine Discharge Total Air Temperature" },
  { abbreviation: "TA", meaning: "Traffic Advisory" },
  { abbreviation: "TACAN", meaning: "Tactical Air Navigation" },
  { abbreviation: "TACH", meaning: "Tachometer" },
  { abbreviation: "TACT", meaning: "Tactical" },
  { abbreviation: "TAI", meaning: "Thermal Anti-Ice" },
  { abbreviation: "TAPRV", meaning: "Trim Air Pressure Regulating Valve" },
  { abbreviation: "TAS", meaning: "True Air Speed" },
  { abbreviation: "TAT", meaning: "Total Air Temperature" },
  { abbreviation: "TAT", meaning: "Turn Around Time" },
  { abbreviation: "TBD", meaning: "To Be Determined" },
  { abbreviation: "TBO", meaning: "Time Between Overhaul" },
  { abbreviation: "TC", meaning: "(HP) Turbine Case Temperature" },
  { abbreviation: "TCA", meaning: "Terminal Control Area" },
  { abbreviation: "TCAS", meaning: "Traffic Collision Avoidance System" },
  { abbreviation: "TCC", meaning: "Turbine Case Cooling" },
  { abbreviation: "TCC", meaning: "Turbine Clearance Control" },
  { abbreviation: "TCT", meaning: "Temperature Control Thermostat" },
  { abbreviation: "TDC", meaning: "Top Dead Center" },
  { abbreviation: "TDO", meaning: "Time Delay Opening" },
  { abbreviation: "TE", meaning: "Trailing Edge" },
  { abbreviation: "TECU", meaning: "Electronic Control, Unit Internal Temperature" },
  { abbreviation: "TEG", meaning: "Test Equipment Guidance" },
  { abbreviation: "TEMAC", meaning: "Trailling Edge of The Mean Aerodynamic Chord" },
  { abbreviation: "TEMP", meaning: "Temperature" },
  { abbreviation: "TEMPER", meaning: "Turbine Engine Modular Performance Estimating Routine" },
  { abbreviation: "TEO", meaning: "Engine Oil Temperature" },
  { abbreviation: "TFR", meaning: "Transfer" },
  { abbreviation: "TGB", meaning: "Transfer Gear Box" },
  { abbreviation: "TGT", meaning: "Target" },
  { abbreviation: "THP", meaning: "(HP) Fuel Temperature" },
  { abbreviation: "THR", meaning: "Thrust" },
  { abbreviation: "THR HOLD", meaning: "Throttle Hold" },
  { abbreviation: "THROT", meaning: "Throttle" },
  { abbreviation: "THRSH", meaning: "Threshold" },
  { abbreviation: "THRU", meaning: "Through" },
  { abbreviation: "THS", meaning: "Trimmable Horizontal Stabilizer" },
  { abbreviation: "TIG", meaning: "Tungsten Inert Gas" },
  { abbreviation: "TIR", meaning: "Total Indicator Reading" },
  { abbreviation: "TIT", meaning: "Turbine Inlet Temperature" },
  { abbreviation: "TK", meaning: "Tank" },
  { abbreviation: "TK", meaning: "Track" },
  { abbreviation: "TKE", meaning: "Track Angle Error" },
  { abbreviation: "TLA", meaning: "Thrust Lever Angle, Throttle Lever Angle" },
  { abbreviation: "TM", meaning: "Torque Motor" },
  { abbreviation: "TMC", meaning: "Thrust Management Computer" },
  { abbreviation: "TMC", meaning: "Torque Motor Current" },
  { abbreviation: "TMR", meaning: "Timer" },
  { abbreviation: "TMS", meaning: "Thrust Management System" },
  { abbreviation: "TMSP", meaning: "Thrust Mode Select Panel" },
  { abbreviation: "TO, T/O", meaning: "Takeoff" },
  { abbreviation: "TO/GA", meaning: "Takeoff/Go Around" },
  { abbreviation: "TOGW", meaning: "Take-Off Gross Weight" },
  { abbreviation: "TOL", meaning: "Tolerance" },
  { abbreviation: "TOW", meaning: "Take-Off Weight" },
  { abbreviation: "TPIU", meaning: "Type Pressure Indicator Unit" },
  { abbreviation: "TR", meaning: "Transmitter Receiver" },
  { abbreviation: "TR", meaning: "Transformer Rectifier" },
  { abbreviation: "TRA", meaning: "Thrust Lever Resolver Angle" },
  { abbreviation: "TRANS", meaning: "Transition" },
  { abbreviation: "TRDV", meaning: "Thrust Reverser Directional Valve" },
  { abbreviation: "TRF", meaning: "Tuned Radio Frequency Receiver" },
  { abbreviation: "TRK", meaning: "Track" },
  { abbreviation: "TROPO", meaning: "TROPOpause" },
  { abbreviation: "TRPV", meaning: "Thrust Reverser Pressurizing Valve" },
  { abbreviation: "TRU", meaning: "Transformer Rectifier Units" },
  { abbreviation: "TSFC", meaning: "Thrust Specific Fuel Consumption" },
  { abbreviation: "TSH", meaning: "Trouble Shooting Handbook" },
  { abbreviation: "TSI", meaning: "Time Since Installation" },
  { abbreviation: "TSM", meaning: "Trouble Shooting Manual" },
  { abbreviation: "TSN", meaning: "Time Since New" },
  { abbreviation: "TST", meaning: "Test" },
  { abbreviation: "TT2", meaning: "Engine Inlet Temperature" },
  { abbreviation: "TTG", meaning: "Time To Go" },
  { abbreviation: "TURB", meaning: "Turbine" },
  { abbreviation: "TURBL", meaning: "Turbulence" },
  { abbreviation: "TVBC", meaning: "Turbine Vane and Blade Cooling" },
  { abbreviation: "TVOR", meaning: "Terminal Vor" },
  { abbreviation: "TYP", meaning: "Typical" },
  { abbreviation: "UART", meaning: "Universal Asynchronous Receiver Transmitter" },
  { abbreviation: "UBR", meaning: "Utility Bus Relays" },
  { abbreviation: "UER", meaning: "Unscheduled Engine Removal" },
  { abbreviation: "UFD", meaning: "Unit Fault Data" },
  { abbreviation: "UHF", meaning: "Ultra High Frequency" },
  { abbreviation: "ULB", meaning: "Underwater Locator Beacon" },
  { abbreviation: "UNC", meaning: "United National, coarse" },
  { abbreviation: "UNF", meaning: "United National, fine" },
  { abbreviation: "UNLK", meaning: "Unlock" },
  { abbreviation: "UNSCHD", meaning: "Unscheduled" },
  { abbreviation: "UPR", meaning: "Upper" },
  { abbreviation: "US", meaning: "United States" },
  { abbreviation: "USB", meaning: "Upper Side Band" },
  { abbreviation: "USS", meaning: "United Sates, standard" },
  { abbreviation: "UTC", meaning: "Coordinated Universal Time" },
  { abbreviation: "V", meaning: "Volt" },
  { abbreviation: "V- NAV", meaning: "Vertical Navigation" },
  { abbreviation: "V/S", meaning: "Vertical Speed" },
  { abbreviation: "V1", meaning: "Takeoff Decision Speed" },
  { abbreviation: "V2", meaning: "Scheduled Target Speed (T.O. at 35 feed)" },
  { abbreviation: "V3", meaning: "Flap Retraction Speed" },
  { abbreviation: "V4", meaning: "Slat Retraction Speed" },
  { abbreviation: "VAC", meaning: "Volts of Alternating Current" },
  { abbreviation: "VAPC", meaning: "Variable Absolute Pressure Controller" },
  { abbreviation: "VAR", meaning: "Volt Ampere Reactive" },
  { abbreviation: "VBV", meaning: "Variable Bypass Valve" },
  { abbreviation: "VBV", meaning: "Variable Bleed Valve" },
  { abbreviation: "VCU", meaning: "Vacuum Control Unit" },
  { abbreviation: "VDC", meaning: "Volts of Direct Current" },
  { abbreviation: "VDEV", meaning: "Vertical Deviation" },
  { abbreviation: "VEF", meaning: "Critical Engine Failure Speed" },
  { abbreviation: "VERT", meaning: "Vertical" },
  { abbreviation: "VFE", meaning: "Maxi Velocity Flaps Extended" },
  { abbreviation: "VFO", meaning: "Variable Frequency Oscillator" },
  { abbreviation: "VFR", meaning: "Visual Flight Rules" },
  { abbreviation: "VFTO", meaning: "Velocity Final Take-Off" },
  { abbreviation: "VG", meaning: "Vertical Gyro" },
  { abbreviation: "VHF", meaning: "Very High Frequency" },
  { abbreviation: "VIB", meaning: "Vibration" },
  { abbreviation: "VIGV", meaning: "Variable Inlet Guide Vane" },
  { abbreviation: "VLE", meaning: "Velocity Maximum Landing Gear Extend" },
  { abbreviation: "VLF", meaning: "Very Low Frequency" },
  { abbreviation: "VLO", meaning: "Velocity Landing Operations" },
  { abbreviation: "VLS", meaning: "Lower Selectable Speed" },
  { abbreviation: "VLV", meaning: "Valve" },
  { abbreviation: "VMBE", meaning: "Brake Energy Limited Speed" },
  { abbreviation: "VMCA", meaning: "Velocity Minimum Control Air Speed (air)" },
  { abbreviation: "VMCG", meaning: "Velocity Minimum Control Ground Speed" },
  { abbreviation: "VMIN", meaning: "Minimum Operating Speed" },
  { abbreviation: "VMO", meaning: "Maximum Operating Speed" },
  { abbreviation: "VMU", meaning: "Minimum Unstick Speed" },
  { abbreviation: "Vol", meaning: "Volume" },
  { abbreviation: "VOLT", meaning: "Voltage" },
  { abbreviation: "VOR", meaning: "VHF Omnidirectional and Radio Range" },
  { abbreviation: "VOR-D", meaning: "VOR-DME" },
  { abbreviation: "VORTAC", meaning: "VOR and TACAN co-located, a VOR combined with UHF tactical air navigation" },
  { abbreviation: "VOX", meaning: "Voice" },
  { abbreviation: "VPS", meaning: "Value Position Sensor" },
  { abbreviation: "VR", meaning: "Rotation Speed" },
  { abbreviation: "VREF", meaning: "Landing Reference Speed" },
  { abbreviation: "VS", meaning: "Stalling Speed At Which Air Plane Is Controllable" },
  { abbreviation: "VSC", meaning: "Vacuum System Controller" },
  { abbreviation: "VSI", meaning: "Vertical Speed Indicator" },
  { abbreviation: "VSS", meaning: "Stick Shaker Speed" },
  { abbreviation: "VSTOL", meaning: "Vertical or Short Takeoff and Landing" },
  { abbreviation: "VSV", meaning: "Variable Stator Vane" },
  { abbreviation: "VSWR", meaning: "Voltage Standing Wave Rectifier" },
  { abbreviation: "VTK", meaning: "Vertical Track" },
  { abbreviation: "VTOL", meaning: "Vertical Take Off and Landing" },
  { abbreviation: "VTVM", meaning: "Vacuum-Tube Voltmeter" },
  { abbreviation: "W", meaning: "Weight, West, White, Watt" },
  { abbreviation: "W/D", meaning: "Wiring Diagram" },
  { abbreviation: "W/W", meaning: "Wheel Well" },
  { abbreviation: "WAI", meaning: "Wing Anti Ice" },
  { abbreviation: "WARN", meaning: "Warning" },
  { abbreviation: "WBL", meaning: "Wing Buttock Line" },
  { abbreviation: "WBC", meaning: "Weight and Balance Computer" },
  { abbreviation: "WDM", meaning: "Wiring Diagram Manual" },
  { abbreviation: "WDO", meaning: "Window" },
  { abbreviation: "WEU", meaning: "Warning Electronic Unit" },
  { abbreviation: "WFM", meaning: "Weight of Fuel Meterred" },
  { abbreviation: "WG", meaning: "Wing" },
  { abbreviation: "WGT, WT", meaning: "Weight" },
  { abbreviation: "WHC", meaning: "Window Heat Computer" },
  { abbreviation: "WHLS", meaning: "Wheels" },
  { abbreviation: "WHR", meaning: "Watt Hour" },
  { abbreviation: "WL", meaning: "Water Line" },
  { abbreviation: "WOW", meaning: "Weight On Wheel" },
  { abbreviation: "WPT", meaning: "Waypoint" },
  { abbreviation: "WS", meaning: "Wing Station" },
  { abbreviation: "WSHLD", meaning: "Windshield" },
  { abbreviation: "WTB", meaning: "Wing Tip Brake" },
  { abbreviation: "WX", meaning: "Weather" },
  { abbreviation: "WX/T", meaning: "Weather/Turbulence" },
  { abbreviation: "WXR", meaning: "Weather Radar" },
  { abbreviation: "XCVR", meaning: "Transceiver" },
  { abbreviation: "XDCR", meaning: "Transducer" },
  { abbreviation: "XFER", meaning: "Transfer" },
  { abbreviation: "XG", meaning: "Center of Gravity" },
  { abbreviation: "XMISSION", meaning: "Transmission" },
  { abbreviation: "XMIT", meaning: "Transmit" },
  { abbreviation: "SMTR", meaning: "Transmitter" },
  { abbreviation: "XPDR", meaning: "Transmitter" },
  { abbreviation: "XPDR", meaning: "Transponder" },
  { abbreviation: "XTK", meaning: "Cross Track Error" },
  { abbreviation: "Y", meaning: "Yellow" },
  { abbreviation: "Y/D", meaning: "Yaw Damper" },
  { abbreviation: "YDM", meaning: "Yaw Damper Module" },
  { abbreviation: "ZFW", meaning: "Zero Fuel Weight" },
  { abbreviation: "ZP", meaning: "Pressure Altitude" }
];

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

// Filter table based on search input
function filterTable() {
  const input = document.getElementById('searchBox').value.toUpperCase();
  const rows = document.querySelectorAll('#aviationTable tbody tr');

  rows.forEach(row => {
    const abbrev = row.cells[0].textContent.toUpperCase();
    const meaning = row.cells[1].textContent.toUpperCase();
    if (abbrev.includes(input) || meaning.includes(input)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
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







// Admin credentials (in a real app, these would be stored securely server-side)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "Aviatermrefer102" // In production, use proper password hashing
};

// Session management
let isAdminLoggedIn = false;

// DOM elements
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const closeModal = document.querySelector(".close");

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

// Filter table based on search input
function filterTable() {
  const input = document.getElementById('searchBox').value.toUpperCase();
  const rows = document.querySelectorAll('#aviationTable tbody tr');

  rows.forEach(row => {
    const abbrev = row.cells[0].textContent.toUpperCase();
    const meaning = row.cells[1].textContent.toUpperCase();
    if (abbrev.includes(input) || meaning.includes(input)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Supplement functions
function loadSupplements() {
  const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  stored.forEach(entry => addSupplementRow(entry.abbr, entry.meaning, entry.status));
}

function submitSupplement() {
  const abbr = document.getElementById("newAbbr").value.trim();
  const meaning = document.getElementById("newMeaning").value.trim();

  if (!abbr || !meaning) {
    alert("Please enter both abbreviation and meaning.");
    return;
  }

  const entry = { abbr, meaning, status: "Pending Approval" };
  const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  stored.push(entry);
  localStorage.setItem("supplementAbbr", JSON.stringify(stored));

  addSupplementRow(abbr, meaning, entry.status);

  document.getElementById("newAbbr").value = "";
  document.getElementById("newMeaning").value = "";
}

function addSupplementRow(abbr, meaning, status) {
  const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).textContent = abbr;
  newRow.insertCell(1).textContent = meaning;
  newRow.insertCell(2).textContent = status;

  const actionCell = newRow.insertCell(3);
  if (status === "Pending Approval" && isAdminLoggedIn) {
    const approveBtn = document.createElement("button");
    approveBtn.textContent = "Approve";
    approveBtn.className = "approve-btn";
    approveBtn.onclick = function() {
      newRow.cells[2].textContent = "Approved";
      updateStatus(abbr, "Approved");
      approveBtn.remove();
    };
    actionCell.appendChild(approveBtn);
  }
}

function updateStatus(abbr, newStatus) {
  const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  const updated = stored.map(entry => entry.abbr === abbr ? { ...entry, status: newStatus } : entry);
  localStorage.setItem("supplementAbbr", JSON.stringify(updated));
}

// Login functions
function showLoginModal() {
  loginModal.style.display = "block";
}

function hideLoginModal() {
  loginModal.style.display = "none";
}

function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    isAdminLoggedIn = true;
    hideLoginModal();
    loadSupplements(); // Reload supplements to show approve buttons
    alert("Login successful! You can now approve abbreviations.");
  } else {
    alert("Invalid credentials. Please try again.");
  }
  
  // Clear form
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// Event Listeners
closeModal.onclick = hideLoginModal;
window.onclick = function(event) {
  if (event.target === loginModal) {
    hideLoginModal();
  }
};

loginForm.addEventListener("submit", handleLogin);

// Initialize the page
window.addEventListener("DOMContentLoaded", loadSupplements);













function loadSupplements() {
  const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  stored.forEach(entry => addSupplementRow(entry.abbr, entry.meaning, entry.status));
}

function submitSupplement() {
  const abbr = document.getElementById("newAbbr").value.trim();
  const meaning = document.getElementById("newMeaning").value.trim();

  if (!abbr || !meaning) {
    alert("Please enter both abbreviation and meaning.");
    return;
  }

  const entry = { abbr, meaning, status: "Pending Approval" };
  const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  stored.push(entry);
  localStorage.setItem("supplementAbbr", JSON.stringify(stored));

  addSupplementRow(abbr, meaning, entry.status);

  document.getElementById("newAbbr").value = "";
  document.getElementById("newMeaning").value = "";
}

function addSupplementRow(abbr, meaning, status) {
  const table = document.getElementById("supplementTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).textContent = abbr;
  newRow.insertCell(1).textContent = meaning;
  newRow.insertCell(2).textContent = status;

  const actionCell = newRow.insertCell(3);
  if (status === "Pending Approval") {
    const approveBtn = document.createElement("button");
    approveBtn.textContent = "Approve";
    approveBtn.onclick = function () {
      newRow.cells[2].textContent = "Approved";
      updateStatus(abbr, "Approved");
      approveBtn.remove();
    };
    actionCell.appendChild(approveBtn);
  } else {
    actionCell.textContent = "-";
  }

  const selectCell = newRow.insertCell(4);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.dataset.abbr = abbr;
  selectCell.appendChild(checkbox);
}

function updateStatus(abbr, newStatus) {
  const stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  const updated = stored.map(entry => entry.abbr === abbr ? { ...entry, status: newStatus } : entry);
  localStorage.setItem("supplementAbbr", JSON.stringify(updated));
}

function removeSelected() {
  const checkboxes = document.querySelectorAll('#supplementTable tbody input[type="checkbox"]:checked');
  let stored = JSON.parse(localStorage.getItem("supplementAbbr")) || [];
  const abbrsToRemove = Array.from(checkboxes).map(cb => cb.dataset.abbr);
  stored = stored.filter(entry => !abbrsToRemove.includes(entry.abbr));
  localStorage.setItem("supplementAbbr", JSON.stringify(stored));
  loadSupplements();
}

function removeAll() {
  if (confirm("Are you sure you want to remove all supplement entries?")) {
    localStorage.removeItem("supplementAbbr");
    loadSupplements();
  }
}

function downloadCSV() {
  db.ref("supplements").once("value", snapshot => {
    const data = snapshot.val();
    let csv = "Abbreviation,Meaning,Status\n";
    for (let key in data) {
      const entry = data[key];
      csv += `"${entry.abbr}","${entry.meaning}","${entry.status}"\n`;
    }

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "supplements.csv";
    a.click();
    URL.revokeObjectURL(url);
  });
}


function enableAdminMode() {
  document.getElementById("adminControls").style.display = "block";
}

// Load saved entries on page load
window.addEventListener("DOMContentLoaded", () => {
  loadSupplements();

  // Fake admin login simulation for demo:
  // Replace with real auth in production
  const isAdmin = true; // or from login logic
  if (isAdmin) enableAdminMode();
});





// Firebase Auth
const auth = firebase.auth();

// Đăng nhập admin
function loginAdmin() {
  const email = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value.trim();

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("adminLogin").style.display = "none";
      document.getElementById("adminControls").style.display = "block";
    })
    .catch(error => {
      document.getElementById("loginError").textContent = "Login failed: " + error.message;
    });
}

// Đăng xuất
function logoutAdmin() {
  auth.signOut().then(() => {
    document.getElementById("adminControls").style.display = "none";
    document.getElementById("adminLogin").style.display = "block";
  });
}

// Theo dõi trạng thái đăng nhập
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("adminControls").style.display = "block";
  } else {
    document.getElementById("adminLogin").style.display = "block";
    document.getElementById("adminControls").style.display = "none";
  }
});
