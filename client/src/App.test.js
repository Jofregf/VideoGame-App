import { render, screen } from '@testing-library/react';
import rootReducer from "./Reducer/index"
import store from './Store/index';
import { Provider } from 'react-redux'
import {BrowserRouter } from 'react-router-dom'
import Create from './Component/Create/Create.jsx'



test("should return initial state", () => {
  expect(rootReducer(undefined, {})).toEqual({
    videogames: [],
  allVideogames: [],
  videogameDetail: [],
  genres: [],
  message: "",
  loading: {
    loading: false,
    msg: "",
  },
  });
});

describe("CreateForm", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Create/>
        </BrowserRouter>
      </Provider>
    );
  });
  it("Form must have an input text for Name /", () => {
    const element = screen.getByLabelText("Name");
    expect(element.type).toBe("text");
  });
  it("Form must have an input textarea for Description /", () => {
    const element = screen.getByLabelText("Description");
    expect(element.type).toBe("textarea");
  });
  it("Form must have an input type date for release /", () => {
    const element = screen.getByLabelText("Released");
    expect(element.type).toBe("date");
  });
});