const prices = {
    subtitles: 25,
    color: 20,
    bgm: 25,
    short: 10,
    bundle: 70
};

const form = document.getElementById('commissionForm');
const customOptions = document.getElementById('customOptions');
const otherText = document.getElementById('otherText');
const contactInfo = document.getElementById('contactInfo');
const summaryList = document.getElementById('summaryList');
const totalPrice = document.getElementById('totalPrice');
const submitBtn = document.getElementById('submitBtn');
const requestText = document.getElementById('requestText');

function updateForm() {
    const packageType = form.package.value;
    const isCustom = packageType === 'custom';

    [...customOptions.elements].forEach(el => {
        el.disabled = !isCustom;
        if (!isCustom) el.checked = true;
    });

    updateSummary();
}

function updateSummary() {
    const tableBody = document.querySelector("#summaryTable tbody");
    tableBody.innerHTML = ""; // Clear old rows
    let total = 0;

    const duration = parseInt(document.getElementById("duration").value || "0");
    if (duration > 0) {
        let durationCost = +(duration * 0.83).toFixed(2);
        durationCost = durationCost.toFixed(2);
        tableBody.innerHTML += `<tr><td>Footage: ${duration} minutes</td><td>$${durationCost}</td></tr>`;
        total += parseFloat(durationCost);
    }

    const isBundle = form.package.value === "bundle";

    if (isBundle) {
        tableBody.innerHTML += `<tr><td>Bundle Package</td><td>$${prices.bundle}</td></tr>`;
        ["Subtitles", "Color Correction", "BGM/SFX", "Short"].forEach(feature => {
            tableBody.innerHTML += `<tr><td style="padding-left: 1em;">• ${feature}</td><td></td></tr>`;
        });
        total += parseFloat(prices.bundle);
    } else {
        tableBody.innerHTML += `<tr><td>Custom Package</td><td></td></tr>`;
        [...form.querySelectorAll('input[name="features"]:checked')].forEach(cb => {
            const label = cb.parentElement.textContent.trim();
            const cost = prices[cb.value];
            tableBody.innerHTML += `<tr><td style="padding-left: 1em;">• ${label}</td><td>$${cost}</td></tr>`;
            total += parseFloat(cost);
        });
    }

    // Add project type
    const type = form.querySelector('input[name="type"]:checked');
    if (type.value === "other") {
        tableBody.innerHTML += `<tr><td>Project Type: ${otherText.value}</td><td></td></tr>`;
    } else {
        tableBody.innerHTML += `<tr><td>Project Type: ${type.parentElement.textContent.trim()}</td><td></td></tr>`;
    }

    totalPrice.textContent = total.toFixed(2);
}


form.package.forEach(el => el.addEventListener('change', updateForm));
form.querySelectorAll('input[name="features"]').forEach(el => el.addEventListener('change', updateSummary));
form.type.forEach(el => {
    el.addEventListener('change', () => {
        otherText.style.display = el.value === 'other' ? 'inline' : 'none';
        updateSummary();
    });
});
otherText.addEventListener('input', updateSummary);
document.getElementById("duration").addEventListener("input", updateSummary);

form.contact.forEach(el => {
    el.addEventListener('change', () => {
        contactInfo.placeholder = el.value === 'discord' ? 'Your Discord username...' : 'Your email address...';
    });
});

submitBtn.addEventListener('click', () => {
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const contactType = form.querySelector('input[name="contact"]:checked').value;
    const features = [...form.querySelectorAll('input[name="features"]:checked')].map(cb => cb.value).join(', ');
    const duration = parseInt(document.getElementById("duration").value || "0");


    const params = {
        package: form.package.value,
        features: features,
        duration: duration,
        type: form.querySelector('input[name="type"]:checked').value,
        otherDesc: otherText.value,
        contactMethod: contactType,
        contactInfo: contactInfo.value,
        request: requestText.value,
        total: totalPrice.textContent
    };

    emailjs.send("service_ql9ac0l", "template_17eem7l", params)
        .then(() => {
            alert("Email sent successfully! I'll be in contact to retrieve your source material");
            submitBtn.textContent = "Submitted!";
        }, (err) => {
            console.error("Email send error:", err);
            alert("Failed to send email.");
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
        });
});