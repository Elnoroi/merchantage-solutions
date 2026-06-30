/**
 * MerchantAge Solutions - Main JavaScript File
 * Handles search, modals, animations, and interactivity
 */

// Service Database
const services = {
    eCitizen: [
        { name: 'National ID Replacement', category: 'Identity Services', page: 'ecitizen' },
        { name: 'Birth Certificate', category: 'Identity Services', page: 'ecitizen' },
        { name: 'Death Certificate', category: 'Identity Services', page: 'ecitizen' },
        { name: 'New Passport', category: 'Passport Services', page: 'ecitizen' },
        { name: 'Passport Renewal', category: 'Passport Services', page: 'ecitizen' },
        { name: 'Lost Passport Replacement', category: 'Passport Services', page: 'ecitizen' },
        { name: 'Certificate of Good Conduct', category: 'Good Conduct', page: 'ecitizen' },
        { name: 'Smart Driving Licence', category: 'Driving', page: 'ecitizen' },
        { name: 'Driving Licence Renewal', category: 'Driving', page: 'ecitizen' },
        { name: 'Duplicate Driving Licence', category: 'Driving', page: 'ecitizen' },
        { name: 'Business Name Registration', category: 'Business', page: 'ecitizen' },
        { name: 'Company Registration', category: 'Business', page: 'ecitizen' },
        { name: 'CR12 Application', category: 'Business', page: 'ecitizen' },
        { name: 'Vehicle Transfer', category: 'Vehicles', page: 'ecitizen' },
        { name: 'Vehicle Search', category: 'Vehicles', page: 'ecitizen' },
        { name: 'Vehicle Inspection', category: 'Vehicles', page: 'ecitizen' }
    ],
    KRA: [
        { name: 'PIN Registration', category: 'PIN Services', page: 'kra' },
        { name: 'PIN Retrieval', category: 'PIN Services', page: 'kra' },
        { name: 'Password Reset', category: 'PIN Services', page: 'kra' },
        { name: 'Nil Returns', category: 'Returns', page: 'kra' },
        { name: 'Employment Returns', category: 'Returns', page: 'kra' },
        { name: 'Business Returns', category: 'Returns', page: 'kra' },
        { name: 'VAT Returns', category: 'Returns', page: 'kra' },
        { name: 'PAYE', category: 'Tax Services', page: 'kra' },
        { name: 'Rental Income Tax', category: 'Tax Services', page: 'kra' },
        { name: 'Tax Compliance Certificate', category: 'Certificates', page: 'kra' },
        { name: 'Generate Payment Slip', category: 'Payments', page: 'kra' }
    ],
    NTSA: [
        { name: 'Driving Licence Renewal', category: 'Driving Licences', page: 'ntsa' },
        { name: 'Smart DL', category: 'Driving Licences', page: 'ntsa' },
        { name: 'Duplicate Licence', category: 'Driving Licences', page: 'ntsa' },
        { name: 'Vehicle Transfer', category: 'Vehicles', page: 'ntsa' },
        { name: 'Vehicle Search', category: 'Vehicles', page: 'ntsa' },
        { name: 'Logbook Search', category: 'Vehicles', page: 'ntsa' },
        { name: 'Vehicle Inspection', category: 'Vehicles', page: 'ntsa' },
        { name: 'PSV Badge', category: 'Transport Services', page: 'ntsa' }
    ],
    HELB: [
        { name: 'Loan Application', category: 'Loan Management', page: 'helb' },
        { name: 'Loan Appeal', category: 'Loan Management', page: 'helb' },
        { name: 'Loan Statement', category: 'Loan Management', page: 'helb' },
        { name: 'Loan Repayment', category: 'Loan Management', page: 'helb' },
        { name: 'Compliance Certificate', category: 'Certificates', page: 'helb' },
        { name: 'Clearance Certificate', category: 'Certificates', page: 'helb' }
    ],
    SHA: [
        { name: 'Registration', category: 'Members', page: 'sha' },
        { name: 'Member Update', category: 'Members', page: 'sha' },
        { name: 'Dependants', category: 'Members', page: 'sha' },
        { name: 'Contributions', category: 'Contributions', page: 'sha' },
        { name: 'Hospital Verification', category: 'Verification', page: 'sha' }
    ],
    NSSF: [
        { name: 'Member Registration', category: 'Members', page: 'nssf' },
        { name: 'Employer Registration', category: 'Employers', page: 'nssf' },
        { name: 'Statement Download', category: 'Statements', page: 'nssf' },
        { name: 'Compliance Certificate', category: 'Certificates', page: 'nssf' },
        { name: 'Benefits Claim', category: 'Benefits', page: 'nssf' }
    ],
    Business: [
        { name: 'Business Registration', category: 'Registration', page: 'business' },
        { name: 'Company Registration', category: 'Registration', page: 'business' },
        { name: 'Company Search', category: 'Search', page: 'business' },
        { name: 'CR12', category: 'Forms', page: 'business' },
        { name: 'Change of Directors', category: 'Changes', page: 'business' },
        { name: 'Change of Company Details', category: 'Changes', page: 'business' },
        { name: 'Annual Returns', category: 'Returns', page: 'business' }
    ]
};

// Flatten services for easy searching
const allServices = Object.values(services).flat();

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    initializeRequestButtons();
    initializeFormHandling();
    initializeScrollAnimations();
    initializeExampleTags();
});

/**
 * Initialize Search Functionality
 */
function initializeSearch() {
    const searchInput = document.getElementById('serviceSearch');
    const searchResults = document.getElementById('searchResults');
    const searchBtn = document.querySelector('.search-btn');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();

        if (query.length === 0) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        const results = allServices.filter(service => {
            return service.name.toLowerCase().includes(query) ||
                   service.category.toLowerCase().includes(query);
        });

        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" data-service="${result.name}" data-page="${result.page}">
                    <strong>${result.name}</strong>
                    <br>
                    <small style="color: #999;">${result.category}</small>
                </div>
            `).join('');
            searchResults.classList.add('active');

            // Add click handlers to results
            document.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const serviceName = this.dataset.service;
                    const page = this.dataset.page;
                    openRequestModal(serviceName, page);
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                });
            });
        } else {
            searchResults.innerHTML = '<div class="search-result-item" style="text-align: center; color: #999;">No services found</div>';
            searchResults.classList.add('active');
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });
}

/**
 * Initialize Request Service Buttons
 */
function initializeRequestButtons() {
    const requestModal = new bootstrap.Modal(document.getElementById('requestServiceModal'));

    // Add request buttons to service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        const serviceLink = card.querySelector('.service-link');
        const serviceTitle = card.querySelector('.service-title').textContent;

        if (serviceLink) {
            const originalHref = serviceLink.getAttribute('href');
            
            // Create request button
            const requestBtn = document.createElement('button');
            requestBtn.className = 'btn btn-success btn-sm mt-2';
            requestBtn.innerHTML = '<i class="fas fa-envelope"></i> Request Service';
            requestBtn.style.marginRight = '0.5rem';
            requestBtn.addEventListener('click', function(e) {
                e.preventDefault();
                openRequestModal(serviceTitle, originalHref.split('/')[2].split('.')[0]);
            });

            // Insert request button before the link
            serviceLink.parentNode.insertBefore(requestBtn, serviceLink);
        }
    });
}

/**
 * Open Request Service Modal
 */
function openRequestModal(serviceName, page) {
    const modal = new bootstrap.Modal(document.getElementById('requestServiceModal'));
    document.getElementById('selectedService').value = serviceName;
    document.getElementById('selectedServiceDisplay').value = serviceName;
    modal.show();
}

/**
 * Initialize Form Handling
 */
function initializeFormHandling() {
    const form = document.getElementById('requestServiceForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const county = document.getElementById('county').value;
        const contactMethod = document.getElementById('contactMethod').value;
        const service = document.getElementById('selectedService').value;

        // Simple validation
        if (!fullName || !phone || !county || !contactMethod) {
            alert('Please fill in all required fields');
            return;
        }

        // Here you would typically send the data to a server
        console.log({
            fullName,
            phone,
            county,
            contactMethod,
            service,
            timestamp: new Date().toISOString()
        });

        // Close current modal and show success modal
        const currentModal = bootstrap.Modal.getInstance(document.getElementById('requestServiceModal'));
        currentModal.hide();

        setTimeout(() => {
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }, 300);

        // Reset form
        form.reset();
    });
}

/**
 * Initialize Example Tags
 */
function initializeExampleTags() {
    const exampleTags = document.querySelectorAll('.example-tag');
    const searchInput = document.getElementById('serviceSearch');
    const searchResults = document.getElementById('searchResults');

    exampleTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const query = this.textContent.toLowerCase().trim();
            searchInput.value = query;
            
            // Trigger search
            const results = allServices.filter(service => {
                return service.name.toLowerCase().includes(query) ||
                       service.category.toLowerCase().includes(query);
            });

            if (results.length > 0) {
                searchResults.innerHTML = results.map(result => `
                    <div class="search-result-item" data-service="${result.name}" data-page="${result.page}">
                        <strong>${result.name}</strong>
                        <br>
                        <small style="color: #999;">${result.category}</small>
                    </div>
                `).join('');
                searchResults.classList.add('active');

                document.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const serviceName = this.dataset.service;
                        const page = this.dataset.page;
                        openRequestModal(serviceName, page);
                        searchResults.classList.remove('active');
                        searchInput.value = '';
                    });
                });
            }
        });
    });
}

/**
 * Initialize Scroll Animations
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe step items
    document.querySelectorAll('.step-item').forEach(item => {
        observer.observe(item);
    });

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add fade-in animation class
 */
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeInUp 0.6s ease-out !important;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
