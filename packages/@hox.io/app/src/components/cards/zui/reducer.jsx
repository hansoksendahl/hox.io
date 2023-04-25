export default function (state, {type, payload}) {
  switch (type) {
    case 'initDb': {
      return {
        ...state,
        db: payload,
      }
    }
    case 'loadDatum': {
      const newState = {
        ...state,
      };

      if (!state.datum) {
        console.log(payload)
        newState.datum = payload;
      } else {
        newState.nextDatum = payload;
      }

      return newState;
    }
    case 'updateDatum': {
      return {
        ...state,
        datum: payload,
        nextDatum: null,
      }
    }
    case 'startZuiZoomIn': {
      return state.isAnimating
        ? state
        : {
          ...state,
          zoomProps: payload,
          isAnimating: true,
        }
    }
    case 'endZuiZoomIn': {
      const {
        zoomProps,
        ...rest
      } = state;

      return {
        ...rest,
        datumProps: {
          hueIndex: zoomProps.hueIndex,
          scale: 1,
          translate: [0, 0],
          icon: zoomProps.icon,
        },
        nextDatum: null,
        zoomProps: null,
        history: [
          ...state.history,
          {
            id: zoomProps.datum.id,
            translate: zoomProps.translate,
            scale: zoomProps.scale,
            hueIndex: zoomProps.hueIndex,
            icon: zoomProps.icon,
          }
        ],
        datum: state.nextDatum,
        isAnimating: false,
      }
    }
    case 'startZuiZoomOut': {
      const {
        history,
        isAnimating,
        nextDatum,
        datum,
        ...rest
      } = state;

      const prior = history[history.length - 2];
      const last = history[history.length - 1];
      
      return isAnimating || history.length === 1
        ? state
        : {
          ...rest,
          history,
          datum: nextDatum,
          datumProps: {
            scale: 1,
            translate: [0, 0],
            hueIndex: prior.hueIndex,
            icon: prior.icon,
          },
          nextDatum: null,
          zoomProps: {
            ...last,
            isReverse: true,
            datum,
          },
          isAnimating: true,
        }
    }
    case 'endZuiZoomOut': {
      const {
        history,
        ...rest
      } = state;

      return {
        ...rest,
        history: [...history.slice(0, history.length - 1)],
        isAnimating: false,
      }
    }
    case 'setMode': {
      switch (payload) {
        case 'update': {
          const editDatum = state.datum;
          editDatum.links = editDatum.links || [];

          return {
            ...state,
            mode: payload,
            editDatum,
          };
        }
        case 'view': {
          return {
            ...state,
            mode: payload,
            editDatum: null,
          }
        }
        default:
          return state;
      }
    }
    case 'saveDatum': {
      return {
        ...state,
        editDatum: payload,
      };
    }
    default: {
      return state;
    }
  }
}