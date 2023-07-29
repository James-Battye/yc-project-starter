import { swap } from "src/utils/moveItems";
import { createSliders } from "src/utils/slider";

createSliders()

const sort = document.querySelector('.cs_filter_sort-dropdown')
const newLocation = document.querySelector("[element='appender']")

swap(767, sort, newLocation)

