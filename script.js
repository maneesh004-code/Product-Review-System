
        // Product page functionality
        function changeMainImage(thumbnail) {
            document.getElementById('mainImage').src = thumbnail.src;
            document.getElementById('mainImage').alt = thumbnail.alt;
        }

        function selectVariant(element, value) {
            // Remove selected style from all siblings
            const siblings = element.parentElement.children;
            for (let sibling of siblings) {
                sibling.classList.remove('selected-variant');
            }
            // Add selected style to clicked element
            element.classList.add('selected-variant');
            // In a real app, you would update the product data here
        }

        let quantity = 1;
        function updateQuantity() {
            document.getElementById('quantity').textContent = quantity;
        }
        function incrementQuantity() {
            quantity++;
            updateQuantity();
        }
        function decrementQuantity() {
            if (quantity > 1) {
                quantity--;
                updateQuantity();
            }
        }

        function addToCart() {
            alert('Added to cart!');
        }

        function buyNow() {
            alert('Proceeding to checkout!');
        }

        // Review modal functionality
        function openReviewModal() {
            document.getElementById('reviewModal').classList.remove('hidden');
        }

        function closeReviewModal() {
            document.getElementById('reviewModal').classList.add('hidden');
        }

        function setRating(rating) {
            const stars = document.querySelectorAll('#ratingStars .star');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('filled');
                } else {
                    star.classList.remove('filled');
                }
            });
        }

        function submitReview() {
            const title = document.getElementById('reviewTitle').value;
            const text = document.getElementById('reviewText').value;
            const stars = document.querySelectorAll('#ratingStars .star.filled').length;
            
            if (stars === 0) {
                alert('Please provide a rating');
                return;
            }
            
            if (!title || !text) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real app, you would submit to backend here
            alert('Thank you for your review!');
            closeReviewModal();
        }
   