import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "srb",
    resources: {
      srb: {
        translation: {
          hero: {
            heroNaslov: "Oplemenite svoj životni prostor.",
            heroBtnText: "Pogledajte ponudu",
          },
          navigacija: {
            adresa: "Adresa:",
            telefon: "Telefon:",
            navItems: {
              home: "Početna",
              products: "Proizvodi",
              hotelProgram: "Hotelski program",
              architects: "Arhitekte",
              aboutUs: "O nama",
              contact: "Kontakt",
            },
          },
          usluge: {
            uslugeNaslov: "Naši proizvodi",
            uslugeOpis:
              "'Uređenje enterijera nije samo vezano za estetiku, već i za stvaranje prostora koji poboljšava kvalitet života. Materijali, boje i teksture igraju ključnu ulogu u tom procesu.' - Candice Olson",
            items: {
              zaveseDraperije: "Zavese i draperije",
              zebraRolo: "Zebra i rolo zavese",
              tapete: "Tapete",
              drveniVenecijaneri: "Drveni venecijaneri",
              plise: "Plise sistemi",
              mebl: "Mebl štof",
              lux: "Lux trakaste zavese",
              garnisne: "Garnišne",
              posteljine: "Posteljine i peškiri",
              homeDecor: "Home decor",
            },
          },
          steps: {
            stepTitle: "Naše usluge",
            step1Title: "Izbor stila i materijala",
            step1:
              "Pravilan odabir stila, dizajna i materijala može stvoriti osećaj topline i luksuza u stanu, a samim tim pojačati opštu percepciju i atmosferu same prostorije. Naši eksperti Vam mogu pomoći, olakšati izbor i uštedeti vreme kod odabira najbolje opcije za Vaš prostor.",
            step2Title: "Merenje",
            step2:
              " U odnosu na odabir tipa zavesa, može se razlikovati i način uzimanja mera za iste. Ovo će za Vas raditi naši eksperti, ali uz njihove instrukcije, moći ćete i sami da naučite kako da prvilno izmerite prostor za Vašu buduću zavesu.",
            step3Title: "Izrada",
            step3:
              "Nakon odabira materijala i uzimanja mera, naš iskusan tim za šivenje će opšiti Vašu zavesu, po najvišim standardima kvaliteta šivenja, kako biste dobili najbolji mogući finalni proizvod.",
            step4Title: "Ugradnja ili montaža",
            step4:
              "Za uslugu ugradnje ili montaže, zadužen je iskusan tim majstora, koji će u prethodno dogovorenom roku izvršiti profesionalnu ugradnju ili montažu Vaših zavesa.",
            step5Title: "Garancija kvaliteta",
            step5:
              "Svojim dugogodišnjim iskustvom u radu, kvalitetom materijala, opšivanjem zavesa i na kraju profesionalnom uslugom montaže istih, garantujemo za najviši kvalitet usluge koju našim klijentima pružamo preko 20 godina unazad.",
          },
          about: {
            aboutTitle: "O nama",
            aboutText:
              "“HD Group” d.o.o. predstavlja renomiranu domaću kompaniju sa preko 20 godina iskustva u opremanju životnog prostora, a naš izložbeni salon se nalazi u Južnom bulevaru br.130, na Vračaru. Pod našim okriljem se nalaze brendovi “Home Decor” koji je namenjen maloprodaji i opremanju i oplemenjivanju svakog doma, ali i “Hotel Decor” koji nudi kompletnu tekstilnu ponudu za opremanje hotela, restorana i drugih poslovnih prostora. Od samog osnivanja “HD Group” d.o.o. je sinonim za izvrsnost i predanost u poslovanju, a našu reputaciju kao pouzdanog partnera potvrđuje preko 3000 zadovoljnih klijenata širom Srbije i Balkana. Naša posvećenost kvalitetu i neprekidno unapređenje poslovnih procesa omogućili su nam uspešnu saradnju sa nekim od vodećih proizvođačima tekstilnih proizvoda (Adeko, FD, Keops, Dali, Akar, Gunflex, English Decor, Hohmann, FR-One, Rasch, Marburg, Living walls, Casa Deco itd), a kroz pažljiv odabir partnera i kontinuiranu podršku, osiguravamo pristup najkvalitetnijim materijalima za sve proizvode iz naše velike ponude. Jedan od ključnih stubova našeg uspeha je naš tim iskusnih stručnjaka, čiji predani rad garantuje visoke standarde kvaliteta i efikasnosti u svakom projektu. Svaki projekat tretiramo sa pažnjom i posvećenošću i težimo svojevrsnom pružanju najboljih mogućih rešenja, koja savršeno odgovaraju svim potrebama naših klijenata. “HD Group” d.o.o. gleda u budućnost sa uzbuđenjem i spremnošću da nastavi da raste i razvija se zajedno sa svojim partnerima i klijentima. Ponosni smo na postignute rezultate u proteklih 20 godina, ali isto tako sa uzbuđenjem očekujemo nove izazove i prilike koje će nam omogućiti dalji rast i napredak.",
            aboutCta: "Kontakt telefon",
            callCta: "Pozovite nas",
          },
          hotel: {
            hotelTitle: "Hotelski program",
            hotelText:
              "Hotel Decor nudi kompletnu tekstilnu ponudu za opremanje Vašeg hotela, restorana ili drugog poslovnog prostora. Naš Hotelski program obuhvata širok spektar proizvoda: posteljine, peškiri i ostali tekstilni SPA program (hotelske papuče, bade mantili itd.), stolnjaci, salvete, tapete, mebl štof, zavese i draperije i ostali sistemi za zaštitu od sunca, zatim wall-to-wall tepisi i single tepisi, odela i radne unifrome itd. Sve naše proizvode radimo po meri, specifikaciji i želji klinjenata, a karakteriše ih vrhunski kvalitet materijala i izrade, što garantuje udobnost, izdržljivost i estetski dojam. Bilo da opremate novi hotel ili renovirate postojeći prostor, naš tim stručnjaka stoji Vam na raspolaganju, da pruži personalizovana rešenja koja odgovaraju Vašim potrebama i budžetu. Pored toga, uvek smo tu da Vam pružimo podršku tokom čitavog procesa, od odabira proizvoda do isporuke i montaže i na kraju, garancije kvaliteta. Uverite se sami u kvalitet naših proizvoda i usluga. Kontaktirajte nas danas da biste saznali više o tome kako Hotel Decor može unaprediti vaš poslovni prostor i ostaviti trajan utisak na Vaše goste.",
            hotelCta: "Preuzmi katalog",
          },
          arhitekte: {
            arhitekteTitle: "Za arhitekte i dizajnere enterijera",
            arhitekteText:
              "Da li ste arhitekta ili dizajner enterijera u potrazi za novim prilikama? Ako jeste, imamo izvanrednu ponudu za vas! Naša kompanija nudi ekskluzivne pogodnosti saradnje za stručnjake poput Vas. Sa našom ponudom dolazi ne samo podrška za vašu kreativnost, već i prilika za profesionalni razvoj, tako da je ovo sjajna prilika da se pridružite našem timu, kako bismo zajedno stvarali izvanredne stvari.",
            arhitekteCta:
              "Ako želite da saznate više o našoj ponudi, kontaktirajte nas.",
            arhitektaIme: "Ime i prezime",
            arthitektaKompanija: "Kompanija",
            arhiEmail: "Email",
            arhiTelefon: "Telefon",
            arhiPoruka: "Poruka",
            arthiBtnText: "Pošalji",
          },
          kontakt: {
            kontaktTitle: "Poseti našu lokaciju",
            kontaktAdresa: "Naša adresa",
            kontaktVreme: "Radno vreme",
            kontaktBroj: "Kontakt",
          },
          copyright: {
            tekst: "sva prava zadržana",
          },
          footer: {
            kolona1: {
              title: "Stranice",
              one: "Hotelski program",
              two: "O nama",
              three: "Proizvodi",
              four: "Kontakt",
            },
            kolona2: {
              title: "Istaknuto",
              one: "Zavese i draperije",
              two: "Tapete",
              three: "Venecijaneri",
              four: "Posteljine",
            },
            kolona3: {
              title: "Kontakt",
            },
          },
          dyk: {
            title: "Da li ste znali?",
            text: "Svi vole da čuju zanimljive činjenice, a mi smo za Vas sastavili listu interesantnih podataka koje možda niste znali, a tiču se naše omiljene teme: zavese i ostali sistemi za zaštitu od sunca.",
            fact1:
              "Iako smo danas uglavnom svi zadovoljni sa garnišnom i dve zavese, u prošlosti, u cilju da se prikaže bogatstvo, porodice koje su to mogle da priušte su gotovo uvek insistirale na tome da im prozori budu potpuno “odeveni”, od zavesa, prozirnih i neprozirnih draperija i panela, pa do raskošnih ukrasnih detalja.",
            fact2:
              "Kažu da je Majkl Noaks (Michael Noakes), slikar portreta Kraljice Elizabete, jednom prilikom video knjigu dezena i boja u Bakingemskoj palati. Kada je upitao kraljicu o tome, odgovorila mu je da želi da bira kombinaciju boja za nove zavese u palati i upitala ga da joj pomogne. Naravno, gospodin Noaks je bio vrlo počastvovan da može da pomogne.",
            fact3:
              "Kako su ranije gotovo sve kade bile pravljene za kupanje stojeći, bile su opremljene kružnom šipkom iznad kade, sa koje bi visila zavesa, a kako bi osobi koja se kupa obezbedila privatnost. Tuš zavese su nekada bile pravljene od materijala koji nije bio vodootporan, pa su se brzo natapale i bile teške za održavanje.",
            fact4:
              "Naučno je dokazano, da zavese napravljene od prirodnih materijala mogu da smanje nivo ugljen dioksida u domu. Zavese i draperije koje imaju nijanse prirodnih boja, takođe mogu umanjiti nivo CO2, čime povećavamo kvalitet i svežinu vazduha u domu.",
            fact5:
              "Rimske roletne potiču iz drevnog Rima, čak i pre nego što su stakleni prozori bili izmišljeni. Ove roletne su i danas veoma popularne zbog svoje teksture i načina na koji se pakuju.",
            fact6:
              "Rimljanima je prilično dosadilo da im prašina i sve ostalo ulazi u domove kroz prozore, pa su došli do genijalne ideje da okače komade odeće iznad prozora i vrata i tako smo su nastale prve Rimske roletne. Takođe, prvi rashladni sistem.",
            fact7:
              "Neke od prvih poznatih roletni potiču još od starih Kineza. Roletne su pravili od bambusovih stabljika, spojenih zajedno, koje su kačili iznad prozora i vrata, kako bi obezbedili privatnost. Stari Egipćani su radili nešto slično sa trskom.",
            fact8:
              "U Viktorijansko doba, zavese su obično bile vrlo tamne, jer je farbanje materijala u svetlije dezene bilo prilično skupo. Tmurne varijacije teget boje, tamno braon i zelene, bile su uobičajene boje zavesa u to doba.",
            fact9:
              "Tilt mehanizam, koji danas mozemo naći kod gotovo svih roletni, prvi je izumeo i patentirao Američki pronalazač Džon Hempson (John Hampson). Možda je sad pravo vreme da se svi zahvalimo gospodinu Hempsonu na njegovom sjajnom pronalasku.",
            fact10:
              "Mada bi svi pomislili da venecijaneri potiču iz Venecije (logično, zar ne?), to zapravo nije istina. Persijanci su ti koji su prvi osmislili sistem sa letvicama, koje mi danas nazivamo venecijaneri.",
            fact11:
              "Jedan od najvećih prozora na svetu, nalazi se na Notr Dam katedrali u Parizu, poznat kao “Zapadna ruža”. Zapadna ruža ima prečnik od 13 metara i obim od čak 41 metar.",
          },
          recenzije: {
            recenzijaTitle: "Šta kažu o nama?",
            one: "Ceo stan smo opremili, ali spavaca soba je ostavila najbolji utisak. Svaka preporuka za saradnju!",
            two: "Supruga i ja smo prezadovoljni profesionalnošću i ljubaznošću svih zaposlenih. Topla preporuka za svakoga ko želi da oplemeni svoj dom i u njega unese toplinu. Veselinovići",
            three: "Odlicna radnja, sve pohvale.",
            four: "Odlicna radnja, sve ima!",
            five: "Oduševljena sam kupovinom u ovoj prodavnici za uređenje doma! Njihova kolekcija je neverovatno raznovrsna, pružajući sve što vam je potrebno za stvaranje savršenog ambijenta. Kvalitet proizvoda je izvanredan. Topla preporuka.",
            six: "Predivan asortiman proizvoda za dekoraciju doma i izvanredna usluga!",
          },
          backBtn: {
            tekst: "Nazad",
          },
          zavese: {
            naslov: "Curtains and draperies",
            tekst1:
              "Zavese i draperije su neizostavni elemenat dekoracije svakog enterijera, bilo da je u pitanju stambeni ili poslovni prostor. Osnovna razlika između zavesa i draperija ogleda se u samom sastavu materijala od kojih se proizvode. Zavese se uglavnom prave od laganih, transparentnih i osetljivih materijala, koje za osnovni cilj imaju oplemenjivanje i davanje topline svakom prostoru. Zavese, u zavisnosti od boje, dezena i vrste materijala od kojih su napravljene, mogu i te kako da utiču na sam izgled, ali i na osećaj topline u prostoru. Zavese, pored dekorativne, imaju i funkciju regulisanja propuštanja dnevne svetlosti u prostor, kao i da, u večernjim satima, umanje transparentost unutrašnjeg prostora ka spoljašnjem.",
            tekst2:
              "Draperije se razlikuju od zavesa po tome što se izrađuju od čvrstih i otpornih materijala, koji imaju gusto tkanje. Pored dekorativnog efekta koji, uz kombinovanje sa zavesama, svakom prostoru daje jednu sasvim novu dimenziju, draperije imaju i funkciju delimičnog ili potpunog neutralisanja dnevne svetlosti u prostoru i obratno, transparentsnost unutrašnjeg prostora ka spoljašnjem.",
          },
          zebraRolo: {
            zebraTitle: "Zebra zavese",
            roloTitle: "Rolo zavese",
            zebraTekst:
              "Zebra zavese su rolo zavese koje imaju višenamensku funkcionalnost, jer mogu da zamene klasičnu zavesu, draperiju i garnišnu. Vrlo brzo su osvojile kako svetsko, tako i domaće tržište. Izrađene su od dve vrste antistatik materijala, što znači da ne skupljaju ni prašinu ni mirise, a koji su različite svetlopropustljivosti. Zavese mogu biti spakovane u aluminijumskoj kutiji, a mogu biti i otvorenog tipa, u zavisnosti od Vaših potreba. Mogu se montirati na zid, plafon ili na sam okvir prozora. Količinu svetla koja ulazi u prostoriju regulišete sami, ručno pomoću lančića ili ugradnjom elektromotora i putem daljinskog upravljača. Vrlo su jednostavne za montažu i pogodne su za uređenje kako poslovnih prostora, tako i svih prostorija u jednom domu. Zebra zavese izrađujemo po merama Vaših prozora, a naš veliki izbor materijala i dezena će sigurno moći da izađe u susret svakoj Vašoj želji i zamisli.",
            roloTekst:
              "Rolo zavese na prvom mestu karakteriše velika funkcionalnost kod opremanja poslovnih i privatnih prostora, jer pružaju odličnu zaštitu od sunca i vrlo su jednostavne za rukovanje. Pored toga što su vrlo funkcionalne, svakom prostoru svojim velikim izborom dezena i boja, mogu dati moderniji izgled. Spuštanje i podizanje rolo zavese regulišete sami, ručno pomoću lančića ili ugradnjom elektromotora i putem daljinskog upravljača. Takođe, rolo mehanizam se može povezati sa sistemima „pametne kuće“. Sve Rolo zavese izrađujemo po merama Vaših prozora, a naš veliki izbor materijala i dezena će sigurno moći da izađe u susret svakoj Vašoj želji i zamisli.",
          },
          tapete: {
            naslov: "Tapete",
            tekst:
              "Tapete su ponovo postale veoma popularan izbor za opremanje kako stambenih, tako i poslovnih prostora i predstavljaju jedan od najboljih izbora za dekoraciju zidova. Sa ponovnom pojavom ove neverovatno raznovrsne, ekspresivne opcije za zidne obloge, razvijeno je mnogo novih materijala od kojih se izrađuju tapete. Prošli su dani frustrirajućih tapeta koje je teško postaviti, a još teže ukloniti. Sada možete uživati u raznim materijalima koji se lako postavljaju, ali i lako uklanjaju. Sve naše tapete su vrlo kvalitetne, postojanih i intenzivnih boja i veoma su jednostavne za održavanje. Iz naše velike ponude tapeta, možete odabrati najbolji dizajn koji će biti idealan za prostor koji opremate, ali i onaj koji najviše odgovara vašem senzibilitetu i ukusu.",
          },
          dv: {
            naslov: "Drveni venecijaneri",
            tekst:
              "Drveni venecijaneri su ponovo postali veoma popularni zbog svoje funkcionalnosti i jednostavnosti, a kako sada postoji veliki izbor dezena raznovrsnih boja, vrlo lako mogu uneti potrebnu toplinu svakom domu ili poslovnom prostoru. Proizvode se od lakog i plemenitog drveta, otpornog na UV zračenje i mehanička oštećenja, a možete birati između lamela širine 25mm ili 50mm. Količinu svetlosti koju želite u prostoriji regulišete jednostavnim povlačenjem kanapa, koji može biti u boji venecijanera. Sigurni smo da ćete uz pomoć naše velike palete dezena i boja drvenih venecijanera pronaći pravi izbor za Vaš poslovni prostor ili dom.",
          },
          mebl: {
            naslov: "Mebl štof",
            tekst:
              "Mebl štof je vrsta tekstila, dekorativna tkanina napravljena od mešavina različitih materijala po sirovinskom sastavu, tehnologiji proizvodnje i po težini. Napredak u proizvodnji dekorativnih tkanina omogućava veliku ponudu ovog materijala sa različitom teksturom, sirovinskim sastavom i primenom. Najčešće se koristi kao materijal za tapaciranje nameštaja, ali i za presvlačenje i oblaganje nameštaja, a ujedno i kao dekor i kao zaštita nameštaja. Vrsta, dizajn i sastav materijala biraju se u zavisnosti od namene proizvoda za koji se mebl štof upotrebljava. U našoj ponudi imamo jednobojne mebl štofove, kao i mebl štofove u različitom dizajnu, kao što je barok, etno, boho, minimal, geometrijski, industrial, cvetni itd. U našoj ponudi možete pronaći mebl štofove različitog sirovinskog sastava sa visokim koeficijentom trenja koji garantuje kvalitet.",
          },
          plise: {
            naslov: "Pliše sistemi",
            tekst:
              "Plise sistemi su zavese sa mehanizmom za ručno upravljanje i specifične su jer ih je moguće ugraditi u svaki nestandardni okvir prozora (trougao, krug, polukrug itd.). Moguće ih je pomerati u više smerova, odozgo-naniže ili odozdo-naviše. Prave se od velikog broja materijala različitih boja i dezena, koji imaju antistatička svojstva, što znači da ne skupljaju prašinu ili mirise. Plise sistemi delimično ili potpuno zamračuju prostoriju i daju lep efekat prigušenog svetla ili totalnog mraka u prostoru. Takođe, vrlo su jednostavni za održavanje.",
          },
          posteljina: {
            naslov: "Posteljina i peškiri",
            tekst:
              "Naša posteljina je više od samo tkanine - to je iskustvo. Uživajte u mekoći naših luksuznih čaršava, jastučnica i prekrivača, pružajući vam ultimativnu udobnost za miran san svake noći. Od klasičnih pamučnih satina do egzotičnih svilenih komada, naša kolekcija posteljine nudi širok spektar boja i dezena koji će osvežiti i oplemeniti vašu spavaću sobu. Kada je u pitanju osvežavanje tela nakon opuštajućeg tuširanja, naši luksuzni peškiri pružaju dodir mekoće i apsorpciju. Izrađeni od najkvalitetnijeg pamuka ili bambusa, naši peškiri su ne samo funkcionalni, već i estetski privlačan dodatak vašem kupatilu. Neka naša posteljina i peškiri upotpune vaš dom svojim luksuznim dodirima i neodoljivim dizajnom. Posetite našu kolekciju danas i uživajte u osećaju raskoši svakog dana!",
          },
          garn: {
            naslov: "Garnišne",
            tekst:
              "Kada razmišljamo o uređenju prozora jedan od najvažnijih elemenata koji omplemenjuju prostor su zavese, ali pored njih, kao neizostavni element su i odgovarajuće garnišne. Uz odabir odgovarajućeg modela i ostalih detalja u enterijeru, garnišne mogu dodatno naglasiti izgled i doprineti oplemenjivanju celokupnog prostora. Od elegantnog i modernog do suptilnog i tradicionalnog, svakako ćete pronaći rešenje koje odgovara Vašem stilu. U našoj ponudi možete pronaći mnogobrojne modele različitih boja i materijala koji se veoma lako i brzo postavljaju. Postoje tri vrste garnišni koju nudimo – plafonske, plafonske na potez i zidne.",
          },
          lux: {
            naslov: "Lux trakaste zavese",
            tekst:
              "Trakaste zavese su najbolji način da prekrijete velike staklene površine i obezbedite vrlo veliki obim svetlopropustljivosti u Vaš poslovni prostor ili dom. Prave se od visokokvalitetnog platna, koji može biti raznoraznih boja ili dezena, različite svetlopropustljivosti, koji će se najbolje ukopiti u enterijer Vašeg prostora. Trakaste zavese se postavljaju vertikalno i pomoću kanapa se mogu skupljati ili širiti, kao i rotirati u stranu, tako da sami birate količinu svetlosti koju želite u prostoriji. LUX TRAKASTE ZAVESE podrazumevaju isti mehanizam, ali su same trake izrađene od drugih, kvalitetnijh materijala. Imaju istu funkcionalnost kao i platnene zavese, ali zbog kvaliteta materijala traka, daju drugačiju, ekskluzivniju notu Vašem prostoru.",
          },
        },
      },
      en: {
        translation: {
          hero: {
            heroNaslov: "Refine your living space.",
            heroBtnText: "Check products",
          },
          navigacija: {
            adresa: "Address:",
            telefon: "Phone:",
            navItems: {
              home: "Home",
              products: "Products",
              hotelProgram: "Hotel Program",
              architects: "Architects",
              aboutUs: "About Us",
              contact: "Contact",
            },
          },
          usluge: {
            uslugeNaslov: "Our products",
            uslugeOpis:
              "'Interior design is not just about aesthetics, but about creating spaces that enhance the quality of life. Materials, colors, and textures play a key role in this process.' - Candice Olson",
            items: {
              zaveseDraperije: "Curtains and Draperies",
              zebraRolo: "Zebra and Roller Blinds",
              tapete: "Wallpapers",
              drveniVenecijaneri: "Wooden Venetian Blinds",
              plise: "Plissé Systems",
              mebl: "Upholstery Fabric",
              lux: "Lux Vertical Blinds",
              garnisne: "Curtain Rods",
              posteljine: "Bedding and Towels",
              homeDecor: "Home decor",
            },
          },
          steps: {
            stepTitle: "Our services",
            step1Title: "Choosing of style and materials",
            step1:
              "The right choice of style, design and material can create a feeling of warmth and luxury in space and enhance overall perception and atmosphere of the space. Our experts can help you, save your energy and time with choosing the best option for your space.",
            step2Title: "Measuring",
            step2:
              "The way of taking exact measures can differ, depending on the type of curtains you choose. This step can be done by our experts or if you wish to, we can show you how to do measuring of desired space by yourself.",
            step3Title: "Manufacturing",
            step3:
              "After chosing the right style and material and taking measures, our experienced sewing team will make final preparation of your curtain, with high quality standard, so that your curtain is ready for instalment.",
            step4Title: "Installation",
            step4:
              "Our very experianced team will provide proffesional services of installation, by previously agreed timeline, with high standard quality guarantee.",
            step5Title: "Quality guarantee",
            step5:
              "With our very long experience in textile industry, working with high quality materials, having the best in class working for us, we guareantee the highest quality of serveces we provide for our clients for more than 20 years now.",
          },
          about: {
            aboutTitle: "About Us",
            aboutText:
              "“HD Group” d.o.o. is a renowned domestic company with over 20 years of experience in furnishing living spaces. Our showroom is located at Južni bulevar 130, Vračar. Under our umbrella is the brand &quot;Home Decor, aimed at retail and enhancing every home, and Hotel Decor, which offers a complete textile range for equipping hotels, restaurants, and other commercial spaces. Since its inception, “HD Group” d.o.o. has been synonymous with excellence and dedication in business. Our reputation as a reliable partner is confirmed by over 3000 satisfied clients across Serbia and the Balkans. Our commitment to quality and continuous improvement of business processes has enabled us to successfully collaborate with some of the leading manufacturers of textile products, including Adeko, FD, Keops, Dali, Akar, Gunflex, English Decor, Hohmann, FR-One, Rasch, Marburg, Living Walls, Casa Deco, and others. Through careful partner selection and continuous support, we ensure access to the highest quality materials for all products in our extensive range. One of the key pillars of our success is our team of experienced professionals, whose dedicated work guarantees high standards of quality and efficiency in every project. We approach each project with care and dedication, striving to provide the best possible solutions that perfectly meet the needs of our clients. “HD Group” d.o.o. looks to the future with excitement and readiness to continue growing and developing alongside our partners and clients. We are proud of our achievements over the past 20 years and look forward to new challenges and opportunities that will enable further growth and advancement.",
            aboutCta: "Phone",
            callCta: "Call us now",
          },

          hotel: {
            hotelTitle: "Hotel Program",
            hotelText:
              "Hotel Decor offers a complete textile range for furnishing your hotel, restaurant, or other business space. Our Hotel Program includes a wide range of products: bed linens, towels and other textile SPA items (hotel slippers, bathrobes, etc.), tablecloths, napkins, wallpapers, upholstery fabrics, curtains, draperies and all other sun protection systems, wall-to-wall carpets and single design carpets, hotel uniforms, etc. All our products are custom-made, according to clients specifications and desires, made from top-quality materials and craftsmanship, ensuring comfort, durability, and aesthetic appeal. Whether you are furnishing a new hotel or renovating an existing space, our team of experts is at your disposal to provide personalized solutions that meet your needs and budget. Moreover, we are always here to support you throughout the entire process, from product selection to delivery and installation, and ultimately, quality assurance. Experience the quality of our products and services for yourself. Contact us today to learn more about how Hotel Decor can enhance your business space and leave a lasting impression on your guests.",
            hotelCta: "Download catalogue",
          },
          arhitekte: {
            arhitekteTitle: "For Architects and Interior Designers",
            arhitekteText:
              "Are you an architect or interior designer looking for new opportunities? If so, we have an exceptional offer for you! Our company provides exclusive collaboration benefits for professionals like you. Our offer not only supports your creativity but also provides opportunities for professional development. This is a fantastic chance to join our team and create extraordinary things together.",
            arhitekteCta:
              "If you want to learn more about our offer, please contact us.",
            arhitektaIme: "Full name",
            arthitektaKompanija: "Company",
            arhiEmail: "Email",
            arhiTelefon: "Phone",
            arhiPoruka: "Message",
            arthiBtnText: "Send",
          },
          kontakt: {
            kontaktTitle: "Visit our location",
            kontaktAdresa: "Our address",
            kontaktVreme: "Working hours",
            kontaktBroj: "Contact",
          },
          copyright: {
            tekst: "all rights reserved",
          },
          footer: {
            kolona1: {
              title: "Pages",
              one: "Hotel Program",
              two: "About Us",
              three: "Products",
              four: "Contact",
            },
            kolona2: {
              title: "Featured",
              one: "Curtains and Draperies",
              two: "Wallpapers",
              three: "Venetian Blinds",
              four: "Bedding",
            },
            kolona3: {
              title: "Contact",
            },
          },
          dyk: {
            title: "Did you know?",
            text: "Everyone loves a good fact. Here at HD Group, we’ve composed a great list of what we think are the best facts based on our favorite subject... Blinds and curtains!",
            fact1:
              "Although these days we're pretty satisfied with a rod and two drapes, in the past in order to show off one's wealth, families who could afford it always ensured to have windows ‘fully dressed’ which included: valance, cornice, sheer drapery panels on top of opaque panels, hardware, and tiebacks.",
            fact2:
              "Michael Noakes, a portrait painter to Queen Elizabeth, is said to have once spotted a book of swatches laying around Buckingham Palace, on questioning this, the Queen stated that she could do with a hand picking the color scheme for new curtains in the Palace – of course, Mr. Noakes was honoured to help!",
            fact3:
              "What we know now as the glorious Shower Curtain was once more aptly named the Bath Curtain. As many bath tubs were originally free standing, they were outfitted with a pole attached to a circular rod above that held a curtain to allow the bather a bit of privacy. The curtains were originally made of cloth which didn’t half soak up some dirty water!",
            fact4:
              "As a scientifically stated fact, Curtains made with natural and environmentally friendly fibres can reduce the level of Cardon dioxide in homes. Curtains and blinds which have a natural color shade can also help to reduce carbon dioxide. Hence, making the environment of the house fresh and sustainable.",
            fact5:
              "The Roman Blinds are originated from Ancient Rome even before the invention of glass windows. These blinds are preferred today because of their beautiful textures and patterns. By providing privacy they also kept dust and debris from their homes.",
            fact6:
              "The Romans got pretty tired of all the dust and debris blowing into their homes, their ingenious solution was to hang damp pieces of cloth over their window and doorways thus the first Roman Blinds were born! (Also the first air-condition system).",
            fact7:
              "Some of the earliest known blinds are derived from evidence of the ancient Chinese. Blinds were created by binding bamboo together, and hanging them in doorways and windows to create privacy. The Ancient Egyptians were also doing something similar with reeds.",
            fact8:
              "During the Victorian era, window treatments were typically dark due to colored fabrics being very expensive. Dull variations of navy blue, dark brown, burgundy and green were the typical colors of Victorian drapes!",
            fact9:
              "The Tilt Mechanism found in nearly all hanging blinds today was first patented by American inventor John Hampson. Think it’s about time we all said a huge thank you to Mr. Hampson!",
            fact10:
              "Although many would think Venetian blinds came from Venice (makes sense?!) they did not! It was, in fact, the Persians who first engineered the familiar slatted design we all recognize today as Venetian blinds.",
            fact11:
              "One of the largest windows in the world can be found at the Notre Dame Cathedral in Paris, known as ‘The Rose Window’. The Rose Window has a diameter of 13.1 (43 feet) meters and a circumference of 41.1 meters (135 feet).",
          },
          recenzije: {
            recenzijaTitle: "What they say about us?",
            one: "We furnished our entire apartment, but the bedroom left the best impression. I highly recommend working with them.",
            two: "My wife and I are extremely pleased with the professionalism and kindness of all the staff. A warm recommendation for anyone looking to enrich their home and bring warmth into it. Veselinovići",
            three: "Great store. All the praise.",
            four: "Excellent store. it has everything",
            five: "I'm thrilled with my shopping experience at this home decor store! Their collection is incredibly diverse and provides everything you need to create the perfect ambiance. The quality of the products is outstanding. Warm recommendation.",
            six: "A wonderful selection of home decoration products and outstanding service!",
          },
          backBtn: {
            tekst: "Go Back",
          },
          zavese: {
            naslov: "Curtains and draperies",
            tekst1:
              "Curtains and draperies are essential elements of interior decoration, whether in residential or commercial spaces. The primary difference between curtains and draperies lies in the materials they are made from. Curtains are typically made from lightweight, transparent, and delicate materials aimed at enhancing and adding warmth to any space. Depending on the color, pattern, and type of material, curtains can significantly influence the appearance and warmth of a room.",
            tekst2:
              "Besides their decorative role, curtains also function to regulate the amount of daylight entering a space and to reduce the transparency of the interior to the outside at night. Draperies, on the other hand, are made from sturdy and durable materials with dense weaving. In addition to their decorative effect, which, when combined with curtains, gives a space a new dimension, draperies also serve to partially or completely block daylight and reduce the interior’s transparency to the outside.,",
          },
          zebraRolo: {
            zebraTitle: "Zebra blinds",
            roloTitle: "Roller blinds",
            zebraTekst:
              "Zebra blinds are roller blinds with multifunctional properties, capable of replacing traditional curtains, draperies, and curtain rods. They quickly became popular in both global and local markets. Made from two types of antistatic materials, zebra blinds do not attract dust or odors and have varying degrees of light permeability. They can be packed in an aluminum casing or be open type, depending on your needs. They can be mounted on the wall, ceiling, or directly on the window frame. You can manually control the amount of light entering the room with a chain or by installing a motor and using a remote control. Easy to install, zebra blinds are suitable for both commercial spaces and all rooms in a home. We custom-make zebra blinds to your window measurements, and our wide selection of materials and designs will surely meet any of your desires and ideas.",
            roloTekst:
              "Roller blinds are primarily known for their great functionality in furnishing both business and private spaces, providing excellent sun protection and being very easy to operate. Besides their functionality, they can give any space a modern look with their wide range of patterns and colors. You can manually control the raising and lowering of roller blinds with a chain or by installing a motor and using a remote control. The roller mechanism can also be integrated with smart home systems. All our roller blinds are custom-made to fit your windows, and our extensive selection of materials and designs will meet any of your wishes and ideas.",
          },
          tapete: {
            naslov: "Wallpaper",
            tekst:
              "Wallpapers have become very popular again for decorating both residential and commercial spaces, representing one of the best choices for wall decoration. With the resurgence of this incredibly versatile and expressive option for wall coverings, many new materials have been developed for wallpaper production. Gone are the days of frustrating wallpapers that were hard to apply and even harder to remove. Now you can enjoy various materials that are easy to install and remove. All our wallpapers are of high quality, with lasting and intense colors, and are very easy to maintain. From our extensive wallpaper collection, you can choose the best design ideal for the space you are decorating, matching your sensibility and taste.",
          },
          dv: {
            naslov: "Wooden venetian blinds",
            tekst:
              "Wooden Venetian blinds have regained popularity due to their functionality and simplicity. With a wide range of colors and designs now available, they can easily add the necessary warmth to any home or office space. They are made from lightweight and noble wood, resistant to UV radiation and mechanical damage, and come in slat widths of 25mm or 50mm. You can control the amount of light in a room simply by pulling a cord, which can match the color of the blinds. With our extensive range of designs and colors, we are confident you will find the perfect wooden Venetian blinds for your office or home.",
          },
          mebl: {
            naslov: "Upholstery fabric",
            tekst:
              "Upholstery fabric is a type of textile, a decorative fabric made from blends of various materials in terms of composition, production technology, and weight. Advances in the production of decorative fabrics offer a wide range of this material with different textures, compositions, and applications. It is most commonly used as upholstery material for furniture, covering and lining furniture, serving as both decoration and protection. The type, design, and composition of the material are chosen depending on the intended use of the product. Our collection includes solid- colored upholstery fabrics and those with various designs, such as baroque, ethnic, boho, minimal, geometric, industrial, floral, etc. You can find upholstery fabrics in different compositions with high abrasion resistance, ensuring quality.",
          },
          plise: {
            naslov: "Pleated blinds",
            tekst:
              "Pleated blinds feature a manually operated mechanism and are unique because they can be installed in any non-standard window frame (triangle, circle, semicircle, etc.). They can be moved in multiple directions, from top to bottom or bottom to top. Made from numerous materials in various colors and patterns, which have antistatic properties, they do not attract dust or odors. Pleated blinds can partially or completely darken a room, creating a pleasant effect of subdued light or total darkness. They are also very easy to maintain.",
          },
          posteljina: {
            naslov: "Bedding and Towels",
            tekst:
              "Our bedding is more than just a fabric - it's an experience. Enjoy the softness of our luxurious sheets, pillowcases and bedspreads, giving you the ultimate comfort for a restful night's sleep. From classic cotton sateens to exotic silk pieces, our bedding collection offers a wide range of colors and designs that will refresh and enhance your bedroom. When it comes to refreshing your body after a relaxing shower, our luxurious towels provide a touch of softness and absorbency. Made from the highest quality cotton or bamboo, our towels are not only functional, but also an aesthetically appealing addition to your bedroom. bathroom. Let our bed linen and towels complete your home with their luxurious touches and irresistible design. Visit our collection today and enjoy the feeling of luxury every day!",
          },
          garn: {
            naslov: "Curtain rods",
            tekst:
              "When considering window decoration, one of the essential elements that enhance the space are curtains, but along with them, appropriate curtain rods are indispensable. With the selection of the right model and other interior details, curtain rods can further accentuate and enrich the overall space. From elegant and modern to subtle and traditional, you will surely find a solution that suits your style. Our collection includes numerous models in different colors and materials that are very easy and quick to install. We offer three types of curtain rods – ceiling-mounted, ceiling-mounted with a pull system, and wall-mounted.",
          },
          lux: {
            naslov: "Luxury and fabric vertical blinds",
            tekst:
              "Vertical blinds are the best way to cover large glass surfaces and ensure a high degree of light control in your office or home. They are made from high-quality fabric available in various colors or patterns with different light permeability, which will best complement your interior. Vertical blinds are installed vertically and can be gathered or spread with a cord, as well as\nrotated to adjust the amount of light entering the room. LUXURY VERTICAL BLINDS use the same mechanism but are made from higher-quality materials, providing the same functionality but adding an exclusive touch to your space due to the superior material quality.",
          },
        },
      },
    },
  });

export default i18next;
