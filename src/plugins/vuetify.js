import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#673ab7",
                secondary: "#009688",
                accent: "#9c27b0",
                error: "#e91e63",
                warning: "#f44336",
                info: "#607d8b",
                success: "#4caf50"
            },
        }
    },
});
