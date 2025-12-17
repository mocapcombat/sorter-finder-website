const grid = document.querySelector(".grid-container");

const names = [
"Farabelle","Miron","Maxime","Chantal","Disha","Teun","Quentin","Keren","Stan","Pascal",
"Pjotr","Anna","Ema","Thaqif","Milo","Janine","Jelle","Maas","Hannah","Rosa",
"Liam","Raymond","Victor","Anne-Marie","Gwen","Olivia","Ivo","Sten","André","Tomas",
"Michael","Sasha","Pablo","Malva","Jakob","Ingrid","Rob","Lena","Florens","Karel",
"Kaeden","Kei","Belinda","Deyan","Dian","Dongha","Theodora","Gitta","Giuseppe","João",
"Julie","Kaya","Patricia","Jisu","Luca","Sophie","Max","Misha","Noémi","Oliwia",
"Pijus","Puck","Anna","Victoriya","Yuchen","Adit","Cosima","Emilia","Jiyun","Cathy",
"Maia","Mark","Yade","Melody","Milana","Neya","Nika","Petra","Bregje","Bo","Finn",
"Lou","Marijn","Noah","Sjoerd","Imke","Sijbren","Amanda","Dustin","Alexis","Angelica",
"Arjan","Carmen","Demi","Emma","Hattie","Iman","Jasmijn","Katarina","Kiara","Kim",
"Levi","Lucas","Jaap","Neil","Jan","Karin","Astrid","Fré","Jaron","Jaéla",
"Paul","Irene","Job","Jill","Daan","Lucie","Matteo","Natalia","Olek","Hunter",
"Raf","Jules","Ran","Sander","Pedro","Ynze","Rita","Saray","Sebas","Luuk",
"Gijs","Sam","Lea","Koen","Bram","Samuel","Jelmer","Joep","Saskia","Egbert",
"Marielle","Suzanna","Gustave","Felicia","Renee","Kayley","Lois","Klaudia","Thom","Fleur",
"Mark","Hiddo","Sterre","Kasper","Arie","Jurriaan","Friso","Jeroen","Tijl","Vlad",
"Alex","Mats","Nadia","Mads","Aki","Laurie","Seppel","Thijn","Roeland","Lars",
"Wouter","Roel","Stephan","Erik","Anja","Monique","Felix","Alexia","Bjorn","Jurgen",
"Sarah","Dana","Jonas","Robbie","Chleo","Bert","Nathan","Floortje","Camiel","Pum",
"Isabelle","Lynn","Zep","Ruben","Anas","Daniel","Ariel","Jack","Oliver","Olivier",
"Sahith","Djoa","Carus","Ann","Nina","Sietze","Kip","Giel","Mette","Pina",
"Viktor","Paulina","Paula","Ada","Anaïs","Mees","Mani","Niels","Dara","Lisa",
"Peter","Timo","Bink","Maebh","Lawrence","Bart","Edison","Harry","Mo","Valentina",
"Fabio","Tonya","Xander","Pim","Jip","Antonia","Kees","Dasha","Virginie","Sara",
"Paulius","Noa","Halldor","Hazel","Hugo","Martin","Emir","Katherine","Jim","Jesse",
"Agata","Naomi","Tommy","Margherita","Lyy","Baroeg","Fenne","Tim","Isaac","Alessia",
"Polette","Jamie","Améline","Lumi","Julia","Vivienne","Stéphania","Melina","Yara","Imran",
"King","Sigurd","Viggo","Stella","Silva","Yan","Camila","Emile","Adelino","Grzegorz",
"Alexander","Tom","Chico","Arthur","Leon","Mila","Armand","Mick","Tadas","Milla",
"Rutka","Mathijs","Omid","Nieke","Raphael","Marie","Maja","Benjamin","Tristan","Raoul",
"Yulia","Lukas","Christina","Panna","Winston","Wolf","Jess","Dia","Steyn","Willem",
"Michiel","Joost","Mateusz","Daisy","Boris","Co","Moos","Marlene","Gianni","Zuzanna",
"Rik","Dagny","Tycho","Ward","Angèle","Jordi","Indi","Mael","Enzo","Claudia",
"Abel","Sebastien","Elsie","Maya","Nena","Federico","Marcos","Anton","Frank","Douwe",
"Oskar","Julianna","Marius","Ruby","Ben","Melissa","Pleun","Ziggy","Chris","Simcha",
"Danae","Sem","Moussa","Morris","Flor","Matei","Ties","Ischa","Eline","Elly",
"Luna","Magnus","Lenny","Benni","Daphne","Eliza","Britt","Artemiy","Jonne","Erika",
"Okkie","Bor","Youp"
];

const weights = [
  "0.789", "0.792", "0.815", "0.818", "0.835", "0.839", "0.892", "0.897", "0.904", "0.908", 
  "0.912", "0.918", "0.920", "0.923", "0.927", "0.931", "0.933", "0.934", "0.941", "0.942", 
  "0.945", "0.956", "0.957", "0.976", "0.978", "0.979", "0.981", "0.983", "0.984", "0.986", 
  "0.987", "0.988", "0.989", "0.990", "0.992", "0.993", "0.996", "0.997", "0.998", "1.008", 
  "1.024", "1.025", "1.036", "1.038", "1.041", "1.042", "1.043", "1.045", "1.048", "1.049", 
  "1.050", "1.051", "1.052", "1.053", "1.056", "1.059", "1.060", "1.061", "1.062", "1.064", 
  "1.065", "1.067", "1.068", "1.069", "1.070", "1.071", "1.072", "1.073", "1.074", "1.075", 
  "1.076", "1.078", "1.081", "1.083", "1.085", "1.088", "1.089", "1.092", "1.093", "1.094", 
  "1.095", "1.096", "1.097", "1.098", "1.099", "1.100", "1.101", "1.102", "1.103", "1.105", 
  "1.106", "1.107", "1.108", "1.109", "1.110", "1.111", "1.112", "1.113", "1.114", "1.115", 
  "1.116", "1.118", "1.119", "1.121", "1.122", "1.123", "1.124", "1.126", "1.127", "1.128", 
  "1.129", "1.130", "1.131", "1.132", "1.134", "1.135", "1.136", "1.137", "1.138", "1.139", 
  "1.141", "1.142", "1.143", "1.144", "1.145", "1.146", "1.147", "1.148", "1.149", "1.150", 
  "1.151", "1.152", "1.153", "1.154", "1.155", "1.156", "1.157", "1.158", "1.159", "1.160", 
  "1.161", "1.162", "1.163", "1.164", "1.165", "1.166", "1.167", "1.168", "1.169", "1.170", 
  "1.171", "1.172", "1.173", "1.174", "1.175", "1.176", "1.177", "1.178", "1.179", "1.180", 
  "1.181", "1.182", "1.183", "1.184", "1.185", "1.186", "1.187", "1.188", "1.189", "1.190", 
  "1.191", "1.192", "1.193", "1.194", "1.195", "1.196", "1.197", "1.198", "1.199", "1.200", 
  "1.201", "1.202", "1.203", "1.204", "1.205", "1.206", "1.207", "1.208", "1.209", "1.210", 
  "1.211", "1.212", "1.213", "1.214", "1.215", "1.216", "1.217", "1.218", "1.219", "1.220", 
  "1.221", "1.222", "1.223", "1.224", "1.225", "1.226", "1.227", "1.228", "1.229", "1.230", 
  "1.231", "1.232", "1.233", "1.234", "1.235", "1.236", "1.237", "1.238", "1.239", "1.240", 
  "1.241", "1.242", "1.243", "1.244", "1.245", "1.246", "1.247", "1.248", "1.249", "1.250", 
  "1.251", "1.252", "1.253", "1.254", "1.255", "1.256", "1.257", "1.258", "1.259", "1.260", 
  "1.261", "1.262", "1.263", "1.264", "1.265", "1.266", "1.267", "1.268", "1.269", "1.270", 
  "1.271", "1.272", "1.273", "1.274", "1.275", "1.276", "1.277", "1.278", "1.279", "1.280", 
  "1.281", "1.282", "1.283", "1.284", "1.285", "1.286", "1.287", "1.288", "1.289", "1.290", 
  "1.291", "1.292", "1.293", "1.294", "1.295", "1.296", "1.297", "1.298", "1.299", "1.300", 
  "1.301", "1.302", "1.303", "1.304", "1.305", "1.306", "1.307", "1.308", "1.309", "1.310", 
  "1.311", "1.312", "1.313", "1.314", "1.315", "1.316", "1.317", "1.318", "1.319", "1.320", 
  "1.321", "1.322", "1.323", "1.324", "1.325", "1.326", "1.327", "1.328", "1.329", "1.330", 
  "1.331", "1.332", "1.333", "1.334", "1.335", "1.336", "1.337", "1.338", "1.339", "1.340", 
  "1.341", "1.342", "1.343", "1.344", "1.345", "1.346", "1.347", "1.348", "1.349", "1.350", 
  "1.351", "1.352", "1.353", "1.354", "1.355", "1.356", "1.357", "1.358", "1.359", "1.360", 
  "1.361", "1.362", "1.363", "1.364", "1.365", "1.366", "1.367", "1.368", "1.369", "1.370", 
  "1.371", "1.372", "1.373", "1.374", "1.375", "1.376", "1.377", "1.378", "1.379", "1.380", 
  "1.381", "1.382", "1.383", "1.384", "1.385", "1.386", "1.387", "1.388", "1.389", "1.390", 
  "1.391", "1.392", "1.393", "1.394", "1.395", "1.396", "1.397", "1.398", "1.399", "1.400", 
  "1.401", "1.402", "1.403", "1.404", "1.405", "1.406", "1.407", "1.408", "1.409", "1.410", 
  "1.411", "1.412", "1.413", "1.414", "1.415", "1.416", "1.417", "1.418", "1.419", "1.420", 
  "1.421", "1.422", "1.423", "1.424", "1.425", "1.426", "1.427", "1.428", "1.429", "1.430", 
  "1.431", "1.432", "1.433", "1.434", "1.435", "1.436", "1.437", "1.438", "1.439", "1.440"
]
;

let objects = names.map((name, i) => ({
  name,
  weight: weights[i],
  image: `assets/images/${i + 1}.jpg` 
}));

let sortState = {
  key: null,      
  direction: 1
};

function render() {
  const nameArrow =
    sortState.key === "name"
      ? (sortState.direction === 1 ? " A – Z" : " Z – A")
      : "";

  const weightArrow =
    sortState.key === "weight"
      ? (sortState.direction === 1 ? " ↑" : " ↓")
      : "";

grid.innerHTML = `
  <div class="header" id="header-name">
  <span class="underline-on-hover">Name${nameArrow}</span>
  </div>
  <div class="header" id="header-weight">
  <span class="underline-on-hover">Weight (g)${weightArrow}</span>
  </div>
  <div class="header"><em>‘A blueberry, is a blueberry, is a blueberry’</em></div>
`;

  objects.forEach(obj => {
    grid.insertAdjacentHTML("beforeend", `
      <div class="cell name">‘<em>${obj.name}</em>’</div>
      <div class="cell">${obj.weight}</div>
      <div class="cell image">
        <img src="${obj.image}" alt="${obj.name}">
      </div>
    `);
  });

  attachHeaderListeners();
}


function attachHeaderListeners() {
  document.getElementById("header-name").onclick = () => {
    if (sortState.key === "name") {
      sortState.direction *= -1;
    } else {
      sortState.key = "name";
      sortState.direction = 1;
    }

    objects.sort((a, b) =>
      sortState.direction * a.name.localeCompare(b.name)
    );

    render();
  };

  document.getElementById("header-weight").onclick = () => {
    if (sortState.key === "weight") {
      sortState.direction *= -1;
    } else {
      sortState.key = "weight";
      sortState.direction = 1;
    }

    objects.sort((a, b) =>
      sortState.direction * (a.weight - b.weight)
    );

    render();
  };
}

document.addEventListener("DOMContentLoaded", render);
