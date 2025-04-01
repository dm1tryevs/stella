import cases from "./modules/cases.js";
import employees from "./modules/employees.js";
import modal from "./modules/modal.js";
import navScroll from "./modules/navScroll.js";
import prices from "./modules/prices.js";

prices()
employees()
cases()
navScroll()
modal()
    const map = new mapgl.Map('map', {
        //58.003584, 56.211953
        center: [56.211953, 58.003584],
        zoom: 17,
        key: 'b6b81ee6-95c0-45be-a79c-4e64a57776a3',
    });
    const marker = new mapgl.Marker(map, {
        coordinates: [56.211953, 58.003584],
    });