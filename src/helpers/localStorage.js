import { forIn } from "lodash"

export const setLocalStorage = (data) => {
  forIn(data, function(value, key) {
    localStorage.setItem(key, value)
  }
)}