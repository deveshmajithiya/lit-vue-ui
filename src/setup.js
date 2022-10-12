import * as LitVueComponents from './components';

let Plugin = {
    install: (Vue) => {
        Object.values(LitVueComponents).forEach((Component) => {
            Vue.component(Component.name, Component)
        });
    }
}

export default Plugin