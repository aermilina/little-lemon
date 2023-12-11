import React, {useEffect, useReducer} from "react";

export const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const AdaptiveResponsive ={
  MOBILE: 768
}

const initialState = {
  isMobile: undefined
};
export const adaptiveMedia = {
  mobile: customMediaQuery(AdaptiveResponsive.MOBILE)
};
export const IS_MOBILE_MEDIA_QUERY = `(max-width: ${AdaptiveResponsive.MOBILE}px)`;
export const media = adaptiveMedia;

export function getResponsive() {
  return {
    isMobile: getMedia(IS_MOBILE_MEDIA_QUERY),
    isDesktop: getMedia(IS_MOBILE_MEDIA_QUERY + 1)
  };
}

function getMedia(query) {
  const media = window.matchMedia(query);
  return media.matches;
}


export function useResponsive() {
  const context = React.useContext(ResponsiveStateContext);
  if (context === undefined) {
    throw new Error("useResponsive must be used within a ResponsiveStateProvider");
  }
  return context;
}

const ResponsiveStateContext = React.createContext(
  undefined
);


export const responsiveStateReducer = (state, payload) => {
  return {
    ...state,
    ...payload
  };
};

export const ResponsiveStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(responsiveStateReducer, initialState);

  const items = {
    isMobile: IS_MOBILE_MEDIA_QUERY
  };

  useEffect(() => {
    const cleaners = Object.entries(items).map(([key, query]) => {
      const media = window.matchMedia(query);
      const listener = () => {
        dispatch({[key]: media.matches});
      };
      media.addListener(listener);
      if (media.matches !== state[key]) {
        dispatch({[key]: media.matches});
      }
      return () => media.removeListener(listener);
    });

    return () => {
      cleaners.forEach((clean) => {
        clean();
      });
    };
  }, []);

  return (
    <ResponsiveStateContext.Provider value={state}>{children}</ResponsiveStateContext.Provider>
  );
};
