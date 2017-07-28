export const appMixins = {
    computed: {
        appendCount() {
            return this.text + " (" + this.text.length + ")";
        }
    }
} 