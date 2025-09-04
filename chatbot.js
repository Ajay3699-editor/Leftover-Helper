// JavaScript for integrating the chatbot with customization
(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
        window.voiceflow.chat.load({
            verify: { projectID: '6893453441af3b4428233684' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
                url: "https://runtime-api.voiceflow.com"
            },
            // --- Customizations for your chatbot ---
            chat: {
                // Makes the widget always open (optional, can be 'true' or 'false')
                // open: true,
                // Sets a custom title for the chat header
                title: "Leftover Helper",
                // Sets a custom description below the title
                description: "Your friendly guide to reducing food waste!",
                // Customize the colors if you wish (optional)
                // color: "#4CAF50", // Example: Green primary color
                // backgroundColor: "#2e2e2e", // Example: Dark background
                // header: {
                //     background: "#388E3C",
                //     color: "#FFFFFF"
                // },
                // avatar: {
                //     color: "#FFFFFF",
                //     background: "#4CAF50"
                // },
                // launcher: {
                //     color: "#FFFFFF",
                //     background: "#4CAF50"
                // }
            }
        });
    }
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');