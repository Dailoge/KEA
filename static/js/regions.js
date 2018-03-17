var region2country = [{"r":"America Rep. Office","c":["United States"]},{"r":"Canada Rep. Office","c":["Canada"]},{"r":"Central & Eastern Europe,& Nordic Region","c":["Romania","Poland","Latvia","Lithuania","Estonia","Moldova (the Republic of)","Greece","Serbia","Hungary","Czech Republic","Bulgaria","Slovakia","Croatia","Bosnia and Herzegovina","Albania","Macedonia (the Republic of)","Slovenia","Sweden","Austria","Finland","Norway","Cyprus","Iceland","Denmark","Montenegro","Liechtenstein"]},{"r":"Central Asia Region","c":["Mongolia","Uzbekistan","Tajikistan","Kazakhstan","Kyrgyzstan","Ukraine","Azerbaijan","Turkmenistan","Georgia","Belarus","Turkey"]},{"r":"China Region","c":["China","Korea (the Democratic People's Republic of)"]},{"r":"Japan Rep. Office","c":["Korea (the Republic of)","Japan"]},{"r":"Middle East Region","c":["Pakistan","Afghanistan","Jordan","Qatar","Saudi Arabia","Syrian Arab Republic","Iran (the Islamic Republic of)","Yemen","Oman","United Arab Emirates","Iraq","Kuwait","Lebanon","Bahrain","Palestine"]},{"r":"North Africa Region","c":["Cote d'Ivoire","Ethiopia","Congo (the Democratic Republic of the)","Djibouti","Cameroon","Chad","Mali","Niger","Senegal","Burkina Faso","Guinea","Benin","Togo","Congo","Central African Republic","Gabon","Equatorial Guinea","Guinea Bissau","Gambia","Libya","Sudan","Mauritania","Morocco","Tunisia","Algeria","Egypt","South Sudan","Eritrea","Cabo Verd"]},{"r":"Northern Latin America Area","c":["Brazil","Peru","Chile","Argentina","Colombia","Ecuador","Mexico","Cuba","Venezuela","Uruguay","Panama","Honduras","Bolivia","Paraguay","Trinidad and Tobago","Costa Rica","Jamaica","El Salvador","Guatemala","Dominican Republic","Nicaragua","Puerto Rico","Belize"]},{"r":"Russia Rep. Office","c":["Russian Federation","Armenia"]},{"r":"South Pacific Region","c":["Australia","Papua New Guinea","Brunei Darussalam","Singapore","Philippines","Indonesia","Fiji","New Zealand","Cook Islands","Timor Leste","Cocos (Keeling) Islands","Christmas Island","Heard Island and McDonald Islands","Norfolk Island","Niue","Tokelau","Malaysia"]},{"r":"Southeast Asia Region","c":["Hong Kong","Taiwan (Province of China)","Macao","Thailand","Bangladesh","Sri Lanka","India","Viet Nam","Nepal","Cambodia","Lao People's Democratic Republic","Myanmar","Bhutan","Maldives"]},{"r":"Southern-East Africa Region","c":["South Africa","Kenya","Uganda","Nigeria","Ghana","Mauritius","Botswana","Zimbabwe","Zambia","Mozambique","Tanzania, United Republic of","Angola","Madagascar","Namibia","Malawi","Rwanda","Sierra Leone","Burundi","Somalia","Comoros","Swaziland","Seychelles","Sao Tome and Principe","Lesotho","Reunion","Mayotte","Liberi"]},{"r":"West Europe Region","c":["Israel","United Kingdom","Germany","Italy","France","Spain","Portugal","Ireland","Switzerland","Belgium","Netherlands","Luxembourg","San Marino","Holy See (Vatican City State)","Monaco","Andorra","Malta"]}];
var country2operator = [
    {
        "cn": "Afghanistan",
        "o": [
            "Afghan Telecom",
            "Afghan Wireless (Telephone Systems International)",
            "MTN Afghanistan (MTN Group)",
            "Roshan (AKFED, Cable & Wireless & TeliaSonera)",
            "Etisalat Afghanistan"
        ]
    },
    {
        "cn": "Albania",
        "o": [
            "Albtelecom",
            "INFO-TELECOM",
            "Abcom",
            "Tring Communications",
            "Primo Communications",
            "Vodafone Albania (Vodafone)",
            "Neofone",
            "AMC (Cosmote)",
            "Mobile 4 Al (PTK-Vala)",
            "Eagle Mobile (Albtelecom)"
        ]
    },
    {
        "cn": "Algeria",
        "o": [
            "Djezzy (Orascom Telecom Algerie (OTA) subsidiary of Orascom Telecom Holding (OTH)",
            "Mobilis (Algérie Télécom Mobile (ATM) subsidiary of Algérie Télécom (AT))",
            "Nedjma (Wataniya Télécom Algérie (WTA) subsidiary of Qatar Telecom - (Qtel)",
            "Algérie Télécom"
        ]
    },
    {
        "cn": "Andorra",
        "o": [
            "Andorra Telecom",
            "Mobiland"
        ]
    },
    {
        "cn": "Angola",
        "o": [
            "Antigua and Barbuda",
            "MSTelcom (Sonangol Group)",
            "Digicel (Digicel Group)",
            "bMobile (Cable & Wireless)",
            "Anguilla",
            "Movicel",
            "Angola Telecom"
        ]
    },
    {
        "cn": "Argentina",
        "o": [
            "Telecom Argentina",
            "Telefonica Argentina",
            "Personal (Telecom Argentina)",
            "Claro (América Móvil)",
            "Movistar (Telefonica Argentina)"
        ]
    },
    {
        "cn": "Armenia",
        "o": [
            "Aruba (the Netherlands)",
            "Digicel (Digicel Group)",
            "Orange Armenia",
            "VivaCell",
            "Beeline (Vimpelcom)"
        ]
    },
    {
        "cn": "Australia",
        "o": [
            "Soul – via Optus Mobile",
            "PennySIM powered by PennyTel – via Vodafone9]",
            "Optus (SingTel)",
            "Time Telecom",
            "Crazy John's – via/owned by Vodafone",
            "Amaysim – via Optus Mobile",
            "Telstra Mobile (Telstra)",
            "Vodafone Australia (Vodafone) and 3 (Hutchison Whampoa)",
            "Primus (Primus Telecom)",
            "Startel Communications – via Optus Mobile",
            "Apex Telecom1]",
            "Hello Mobile - via Vodafone",
            "Virgin Mobile Australia – via Optus Mobile",
            "Exetel Mobile - via Optus Mobile5]",
            "Optus Mobile (Singtel)",
            "Just Mobile - via Vodafone7]",
            "Live Connected - via Optus Mobile8]",
            "Telstra (FLO)",
            "Dodo Mobile - via Optus Mobile4]",
            "Lebara Mobile - via Vodafone",
            "Mobile Virtual Network Operators",
            "Lycamobile - via Telstra",
            "GoTalk Mobile - via Vodafone6]",
            "TPG Mobile - via Optus Mobile11]",
            "telnetworks.net.au",
            "Apex Telecom - via Optus Mobile2]",
            "Primus – via Optus Mobile",
            "AAPT (Telecom New Zealand)",
            "Soul (Washington H. Soul Pattinson) (FVLO)",
            "Savvytel – via Optus Mobile",
            "BEST Internet & Telecom (FVLO)",
            "Boost Mobile - via Optus Mobile3]"
        ]
    },
    {
        "cn": "Austria",
        "o": [
            "Telekom Austria",
            "Mobilkom Austria (Telekom Austria and Vodafone)",
            "3 (Hutchison Whampoa)",
            "T-Mobile Austria (Deutsche Telekom)",
            "bob (Telekom Austria) (via Mobilkom Austria)",
            "yesss! (France Telecom) (via Orange)",
            "Red Bull Mobile (Telekom Austria) (via Mobilkom Austria)",
            "Mobile Virtual Network Operators",
            "Tele2UTA (Tele2)",
            "Vectone (via Mobilkom Austria)",
            "Orange Austria (France Telecom)"
        ]
    },
    {
        "cn": "Azerbaijan",
        "o": [
            "Aztelekom",
            "Azerfon",
            "AzEuroTel",
            "Katel",
            "Ultel",
            "Bakcell",
            "BaTelCo",
            "Azercell",
            "Baktelecom",
            "Bahamas, Commenwealth of the"
        ]
    },
    {
        "cn": "Bahrain",
        "o": [
            "MenaTelecom",
            "Batelco",
            "Zain Bahrain (Zain Group)",
            "Viva",
            "LightSpeed Communications"
        ]
    },
    {
        "cn": "Bangladesh",
        "o": [
            "Bayphones Limited",
            "Banglalink (Orascom Telecom)",
            "S A Tel",
            "Robi (Axiata & NTT DoCoMo)",
            "TeleBarbados (Leucadia National)",
            "aarontel",
            "Dhaka Telephone Company Limited",
            "BanglaPhone",
            "BanglaLion (BanglaLion Communications Ltd)",
            "Qubee (Augere)",
            "Barbados",
            "ShebaTelecom",
            "Airtel (Bharti Airtel & Warid Telecom)",
            "OneTel Limited",
            "TeleBarta Limited",
            "Peoples Telecom",
            "Bangladesh Telegraph and Telephone Board",
            "Ranks Telecom Ltd.",
            "WorldTel",
            "jubok phone",
            "TeleTalk (Bangladesh Telegraph and Telephone Board)",
            "LIME (Cable & Wireless Communications)",
            "AccessOne",
            "National Telecom Limited",
            "Grameenphone (Telenor & Grameen Telecom)",
            "Jalalabad Telephone",
            "Citycell (Singtel, Pacific Group & Far East Telecom)"
        ]
    },
    {
        "cn": "Belarus",
        "o": [
            "Diallog (Belcel)",
            "MTS (Mobile TeleSystems)",
            "Beltelecom",
            "Velcom (Telekom Austria)",
            "Life"
        ]
    },
    {
        "cn": "Belgium",
        "o": [
            "ALLO telecom (via Base)",
            "ZONIQ (via Base)",
            "1Mobile (Carrefour & Effortel) (via Base)",
            "Telenet (Liberty Global) (FLO)",
            "XL Call",
            "Ortel Mobile (via Base)",
            "Belgacom (FLO)",
            "Aldi Talk (Aldi) (via Base)",
            "Mister Bing",
            "Simyo (KPN) (via Base)",
            "Scarlet (Belgacom) (FLO)",
            "Mobile Vikings (via Base)",
            "Dixitel (via Base)",
            "Euro Minutes",
            "Mobistar (France Télécom)",
            "Tele2/Versatel (KPN) (FLO)",
            "Proximus (Belgacom)",
            "Mobistar SOS (France Télécom) (via Mobistar)",
            "BASE (KPN)",
            "NRJ Mobile (NRJ Radio) (via Base)",
            "Mobile Virtual Network Operators",
            "Ay Yildiz (via Base)",
            "Lycamobile",
            "Telenet Mobile (Liberty Global) (via Mobistar)",
            "VOO (FLO)",
            "Mobile World"
        ]
    },
    {
        "cn": "Belize",
        "o": [
            "Bermuda",
            "CellOne (CellOne Group)",
            "Belize Telecoms",
            "Digicel (Digicel Group)",
            "M3Wireless (CellOne Group)"
        ]
    },
    {
        "cn": "Benin",
        "o": [
            "MTN (MTN Group)",
            "Benin Telecoms",
            "LIBERCOM",
            "BBCOM (Bell Bénin Communication)",
            "GLOBACOM",
            "MOOV Bénin"
        ]
    },
    {
        "cn": "Bhutan",
        "o": [
            "TASHI cell",
            "B mobile cell."
        ]
    },
    {
        "cn": "Bolivia",
        "o": [
            "Tigo Bolivia (Millicom)",
            "Digicel (Digicel Group)",
            "Bonaire (the Netherlands)",
            "Nuevatel PCS",
            "Entel (Telecom Italia)"
        ]
    },
    {
        "cn": "Bosnia and Herzegovina",
        "o": [
            "m-tel (Telekom Srbija)",
            "Telekom Srpske (Telekom Srbija)",
            "Eronet (HT Mostar)",
            "BH Line (BH Telecom)",
            "HT Mostar",
            "BH Mobile (BH Telecom)"
        ]
    },
    {
        "cn": "Botswana",
        "o": [
            "Econet Wireless",
            "Mascom Wireless",
            "Botswana Telecommunications Corporation",
            "Bee!"
        ]
    },
    {
        "cn": "Brazil",
        "o": [
            "DST Communications (DST-COM)",
            "Claro (América Móvil)",
            "B-Mobile Communications Sdn Bhd (B-Mobile)",
            "Sercomtel Celular",
            "Brunei",
            "TIM (Telecom Italia)",
            "Oi Fixo",
            "VIVO (Telefónica)",
            "Nextel",
            "Brunei Telekom TelBru",
            "TIM Fixo",
            "Oi (Telemar Norte Leste)",
            "Vodafone",
            "CTBC",
            "GVT",
            "Embratel (Livre & NET Fone)",
            "Intelig Telecom2]",
            "British Virgin Islands (UK)",
            "SERCOMTEL"
        ]
    },
    {
        "cn": "Bulgaria",
        "o": [
            "Alo, Da! (virtual)",
            "Neterra",
            "Petrol Mobile (virtual)",
            "Bob (virtual)",
            "ITD Network",
            "Interoute",
            "Nexcom Bulgaria (Nexcom)",
            "Cabletel",
            "Orbitel (Spectrum Net, part of Alfa Finance Holding)",
            "GloBul (Cosmote)",
            "Vivacom Bulgarian Telecommunications Company",
            "Vivacom (Bulgarian Telecommunications Company)",
            "Vestitel",
            "Spectrum Net",
            "Mobiltel (Telekom Austria)"
        ]
    },
    {
        "cn": "Burkina Faso",
        "o": [
            "Airtel Burkina Faso S.A.",
            "Onatel",
            "Celtel (Zain Group)",
            "Telecel Faso S.A."
        ]
    },
    {
        "cn": "Burundi",
        "o": [
            "Hits Telecom",
            "Onamob",
            "Econet Wireless",
            "Safari",
            "U-Com"
        ]
    },
    {
        "cn": "Cambodia",
        "o": [
            "TMIC (Telekom Malaysia)",
            "Mobitel (Millicom S.A.)",
            "Camshin (Shin Satellite, Thailand)",
            "Honey Patel",
            "Sotelco (Beeline)",
            "Ministry of Posts and Telecommunications"
        ]
    },
    {
        "cn": "Cameroon",
        "o": [
            "Camtel",
            "Orange Cameroon (owned by France Telecom)",
            "MTN Cameroon"
        ]
    },
    {
        "cn": "Canada",
        "o": [
            "DCI Telecom",
            "Rogers Telecom (Rogers Communications)",
            "Fido Solutions (Rogers Communications)",
            "MTS",
            "Videotron",
            "SaskTel",
            "Westman Communications Group",
            "MTS Mobility (MTS)",
            "CVMóvel",
            "ThinkTel",
            "Aliant (Bell Canada) www.bell.ca",
            "Eastlink",
            "Mobilicity",
            "Cape Verde",
            "Télébec Mobilité",
            "Bruce Municipal Telephone Service",
            "Bell Mobility (Bell Canada)",
            "Rogers Wireless (Rogers Communications)",
            "WIND Mobile",
            "Northwestel",
            "PC Mobile",
            "Wightman Telecom LTD.",
            "ICE Wireless",
            "Digicel (Digicel Group)",
            "DMTS Mobility",
            "Petro-Canada Mobility",
            "Solo Mobile",
            "Mobile Virtual Network Operators",
            "SaskTel Mobility (SaskTel)",
            "Public mobile(coming soon)",
            "Cayman Islands (UK)",
            "Telus www.telus.ca",
            "Bell Canada www.bell.ca",
            "Telus Mobility (Telus)",
            "Cabo Verde Telecom",
            "SearsConnect",
            "LIME - www.time4lime.com/ky/",
            "7-Eleven Wireless",
            "Virgin Mobile"
        ]
    },
    {
        "cn": "Central African Republic",
        "o": [
            "Caratel (Socatel)",
            "Socatel (France Télécom)"
        ]
    },
    {
        "cn": "Chad",
        "o": [
            "Celtel (Zain Group)",
            "Tigo Chad (Millicom)"
        ]
    },
    {
        "cn": "Chile",
        "o": [
            "Telefónica (formerly CTC)",
            "Claro (América Móvil)",
            "Virgin Mobile",
            "CMET",
            "VTR (Liberty Global)",
            "Compañía de Teléfonos de Coyhaique (Telcoy)",
            "Telefónica del Sur (GTD)",
            "Gtd Telesat (GTD)",
            "Gtd Manquehue (GTD)",
            "Rural Telecommunications Chile S.A. (RTC)",
            "Claro HFC (América Móvil)",
            "Movistar (Telefónica)",
            "Nextel",
            "Entel PCS (Entel)",
            "Mobile Virtual Network Operators",
            "GTD Movil (GTD)",
            "Entelphone (Entel)",
            "Comunicación y Telefonía Rural (CTR)"
        ]
    },
    {
        "cn": "China",
        "o": [
            "China Telecom",
            "China Unicom",
            "China Mobile"
        ]
    },
    {
        "cn": "Colombia",
        "o": [
            "Emcali",
            "Comcel Colombia (América Móvil)",
            "UNE (Formerly EPM - Empresas Públicas de Medellín",
            "Uff",
            "Tigo Colombia (Millicom, ETB, EPM)",
            "Movistar (Telefónica)",
            "Telefonica Telecom",
            "Avantel",
            "ETB"
        ]
    },
    {
        "cn": "Comoros",
        "o": [
            "Celtel (Zain Group)",
            "STC (Standard Telecom Congo)",
            "Supercell",
            "Vodacom (Vodafone)",
            "Congo Chine Télécoms",
            "Tigo Democratic Republic of Congo (MIllicom)",
            "Congo, Republic of",
            "Warid Republic of Congo (Warid Telecom)",
            "Cook Islands (New Zealand)",
            "Congo, Democratic Republic of",
            "MTN Democratic Republic of Congo (MTN Group)",
            "GTC"
        ]
    },
    {
        "cn": "Costa Rica",
        "o": [
            "Instituto Costarricense de Electricidad (Kolbi)",
            "GTSvoip.com (Voip Provider for call centers) (http://www.gtsvoip.com)",
            "I.C.E (Instituto Costarricense de Electricidad)",
            "Crexpedio.com (Corporate Voip Interconectivity)(http://www.crexpedio.com)",
            "Telefonica (Movistar)",
            "Voip Conectivity",
            "Voip Provider for call centers",
            "America Movil (http://www.claro.cr Claro)"
        ]
    },
    {
        "cn": "Croatia",
        "o": [
            "H1",
            "Tele2",
            "T-Hrvatski Telekom (Deutsche Telekom)",
            "Optima Telekom",
            "MVNO- Tomato--http://www.tomato.com.hr/, MVNO BonBon --https://www.bonbon.com.hr/home MVNO- multiplusmobile --- using t-mobile http://www.multiplusmobile.hr/",
            "Digicel (Digicel Group)",
            "VIPnet (Telekom Austria)",
            "Amis Telekom",
            "Curaçao (the Netherlands)",
            "T-Mobile (Deutsche Telekom)"
        ]
    },
    {
        "cn": "Czech Republic",
        "o": [
            "U:fon (MobilKom)",
            "XOTel Czech s.r.o.",
            "O2 (Telefónica)",
            "Vodafone Czech Republic (Vodafone)",
            "GTS Czech3], GTS CE4]",
            "O2 Czech Republic (Telefónica)",
            "Telekom Austria Czech Republic (Telekom Austria)",
            "Call Systems CZ s.r.o.",
            "T-Mobile (Deutsche Telekom)"
        ]
    },
    {
        "cn": "Cuba",
        "o": [
            "Primetel PLC",
            "ETECSA",
            "MTN(AREEBA)",
            "CYTA-VODAFONE",
            "Cyprus, Northern Cyprus",
            "Cyprus, Republic of",
            "CUBACEL",
            "Vodafone Turkey (Vodafone)",
            "Kuzey Kibris Turkcell (Turkcell)",
            "CALLSAT",
            "KKTC Telecom",
            "CYTA",
            "CABLENET"
        ]
    },
    {
        "cn": "Denmark",
        "o": [
            "Yousee",
            "3 (Hutchison Whampoa)",
            "Fullrate",
            "TDC TDC",
            "Telia (TeliaSonera)",
            "TDC",
            "Internet Providers",
            "Telenor (Previously Sonofon, name changed June 15, 2009)"
        ]
    },
    {
        "cn": "Djibouti",
        "o": [
            "Dominica",
            "Digicel (Digicel Group)",
            "Djibouti Telecom"
        ]
    },
    {
        "cn": "Dominican Republic",
        "o": [
            "OneMax",
            "Claro Codetel (América Móvil)",
            "Centennial Dominicana (Centennial Communications)",
            "East Timor",
            "Tricom",
            "Wind Telecom",
            "Orange (France Télécom)",
            "Timor Telecom"
        ]
    },
    {
        "cn": "Ecuador",
        "o": [
            "Porta (América Móvil)",
            "Alegro PCS (Andinatel)",
            "Movistar Ecuador - part of Telefonica Moviles from Spain",
            "Andinatel"
        ]
    },
    {
        "cn": "Egypt",
        "o": [
            "Etisalat Egypt (Etisalat)",
            "Telecom Egypt",
            "Vodafone Egypt (Vodafone and Telecom Egypt)",
            "Mobinil (France Telecom and Orascom Telecom)",
            "International"
        ]
    },
    {
        "cn": "El Salvador",
        "o": [
            "GTSvoip.com (Voip Provider for call centers)",
            "Movistar (Telefonica)",
            "Digicel (Digicel Group)",
            "Telefónica",
            "Red (Infonet)",
            "Voip Provider for call centers",
            "Claro (América Móvil)",
            "Tigo El Salvador (Millicom)"
        ]
    },
    {
        "cn": "Equatorial Guinea",
        "o": [
            "EriTel",
            "telesonra"
        ]
    },
    {
        "cn": "Estonia",
        "o": [
            "Tele2",
            "Elisa",
            "EMT",
            "Elion"
        ]
    },
    {
        "cn": "Ethiopia",
        "o": [
            "Ethiopian Telecommunications Corporation",
            "Vodafone Faroe Islands",
            "Faroese Telecom",
            "Faroe Islands (Denmark)"
        ]
    },
    {
        "cn": "Fiji",
        "o": [
            "INKK Mobile (Boost Mobile)",
            "Vodafone Fiji (Vodafone)",
            "http://www.tfl.com.fj/",
            "Digicel Fiji (Digicel)"
        ]
    },
    {
        "cn": "Finland",
        "o": [
            "DNA",
            "Finnet (a group of local telephone companies)",
            "Cubio",
            "Globetel",
            "Kolumbus",
            "TeliaSonera",
            "Mobile Virtual Network Operators",
            "Elisa (Elisa and Vodafone)",
            "Saunalahti (Elisa)",
            "Tele Finland (TeliaSonera)"
        ]
    },
    {
        "cn": "France",
        "o": [
            "COLT Telecom France",
            "Darty",
            "Breizh mobile",
            "NRJ mobile",
            "Verizon Business France",
            "Hub Telecom",
            "Erenis",
            "Neuf mobile",
            "Carrefour mobile (Carrefour)",
            "Free Mobile",
            "Completel France",
            "French Polynesia (France)",
            "Free",
            "Tikiphone",
            "Débitel",
            "Virgin mobile",
            "Télé2 mobile (Tele2)",
            "M6 mobile",
            "Prixtel",
            "Zero Forfait",
            "Digicel (Digicel Group)",
            "TF1 mobile",
            "Mobile Virtual Network Operators",
            "Simyo",
            "SFR (Vivendi )",
            "Orange (France Telecom)",
            "Neuf Cegetel",
            "French Guyana (France)",
            "A Mobile (Auchan Telecom)",
            "Universal Music Mobile",
            "France Télécom & Orange Business Services",
            "AT&T France",
            "Bouygues Télécom"
        ]
    },
    {
        "cn": "Gabon",
        "o": [
            "Gabon Telecom (Maroc Telecom)",
            "moov (itisalat)",
            "Airtel (bharti airtel)"
        ]
    },
    {
        "cn": "Gambia",
        "o": [
            "Africell (Lintel Holding)"
        ]
    },
    {
        "cn": "Georgia",
        "o": [
            "Mobitel (Beeline Group) 6]",
            "Akhali Kselebi 5]",
            "Geocell",
            "MagtiCom",
            "Silknet"
        ]
    },
    {
        "cn": "Germany",
        "o": [
            "Simyo (KPN) (via E-Plus)",
            "Ay Yıldız (via E-Plus)",
            "Hansenet (Telefónica)",
            "T-Mobile (Deutsche Telekom)",
            "Ortel Mobile (KPN) (via E-Plus)",
            "Bild Mobile (via Vodafone)",
            "Simply (Drillisch Telecom) (via T-Mobile)",
            "O2 Germany (Telefónica)",
            "Callmobile (Talkline (via T-Mobile)",
            "E-Plus (KPN)",
            "Arcor (Vodafone)",
            "Aldi Talk (Aldi) (via E-Plus)",
            "Deutsche Telekom",
            "Vodafone Germany (Vodafone)",
            "Debitel-light (Debitel)",
            "Che Mobile (Scoot Mobile) (via E-Plus)",
            "Fonic (Telefonica & Lidl) (via O2 Germany)",
            "Mobile Virtual Network Operators",
            "Klarmobil.de (Freenet) (via T-Mobile)",
            "XOTel Europe GmbH",
            "BASE (KPN) (via E-Plus)",
            "Blau.de (KPN) (via E-Plus)",
            "Alternative Operators/Carriers",
            "Congstar (Deutsche Telekom) (via T-Mobile)"
        ]
    },
    {
        "cn": "Ghana",
        "o": [
            "Gibtelecom",
            "Vodafone Ghana",
            "Gibraltar (UK)",
            "CTS Europe",
            "Airtel (Bhar",
            "Cliq (Expresso Telecom)",
            "Globacom (Yet to launch operations in Ghana though the company has acquired the license)"
        ]
    },
    {
        "cn": "Greece",
        "o": [
            "Cosmoline (Virtual Operator)",
            "CYTA Hellas (CYTA)",
            "Vodafone Greece (Vodafone)",
            "Columbia Telecom (Virtual Operator)",
            "MPULSE",
            "Inter Telecom (Virtual Operator/Voip Telephony)",
            "Guadeloupe (France)",
            "Greenland (Denmark)",
            "Hellas On-Line (Intracom Telecom) & (Vodafone)",
            "Guam (US)",
            "Wind (Largo Ltd (SSN Ad-Hoc Committee))",
            "Viva (Virtual Operator/Voip Telephony)",
            "Cosmote (OTE)",
            "First Telecom (Virtual Operator/Voip Telephony)",
            "Voicenet (OTE) (Virtual Operator)",
            "On Telecoms-Vivodi",
            "OmniVoice (Virtual Operator/Voip Telephony)",
            "Digicel (Digicel Group)",
            "Net One-Algonet (Virtual Operator)",
            "Wind Hellas (Largo Ltd (SSN Ad-Hoc Committee))",
            "Grenada",
            "IConnect",
            "OTE (Greek Government) & (Deutsche Telekom)",
            "Forthnet (EIT)"
        ]
    },
    {
        "cn": "Guatemala",
        "o": [
            "Wave telecom",
            "Claro (América Móvil)",
            "Guernsey",
            "Airtel",
            "GTSvoip.com (Voip Provider for call centers)",
            "Telecomunicaciones de Guatemala (América Móvil)",
            "Telecomunique Guatemala (Telecomunique)",
            "AT&T Guatemala (AT&T)",
            "Digicel (Digicel Group)",
            "Sure (part of Cable & Wireless)",
            "Movistar (Telefónica)",
            "Empresa Guatemalteca de Telecomunicaciones (GUATEL) (State own)",
            "Americatel Guatemala (Entel (Chile))",
            "A-Tel (America Telephone)",
            "Voip Provider for call centers",
            "Cablenet (Cablenet)",
            "Tigo Guatemala (Millicom)",
            "Telefónica Guatemala (Telefónica)"
        ]
    },
    {
        "cn": "Guinea",
        "o": [
            "Guinea-Bissau",
            "Sotelgui",
            "Orange",
            "Intercel",
            "Digicel (Digicel Group)",
            "Comcel Haiti (América Móvil)",
            "MTN Guinea Bissau",
            "Natcom S.A (formely Teleco S.A)",
            "Haiti",
            "Cellcom",
            "Guyana",
            "Areeba",
            "Guyana Telephone & Telegraph (GTT)",
            "My Haiti Mobile (My Haiti Mobile)"
        ]
    },
    {
        "cn": "Honduras",
        "o": [
            "China Mobile Hong Kong (formerly known as People)",
            "3 HK (Hutchison 3G)",
            "HK Broadband Network Limited",
            "Wharf T&T Limited",
            "PCCW Mobile",
            "Hong Kong (People's Republic of China)",
            "Digicel (Digicel Group)",
            "PCCW",
            "Hutchison Global Communications",
            "HK Cable Television (i-Cable Communications)",
            "Honducel (Hondutel)",
            "SmarTone-Vodafone",
            "CSL New World Mobility Group (with 1010, One2Free and New World Mobility brand names)",
            "Tigo Honduras (Millicom)",
            "Hondutel",
            "New World Telecommunications Limited",
            "Claro (América Móvil)",
            "SmarTone Communications Limited"
        ]
    },
    {
        "cn": "Hungary",
        "o": [
            "GTS Hungary (GTS CE)",
            "Magyar Telekom (Deutsche Telekom)",
            "Telenor",
            "Digi.Tel (RCS&RDS)",
            "Vodafone",
            "UPC (Liberty Global Europe)",
            "T-Mobile (Deutsche Telekom)"
        ]
    },
    {
        "cn": "Iceland",
        "o": [
            "Vodafone Iceland",
            "Tal",
            "Síminn",
            "Nova Iceland"
        ]
    },
    {
        "cn": "India",
        "o": [
            "Loop Mobile",
            "Virgin Mobile India (MVNO) - CDMA Mobile services has been shut down.",
            "T24 or Talk24 - a Future Group -Tata DoCoMo joint venture. MVNO - kind of royalty program of retail chain of Future Group",
            "Aircel",
            "Airtel",
            "Uninor - Telenor and Unitech Group's Joint Venture.",
            "It is expected Infotel Broadband (majority owned by Reliance Industries) and other BWA (Broadband Wireless Access) spectrum winners will roll out LTE services in India in Q1 of 2013.",
            "3G Operators",
            "At the first phase of 3G in India, data prices are sky-high, mostly beyond the reach of masses except PSUs like BSNL & MTNL have affordable tariffs.",
            "MTS India - (previously Shyam Telelink) offers CDMA service under Sistema-Shyam joint venture.",
            "Cheers Mobile Service - Etisalat DB Private Ltd.",
            "Reliance",
            "WiMax",
            "Bharat Sanchar Nigam Limited (BSNL)",
            "Videocon Mobile Service - a joint venture between Videocon and HFCL",
            "Vodafone Essar",
            "S Tel - Batelco has stakes in it.",
            "Mahanagar Telephone Nigam Limited (MTNL)",
            "Though T24 and Virgin Mobile India are often termed as MVNO, these are actually services of TTSL. TTSL sells their services using these brand names. So neither Virgin Mobile India nor T24 is a true MVNO. In India there is no policy for MVNO till date.",
            "Tata Teleservices",
            "MTS India - in Rajasthan circle only, WLL in all circles.",
            "Idea",
            "Ping Mobile - CDMA Mobile service from HFCL, operates only in Punjab",
            "Tata Docomo rolled out 3G services in November 2010, becoming the first private operator to roll out 3G services. Reliance Communications also rolled out 3G services in December 2010 in Delhi, Kolkata, Mumbai and Chandigarh. In Q1 of 2011 Airtel, Aircel, Idea and Vodafone rolled out their 3G services in India. S Tel did not roll out 3G services till date.",
            "Reliance Communications",
            "Tata Indicom cdma"
        ]
    },
    {
        "cn": "Indonesia",
        "o": [
            "Hamrah Aval",
            "Rightel7]",
            "XL Axiata, has run Mobile payment/wallet",
            "3 (Hutchison Whampoa)",
            "Iran",
            "Kish Free Zone",
            "Smart Telecom (Smart)",
            "Bakrie Telecom (Esia)",
            "MTCE",
            "TCI",
            "Indosat",
            "Indosat, has run Mobile payment/wallet",
            "Taliya",
            "Mobile-8 (Fren)",
            "Sampoerna Telekomunikasi Indonesia (Ceria)",
            "Pasifik Satelit Nusantara (Byru)",
            "Telkomsel (Telkom Indonesia), has run Mobile payment/wallet",
            "TELKOMFlexi (Telkom Indonesia)",
            "Natrindo Telepon Selular (Axis (A division of the Saudi Telecom Company))",
            "MTN Irancell"
        ]
    },
    {
        "cn": "Iraq",
        "o": [
            "Zain Iraq (Zain Group)",
            "Moutiny",
            "Korek Telecom",
            "SanaTel",
            "AsiaCell (Qtel)"
        ]
    },
    {
        "cn": "Ireland",
        "o": [
            "O2 Ireland (Telefónica)",
            "BT Ireland (BT Group)",
            "Tesco Mobile Ireland (Tesco)",
            "Emobile (eircom Group)",
            "Smart Telecom",
            "3 (Hutchison Whampoa)",
            "Meteor (eircom Group)",
            "eircom Mobile (eircom Group)",
            "Postfone (An Post)",
            "UPC Ireland (UPC)",
            "Mobile Virtual Network Operators",
            "eircom (eircom Group)",
            "Tesco Mobile Tesco Mobile",
            "Vodafone Ireland (Vodafone)"
        ]
    },
    {
        "cn": "Israel",
        "o": [
            "Hot",
            "YouPhone 9] ((MVNO) using Orange)",
            "Rami Levi 8] ((MVNO) using Pelephone)",
            "013 Netvision",
            "Orange (Partner)",
            "Golan Telecom",
            "Cellcom",
            "018 X-Fone",
            "Bezeq",
            "012 Smile",
            "Hot Mobile former Mirs Communications Ltd.",
            "see also the Palestinian Territories",
            "Pelephone (Bezeq)",
            "Home Cellular 10] ((MVNO) using Cellcom)"
        ]
    },
    {
        "cn": "Italy",
        "o": [
            "Airtel Italy (Airtel)",
            "Warid",
            "Telecom Italia",
            "TIM (Telecom Italia)",
            "Tiscali SpA",
            "Vodafone Italy (Vodafone)",
            "Wind (Orascom Telecom)",
            "Orange",
            "Isle of Man",
            "Manx Telecom (Telefónica)",
            "Koz",
            "Infostrada (Orascom Telecom)Purchased by Wind in 2001",
            "Poste Mobile (Poste Italiane)",
            "FASTWEB (Swisscom)",
            "Moov",
            "TeleTu (Ex Tele2 Italia)Purchased by Vodafone",
            "MTN",
            "3 (Hutchison Whampoa)",
            "Sure Mobile (Cable and Wireless)",
            "Manx Telecom",
            "green",
            "Ivory Coast"
        ]
    },
    {
        "cn": "Jamaica",
        "o": [
            "Digicel (Digicel Group)",
            "Claro (América Móvil)",
            "Lime (Cable and Wireless Group, UK)",
            "Lime Flow (Columbus Communications Ltd)"
        ]
    },
    {
        "cn": "Japan",
        "o": [
            "KDDI",
            "NTT DoCoMo (NTT)",
            "SoftBank Telecom",
            "WILLCOM",
            "au by KDDI",
            "SoftBank Mobile",
            "NTT"
        ]
    },
    {
        "cn": "Jordan",
        "o": [
            "Kulacom",
            "Zain Jordan (Zain)",
            "Airtel",
            "Jersey",
            "Umniah (Batelco)",
            "Orange Jordan (Jordan Telecom Group & France Telecom)",
            "Jordan Telecom (Jordan Telecom Group)",
            "XPress Telecom (NASCO & Qtel)",
            "Jersey Telecom"
        ]
    },
    {
        "cn": "Kazakhstan",
        "o": [
            "KazakhTelecom",
            "K-Mobile/Excess (Beeline)",
            "Dalacom (Kazakhtelecom)",
            "Neo-Kazakhstan (Tele2)",
            "K-Cell/Active (KazakhTelecom/Fintur)"
        ]
    },
    {
        "cn": "Kenya",
        "o": [
            "Orange (Telkom Kenya and France Télécom)",
            "Korea, South",
            "LG U+",
            "SK Broadband",
            "Telkom Kenya",
            "SK Telecom (SK Group)",
            "Kosovo",
            "Safaricom (Telkom Kenya and Vodafone)",
            "Airtel (Bharti Airtel)",
            "Korea Telecom",
            "Post and Telecom of Kosovo",
            "IPKO",
            "Z-Mobile",
            "D3MVNO IPKO network",
            "KT (Korea Telecom)",
            "Yu (Essar)",
            "Z-Mobile)MVNO Vala network",
            "karuci",
            "LG U+ (LG Group)"
        ]
    },
    {
        "cn": "Kuwait",
        "o": [
            "Zain Kuwait (Zain Group)",
            "VIVA - Kuwait Telecom Company (STC)",
            "Ministry Of Communications - Kuwait {MOC}",
            "Wataniya Telecom (Qtel)"
        ]
    },
    {
        "cn": "Latvia",
        "o": [
            "Tele2",
            "Kurzemes Datorcentrs",
            "Triatel (Telekom Baltija)",
            "LMT",
            "Lattelecom",
            "Bite (TDC)",
            "OPTRON"
        ]
    },
    {
        "cn": "Lebanon",
        "o": [
            "Econet Wireless",
            "Lesothos",
            "Alfa (Management contract to Orascom Telecom)",
            "Mtc touch (Management contract to Zain)",
            "OGERO (MPT)",
            "Vodacom (Telkom and Vodafone)"
        ]
    },
    {
        "cn": "Libya",
        "o": [
            "Almadar (almadar)"
        ]
    },
    {
        "cn": "Liechtenstein",
        "o": [
            "Mobilkom Liechtenstein (Telekom Austria)",
            "Swisscom-Mobile (Swisscom)",
            "Tango (Belgacom)",
            "Orange (France Telecom)"
        ]
    },
    {
        "cn": "Lithuania",
        "o": [
            "Bite",
            "Luxembourg Online",
            "Tango (Belgacom)",
            "VOX",
            "Tele2 Luxembourg (Belgacom)",
            "T-Mobile (Deutsche Telekom)",
            "Makedonski Telekom, T-Home Macedonia",
            "CableTEL 11]",
            "Omnitel",
            "VIP Operator (Telekom Austria)",
            "Cegecom S.A. (www.cegecom.lu)",
            "One (Telekom Slovenia)",
            "Luxemburg",
            "new product MVNO by One.mk - brand name http://www.dzabest.mk/",
            "Neotel Macedonia 12]",
            "VOXMobile (France Télécom)",
            "Tele2",
            "Teo LT",
            "P&TLuxembourg",
            "Telekabel",
            "MVNO-using One.mk- WTI Macedonia - mobile virtual operator 13]-Brand- name AloTelekom.mk <http://www.alotelekom.mk/>",
            "Macedonia,Republic Of"
        ]
    },
    {
        "cn": "Madagascar",
        "o": [
            "orange",
            "3 (Hutchison Whampoa)",
            "Telma",
            "Macau (People's Republic of China)",
            "Airtel"
        ]
    },
    {
        "cn": "Malawi",
        "o": [
            "Celtel (Zain Group)",
            "Malawi Telecom",
            "Access Communication Limited"
        ]
    },
    {
        "cn": "Malaysia",
        "o": [
            "Maxis (Maxis Mobile Sdn Bhd Formerly Binariang)",
            "Dhiraagu (Cable & Wireless)",
            "YTL Communications - YES Broadband - LTE 4G Only.",
            "Time dotCom 14]",
            "Celcom (Formerly TM Touch now Axiata)",
            "AMAX",
            "Merchantrade - via Celcom(2G)",
            "Wataniya Telecom Maldives (Qtel)",
            "ElectComms - PTT & CDMA Only.",
            "P1",
            "U Mobile (3G only within Klang Valley,Domestic Roaming by Celcom)",
            "RedTone Communications 15]",
            "Redtone Mobile 18]- via Celcom(2G)",
            "Mobile Virtual Network Operators",
            "Y-Max Networks Sdn Bhd",
            "Raajjé Online (Focus Infocom)",
            "Maxis",
            "Telekom Malaysia",
            "XOX Mobile 17] - via Celcom",
            "DiGi (Telenor)",
            "TM - TM CDMA",
            "Maldives, Republic of",
            "TuneTalk 16] - via Celcom(2G)"
        ]
    },
    {
        "cn": "Mali",
        "o": [
            "Malitel (Sotelma)",
            "Orange Mali (France Télécom)",
            "Sotelma"
        ]
    },
    {
        "cn": "Malta",
        "o": [
            "GO (Dubai Holding)",
            "Digicel (Digicel Group)",
            "Hello",
            "Martinique (France)",
            "Vodafone Malta (Vodafone)",
            "Sky",
            "GO mobile (Dubai Holding)",
            "PING (MVNO)",
            "VFC Mobile (MVNO)",
            "Melita Mobile (3G/UMTS)",
            "Redtouch Fone (MVNO)"
        ]
    },
    {
        "cn": "Mexico",
        "o": [
            "Moldova",
            "Alestra",
            "Telmex",
            "SunVoice",
            "Unité",
            "Grupo Teling",
            "Movistar (Telefonica)",
            "Orange",
            "Moldcell",
            "Telcel (América Móvil)",
            "Axtel",
            "Maxcom",
            "Eventis",
            "Unefón",
            "Nextel",
            "Megafón",
            "Iusacell",
            "Moldtelecom",
            "Avantel"
        ]
    },
    {
        "cn": "Monaco",
        "o": [
            "Monaco Telecom"
        ]
    },
    {
        "cn": "Mongolia",
        "o": [
            "Mobicom",
            "Skytel",
            "GMobile",
            "Монголын цахилгаан холбоо",
            "Unitel"
        ]
    },
    {
        "cn": "Montenegro",
        "o": [
            "t-mobile",
            "t-com",
            "telenor",
            "m:tel]"
        ]
    },
    {
        "cn": "Morocco",
        "o": [
            "Méditel (Finance com and Telefónica)",
            "Maroc Telecom",
            "Wana (ONA & Zain)"
        ]
    },
    {
        "cn": "Mozambique",
        "o": [
            "MCel (Government)",
            "Vodacom (Telkom and Vodafone)",
            "Telecommunicacoes De Mozambique (TDM)"
        ]
    },
    {
        "cn": "Netherlands",
        "o": [
            "BudgetPhon",
            "Edutel",
            "One tel",
            "Primus",
            "Versatel (Tele2)",
            "MTV Mobile",
            "KPN Mobile (KPN) (900/1800)",
            "Essent Kabelcom (Essent)",
            "Ziggo",
            "Scarlet (Belgacom)",
            "Simyo (KPN) (via KPN)",
            "Mobile Virtual Network Operators",
            "BT (BT Group)",
            "Vodafone Netherlands (Vodafone) (900)",
            "Ortel Mobile (KPN) (via KPN)",
            "Simyo",
            "UPC Netherlands",
            "Tele2",
            "Telfort (KPN)",
            "KPN",
            "Simpel",
            "NetGuard",
            "Aldi Talk (Aldi) (via KPN)",
            "T-Mobile Netherlands (Deutsche Telekom) (1800)"
        ]
    },
    {
        "cn": "New Zealand",
        "o": [
            "Black & White - via Vodafone",
            "Telecom New Zealand",
            "MVNO",
            "Digital Island",
            "Telecom XT (Telecom New Zealand)",
            "Skinny - via Telecom XT",
            "WCDMA:",
            "CallPlus",
            "Slingshot",
            "Orcon",
            "WorldxChange (WxC)",
            "TelstraClear",
            "2degrees (Econet Wireless, NZ Communications)",
            "Vodafone",
            "CDMA:",
            "Telecom Mobile (Telecom New Zealand) switching off in 2012",
            "Vodafone New Zealand",
            "Compass",
            "M2"
        ]
    },
    {
        "cn": "Nepal",
        "o": [
            "Fixed line operator",
            "Smart Cell",
            "CDMA:",
            "Nepal Telecom",
            "United Telecom (UTL)",
            "Ncell"
        ]
    },
    {
        "cn": "Nicaragua",
        "o": [
            "Claro (América Móvil)"
        ]
    },
    {
        "cn": "Niger",
        "o": [
            "Celtel (Zain Group)"
        ]
    },
    {
        "cn": "Nigeria",
        "o": [
            "NITEL (Transcorp)",
            "Starcoms",
            "Northern Mariana Islands (US)",
            "Mtel (Transcorp)",
            "Airtel (Zain Group)",
            "Globacom",
            "Starcomms",
            "Zoom Mobile",
            "MTN Nigeria (MTN Group)",
            "Etisalat",
            "Multilinks Telkom"
        ]
    },
    {
        "cn": "Norway",
        "o": [
            "TDCSong (TDC)",
            "BaneTele",
            "Telenor Mobil (Telenor)",
            "Chess (TeliaSonera)",
            "Telenor",
            "Telio",
            "Mobile Virtual Network Operators",
            "Ventelo formerly Banetele",
            "Altibox",
            "Network Norway (Network Norway)",
            "Hafslund Telekom"
        ]
    },
    {
        "cn": "Oman",
        "o": [
            "Omantel",
            "Nawras (Qtel & TDC)",
            "Oman Mobile (Omantel)",
            "Nawras"
        ]
    },
    {
        "cn": "Pakistan",
        "o": [
            "VISION TELECOM",
            "Warid Telecom",
            "ZONG (China Mobile)",
            "SuperFone",
            "Palestinian Territories",
            "Wateen (Abu Dhabi Group)",
            "Telenor Pakistan (Telenor)",
            "Pakcom",
            "Multinet Pakistan Pvt Limited (A Subsidiary of Malaysia Telecom)",
            "Paltel",
            "Wi-Tribe Pakistan",
            "Go CDMA (TeleCard)",
            "Instaphone (Pakcom)",
            "CTTL",
            "DANCOM",
            "WorldCall",
            "Union Communication",
            "Wataniya-Palestine (Qtel)",
            "NAYATEL Pakistan (Micronet Broadband)",
            "Wireless Local Loop Operators",
            "Vfone (Etisalat)",
            "Mobilink Infinity (Orascom)",
            "Mobilink (Orascom Telecom)",
            "Jawwal",
            "Ufone (Etisalat)",
            "Callmate Telips Telecom",
            "PTCL (Etisalat)",
            "Telecard Ltd"
        ]
    },
    {
        "cn": "Panama",
        "o": [
            "Movistar (Telefonica)",
            "Cable & Wireless Móvil (CWC)",
            "Cable & Wireless Panama (CWC)",
            "Claro Panama (América Móvil)",
            "Digicel Panama (Digicel)"
        ]
    },
    {
        "cn": "Papua New Guinea",
        "o": [
            "Digicel (Digicel Group)",
            "B-Mobile PNG (Black Dolphin/Capital Way Consortium)",
            "Telikom PNG",
            "Citifon (Telikom PNG)"
        ]
    },
    {
        "cn": "Paraguay",
        "o": [
            "Claro (América Móvil)",
            "Tigo Paraguay (Millicom)",
            "Personal (Telecom Italia)"
        ]
    },
    {
        "cn": "Peru",
        "o": [
            "Nextel (Sprint Nextel Corporation)",
            "Telmex",
            "Telefónica",
            "Movistar (Telefónica)",
            "Claro (América Móvil)"
        ]
    },
    {
        "cn": "Philippines",
        "o": [
            "Bayan Telecommunications",
            "Philippine Telegraph and Telephone Company",
            "Globe Handyphone (Ayala Corporation)",
            "Touch Mobile (Ayala Corporation)",
            "Extelcom (Express Telecommunications, Inc.)",
            "Smart Communications (PLDT)",
            "Red Mobile (CURE)",
            "Philippine Long Distance Telephone Company",
            "Digital Telecommunications",
            "Midsayap Communication System Corporation",
            "Globe Telecom",
            "Talk N' Text (Piltel)",
            "Pilipino Telephone Corporation",
            "Sun Cellular (Digitel Mobile Philippines, Inc.)",
            "Eastern Communications"
        ]
    },
    {
        "cn": "Poland",
        "o": [
            "Telekomunikacja Kolejowa",
            "Plus (Polkomtel)",
            "myAvon (PTK Centertel network)",
            "WPmobi (PTK Centertel network)",
            "Playmobil",
            "Telekomunikacja Polska (France Telecom and Kulczyk Holding)",
            "Orange Polska (France Telecom)",
            "Play (telecommunications) (P4)",
            "mBank Mobile (Polkomtel network)",
            "Netia",
            "Mobilking (PTC network)",
            "Cyfrowy Polsat (PTC network)",
            "Carrefour Mova (Carrefour & Effortel) (via Polkomtel network)",
            "Dialog",
            "GTS Poland",
            "T-Mobile (Deutsche Telekom)"
        ]
    },
    {
        "cn": "Portugal",
        "o": [
            "OneLink Communications (OneLink Communications, Inc.) (uses Centennial VOIP)",
            "Clix / Novis (Sonae and France Télécom)",
            "Choice Cable TV (uses VOIP)",
            "TracFone Wireless (América Móvil)",
            "Oni",
            "T-Mobile (Deutsche Telekom)",
            "Vodafone Portugal (Vodafone)",
            "Puerto Rico (US)",
            "Portugal Telecom",
            "TMN (Portugal Telecom)",
            "Centennial Puerto Rico (Centennial Communications)",
            "AT&T Mobility (AT&T)",
            "Sprint PCS (Sprint Nextel Corp.) (Roaming: Centennial and Open Mobile)",
            "Liberty Cable Vision (uses Centennial VOIP)",
            "Centennial Puerto Rico Residential (Centennial Corp.)",
            "Claro (América Móvil)",
            "Tele2",
            "Virgin Mobile (via Sprint Network)",
            "Puerto Rico Telephone (America Movil)",
            "Optimus (Sonae and France Telecom)",
            "Open Mobile"
        ]
    },
    {
        "cn": "Qatar",
        "o": [
            "Qtel",
            "Vodafone"
        ]
    },
    {
        "cn": "Romania",
        "o": [
            "Atlas Telecom",
            "Vodafone Romania (Vodafone)",
            "Digi.Tel (RCS&RDS)",
            "Digi.Mobil (RCS&RDS)",
            "Moscow City Telephone Network",
            "Rostelecom",
            "New Telephone Company",
            "Siberia Telecom",
            "Sibirtelecom (Svyazinvest)",
            "Russia",
            "Dalsvyaz Telecom",
            "CBOSS",
            "Dagsvyazinform",
            "North West Telecom",
            "SMARTS",
            "Tele2 Russia (Tele2)",
            "Nizhni Novgorod Telecom",
            "UPC (Liberty Global Europe)",
            "Uralsvyazinform (Svyazinvest)",
            "SkyLink",
            "Sotovaja Svjaz MOTIV (Jekatrinburg)",
            "Zapp",
            "MegaFon (Telecom-invest, TeliaSonera & Alfa Group)",
            "Cosmote Romania (Cosmote)",
            "Volga Telecom",
            "MTS (Mobile TeleSystems)",
            "Center Telecom",
            "GTS Romania",
            "Romtelecom (OTE)",
            "Orange (France Telecom)",
            "Beeline Russia (VimpelCom)",
            "Uralsvyazinform",
            "Svyazinvest",
            "Southern Telecom",
            "CTTc (Contact Telecom Romania)"
        ]
    },
    {
        "cn": "Rwanda",
        "o": [
            "Tigo Rwanda",
            "Saint Vincent and the Grenadines",
            "Cable&Wireless/LIME Karib Cable",
            "Digicel (Digicel Group)",
            "Saint Lucia",
            "MTN Rwandacell",
            "Saint Kitts and Nevis",
            "Rwandatel"
        ]
    },
    {
        "cn": "Saudi Arabia",
        "o": [
            "Mobily (Etisalat)",
            "Zain Saudi Arabia (Zain)",
            "Saudi Telecom Company"
        ]
    },
    {
        "cn": "Senegal",
        "o": [
            "Expresso - Senegal (CDMA)",
            "Sonatel"
        ]
    },
    {
        "cn": "Serbia",
        "o": [
            "Orion Telekom19]",
            "Telenor Serbia (Telenor)",
            "Telekom Srbija",
            "Vip mobile (Telekom Austria)",
            "MTS Telekom Serbia (Telekom Srbija)"
        ]
    },
    {
        "cn": "Sierra Leone",
        "o": [
            "Tigo Sierra Leone (Millicom)",
            "Celtel (Zain Group)",
            "Africell (Lintel Holding)",
            "Comium"
        ]
    },
    {
        "cn": "Singapore",
        "o": [
            "Grid Net - iDen & PTT Only.",
            "StarHub",
            "StarHub (Temasek Holdings, Qtel, NTT & MediaCorp)",
            "SingTel"
        ]
    },
    {
        "cn": "Slovakia",
        "o": [
            "GTS Slovakia",
            "O2 Slovakia (Telefónica)",
            "Mobile Virtual Network Operators",
            "Slovak Telekom (Deutsche Telekom)",
            "FunFón (via Orange Slovakia)",
            "Tesco Mobile (via O2 Slovakia)",
            "Orange (France Telecom)",
            "Victorytel SK (Victorytel Slovakia s.r.o.)",
            "T-Mobile (Deutsche Telekom)"
        ]
    },
    {
        "cn": "Slovenia",
        "o": [
            "Mega M",
            "Mobitel (Telekom Slovenije)",
            "   MVNO- http://www.bob.si/,   http://www.mmobil.si/,  http://www.izimobil.si/,  http://www.debitel.si/",
            "Si.mobil (Telekom Austria & Vodafone)",
            "T-2",
            "Telekom Slovenije"
        ]
    },
    {
        "cn": "South Africa",
        "o": [
            "Cell C (Saudi Oger)",
            "Neotel",
            "Sundial Telecom",
            "Vodacom (Vodafone)",
            "MTN (MTN Group)",
            "Ohren Telecom, aka O-Tel",
            "Other ECNS Licensed Operators",
            "Virgin Mobile",
            "Telkom",
            "8ta by Telkom (Telkom)"
        ]
    },
    {
        "cn": "Spain",
        "o": [
            "Blau",
            "Jazztel Movil",
            "Digi.Mobil (RCS&RDS)",
            "MasMovil",
            "Jazztel",
            "Telecable",
            "Sweno",
            "Eroski Movil",
            "Movistar (Telefónica)",
            "Lebara Móvil",
            "Carrefour Móvil (Carrefour)",
            "Simyo (KPN)",
            "R",
            "Euskaltel",
            "Vodafone España (Vodafone)",
            "Orange España (France Telecom)",
            "Yoigo (TeliaSonera)",
            "R Cable",
            "Mobile Virtual Network Operators",
            "Happy Móvil",
            "ONO",
            "PepePhone",
            "Telefónica",
            "Hits",
            "British Telecom"
        ]
    },
    {
        "cn": "Sri Lanka",
        "o": [
            "Sri Lanka Telecom",
            "LankaBell",
            "Etisalat (Emirates Telecommunications Corporation)",
            "Airtel (Bharti Airtel)",
            "Dialog Broadband Networks (an Axiata company)",
            "Suntel",
            "Mobitel (Sri Lanka Telecom)",
            "Dialog Axiata (an Axiata company)",
            "Hutch (Hutchison Whampoa)"
        ]
    },
    {
        "cn": "Sudan",
        "o": [
            "Thabit (Sudatel)",
            "Sudani",
            "Digicel (Digicel Group)",
            "Suriname",
            "Zain Sudan (Zain Group)",
            "MTN Sudan (MTN Group)",
            "Canar (Etisalat)"
        ]
    },
    {
        "cn": "Sweden",
        "o": [
            "Telenor Sweden (Telenor)",
            "Ventelo (Tele2)",
            "Spring Mobil",
            "Bredbandsbolaget (Telenor)",
            "Telia (TeliaSonera)",
            "Glocalnet",
            "NewPhone (Telenor)",
            "Glocalnet (Telenor)",
            "Vattenfall",
            "SyriaTel",
            "Tango (Tele2)",
            "Anstar Telecom",
            "Optimal Telekom",
            "Mobile Service Providers",
            "Universal Telecom",
            "MTN Syria (MTN Group)",
            "IP Telefone Operators",
            "Telenor",
            "Syria",
            "Rix Telecom",
            "Mobile Virtual Network Operators",
            "Others",
            "GT Mobile",
            "Syrian Telecommunications Establishment STE",
            "Tele2",
            "Lyca Mobile LYCA MOBILE",
            "TDC (Tele2)",
            "3 (Hutchison Whampoa)",
            "Nordisk Mobiltelefon",
            "Halebop (Telia)"
        ]
    },
    {
        "cn": "Switzerland",
        "o": [
            "in&phone",
            "Tanzania",
            "Chunghwa Telecom",
            "Taiwan Fixed Network",
            "Vibo",
            "Vectone (via Sunrise)",
            "FarEasTone",
            "CoopMobile (Coop) (via Orange)",
            "Benson Informatics Tanzania (Benson)",
            "Taiwan",
            "Vodacom Tanzania (Vodacom)",
            "cablecom mobile (Liberty Global Europe) (via Sunrise)",
            "Asia Pacific Broadband Telecom",
            "Tigo Tanzania (Millicom)",
            "Swisscom",
            "Lebara Mobile (via Sunrise)",
            "Sunrise (TDC)",
            "Celtel Tanzania (Zain Group)",
            "TalkTalkMobile (The Phone House) (via Sunrise)",
            "Taiwan Mobile",
            "Orange (France Télécom)",
            "Tanzania Telecommunications Company Limited",
            "Taiwan Telecom",
            "M-Budget Mobile (Migros) (via Swisscom)",
            "abamobile (via Orange)",
            "Sasatel Tanzania (Sasatel)",
            "Zantel Tanzania (Etisalat)",
            "Salut!-mobile (Aldi) (via Sunrise)",
            "mobilezone net (via Orange)",
            "yallo (Sunrise) (Sunrise)",
            "Sparq (telecommunications)",
            "Netstream Mobile (via Orange)"
        ]
    },
    {
        "cn": "Tajikistan",
        "o": [
            "TT Mobile (Megafon)",
            "Tacom (Beeline)",
            "Tajiktelecom12]",
            "Babilon-M (National Tajik Mobile Operator)"
        ]
    },
    {
        "cn": "Thailand",
        "o": [
            "TT&T (Jasmine Group)",
            "Cat CDMA (Cat Telecom)",
            "DTAC (Telenor)",
            "True Move (Charoen Pokphand)",
            "AIS (Shin Corporation & SingTel)",
            "TOT",
            "Thai Mobile (TOT)",
            "True (Charoen Pokphand)",
            "Hutch (Hutchison Whampoa)"
        ]
    },
    {
        "cn": "Trinidad and Tobago",
        "o": [
            "bMobile (TSTT & LIME (Cable & Wireless))",
            "Digicel (Digicel Group)",
            "TSTT"
        ]
    },
    {
        "cn": "Tunisia",
        "o": [
            "Tunisiana (Orascom Telecom and Qtel)",
            "Tunisie Telecom (TUNTEL)",
            "Orange"
        ]
    },
    {
        "cn": "Turkey",
        "o": [
            "Türk Telekom (Saudi Oger)",
            "TTNet Mobil",
            "Vodafone Turkey (Vodafone)",
            "Mobile Virtual Network Operators",
            "Wirofon",
            "Avea (Saudi Oger)",
            "Turkcell Superonline",
            "Turkcell"
        ]
    },
    {
        "cn": "Turkmenistan",
        "o": [
            "Digicel (Digicel Group)",
            "Turks and Caicos Islands (UK)"
        ]
    },
    {
        "cn": "Uganda",
        "o": [
            "Celtel (Zain Group)",
            "MTN (MTN Group)",
            "Uganda Telecom (Mango service brand)",
            "Uganda Telecom",
            "Warid Uganda (Warid Telecom)",
            "Orange Uganda (in March 2009 Orange acquired UAE based Hits Telecom)"
        ]
    },
    {
        "cn": "Ukraine",
        "o": [
            "TELECOMAX",
            "Golden Telecom",
            "Ukrtelecom",
            "Kyivstar ( and Alfa Group)",
            "MTS Ukraine (Mobile TeleSystems)",
            "Utel (Ukrtelecom)",
            "PEOPLEnet",
            "Beeline Ukraine (VimpelCom)",
            "life:) Ukraine (Turkcell)"
        ]
    },
    {
        "cn": "United Arab Emirates",
        "o": [
            "Du",
            "Etisalat"
        ]
    },
    {
        "cn": "United Kingdom",
        "o": [
            "COLT Telecom Group",
            "Blyk",
            "ASDA Mobile",
            "Air4",
            "Green Mobile",
            "Easynet",
            "Numbersales.com",
            "Orange UK (France Télécom)",
            "FLR Spectron",
            "Aw2 Networks Media",
            "Cable and Wireless",
            "T-Mobile UK (Deutsche Telekom)",
            "Tiscali",
            "TalkTalk Group (Part of Carphone Warehouse group)",
            "Globalcell Mobile",
            "Virgin Media",
            "Virgin Mobile",
            "Sky Talk",
            "Post Office Home Phone",
            "Vodafone UK (Vodafone)",
            "Global Crossing",
            "giffgaff",
            "Mobile Virtual Network Operators",
            "Lycamobile",
            "TalkTalk Mobile",
            "Family Mobile",
            "Speedflow Communications",
            "Lebara Mobile",
            "Tesco Mobile",
            "BT Mobile",
            "3 UK (Hutchison Whampoa)",
            "Dot Mobile",
            "Genesis Communications",
            "UK01(Mapsbury Communication)",
            "Kingston Communications",
            "British Telecom",
            "O2 UK (Telefónica)"
        ]
    },
    {
        "cn": "United States",
        "o": [
            "Zenda Telephone Company",
            "GVTC Communications",
            "Bruce Telephone Company",
            "Sledge Telephone Company",
            "Vonage",
            "Moundville Telephone Company",
            "Windstream Communications",
            "Alenco Communications",
            "Fairpoint Communications",
            "Frontier Communications",
            "Shidler Telephone Company",
            "Southwest Texas Telephone Company",
            "TracFone Wireless (América Móvil) ",
            "Poka Lambro Telephone Cooperative, Inc.",
            "Cincinnati Bell",
            "Cincinnati Bell Wireless",
            "MetroPCS",
            "Arkwest Communications",
            "D&P Communications",
            "Border to Border Communications",
            "West Side Telecommunications",
            "Electra Telephone Company",
            "T-Mobile (Deutsche Telekom)",
            "Blue Casa Communications",
            "Malheur Bell",
            "Taylor Telephone Cooperative, Inc.",
            "Brazos Telephone Company",
            "Cellular South",
            "Hopi Telecom",
            "nTelos",
            "Cameron Communications",
            "Eastex Telephone Cooperative, Inc.",
            "Cap Rock Telephone Cooperative, Inc.",
            "Sprint Nextel",
            "Bluegrass Cellular",
            "Ritter Telephone Company",
            "Southwest Arkansas Telephone Cooperative, Inc.",
            "ACN Inc.",
            "Tatum Telephone Company",
            "Industry Telephone Company",
            "Edge Wireless",
            "Unicel",
            "CDMA",
            "CenturyLink",
            "Mid-Plains Rural Telephone Cooperative, Inc.",
            "Lathrop Telephone Company",
            "U.S. Cellular (Telephone and Data Systems)",
            "Etex Telephone Cooperative, Inc.",
            "GTE",
            "Dobson Cellular",
            "Le-Ru Telephone Company",
            "Grand Telephone Company",
            "Big Bend Telephone Company",
            "Excel Communications",
            "Leaco Rural Telephone Cooperative, Inc.",
            "Pac-West Telecomm",
            "Alltel",
            "SouthernLINC Wireless",
            "Canadian Valley Telephone Company",
            "Brazoria Telephone Company",
            "Cricket Communications (Leap Wireless)",
            "BellSouth",
            "Bixby Telephone Company",
            "Coleman County Telephone Cooperative, Inc.",
            "Miller Telephone Company",
            "South Plains Telephone Cooperative, Inc.",
            "SBC Communications",
            "Centennial Wireless (Centennial Communications)",
            "Midwest Wireless",
            "iDEN",
            "United States Virgin Islands (US)",
            "Community Telephone Company",
            "Hill Country Telephone Cooperative, Inc.",
            "Integra Telecom",
            "Central Texas Telephone Cooperative, Inc.",
            "Riviera Telephone Company",
            "Madison County Telephone Company",
            "Tri County Telephone Company",
            "Appalachian Wireless",
            "LIGA Telecom"
        ]
    },
    {
        "cn": "Uruguay",
        "o": [
            "Claro (América Móvil)",
            "Movistar (Telefónica)",
            "Ancel (Antel)",
            "ANTEL"
        ]
    },
    {
        "cn": "Uzbekistan",
        "o": [
            "Unitel (Beeline)",
            "Coscom (uCell)",
            "Uzbektelecom Mobile",
            "MTS (Mobile TeleSystems)",
            "Perfectum Mobile"
        ]
    },
    {
        "cn": "Venezuela",
        "o": [
            "Movilnet (CANTV)",
            "Digitel",
            "Movistar (Telefónica)",
            "CANTV"
        ]
    },
    {
        "cn": "Yemen",
        "o": [
            "Yeme  Mobile",
            "Yemen Telecom Group",
            "Sabafon",
            "MTN Yemen (MTN Group)",
            "Y (HiTS-UNITEL)"
        ]
    },
    {
        "cn": "Zambia",
        "o": [
            "Airtel (Bharti group)",
            "Zamtel(LAPGreen Group)",
            "MTN (MTN group)"
        ]
    },
    {
        "cn": "Zimbabwe",
        "o": [
            "Net*One — code 011",
            "Telecel (Orascom) — new code 0733(from 023)",
            "Econet Wireless — codes 0912/0913/0914/0915/0916",
            "Tel One"
        ]
    }
];


var regionSel = $('select[name=region]');
var countrySel = $('select[name=country]');
var operatorSel = $('select[name=operator]');

var changeRegion = function () {
    var optionData = "";
    $.each(region2country, function (idx, reg) {
        optionData += "<option value='"+reg.r+"'>"+reg.r+"</option>";
    });
    regionSel.empty();
    regionSel.html(optionData);
    changeCountry();
};

var changeCountry = function () {
    var optionData = "";
    var idx = regionSel.get(0).selectedIndex;
    region2country[idx].c.sort();
    region2country[idx].c.forEach(function (item) {
        optionData += "<option value='"+item+"'>"+item+"</option>";
    });
    countrySel.empty();
    countrySel.html(optionData);
    changeOperator();
};

var changeOperator = function () {
    var optionData = "";
    var country = countrySel.val();
    $.each(country2operator, function (idx, opt) {
       if (opt.cn == country) {
           opt.o.sort();
           opt.o.forEach(function (item) {
               optionData += "<option value='"+item+"'>"+item+"</option>";
           });
           return false;
       }
    });
    operatorSel.empty();
    operatorSel.html(optionData);
};

changeRegion();
regionSel.change(function () {
    changeCountry();
});

countrySel.change(function () {
    changeOperator();
});
