// Predefined list of valid license plates with vehicle details
const validLicensePlates = {
    "MH01AB1234": {
        state: "MH",
        make: "Maruti Suzuki",
        model: "Swift",
        year: "2019",
        color: "White",
        vin: "MADN1234ABCD56789"
    },
    "KA02XY5678": {
        state: "KA",
        make: "Hyundai",
        model: "Creta",
        year: "2020",
        color: "Silver",
        vin: "MDHYE5678EFGH1234"
    },
    "DL03CD9012": {
        state: "DL",
        make: "Tata",
        model: "Nexon",
        year: "2018",
        color: "Blue",
        vin: "TDNEX9012IJKL5678"
    },
    "TN04GH3456": {
        state: "TN",
        make: "Mahindra",
        model: "XUV700",
        year: "2021",
        color: "Red",
        vin: "MDXUV3456MNOP9012"
    },
    "GJ05JK7890": {
        state: "GJ",
        make: "Toyota",
        model: "Fortuner",
        year: "2017",
        color: "Black",
        vin: "TDFOR7890QRST3456"
    }
};

// License plate verification function
function verifyLicensePlate() {
    const licensePlateInput = document.getElementById('licensePlate').value.toUpperCase().replace(/\s/g, '');
    const plateState = document.getElementById('plateState').value;
    const ownerConfirmation = document.getElementById('ownerConfirmation').checked;
    const validationLoader = document.getElementById('validationLoader');
    
    // Basic validation
    if (!licensePlateInput || !plateState || !ownerConfirmation) {
        alert('Please fill in all fields and confirm you are the owner.');
        return;
    }
    
    // Show loader
    validationLoader.style.display = 'block';
    
    // Simulate server processing time
    setTimeout(() => {
        // Hide loader
        validationLoader.style.display = 'none';
        
        // Check if license plate exists in our predefined list
        if (validLicensePlates.hasOwnProperty(licensePlateInput)) {
            const vehicleData = validLicensePlates[licensePlateInput];
            
            // Check if state matches
            if (vehicleData.state === plateState) {
                // Show car details form and scroll to it
                document.getElementById('carDetailsForm').style.display = 'block';
                
                // Update summary info based on found data
                document.getElementById('summaryPlate').textContent = licensePlateInput;
                document.getElementById('summaryMake').textContent = vehicleData.make;
                document.getElementById('summaryModel').textContent = vehicleData.model;
                document.getElementById('summaryYear').textContent = vehicleData.year;
                document.getElementById('summaryColor').textContent = vehicleData.color;
                document.getElementById('summaryVin').textContent = vehicleData.vin;
                
                // Scroll to form
                document.getElementById('car-form').scrollIntoView({behavior: 'smooth'});
            } else {
                // State mismatch error
                alert(`This plate number is registered in ${getStateFullName(vehicleData.state)}, not ${getStateFullName(plateState)}. Please check your information.`);
            }
        } else {
            // License plate not found
            alert('License plate not found in our system. Please verify the license plate number or contact support.');
        }
    }, 1500); // Simulate 1.5-second processing time
}

// Get full state name from state code
function getStateFullName(stateCode) {
    const stateMap = {
        'MH': 'Maharashtra',
        'KA': 'Karnataka',
        'DL': 'Delhi',
        'TN': 'Tamil Nadu',
        'GJ': 'Gujarat',
        'UP': 'Uttar Pradesh',
        'RJ': 'Rajasthan',
        'WB': 'West Bengal',
        'TS': 'Telangana',
        'AP': 'Andhra Pradesh',
        'KL': 'Kerala',
        'HR': 'Haryana',
        'MP': 'Madhya Pradesh',
        'PB': 'Punjab',
        'BR': 'Bihar',
        'OR': 'Odisha',
        'CH': 'Chandigarh',
        'JK': 'Jammu & Kashmir',
        'AS': 'Assam',
        'JH': 'Jharkhand',
        'UK': 'Uttarakhand',
        'HP': 'Himachal Pradesh',
        'GA': 'Goa',
        'PY': 'Puducherry',
        'CT': 'Chhattisgarh',
        'SK': 'Sikkim',
        'ML': 'Meghalaya',
        'MN': 'Manipur',
        'TR': 'Tripura',
        'AR': 'Arunachal Pradesh',
        'NL': 'Nagaland',
        'MZ': 'Mizoram',
        'AN': 'Andaman & Nicobar',
        'DD': 'Daman & Diu',
        'DN': 'Dadra & Nagar Haveli',
        'LD': 'Lakshadweep'
    };
    return stateMap[stateCode] || stateCode;
}

// Handle file upload preview
function handleFileUpload(files) {
    const previewContainer = document.getElementById('imagePreviewContainer');
    previewContainer.innerHTML = '';
    
    // Display preview of uploaded images
    for (let i = 0; i < Math.min(files.length, 6); i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('preview-image');
            previewContainer.appendChild(img);
        }
        
        reader.readAsDataURL(file);
    }
    
    if (files.length > 6) {
        const more = document.createElement('div');
        more.classList.add('preview-image', 'd-flex', 'justify-content-center', 'align-items-center', 'bg-dark');
        more.style.color = 'white';
        more.innerHTML = `+${files.length - 6} more`;
        previewContainer.appendChild(more);
    }
}

// Simulate image analysis with AI
function analyzeImages() {
    const carPhotos = document.getElementById('carPhotos');
    const analysisResult = document.getElementById('analysisResult');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const continueButtonContainer = document.getElementById('continueButtonContainer');
    const getOfferBtn = document.getElementById('getOfferBtn');
    
    // Validation check
    if (carPhotos.files.length < 1) {
        alert('Please upload at least one photo of your car');
        return;
    }
    
    // Show loading overlay
    loadingOverlay.style.display = 'flex';
    
    // Simulate AI processing time
    setTimeout(() => {
        // Hide loading overlay
        loadingOverlay.style.display = 'none';
        
        // Show analysis result
        analysisResult.style.display = 'block';
        
        // Populate detected issues (simulated)
        populateDetectedIssues();
        
        // Update buttons
        getOfferBtn.style.display = 'none';
        continueButtonContainer.style.display = 'block';
        
        // Scroll to results
        analysisResult.scrollIntoView({behavior: 'smooth'});
    }, 3000); // Simulate 3-second processing time
}

// Function to populate detected issues based on photos (simulated)
function populateDetectedIssues() {
    const detectedIssues = document.getElementById('detectedIssues');
    detectedIssues.innerHTML = '';
    
    // Get license plate to determine which car we're dealing with
    const licensePlate = document.getElementById('summaryPlate').textContent.toUpperCase().replace(/\s/g, '');
    
    // Simulated issues based on the vehicle
    let issues = [];
    
    // Generate different issues based on the license plate
    switch(licensePlate) {
        case 'MH01AB1234': // Maruti Swift
            issues = [
                { description: 'Minor scratch on rear bumper', severity: 'low' },
                { description: 'Small dent on passenger door', severity: 'low' }
            ];
            break;
        case 'KA02XY5678': // Hyundai Creta
            issues = [
                { description: 'Windshield chip', severity: 'medium' },
                { description: 'Worn brake pads', severity: 'medium' }
            ];
            break;
        case 'DL03CD9012': // Tata Nexon
            issues = [
                { description: 'Significant rust on undercarriage', severity: 'high' },
                { description: 'Clutch issues detected', severity: 'high' }
            ];
            break;
        case 'TN04GH3456': // Mahindra XUV700
            issues = [
                { description: 'AC performance degradation', severity: 'medium' }
            ];
            break;
        case 'GJ05JK7890': // Toyota Fortuner
            issues = [
                { description: 'Worn tires', severity: 'medium' },
                { description: 'Minor interior wear', severity: 'low' }
            ];
            break;
        default:
            issues = [
                { description: 'Minor wear and tear consistent with age', severity: 'low' }
            ];
    }
    
    // Add issues to the UI
    issues.forEach(issue => {
        const damageItem = document.createElement('div');
        damageItem.classList.add('damage-item');
        
        damageItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0">${issue.description}</p>
                <span class="damage-severity severity-${issue.severity}">
                    ${issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                </span>
            </div>
        `;
        
        detectedIssues.appendChild(damageItem);
    });
    
    // Update estimated value based on the license plate and detected issues
    updateEstimatedValue(licensePlate, issues);
}

// Update estimated value based on license plate and detected issues
function updateEstimatedValue(licensePlate, issues) {
    let baseValue = 0;
    
    // Base values for each vehicle (in ₹)
    switch(licensePlate) {
        case 'MH01AB1234': // Maruti Swift 2019
            baseValue = 650000;
            break;
        case 'KA02XY5678': // Hyundai Creta 2020
            baseValue = 1200000;
            break;
        case 'DL03CD9012': // Tata Nexon 2018
            baseValue = 800000;
            break;
        case 'TN04GH3456': // Mahindra XUV700 2021
            baseValue = 1800000;
            break;
        case 'GJ05JK7890': // Toyota Fortuner 2017
            baseValue = 2500000;
            break;
        default:
            baseValue = 700000;
    }
    
    // Calculate deductions based on issues
    let totalDeduction = 0;
    issues.forEach(issue => {
        switch(issue.severity) {
            case 'low':
                totalDeduction += baseValue * 0.01; // 1% deduction
                break;
            case 'medium':
                totalDeduction += baseValue * 0.03; // 3% deduction
                break;
            case 'high':
                totalDeduction += baseValue * 0.08; // 8% deduction
                break;
        }
    });
    
    // Calculate final value
    const finalValue = Math.round(baseValue - totalDeduction);
    const minValue = Math.round(finalValue * 0.95); // 5% range
    const maxValue = Math.round(finalValue * 1.05); // 5% range
    
    // Format as Indian Rupees
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });
    
    // Update UI
    document.getElementById('estimatedValue').textContent = formatter.format(finalValue);
    document.getElementById('minValue').textContent = formatter.format(minValue);
    document.getElementById('maxValue').textContent = formatter.format(maxValue);
    
    // Update progress bar based on overall condition
    const conditionRatio = calculateConditionRatio(issues);
    document.querySelector('.progress-bar').style.width = `${conditionRatio}%`;
}

// Calculate condition ratio based on issues
function calculateConditionRatio(issues) {
    if (issues.length === 0) return 95; // Excellent condition
    
    let severityPoints = 0;
    issues.forEach(issue => {
        switch(issue.severity) {
            case 'low':
                severityPoints += 5;
                break;
            case 'medium':
                severityPoints += 10;
                break;
            case 'high':
                severityPoints += 20;
                break;
        }
    });
    
    // Calculate condition (100 - deductions)
    const condition = Math.max(10, Math.min(95, 95 - severityPoints));
    return condition;
}

// Initialize date picker with tomorrow as minimum date
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formattedDate = tomorrow.toISOString().split('T')[0];
    document.getElementById('pickupDate').min = formattedDate;
}); 