const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    alert("NOTICE: This website is NOT optimized for mobile devices, including tablets and phones, however it should remain functional. Please be aware of potential bugs and view on desktop for the best experience.")
}