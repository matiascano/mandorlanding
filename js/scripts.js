// Smooth scrolling para los enlaces de navegación
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Animación de aparición para elementos
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    }
                });
            }, observerOptions);

            // Observar elementos para animación
            const elementsToAnimate = document.querySelectorAll('.product-card, .feature-card, .section-header');
            elementsToAnimate.forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        });

        // Función para abrir tienda online (placeholder)
        function abrirTienda() {
            alert('¡Proximamente disponible nuestra tienda online! 🛍️\n\nContactanos por WhatsApp para realizar tu pedido.');
        }

        // Efecto hover en las tarjetas de productos
        document.addEventListener('DOMContentLoaded', function() {
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Review Google Maps
        class GoogleReviewsManager {
            constructor() {
                this.reviewsContainer = document.getElementById('reviews-container');
                this.loadMoreBtn = document.getElementById('load-more-btn');
                this.loadingDiv = document.getElementById('loading');
                this.errorDiv = document.getElementById('error-message');
                
                this.displayedReviews = 0;
                this.reviewsPerPage = 10;
                this.allReviews = [];
                this.hasMoreReviews = true;
                
                this.init();
            }

            // Simular más reseñas - En producción esto vendría de Google Places API con paginación
            getMockReviews(page = 1) {
                const baseReviews = [
                    {
                        id: 1,
                        author_name: "María González",
                        profile_photo_url: "https://via.placeholder.com/40x40/4285f4/ffffff?text=MG",
                        rating: 5,
                        text: "Excelente servicio y atención. El personal es muy amable y profesional. Totalmente recomendado.",
                        time: "hace 2 días"
                    },
                    {
                        id: 2,
                        author_name: "Carlos Rodríguez",
                        profile_photo_url: "https://via.placeholder.com/40x40/ea4335/ffffff?text=CR",
                        rating: 4,
                        text: "Muy buena experiencia en general. Los precios son justos y la calidad es buena.",
                        time: "hace 1 semana"
                    },
                    {
                        id: 3,
                        author_name: "Ana Martínez",
                        profile_photo_url: "https://via.placeholder.com/40x40/34a853/ffffff?text=AM",
                        rating: 5,
                        text: "Me encanta este lugar. Siempre que vengo recibo un trato excepcional. Muy profesionales.",
                        time: "hace 2 semanas"
                    },
                    {
                        id: 4,
                        author_name: "Juan Pérez",
                        profile_photo_url: "https://via.placeholder.com/40x40/fbbc04/ffffff?text=JP",
                        rating: 3,
                        text: "Está bien, aunque podría mejorar en algunos aspectos. El servicio es aceptable.",
                        time: "hace 3 semanas"
                    },
                    {
                        id: 5,
                        author_name: "Laura Sánchez",
                        profile_photo_url: "https://via.placeholder.com/40x40/9c27b0/ffffff?text=LS",
                        rating: 5,
                        text: "Increíble atención al cliente. Resolvieron todas mis dudas y me ayudaron mucho.",
                        time: "hace 1 mes"
                    },
                    {
                        id: 6,
                        author_name: "Roberto Silva",
                        profile_photo_url: "https://via.placeholder.com/40x40/ff5722/ffffff?text=RS",
                        rating: 4,
                        text: "Muy buen lugar, ambiente agradable y personal capacitado. Volveré sin dudas.",
                        time: "hace 1 mes"
                    },
                    {
                        id: 7,
                        author_name: "Patricia López",
                        profile_photo_url: "https://via.placeholder.com/40x40/607d8b/ffffff?text=PL",
                        rating: 5,
                        text: "Excelente en todos los aspectos. Calidad, precio y atención de primera.",
                        time: "hace 2 meses"
                    },
                    {
                        id: 8,
                        author_name: "Diego Fernández",
                        profile_photo_url: "https://via.placeholder.com/40x40/795548/ffffff?text=DF",
                        rating: 4,
                        text: "Muy recomendable. Tienen muy buenos productos y el servicio es rápido.",
                        time: "hace 2 meses"
                    },
                    {
                        id: 9,
                        author_name: "Carmen Ruiz",
                        profile_photo_url: "https://via.placeholder.com/40x40/e91e63/ffffff?text=CR",
                        rating: 5,
                        text: "Fantástico lugar. Me han atendido siempre muy bien y los precios son competitivos.",
                        time: "hace 3 meses"
                    },
                    {
                        id: 10,
                        author_name: "Miguel Torres",
                        profile_photo_url: "https://via.placeholder.com/40x40/3f51b5/ffffff?text=MT",
                        rating: 4,
                        text: "Buena experiencia. El lugar está bien ubicado y el personal es atento.",
                        time: "hace 3 meses"
                    }
                ];

                // Simular más páginas de reseñas
                if (page === 2) {
                    return [
                        {
                            id: 11,
                            author_name: "Sofia Méndez",
                            profile_photo_url: "https://via.placeholder.com/40x40/009688/ffffff?text=SM",
                            rating: 5,
                            text: "Atención de primera clase. Me resolvieron todo muy rápido y con mucha paciencia.",
                            time: "hace 4 meses"
                        },
                        {
                            id: 12,
                            author_name: "Fernando Castro",
                            profile_photo_url: "https://via.placeholder.com/40x40/8bc34a/ffffff?text=FC",
                            rating: 4,
                            text: "Muy satisfecho con el servicio. Definitivamente volveré a elegirlos.",
                            time: "hace 4 meses"
                        },
                        {
                            id: 13,
                            author_name: "Valeria Jiménez",
                            profile_photo_url: "https://via.placeholder.com/40x40/673ab7/ffffff?text=VJ",
                            rating: 5,
                            text: "Excepcional en todo sentido. Calidad, precio y trato personal inmejorable.",
                            time: "hace 5 meses"
                        },
                        {
                            id: 14,
                            author_name: "Ricardo Morales",
                            profile_photo_url: "https://via.placeholder.com/40x40/ff9800/ffffff?text=RM",
                            rating: 4,
                            text: "Muy buen servicio, aunque el tiempo de espera podría mejorar un poco.",
                            time: "hace 5 meses"
                        },
                        {
                            id: 15,
                            author_name: "Elena Vargas",
                            profile_photo_url: "https://via.placeholder.com/40x40/f44336/ffffff?text=EV",
                            rating: 5,
                            text: "Excelente lugar. Lo recomiendo totalmente, muy profesionales y amables.",
                            time: "hace 6 meses"
                        },
                        {
                            id: 16,
                            author_name: "Andrés Delgado",
                            profile_photo_url: "https://via.placeholder.com/40x40/2196f3/ffffff?text=AD",
                            rating: 4,
                            text: "Buena atención y productos de calidad. Precios competitivos en el mercado.",
                            time: "hace 6 meses"
                        },
                        {
                            id: 17,
                            author_name: "Mónica Herrera",
                            profile_photo_url: "https://via.placeholder.com/40x40/4caf50/ffffff?text=MH",
                            rating: 5,
                            text: "Siempre recibo un trato excepcional. Es mi lugar de confianza para estas cosas.",
                            time: "hace 7 meses"
                        },
                        {
                            id: 18,
                            author_name: "Gabriel Ramírez",
                            profile_photo_url: "https://via.placeholder.com/40x40/ffeb3b/ffffff?text=GR",
                            rating: 3,
                            text: "Está bien en general, aunque creo que podrían mejorar algunos aspectos del servicio.",
                            time: "hace 7 meses"
                        },
                        {
                            id: 19,
                            author_name: "Cristina Aguilar",
                            profile_photo_url: "https://via.placeholder.com/40x40/e91e63/ffffff?text=CA",
                            rating: 5,
                            text: "Fantástico servicio al cliente. Resolvieron todas mis dudas con mucha profesionalidad.",
                            time: "hace 8 meses"
                        },
                        {
                            id: 20,
                            author_name: "Javier Ortega",
                            profile_photo_url: "https://via.placeholder.com/40x40/9e9e9e/ffffff?text=JO",
                            rating: 4,
                            text: "Muy recomendable. Buena relación calidad-precio y atención personalizada.",
                            time: "hace 8 meses"
                        }
                    ];
                } else if (page === 3) {
                    return [
                        {
                            id: 21,
                            author_name: "Paola Vega",
                            profile_photo_url: "https://via.placeholder.com/40x40/00bcd4/ffffff?text=PV",
                            rating: 5,
                            text: "Excelente servicio desde el primer momento. Muy satisfecha con la experiencia.",
                            time: "hace 9 meses"
                        },
                        {
                            id: 22,
                            author_name: "Sergio Mendoza",
                            profile_photo_url: "https://via.placeholder.com/40x40/ff5722/ffffff?text=SM",
                            rating: 4,
                            text: "Muy buena atención y productos de calidad. Lo recomiendo sin dudas.",
                            time: "hace 9 meses"
                        },
                        {
                            id: 23,
                            author_name: "Isabella Rojas",
                            profile_photo_url: "https://via.placeholder.com/40x40/8e24aa/ffffff?text=IR",
                            rating: 5,
                            text: "Increíble lugar. Siempre me atienden con mucha paciencia y profesionalismo.",
                            time: "hace 10 meses"
                        }
                    ];
                }

                return baseReviews;
            }

            async init() {
                try {
                    this.showLoading(true);
                    
                    // Simular llamada a API
                    await this.delay(1000);
                    
                    // En producción, aquí harías la llamada real a Google Places API
                    this.allReviews = this.getMockReviews();
                    
                    this.displayInitialReviews();
                    this.setupLoadMoreButton();
                    
                } catch (error) {
                    this.showError('Error al cargar las reseñas. Por favor, intente más tarde.');
                } finally {
                    this.showLoading(false);
                }
            }

            displayInitialReviews() {
                const initialReviews = this.allReviews.slice(0, this.maxInitialReviews);
                this.renderReviews(initialReviews);
                this.displayedReviews = initialReviews.length;
            }

            setupLoadMoreButton() {
                if (this.allReviews.length > this.maxInitialReviews) {
                    this.loadMoreBtn.style.display = 'block';
                    this.loadMoreBtn.addEventListener('click', () => this.loadMoreReviews());
                }
            }

            loadMoreReviews() {
                const remainingReviews = this.allReviews.slice(this.displayedReviews, this.maxTotalReviews);
                this.renderReviews(remainingReviews);
                this.displayedReviews += remainingReviews.length;

                if (this.displayedReviews >= this.maxTotalReviews || this.displayedReviews >= this.allReviews.length) {
                    this.loadMoreBtn.style.display = 'none';
                }
            }

            renderReviews(reviews) {
                reviews.forEach(review => {
                    const reviewElement = this.createReviewElement(review);
                    this.reviewsContainer.appendChild(reviewElement);
                });
            }

            createReviewElement(review) {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review-item';

                const headerDiv = document.createElement('div');
                headerDiv.style.cssText = `
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                `;

                const avatar = document.createElement('img');
                avatar.src = review.profile_photo_url;
                avatar.alt = review.author_name;
                avatar.style.cssText = `
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 12px;
                    border: 2px solid #ddd;
                `;

                const userInfo = document.createElement('div');
                userInfo.style.cssText = 'flex: 1;';

                const userName = document.createElement('div');
                userName.textContent = review.author_name;
                userName.style.cssText = `
                    font-weight: bold;
                    font-size: 14px;
                    color: #333;
                `;

                const reviewTime = document.createElement('div');
                reviewTime.textContent = review.time;
                reviewTime.style.cssText = `
                    font-size: 12px;
                    color: #666;
                    margin-top: 2px;
                `;

                const starsDiv = document.createElement('div');
                starsDiv.innerHTML = this.generateStars(review.rating);
                starsDiv.style.cssText = 'margin-left: 8px;';

                userInfo.appendChild(userName);
                userInfo.appendChild(reviewTime);

                headerDiv.appendChild(avatar);
                headerDiv.appendChild(userInfo);
                headerDiv.appendChild(starsDiv);

                const commentDiv = document.createElement('div');
                commentDiv.textContent = review.text;
                commentDiv.style.cssText = `
                    color: #444;
                    line-height: 1.4;
                    font-size: 14px;
                `;

                reviewDiv.appendChild(headerDiv);
                reviewDiv.appendChild(commentDiv);

                return reviewDiv;
            }

            generateStars(rating) {
                let stars = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= rating) {
                        stars += '<span style="color: #ffa500; font-size: 16px;">★</span>';
                    } else {
                        stars += '<span style="color: #ddd; font-size: 16px;">★</span>';
                    }
                }
                return stars;
            }

            showLoading(show) {
                this.loadingDiv.style.display = show ? 'block' : 'none';
            }

            showError(message) {
                this.errorDiv.textContent = message;
                this.errorDiv.style.display = 'block';
            }

            delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            

            // Método para integrar con Google Places API (ejemplo)
            async fetchGoogleReviews(placeId) {
                // NOTA: Esto requiere configuración del servidor y clave API
                /*
                const response = await fetch(`/api/reviews/${placeId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener reseñas');
                }
                return await response.json();
                */
                
                // Por ahora devuelve datos mock
                return this.getMockReviews();
            }
        }

        // Inicializar cuando el DOM esté listo
        document.addEventListener('DOMContentLoaded', () => {
            new GoogleReviewsManager();
        });