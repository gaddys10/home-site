export const initialPortfolioState = {
    showPortfolio: false,
    showArt: false,
    showMocks: false,
    showPrototypes: false,
    showGraphics: false,
    showGraphicCategories: false,
    showPrototypeCategories: false,
    showLogos: false,
    showResponsive: false,
    showFeature: false,
    showIPad: false,
    showInit: false,
    showResumes: false
};

export function portfolioReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_PORTFOLIO':
            return { ...state, showPortfolio: !state.showPortfolio };
    
        case 'OPEN_ART':
            return { ...state, showArt: true };
        case 'CLOSE_ART':
            return { ...state, showArt: false };
    
        case 'OPEN_MOCKS':
            return { ...state, showMocks: true };
        case 'CLOSE_MOCKS':
            return { ...state, showMocks: false };
    
        // Add similar actions for the rest of your states...
    
        case 'CLOSE_PORTFOLIO':
            return { ...initialPortfolioState }; // reset all flags to false
    
        default:
            return state;
    }
}