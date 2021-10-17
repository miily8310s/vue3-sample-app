import { rest } from "msw";

export default [
  rest.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
    (__req, res, ctx) => {
      return res(
        ctx.json({
          count: 1,
          next: "https://pokeapi.co/api/v2/pokemon?offset=150&limit=150",
          previous: null,
          results: [
            { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
            { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
            { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
          ],
        })
      );
    }
  ),
  rest.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", (__req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: "bulbasaur",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/",
            },
          },
        ],
        height: 7,
        weight: 69,
      })
    );
  }),
  rest.get(
    "https://pokeapi.co/api/v2/pokemon/charmander",
    (__req, res, ctx) => {
      return res(
        ctx.json({
          id: 4,
          name: "charmander",
          sprites: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
          },
          types: [
            {
              slot: 1,
              type: {
                name: "fire",
                url: "https://pokeapi.co/api/v2/type/12/",
              },
            },
          ],
          height: 7,
          weight: 69,
        })
      );
    }
  ),
  rest.get("https://pokeapi.co/api/v2/pokemon/squirtle", (__req, res, ctx) => {
    return res(
      ctx.json({
        id: 7,
        name: "squirtle",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
        },
        types: [
          {
            slot: 1,
            type: {
              name: "water",
              url: "https://pokeapi.co/api/v2/type/12/",
            },
          },
        ],
        height: 7,
        weight: 69,
      })
    );
  }),
];
