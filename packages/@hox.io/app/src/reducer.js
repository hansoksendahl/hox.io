export default function (state, {type, payload}) {
  switch (type) {
    case 'startZuiZoomIn': {
      return {
        ...state,
        foregroundNode: payload,
      }
    }
    case 'endZuiZoomIn': {
      return {
        ...state,
        history: [...state.history, foregroundNode],
        backgroundNode: foregroundNode,
        foregroundNode: null,
      }
    }
    case 'startZuiZoomOut': {
      return {
        ...state,
        foreground: history[history.length - 1],
      }
    }
    case 'endZuiZoomOut': {
      return {
        ...state,
        foreground: null,
      }
    }
    default: {
      return state;
    }
  }
}