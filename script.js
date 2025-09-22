// EventHub JavaScript functionality

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

// Event data storage
const eventData = {
    'tech-conference': {
        id: 1,
        title: 'Tech Conference 2024',
        location: 'San Francisco, CA',
        date: 'March 15, 2024',
        time: '9:00 AM - 6:00 PM',
        price: '$299',
        image: 'https://via.placeholder.com/800x450/3273dc/ffffff?text=Tech+Conference',
        description: `
            <p>Join industry leaders and innovators at the most anticipated technology conference of the year. This comprehensive event brings together thought leaders, entrepreneurs, and tech enthusiasts from around the globe.</p>
            <h4>What to Expect:</h4>
            <ul>
                <li>Keynote presentations from industry pioneers</li>
                <li>Interactive workshops and hands-on sessions</li>
                <li>Networking opportunities with like-minded professionals</li>
                <li>Exhibition showcasing cutting-edge technologies</li>
                <li>Panel discussions on emerging trends</li>
            </ul>
            <h4>Featured Topics:</h4>
            <ul>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Blockchain and Cryptocurrency</li>
                <li>Internet of Things (IoT)</li>
                <li>Cybersecurity in the Digital Age</li>
                <li>Sustainable Technology Solutions</li>
            </ul>
        `,
        tags: ['Technology', 'Networking', 'Innovation'],
        organizer: {
            name: 'TechEvents Inc.',
            title: 'Event Organizer',
            description: 'Leading technology event organizer with over 10 years of experience.',
            avatar: 'https://via.placeholder.com/96x96/3273dc/ffffff?text=TE'
        },
        availableSpots: 150
    },
    'art-exhibition': {
        id: 2,
        title: 'Modern Art Exhibition',
        location: 'New York, NY',
        date: 'March 20 - April 15, 2024',
        time: '10:00 AM - 8:00 PM',
        price: '$45',
        image: 'https://via.placeholder.com/800x450/209cee/ffffff?text=Art+Exhibition',
        description: `
            <p>Immerse yourself in the world of contemporary art with this exclusive exhibition featuring works from internationally acclaimed artists. Experience the evolution of modern artistic expression through various mediums and styles.</p>
            <h4>Exhibition Highlights:</h4>
            <ul>
                <li>Over 100 original artworks on display</li>
                <li>Guided tours with art historians</li>
                <li>Interactive digital art installations</li>
                <li>Artist meet-and-greet sessions</li>
                <li>Educational workshops for all ages</li>
            </ul>
            <h4>Featured Artists:</h4>
            <ul>
                <li>Contemporary painters from Europe and Asia</li>
                <li>Digital art pioneers</li>
                <li>Sculptors working with innovative materials</li>
                <li>Photography masters</li>
                <li>Mixed media experimentalists</li>
            </ul>
        `,
        tags: ['Art', 'Culture', 'Exhibition'],
        organizer: {
            name: 'Metropolitan Arts Foundation',
            title: 'Cultural Institution',
            description: 'Dedicated to promoting contemporary art and cultural education.',
            avatar: 'https://via.placeholder.com/96x96/209cee/ffffff?text=MAF'
        },
        availableSpots: 75
    },
    'food-festival': {
        id: 3,
        title: 'International Food Festival',
        location: 'Chicago, IL',
        date: 'March 25, 2024',
        time: '11:00 AM - 10:00 PM',
        price: '$35',
        image: 'https://via.placeholder.com/800x450/48c774/ffffff?text=Food+Festival',
        description: `
            <p>Embark on a culinary journey around the world without leaving Chicago! This international food festival brings together renowned chefs, local restaurants, and food enthusiasts for a day of gastronomic delight.</p>
            <h4>Festival Features:</h4>
            <ul>
                <li>Food stalls representing 25+ countries</li>
                <li>Live cooking demonstrations by celebrity chefs</li>
                <li>Wine and craft beer tastings</li>
                <li>Cultural performances throughout the day</li>
                <li>Family-friendly activities and kids' zone</li>
            </ul>
            <h4>Culinary Experiences:</h4>
            <ul>
                <li>Street food from Asia, Europe, and the Americas</li>
                <li>Gourmet desserts and artisanal treats</li>
                <li>Vegan and vegetarian options</li>
                <li>Traditional recipes passed down through generations</li>
                <li>Fusion cuisine innovations</li>
            </ul>
        `,
        tags: ['Food', 'Festival', 'Culture'],
        organizer: {
            name: 'Chicago Culinary Society',
            title: 'Food & Culture Organization',
            description: 'Celebrating diverse culinary traditions and bringing communities together through food.',
            avatar: 'https://via.placeholder.com/96x96/48c774/ffffff?text=CCS'
        },
        availableSpots: 500
    },
    'music-concert': {
        id: 4,
        title: 'Summer Music Concert',
        location: 'Los Angeles, CA',
        date: 'April 5, 2024',
        time: '7:00 PM - 11:00 PM',
        price: '$85',
        image: 'https://via.placeholder.com/800x450/ff3860/ffffff?text=Music+Concert',
        description: `
            <p>Experience an unforgettable evening of live music under the stars at our spectacular outdoor venue. This concert features an incredible lineup of artists spanning multiple genres, promising something for every music lover.</p>
            <h4>Performance Lineup:</h4>
            <ul>
                <li>Headlining act with Grammy-nominated performers</li>
                <li>Rising indie artists and local bands</li>
                <li>Electronic music DJs</li>
                <li>Acoustic singer-songwriters</li>
                <li>Special surprise guest appearances</li>
            </ul>
            <h4>Venue Amenities:</h4>
            <ul>
                <li>Premium sound system and lighting</li>
                <li>Food trucks and beverage stations</li>
                <li>VIP seating areas available</li>
                <li>Merchandise booths</li>
                <li>Free parking and shuttle service</li>
            </ul>
        `,
        tags: ['Music', 'Concert', 'Entertainment'],
        organizer: {
            name: 'Harmony Events',
            title: 'Music Event Producer',
            description: 'Creating memorable musical experiences and supporting artists since 2010.',
            avatar: 'https://via.placeholder.com/96x96/ff3860/ffffff?text=HE'
        },
        availableSpots: 200
    },
    'fitness-workshop': {
        id: 5,
        title: 'Wellness & Fitness Workshop',
        location: 'Austin, TX',
        date: 'April 10, 2024',
        time: '8:00 AM - 12:00 PM',
        price: '$65',
        image: 'https://via.placeholder.com/800x450/ffdd57/333333?text=Fitness+Workshop',
        description: `
            <p>Transform your approach to health and wellness with this comprehensive workshop designed for all fitness levels. Learn from certified trainers, nutritionists, and wellness experts who will guide you on your journey to a healthier lifestyle.</p>
            <h4>Workshop Sessions:</h4>
            <ul>
                <li>Functional fitness training techniques</li>
                <li>Nutrition planning and meal prep</li>
                <li>Mindfulness and meditation practices</li>
                <li>Injury prevention and recovery</li>
                <li>Creating sustainable fitness routines</li>
            </ul>
            <h4>What's Included:</h4>
            <ul>
                <li>Hands-on training sessions</li>
                <li>Personalized fitness assessment</li>
                <li>Healthy breakfast and snacks</li>
                <li>Take-home workout guides</li>
                <li>Access to exclusive wellness resources</li>
            </ul>
        `,
        tags: ['Wellness', 'Fitness', 'Health'],
        organizer: {
            name: 'FitLife Academy',
            title: 'Wellness Education Center',
            description: 'Empowering individuals to achieve their health and fitness goals through education and support.',
            avatar: 'https://via.placeholder.com/96x96/ffdd57/333333?text=FLA'
        },
        availableSpots: 40
    },
    'business-summit': {
        id: 6,
        title: 'Entrepreneurship Summit',
        location: 'Miami, FL',
        date: 'April 18, 2024',
        time: '9:00 AM - 5:00 PM',
        price: '$199',
        image: 'https://via.placeholder.com/800x450/9932cc/ffffff?text=Business+Summit',
        description: `
            <p>Connect with successful entrepreneurs, industry leaders, and innovative thinkers at this premier business summit. Whether you're starting your entrepreneurial journey or scaling your existing business, this event offers invaluable insights and networking opportunities.</p>
            <h4>Summit Features:</h4>
            <ul>
                <li>Keynote presentations from successful CEOs</li>
                <li>Panel discussions on business strategies</li>
                <li>Startup pitch competitions</li>
                <li>One-on-one mentoring sessions</li>
                <li>Investor networking opportunities</li>
            </ul>
            <h4>Key Topics:</h4>
            <ul>
                <li>Building and scaling sustainable businesses</li>
                <li>Digital marketing and social media strategies</li>
                <li>Funding options and investor relations</li>
                <li>Leadership and team building</li>
                <li>Innovation and market disruption</li>
            </ul>
        `,
        tags: ['Business', 'Entrepreneurship', 'Networking'],
        organizer: {
            name: 'Business Leaders Alliance',
            title: 'Professional Development Organization',
            description: 'Supporting entrepreneurs and business leaders through education, mentorship, and networking.',
            avatar: 'https://via.placeholder.com/96x96/9932cc/ffffff?text=BLA'
        },
        availableSpots: 300
    }
};

// Function to get event data
function getEventData(eventKey) {
    return eventData[eventKey] || null;
}

// Function to load event details on event.html page
function loadEventDetails() {
    // Get event ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    if (!eventId) {
        // If no event ID, redirect to home page
        window.location.href = 'index.html';
        return;
    }
    
    // Find event by ID
    let selectedEvent = null;
    for (const key in eventData) {
        if (eventData[key].id == eventId) {
            selectedEvent = eventData[key];
            break;
        }
    }
    
    if (!selectedEvent) {
        // If event not found, redirect to home page
        window.location.href = 'index.html';
        return;
    }
    
    // Populate event details
    document.getElementById('event-title').textContent = selectedEvent.title;
    document.getElementById('event-location').innerHTML = `<i class="fas fa-map-marker-alt mr-2"></i>${selectedEvent.location}`;
    document.getElementById('event-date').textContent = selectedEvent.date;
    document.getElementById('event-time').textContent = selectedEvent.time;
    document.getElementById('event-price').textContent = selectedEvent.price;
    document.getElementById('event-image').src = selectedEvent.image;
    document.getElementById('event-image').alt = selectedEvent.title;
    document.getElementById('event-description').innerHTML = selectedEvent.description;
    
    // Populate tags
    const tagsContainer = document.getElementById('event-tags');
    tagsContainer.innerHTML = '';
    selectedEvent.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag is-primary';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // Populate booking card
    document.getElementById('booking-price').textContent = selectedEvent.price;
    document.getElementById('available-spots').textContent = selectedEvent.availableSpots;
    
    // Update book appointment button
    const eventKey = Object.keys(eventData).find(key => eventData[key].id == eventId);
    document.getElementById('book-appointment-btn').href = `appointment.html?event=${eventKey}`;
    
    // Populate organizer info
    document.getElementById('organizer-name').textContent = selectedEvent.organizer.name;
    document.getElementById('organizer-title').textContent = selectedEvent.organizer.title;
    document.getElementById('organizer-description').textContent = selectedEvent.organizer.description;
    document.getElementById('organizer-avatar').src = selectedEvent.organizer.avatar;
    
    // Set share link
    document.getElementById('share-link').value = window.location.href;
    
    // Update page title
    document.title = `${selectedEvent.title} - EventHub`;
}

// Function to handle smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification is-${type}`;
    notification.innerHTML = `
        <button class="delete"></button>
        ${message}
    `;
    
    // Add to top of page
    document.body.insertBefore(notification, document.body.firstChild);
    
    // Add delete functionality
    const deleteButton = notification.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Function to format date for display
function formatDate(dateString) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to format time for display
function formatTime(timeString) {
    return new Date(`1970-01-01T${timeString}:00`).toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

// Close modal functionality
document.addEventListener('click', function(event) {
    const modal = event.target.closest('.modal');
    if (modal && (event.target.classList.contains('modal-background') || event.target.classList.contains('modal-close'))) {
        modal.classList.remove('is-active');
    }
});

// Escape key closes modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.is-active');
        if (activeModal) {
            activeModal.classList.remove('is-active');
        }
    }
});

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Loading state management
function setLoadingState(element, isLoading = true) {
    if (isLoading) {
        element.classList.add('is-loading');
        element.disabled = true;
    } else {
        element.classList.remove('is-loading');
        element.disabled = false;
    }
}

// Initialize tooltips and other interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.hostname || link.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
    
    // Add loading states to form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
            if (submitButton) {
                setLoadingState(submitButton, true);
            }
        });
    });
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getEventData,
        loadEventDetails,
        showNotification,
        formatDate,
        formatTime,
        validateEmail,
        validatePhone,
        setLoadingState
    };
}