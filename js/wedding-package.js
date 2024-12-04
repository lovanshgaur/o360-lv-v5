const weddingPackages = {
    Classic: {
        name: "Classic Package",
        detail: "Perfect for couples who want a high-quality VR experience but don’t require comprehensive coverage. This package focuses on the key moments of your wedding.",
        features: [
            "Key Moments Coverage: 6 hours of onsite VR recording, capturing highlights from your shadi, haldi, mehndi, and everything in between. Includes 25 minutes of edited VR footage.",
            "1 Oculus VR Headset: Immerse yourself in your wedding day with top-tier VR equipment.",
            "Short VR Highlight: A professionally edited 1-2 minute reel showcasing the best parts of your wedding day.",
            "6K VR Resolution: High-quality VR footage with stunning clarity.",
            "VR App Access: Stream and relive your wedding anytime with our exclusive app.",
            "Premium Videographers and Editors: Your memories are captured by the best in the industry.",
            "2 OKOMO Headsets: Share your VR wedding experience with a loved one."
        ]
    },
    Gold: {
        name: "Gold Package",
        detail: "For couples who want more than just the highlights. The Enhanced Package covers all your events with additional extras for a more immersive experience.",
        features: [
            "Full-Day Coverage: 12 hours of onsite VR recording across two days, capturing every moment from your wedding with 45 minutes of edited VR footage.",
            "1 Oculus VR Headset: Share the experience with family or friends.",
            "6 Short VR Reels: Professionally edited reels showcasing your wedding and key moments.",
            "8K VR Resolution: Crystal-clear video quality with 8K resolution.",
            "Lifetime VR App Access: Enjoy your wedding in VR whenever you want.",
            "4 OKOMO Headsets: Share the VR experience with others.",
            "Behind-the-Scenes (BTS) Footage: Capture candid moments and emotions from behind the scenes.",
            "Multiple Camera Angles: Strategically placed cameras to capture all the action from various angles."
        ]
    },
    Platinum: {
        name: "Platinum Package",
        detail: "For couples who want the ultimate VR experience. The Platinum Package covers all your events with additional extras for a more immersive experience.",
        features: [
            "24-Hour Onsite Coverage: Full-day VR recording covering all events, ceremonies, and receptions with 90 minutes of deliverables.",
            "2 Oculus VR Headsets: For sharing immersive experiences among family and friends.",
            "12 VR Reels: Multiple professionally edited reels that highlight different parts of your wedding day.",
            "8K VR Resolution: Ultra-high-definition video for a truly immersive experience.",
            "Unlimited VR App Access: Access your VR wedding videos at your convenience.",
            "8 OKOMO Headsets: Extra headsets for family and guests.",
            "Behind-the-Scenes (BTS) Footage: Capture candid and intimate moments behind the scenes."
        ]
    },
    Lux: {
        name: "Lux Package",
        detail: "For couples who want the ultimate VR experience. The Lux Package covers all your events with additional extras for a more immersive experience.",
        features: [
            "24-Hour Onsite Coverage: Full-day VR recording covering all events, ceremonies, and receptions with 90 minutes of deliverables.",
            "2 Oculus VR Headsets: For sharing immersive experiences among family and friends.",
            "12 VR Reels: Multiple professionally edited reels that highlight different parts of your wedding day.",
            "8K VR Resolution: Ultra-high-definition video for a truly immersive experience.",
            "Unlimited VR App Access: Access your VR wedding videos at your convenience.",
            "8 OKOMO Headsets: Extra headsets for family and guests.",
            "Behind-the-Scenes (BTS) Footage: Capture candid and intimate moments behind the scenes."
        ]
    }
};

const packages = document.querySelectorAll(".package");

packages.forEach((packageElement, index) => {
    packageElement.addEventListener("click", () => {
        const packageId = index + 1;
        const packageName = packageElement.children[0].textContent.trim();
        const url = `package.html?id=${packageId}&name=${encodeURIComponent(packageName)}`;

        window.open(url, "_blank");
    });
});






const products = [
    {
        "name": "Classic",
        "features": {
            "onsiteCoverage": true, // 6 Hours
            "vrReels": true, // 3
            "oculusHeadsets": true, // 1
            "okomoHeadsets": true, // 2
            "resolution": false, // 6K
            "povRecording": false, // No
            "customizedTheme": false, // No
            "bts": false, // No
            "liveVrShow": false, // No
            "droneCoverage": false, // No
            "vrGuestbook": false, // No
            "vrInvites": false, // No
            "timeCapsule": false // No
        }
    },
    {
        "name": "Gold",
        "features": {
            "onsiteCoverage": true, // 12 Hours
            "vrReels": true, // 6
            "oculusHeadsets": true, // 2
            "okomoHeadsets": true, // 4
            "resolution": true, // 8K
            "povRecording": false, // No
            "customizedTheme": false, // No
            "bts": true, // Yes
            "liveVrShow": false, // No
            "droneCoverage": true, // Yes
            "vrGuestbook": false, // No
            "vrInvites": false, // No
            "timeCapsule": false // No
        }
    },
    {
        "name": "Platinum",
        "features": {
            "onsiteCoverage": true, // 24 Hours
            "vrReels": true, // 12
            "oculusHeadsets": true, // 3
            "okomoHeadsets": true, // 8
            "resolution": true, // 8K
            "povRecording": true, // Yes
            "customizedTheme": true, // Yes
            "bts": true, // Yes
            "liveVrShow": false, // No
            "droneCoverage": true, // Yes
            "vrGuestbook": true, // Yes
            "vrInvites": false, // No
            "timeCapsule": false // No
        }
    },
    {
        "name": "LUX",
        "features": {
            "onsiteCoverage": true, // 48 Hours
            "vrReels": true, // 24
            "oculusHeadsets": true, // 4
            "okomoHeadsets": true, // 16
            "resolution": true, // 8K 3D
            "povRecording": true, // Yes
            "customizedTheme": true, // Fully Customized
            "bts": true, // Yes
            "liveVrShow": true, // Yes
            "droneCoverage": true, // Yes
            "vrGuestbook": true, // Yes
            "vrInvites": true, // Yes
            "timeCapsule": true // Yes
        }
    }
];

function generateTable() {
    const table = document.getElementById("productTable");
    const headerRow = document.createElement("tr");

    // Create header row
    const headers = ["Package Name", "Onsite Coverage", "VR Reels", "Oculus Headsets", "Okomo Headsets", "Resolution", "POV Recording", "Customized Theme", "BTS", "Live VR Show", "Drone Coverage", "VR Guestbook", "VR Invites", "Time Capsule"];
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create rows for each product
    products.forEach(product => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        Object.values(product.features).forEach(feature => {
            const cell = document.createElement("td");
            cell.innerHTML = feature === true ? `<i class="fas fa-check-circle"></i>` : feature === false ? `<i class="fas fa-times"></i>` : feature;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", generateTable);
