import { shallowMount } from "@vue/test-utils";
import Pokemon from "@/components/Pokemon.vue";
import { setupServer } from "msw/node";
import handlers from "@/mocks/handler";

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe("Pokemon.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Pokemon, {
      props: {
        pokemon: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        },
      },
    });
    // console.log(wrapper.get(".styledCard"));
    const element = wrapper.get(".styledCard");
    // console.log(element.get("h1"));
    const h1element = element.get("h1");
    console.log(h1element.html());
    expect(wrapper.text()).toBeTruthy();
  });
});
