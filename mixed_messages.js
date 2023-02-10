// MIXED MESSAGES
// The purpose of this little program is to generate randomly positive messages each time the program is ran.
// Author : Thomas Crecq

// Loving name list.
const lovingNames = [
  "Beauté fatale",
  "Bibiche",
  "Bichette",
  "Bijou",
  "Biquette",
  "Chaton",
  "Chouquette",
  "Choupinette",
  "Darling",
  "Grosse mimoune",
  "Loulou",
  "Ma Beauté",
  "Ma Belle",
  "Ma Biche",
  "Ma Bien Aimée",
  "Ma Chère et tendre",
  "Ma Poupoune",
  "Ma Coccinelle",
  "Ma Crevette",
  "Ma déesse",
  "Ma Demoiselle",
  "Ma Douce",
  "Ma Gazelle",
  "Ma Lionne",
  "Ma Mie",
  "Ma P’tite grenouille",
  "Ma perle rare",
  "Ma p’tite chipie",
  "Ma puce",
  "Ma reine",
  "Ma Rose",
  "Petite Fleur",
  "Princesse",
  "Pupuce",
];

//List of positive adjectives.
const positiveAdjectives = [
  "adorable",
  "amoureuse",
  "astucieuse",
  "aventureuse",
  "belle",
  "brave",
  "brillante",
  "confiante",
  "combative",
  "câline",
  "charmante",
  "compréhensive",
  "courageuse",
  "dynamique",
  "déterminée",
  "douce",
  "distinguée",
  "détendue",
  "élégante",
  "éblouissante",
  "époustoufflante",
  "épatante",
  "exceptionnelle",
  "épanouie",
  "forte",
  "fière",
  "gaie",
  "gentille",
  "gracieuse",
  "grandiose",
  "heureuse",
  "intelligente",
  "intrépide",
  "irrésistible",
  "inspirée",
  "joyeuse",
  "joviale",
  "kaleidoscopique",
  "lumineuse",
  "merveilleuse",
  "magnifique",
  "malicieuse",
  "mignonne",
  "motivée",
  "majestueuse",
  "optimiste",
  "parfaite",
  "passionnée",
  "phénoménale",
  "rigolote",
  "romantique",
  "raffinée",
  "souriante",
  "splendide",
  "sauvage",
  "séduisante",
  "sublime",
  "tendre",
  "trépidante",
  "vive",
  "unique",
  "zen",
];

// List of positive sentences.
const positiveSentences = [
  "Il faudrait vivre comme jouent les enfants.",
  "Il y a des fleurs partout pour qui veut bien les voir. ",
  "Il n’y a pas de grande tâche difficile qui ne puisse être décomposée en petites tâches faciles.",
  "La vie est comme un miroir. Si tu lui souris, elle te renvoie ton image.",
  "C’est aujourd’hui que commence le reste de ta vie. ",
  "On a toujours le choix, on est même la somme de ces choix.",
  "Tu as beaucoup mieux à faire que de t’inquiéter de l’avenir : tu as à le préparer",
  "Prends le temps chaque jour de revenir en toi. ",
  "Tous les jours et à tout point de vue, tu vas de mieux en mieux. ",
];

// Create a function that can be used to generate a random number to be the index of a list.

const randNum = (arr) => Math.floor(Math.random() * arr.length);

// Function that generates the mixed message based on random number
// It takes a random word from the word list and put it in place

const mixedMessage = () => {
  // Generating a random name
  let randNameIndex = randNum(lovingNames);
  let randName = lovingNames[randNameIndex];

  // Generating a random Adjective
  let randAdjectiveIndex = randNum(positiveAdjectives);
  let randAdjective = positiveAdjectives[randAdjectiveIndex];

  // Generating a positive sentence
  let randPositiveSentenceIndex = randNum(positiveSentences);
  let randSentence = positiveSentences[randPositiveSentenceIndex];

  return `Bonjour ${randName}, tu sembles d'humeur ${randAdjective} aujourd'hui ! :) Voilà une citation qui pourrait te plaire pour ta journée : ${randSentence}`;
};

console.log(mixedMessage());
