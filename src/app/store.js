import { configureStore } from '@reduxjs/toolkit'
import campersReducer from '../features/campers/campersSlice'
import camperDetailsReducer from '../features/camperDetails/camperDetailsSlice'
import favoritesReducer from '../features/favorites/favoritesSlice'
import filtersReducer from '../features/filters/filtersSlice'
import uiReducer from '../features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    camperDetails: camperDetailsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
    ui: uiReducer,
  }
})
