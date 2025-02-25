border-radius: 8px;
    background-color: #f8f9fa;
    margin-top: 40px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.provider-testimonial blockquote, .plan-testimonial blockquote, .patient-testimonial blockquote, .government-testimonial blockquote {
    font-style: italic;
    margin-bottom: 15px;
}

.provider-testimonial cite, .plan-testimonial cite, .patient-testimonial cite, .government-testimonial cite {
    font-weight: 700;
    display: block;
    text-align: right;
}

/* Resources Page */
.resources-intro {
    padding: 40px 0;
    text-align: center;
}

.resources-intro p {
    max-width: 800px;
    margin: 0 auto;
}

.resource-categories {
    background-color: #f0f0f0;
    padding: 20px 0;
}

.category-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.tab-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
}

.tab-btn:hover,
.tab-btn.active {
    background-color: #0075c9;
    color: #fff;
}

.resources-grid {
    padding: 60px 0;
}

.resources-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.resource-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    background-color: #fff;
    transition: transform 0.3s ease;
}

.resource-item:hover {
    transform: translateY(-5px);
}

.resource-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.resource-content {
    padding: 20px;
}

.resource-type {
    display: inline-block;
    background-color: #0075c9;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-bottom: 10px;
}

.resource-content h3 {
    margin-bottom: 10px;
}

.resource-content p {
    margin-bottom: 15px;
}

.resource-link {
    font-weight: 700;
}

.newsletter {
    padding: 60px 0;
    background-color: #f8f9fa;
    text-align: center;
}

.newsletter h3 {
    margin-bottom: 15px;
}

.newsletter p {
    max-width: 600px;
    margin: 0 auto 30px;
}

.newsletter-form {
    display: flex;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
}

.newsletter-form input[type="email"] {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-family: 'Roboto', sans-serif;
}

.newsletter-form .btn {
    border-radius: 0 4px 4px 0;
}

/* Contact Page */
.contact-info {
    padding: 80px 0;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.contact-details {
    padding: 30px;
    border-radius: 8px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.contact-item {
    margin-bottom: 20px;
}

.contact-item h4 {
    margin-bottom: 5px;
}

.contact-form-container {
    padding: 30px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
}

.form-group textarea {
    resize: vertical;
}

.map {
    padding-bottom: 80px;
}

.map h3 {
    text-align: center;
    margin-bottom: 30px;
}

.map-container {
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.map-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #666;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .problem-solution .container {
        flex-direction: column;
    }
    
    .benefits-grid,
    .team-grid,
    .features-grid,
    .engagement-types,
    .resources-container,
    .contact-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    .stakeholder-tabs {
        flex-wrap: wrap;
    }
    
    .stakeholder-tabs li {
        margin-bottom: 10px;
    }
}

@media (max-width: 768px) {
    header .container {
        flex-direction: column;
    }
    
    nav ul {
        margin-top: 20px;
    }
    
    .stats-container {
        flex-direction: column;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
    
    .newsletter-form input[type="email"] {
        border-radius: 4px;
        margin-bottom: 10px;
    }
    
    .newsletter-form .btn {
        border-radius: 4px;
    }
}

@media (max-width: 576px) {
    nav ul {
        flex-direction: column;
        align-items: center;
    }
    
    nav ul li {
        margin: 10px 0;
    }
    
    .category-tabs {
        flex-direction: column;
    }
    
    .tab-btn {
        margin-bottom: 10px;
    }
}