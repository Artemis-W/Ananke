const iframe = document.getElementById('same-origin-iframe');
 
    // Wait for iframe to load content
    iframe.addEventListener('load', () => {
        try {
            const iframeWindow = iframe.contentWindow;
            iframeWindow.addEventListener('resize', () => {
                const contentHeight = iframeDoc.body.scrollHeight;
                iframe.style.height = `${contentHeight + 100}px`;
            });
            
            // Access iframe content (same-origin only)
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            
            // Get content height (scrollHeight includes padding, not margins/borders)
            const contentHeight = iframeDoc.body.scrollHeight;
            
            // Set iframe height (add buffer for safety, e.g., 20px)
            iframe.style.height = `${contentHeight + 100}px`; 
        }   
        catch (error) {
            console.error('Failed to resize iframe:', error);
        }
    });

