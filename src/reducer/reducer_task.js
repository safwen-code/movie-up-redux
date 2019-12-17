import { ADD_Task, DELET_Task, Edite_Task } from "../action/action_type";

const initialstate = {
  listmovie: [
    {
      id: 1,
      titel: "god of wars",
      link: "https://i.ebayimg.com/images/g/cOoAAOSw8xFa~AwT/s-l300.jpg",
      rates: 1,
      trailer: "https://www.youtube.com/watch?v=K0u_kAWLJOA"
    },
    {
      id: 2,
      titel: "fast and furious 9",
      link:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/19/06/13/16/39/3685647.jpg",
      rates: 4,
      trailer: "https://www.youtube.com/watch?v=HZ7PAyCDwEg"
    },
    {
      id: 3,
      titel: "joker",
      link: "https://i.ebayimg.com/images/g/cOoAAOSw8xFa~AwT/s-l300.jpg",
      rates: 2,
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },
    {
      id: 4,
      titel: "mr robot",
      link: "https://i.ebayimg.com/images/g/cOoAAOSw8xFa~AwT/s-l300.jpg",
      rates: 3,
      trailer: "https://www.youtube.com/watch?v=xIBiJ_SzJTA"
    }
  ],
  loading: true
};

export const reducer_task = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_Task:
      return {
        ...state,
        listmovie: [...state.listmovie, action.payload]
      };
    case DELET_Task:
      return {
        ...state,
        listmovie: state.listmovie.filter(
          el => el.id !== Number(action.payload)
        )
      };
    case Edite_Task:
      return {
        ...state,
        listmovie: state.listmovie.map(el =>
          el.id === Number(action.payload.id) ? (el = action.payload) : el
        )
      };

    default:
      return state;
  }
};
