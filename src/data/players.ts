export interface Player {
  name: string;
  country: string; // matches Country.name
  position: string;
  club: string;
  number?: number;
}

export const PLAYERS: Player[] = [
  // Argentina
  {
    name: "Lionel Messi",
    country: "Argentina",
    position: "Forward",
    club: "Inter Miami",
  },
  {
    name: "Julián Álvarez",
    country: "Argentina",
    position: "Forward",
    club: "Atlético Madrid",
  },
  {
    name: "Rodrigo De Paul",
    country: "Argentina",
    position: "Midfielder",
    club: "Atlético Madrid",
  },
  {
    name: "Enzo Fernández",
    country: "Argentina",
    position: "Midfielder",
    club: "Chelsea",
  },
  {
    name: "Emiliano Martínez",
    country: "Argentina",
    position: "Goalkeeper",
    club: "Aston Villa",
  },
  {
    name: "Nicolás Otamendi",
    country: "Argentina",
    position: "Defender",
    club: "Benfica",
  },
  {
    name: "Alejandro Garnacho",
    country: "Argentina",
    position: "Forward",
    club: "Napoli",
  },
  // Brazil
  {
    name: "Vinicius Jr",
    country: "Brazil",
    position: "Forward",
    club: "Real Madrid",
  },
  {
    name: "Rodrygo",
    country: "Brazil",
    position: "Forward",
    club: "Real Madrid",
  },
  {
    name: "Casemiro",
    country: "Brazil",
    position: "Midfielder",
    club: "Manchester United",
  },
  { name: "Marquinhos", country: "Brazil", position: "Defender", club: "PSG" },
  {
    name: "Alisson",
    country: "Brazil",
    position: "Goalkeeper",
    club: "Liverpool",
  },
  {
    name: "Raphinha",
    country: "Brazil",
    position: "Forward",
    club: "Barcelona",
  },
  {
    name: "Bruno Guimarães",
    country: "Brazil",
    position: "Midfielder",
    club: "Newcastle United",
  },
  // France
  {
    name: "Kylian Mbappé",
    country: "France",
    position: "Forward",
    club: "Real Madrid",
  },
  {
    name: "Antoine Griezmann",
    country: "France",
    position: "Forward",
    club: "Atlético Madrid",
  },
  {
    name: "Aurélien Tchouaméni",
    country: "France",
    position: "Midfielder",
    club: "Real Madrid",
  },
  {
    name: "Mike Maignan",
    country: "France",
    position: "Goalkeeper",
    club: "AC Milan",
  },
  {
    name: "Dayot Upamecano",
    country: "France",
    position: "Defender",
    club: "Bayern Munich",
  },
  {
    name: "Ousmane Dembélé",
    country: "France",
    position: "Forward",
    club: "PSG",
  },
  {
    name: "William Saliba",
    country: "France",
    position: "Defender",
    club: "Arsenal",
  },
  // Spain
  {
    name: "Pedri",
    country: "Spain",
    position: "Midfielder",
    club: "Barcelona",
  },
  { name: "Gavi", country: "Spain", position: "Midfielder", club: "Barcelona" },
  {
    name: "Lamine Yamal",
    country: "Spain",
    position: "Forward",
    club: "Barcelona",
  },
  {
    name: "Nico Williams",
    country: "Spain",
    position: "Forward",
    club: "Athletic Club",
  },
  {
    name: "Dani Carvajal",
    country: "Spain",
    position: "Defender",
    club: "Real Madrid",
  },
  {
    name: "Unai Simón",
    country: "Spain",
    position: "Goalkeeper",
    club: "Athletic Club",
  },
  {
    name: "Fabian Ruiz",
    country: "Spain",
    position: "Midfielder",
    club: "PSG",
  },
  // England
  {
    name: "Jude Bellingham",
    country: "England",
    position: "Midfielder",
    club: "Real Madrid",
  },
  {
    name: "Harry Kane",
    country: "England",
    position: "Forward",
    club: "Bayern Munich",
  },
  {
    name: "Bukayo Saka",
    country: "England",
    position: "Forward",
    club: "Arsenal",
  },
  {
    name: "Phil Foden",
    country: "England",
    position: "Midfielder",
    club: "Manchester City",
  },
  {
    name: "Declan Rice",
    country: "England",
    position: "Midfielder",
    club: "Arsenal",
  },
  {
    name: "Marcus Rashford",
    country: "England",
    position: "Forward",
    club: "Aston Villa",
  },
  {
    name: "Jordan Pickford",
    country: "England",
    position: "Goalkeeper",
    club: "Everton",
  },
  // Germany
  {
    name: "Florian Wirtz",
    country: "Germany",
    position: "Midfielder",
    club: "Bayer Leverkusen",
  },
  {
    name: "Jamal Musiala",
    country: "Germany",
    position: "Midfielder",
    club: "Bayern Munich",
  },
  {
    name: "Kai Havertz",
    country: "Germany",
    position: "Forward",
    club: "Arsenal",
  },
  {
    name: "Manuel Neuer",
    country: "Germany",
    position: "Goalkeeper",
    club: "Bayern Munich",
  },
  {
    name: "Antonio Rüdiger",
    country: "Germany",
    position: "Defender",
    club: "Real Madrid",
  },
  {
    name: "Toni Kroos",
    country: "Germany",
    position: "Midfielder",
    club: "Real Madrid",
  },
  // Portugal
  {
    name: "Cristiano Ronaldo",
    country: "Portugal",
    position: "Forward",
    club: "Al Nassr",
  },
  {
    name: "Bruno Fernandes",
    country: "Portugal",
    position: "Midfielder",
    club: "Manchester United",
  },
  {
    name: "Bernardo Silva",
    country: "Portugal",
    position: "Midfielder",
    club: "Manchester City",
  },
  {
    name: "Rafael Leão",
    country: "Portugal",
    position: "Forward",
    club: "AC Milan",
  },
  {
    name: "Rúben Dias",
    country: "Portugal",
    position: "Defender",
    club: "Manchester City",
  },
  {
    name: "João Cancelo",
    country: "Portugal",
    position: "Defender",
    club: "Atlético Madrid",
  },
  // Netherlands
  {
    name: "Virgil van Dijk",
    country: "Netherlands",
    position: "Defender",
    club: "Liverpool",
  },
  {
    name: "Memphis Depay",
    country: "Netherlands",
    position: "Forward",
    club: "Corinthians",
  },
  {
    name: "Cody Gakpo",
    country: "Netherlands",
    position: "Forward",
    club: "Liverpool",
  },
  {
    name: "Frenkie de Jong",
    country: "Netherlands",
    position: "Midfielder",
    club: "Barcelona",
  },
  {
    name: "Xavi Simons",
    country: "Netherlands",
    position: "Midfielder",
    club: "PSG",
  },
  {
    name: "Matthijs de Ligt",
    country: "Netherlands",
    position: "Defender",
    club: "Manchester United",
  },
  // Morocco
  {
    name: "Achraf Hakimi",
    country: "Morocco",
    position: "Defender",
    club: "PSG",
  },
  {
    name: "Youssef En-Nesyri",
    country: "Morocco",
    position: "Forward",
    club: "Fenerbahçe",
  },
  {
    name: "Hakim Ziyech",
    country: "Morocco",
    position: "Midfielder",
    club: "Galatasaray",
  },
  {
    name: "Romain Saïss",
    country: "Morocco",
    position: "Defender",
    club: "Besiktas",
  },
  {
    name: "Sofyan Amrabat",
    country: "Morocco",
    position: "Midfielder",
    club: "Fiorentina",
  },
  // Japan
  {
    name: "Takehiro Tomiyasu",
    country: "Japan",
    position: "Defender",
    club: "Arsenal",
  },
  {
    name: "Ritsu Doan",
    country: "Japan",
    position: "Forward",
    club: "Freiburg",
  },
  {
    name: "Kaoru Mitoma",
    country: "Japan",
    position: "Forward",
    club: "Brighton",
  },
  {
    name: "Wataru Endo",
    country: "Japan",
    position: "Midfielder",
    club: "Liverpool",
  },
  {
    name: "Daichi Kamada",
    country: "Japan",
    position: "Midfielder",
    club: "Lazio",
  },
  {
    name: "Takumi Minamino",
    country: "Japan",
    position: "Forward",
    club: "Monaco",
  },
  // USA
  {
    name: "Christian Pulisic",
    country: "USA",
    position: "Forward",
    club: "AC Milan",
  },
  {
    name: "Tyler Adams",
    country: "USA",
    position: "Midfielder",
    club: "AFC Bournemouth",
  },
  {
    name: "Weston McKennie",
    country: "USA",
    position: "Midfielder",
    club: "Leeds United",
  },
  {
    name: "Giovanni Reyna",
    country: "USA",
    position: "Midfielder",
    club: "Nottingham Forest",
  },
  {
    name: "Matt Turner",
    country: "USA",
    position: "Goalkeeper",
    club: "Crystal Palace",
  },
  {
    name: "Yunus Musah",
    country: "USA",
    position: "Midfielder",
    club: "AC Milan",
  },
  {
    name: "Ricardo Pepi",
    country: "USA",
    position: "Forward",
    club: "PSV Eindhoven",
  },
  // Mexico
  {
    name: "Hirving Lozano",
    country: "Mexico",
    position: "Forward",
    club: "PSV Eindhoven",
  },
  {
    name: "Raúl Jiménez",
    country: "Mexico",
    position: "Forward",
    club: "Fulham",
  },
  {
    name: "Edson Álvarez",
    country: "Mexico",
    position: "Midfielder",
    club: "West Ham United",
  },
  {
    name: "Guillermo Ochoa",
    country: "Mexico",
    position: "Goalkeeper",
    club: "America",
  },
  {
    name: "César Montes",
    country: "Mexico",
    position: "Defender",
    club: "Espanyol",
  },
  // Canada
  {
    name: "Alphonso Davies",
    country: "Canada",
    position: "Defender",
    club: "Bayern Munich",
  },
  {
    name: "Jonathan David",
    country: "Canada",
    position: "Forward",
    club: "Lille",
  },
  {
    name: "Tajon Buchanan",
    country: "Canada",
    position: "Forward",
    club: "Inter Milan",
  },
  {
    name: "Atiba Hutchinson",
    country: "Canada",
    position: "Midfielder",
    club: "Besiktas",
  },
  {
    name: "Milan Borjan",
    country: "Canada",
    position: "Goalkeeper",
    club: "Red Star Belgrade",
  },
  // Senegal
  {
    name: "Sadio Mané",
    country: "Senegal",
    position: "Forward",
    club: "Al Nassr",
  },
  {
    name: "Kalidou Koulibaly",
    country: "Senegal",
    position: "Defender",
    club: "Al Hilal",
  },
  {
    name: "Idrissa Gueye",
    country: "Senegal",
    position: "Midfielder",
    club: "Everton",
  },
  {
    name: "Edouard Mendy",
    country: "Senegal",
    position: "Goalkeeper",
    club: "Al Ahli",
  },
  {
    name: "Ismaila Sarr",
    country: "Senegal",
    position: "Forward",
    club: "Crystal Palace",
  },
  // Nigeria
  {
    name: "Victor Osimhen",
    country: "Nigeria",
    position: "Forward",
    club: "Galatasaray",
  },
  {
    name: "Alex Iwobi",
    country: "Nigeria",
    position: "Midfielder",
    club: "Fulham",
  },
  {
    name: "Wilfred Ndidi",
    country: "Nigeria",
    position: "Midfielder",
    club: "Leicester City",
  },
  {
    name: "Taiwo Awoniyi",
    country: "Nigeria",
    position: "Forward",
    club: "Nottingham Forest",
  },
  {
    name: "Terem Moffi",
    country: "Nigeria",
    position: "Forward",
    club: "Nice",
  },
  // South Korea
  {
    name: "Son Heung-min",
    country: "South Korea",
    position: "Forward",
    club: "Tottenham Hotspur",
  },
  {
    name: "Kim Min-jae",
    country: "South Korea",
    position: "Defender",
    club: "Bayern Munich",
  },
  {
    name: "Lee Kang-in",
    country: "South Korea",
    position: "Midfielder",
    club: "PSG",
  },
  {
    name: "Hwang Hee-chan",
    country: "South Korea",
    position: "Forward",
    club: "Wolverhampton",
  },
  // Iran
  {
    name: "Mehdi Taremi",
    country: "Iran",
    position: "Forward",
    club: "Inter Milan",
  },
  {
    name: "Alireza Jahanbakhsh",
    country: "Iran",
    position: "Forward",
    club: "Feyenoord",
  },
  {
    name: "Sardar Azmoun",
    country: "Iran",
    position: "Forward",
    club: "Bayer Leverkusen",
  },
  // Saudi Arabia
  {
    name: "Salem Al-Dawsari",
    country: "Saudi Arabia",
    position: "Forward",
    club: "Al Hilal",
  },
  {
    name: "Mohammed Al-Owais",
    country: "Saudi Arabia",
    position: "Goalkeeper",
    club: "Al Hilal",
  },
  {
    name: "Yasser Al-Shahrani",
    country: "Saudi Arabia",
    position: "Defender",
    club: "Al Hilal",
  },
  // Uruguay
  {
    name: "Darwin Núñez",
    country: "Uruguay",
    position: "Forward",
    club: "Liverpool",
  },
  {
    name: "Federico Valverde",
    country: "Uruguay",
    position: "Midfielder",
    club: "Real Madrid",
  },
  {
    name: "Luis Suárez",
    country: "Uruguay",
    position: "Forward",
    club: "Inter Miami",
  },
  {
    name: "Rodrigo Bentancur",
    country: "Uruguay",
    position: "Midfielder",
    club: "Tottenham Hotspur",
  },
  {
    name: "Ronald Araújo",
    country: "Uruguay",
    position: "Defender",
    club: "Juventus",
  },
  // Colombia
  {
    name: "James Rodríguez",
    country: "Colombia",
    position: "Midfielder",
    club: "Rayo Vallecano",
  },
  {
    name: "Luis Díaz",
    country: "Colombia",
    position: "Forward",
    club: "Liverpool",
  },
  {
    name: "Duván Zapata",
    country: "Colombia",
    position: "Forward",
    club: "Torino",
  },
  {
    name: "David Ospina",
    country: "Colombia",
    position: "Goalkeeper",
    club: "Al Nassr",
  },
  // Ecuador
  {
    name: "Enner Valencia",
    country: "Ecuador",
    position: "Forward",
    club: "Fenerbahçe",
  },
  {
    name: "Moisés Caicedo",
    country: "Ecuador",
    position: "Midfielder",
    club: "Chelsea",
  },
  {
    name: "Piero Hincapié",
    country: "Ecuador",
    position: "Defender",
    club: "Bayer Leverkusen",
  },
  // Croatia
  {
    name: "Luka Modrić",
    country: "Croatia",
    position: "Midfielder",
    club: "Real Madrid",
  },
  {
    name: "Ivan Perišić",
    country: "Croatia",
    position: "Forward",
    club: "Hajduk Split",
  },
  {
    name: "Mateo Kovačić",
    country: "Croatia",
    position: "Midfielder",
    club: "Manchester City",
  },
  {
    name: "Joško Gvardiol",
    country: "Croatia",
    position: "Defender",
    club: "Manchester City",
  },
  // Switzerland
  {
    name: "Xherdan Shaqiri",
    country: "Switzerland",
    position: "Midfielder",
    club: "Chicago Fire",
  },
  {
    name: "Granit Xhaka",
    country: "Switzerland",
    position: "Midfielder",
    club: "Bayer Leverkusen",
  },
  {
    name: "Yann Sommer",
    country: "Switzerland",
    position: "Goalkeeper",
    club: "Inter Milan",
  },
  // Belgium
  {
    name: "Kevin De Bruyne",
    country: "Belgium",
    position: "Midfielder",
    club: "Manchester City",
  },
  {
    name: "Romelu Lukaku",
    country: "Belgium",
    position: "Forward",
    club: "Napoli",
  },
  {
    name: "Thibaut Courtois",
    country: "Belgium",
    position: "Goalkeeper",
    club: "Real Madrid",
  },
  {
    name: "Axel Witsel",
    country: "Belgium",
    position: "Midfielder",
    club: "Atlético Madrid",
  },
  // Australia
  {
    name: "Mathew Ryan",
    country: "Australia",
    position: "Goalkeeper",
    club: "AZ Alkmaar",
  },
  {
    name: "Mathew Leckie",
    country: "Australia",
    position: "Forward",
    club: "Melbourne City",
  },
  {
    name: "Ajdin Hrustic",
    country: "Australia",
    position: "Midfielder",
    club: "Hellas Verona",
  },
  // Ghana
  {
    name: "Jordan Ayew",
    country: "Ghana",
    position: "Forward",
    club: "Crystal Palace",
  },
  {
    name: "Mohammed Kudus",
    country: "Ghana",
    position: "Midfielder",
    club: "West Ham United",
  },
  {
    name: "Thomas Partey",
    country: "Ghana",
    position: "Midfielder",
    club: "Arsenal",
  },
  // Tunisia
  {
    name: "Wahbi Khazri",
    country: "Tunisia",
    position: "Forward",
    club: "Montpellier",
  },
  {
    name: "Youssef Msakni",
    country: "Tunisia",
    position: "Forward",
    club: "Al Arabi",
  },
  // Cameroon
  {
    name: "Vincent Aboubakar",
    country: "Cameroon",
    position: "Forward",
    club: "PAOK",
  },
  {
    name: "Eric Maxim Choupo-Moting",
    country: "Cameroon",
    position: "Forward",
    club: "Bayern Munich",
  },
  {
    name: "André Onana",
    country: "Cameroon",
    position: "Goalkeeper",
    club: "Manchester United",
  },
  // Denmark
  {
    name: "Christian Eriksen",
    country: "Denmark",
    position: "Midfielder",
    club: "Manchester United",
  },
  {
    name: "Kasper Schmeichel",
    country: "Denmark",
    position: "Goalkeeper",
    club: "Anderlecht",
  },
  {
    name: "Pierre-Emile Höjbjerg",
    country: "Denmark",
    position: "Midfielder",
    club: "Marseille",
  },
  // Poland
  {
    name: "Robert Lewandowski",
    country: "Poland",
    position: "Forward",
    club: "Barcelona",
  },
  {
    name: "Wojciech Szczęsny",
    country: "Poland",
    position: "Goalkeeper",
    club: "Barcelona",
  },
  {
    name: "Piotr Zieliński",
    country: "Poland",
    position: "Midfielder",
    club: "Inter Milan",
  },
  // Serbia
  {
    name: "Aleksandar Mitrović",
    country: "Serbia",
    position: "Forward",
    club: "Al Hilal",
  },
  {
    name: "Dušan Vlahović",
    country: "Serbia",
    position: "Forward",
    club: "Juventus",
  },
  {
    name: "Sergej Milinković-Savić",
    country: "Serbia",
    position: "Midfielder",
    club: "Al Hilal",
  },
  // Qatar
  {
    name: "Akram Afif",
    country: "Qatar",
    position: "Forward",
    club: "Al Sadd",
  },
  {
    name: "Almoez Ali",
    country: "Qatar",
    position: "Forward",
    club: "Al Duhail",
  },
  // Ivory Coast
  {
    name: "Sébastien Haller",
    country: "Ivory Coast",
    position: "Forward",
    club: "Dortmund",
  },
  {
    name: "Franck Kessié",
    country: "Ivory Coast",
    position: "Midfielder",
    club: "Al Ahli",
  },
  {
    name: "Nicolas Pépé",
    country: "Ivory Coast",
    position: "Forward",
    club: "LOSC Lille",
  },
  // Egypt
  {
    name: "Mohamed Salah",
    country: "Egypt",
    position: "Forward",
    club: "Liverpool",
  },
  {
    name: "Mohamed El-Shenawy",
    country: "Egypt",
    position: "Goalkeeper",
    club: "Al Ahly",
  },
  {
    name: "Mostafa Mohamed",
    country: "Egypt",
    position: "Forward",
    club: "Nantes",
  },
  // Costa Rica
  {
    name: "Keylor Navas",
    country: "Costa Rica",
    position: "Goalkeeper",
    club: "Newell's Old Boys",
  },
  {
    name: "Bryan Ruiz",
    country: "Costa Rica",
    position: "Midfielder",
    club: "Sporting CP",
  },
  // Scotland
  {
    name: "Andrew Robertson",
    country: "Scotland",
    position: "Defender",
    club: "Liverpool",
  },
  {
    name: "Scott McTominay",
    country: "Scotland",
    position: "Midfielder",
    club: "Napoli",
  },
  {
    name: "Kieran Tierney",
    country: "Scotland",
    position: "Defender",
    club: "Arsenal",
  },
  // Uzbekistan
  {
    name: "Eldor Shomurodov",
    country: "Uzbekistan",
    position: "Forward",
    club: "AS Roma",
  },
  {
    name: "Otabek Shukurov",
    country: "Uzbekistan",
    position: "Midfielder",
    club: "Pakhtakor",
  },
  // Georgia
  {
    name: "Khvicha Kvaratskhelia",
    country: "Georgia",
    position: "Forward",
    club: "PSG",
  },
  {
    name: "Georges Mikautadze",
    country: "Georgia",
    position: "Forward",
    club: "Lyon",
  },
  // Venezuela
  {
    name: "Yeferson Soteldo",
    country: "Venezuela",
    position: "Forward",
    club: "Santos FC",
  },
  {
    name: "Salomón Rondón",
    country: "Venezuela",
    position: "Forward",
    club: "Everton",
  },
  // Paraguay
  {
    name: "Miguel Almirón",
    country: "Paraguay",
    position: "Midfielder",
    club: "Newcastle United",
  },
  {
    name: "Óscar Romero",
    country: "Paraguay",
    position: "Forward",
    club: "San Lorenzo",
  },
  // Bolivia
  {
    name: "Marcelo Martins",
    country: "Bolivia",
    position: "Forward",
    club: "Cruzeiro",
  },
  // Peru
  {
    name: "Paolo Guerrero",
    country: "Peru",
    position: "Forward",
    club: "LDU Quito",
  },
  {
    name: "André Carrillo",
    country: "Peru",
    position: "Forward",
    club: "Al Qadsiah",
  },
  // Chile
  {
    name: "Alexis Sánchez",
    country: "Chile",
    position: "Forward",
    club: "Udinese",
  },
  {
    name: "Arturo Vidal",
    country: "Chile",
    position: "Midfielder",
    club: "Colo-Colo",
  },
  // New Zealand
  {
    name: "Chris Wood",
    country: "New Zealand",
    position: "Forward",
    club: "Nottingham Forest",
  },
  {
    name: "Bill Tuilagi",
    country: "New Zealand",
    position: "Forward",
    club: "Waitakere United",
  },
  // Mali
  {
    name: "Moussa Diaby",
    country: "Mali",
    position: "Forward",
    club: "Aston Villa",
  },
  {
    name: "Yves Bissouma",
    country: "Mali",
    position: "Midfielder",
    club: "Tottenham Hotspur",
  },
  // DR Congo
  {
    name: "Silas Wamangituka",
    country: "DR Congo",
    position: "Forward",
    club: "Stuttgart",
  },
  {
    name: "Arthur Masuaku",
    country: "DR Congo",
    position: "Defender",
    club: "Besiktas",
  },
  // Algeria
  {
    name: "Riyad Mahrez",
    country: "Algeria",
    position: "Forward",
    club: "Al Ahli",
  },
  {
    name: "Ismail Bennacer",
    country: "Algeria",
    position: "Midfielder",
    club: "AC Milan",
  },
  // Indonesia
  {
    name: "Marselino Ferdinan",
    country: "Indonesia",
    position: "Midfielder",
    club: "Persebaya",
  },
  {
    name: "Egy Maulana Vikri",
    country: "Indonesia",
    position: "Forward",
    club: "Lechia Gdańsk",
  },
  // Turkey
  {
    name: "Arda Güler",
    country: "Turkey",
    position: "Midfielder",
    club: "Real Madrid",
  },
  {
    name: "Hakan Çalhanoğlu",
    country: "Turkey",
    position: "Midfielder",
    club: "Inter Milan",
  },
  {
    name: "Kenan Yıldız",
    country: "Turkey",
    position: "Forward",
    club: "Juventus",
  },
  // Iraq
  {
    name: "Amjad Attwan",
    country: "Iraq",
    position: "Midfielder",
    club: "Al Shorta",
  },
  {
    name: "Mohanad Ali",
    country: "Iraq",
    position: "Forward",
    club: "Al Zawraa",
  },
  // Jamaica
  {
    name: "Leon Bailey",
    country: "Jamaica",
    position: "Forward",
    club: "Aston Villa",
  },
  {
    name: "Bobby Decordova-Reid",
    country: "Jamaica",
    position: "Midfielder",
    club: "Fulham",
  },
  {
    name: "Michail Antonio",
    country: "Jamaica",
    position: "Forward",
    club: "West Ham United",
  },
  // Austria
  {
    name: "David Alaba",
    country: "Austria",
    position: "Defender",
    club: "Real Madrid",
  },
  {
    name: "Marcel Sabitzer",
    country: "Austria",
    position: "Midfielder",
    club: "Dortmund",
  },
  {
    name: "Marko Arnautovic",
    country: "Austria",
    position: "Forward",
    club: "Inter Milan",
  },
  // Ukraine
  {
    name: "Andriy Yarmolenko",
    country: "Ukraine",
    position: "Forward",
    club: "Al Ain",
  },
  {
    name: "Mykhailo Mudryk",
    country: "Ukraine",
    position: "Forward",
    club: "Chelsea",
  },
  {
    name: "Oleksandr Zinchenko",
    country: "Ukraine",
    position: "Midfielder",
    club: "Arsenal",
  },
  // Palestine
  {
    name: "Oday Dabbagh",
    country: "Palestine",
    position: "Forward",
    club: "Amkar Perm",
  },
  // Comoros
  {
    name: "Youssouf M'Changama",
    country: "Comoros",
    position: "Midfielder",
    club: "Guingamp",
  },
  // Bahrain
  {
    name: "Ismail Abdullatif",
    country: "Bahrain",
    position: "Forward",
    club: "Al Muharraq",
  },
  // UAE
  {
    name: "Ali Mabkhout",
    country: "UAE",
    position: "Forward",
    club: "Al Jazira",
  },
  // Panama
  {
    name: "Blas Pérez",
    country: "Panama",
    position: "Forward",
    club: "FC Dallas",
  },
  {
    name: "Rolando Blackburn",
    country: "Panama",
    position: "Forward",
    club: "Al Shamal",
  },
  // Honduras
  {
    name: "Alberth Elis",
    country: "Honduras",
    position: "Forward",
    club: "Montpellier",
  },
  {
    name: "Romell Quioto",
    country: "Honduras",
    position: "Forward",
    club: "CF Montréal",
  },
  // Romania
  {
    name: "Ciprian Tătărușanu",
    country: "Romania",
    position: "Goalkeeper",
    club: "Nantes",
  },
  {
    name: "Ianis Hagi",
    country: "Romania",
    position: "Midfielder",
    club: "Deportivo Alavés",
  },
  // Czech Republic
  {
    name: "Tomáš Souček",
    country: "Czech Republic",
    position: "Midfielder",
    club: "West Ham United",
  },
  {
    name: "Patrik Schick",
    country: "Czech Republic",
    position: "Forward",
    club: "Bayer Leverkusen",
  },
  // Hungary
  {
    name: "Dominik Szoboszlai",
    country: "Hungary",
    position: "Midfielder",
    club: "Liverpool",
  },
  {
    name: "Péter Gulácsi",
    country: "Hungary",
    position: "Goalkeeper",
    club: "RB Leipzig",
  },
  // South Africa
  {
    name: "Percy Tau",
    country: "South Africa",
    position: "Forward",
    club: "Al Ahly",
  },
  {
    name: "Ronwen Williams",
    country: "South Africa",
    position: "Goalkeeper",
    club: "Mamelodi Sundowns",
  },
  // Tanzania
  {
    name: "Mbwana Samatta",
    country: "Tanzania",
    position: "Forward",
    club: "Fenerbahçe",
  },
  // El Salvador
  {
    name: "Alex Roldán",
    country: "El Salvador",
    position: "Midfielder",
    club: "Seattle Sounders",
  },
  // Trinidad and Tobago
  {
    name: "Kevin Molino",
    country: "Trinidad and Tobago",
    position: "Midfielder",
    club: "Minnesota United",
  },
  // Slovakia
  {
    name: "Marek Hamšík",
    country: "Slovakia",
    position: "Midfielder",
    club: "Trabzonspor",
  },
  {
    name: "Milan Škriniar",
    country: "Slovakia",
    position: "Defender",
    club: "PSG",
  },
  // Albania
  {
    name: "Armando Broja",
    country: "Albania",
    position: "Forward",
    club: "Chelsea",
  },
  {
    name: "Elseid Hysaj",
    country: "Albania",
    position: "Defender",
    club: "Lazio",
  },
  // Slovenia
  {
    name: "Jan Oblak",
    country: "Slovenia",
    position: "Goalkeeper",
    club: "Atlético Madrid",
  },
  {
    name: "Benjamin Šeško",
    country: "Slovenia",
    position: "Forward",
    club: "RB Leipzig",
  },
  // Norway
  {
    name: "Erling Haaland",
    country: "Norway",
    position: "Forward",
    club: "Manchester City",
  },
  {
    name: "Martin Ødegaard",
    country: "Norway",
    position: "Midfielder",
    club: "Arsenal",
  },
  // Wales
  { name: "Gareth Bale", country: "Wales", position: "Forward", club: "LAFC" },
  {
    name: "Aaron Ramsey",
    country: "Wales",
    position: "Midfielder",
    club: "Nice",
  },
  // Uganda
  {
    name: "Emmanuel Okwi",
    country: "Uganda",
    position: "Forward",
    club: "Simba SC",
  },
  // Angola
  {
    name: "Mabululu",
    country: "Angola",
    position: "Forward",
    club: "Petro de Luanda",
  },
  // Zambia
  {
    name: "Patson Daka",
    country: "Zambia",
    position: "Forward",
    club: "Leicester City",
  },
  // Haiti
  {
    name: "Duckens Nazon",
    country: "Haiti",
    position: "Forward",
    club: "Saint-Trond",
  },
  // Jordan
  {
    name: "Baha' Faisal",
    country: "Jordan",
    position: "Midfielder",
    club: "Al Wehdat",
  },
  // Oman
  {
    name: "Issam Al Sabhi",
    country: "Oman",
    position: "Forward",
    club: "Dhofar Club",
  },
  // Kuwait
  {
    name: "Bader Al-Mutawa",
    country: "Kuwait",
    position: "Midfielder",
    club: "Al Kuwait",
  },
  // Italy
  {
    name: "Federico Chiesa",
    country: "Italy",
    position: "Forward",
    club: "Liverpool",
  },
  {
    name: "Gianluigi Donnarumma",
    country: "Italy",
    position: "Goalkeeper",
    club: "PSG",
  },
  {
    name: "Lorenzo Pellegrini",
    country: "Italy",
    position: "Midfielder",
    club: "AS Roma",
  },
  {
    name: "Nicolo Barella",
    country: "Italy",
    position: "Midfielder",
    club: "Inter Milan",
  },
  // Guatemala
  {
    name: "José Manuel Contreras",
    country: "Guatemala",
    position: "Forward",
    club: "Aurora FC",
  },
  // Cuba
  {
    name: "Maykel Reyes",
    country: "Cuba",
    position: "Forward",
    club: "Cienfuegos",
  },
  // Greece
  {
    name: "Kostas Fortounis",
    country: "Greece",
    position: "Midfielder",
    club: "Olympiacos",
  },
  {
    name: "Stefanos Kapino",
    country: "Greece",
    position: "Goalkeeper",
    club: "Werder Bremen",
  },
  // Sweden
  {
    name: "Zlatan Ibrahimović",
    country: "Sweden",
    position: "Forward",
    club: "Retired",
  },
  {
    name: "Viktor Gyökeres",
    country: "Sweden",
    position: "Forward",
    club: "Sporting CP",
  },
  {
    name: "Dejan Kulusevski",
    country: "Sweden",
    position: "Midfielder",
    club: "Tottenham Hotspur",
  },
  // China
  {
    name: "Wu Lei",
    country: "China",
    position: "Forward",
    club: "Shanghai Port",
  },
  {
    name: "Wang Dalei",
    country: "China",
    position: "Goalkeeper",
    club: "Shandong Taishan",
  },
];
