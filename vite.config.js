export default {
    build: {
        rollupOptions: {
            input: {
                input: 'src/index.ts',
                index: 'index.html',
                rsvp: 'rsvp.html',
                gallery: 'gallery.html'
            }
        }
    }
}