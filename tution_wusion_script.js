document.addEventListener("DOMContentLoaded", function () {

    function setupSlider(wrapperSelector, containerSelector, leftArrowSelector, rightArrowSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        if (!wrapper) return;

        const container = wrapper.querySelector(containerSelector);
        const leftArrow = wrapper.querySelector(leftArrowSelector);
        const rightArrow = wrapper.querySelector(rightArrowSelector);

        if (!container || !leftArrow || !rightArrow) return;

        // Find first slide element inside THIS container (works for .video-box1/.video-box2/.video-box3/.video-box4/.video-box5./video-box6./video-box7./video-box8./video-box9)
        const slideBox = container.querySelector('.video-box1, .video-box2, .video-box3, .video-box4, .video-box5, .video-box6, .video-box7, .video-box8, .video-box9, .video-box');
        if (!slideBox) return;

        // helper to compute slide width + gap
        function getSlideStep() {
            const boxWidth = slideBox.offsetWidth || slideBox.getBoundingClientRect().width || 0;

            // Try to read gap (column-gap) from container's computed style
            const style = window.getComputedStyle(container);
            // `columnGap` is supported on modern browsers; fallback to 'gap' or 0
            let gap = 0;
            if (style.columnGap) gap = parseFloat(style.columnGap) || 0;
            else if (style.gap) gap = parseFloat(style.gap) || 0;
            else {
                // last resort: try to infer gap from difference between item positions (might be 0)
                gap = 0;
            }

            return Math.round(boxWidth + gap);
        }

        let slideWidth = getSlideStep();

        leftArrow.addEventListener('click', () => {
            container.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
            container.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        // Recalculate on resize and when window finishes loading (images/icons may affect sizes)
        function recompute() {
            // if slideBox disappears for any reason, try to re-find inside container
            const currentSlide = container.querySelector('.video-box1, .video-box2, .video-box3, .video-box4, .video-box5, .video-box6, .video-box7, .video-box8, .video-box9, .video-box');
            if (currentSlide) {
                slideWidth = getSlideStep();
            }
        }

        window.addEventListener('resize', recompute);
        window.addEventListener('load', recompute);

        // also recompute after a short delay in case fonts/images load slightly later
        setTimeout(recompute, 300);
        setTimeout(recompute, 900);
    }

    // Initialize sliders
    setupSlider(".video-wrapper1", ".video-container1", ".left-arrow1", ".right-arrow1");
    setupSlider(".video-wrapper2", ".video-container2", ".left-arrow2", ".right-arrow2");
    setupSlider(".video-wrapper3", ".video-container3", ".left-arrow3", ".right-arrow3");
setupSlider(".video-wrapper4", ".video-container4", ".left-arrow4", ".right-arrow4");
setupSlider(".video-wrapper5", ".video-container5", ".left-arrow5", ".right-arrow5");
setupSlider(".video-wrapper6", ".video-container6", ".left-arrow6", ".right-arrow6");
setupSlider(".video-wrapper7", ".video-container7", ".left-arrow7", ".right-arrow7");
setupSlider(".video-wrapper8", ".video-container8", ".left-arrow8", ".right-arrow8");
setupSlider(".video-wrapper9", ".video-container9", ".left-arrow9", ".right-arrow9");

    console.log("All sliders including ninth are initialized!");
});
const img = document.getElementById('myImage');
const overlay = document.getElementById('fullscreenOverlay');
const fullscreenImg = document.getElementById('fullscreenImage');
const closeBtn = document.getElementById('closeBtn');

img.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Close fullscreen if clicked outside image
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
