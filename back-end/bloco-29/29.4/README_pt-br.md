# MongoDB - Simple Updates

---

> Utilize o comando abaixo para criar uma base de dados chamada `movies` e inserir os documentos abaixo:

```js
use movies;
db.movies.insertMany([
  {
    title: "Batman",
    category: [ "action", "adventure" ],
    imdbRating: 7.6,
    budget: 35
  },
  {
    title: "Godzilla",
    category: [ "action", "adventure", "sci-fi" ],
    imdbRating: 6.6
  },
  {
    title: "Home Alone",
    category: [ "family", "comedy" ],
    imdbRating: 7.4
  }
]);
```

---

> ## Para cada execução, utilize o método find() para conferir as alterações nos documentos

---

**Exercício 1**: Altere o `imdbRating` para `7.7` no filme `Batman`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } });
```

</details>

---

**Exercício 2**: Altere `budget` para `1` no filme `Godzilla`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 } });
```

</details>

---

**Exercício 3**: Altere `budget` para `15` e `imdbRating` para `5.5` no filme `Home Alone`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { budget: 15, imdbRating: 5.5 } }
);
```

</details>

---

**Exercício 4**: Aumente em `2` o `imdbRating` do filme `Batman`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 } });
```

</details>

---

**Exercício 5**: Aumente em `5` o `budget` do filme `Home Alone`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne({ title: "Home Alone" }, { $inc: { budget: 5 } });
```

</details>

---

**Exercício 6**: Multiplique por `4` o `imdbRating` do filme `Batman`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $mul: { imdbRating: 4 } });
```

</details>

---

**Exercício 7**: Renomeie o campo `budget` para `estimatedBudget` do filme `Batman`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne(
  { title: "Batman" },
  { $rename: { budget: "estimatedBudget" } }
);
```

</details>

---

**Exercício 8**: Utilize o operador `$min` para alterar o `budget` para `5` do filme `Home Alone`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne({ title: "Home Alone" }, { $min: { budget: 5 } });
```

</details>

---

**Exercício 9**: Utilize o operador `$max` para alterar o `imdbRating` para `8.6` do filme `Godzilla`. Além disso, altere a categoria `"adventure"` para `"thriller"` do filme `Godzilla`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $max: { imdbRating: 8.6 },
    $set: {
      "category.1": "thriller",
    },
  }
);
```

</details>

---

**Exercício 10**: Utilizando o operador `$currentDate`, crie um campo chamado `lastUpdated` com o tipo `timestamp` no filme `Home Alone`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateOne(
  { title: "Home Alone" },
  { $currentDate: { lastUpdated: { $type: "timestamp" } } }
);
```

</details>

---

**Exercício 11**: Utilizando uma única operação, crie um campo chamado `sequels` e atribua a ele o valor `0` em todos os documentos.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateMany({}, { $set: { sequels: 0 } });
```

</details>

---

**Exercício 12**: Utilizando uma única operação, remova os campos `budget` e `estimatedBudget` em todos os documentos.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateMany(
  {},
  {
    $unset: {
      budget: "",
      estimatedBudget: "",
    },
  }
);
```

</details>

---

**Exercício 13**: Para os filmes `Batman` ou `Home Alone`, atribua a `imdbRating` o valor `17`, caso o valor de `imdbRating` seja menor que `17`.

<details>
  <summary>Resposta:</summary>

```js
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $max: { imdbRating: 17 } }
);
```

</details>

---

## Exercícios Bônus

> Copie e cole o código abaixo no mongo shell para preparar os exercícios:

```js
use class;
db.xmen.insertMany([
  {
    "name": "Tempestade",
    "true_name": "Ororo Munroe",
    "origin": "Nova York",
    "occupation": "Headmistress",
    "powers": [
      "Atmocinese",
      "Hidrocinese",
      "Pirocinese",
      "Aerocinese",
      "Voo",
      "Criocinese",
      "Eletrocinese",
      "Resistência Mental",
      "Eletrólise",
      "Electromagnetismo",
      "Manipulação de Energia Eólica",
      "Potencial Mágico",
      "Combate e roubo",
      "Capacidades físicas e traços",
      "Manipulação nervosa"
      ],
    "class": "omega"
  },
  {
    "name": "Fera",
    "true_name": "Henry Phillip McCoy",
    "origin": "Illinois",
    "occupation": "Vice-Principal",
    "powers": [
      "Intelecto nível gênio",
      "Garras afiadas",
      "Dentes afiados",
      "Força, agilidade,Resistência e velocidade sobre-humanas"
    ],
    "class": "unknown"
  },
  {
    "name": "Vampira",
    "true_name": "Anna Marie LeBeau",
    "origin": "Mississippi",
    "occupation": "Senior Staff",
    "powers": [
      "sugar energia vital , memórias e poderes de outros mutantes através da pele"
    ],
    "class": "omega"
  },
  {
    "name": "Homem de Gelo ",
    "true_name": "Robert Louis Drake",
    "origin": "Nova York",
    "occupation": "Senior Staff",
    "powers": [
      "Manipular a umidade do ar para transformar o vapor em gelo",
      "Transformar seu corpo em gelo"
    ],
    "class": "alfa"
  },
  {
    "name": "Garota Marvel",
    "true_name": "Rachel Summers",
    "origin": "Estados Unidos do Leste",
    "occupation": "Senior Staff",
    "powers": [
      "Telepatia",
      "Telecinese",
      "Rajadas energéticas",
      "Resíduos da Força Fênix"
    ],
    "class": "omega"
  },
  {
    "name": "Estrela Polar",
    "true_name": "Jean-Paul",
    "origin": "Montreal",
    "occupation": "Senior Staff",
    "powers": [
      "Vôo",
      "Durabilidade",
      "Super Velocidade",
      "Geração de luz",
      "Equilíbrio",
      "agilidade",
      "reflexos acima do normal",
      "Força"
    ],
    "class": "unknown"
  },
  {
    "name": "Firestar",
    "true_name": "Angelica Jones",
    "origin": "Norte Americana",
    "occupation": "Senior Staff",
    "powers": [
      "Capacidade de explorar o campo eletromagnético da Terra"
    ],
    "class": "unknown"
  },
  {
    "name": "Câmara",
    "true_name": "Jonothon 'Jono' Evan Starsmore",
    "origin": "Britânica",
    "occupation": "Junior Staff",
    "powers": [
      "Poderosa energia psicocinética expelida por seu tórax",
      "Comunicação telepática"
    ],
    "class": "gama"
  },
  {
    "name": "Frenesi",
    "true_name": "Joanna Cargill",
    "origin": "Norte Americana",
    "occupation": "Junior Staff",
    "powers": [
      "Pele Rígida Como Aço",
      "Super-Força"
    ],
    "class": "unknown"
  },
  {
    "name": "Karma",
    "true_name": "Xi'an Coy Manh",
    "origin": "Vietnã",
    "occupation": "Junior Staff",
    "powers": [
      "Posse mental",
      "Posse remota",
      "Elenco de ilusão",
      "Escudo psíquico",
      "Análise sensorial",
      "Controle mental"
    ],
    "class": "unknown"
  },
  {
    "name": "Escalpo",
    "true_name": "Paige Elisabeth Guthrie",
    "origin": "Norte Americana",
    "occupation": "Junior Staff",
    "powers": [
      "Força Sobre-Humana",
      "Velocidade Sobre-Humana",
      "Durabilidade sobre-humana",
      "Projeção de chama (forma magma)",
      "Elasticidade de absorção de impacto",
      "Talentos anfíbios"
    ],
    "class": "gama"
  },
  {
    "name": "Rapina",
    "true_name": "Ava'Dara Naganandin",
    "origin": "Império Shi'ar",
    "occupation": "Junior Staff",
    "powers": [
      "Força Sobre-Humana",
      "Vigor Sobre-Humano"
    ],
    "class": "unknown"
  },
  {
    "name": "Deathlok",
    "true_name": "Luther Manning",
    "origin": "Michigan",
    "occupation": "Adjunct Staff/Campus Guard",
    "powers": [
      "Aprimoramentos cibernéticos que garantem velocidade, força, durabilidade e reflexos sobre-humanos "
    ],
    "class": "unknown"
  },
  {
    "name": "Doop",
    "true_name": "Doop",
    "origin": "Desconhecida",
    "occupation": "Adjunct Staff",
    "powers": [
      "Vôo",
      "Fator de cicatrização acelerado Força",
      "durabilidade sobre-humana",
      "Maleabilidade física",
      "Capacidade de replicar objetos físicos",
      "Vazio extra-dimensional dentro do corpo que pode armazenar objetos e pessoas"
    ],
    "class": "unknown"
  },
  {
    "name": "Colossus",
    "true_name": "Piotr 'Peter' Nikolaievitch",
    "origin": "Sibéria",
    "occupation": "Member",
    "powers": [
      "Transmutação em Aço Orgânico",
      "Super-Força",
      "Resistência Sobre-Humana",
      "Super-Vigor",
      "Agilidade e Velocidade Aumentadas",
      "Incapacidade de Sangrar"
    ],
    "class": "omega"
  },
  {
    "name": "Noturno",
    "true_name": "Kurt Wagner",
    "origin":"Bavaria, Alemanha",
    "occupation": "Member",
    "powers": [
      "Teletransporte",
      "Super Agilidade",
      "Aderência física",
      "Habilidade de fundir-se com as sombras"
    ],
    "class": "gama"
  },
  {
    "name": "Kid Omega",
    "true_name": "Quentin Quire",
    "origin":"Norte Americano",
    "occupation": "Member",
    "powers": [
      "Telepatia nível-ômega",
      "Telecinese",
      "Intelecto Genial"
    ],
    "class": "omega"
  },
  {
    "name": "Fada",
    "true_name": "Megan Gwynn",
    "origin":"País de Gales",
    "occupation": "Member",
    "powers": [
      "Asas",
      "Poeira Alucinógena",
      "Teletransporte",
      "Magia"
    ],
    "class": "gama"
  },
  {
    "name": "Armadura",
    "true_name": "Hisako Ichiki",
    "origin":"Tókio",
    "occupation": "Member",
    "powers": ["Armadura Psionica"],
    "class": "unknown"
  },
  {
    "name": "Jubileu",
    "true_name": "Jubilation Lee",
    "origin":"Califórnia",
    "occupation": "Member",
    "powers": [
      "Energia Plasmatica",
      "Imunidade Telepática"
    ],
    "class": "unknown"
  },
  {
    "name": "Kavita Rao",
    "true_name": "Kavita Rao",
    "origin":"Calcutá, India",
    "occupation": "Médica Residente",
    "powers": [],
    "class": "unknown"
  },
  {
    "name": "Cecilia Reyes",
    "true_name": "Cecilia Reyes",
    "origin":"Nova York",
    "occupation": "Médica Residente",
    "powers": [
      "Campo de força"
    ],
    "class": "unknown"
  },
  {
    "name": ["Anjo", "Archangel"],
    "true_name": "Warren Kenneth Worthington III",
    "origin":"Nova York",
    "occupation": ["Assistente", "Recrutador"],
    "powers": [
      "Campo de força"
    ],
    "class": "Beta"
  },
  {
    "name": "Homem Aranha",
    "true_name": "Peter Parker",
    "origin":"Nova York",
    "occupation": ["Conselheiro","Corpo Adjunto"],
    "powers": [
      "Força Sobre-Humana",
      "Sensor-Aranha",
      "Aderência Física"
    ],
    "class": "unknown"
  }
]);
```

---

> As informações acima são sobre a Escola Jean Grey de Ensino Superior. Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo `lastUpdate`, que armazena a data da última alteração com o tipo **timestamp**. Os exercícios devem ser realizados na ordem.

---

**Exercício 14**: Remova o campo `class` dos documentos que possuem esse campo com o valor `unknown`.

<details>
<summary>Resposta</summary>

```js
db.xmen.updateMany(
  { class: "unknown" },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $unset: {
      class: "",
    },
  }
);
```

</details>

---

**Exercício 15**: Produza **uma** _query_ que renomeie os campos de `name` para `hero_name`, e de `true_name` para `full_name`; adicione o campo `power` com valor 100, em todos os documentos.

<details>
<summary>Resposta</summary>

```js
db.xmen.updateMany(
  {},
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $rename: {
      name: "hero_name",
      true_name: "full_name",
    },
    $set: {
      power: 100,
    },
  }
);
```

</details>

---

**Exercício 16**: Produza **uma** _query_ onde os mutantes `class` omega ou gama passam a ter seu poder de 500 **somente se seu poder for menor que 500**.

<details>
<summary>Resposta</summary>

```js
db.xmen.updateMany(
  { class: { $in: ["omega", "gama"] } },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $max: {
      power: 500,
    },
  }
);
```

</details>

---

**Exercício 17**: Produza **uma** _query_ onde os mutantes `class` gama passam a ter seu poder de 300 **somente se seu poder for maior que 300**.

<details>
<summary>Resposta</summary>

```js
db.xmen.updateMany(
  { class: "gama" },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $min: {
      power: 300,
    },
  }
);
```

</details>

---

**Exercício 18**: Decremente em 100 o poder dos mutantes que não possuem a propriedade `class`.

<details>
<summary>Resposta</summary>

```js
db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $inc: {
      power: -100,
    },
  }
);
```

</details>

---

**Exercício 19**: Em apenas **uma** query adicione o campo `areas` com o seguinte array como valor: `["Students Room"]` a todos os mutantes que são `Senior Staff` que tenham poder acima de 100 e para todos os `Junior Staff` com poder acima de 200.

<details>
<summary>Resposta</summary>

```js
db.xmen.updateMany(
  {
    $or: [
      { occupation: "Senior Staff", power: { $gt: 100 } },
      { occupation: "Junior Staff", power: { $gt: 200 } },
    ],
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $set: {
      areas: ["Students Room"],
    },
  }
);
```

</details>

---

**Exercício 20**: Em apenas **uma** query, adicione o campo `areas` com `["Outside"]` a todos os `Junior Staff` que não tenham o campo `areas` definido.

<details>
<summary>Resposta</summary>

```js
db.xmen.updateMany(
  { occupation: "Junior Staff", areas: { $exists: false } },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $set: {
      areas: ["Outside"],
    },
  }
);
```

</details>

---
