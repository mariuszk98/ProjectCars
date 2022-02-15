import AudiR8 from "../Images/audi-r8.jpg";
import Porsche911 from "../Images/porsche-911.jpg";
import BmwM5 from "../Images/bmw-m5.jpg";
import NissanGTR from "../Images/nissan-gtr.jpg";
import AudiRs6 from "../Images/audi-rs6.jpg";
import Chevrolet from "../Images/chevrolet-camaro.jpg";
import Doge from "../Images/doge-hellcat.jpg";
import Ford from "../Images/ford-mustang.jpg";
import Kia from "../Images/kia-stinger.jpg";
import Lexus from "../Images/lexus-lc500.jpg";
import Mercedes from "../Images/mercedes-c63s.jpg";
import Toyota from "../Images/toyota-supra.jpg";

const data = [
  {
    ImgUrl: AudiR8,
    name: "Audi",
    model: "R8 Grenn Hell",
    engine: "5200 cc",
    power: "620 KM",
    speed: "3,1s",
    info: "Audi R8, szczególnie w wersji Performance, jest z pewnością autem wyjątkowym. Tym bardziej wyjątkowy jest nasz egzemplarz w limitowanej do 50 sztuk wersji „Green Hell”. Unikatowa jest również użyta do jego napędu jednostka. Druga generacja w poliftingowej wersji wciąż posiada pod maską silnik V10 o pojemności 5.2L, znany również z bliźniaczego Huracan’a. Jednostka zapewnia doskonałe osiągi, dźwięk oraz wrażenia z jazdy. Audi R8 z pewnością znajduje się na liście marzeń każdego miłośnika motoryzacji.",
    gearbox: "Autoatyczna",
    drive: "4x4 quattro",
    production: "Niemcy",
  },
  {
    ImgUrl: Porsche911,
    name: "Porsche 911",
    model: "Carrera 4S",
    engine: "3000 cc",
    power: "450 KM",
    speed: "3,4s",
    info: "Najnowsza generacja Porsche 911 (992) to kolejna ewolucja kultowego modelu. Porsche nie zdecydowało się na ryzykowną rewolucję, postawiło na zachowanie klasycznych dla 911 elementów, polepszając przy tym pod wieloma względami znaną nam konstrukcję. Nowoczesny wygląd nawiązujący do klasycznych modeli 911, z pewnością przypadnie do gustu wielbicielom tej marki. Wersja 4S przyśpiesza do 60mph (96 km/h) w 3.0 s i osiąga prędkość maksymalną 306km/h! To przyśpieszenie na poziomie poprzedniej generacji w topowej odmianie Turbo. ",
    gearbox: "Automatyczna PDK",
    drive: "4x4",
    production: "Niemcy",
  },
  {
    ImgUrl: BmwM5,
    name: "Bmw",
    model: "M5 Competition",
    engine: "4400 cc",
    power: "625 KM",
    speed: "3,3s",
    info: "BMW M5 o oznaczeniu F90 stało się autem zdecydowanie bardziej wszechstronnym. W głównej mierze jest to zasługa obecnego po raz pierwszy na pokładzie napędu na cztery koła. Czy to oznacza, że M5 straciło swoją duszę i zerwało z tradycją? W żadnym wypadku! Auto ma zdecydowanie tylnonapędową charakterystykę, a w każdym momencie, napęd na przód można odłączyć… Nie powinniśmy jednak robić w pierwszych dniach zapoznawania się z pojazdem ",
    gearbox: "Automatyczna",
    drive: "4x4",
    production: "Niemcy",
  },
  {
    ImgUrl: NissanGTR,
    name: "Nissan",
    model: "GR-R Prestige",
    engine: "3700 cc",
    power: "570 KM",
    speed: "2,7",
    info: "Nissan GT-R zdążył już zostać autem wręcz kultowym. Produkowany od 2007 roku, jako następca modelu Skyline, zdobył wiele prestiżowych nagród takich jak „Supercar of the year” 2007 według magazynu TopGear, „World Performance Car” 2009 oraz „International Car of the Year” 2009. Sylwetka i osiągi tego auta wciąż robią ogromne wrażenie, szczególnie, że w 2016 roku, GT-R przeszedł gruntowny lifting, w którym poprawiono wiele kluczowych elementów.",
    gearbox: "Automatyczna",
    drive: "4x4",
    production: "Japonia",
  },
  {
    ImgUrl: AudiRs6,
    name: "Audi",
    model: "Rs6 C8 Performance",
    engine: "4000 cc",
    power: "600 KM",
    speed: "3,6s",
    info: "Konkurencja również oferuje sportowe kombi, to m.in. Mercedes E63, Alpina B5 bądź Porsche Panamera Turismo, jednak to RS6 stało się autem kultowym. Audi specjalizuje się w sportowych kombi od lat, co również wpływa na wyjątkowość tego auta. Emocje towarzyszące jeździe Audi RS6, bez dwóch zdań idą w parze z jego doskonałą renomą.",
    gearbox: "Automatyczna",
    drive: "4x4",
    production: "Niemcy",
  },
  {
    ImgUrl: Chevrolet,
    name: "Chevrolet",
    model: "Camaro SS",
    engine: "6200 cc",
    power: "455 KM",
    speed: "4,0s",
    info: "Powodem powstania tego modelu samochodu była chęć stworzenia konkurencyjnej konstrukcji przez Chevroleta dla kultowego modelu muscle car Forda. Mowa oczywiście o kultowym Mustangu GT. Pojedynek między tymi modelami samochodów trwa do dzisiaj. Chevrolet Camaro SS to typowo amerykański samochód tej klasy, z ponad 6-litrowym ogromnym silnikiem, napędem na tylną oś i aż 455 końmi mechanicznymi pod maską. Automatyczna skrzynia biegów oraz napęd na tył (RWD) sprawia że auto prowadzi się z wielką przyjemnością.",
    gearbox: "Automatyczna",
    drive: "RWD",
    production: "Ameryka",
  },
  {
    ImgUrl: Doge,
    name: "Doge",
    model: "Challenger Hellcat",
    engine: "6200 cc",
    power: "707KM",
    speed: "3,7s",
    info: "Dodge Challenger SRT Hellcat to amerykański „muscle car” o mocy ponad 700KM! To ponad 200KM więcej od „standardowych” wersji tego modelu z silnikami V8. Dzięki olbrzymiej mocy i momencie obrotowym sięgającym prawie 900Nm (dokładnie 881Nm), amerykańska legenda rozpędza się do 100km/h w czasie ok 3.7s robiąc przy tym naprawdę mnóstwo hałasu!",
    gearbox: "Automatyczna",
    drive: "RWD",
    production: "Ameryka",
  },
  {
    ImgUrl: Ford,
    name: "Ford",
    model: "Mustang GT V8",
    engine: "5000 cc",
    power: "450KM",
    speed: "4,3s",
    info: "Najnowsza generacja Forda Mustanga to kolejna ewolucja kultowego modelu produkowanego od 1964 roku. Ford przy tworzeniu najnowszego wcielenia Mustanga skupił się na poprawieniu najistotniejszych elementów, takich jak prowadzenie, zawieszenie czy wnętrze pojazdu. Było to kluczowe dla pozyskania dodatkowych klientów z Europy, którzy kierują się często innymi kryteriami niż kierowcy ze Stanów. Niewątpliwie producent zrealizował swój cel.",
    gearbox: "Automatyczna",
    drive: "RWD",
    production: "Ameryka",
  },
  {
    ImgUrl: Kia,
    name: "Kia",
    model: "Stinger V6 BiTurbo",
    engine: "3300 cc",
    power: "366KM",
    speed: "4,9s",
    info: "Kia już kilka lat temu wraz z pokazaniem modelu Stinger zszokowała branżę motoryzacyjną. Marka kojarzyła się z autami nacechowanymi praktycznością i oszczędnością. Zakup Kii kierowany był w większości przypadków zdrowym rozsądkiem i chłodną kalkulacją. Koreański producent jednak od pewnego czasu z powodzeniem zmieniał postrzeganie swojej marki, a Stinger został tego najlepszym dowodem.",
    gearbox: "Automatyczna",
    drive: "4x4",
    production: "Korea",
  },
  {
    ImgUrl: Lexus,
    name: "Lexus",
    model: "LC500 Superturismo ",
    engine: "5000 cc",
    power: "477KM",
    speed: "4,7s",
    info: "Świetnie spisujące się na dłuższych trasach, wygodne i niesamowicie dobrze wyciszone od otoczenia (oczywiście nie od dźwięków silnika!) Wolnossące V8 z przyjemnością wkręca się na wysokie obroty, zapewniając bardzo przyjemne brzmienie. Dzięki dziesięciostopniowej skrzyni biegów, nawet przy wysokich prędkościach auto zapewnia doskonały komfort jazdy oraz zaskakująco niskie spalanie. ",
    gearbox: "Automatyczna",
    drive: "RWD",
    production: "Japonia",
  },
  {
    ImgUrl: Mercedes,
    name: "Mercedes",
    model: "C63S AMG",
    engine: "4000 cc",
    power: "510KM",
    speed: "3,9s",
    info: "Najnowsza odsłona C63s zniewala osiągami oraz dźwiękiem aktywnego układu wydechowego.Strzały dochodzące z wydechu wraz z wyjątkowo agresywnym wyglądem budzą respekt i przyciągają spojrzenia.",
    gearbox: "Automatyczna",
    drive: "RWD",
    production: "Niemcy",
  },
  {
    ImgUrl: Toyota,
    name: "Toyota",
    model: "GR Supra TwinTurbo",
    engine: "3000 cc",
    power: "340KM",
    speed: "4,3s",
    info: "Z jednej strony, na producencie pojazdu spoczywały oczekiwania klientów zapatrzonych w poprzednią edycję, z drugiej, realia finansowe firmy i zdrowy rozsądek. Każdy jest świadomy pokrewieństwa konstrukcyjnego z BMW Z4, jednak większość osób zapomina, że gdyby nie współpraca tych dwóch motoryzacyjnych gigantów, prawdopodobnie nigdy nie zobaczylibyśmy nowej wersji Supra. I to tak dopracowanej.",
    gearbox: "Automatyczna",
    drive: "RWD",
    production: "Japonia",
  },
];

export default data;
